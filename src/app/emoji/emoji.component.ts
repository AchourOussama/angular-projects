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
changeStatus(){
  console.log("hello")
  this.status=!(this.status)
}
}
