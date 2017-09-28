import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PhotoSearchComponent} from "../photo-search/photo-search.component";

const appRoutes: Routes = [
  {path: "search", component: PhotoSearchComponent},
  {path: "", redirectTo: "/search", pathMatch: "full"}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
