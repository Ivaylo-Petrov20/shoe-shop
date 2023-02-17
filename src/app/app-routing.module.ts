import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";
import { CreateComponent } from "./create/create.component";
import { ShoeDetailComponent } from "./shoes/shoe-detail/shoe-detail.component";
import { ShoeEditComponent } from "./shoes/shoe-edit/shoe-edit.component";
import { ShoesResolverService } from "./shoes/shoes-resolver.service";
import { ShoesComponent } from "./shoes/shoes.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/shoes', pathMatch: "full"},
  {path: 'shoes', component: ShoesComponent, canActivate: [AuthGuard], resolve: [ShoesResolverService]},
  {path: 'shoes/:id', component: ShoeDetailComponent, resolve: [ShoesResolverService]},
  {path: 'shoes/:id/edit', component: ShoeEditComponent, resolve: [ShoesResolverService]},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'create', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
