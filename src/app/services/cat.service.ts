import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

type Response = {
  breeds: any[];
  height: number;
  id: string;
  url: string;
  width: number;
}[];

@Injectable({
  providedIn: 'root',
})
export class CatService {
  private opts = {
    headers: new HttpHeaders({
      'x-api-token': 'd2606441-3574-48c1-a94f-05ce72041bde',
    }),
  };

  constructor(private http: HttpClient) {}

  getCats() {
    return this.http.get<Response>(
      'https://api.thecatapi.com/v1/images/search?size=med&limit=100',
      this.opts
    );
  }
}
