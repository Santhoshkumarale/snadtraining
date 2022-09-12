import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /*
  Directives :-
  1. Component Directives
  2. Attribute Directives
  3. Structural Directives
      1. ngIf
      2. ngFor
      3. ngSwitch
  */

  messageStatus = true;

  constructor() { }

  ngOnInit(): void {
  }

}
