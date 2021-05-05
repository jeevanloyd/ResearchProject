import { Product } from '../../shopping-models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntityService } from '../../entity.service';
import { products } from '../../../products';

//Thia is the entity service class for Product. 

@Injectable()
export class ProductService extends EntityService<Product> {
    protected readonly endpointFormat = 'Product/:id:';
    entityName = 'Product';
    items = [];
    constructor(
        httpClient: HttpClient,
      ) {
        super(httpClient);
      }
      protected createInstanceFrom(json: any, other?: any): Product {
        const product = new Product(json);
        product.updateFromJson(json);
        return product;
      }
      public keyForJson(json: any): string {
        return json.id;
      }
     
      public addToCart(product) {
        this.items.push(product);
      }
      public getItems() {
        return this.items;
      }

}
