import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ImageLoaderService {

  constructor (
    public http: HttpClient
  ) {}


  public getImage() {
    return this .http.get('https://api.thecatapi.com/v1/images/search?size=full');
  }
}
