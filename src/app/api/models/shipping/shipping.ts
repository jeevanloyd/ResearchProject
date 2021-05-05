import { Entity } from '../../entity';

const KEYS =
  ['id',
    'available',
    'price',
    'method',
    'time'
  ];
  export class Shipping extends Entity { 
      id:number;
    available: boolean;
    price: number;
    method: string;
    time:number

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