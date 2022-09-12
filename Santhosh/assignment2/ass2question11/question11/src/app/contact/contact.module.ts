import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactusComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule
  ]
})
export class ContactModule { }
