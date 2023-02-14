import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Shoe } from "./shoe.model";

@Injectable({providedIn: 'root'})
export class ShoeService{

  private shoes: Shoe[] = [
    new Shoe(
      'Nike Air Force 1 07',
      'https://images.unsplash.com/photo-1626379616459-b2ce1d9decbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWlyJTIwZm9yY2UlMjAxfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      110,
      "The GOAT of all white sneakers! What else can you say?"
    ),
    new Shoe(
      'Vans Old Skool',
      'https://images.vans.com/is/image/Vans/VN000D3HY28-HERO?hei=1024&wid=1024&qlt=95',
      50,
      "Classic canvas sneakers that go well with every outfit."
    ),
    new Shoe(
      'Nike Air Force 1 Low "Chili Pepper"',
      'https://static.footshop.com/805108-full_product/241051.jpg',
      200,
      "Anniversary Edition Air Force 1s is covered in chili-inspired elements, including an orange-red suede upper contrasted with ivory-toned overlays on the mudguard, lacing system, Swoosh and more."
    )
  ];

  getShoes(){
    return this.shoes.slice();
  }

  getShoe(index: number){
    return this.shoes[index];
  }

  addShoe(shoe: Shoe){
    this.shoes.push(shoe);
    return this.shoes.slice();
  }

  deleteShoe(index: number){
    this.shoes.splice(index, 1);
    return this.shoes.slice();
  }

}
