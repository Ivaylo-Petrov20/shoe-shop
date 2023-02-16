import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { Shoe } from "../shoes/shoe.model";
import { ShoeService } from "src/app/shoes/shoe.service";
import { exhaustMap, take, tap } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private shoeService: ShoeService,
    private authService: AuthService) { }

  storeShoes() {
    const shoes = this.shoeService.getShoes();
    this.http.put('https://shoe-shop-project-79c26-default-rtdb.europe-west1.firebasedatabase.app/shoes.json', shoes).subscribe(response => {
      return response;
    });
  }

  fetchShoes() {
    return this.http.get<Shoe[]>(
      'https://shoe-shop-project-79c26-default-rtdb.europe-west1.firebasedatabase.app/shoes.json',
    )
      .pipe(
        tap(shoes => {
          this.shoeService.setShoes(shoes);
        })
      );
  }
}
