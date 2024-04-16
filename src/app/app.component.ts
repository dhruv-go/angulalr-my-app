import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularTreeGridComponent } from 'angular-tree-grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  @ViewChild('angularGrid')
  angularGrid!: AngularTreeGridComponent;

  data: any = [
    { id: 1, name: 'Bimal', age: 60, weight: 60, gender: 1, phone: 7930343463, parent: 0},
    { id: 2, name: 'Bhagi', age: 40, weight: 95, gender: 1, phone: 7930343463, parent: 1},
    { id: 3, name: 'Kalyana', age: 36, weight: 105, gender: 1, phone: 7930343463, parent: 1},
    { id: 4, name: 'Prakash', age: 20, weight: 20, gender: 1, phone: 7930343463, parent: 2},
    { id: 5, name: 'Jitu', age: 21, weight: 61, gender: 1, phone: 7930343463, parent: 3},
    { id: 6, name: 'Sunil', age: 60, weight: 87, gender: 1, phone: 7930343463, parent: 34},
    { id: 7, name: 'Tadit', age: 40, weight: 60, gender: 1, phone: 7930343463, parent: 6},
    { id: 8, name: 'Suraj', age: 36, weight: 60, gender: 1, phone: 7930343463, parent: 6},
    { id: 9, name: 'Swarup', age: 20, weight: 40, gender: 1, phone: 7930343463, parent: 8},
    { id: 10, name: 'Lakin', age: 21, weight: 55, gender: 1, phone: 7930343463, parent: 8},
  ];

  configs: any = {
    id_field: 'id',
    parent_id_field: 'parent',
    parent_display_field: 'name',
    css: { // Optional
      expand_icon: '<i class="fa fa-caret-right"></i>',
      collapse_icon: '<i class="fa fa-caret-down"></i>',
    },
    columns: [
      {
        name: 'name',
        header: 'Name',
        width: '100px'
      },
      {
        name: 'age',
        header: 'Age',
        // renderer: function(value) {
        //   return value + ' years';
        // }
      },
      {
        name: 'weight',
        header: 'Weight'
      },
      {
        name: 'gender',
        header: 'Gender',
        // renderer: function(value) {
        //   return value ? 'Male' : 'Female';
        // }
      },
      {
        name: 'phone',
        header: 'Phone',
        width: '150px'
      }
    ]
  };

  constructor() {

  }

  ngOnInit(): void {

  }

  // collapseAll() {
  //   this.angularGrid.collapseAll();
  // }

  // expandAll() {
  //   this.angularGrid.expandAll();
  // }
}
