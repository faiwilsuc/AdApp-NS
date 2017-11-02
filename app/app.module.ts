import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { routes, navigatableComponents } from "./app.routing";
import { AppComponent } from "./app.component";
import { LoginService } from "./pages/login/shared/login.service";
import { HomeTenantService } from "./pages/home-tenant/shared/home-tenant.service";
import { DetailService } from "./pages/detail/shared/detail.service";
import { DataService } from "./shared/data.service";
import { registerElement } from "nativescript-angular/element-registry";
registerElement("DropDown", () => require("nativescript-drop-down/drop-down").DropDown);


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
      ],
    declarations: [
        AppComponent,
        ...navigatableComponents,
    ],
    providers: [
        LoginService,HomeTenantService,DataService,DetailService

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
