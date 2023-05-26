import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  // @Input() products!: IProduct[]
  // @Output() onRemove = new EventEmitter<any>();
  products!: IProduct[]
  myName: string = "";

  status: boolean = false

  constructor(private ProductService: ProductService) {
    this.ProductService.getProducts().subscribe(data => {
      // console.log(data)
      this.products = data
    })
  }

  setValue(e: any) {
    this.myName = e.target.value;
  }
  toggle() {
    this.status = !this.status
  }

  removeItem(id: number) {
    this.ProductService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id)
    })
  }
}




