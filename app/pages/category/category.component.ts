import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { DataService } from "../../shared/data.service";
import { Page } from "ui/page";

@Component({
	selector: 'category',
	templateUrl: 'pages/category/category.component.html',
	styleUrls: ['pages/category/category.component.css']
})

export class CategoryComponent implements OnInit {

	categoryList:any[];
	constructor(page: Page, private routerExtensions: RouterExtensions, private dataService: DataService) { }

	ngOnInit() { 
		let data = this.dataService.getData();
		this.categoryList =  data.categories;
	}

	public onBack(){
		this.routerExtensions.navigate(["home"], {clearHistory: true, transition: {
                        name: "slideRight"
                    }});		

	}

	public gotoSubCategory(index){
		this.routerExtensions.navigate(["subcategory",index], {clearHistory: true, transition: {
                        name: "slideRight"
                    }});		

	}
}