import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grand-child-a',
  standalone: true,
  imports: [],
  templateUrl: './grand-child-a.component.html',
  styleUrl: './grand-child-a.component.css'
})
export class GrandChildAComponent {
  @Input() fromParent ='' ; 

}
