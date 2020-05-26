import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  isUserisAdmin(): boolean{

    // logic to check if user is admin or not

    return false;
  }
}
