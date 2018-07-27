import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ToastsManager } from 'ng6-toastr/ng2-toastr';
import { ChatAppService } from '../../chat-app.service';
import { SocketChatService } from '../../socket-chat.service';
@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css'],
  providers: [SocketChatService]
})
export class ChatBoxComponent implements OnInit {

  public authToken: any;
  public userInfo: any;
  public receiverId: any;
  public receiverName: any;
  public userList: any = [];
  public disconnectedSocket: boolean;


  constructor(
    public AppService: ChatAppService,
    public SocketService: SocketChatService,
    public router: Router,
    private toastr: ToastsManager,
    vcr: ViewContainerRef
  ) {

    this.receiverId = Cookie.get('receiverId');

    this.receiverName = Cookie.get('receiverName');

    this.toastr.setRootViewContainerRef(vcr);


  }



  ngOnInit() {

    this.authToken = Cookie.get('authtoken');

    this.userInfo = this.AppService.উপলব্ধ_করা_ব্যবহারকারীর_তথ্য_লকাল_স্টরেজে();

    this.checkStatus();

    this.verifyUserConfirmation();

    this.getOnlineUserList();



  }

  public checkStatus: any = () => {

    if (Cookie.get('authtoken') === undefined || Cookie.get('authtoken') === '' || Cookie.get('authtoken') === null) {

      this.router.navigate(['/']);

      return false;

    } else {

      return true;

    }

  } // end checkStatus



  public verifyUserConfirmation: any = () => {

    this.SocketService.verifyUser()
      .subscribe((data) => {

        this.disconnectedSocket = false;

        this.SocketService.setUser(this.authToken);
        this.getOnlineUserList();

      });
  }

  public getOnlineUserList: any = () => {

    this.SocketService.onlineUserList()
      .subscribe((userList) => {

        this.userList = [];

        // tslint:disable-next-line:forin
        for (const x in userList) {

          const temp = { 'userId': x, 'name': userList[x], 'unread': 0, 'chatting': false };

          this.userList.push(temp);

        }

        console.log(this.userList);

      }); // end online-user-list
  }










}
