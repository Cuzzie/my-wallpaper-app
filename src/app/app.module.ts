import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { PhotoSearchComponent } from './photo-search/photo-search.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { PhotoListComponent } from './photo-list/photo-list.component';
import {PhotoService} from "./photo.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PhotoSearchComponent,
    PhotoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
