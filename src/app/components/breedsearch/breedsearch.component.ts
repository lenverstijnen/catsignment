import { Component } from '@angular/core';
import { CatService, IBreedResponse } from '../../services/cat.service';

@Component({
  selector: 'app-breedsearch',
  templateUrl: './breedsearch.component.html',
  styleUrls: ['./breedsearch.component.css'],
})
export class BreedsearchComponent {
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

  // I think putting this kind of logic here is better than putting it in the template.
  // I do not like template polution and cats do neither.
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
      this.isSubmitted = true;
    });
  }
}

// I think most of this speaks for itself. It is a simple implementation of
// the search breed by name feature. I do not spam the api too much because you
// have to submit before the request is sent. I know in Axios you can send the request
// when finished typing and cancel it while typing to not spam the api to much. I suppose
// there will be a simular feature in RxJS but didn't dive into it because of the
// time. So I realize other implementations would be possible and probably
// be better.
