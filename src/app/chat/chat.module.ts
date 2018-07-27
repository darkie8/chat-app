import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { RouterModule, Routes } from '../../../node_modules/@angular/router';
import { BrowserAnimationsModule } from '../../../node_modules/@angular/platform-browser/animations';
import { ToastModule } from '../../../node_modules/ng6-toastr';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastModule,
    RouterModule.forChild([{ path: 'chat', component: ChatBoxComponent }])
  ],
  declarations: [ChatBoxComponent]
})
export class ChatModule { }
