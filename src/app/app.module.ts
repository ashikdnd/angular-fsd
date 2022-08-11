import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HighlightDirective } from './highlight.directive';
import { UppercaseDirective } from './uppercase.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddCustomersComponent,
    CustomerListComponent,
    HighlightDirective,
    UppercaseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
