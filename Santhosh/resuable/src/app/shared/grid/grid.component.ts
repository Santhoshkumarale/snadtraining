import { ConstantPool } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  gridColumns = [] as any[];
  gridData = [] as any[];

  @Input("dataList")
  public set setData(dataList: any) {
    if (dataList.length) {
      this.gridColumns = Object.keys(dataList[0]);
      this.gridData = dataList;
    }
  }

  dataList = [] as any;

  constructor() { }

  ngOnInit(): void {

  }

}
