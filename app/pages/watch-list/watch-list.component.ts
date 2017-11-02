import { Component,OnInit} from "@angular/core";

import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../shared/data.service";

import { Page } from "ui/page";
@Component({
	selector: 'watch-list',
	templateUrl: 'pages/watch-list/watch-list.component.html',
	styleUrls: ['pages/watch-list/watch-list.component.css']
})

export class WatchListComponent implements OnInit {
	
	
	dataList:any[];
	tabItems:any[] = [{name:"ALL"}];
	selectedIndex = 0;
	sortList:any[];
	isIcons:boolean;
	isSort:boolean;
	isDetail:boolean;

	constructor(page: Page, private routerExtensions: RouterExtensions, private routeParams: ActivatedRoute, private dataService: DataService) { }

	ngOnInit() {
		this.sortList = ["More recent first","Nearest first","Price: Low to High", "Price: High to Low"];
		this.isIcons = true;
		this.isSort = false;
		this.isDetail = false;
		let category_index;
		this.routeParams.params.subscribe((params) => {
			category_index = params["category"];
    	});
		this.dataList = this.dataService.getData().popular; 
		this.dataList.forEach((value,key)=>{
			this.dataList[key].favStatus = false;
		})
		let subCategory = this.dataService.getCategory(category_index-1).subcategories;
		for(let item of subCategory){
			this.tabItems.push(item);
		}

	}

	 public onBack(){
		this.routerExtensions.navigate(["home"], {clearHistory: true, transition: {
                        name: "slideRight"
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

	public onFav(index){
		 this.dataList[index].favStatus = !this.dataList[index].favStatus;
		
	}


}