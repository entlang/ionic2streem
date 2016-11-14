import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Mention } from "../../models/mention";
import { LoginService } from "../../services/login";

import { Observable } from "rxjs/Rx";

@Component({
  selector: 'page-mentions',
  templateUrl: 'mentions.html'
})
export class MentionsPage {
    authToken: string;
    queryParameters: string = '"Donald Trump","Hillary Clinton"';
    startTime:number = 1478696400;
    mentions: Mention[];

    constructor(private navController: NavController, private navParams: NavParams, private loginService: LoginService) {
        this.authToken = navParams.get('auth_token');
        if (this.authToken) {
            this.loginService.getMentions(this.authToken, this.queryParameters, this.startTime).then(res => {
                this.mentions = res;
            });
        }
    }

    doInfinite(infiniteScroll) {
        let timestamp = this.mentions[this.mentions.length - 1].timestamp;
        setTimeout(() => {;
            Observable.fromPromise(this.loginService.getMentions(this.authToken, this.queryParameters, timestamp))
                .subscribe(
                (res) => {
                    for (let mention of res) {
                        this.mentions.push(mention);
                    }
                }
                );

            console.log('Async operation has ended');
            infiniteScroll.complete();
        },
            1000);
    }

}
