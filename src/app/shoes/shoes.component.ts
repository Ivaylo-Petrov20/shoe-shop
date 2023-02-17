import { Component, Input, OnInit } from '@angular/core';

import { Shoe } from './shoe.model';
import { ShoeService } from './shoe.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit{
  shoes: Shoe[] = [];

  constructor(private shoeService: ShoeService){}


  ngOnInit(){
    this.shoes = this.shoeService.getShoes();
  }


}
