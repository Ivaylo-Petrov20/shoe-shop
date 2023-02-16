import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { ShoeService } from '../shoes/shoe.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  shoeForm!: FormGroup;


  constructor(
    private route: ActivatedRoute,
    private shoeService: ShoeService,
    private router: Router,
    private dataStorageService: DataStorageService){}

  onSubmit(){
    this.shoeService.addShoe(this.shoeForm.value);
    this.router.navigate(['/shoes']);
    this.dataStorageService.storeShoes();
  }

  onCancel(){
    this.router.navigate(['/shoes']);
  }

  ngOnInit(){
    this.route.params.
    subscribe(() => {
      this.initForm();
    });
  }

  private initForm(){
    let shoeName = '';
    let shoeImagePath = '';
    let shoePrice = '';
    let shoeDescription = '';

    this.shoeForm = new FormGroup({
      'name' : new FormControl(shoeName),
      'imagePath' : new FormControl(shoeImagePath),
      'price' : new FormControl(shoePrice),
      'description': new FormControl(shoeDescription)
    });
  }
}
