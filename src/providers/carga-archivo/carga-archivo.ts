
import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';

import 'rxjs/add/operator/map';

@Injectable()
export class CargaArchivoProvider {
  imagenes: ArchivoSubir[] = [];
  constructor(public toastCtrl: ToastController,public afDB: AngularFireDatabase,
              public loadingCtrl: LoadingController) {
    
  }

  //Firebase Storage
  cargar_imagen_firebase(archivo:ArchivoSubir){
    let promesa = new Promise((resolve,reject)=>{
      this.mostrar_toast('Subiendo imagen...');
      let storeRef = firebase.storage().ref();
      let nombreArchivo:string = new Date().valueOf().toString();
      let uploadTask: firebase.storage.UploadTask =
          storeRef.child(`img/${nombreArchivo}`)
                  .putString(archivo.img, 'base64', {contentType:'image/jpeg'});
          uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,

            () =>{},
            (error) =>{
              
              console.log('Error al subir ', JSON.stringify(error));
              this.mostrar_toast(JSON.stringify(error));
              reject();
            },
            ()=>{
              
              this.mostrar_toast('imagen cargada correctamente');
              uploadTask.snapshot.ref.getDownloadURL().then(urlImage => {
                this.cargar_imagenes(archivo.titulo, urlImage,archivo.nombre,archivo.rating, nombreArchivo);
                 this.mostrar_toast('URL:' + urlImage);
                }).catch((error) => {
                         console.log(error);
                });
              resolve();
            }
             
            );
    });

    return promesa;
  }
    //Firebase Realdatatime
  private cargar_imagenes(titulo:string, url:string, nombre:string, rating:number, nombreArchivo:string){
      let post: ArchivoSubir = {
        img:url,
        nombre:nombre,
        rating:rating,
        titulo:titulo,
        key:nombreArchivo
      };
      console.log(JSON.stringify(post));
      this.afDB.object(`/post/${nombreArchivo}`).update(post);
  }


    //Firebase Video Realdataime
    private cargar_videos(titulo:string, url:string, nombre:string, rating:number, nombreArchivo:string){
      let post: ArchivoSubir = {
        img:url,
        nombre:nombre,
        rating:rating,
        titulo:titulo,
        key:nombreArchivo
      };
      console.log(JSON.stringify(post));
      this.afDB.object(`/videos/${nombreArchivo}`).update(post);
    }

    //Firebase Storage
  cargar_video_firebase(archivo:ArchivoSubir){

  }

    cargar_imgchild_firebase(imagen:string,userid:string,id:any){
      let promesa = new Promise((resolve,reject)=>{
        this.mostrar_toast('Subiendo imagen...');
        let storeRef = firebase.storage().ref();
        let nombreArchivo:string = new Date().valueOf().toString();
        let uploadTask: firebase.storage.UploadTask =
            storeRef.child(`child/${nombreArchivo}`)
                    .putString(imagen, 'base64', {contentType:'image/jpeg'});
            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
  
              () =>{},
              (error) =>{
                
                console.log('Error al subir ', JSON.stringify(error));
                this.mostrar_toast(JSON.stringify(error));
                reject();
              },
              ()=>{
                
                this.mostrar_toast('imagen cargada correctamente');
                uploadTask.snapshot.ref.getDownloadURL().then(urlImage => {
                  this.cargar_img_child(urlImage,userid,id);
                   this.mostrar_toast('URL:' + urlImage);
                  }).catch((error) => {
                           console.log(error);
                  });
                resolve();
              }
               
              );
      });
  
      return promesa;
    }

    cargar_img_child(url:string,userid, uid:any){
      this.afDB.object(`/usuarios/${userid}/children/${uid}`).update({imagen:url});
    }

  mostrar_toast(mensaje:string){
    this.toastCtrl.create({
      message:mensaje,
      duration: 2000
    }).present();
  }

}

interface ArchivoSubir {
  img: string;
  nombre:string;
  rating:number;
  titulo:string;
  key?:string;
 
}