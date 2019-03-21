import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RamPage } from '../ram/ram';


@IonicPage()
@Component({
  selector: 'page-addram',
  templateUrl: 'addram.html',
})
export class AddramPage {

  tablestyle = 'bootstrap';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  switchStyle() {
    if (this.tablestyle == 'dark') {
      this.tablestyle = 'bootstrap';
    } else {
      this.tablestyle = 'dark';
    }
  }
  addram(){
    this.navCtrl.push(RamPage);
  }
}
