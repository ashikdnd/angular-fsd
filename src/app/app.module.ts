import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HighlightDirective } from './highlight.directive';
import { UppercaseDirective } from './uppercase.directive';
import { StringsAndNumbersComponent } from './strings-and-numbers/strings-and-numbers.component';
import { SlugTextPipe } from './slug-text.pipe';
import { FindPowerPipe } from './find-power.pipe';
import { BlogComponent } from './blog/blog.component';
import { BlogHeaderComponent } from './blog/blog-header/blog-header.component';
import { BlogSidebarComponent } from './blog/blog-sidebar/blog-sidebar.component';
import { BlogContentComponent } from './blog/blog-content/blog-content.component';
import { BlogFooterComponent } from './blog/blog-footer/blog-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCustomersComponent,
    CustomerListComponent,
    HighlightDirective,
    UppercaseDirective,
    StringsAndNumbersComponent,
    SlugTextPipe,
    FindPowerPipe,
    BlogComponent,
    BlogHeaderComponent,
    BlogSidebarComponent,
    BlogContentComponent,
    BlogFooterComponent
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
