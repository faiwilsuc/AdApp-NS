import { Component} from "@angular/core";

import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../shared/data.service";

import { Page } from "ui/page";
@Component({
	selector: 'list',
	templateUrl: "pages/list/list.component.html",

})

export class ListComponent {
	// category_index:any;
	tabItems:any[] = [{name:"ALL"}];
   	selectedIndex = 0;
	popularList:any[];
    recentList:any[];
	isIcons:boolean;
	isDetail:boolean;
	isSort:boolean;
	sortList:any[];

	constructor(page: Page, private routerExtensions: RouterExtensions, private routeParams: ActivatedRoute, private dataService: DataService){
		this.sortList = ["More recent first","Nearest first","Price: Low to High", "Price: High to Low"];
		this.isIcons = true;
		this.isSort = false;
		this.isDetail = false;
		let category_index;
		this.routeParams.params.subscribe((params) => {
			category_index = params["category"];
    	});
		let subCategory:any[];
		if(category_index == 0) category_index =1 ;
		subCategory = dataService.getCategory(category_index-1).subcategories;
		for(let item of subCategory){
			this.tabItems.push(item);
		}

		this.popularList = this.dataService.getData().popular;
		this.recentList = this.dataService.getData().recent;


	}

	 public onMenu(){
        this.routerExtensions.navigate(["menu"], {clearHistory: true, transition: {
                        name: "slideLeft"
                    }});

    }

    public onToggle(){
        alert("click Toggle");

    }

    public onSearch(){
        alert("click Search!");

    }

	 public onSort(){
		this.isSort = !this.isSort;

    }

    public onIcons(){
        // alert("click onIcons");
		this.isIcons = true;
		this.isDetail = false;


    }

    public onDetail(){
        // alert("click onDetail");
		this.isIcons = false;
		this.isDetail = true;

    }

	
}