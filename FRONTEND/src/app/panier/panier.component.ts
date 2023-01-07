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


  constructor(private monserviceService: MonserviceService, private store: Store) {
  }

  delToMagasinList(element : Product) {
    this.store.dispatch(new DeleteProduct(element));
  }
}