import { Component, OnInit } from "@angular/core";
import { CartService } from '../cart.service';
@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.scss"]
})

export class ShippingComponent  {
  shippingCosts = this.cartService.getShippingData();
  costfromDb =this.cartService.getDemoData();
  constructor(private cartService: CartService) { 

  }


}
