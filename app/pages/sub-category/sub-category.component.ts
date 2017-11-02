import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../shared/data.service";

import { Page } from "ui/page";

@Component({
	selector: 'sub-category',
	templateUrl: 'pages/sub-category/sub-category.component.html',
	styleUrls: ['pages/sub-category/sub-category.component.css']
})

export class SubCategoryComponent implements OnInit {
	
	subCategoryList:any[];
	constructor(page: Page, private routerExtensions: RouterExtensions, private routeParams: ActivatedRoute, private dataService: DataService) { }

	ngOnInit() { 
		let data = this.dataService.getData();
		let category_index;
		this.routeParams.params.subscribe((params) => {
			category_index = params["category"];
    	});
		this.subCategoryList =  data.categories[category_index].subcategories;

	}

	public onBack(){
		this.routerExtensions.navigate(["category"], {clearHistory: true, transition: {
                        name: "slideLeft"
                    }});		

	}

	public gotoBrowse(index){
		this.routerExtensions.navigate(["browse",index], {clearHistory: true, transition: {
                        name: "slideRight"
                    }});		

	}
}