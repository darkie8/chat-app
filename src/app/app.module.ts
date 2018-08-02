import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// routing
import { RouterModule, Routes } from '@angular/router';

// http
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
// form
import { FormsModule } from '@angular/forms';
import { ChatModule } from './chat/chat.module';
import { UserModule } from './user/user.module';
import { ShareModule } from './share/share.module';
import { LoginComponent } from './user/login/login.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ChatModule,
    UserModule,
    ShareModule,
    RouterModule.forRoot([{ path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: '', component: LoginComponent },
    { path: '*', component: LoginComponent }], {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
