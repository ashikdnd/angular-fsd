import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddCustomersComponent} from "./add-customers/add-customers.component";
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {StringsAndNumbersComponent} from "./strings-and-numbers/strings-and-numbers.component";

const routes: Routes = [
  {
    path: '',
    component: AddCustomersComponent
  },
  {
    path: 'pipes',
    component: StringsAndNumbersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
