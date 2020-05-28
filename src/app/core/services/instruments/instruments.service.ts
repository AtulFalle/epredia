import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InstrumentsService {
  userName = 'naman';

  constructor(private http: HttpClient) {}

  getInstruments(): Observable<any> {
    const instrumentsUrl =
      'http://localhost:3000/api/getUserDeviceDetails';
    return this.http
      .get<any>(instrumentsUrl, {
        headers: new HttpHeaders()
          .set('x-ms-client-principal-id', this.userName)
          .set('Access-Control-Allow-Origin', '*'),
      })
      .pipe(
        map((res: any) => {
          return res.deviceInfo;
        })
      );
  }
}
