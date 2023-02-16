import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { Shoe } from "./shoe.model";
import { DataStorageService } from "../shared/data-storage.service";
import { ShoeService } from "./shoe.service";

@Injectable({providedIn: 'root'})
export class ShoesResolverService implements Resolve<Shoe[]>{
  constructor(private dataStorageService: DataStorageService, private shoeService: ShoeService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const shoes = this.shoeService.getShoes();

    if(shoes.length === 0){
      return this.dataStorageService.fetchShoes();
    }else{
      return shoes;
    }
  }
}
