import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentsFavoriteComponent } from './instruments-favorite.component';

describe('InstrumentsFavoriteComponent', () => {
  let component: InstrumentsFavoriteComponent;
  let fixture: ComponentFixture<InstrumentsFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentsFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentsFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
