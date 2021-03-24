import { Component, Input, OnInit } from '@angular/core';
import {
  CatCharacteristicsService,
  ICatCharacteristics,
} from '../services/cat-characteristics.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input('url') url: string | undefined;
  catdetails: ICatCharacteristics;

  // By adding the characteristics here this component is not reusable. Wouldn't do this normaly
  // but because of time reasons I leave it like this for now.
  constructor(private service: CatCharacteristicsService) {
    this.catdetails = service.getRandomCharacteristics();
  }

  handleContact(catname: string) {
    alert(
      `We are so sorry to tell you that you and ${catname} are not a match. Our matching algorithm of 136 rules didn't see any possible positive outcomes.`
    );
  }
}
