import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Candidate } from '../models/candidate';
import { Enviroment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  
  constructor(
    private httpClient: HttpClient
  ){}

  getAllCandidates() {
    return this.httpClient.get<Candidate[]>(`${Enviroment.apiUrl}/candidatos/`)
  }

  getCandidate(id: number){
    return this.httpClient.get<Candidate>(`${Enviroment.apiUrl}/candidatos/${id}`)
  }
  
}
