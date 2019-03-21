import { Component, ViewChild } from '@angular/core';
import { NavController, Nav, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public rows : any;
  public columns : any;
  pages: Array<{title: string, component:any , openTab?:any}>;

  constructor(public navCtrl: NavController, public navParams:NavParams, 
              public afAuth: AngularFireAuth) {
                this.columns = [
                  { prop: 'name' },
                  { name: 'Summary' },
                  { name: 'Company' }
                ];
                this.rows = 
                     {
                        "name" : "Ionic Framework",
                        "summary" : "Hybrid application development framework",
                        "company" : "Drifty"
                     },
                     {
                        "name" : "Angular",
                        "summary" : "Front-end development framework",
                        "company" : "Google"
                     },
                     {
                        "name" : "TypeScript",
                        "summary" : "Superset of JavaScript",
                        "company" : "Microsoft"
                     },
                     {
                        "name" : "Apache Cordova",
                        "summary" : "Native application development framework",
                        "company" : "Apache"
                     },
                     {
                        "name" : "Ionic Native",
                        "summary" : "Apache Cordova compatible plugins",
                        "company" : "Drifty"
                     },
                     {
                        "name" : "HTML5",
                        "summary" : "Mark-up language and API's",
                        "company" : "W3C"
                     },
                     {
                        "name" : "Sass",
                        "summary" : "CSS pre-processor",
                        "company" : "W3C"
                     },
                     {
                        "name" : "Ionic CLI",
                        "summary" : "The engine behind the framework",
                        "company" : "Drifty"
                     },
                     {
                        "name" : "Stencil",
                        "summary" : "Web component generator",
                        "company" : "Drifty"
                     },
                     {
                        "name" : "Firebase",
                        "summary" : "Backend as a Service (BaaS)",
                        "company" : "Firebase/Google"
                     },
                     {
                        "name" : "MongoDB",
                        "summary" : "NoSQL database solution",
                        "company" : "Mongo"
                     },
                     {
                        "name" : "PHP",
                        "summary" : "Server-side scripting language",
                        "company" : "Zend"
                     },
                     {
                        "name" : "MySQL",
                        "summary" : "Popular open-source database",
                        "company" : "Oracle"
                     },
                     {
                        "name" : "PouchDB",
                        "summary" : "Client-side NoSQL database abstraction solution",
                        "company" : "PouchDB"
                     },
                     {
                        "name" : "CouchDB",
                        "summary" : "Server-side NoSQL database solution",
                        "company" : "CouchDB"
                     }
                  
  }

  logout(){
    this.signOut();
    this.navCtrl.setRoot(LoginPage);
  }
  signOut(): Promise<void> {
    return this.afAuth.auth.signOut();
  }
}
