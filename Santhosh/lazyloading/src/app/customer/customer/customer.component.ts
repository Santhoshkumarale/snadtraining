import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICustomer } from '../customer-model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer = {} as ICustomer;
  customers = [] as ICustomer[];
  custFormGroup!: FormGroup;
  submitted = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.custFormGroup = this._formBuilder.group({
      custNumber: [null, Validators.required],
      custName: [null, Validators.required],
      custAmount: [null, Validators.required],
      custAddress: [null]
    });

    this.customers = [
      { custNumber: 101, custName: 'Krishna', custAmount: 6500, custAddress: 'Hyderabad' }
    ];
  }


  public get f() {
    return this.custFormGroup.controls;
  }


  public addCustomer() {
    this.submitted = true;
    if (this.custFormGroup.invalid) {
      return;
    }
    this.customer = this.custFormGroup.value;
    this.customers.push(this.customer);
    alert("Customer Added");
    this.custFormGroup.reset();
    this.submitted = false;
  }

}
