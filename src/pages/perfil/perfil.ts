import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from '@angular/fire/database';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  userid:string;
  u:any = [];
  info = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public afAuth: AngularFireAuth, public afDatabase:AngularFireDatabase) {
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

  getdata(uid){
    var promise  = new Promise ((resolve, reject)=>{
      this.afDatabase.database.ref(`usuarios/`).child(uid).child(`info`).once('value', (snapshot) =>{
        let temparr = [];
         temparr.push({
             nombre:snapshot.val().nombre,
             apellido:snapshot.val().apellido,
             email:snapshot.val().email,
             region:snapshot.val().region,
             municipio:snapshot.val().municipio,
             cel:snapshot.val().celular,
             direccion:snapshot.val().direccion,
             imagen:snapshot.val().imagen
           });
          resolve(temparr);
        }).catch((err)=>{
          reject(err);
      })
    })
    return promise;
 }

}
