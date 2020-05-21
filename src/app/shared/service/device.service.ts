import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Device } from '../../../models/device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  baseUrl = environment.serverUrl;
  userName = 'atul';
  constructor(private http: HttpClient) { }

  getDevices(): Observable<Device[]> {

    // const url = this.baseUrl + '/getUserDeviceDetails';
    const url = '/assets/devices.json';
    return this.http.get(url, { headers: new HttpHeaders().set('x-ms-client-principal-id', this.userName).set('Access-Control-Allow-Origin', '*') }).pipe(
      map((res: any) => res.deviceInfo.devices)
    );
  }
}
