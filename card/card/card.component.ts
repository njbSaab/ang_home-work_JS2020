import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit{

  @Input()
  public value = 0

  @Output() // Define the output event
  public valueChanged = new EventEmitter<number>();
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

  ngOnInit(): void {
  }
}
