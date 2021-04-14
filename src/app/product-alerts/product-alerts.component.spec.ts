import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ProductAlertsComponent } from "./product-alerts.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ProductAlertsComponent", () => {

  let fixture: ComponentFixture<ProductAlertsComponent>;
  let component: ProductAlertsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ProductAlertsComponent]
    });

    fixture = TestBed.createComponent(ProductAlertsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
