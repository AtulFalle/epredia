import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroContainerComponent } from './micro-container.component';

describe('MicroContainerComponent', () => {
  let component: MicroContainerComponent;
  let fixture: ComponentFixture<MicroContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
