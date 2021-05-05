import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { ProductService } from '../api/models/product/product.service';

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"]
})

export class ProductDetailsComponent implements OnInit {
  product;
 
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) { 

  }
  addToCart(product) {
    this.productService.addToCart(product)
    window.alert('Your product has been added to the cart!');
  }
  ngOnInit() {

    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
  
    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }
 
}
