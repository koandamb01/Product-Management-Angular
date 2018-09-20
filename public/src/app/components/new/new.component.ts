import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '..//../product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService,
  ) { }

  // variables
  newProduct: any;
  messages: any;

  ngOnInit() {
    this.newProduct = { title: "", price: "", imageUrl: "" };
    this.messages = { success: "", title: "", price: "", imageUrl: "" };
  }

  goProducts() {
    this._router.navigate(['/products']);
  }
  // Create a new Product
  createProduct() {
    let obs = this._productService.create(this.newProduct);
    obs.subscribe(response => {

      if (response['status'] == false) {
        this.messages = response['messages'];
      }
      else {
        this.messages = response['messages'];
        console.log(this.messages);
        setTimeout(() => { this.goProducts() }, 2000);
      }
    });
  }
}
