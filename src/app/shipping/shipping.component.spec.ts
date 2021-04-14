import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ShippingComponent } from "./shipping.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ShippingComponent", () => {

  let fixture: ComponentFixture<ShippingComponent>;
  let component: ShippingComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ShippingComponent]
    });

    fixture = TestBed.createComponent(ShippingComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
