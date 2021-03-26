import { Component, OnInit } from '@angular/core';
import { CatService, IBreedResponse } from '../services/cat.service';

@Component({
  selector: 'app-breedsearch',
  templateUrl: './breedsearch.component.html',
  styleUrls: ['./breedsearch.component.css'],
})
export class BreedsearchComponent implements OnInit {
  loading = false;
  results: IBreedResponse[] = [];
  isSubmitted = false;
  private inputValue = '';

  constructor(private service: CatService) {}

  get hasResult() {
    return !!this.results.length;
  }

  get hasSearchValue() {
    return !!this.inputValue;
  }

  get noResult() {
    return (
      this.isSubmitted &&
      this.hasSearchValue &&
      !this.hasResult &&
      !this.loading
    );
  }

  handleChange(e: any) {
    this.inputValue = e.target.value;
  }

  handleSearch(searchValue: string) {
    if (!searchValue) {
      this.isSubmitted = false;
      return;
    }

    this.service.searchByBreed(searchValue).subscribe((res) => {
      if (!res) return;
      const { response, loading } = res;
      this.loading = loading;
      this.results = response;
      console.log(response);
      this.isSubmitted = true;
      console.log(response);
    });
  }

  ngOnInit(): void {}
}
