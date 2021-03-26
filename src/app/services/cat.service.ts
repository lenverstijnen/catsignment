import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, delay, map, startWith } from 'rxjs/operators';

type IImageResponse = {
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
    return this.http
      .get<IImageResponse[]>(
        'https://api.thecatapi.com/v1/images/search?size=med&limit=100',
        this.opts
      )
      .pipe(
        map((response) => ({ loading: false, response })),
        startWith({ loading: true, response: [] }),
        catchError((e) => of(console.log(e)))
      );
  }

  searchByBreed(searchValue: string) {
    return this.http
      .get<any[]>(
        `https://api.thecatapi.com/v1/breeds/search?q=${searchValue}`,
        this.opts
      )
      .pipe(
        delay(500),
        map((response) => ({ loading: false, response })),
        startWith({ loading: true, response: [] }),
        catchError((e) => of(console.log(e)))
      );
  }
}
