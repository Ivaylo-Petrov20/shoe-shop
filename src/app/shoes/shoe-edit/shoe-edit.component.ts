import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { ShoeService } from '../shoe.service';

@Component({
  selector: 'app-shoe-edit',
  templateUrl: './shoe-edit.component.html',
  styleUrls: ['./shoe-edit.component.css']
})
export class ShoeEditComponent implements OnInit{
  shoeForm!: FormGroup;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shoeService: ShoeService,
    private dataStorageService: DataStorageService
  ){}

  ngOnInit(){
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.initForm();
      })
  }

  private initForm(){
    let shoeName = '';
    let shoeImagePath = '';
    let shoePrice = +'';
    let shoeDescription = '';

    const shoe = this.shoeService.getShoe(this.id);
    shoeName = shoe.name;
    shoeImagePath = shoe.imagePath;
    shoePrice = shoe.price;
    shoeDescription = shoe.description;


    this.shoeForm = new FormGroup({
      'name' : new FormControl(shoeName),
      'imagePath' : new FormControl(shoeImagePath),
      'price' : new FormControl(shoePrice),
      'description': new FormControl(shoeDescription)
    });
  }

  onSubmit(){
    this.shoeService.updateShoe(this.id, this.shoeForm.value);
    this.dataStorageService.storeShoes();
    this.router.navigate(['/shoes']);
  }

  onCancel(){
    this.router.navigate(['/shoes']);
  }
}
