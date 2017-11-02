import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../shared/data.service";

import { Page } from "ui/page";


@Component({
	selector: 'my-ads',
	templateUrl: 'pages/my-ads/my-ads.component.html',
	styleUrls: ['pages/my-ads/my-ads.component.css']
})

export class MyAdsComponent implements OnInit {

	dataList:any[];
	menuStatus:any[]=[false];

	constructor(page: Page, private routerExtensions: RouterExtensions, private routeParams: ActivatedRoute, private dataService: DataService) { }

	ngOnInit() { 
		this.dataList = this.dataService.getData().popular;
		this.dataList.forEach((value,key)=>{
			this.dataList[key].menuStatus = false;
		})
	}

	public onBack(){
		this.routerExtensions.navigate(["home"], {clearHistory: true, transition: {
                        name: "slideRight"
                    }});		
	}

    public onSearch(){
        alert("click Search");

    }

	public onMenu(index){
		// let dialogs = require("ui/dialogs");
		// dialogs.alert("Your message").then(()=> {
    	// 	console.log("Dialog closed!");
		// });
		
		this.dataList[index].menuStatus = true;
	}

	public onEdit(index){
		 this.dataList[index].menuStatus = false;
		
	}

	public onDelete(index){
		this.dataList[index].menuStatus = false;

	}

	


}