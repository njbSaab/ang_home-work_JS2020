import { Component } from '@angular/core';
import {cartProduct, ICartProduct} from "../../shared/mocks/card-component/card-products";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent {
    public card: ICartProduct = cartProduct
}
