import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cart-block',
  templateUrl: './cart-block.component.html',
  styleUrls: ['./cart-block.component.sass']
})
export class CartBlockComponent implements OnInit{
  public title = "1. Интерполяция и связывание (Карточка товара в корзине)"

  public myValue = 1

  public onChildChangesValues(newValue:number){
    this.myValue = newValue
  }
  ngOnInit(): void {
    console.log(this.myValue)
  }

}
