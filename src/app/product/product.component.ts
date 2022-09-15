import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  fruits=[
       {
        name:'Apple',
        price:20,
        stock:100
       },
       {
        name:'Mango',
        price:25,
        stock:200
       },
       {
        name:'Banana',
       price:10,
       stock:300
      },
       {
        name:'Orange',
        price:67,
        stock:89
       }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
