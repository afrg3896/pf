import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContenidoPage } from '../contenido/contenido';
import { AlumnoPage } from '../alumno/alumno';
import { FormularioPage } from '../formulario/formulario';
import { MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PerfilPage } from '../perfil/perfil';
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1: any = HomePage;
  tab2: any = FormularioPage;
  tab3: any = AlumnoPage;
  tab4: any = ContenidoPage;
  tab5: any = PerfilPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController) {
    this.tab2 = FormularioPage;
    this.tab1 = HomePage;
    this.tab4 = ContenidoPage;
    this.tab3 = AlumnoPage;
    this.tab5 = PerfilPage;
  }

}