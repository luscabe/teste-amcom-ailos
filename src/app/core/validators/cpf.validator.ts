import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function cpfValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const cpf = control.value;
    if (!cpf) return null; // Se estiver vazio, não retorna erro (deixe outro required validar)

    const cleanedCPF = cpf.replace(/\D/g, '');

    if (cleanedCPF.length !== 11 || /^(\d)\1{10}$/.test(cleanedCPF)) {
      return {cpfInvalid: true};
    }

    let sum = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cleanedCPF[i - 1]) * (11 - i);
    }

    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cleanedCPF[9])) return {cpfInvalid: true};

    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cleanedCPF[i - 1]) * (12 - i);
    }

    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cleanedCPF[10])) return {cpfInvalid: true};

    return null;
  };
}
