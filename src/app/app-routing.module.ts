import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddItemsComponent } from './add-items/add-items.component';
// import { CommonModule } from '@angular/common';

const routes: Routes = [{
  path: '',
  component: ProductListComponent
},
{
  path: 'product',
  component: ProductListComponent
},
{
  path: 'product/:id',
  component: ProductDetailsComponent
},
{
  path: 'checkout',
  component: CheckoutComponent
},
{
  path: 'additems',
  component: AddItemsComponent
},
{
  path: '**',
  redirectTo: ''
}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)
    // CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
