import  {Shipping}  from '../../shopping-models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntityService } from '../../entity.service';

@Injectable()
export class ShippingService extends EntityService<Shipping> {
   
    protected readonly endpointFormat = 'Shipping/Shipping/:id:';
    entityName = 'Shipping';
    constructor(
        httpClient: HttpClient,
      ) {
        super(httpClient);
      }
      protected createInstanceFrom(json: any, other?: any): Shipping {
        const shipping = new Shipping(json);
        shipping.updateFromJson(json);
        return shipping;
      }
      public keyForJson(json: any): string {
        return json.id;
      }
}