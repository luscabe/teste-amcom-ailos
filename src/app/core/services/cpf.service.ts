import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {ICpf} from '../interfaces/cpf';

@Injectable({
  providedIn: 'root',
})
export class CpfService {
  private database = [
    {
      document: '01234567890',
      name: 'Giovanni Mateus Rodrigues',
      documentStatus: 'Regular',
      accounts: [
        {
          cooperative: 'Cooperativa Viacredi',
          accountNumber: '557932-4',
          accountType: 'Conta aplicação',
        },
        {
          cooperative: 'Cooperativa Viacredi',
          accountNumber: '778461-8',
          accountType: 'Conta corrente',
        },
      ],
    },
    {
      document: '55599876462',
      name: 'Murilo João Vitor Galvão',
      documentStatus: 'Pendente',
      accounts: [
        {
          cooperative: 'Cooperativa Viacredi',
          accountNumber: '557932-4',
          accountType: 'Conta corrente',
        },
      ],
    },
    {
      document: '11940283140',
      name: 'Edson Breno Otávio Aparício',
      documentStatus: 'Reprovado',
      accounts: [],
    },
  ];

  constructor() {}

  consultarCPF(cpf: string): Observable<ICpf | null> {
    const result = this.database.find((entry) => entry.document === cpf);
    return of(result || null).pipe(delay(2000));
  }
}
