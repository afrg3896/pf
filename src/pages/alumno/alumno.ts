import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { ModalchildPage } from '../modalchild/modalchild';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { ChildviewPage } from '../childview/childview';

@IonicPage()
@Component({
  selector: 'page-alumno',
  templateUrl: 'alumno.html',
})
export class AlumnoPage {
  userid:string;
  u:any = [];
  child: Observable<any[]>;
  constructor(public navCtrl: NavController,
              public afAuth: AngularFireAuth, 
              public loadingCtrl: LoadingController,
              public afDatabase:AngularFireDatabase, 
              public modalCtrl:ModalController) {
                this.afAuth.authState.subscribe(user =>{
                  if(user){
                    this.userid = user.uid;
                    console.log(this.userid);
                    this.child = afDatabase.list(`/usuarios/${this.userid}/children/`).valueChanges();
                  }
                });
  }

  addmodalChild(){
    let modal = this.modalCtrl.create(ModalchildPage);
    modal.present();
   }

   getData(uid){
    let promise = new Promise((resolve,reject)=>{
      this.afDatabase.database.ref('usuarios/').child(uid).child(`children`).once('value', (snapshot) =>{
        let data = snapshot.val();
        let temparr =[];
        for (var key in data){
          temparr.push(data[key]);
        }
          resolve(temparr);
        }).catch((err)=>{
          reject(err);
        })
    })
  return promise;
  }

  
  irChildView(item:any){
    let modal = this.modalCtrl.create(ChildviewPage, {'item':item});
    modal.present();
    //this.navCtrl.push(ChildviewPage, {'item':item});
  }

}
