import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../api/models/product/product.service';
import { Product } from '../api/shopping-models';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  public costfromDb2: Observable<Product []>;
  public costfromDb: Product[];
  constructor(private cartService: CartService,
    private productService: ProductService) { 
      this.costfromDb2 = this.productService.query();
      this.costfromDb2.subscribe(
        (response: Product[]) => {
          this.costfromDb = response;
        }
      );
  }

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
