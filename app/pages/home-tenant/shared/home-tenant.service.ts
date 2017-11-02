import { Injectable } from "@angular/core";

import { Http, Headers } from "@angular/http";

import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";


@Injectable()
export class HomeTenantService {
    categories:any[];

    constructor(private http: Http) {
    }

    getData(){
        let headers = new Headers();
        headers.append('Accept', 'application/json'); 
        headers.append('Cache-Control','no-cache'); 
        headers.append('Content-Type','application/json');
        return this.http.get("http://sastoramro.com/?token=6dVnwLLRv2643D6Rt6Ys5l7cDmA6kC30")
            .map(response => {
                return response.json()
            })
    }
    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }


   
}
