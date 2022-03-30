import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginpageRoutingModule } from './loginpage-routing.module';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { FormpageComponent } from './components/formpage/formpage.component';
import { DisplaypageComponent } from './components/displaypage/displaypage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainpageComponent,
    FormpageComponent,
    DisplaypageComponent
  ],
  imports: [
    CommonModule,
    LoginpageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginpageModule { }
