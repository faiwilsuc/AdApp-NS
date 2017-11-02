import { Component,OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
// impsort { TNSFontIconService } from "nativescript-ng2-fonticon";
import { Page } from "ui/page";
import { HomeTenantService } from "./shared/home-tenant.service";
import { DataService } from "../../shared/data.service";

@Component({
    selector: "fiberx-home-tenant",
    templateUrl: "pages/home-tenant/home-tenant.component.html",
    styleUrls: ["pages/home-tenant/home-tenant.component.css"],
    providers: [HomeTenantService]
})

export class HomeTenantComponent implements OnInit {

   
    /** Represents HomeTenantComponent
     * @constructor { HomeTenantComponent } HomeTenantComponent
     * @param { Page } page - Home Tenant Page
     * @param { RouterExtensions } routerExtensions - Routing Extension
     * @param { TNSFontIconService } fonticon - FontAwesome Icons
     */
    tabItems:any[] = [{name:"All CATEGORIES"}];
    featuredList:any[];
    popularList:any[];
    recentList:any[];
    isLoading = false;
    listLoaded = false;
    selectedIndex = 0;
    constructor(page: Page, private routerExtensions: RouterExtensions, private homeTenantService: HomeTenantService, private dataService: DataService ) {
        
    }

    ngOnInit() {
         this.homeTenantService.getData().subscribe((items) => {
             this.dataService.setData(items);
             let data :any[] = items.categories;
             for(let i = 0; i < data.length; i ++){
                 this.tabItems.push(data[i]);
             }

             this.featuredList = items.featured;
             this.popularList = items.popular;
             this.recentList = items.recent;
        }, error => console.dump(error));
          
    }

    public gotoList(selIndex){
        this.routerExtensions.navigate(["list",selIndex], { clearHistory: true});
    }

    public onMenu(){

        this.routerExtensions.navigate(["menu"], {clearHistory: true, transition: {
                        name: "slideRight"
                    }});

    }

    public onToggle(){
        alert("click Toggle");

    }

    public onSearch(){
        alert("click Search");

    }

    public onDetail(){
         this.routerExtensions.navigate(["detail"], {clearHistory: true, transition: {
                        name: "slideRight"
                    }});
    }
   
}
