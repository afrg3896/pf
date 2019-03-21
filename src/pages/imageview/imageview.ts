import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-imageview',
  templateUrl: 'imageview.html',
})
export class ImageviewPage {
  item:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController) {
    this.item = this.navParams.get('post');
  }

  cerrar_modal(){
    this.viewCtrl.dismiss();
  }
}
