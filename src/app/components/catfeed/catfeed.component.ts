import { Component, OnInit } from '@angular/core';
import { CatService, IImageResponse } from '../../services/cat.service';
import { config } from '../../config/config';

@Component({
  selector: 'catfeed',
  templateUrl: './catfeed.component.html',
  styleUrls: ['./catfeed.component.css'],
})
export class CatfeedComponent implements OnInit {
  fetchedCats: IImageResponse[] = [];
  loadedCats: IImageResponse[] = [];
  loading = false;

  get isEmpty() {
    return this.fetchedCats.length === 0;
  }

  constructor(private service: CatService) {}

  loadMore() {
    const more = this.fetchedCats.splice(0, config.numberOfCatsToLoad);
    more.forEach((cat) => this.loadedCats.push(cat));
  }

  ngOnInit(): void {
    this.service.getCats().subscribe((res) => {
      if (!res) return;
      const { response, loading } = res;
      this.loading = loading;
      this.fetchedCats = response;
      this.loadedCats = this.fetchedCats.splice(0, config.numberOfCatsToLoad);
    });
  }
}

// I didn't implement infinite scrolling before, even not in React. I came up with
// this solution myself. Better way would be probably server side pagination, because of course
// there are more than 100 cats to be found. But this mimics a bit of the functionality and
// adds the feeling of infinite scrolling.
