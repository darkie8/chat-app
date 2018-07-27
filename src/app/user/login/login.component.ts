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
  constructor(public লগইনকৃত্যক: ChatAppService,
    public রাউটার: Router,
    private টোস্টার: ToastsManager,
    ভিসিয়ার: ViewContainerRef) {
    টোস্টার.setRootViewContainerRef(ভিসিয়ার);
  }

  ngOnInit() {
  }
  public goToSignUp: any = () => {

    this.রাউটার.navigate(['/signUp']);

  } // end goToSignUp

  public signinFunction: any = () => {

    if (!this.email) {
      this.টোস্টার.warning('ইমেইল অন্তর্ভুক্ত করুন');

    } else if (!this.password) {
      this.টোস্টার.warning('পাসওয়ারড অন্তর্ভুক্ত করুন');


    } else {

      const তথ্য = {
        ইমেইল: this.email,
        পাসওয়ারড: this.password
      };

      this.লগইনকৃত্যক.লগ_ইন_প্রক্রিয়া(তথ্য)
        .subscribe((এপিয়াইপ্রতিক্রিয়া) => {

          if (এপিয়াইপ্রতিক্রিয়া.status === 200) {
            console.log(এপিয়াইপ্রতিক্রিয়া);
            this.টোস্টার.success('সাইন ইন সাফল্য লাভ করেছে!');
            Cookie.set('authtoken', এপিয়াইপ্রতিক্রিয়া.data.authToken);

            Cookie.set('receiverId', এপিয়াইপ্রতিক্রিয়া.data.userDetails.userId);

            Cookie.set('receiverName', এপিয়াইপ্রতিক্রিয়া.data.userDetails.firstName + ' ' + এপিয়াইপ্রতিক্রিয়া.data.userDetails.lastName);

            this.লগইনকৃত্যক.ধার্য_করা_ব্যবহারকারীর_তথ্য_লকাল_স্টরেজে(এপিয়াইপ্রতিক্রিয়া.data.userDetails);

            setTimeout(() => { this.রাউটার.navigate(['/chat']); }, 2000);



          } else {

            this.টোস্টার.error(এপিয়াইপ্রতিক্রিয়া.message);


          }

        }, (অনুসঙ্গতি) => {
          this.টোস্টার.error('কিছু অনুসঙ্গতি দেখা গেছে!!');

        });

    } // end condition

  } // end signinFunction
}
