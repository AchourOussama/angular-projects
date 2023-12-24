import { Component } from '@angular/core';
import { GrandChildAComponent } from '../grand-child-a/grand-child-a.component';

@Component({
  selector: 'app-child-a',
  standalone: true,
  imports: [GrandChildAComponent],
  templateUrl: './child-a.component.html',
  styleUrl: './child-a.component.css'
})
export class ChildAComponent {
title="this is ChildA component"
}
