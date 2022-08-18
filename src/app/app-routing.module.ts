import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddCustomersComponent} from "./add-customers/add-customers.component";
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {StringsAndNumbersComponent} from "./strings-and-numbers/strings-and-numbers.component";
import {BlogComponent} from "./blog/blog.component";
import {MathComponent} from "./math/math.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'math'
  },
  {
    path: 'add-customer',
    component: AddCustomersComponent
  },
  {
    path: 'pipes',
    component: StringsAndNumbersComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'math',
    component: MathComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
