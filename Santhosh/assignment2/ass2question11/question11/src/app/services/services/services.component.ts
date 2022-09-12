import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  numArray=[99,98,97,96,95,94,93,92]
  block = false

  constructor() { }

  ngOnInit(): void {
  }

  changeEvent(){
    this.block = !this.block
  }

}
