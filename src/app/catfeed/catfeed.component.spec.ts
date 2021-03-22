import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatfeedComponent } from './catfeed.component';

describe('CatfeedComponent', () => {
  let component: CatfeedComponent;
  let fixture: ComponentFixture<CatfeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatfeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
