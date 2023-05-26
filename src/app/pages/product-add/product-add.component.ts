import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import { Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  // product: IProduct = {
  //   name: "",
  //   price: 0
  // }
  // constructor(private productService: ProductService) {
  // }
  // onHandleSubmit() {
  //   console.log(this.product)
  //   this.productService.addtProduct(this.product).subscribe((product) => {
  //     console.log('product', product)
  //   })
  // }

  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0]
  })

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService) {

  }


  onHandleSubmit() {
    const product: IProduct = {
      name: this.productForm.value.name || "",
      price: this.productForm.value.price || 0
    }

    this.productService.addProduct(product).subscribe((product) => {
      console.log('product', product)
    })
  }

}

