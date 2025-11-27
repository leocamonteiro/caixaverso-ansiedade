import { Component, Input } from '@angular/core';
import { Candidate } from '../../models/candidate';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-candidate-card',
  standalone: true,
  imports: [MatIconModule, MatProgressBarModule],
  templateUrl: './candidate-card.html',
  styleUrls: ['./candidate-card.scss'],
})
export class CandidateCard {
  @Input() candidato!: Candidate;

  get formattedName(): string {
    if (!this.candidato?.name) return '';
    const parts = this.candidato.name.trim().split(' ');
    const first = parts[0];
    const last = parts[parts.length - 1];
    return `${this.capitalize(first)} ${this.capitalize(last)}`;
  }

  private capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  zenPhrases: string[] = [
    "Respira fundo, tá tudo tranquilo.",
    "A calma é sua superpower.",
    "Nada como um café e paz.",
    "Hoje o mundo parece leve.",
    "Zen mode ativado.",
    "Sorriso fácil, coração leve.",
    "A serenidade é contagiante.",
    "Relax, tudo sob controle.",
    "Tranquilidade é o novo hype.",
    "Paz interior desbloqueada."
  ];

  moderatePhrases: string[] = [
    "Um pouco de tensão, mas dá pra segurar.",
    "Respira, inspira, não pira.",
    "Tá quase lá, foco!",
    "Ansiedade moderada, mas ainda no controle.",
    "O coração acelera, mas a mente segura.",
    "Equilíbrio entre calma e agitação.",
    "Um café ajuda a segurar a onda.",
    "Tá nervoso, mas não tanto.",
    "Dá pra lidar, respira fundo.",
    "Ansiedade sob observação."
  ];

  nervousPhrases: string[] = [
    "Socorro, preciso de férias!",
    "O coração tá na corrida de Fórmula 1.",
    "Ansiedade nível boss final.",
    "Tá difícil segurar a onda.",
    "Respira, respira, respira!",
    "Modo pânico ativado.",
    "Preciso de 10 cafés agora!",
    "A mente não para, tá frenética.",
    "Ansiedade explodindo no limite.",
    "Nervos à flor da pele."
  ];

  get anxietyEmoji(): string {
    const lvl = this.candidato.anxietyLvl;
    if (lvl <= 33) return "😌";
    if (lvl <= 66) return "😬";
    return "😱";
  }

  get randomPhrase(): string {
    const lvl = this.candidato.anxietyLvl;
    let pool: string[];
    if (lvl <= 33) pool = this.zenPhrases;
    else if (lvl <= 66) pool = this.moderatePhrases;
    else pool = this.nervousPhrases;
    const index = Math.floor(Math.random() * pool.length);
    return pool[index];
  }
}
