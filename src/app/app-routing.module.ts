import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthComponent } from "./auth/auth.component";
import { CreateComponent } from "./create/create.component";
import { ShoeDetailComponent } from "./shoes/shoe-detail/shoe-detail.component";
import { ShoeEditComponent } from "./shoes/shoe-edit/shoe-edit.component";
import { ShoesComponent } from "./shoes/shoes.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/shoes', pathMatch: "full"},
  {path: 'shoes', component: ShoesComponent},
  {path: 'shoes/:id', component: ShoeDetailComponent},
  {path: 'shoes/:id/edit', component: ShoeEditComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'create', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
