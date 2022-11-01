import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HomeComponent} from "./home/home.component";
import { FeatureComponent } from './feature/feature.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FeatureComponent,
    TestimonialComponent,
    CallToActionComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
