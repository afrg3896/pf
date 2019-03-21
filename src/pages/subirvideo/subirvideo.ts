import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { CargaArchivoProvider } from '../../providers/carga-archivo/carga-archivo';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-subirvideo',
  templateUrl: 'subirvideo.html',
})
export class SubirvideoPage {
  titulo:string = "";
  userid:string;
  nombre:string;
  videoPreview:string= "";
  disableButton:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController,
    public _cap:CargaArchivoProvider, public afDB:AngularFireDatabase, public afAuth:AngularFireAuth,
    public loadingCtrl: LoadingController) {
      this.afAuth.authState.subscribe(user =>{
        this.userid = user.uid;
        console.log(this.userid);
        this.getdata(this.userid).then((res:any)=>{
          this.nombre=res;
          console.log(this.nombre);  
        });
      });
  }

  cerrar_modal(){
    this.viewCtrl.dismiss();
  }

  grabar(){
    this.disableButton =true;
    let archivo = {
      img:this.videoPreview,
      nombre:this.nombre,
      rating:0,
      titulo:this.titulo
    }
    this._cap.cargar_video_firebase(archivo)
        .then(()=>{
          this.cerrar_modal();
        });
  }
  getdata(uid){
    let promise  = new Promise ((resolve, reject)=>{
      this.afDB.database.ref(`usuarios/`).child(uid).child(`info`).once('value', (snapshot) =>{
        let temparr = snapshot.val().nombre;
          resolve(temparr);
        }).catch((err)=>{
          reject(err);
      })
    })
    return promise;
 }

}
