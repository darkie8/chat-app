import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { RouterModule, Routes } from '../../../node_modules/@angular/router';
import { BrowserAnimationsModule } from '../../../node_modules/@angular/platform-browser/animations';
import { ToastModule } from '../../../node_modules/ng6-toastr';
import { ShareModule } from '../share/share.module';
import { ChatPipePipe } from '../share/pipe/chat-pipe.pipe';
import { UserDetailsComponent } from '../share/user-details/user-details.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    ShareModule,
    RouterModule.forChild([{ path: 'chat', component: ChatBoxComponent }])
  ],
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [ChatBoxComponent, ChatPipePipe]
})
export class ChatModule { }
