import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-total-card',
  imports: [MatIconModule],
  templateUrl: './total-card.html',
  styleUrl: './total-card.scss',
})
export class TotalCard {
  @Input() icon: string = "";
  @Input() title: string = "";
  @Input() content: number = 0;
}
