import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Shoe } from '../shoe.model';
import { ShoeService } from '../shoe.service';

@Component({
  selector: 'app-shoe-detail',
  templateUrl: './shoe-detail.component.html',
  styleUrls: ['./shoe-detail.component.css']
})
export class ShoeDetailComponent implements OnInit{
  shoe!: Shoe;
  id!: number;

  constructor(
    private shoeService: ShoeService,
    private route: ActivatedRoute,
    private router: Router,
    private dataStorageService: DataStorageService
    ){}

    ngOnInit(){
      this.route.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id'];
            this.shoe = this.shoeService.getShoe(this.id);
          }
        )
    }

    onDelete(id: number){
      this.shoeService.deleteShoe(id);
      this.dataStorageService.storeShoes();
      this.router.navigate(['/shoes']);
    }
}
