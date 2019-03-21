import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { SubirimagenPage } from '../subirimagen/subirimagen';
import { SubirvideoPage } from '../subirvideo/subirvideo';
import { ImageviewPage } from '../imageview/imageview';
import { CalificarPage } from '../calificar/calificar';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@IonicPage()
@Component({
  selector: 'page-contenido',
  templateUrl: 'contenido.html',
})
export class ContenidoPage {
  contenido: string = 'imagenes';
  posts: Observable<any[]>;
  videos: Observable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl:ModalController,
              public loadingCtrl: LoadingController, public afDB:AngularFireDatabase) {
    this.loadingCtrl.create({
      content: "Por Favor Espere...",
      duration: 2000
    }).present();
    
    this.posts = afDB.list('post', ref=> ref.orderByChild('key')).valueChanges();
    this.videos = afDB.list('videos', ref=> ref.orderByChild('key')).valueChanges();
  }

  mostrar_modal(){
    let modal = this.modalCtrl.create(SubirimagenPage);
    modal.present();
  }
  mostrar_modalvideo(){
    let modal = this.modalCtrl.create(SubirvideoPage);
    modal.present();
  }
  ver_imagen(post:any){
    let modal = this.modalCtrl.create(ImageviewPage, {'post':post});
    modal.present();
  }

  calificar(post:any){
    let modal = this.modalCtrl.create(CalificarPage, {'post':post});
    modal.present();
  }
}
