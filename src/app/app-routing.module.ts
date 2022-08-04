import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddCustomersComponent} from "./add-customers/add-customers.component";
import {CustomerListComponent} from "./customer-list/customer-list.component";

const routes: Routes = [
  {
    path: '',
    component: AddCustomersComponent
  },
  {
    path: 'get-customers',
    component: CustomerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
