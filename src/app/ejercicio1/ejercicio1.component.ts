import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component implements OnInit {
  inputName = '';
  inputClaves = '';
  typeText = 'Password';
  typeView = 'hidden'

  constructor() { }

  ngOnInit(): void {
  }

  changePassword() {
   
    if (
      this.typeText == 'password'
    ) {
      this.typeText =
        'Text';
    } else {
      this.typeText = 'password';
    }
}

enableSumbit() {
   
  if (
    this.typeView == 'disable'
  ) {
    this.typeView =
      'button';
  } else {
    this.typeView = 'disable';
  }
}

}
