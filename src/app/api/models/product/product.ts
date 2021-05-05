import { Entity } from '../../entity';

const KEYS =
  [
    'id',
    'name',
    'price',
    'quantityLeft',
    'description'
  ];
  export class Product extends Entity {
    id: number;
    name: string;
    price: number;
    quantityLeft: number;
    description:string

    toJson(): any {
      return {
        campus: super.toJsonWithKeys(KEYS)
      };
    }
  
    public updateFromJson(data: any): void {
      this.setFromJson(data, KEYS);
    }
    public get key(): string {
      return this.id.toString();
    }
    public keyForJson(json: any): string {
      return json.id;
    }
  }