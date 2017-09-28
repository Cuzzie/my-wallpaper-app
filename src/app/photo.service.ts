import {Injectable} from '@angular/core';
import {Photo} from "./photo.model";
import {HttpClient, HttpParams} from "@angular/common/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import "rxjs/add/operator/do";

@Injectable()
export class PhotoService {
  url: string = "https://pixabay.com/api/";
  apiKey: string = "6563107-183f64986440ce90341bb151f";
  photos: Photo[];
  photosChanged: BehaviorSubject<Photo[]> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
  }

  getPhotos() {
    this.http.get(this.url, {
      params: new HttpParams().set("key", this.apiKey)
    }).map((response: any) => response.hits)
      .subscribe((photos: Photo[]) => this.photosChanged.next(photos));
  }

  searchPhoto(searchString: string) {
    this.http.get(this.url, {
      params: new HttpParams().set("key", this.apiKey).append("q", searchString)
    }).map((response: any) => this.photos = response.hits)
      .subscribe((photos: Photo[]) => this.photosChanged.next(photos));
  }

}
