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
// child to parent : receiving an item 
userInput: string = '';
itemList: string[] = ["hello","world","x"];

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

}
