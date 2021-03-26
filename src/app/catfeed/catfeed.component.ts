import { Component, OnInit } from '@angular/core';
import { CatService, IImageResponse } from '../services/cat.service';
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

  // I didn't implement infinite scrolling before, even not in React. I came up with
  // this solution myself. Better way would be probably server side pagination. Would dive deeper,
  // but I think this is beyond the scope of what i can do for now. This works for now.
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
