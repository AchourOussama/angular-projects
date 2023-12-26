import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-grand-child-a',
  standalone: true,
  imports: [],
  templateUrl: './grand-child-a.component.html',
  styleUrl: './grand-child-a.component.css'
})
export class GrandChildAComponent {
  @Input() fromParent ='' ; 
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
