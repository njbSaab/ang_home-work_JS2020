import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {cartProduct, ICartProduct} from "../../shared/mocks/card-component/card-products";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit{
  public card: ICartProduct = cartProduct;

  @Output() // Define the output event
  public valueChanged = new EventEmitter<number>();

  @Output()
  public basketValueChange = new EventEmitter<number>()

  @Output()
  public basketArrayChange = new EventEmitter<ICartProduct[]>()


  @Input()
  public value = 0
  public result = this.card.price
  public basketValue = 0
  public basketProductsArr: ICartProduct[] = [];


  public decrement(){
    if (this.value > 1){
      this.value-=1
      this.valueChanged.emit(this.value)

    }
  }
  public increment(){
    this.value+=1
    this.valueChanged.emit(this.value)
  }

  public addedProductsInBasket():void{
    this.basketProductsArr.push(this.card);
    this.basketArrayChange.emit(this.basketProductsArr)
    this.basketValue = this.basketProductsArr.length;
    this.basketValueChange.emit(this.basketValue)
  }

  ngOnInit(): void {
    console.log(this.result)
  }
}
