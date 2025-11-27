import { Component, OnInit } from '@angular/core';

import { Candidate } from '../../models/candidate';
import { CandidateService } from '../../services/candidate.service';
import { TotalCard } from '../total-card/total-card';
import { CandidateCard } from '../candidate-card/candidate-card';

@Component({
  selector: 'app-dashboard',
  imports: [TotalCard, CandidateCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  listaCandidatos: Candidate[] = [];
  totalCandidatos: number = 0;
  ansiedadeMedia: number = 0;
  cafesConsumidos: number = 0;
  listaCarregada: boolean = false;

  constructor(
    private candidateService: CandidateService
  ){}

  ngOnInit(): void {
    this.candidateService.getAllCandidates().subscribe({
      next: (data) => {
        this.listaCandidatos = data;
        this.totalCandidatos = data.length;
        this.ansiedadeMedia = Math.round(data.reduce((acc, c) => acc + c.anxietyLvl, 0) / data.length);
        this.cafesConsumidos = data.reduce((acc, c) => acc + c.coffeeCups, 0);
      },
      error: (err) => console.log(err),
      complete: () => this.listaCarregada = true   
    })
  }
}
