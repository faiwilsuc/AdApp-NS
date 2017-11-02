import { Component, Injector } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Http } from "@angular/http";

import { RouterExtensions } from "nativescript-angular/router";

import { Page } from "ui/page";

import { LoginService } from "./shared/login.service";
// import { ErrorNotifierService } from '../../shared/services/error-notifier';
import { Login } from "./shared/login.model";

@Component({
    selector: "fiberx-login",
    templateUrl: "pages/login/login.component.html",
    styleUrls: ["pages/login/login.component.css"],
    providers: [LoginService]
})

export class LoginComponent {

    login: Login;
    requiredEmail: boolean;
    inValidEmail: boolean;

    requiredPassword: boolean;
    viewContent: boolean;

    constructor(page: Page, private routerExtensions: RouterExtensions, private routeParams: ActivatedRoute, private loginService: LoginService, private injector: Injector) {
        this.login = new Login();
        page.actionBarHidden = true;

       // Validation Message
        this.requiredEmail = false;
        this.inValidEmail = false;
        this.requiredPassword = false;
        this.viewContent = true;
              
        // Get the 
        this.routeParams.params.subscribe((params) => {
            if (params["userName"] !== undefined) {
                this.login.email = params["email"];
                console.log("User :" + params["email"]);
            }
        });
    }

    /** On Login button click */
    public onLogin() {
        if (this.login.email === undefined) {
            // If mobile no. not entered, then show the message that please enter mobile no
            this.requiredEmail = true;
            return;
        }
        else if (this.login.password === undefined) {
            // If password not entered, then show the message that please enter password
            this.requiredPassword = true;
            return;
        }
       
        else {
            // User enter the valida Us mobile number.
            this.requiredEmail = false;
            this.inValidEmail = false;
            this.requiredPassword = false;

            this.viewContent = false;
            this.routerExtensions.navigate(["home"], {clearHistory: true});
   
            // this.loginService.login(this.login).subscribe(
            //     (response) => {
            //         console.dump(response)     
                    
            //     },
            //     (error) => {

            //         this.viewContent = true;

            //         // Show error when login failed
            //         alert("Unfortunately we could not find your account.")
            //     }
            // );

        }
    }

    /** On ForgotPassword button click */
    public onForgotPassword() {
        alert("ForgotPassword button pressed");
    }

    /** On SignupFree button click */
    public onSignupFree() {
        alert("SignupFree button pressed");
    }

    /** On Facebook button click */
    public onFacebookLogin() {
         alert("FacebookLogin button pressed");
    }

    /** On Google button click */
    public onGoogleLogin() {
        alert("GoogleLogin button pressed");
    }

    public onPreview(){
        alert("on preview");
    }
}