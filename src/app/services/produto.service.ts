import { HttpClient } from "@angular/common/http";
import { BaseService } from "./base.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ProdutoService extends BaseService{
    constructor(public override http:HttpClient){ super(http, "/produtos")}


    getAll(){
        let headers = this.getHttpHeaders(); 
        let options = {headers : headers};
        return this.http.get(this.actionUrl,options);  
    }
}