import {Component, OnInit} from '@angular/core';
import {ICartProduct} from "../shared/mocks/card-component/card-products";

@Component({
  selector: 'app-cart-block',
  templateUrl: './cart-block.component.html',
  styleUrls: ['./cart-block.component.sass']
})
export class CartBlockComponent implements OnInit{
  public title = "1. Интерполяция и связывание (Карточка товара в корзине)"
  public myValue = 1
  public myQuantity = 0
  public myBasketArray: ICartProduct[] = [];

  public onChildChangesValues(newValue:number){
    this.myValue = newValue
  }
  public onChildBasketValues(newBasketValue:number){
    this.myQuantity = newBasketValue
  }
  public onChildBasketArray(newBasketArray: ICartProduct[]) {
    this.myBasketArray = newBasketArray
    console.log(this.myBasketArray)
  }
  ngOnInit(): void {
  }

}
