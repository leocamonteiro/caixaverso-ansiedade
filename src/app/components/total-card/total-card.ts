import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-total-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './total-card.html',
  styleUrls: ['./total-card.scss'],
})
export class TotalCard {
  @Input() icon: string = "";
  @Input() title: string = "";
  @Input() content: number | string = 0;
}
