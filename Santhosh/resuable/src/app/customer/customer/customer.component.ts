import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../customer-model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers = [] as ICustomer[];

  constructor() { }

  ngOnInit(): void {
    this.customers = [
      { custId: 1, custName: 'Santhosh', custAmount: 6500, custAddress: 'Chennai' },
      { custId: 2, custName: 'kiran', custAmount: 5500, custAddress: 'Hyderabad' },
      { custId: 3, custName: 'Karnati', custAmount: 4500, custAddress: 'Pune' },
      { custId: 4, custName: 'Mosin', custAmount: 2500, custAddress: 'Chennai' }
    ];
  }

}
