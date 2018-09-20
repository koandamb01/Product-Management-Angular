import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.css']
})
export class ProductsHomeComponent implements OnInit {

  // variables
  products: any;
  messages: any;
  show = true;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService,
  ) { }

  ngOnInit() {
    this.messages = { success: "", title: "", price: "", imageUrl: "" };
    this.getallProducts();
  }

  getallProducts() {
    let obs = this._productService.all();
    obs.subscribe(response => {
      if (response['status'] == false) {
        this.messages = "Something went while processing your request, Please reload the page!"
      }
      else if (response['products'] == null) {
        this.messages = "There no data in the system yet! Please be the first to add an author";
      }
      else {
        this.products = response['products'];
      }
    });
  }

  deleteProduct(id) {
    let obs = this._productService.delete(id);
    obs.subscribe(response => {
      if (response['status'] == false) {
        this.messages = response['messages'];
      }
      else {
        this.messages = response['messages'];
        setTimeout(() => { this.ngOnInit() }, 2000);
      }
    });
  }
}
