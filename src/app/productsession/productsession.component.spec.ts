import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsessionComponent } from './productsession.component';

describe('ProductsessionComponent', () => {
  let component: ProductsessionComponent;
  let fixture: ComponentFixture<ProductsessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
