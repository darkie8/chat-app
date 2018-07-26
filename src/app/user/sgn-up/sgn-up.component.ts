import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ChatAppService } from '../../chat-app.service';
import { Router } from '../../../../node_modules/@angular/router';
import { ToastsManager } from '../../../../node_modules/ng6-toastr';

@Component({
  selector: 'app-sgn-up',
  templateUrl: './sgn-up.component.html',
  styleUrls: ['./sgn-up.component.css']
})
export class SgnUpComponent implements OnInit {

  constructor(public সাইনআপকৃত্যক: ChatAppService,
    public রাউটার: Router,
    private টোস্টার: ToastsManager,
    ভিসিয়ার: ViewContainerRef) {
    টোস্টার.setRootViewContainerRef(ভিসিয়ার);
  }
  public firstName: any;
  public lastName: any;
  public mobile: any;
  public email: any;
  public password: any;
  public apiKey: any;
  ngOnInit() {
  }
  public goToSignIn: any = () => {

    this.রাউটার.navigate(['/']);

  } // end goToSignIn

  /**
   * সাইন_আপ_প্রক্রিয়া
   */
  public signUp: any = () => {
    if (!this.firstName) {
      this.টোস্টার.warning('নাম অন্তর্ভুক্ত করুন');


    } else if (!this.lastName) {
      this.টোস্টার.warning('পদবী অন্তর্ভুক্ত করুন');

    } else if (!this.mobile) {
      this.টোস্টার.warning('মোবাইল নাম্বার অন্তর্ভুক্ত করুন');

    } else if (!this.email) {
      this.টোস্টার.warning('ইমেইল অন্তর্ভুক্ত করুন');

    } else if (!this.password) {
      this.টোস্টার.warning('পাসওয়ারড অন্তর্ভুক্ত করুন');


    } else if (!this.apiKey) {
      this.টোস্টার.warning('এপিআই চাবি অন্তর্ভুক্ত করুন');

    } else {

      // tslint:disable-next-line:prefer-const
      let তথ্য = {
        নাম: this.firstName,
        পদবী: this.lastName,
        মোবাইল: this.mobile,
        ইমেইল: this.email,
        পাসওয়ারড: this.password,
        এপিআইচাবি: this.apiKey
      };

      console.log(তথ্য);
      this.সাইনআপকৃত্যক.সাইন_আপ_প্রক্রিয়া(তথ্য).subscribe(
        (এপিয়াইপ্রতিক্রিয়া) => {

          console.log(এপিয়াইপ্রতিক্রিয়া);

          if (এপিয়াইপ্রতিক্রিয়া.status === 200) {

            this.টোস্টার.success('সাইনআপ সাফল্য লাভ করেছে!');

            setTimeout(() => {

              this.goToSignIn();

            }, 2000);

          } else {

            this.টোস্টার.error(এপিয়াইপ্রতিক্রিয়া.message);

          }

        },
        (ভুল) => {
          this.টোস্টার.error('কিছু অনুসঙ্গতি দেখা গেছে!! ');
        }

      );
    }
  }
}
