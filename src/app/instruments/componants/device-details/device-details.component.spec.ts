import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeviceDetailsComponent } from './device-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

fdescribe('DeviceDetailsComponent', () => {
  let component: DeviceDetailsComponent;
  let fixture: ComponentFixture<DeviceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeviceDetailsComponent],
      imports: [ FontAwesomeModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(' should rendre values correctly', () => {


    const fixture = TestBed.createComponent(DeviceDetailsComponent);
    component.device = {
      _id: '1',
      deviceName: 'test device',
      serialNumber: 'test device',
      firmwareVersion: 'test device',
      softwareVersion: 'test device',
      status: 'Available',
      type: 'revos'
    };

    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.device-status').textContent).toContain('Available');
    expect(compiled.querySelector('.device-name').textContent).toContain('test device');
    expect(compiled.querySelector('.device-app').textContent).toContain('revos');
    expect(compiled.querySelector('.soft-version').textContent).toContain('test device');
    expect(compiled.querySelector('.device-info').textContent).toContain('test device');
    // expect(compiled.querySelector('.device-status').textContent).toContain('Available');
  });

  it('emmit event as device', () => {

    const fixture = TestBed.createComponent(DeviceDetailsComponent);
    // spy on event emitter
    const comp = fixture.componentInstance;
    spyOn(comp.favoriteDeviceclicked, 'emit');
    comp.device = {
      _id: '1',
      deviceName: 'test device',
      serialNumber: 'test device',
      firmwareVersion: 'test device',
      softwareVersion: 'test device',
      status: 'Available',
      type: 'revos'
    }

    // trigger the click
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('fav-btn');
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.favoriteDeviceclicked.emit).toHaveBeenCalledWith(component.device);
  });


});
