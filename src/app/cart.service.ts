import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class CartService {
  items = [];

  constructor( private http: HttpClient) {
    
  }
  clearCart() {
    this.items = [];
    return this.items;
  }

}
