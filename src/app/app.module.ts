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
import { MathComponent } from './math/math.component';
import { AddComponent } from './math/add/add.component';
import { SubComponent } from './math/sub/sub.component';
import { MulComponent } from './math/mul/mul.component';
import { DivComponent } from './math/div/div.component';
import { MathService} from "./services/math.service";
import { CounterComponent } from './counter/counter.component';
import { CounterStartComponent } from './counter/counter-start/counter-start.component';
import { CounterInfoComponent } from './counter/counter-info/counter-info.component';

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
    BlogFooterComponent,
    MathComponent,
    AddComponent,
    SubComponent,
    MulComponent,
    DivComponent,
    CounterComponent,
    CounterStartComponent,
    CounterInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MathService],
  bootstrap: [AppComponent]
})
export class AppModule { }
