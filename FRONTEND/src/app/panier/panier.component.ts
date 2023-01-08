import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Product } from '../Class/product';
import { AddProduct, DeleteProduct, GetProduct } from '../magasin/magasin-action';
import { MonserviceService } from '../services/monservice.service';
import { MagasinState } from '../magasin/magasin-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  ngOnInit(): void {}

  products !: Product[];

  dataSource = this.store.select((state) => state.products.products);

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
  }


  constructor(private monserviceService: MonserviceService, private store: Store) {
  }

  delToMagasinList(element : Product) {
    this.store.dispatch(new DeleteProduct(element));
  }
}