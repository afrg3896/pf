import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddramPage } from './addram';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@NgModule({
  declarations: [
    AddramPage,
  ],
  imports: [
    IonicPageModule.forChild(AddramPage),
    NgxDatatableModule
  ],
})
export class AddramPageModule {}
