import { Component, OnInit } from '@angular/core';
import { Shoe } from '../shoes/shoe.model';
import { ShoeService } from '../shoes/shoe.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{
  shoppingCartItems: Shoe[] = [];
  sum: number = 0;


  constructor(private shoeService: ShoeService){}

  ngOnInit(){
    this.shoppingCartItems = this.shoeService.getCartItems();
    this.shoppingCartItems.forEach(x => this.sum += Number(x.price));
  }

  onCheckout(){
    this.shoeService.emptyCart();
    this.sum = 0;
    this.shoppingCartItems = this.shoeService.getCartItems();
  }

  onDeleteItem(){
    this.shoeService.emptyCart();
    this.sum = 0;
    this.shoppingCartItems = this.shoeService.getCartItems();
  }
}
