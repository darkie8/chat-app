import {  LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SgnUpComponent } from './sgn-up/sgn-up.component';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { RouterModule, Routes } from '../../../node_modules/@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng6-toastr';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    RouterModule.forChild([{path: 'signUp', component: SgnUpComponent}])
  ],
  declarations: [LoginComponent, SgnUpComponent]
})
export class UserModule { }
