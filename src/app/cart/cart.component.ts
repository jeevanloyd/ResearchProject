import { Component, OnInit } from "@angular/core";
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../api/models/product/product.service';
//import { Shipping } from '../api/shopping-models';
//import { ShippingService } from '../api/models/shipping/shipping.service';
@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})

export class CartComponent  {
  totalcost=0;
  items = this.productService.getItems();
  
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  constructor(private cartService: CartService, 
    private formBuilder: FormBuilder,
    private productService: ProductService) { 
      
      

  }
  totalItemCost(){
    for (var i = 0; i < this.items.length; i++) {
      this.totalcost = this.totalcost + ( this.items[i].price);
  }
  if(this.totalcost>1500){
    this.totalcost=this.totalcost-(this.totalcost%30)
  }
  return this.totalcost;
  }

  
getshippingdiscount(){
var finalcost=0;

if(this.totalcost==0){
  return finalcost
}
if(this.totalcost>=2000){
  window.alert("you have free shipping");
  finalcost=this.totalcost-100
}
else{
  finalcost=this.totalcost+100
}

return finalcost;

}
 
              

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  
}
