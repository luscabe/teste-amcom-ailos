import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ICpf } from '../interfaces/cpf';

@Injectable({
  providedIn: 'root',
})
export class CpfService {
  private database = [
    { cpf: '00000000000', name: 'João Silva', status: 'Aprovado' },
    { cpf: '11111111111', name: 'Maria Oliveira', status: 'Em análise' },
    { cpf: '22222222222', name: 'Carlos Souza', status: 'Reprovado' },
  ];

  constructor() {}

  // Método para consultar um CPF
  consultarCPF(cpf: string): Observable<ICpf | null> {
    // Simula uma requisição HTTP com delay de 1s
    const result = this.database.find((entry) => entry.cpf === cpf);
    return of(result || null).pipe(delay(1000));
  }
}