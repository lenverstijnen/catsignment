import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IBreedResponse } from '../services/cat.service';

@Component({
  selector: 'breed-details',
  templateUrl: './breed-details.component.html',
  styleUrls: ['./breed-details.component.css'],
})
export class BreedDetailsComponent {
  @Input('breedDetails') breedDetails!: IBreedResponse;
}
