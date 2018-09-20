import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductService } from '..//../product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService,
  ) { }

  // variables
  editProduct: any;
  messages: any;
  _id: any;
  ngOnInit() {
    this.editProduct = { title: "", price: "", imageUrl: "" };
    this.messages = { success: "", title: "", price: "", imageUrl: "" };
    this.getID();
    this.getOneProduct();
  }

  goProducts() {
    this._router.navigate(['/products']);
  }

  getID() {
    this._route.params.subscribe((params: Params) => {
      this._id = params['id'];
    });
  }

  getOneProduct() {
    let obs = this._productService.getOne(this._id);
    obs.subscribe(response => {
      if (response['status'] == false) {
        console.log("response false: ", JSON.stringify(response));
        this.messages = "Something went while processing your request, Please reload the page!"
      }
      else if (response['product'] == null) {
        console.log("response Null: ", JSON.stringify(response));
        this.messages = "Something went while processing your request, Please reload the page!"
      }
      else {
        console.log("response true: ", JSON.stringify(response));
        this.editProduct = response['product'];
      }
    });
  }

  updateProduct() {
    let obs = this._productService.update(this.editProduct);
    obs.subscribe(response => {
      if (response['status'] == false) {
        this.messages = response['messages'];
      }
      else {
        this.messages = response['messages'];
        setTimeout(() => { this.goProducts() }, 2000);
      }
    });
  }
}
