import { Injectable } from '@angular/core';

export interface ICatCharacteristics {
  id?: string;
  name: string;
  likes: string[];
  hates: string[];
  age: number;
  likesWater: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CatCharacteristicsService {
  private previousCat = {};
  private cats: ICatCharacteristics[] = [
    {
      name: 'Caty',
      likes: ['milk', 'birds', 'mice'],
      hates: ['dogs', 'my owner'],
      age: 39,
      likesWater: false,
    },
    {
      name: 'Emanuel',
      likes: ['swimming', 'cycling', 'mice'],
      hates: ['dogs', 'my owner'],
      age: 18,
      likesWater: false,
    },
    {
      name: 'Benny',
      likes: ['tv', 'gaming', 'eating crisps'],
      hates: ['moving', 'doing things'],
      age: 21,
      likesWater: false,
    },
    {
      name: 'George',
      likes: ['sailing', 'wintersports', 'paragliding'],
      hates: ['mice', 'cheese'],
      age: 24,
      likesWater: true,
    },
    {
      name: 'Kacey',
      likes: ['music', 'dancing', 'restaurants'],
      hates: ['cooking', 'doing dishes'],
      age: 22,
      likesWater: false,
    },
    {
      name: 'Maggie',
      likes: ['singing', 'playing the piano', 'reading'],
      hates: ['barking', 'eating grass'],
      age: 19,
      likesWater: true,
    },
    {
      name: 'Lois',
      likes: ['programming', 'fishing', 'puzzles'],
      hates: ['fish', 'puzzle pieces'],
      age: 27,
      likesWater: false,
    },
    {
      name: 'Jordan',
      likes: ['baseball', 'donuts', 'wallmart'],
      hates: ['children'],
      age: 25,
      likesWater: true,
    },
    {
      name: 'Paul',
      likes: ['guitar playing', 'pancakes', 'burger king'],
      hates: ['cooking', 'doing the laundry'],
      age: 32,
      likesWater: false,
    },
    {
      name: 'Kesha',
      likes: ['cars', 'aiplaines', 'space exploration'],
      hates: ['war', 'violence'],
      age: 33,
      likesWater: false,
    },
  ];

  private computeIndex() {
    return Math.floor(Math.random() * (this.cats.length - 1));
  }

  getRandomCharacteristics() {
    let index = this.computeIndex();

    // Prevents returning the same obj two times in row
    while (this.previousCat === this.cats[index]) {
      index = this.computeIndex();
    }

    this.previousCat = this.cats[index];
    return this.cats[index];
  }
}

// I build this service to provide some characteristics for the feed.
// The main purpose was to have some dummy data and being able to provide
// it on the fly.
