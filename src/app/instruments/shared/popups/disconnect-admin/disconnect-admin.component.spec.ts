import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisconnectAdminComponent } from './disconnect-admin.component';

describe('DisconnectAdminComponent', () => {
  let component: DisconnectAdminComponent;
  let fixture: ComponentFixture<DisconnectAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisconnectAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisconnectAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
