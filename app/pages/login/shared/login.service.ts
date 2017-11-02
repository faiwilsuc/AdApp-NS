import { Injectable } from "@angular/core";

import { Http, Headers } from "@angular/http";

import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { Login } from './login.model';

@Injectable()
export class LoginService {

    constructor(private http: Http) {
    }

    login(login: Login) {
        let header = new Headers();
        header.set("Content-Type", "application/x-www-form-urlencoded");

        return this.http.post("/api-access-key/","email="+ login.email+"&password="+login.password,
            { headers: header }
        ).map(response => response.json());
    }

}