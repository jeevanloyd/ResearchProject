import { Component, OnInit } from "@angular/core";
import { Shipping } from '../api/shopping-models';
import { ShippingService } from '../api/models/shipping/shipping.service';
@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.scss"]
})

export class ShippingComponent  {
  public shippingcost:Shipping[];
  constructor(private shippingService: ShippingService) { 
      this.shippingService.query().subscribe(
        (response: Shipping[]) => {
          this.shippingcost = response;
        }
      );
  }


}
