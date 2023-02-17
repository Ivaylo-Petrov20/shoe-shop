import { Component, Input } from '@angular/core';
import { Shoe } from '../shoe.model';
import { ShoeService } from '../shoe.service';

@Component({
  selector: 'app-shoe-item',
  templateUrl: './shoe-item.component.html',
  styleUrls: ['./shoe-item.component.css']
})
export class ShoeItemComponent {
  @Input() shoe!: Shoe;

  @Input() shoeIndex!: number;

  constructor(private shoeService: ShoeService){}

  onAddToCart(){
    this.shoeService.addToCart(this.shoe);
  }

}
