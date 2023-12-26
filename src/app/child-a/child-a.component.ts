import { Component, NgModule } from '@angular/core';
import { GrandChildAComponent } from '../grand-child-a/grand-child-a.component';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-child-a',
  standalone: true,
  imports: [GrandChildAComponent,FormsModule, NgFor],
  templateUrl: './child-a.component.html',
  styleUrl: './child-a.component.css'
})
export class ChildAComponent {
title="List of items"
// parent to child
currentItem="this is from ChildA"
itemList: string[] = ["hello","world"];

// new item comes from the parent component itself
userInput: string = '';
addItem() {
  if (this.userInput.trim() !== '') {
    this.itemList.push(this.userInput);
    console.log(this.userInput)
    this.userInput = '';
  }
  
}

removeItem(index: number) {
  this.itemList.splice(index, 1);
}

// new item comes from the child component using @output property
addItemFromChild(newItem: string) {
  this.itemList.push(newItem);
}

}
