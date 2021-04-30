import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FlickerResponse } from './models/flickerresponse';


@Injectable({
  providedIn: 'root'
})
export class FlickerServiceService {
  constructor(private http:HttpClient) { }
   
  flickerUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1';
  getPhotos(): Observable<FlickerResponse> {
        return this.http.get<FlickerResponse>(this.flickerUrl);
  }
}