import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../shared/data.service";

import { Page } from "ui/page";

@Component({
	selector: 'browse',
	templateUrl: 'pages/browse/browse.component.html',
	styleUrls: ['pages/browse/browse.component.css']
})

export class BrowseComponent implements OnInit {

	dataList:any[];
	star_status:boolean[];
	constructor(page: Page, private routerExtensions: RouterExtensions, private routeParams: ActivatedRoute, private dataService: DataService) { }

	ngOnInit() {
		let category_index;
		this.routeParams.params.subscribe((params) => {
			category_index = params["category"];
    	});
		this.dataList = this.dataService.getData().popular;
		this.dataList.forEach((value,key)=>{
			this.dataList[key].favStatus = false;
		})

	 }

	 public onBack(){
		this.routerExtensions.navigate(["subcategory",3], {clearHistory: true, transition: {
                        name: "slideRight"
                    }});		
	}

	public onNepal(){
		alert("onNepal");
	}

	public onAds(){
		alert("onAds");

	}

	public onToggle(){
        alert("click Toggle");

    }

    public onSearch(){
        alert("click Search");

    }

	public onFav(index){
		 this.dataList[index].favStatus = !this.dataList[index].favStatus;
		
	}
}