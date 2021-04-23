import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PservicesService } from '../pservices.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products:any = [];
  editmode: boolean = false;

  editUserIndex:any;

   constructor(private _productService: PservicesService) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(res => this.products = res);
  }

  addproduct(productForm:any){
    if(this.editmode){
     this.products.data.splice(this.editUserIndex, 1, productForm.value);
     productForm.reset();
     this.editmode = false;
    }
    else {
      this.products.data.push(productForm.value);
      productForm.reset();
    }
    
  }

  editProduct(productForm:any,index:any){
    this.editmode = true;
    this.editUserIndex = index;
    console.log(this.products.data[index].name);
    productForm.setValue({
      name:this.products.data[index].name,
      description: this.products.data[index].description,
      price:this.products.data[index].price
    })
    }

  deleteProduct(id:any){
    let ee = this.products.data;

    ee.forEach((value:number, index:number) => {
      if(index == id){
        this.products.data.splice(index, 1);
      }
    });
  }

}
