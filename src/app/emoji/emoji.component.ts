import { Component } from '@angular/core';
import "bootstrap/dist/css/bootstrap.css" 
@Component({
  selector: 'app-emoji',
  standalone: true,
  imports: [],
  templateUrl: './emoji.component.html',
  styleUrl: './emoji.component.css'
})
export class EmojiComponent {
Title= "Oussama"
status=true
// inputElement = new HTMLInputElement ;

changeStatus(){
  console.log("hello")
  this.status=!(this.status)
}

// method to unpack the event object and gain insights
handleInputChange(event: Event): void {
  // Cast the event to HTMLInputElement to access input-specific properties
  const inputElement = event.target as HTMLInputElement;
  // Access the input value
  const inputValue = inputElement.value;
  console.log('Input value:', inputValue);
  // You can add your logic here based on the input value
}

}
