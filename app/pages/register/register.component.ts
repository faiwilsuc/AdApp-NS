import { Component, ChangeDetectionStrategy } from "@angular/core";

import { RouterExtensions } from "nativescript-angular/router";

import { Page } from "ui/page";

import { Register } from './shared/register.model';

@Component({
  selector: "fiberx-register",
  templateUrl: "pages/register/register.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RegisterComponent {
  // register: Register = { email: "", password:"" };
  register: Register ;
  verify_password: string;
  verify_text: string;

  /** Represents RegisterComponent
   * @constructor { RegisterComponent } RegisterComponent
   * @param { Page } page - Register Page
   * @param { RouterExtensions } routerExtensions - Routing Extension
   */
  constructor(page: Page, private routerExtensions: RouterExtensions) {
    // Hide the actionBar
    this.register = new Register();
    this.register.email = "";
    this.register.password = "";
    this.verify_password = "";
    this.verify_text ="";
    page.actionBarHidden = true;
  }

  /** On Register button press funtion */
  public onTap() {
     this.routerExtensions.navigate([""], {clearHistory: true, transition: {
                        name: "slideRight"
                    }});
   
  }

  public onPassPreview(){
    alert("passPreview");

  }

  public onPassVerifyPreview(){
    alert("PassVerifyPreview");

  }
}