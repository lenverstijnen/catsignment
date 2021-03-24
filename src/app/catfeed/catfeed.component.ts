import { Component, OnInit } from '@angular/core';
import { CatService } from '../services/cat.service';

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

  loadMore() {
    const more = this.fetchedCats.splice(0, 5);
    more.forEach((cat) => this.loadedCats.push(cat));
  }

  ngOnInit(): void {
    this.service.getCats().subscribe((response) => {
      this.fetchedCats = response;
      this.loadedCats = this.fetchedCats.splice(0, 5);
    });
  }
}
