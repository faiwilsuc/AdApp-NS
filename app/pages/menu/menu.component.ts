import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
	selector: 'menu',
	templateUrl: 'pages/menu/menu.component.html',
	styleUrls: ['pages/menu/menu.component.css']
})

export class MenuComponent implements OnInit {

	isLogin:boolean=true;

	constructor(private page: Page, private routerExtensions: RouterExtensions) { 
		// page.backgroundImage = "~/images/menu2.png";
	}
	
	ngOnInit() { 
		// this.page.backgroundImage = "~/images/menu2.png";
	}
	
	public onHome(){
		this.routerExtensions.navigate(["home"], {clearHistory: true, transition: {
                        name: "slideLeft"
                    }});

	}

	public onPost(){
		// this.routerExtensions.navigate(["post"], {clearHistory: true, transition: {
        //                 name: "slideRight"
        //             }});
		alert("onPost");			

	}

	public onMessage(){
		// this.routerExtensions.navigate(["message"], {clearHistory: true, transition: {
        //                 name: "slideRight"
        //             }});
        alert("onMessage");					

	}

	public onAds(){
		this.routerExtensions.navigate(["myads"], {clearHistory: true, transition: {
                        name: "slideRight"
                    }});

	}

	public onBrowse(){
		this.routerExtensions.navigate(["category"], {clearHistory: true, transition: {
                        name: "slideLeft"
                    }});		

	}

	public onWatchList(){
		this.routerExtensions.navigate(["watchlist","1"], {clearHistory: true, transition: {
                        name: "slideRight"
                    }});

	}

	public onLogout(){
		this.isLogin = false;
 
	}

	public onLogIn(){
		this.routerExtensions.navigate([""], {clearHistory: true, transition: {
                        name: "slideLeft"
                    }});
 
	}

}