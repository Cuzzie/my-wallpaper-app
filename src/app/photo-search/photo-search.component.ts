import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {PhotoService} from "../photo.service";

@Component({
  selector: 'app-photo-search',
  templateUrl: './photo-search.component.html',
  styleUrls: ['./photo-search.component.css']
})
export class PhotoSearchComponent implements OnInit {
  @ViewChild("searchForm") searchForm: NgForm;

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
  }

  onSearch() {
    this.photoService.searchPhoto(this.searchForm.value.search);
  }
}
