import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { HomeTenantComponent } from "./pages/home-tenant/home-tenant.component";
import { ListComponent } from "./pages/list/list.component";
import { MenuComponent } from "./pages/menu/menu.component";
import { CategoryComponent } from "./pages/category/category.component";
import { SubCategoryComponent } from "./pages/sub-category/sub-category.component";
import { BrowseComponent } from "./pages/browse/browse.component";
import { WatchListComponent } from "./pages/watch-list/watch-list.component";
import { MyAdsComponent } from "./pages/my-ads/my-ads.component";
import { DetailComponent } from "./pages/detail/detail.component";


export const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "home", component: HomeTenantComponent },
    { path: "list/:category", component: ListComponent },
    { path: "menu", component: MenuComponent },
    { path: "category", component: CategoryComponent },
    { path: "subcategory/:category", component: SubCategoryComponent },
    { path: "browse/:category", component: BrowseComponent },
    { path: "watchlist/:category", component: WatchListComponent },
    { path: "myads", component: MyAdsComponent },
    { path: "detail", component: DetailComponent },


];

export const navigatableComponents = [
  LoginComponent,
  RegisterComponent,
  HomeTenantComponent,
  ListComponent,
  MenuComponent,
  CategoryComponent,
  SubCategoryComponent,
  BrowseComponent,
  WatchListComponent,
  MyAdsComponent,
  DetailComponent 
];