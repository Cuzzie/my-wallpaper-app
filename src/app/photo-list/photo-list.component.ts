import { Component, OnInit } from '@angular/core';
import {Photo} from "../photo.model";
import {PhotoService} from "../photo.service";

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  images: Photo[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.photosChanged.subscribe(
      (photos: Photo[]) => this.images = photos
    )
    this.photoService.getPhotos();
  }

}
