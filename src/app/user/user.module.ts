import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SgnUpComponent } from './sgn-up/sgn-up.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, SgnUpComponent]
})
export class UserModule { }
