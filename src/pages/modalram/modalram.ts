import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from '@angular/fire/database';

@IonicPage()
@Component({
  selector: 'page-modalram',
  templateUrl: 'modalram.html',
})
export class ModalramPage {
  item:any;
  myFormRam: FormGroup;
  userid:string;
  u:any = [];
  info = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController,
              public formBuilder: FormBuilder, public afAuth: AngularFireAuth, public afDatabase:AngularFireDatabase) {
                this.buildForm();
                this.item = this.navParams.get('item');
                console.log(this.item);
                this.afAuth.authState.subscribe(user =>{
                  if(user){
                    this.userid = user.uid;
                    console.log(this.userid);
                    this.getdata(this.userid).then((res:any)=>{
                      this.u=res;
                      this.u.map(element=>{
                        this.info.push(element);
                      })
                    });
                    console.log(this.info);
                  }
                });
  }

  cerrar_modal(){
    this.viewCtrl.dismiss();
  }

  async addRam(){
  }

  buildForm(){
    this.myFormRam = this.formBuilder.group({
      cedulaexp:['', Validators.required],
      servicio:['', Validators.required],
      expedicion:['', Validators.required],
      lugar:['', Validators.required],
      dia:["1"],
      mes:["Enero"],
      year:["2019"],
      aceptacion:["si"],
      
    });
  }
  getdata(uid){
    var promise  = new Promise ((resolve, reject)=>{
      this.afDatabase.database.ref(`usuarios/`).child(uid).child(`info`).once('value', (snapshot) =>{
        let temparr = [];
         temparr.push({
             nombre:snapshot.val().nombre,
             apellido:snapshot.val().apellido,
             cedula:snapshot.val().cedula
           });
          resolve(temparr);
        }).catch((err)=>{
          reject(err);
      })
    })
    return promise;
 }
}
