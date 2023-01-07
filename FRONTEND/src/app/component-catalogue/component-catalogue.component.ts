import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Product } from '../Class/product';
import { AddProduct, DeleteProduct } from '../magasin/magasin-action';
import { MonserviceService } from '../services/monservice.service';


@Component({
  selector: 'app-component-catalogue',
  templateUrl: './component-catalogue.component.html',
  styleUrls: ['./component-catalogue.component.css']
})
export class ComponentCatalogueComponent implements OnInit {

  products !: Product[];

  constructor(private monserviceService: MonserviceService, private store: Store) {
  }
  status: boolean = false;

  clickEvent(product: Product){
    //change status of product
    if(product.status){
      product.status = false;
      this.status = true;
    }
    else{
      product.status = true;
      this.status = false;
    }
    //product.status = !product.status;
    //this.status = !this.status;    
}

  addToMagasinList(product: Product): void{
    this.store.dispatch(new AddProduct(product));
  }

  delToMagasinList(product: Product): void{
    this.store.dispatch(new DeleteProduct(product));
  }

  ngOnInit(): void {
    this.getCatalogueProducts();
  }

  getCatalogueProducts() {
    this.monserviceService.getCatalogue().subscribe({
      next: (products: Product[]) => {
        this.products = products;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  updateList(event: Product[]) {
    this.products = event;
  }


}
