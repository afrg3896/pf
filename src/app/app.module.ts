import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ContenidoPage } from '../pages/contenido/contenido';
import { FormularioPage } from '../pages/formulario/formulario';
import { AlumnoPage } from '../pages/alumno/alumno';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { TabsPage } from '../pages/tabs/tabs';
import { PerfilPage } from '../pages/perfil/perfil';
import { ModalchildPage } from '../pages/modalchild/modalchild';
import { SubirimagenPage } from '../pages/subirimagen/subirimagen';
import { RamPage } from '../pages/ram/ram';
import { ChildviewPage } from '../pages/childview/childview';
import { PipesModule } from '../pipes/pipes.module';
import { CargaArchivoProvider } from '../providers/carga-archivo/carga-archivo';
import { SubirvideoPage } from '../pages/subirvideo/subirvideo';
import { CalificarPage } from '../pages/calificar/calificar';
import { ImageviewPage } from '../pages/imageview/imageview';
import { DataTablesModule } from 'angular-datatables';
 //Plugins
 import { Camera } from '@ionic-native/camera';
 import { MediaCapture } from '@ionic-native/media-capture';
 import { File } from '@ionic-native/file';
import { AddramPage } from '../pages/addram/addram';
import { ModalramPage } from '../pages/modalram/modalram';

export const firebaseConfig = {
  apiKey: "AIzaSyCrV05eBmU2nIFYJJd_9Bbdylx9jXi6U1M",
  authDomain: "proyecto1-36eab.firebaseapp.com",
  databaseURL: "https://proyecto1-36eab.firebaseio.com",
  projectId: "proyecto1-36eab",
  storageBucket: "proyecto1-36eab.appspot.com",
  messagingSenderId: "817957689346"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ContenidoPage,
    FormularioPage,
    AlumnoPage,
    ChildviewPage,
    ResetPasswordPage,
    TabsPage,
    PerfilPage,
    ModalchildPage,
    SubirimagenPage,
    SubirvideoPage,
    CalificarPage,
    ImageviewPage,
    RamPage,
    AddramPage,
    ModalramPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    PipesModule,
    DataTablesModule,
    NgxDatatableModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ContenidoPage,
    FormularioPage,
    AlumnoPage,
    ChildviewPage,
    ResetPasswordPage,
    TabsPage,
    PerfilPage,
    ModalchildPage,
    SubirimagenPage,
    SubirvideoPage,
    CalificarPage,
    ImageviewPage,
    RamPage,
    AddramPage,
    ModalramPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    Camera,
    MediaCapture,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CargaArchivoProvider
  ]
})
export class AppModule {}
