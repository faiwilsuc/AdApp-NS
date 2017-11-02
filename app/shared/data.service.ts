import { Injectable } from "@angular/core";

@Injectable()
export class DataService {

	data:any;
    category:any;
	constructor() {

	}

    setData(data){
        this.data = data;
    }

    setCategory(category){
        this.category = category;
    }

    getData(){
        return this.data;
    }

    getCategory(index){
        return this.data.categories[index];
    }


}