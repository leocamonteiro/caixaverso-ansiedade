import { Component, Input } from '@angular/core';

import { Candidate } from '../../models/candidate';

@Component({
  selector: 'app-candidate-card',
  imports: [],
  templateUrl: './candidate-card.html',
  styleUrl: './candidate-card.scss',
})
export class CandidateCard {
  @Input() candidato!: Candidate;
}
