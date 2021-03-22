import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedsearchComponent } from './breedsearch.component';

describe('BreedsearchComponent', () => {
  let component: BreedsearchComponent;
  let fixture: ComponentFixture<BreedsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
