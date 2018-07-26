import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ChatAppService } from '../../chat-app.service';
import { Router } from '../../../../node_modules/@angular/router';
import { ToastsManager } from '../../../../node_modules/ng6-toastr';
import { Cookie } from 'ng2-cookies/ng2-cookies';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: any;
  public password: any;
  constructor(public logInService: ChatAppService, public router: Router, public toastr: ToastsManager,
    vcr: ViewContainerRef) {
    toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }
  public goToSignUp: any = () => {

    this.router.navigate(['/sign-up']);

  } // end goToSignUp

  public signinFunction: any = () => {

    if (!this.email) {
      this.toastr.warning('enter email');


    } else if (!this.password) {

      this.toastr.warning('enter password');


    } else {

      let data = {
        email: this.email,
        password: this.password
      };

      this.logInService.সাইন_আপ_প্রক্রিয়া(data)
        .subscribe((apiResponse) => {

          if (apiResponse.status === 200) {
            console.log(apiResponse);

            Cookie.set('authtoken', apiResponse.data.authToken);

            Cookie.set('receiverId', apiResponse.data.userDetails.userId);

            Cookie.set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);

           // this.logInService.setUserInfoInLocalStorage(apiResponse.data.userDetails);

            this.router.navigate(['/chat']);

          } else {

            this.toastr.error(apiResponse.message);


          }

        }, (err) => {
          this.toastr.error('some error occured');

        });

    } // end condition

  } // end signinFunction
}
