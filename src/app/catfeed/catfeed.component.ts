import { Component, OnInit } from '@angular/core';
import { CatService } from '../services/cat.service';
import { config } from '../../config/config';

@Component({
  selector: 'catfeed',
  templateUrl: './catfeed.component.html',
  styleUrls: ['./catfeed.component.css'],
})
export class CatfeedComponent implements OnInit {
  fetchedCats: any[] = [];
  loadedCats: any[] = [];

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
    this.service.getCats().subscribe((response) => {
      if (!response) return;
      this.fetchedCats = response;
      this.loadedCats = this.fetchedCats.splice(0, config.numberOfCatsToLoad);
    });
  }
}
