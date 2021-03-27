import { Component, Input } from '@angular/core';
import { IBreedResponse } from '../../services/cat.service';

@Component({
  selector: 'breed-details',
  templateUrl: './breed-details.component.html',
  styleUrls: ['./breed-details.component.css'],
})
export class BreedDetailsComponent {
  @Input('breedDetails') breedDetails!: IBreedResponse;
}

// I think having a breed details component like this for the search result
// Makes it easy to come back later to add or remove some things. This is the
// reason I put this in a seperate component.
