import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddCustomersComponent} from "./add-customers/add-customers.component";
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {StringsAndNumbersComponent} from "./strings-and-numbers/strings-and-numbers.component";
import {BlogComponent} from "./blog/blog.component";
import {MathComponent} from "./math/math.component";
import {CounterComponent} from "./counter/counter.component";
import {ObserveComponent} from "./observe/observe.component";
import {DataComponent} from "./data/data.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'api'
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
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'observe',
    component: ObserveComponent
  },
  {
    path: 'api',
    component: DataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
