import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisconnectUserComponent } from './disconnect-user.component';

describe('DisconnectUserComponent', () => {
  let component: DisconnectUserComponent;
  let fixture: ComponentFixture<DisconnectUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisconnectUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisconnectUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
