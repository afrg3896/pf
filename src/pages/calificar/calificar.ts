import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';



@IonicPage()
@Component({
  selector: 'page-calificar',
  templateUrl: 'calificar.html',
})
export class CalificarPage {
  claridad:number = 1;
  facilidad:number = 1;
  costo:number = 1;
  duracion:number = 1;
  aceptacion:number = 1;
  agrado:number = 1;
  item:any;
  rating:number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController,
               public afDB:AngularFireDatabase) {
                this.item = this.navParams.get('post');
                console.log(this.item);
                console.log(this.item[1]);
  }

  onChangeTrain() {
  }

  cerrar_modal(){
    this.viewCtrl.dismiss();
  }

  calificar_modal(){
    let valorfirebase = this.item.rating;
    console.log(valorfirebase)
    let calificacion = (this.claridad + this.facilidad +this.costo + this.duracion + this.aceptacion + this.agrado)/6;
    console.log(calificacion);
    if(valorfirebase == 0){
      this.rating = calificacion;
      console.log(this.rating);
    }else{
      this.rating = (valorfirebase+ calificacion)/2;
      console.log(this.rating);
    }
    this.afDB.object(`/post/${this.item.key}`).update({rating:this.rating});
    this.cerrar_modal();
  }
}
