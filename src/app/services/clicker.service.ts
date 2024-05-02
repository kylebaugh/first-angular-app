import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickerService {

  constructor() { }

  logSomething(){
    console.log('It worked!')
  }
}
