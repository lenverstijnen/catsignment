import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, delay, map, startWith } from 'rxjs/operators';

export interface IImageResponse {
  breeds: any[];
  height: number;
  id: string;
  url: string;
  width: number;
}

export interface IBreedResponse {
  adaptability: number;
  affection_level: number;
  alt_names: string;
  cfa_url: string;
  child_friendly: number;
  country_code: string;
  country_codes: string;
  description: string;
  dog_friendly: number;
  energy_level: number;
  experimental: number;
  grooming: number;
  hairless: number;
  health_issues: number;
  hypoallergenic: number;
  id: string;
  indoor: number;
  intelligence: number;
  lap: number;
  life_span: string;
  name: string;
  natural: number;
  origin: string;
  rare: number;
  reference_image_id: string;
  rex: number;
  shedding_level: number;
  short_legs: number;
  social_needs: number;
  stranger_friendly: number;
  suppressed_tail: number;
  temperament: string;
  vcahospitals_url: string;
  vetstreet_url: string;
  weight: { imperial: string; metric: string };
  wikipedia_url: string;
}

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
        catchError((e) => of(alert(e)))
      );
  }

  searchByBreed(searchValue: string) {
    return this.http
      .get<IBreedResponse[]>(
        `https://api.thecatapi.com/v1/breeds/search?q=${searchValue}`,
        this.opts
      )
      .pipe(
        delay(500),
        map((response) => ({ loading: false, response })),
        startWith({ loading: true, response: [] }),
        catchError((e) => of(alert(e)))
      );
  }
}

// In a bigger project I would probably build an api service that could handle all the CRUD operations.
// I didn't dive deep into error handling in Angular but saw there is a class ErrorHandler where you should implement
// handleError(). There I should probably call the logger, and notify the user. Of course alert() is not used for
// this in real situations.
