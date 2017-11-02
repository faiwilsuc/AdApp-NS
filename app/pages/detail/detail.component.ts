import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../shared/data.service";
import { DetailService } from "./shared/detail.service";
import { Page } from "ui/page";


@Component({
	selector: 'detail',
	templateUrl: 'pages/detail/detail.component.html',
	styleUrls: ['pages/detail/detail.component.css']
})

export class DetailComponent implements OnInit {
	dataList:any[] = [];
	popularList:any[];
	imageList:any[];
	apiUrl:string="http://sastoramro.com";
	keyArray:any[];
	valueArray:any[];
	general_data:any;


	constructor(page: Page, private routerExtensions: RouterExtensions, private routeParams: ActivatedRoute, private detailService: DetailService, private dataService: DataService) { }

	ngOnInit() {
		this.detailService.getData().subscribe((items) => {
			this.general_data = items.ad;
			this.imageList = items.ad.images;
			let data = items.ad.spec_data;
			this.keyArray = Object.keys(data);
			this.valueArray = Object.keys(data).map(k => data[k]);
			this.keyArray.forEach((value,key)=>{
				let re = /_/gi; 
				let strKey:string = this.keyArray[key].replace(re," ");
				let temp = {"key":strKey, "value":this.valueArray[key]};
				this.dataList.push(temp);
			})

			this.imageList.forEach((value,key)=>{
			this.imageList[key].imagepath = this.apiUrl+this.imageList[key].path+this.imageList[key].filename;
		})

        }, error => console.dump(error));
		this.popularList = this.dataService.getData().popular;

	 }

	 public onBack(){
		this.routerExtensions.navigate(["home"], {clearHistory: true, transition: {
                        name: "slideRight"
                    }});		
	}

	public onShare(){
		alert("onShare");
	}

	public gotoList(){
		let selIndex = 1;
        this.routerExtensions.navigate(["list",selIndex], { clearHistory: true});
    }

}