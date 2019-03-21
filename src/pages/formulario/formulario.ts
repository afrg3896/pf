import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RamPage } from '../ram/ram';
import { AddramPage } from '../addram/addram';

@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ir_ram(){
    this.navCtrl.push(AddramPage);
  }
}
