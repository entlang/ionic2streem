import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";

import { Observable } from "rxjs/Rx";
import "rxjs/Rx";

declare var JSON: any;

@Injectable()
export class LoginService {
    private baseUrl:String = "https://api.streem.com.au/v1/";
    private options: any;

    constructor(private http: Http) {
         const headers = new Headers({ 'Content-Type': "application/json" });
         this.options = new RequestOptions({ headers: headers });
    }

    login(body: Object): Observable<any> {
        const bodyString = JSON.stringify(body);
        return this.http.post(this.baseUrl + "sessions", bodyString, this.options)
            .map((res: any) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || "Server error"));
    }

    getMentions(authToken:string, queryParameters, timestamp: any): Promise<any> {
        let url = this.baseUrl + "search?before=" + timestamp +"&auth_token=" + authToken + "&limit=10&query=" + queryParameters;
        return this.http.get(url, this.options)
            .toPromise()
            .then((res: any) => res.json()).catch((err) => {
                console.log(err.message);
            });
    }
}