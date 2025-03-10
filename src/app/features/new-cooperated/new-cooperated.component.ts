import {Component, OnInit} from '@angular/core';
import {ButtonComponent} from '../../shared/components/button/button.component';
import {InputFieldComponent} from '../../shared/components/input-field/input-field.component';
import {NotificationService} from '../../core/services/notificationService.service';
import {CpfService} from '../../core/services/cpf.service';
import {ICpf} from '../../core/interfaces/cpf';
import {TimelineComponent} from '../../shared/components/timeline/timeline.component';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {FormControlPipe} from '../../shared/pipe/formcontrol.pipe';
import {cpfValidator} from '../../core/validators/cpf.validator';
import {RegistrationStatusCardComponent} from './components/registration-status-card/registration-status-card/registration-status-card.component';
import {CommonModule} from '@angular/common';
import {CustomAccountCardComponent} from './components/custom-account-card/custom-account-card/custom-account-card.component';

@Component({
  selector: 'app-new-cooperated',
  templateUrl: './new-cooperated.component.html',
  styleUrls: ['./new-cooperated.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    InputFieldComponent,
    TimelineComponent,
    FormControlPipe,
    FormsModule,
    ReactiveFormsModule,
    RegistrationStatusCardComponent,
    CustomAccountCardComponent,
  ],
})
export class NewCooperatedComponent implements OnInit {
  constructor(
    private notificationService: NotificationService,
    private cpfService: CpfService,
    private fb: FormBuilder,
  ) {}

  form: FormGroup = new FormGroup({});
  client: any;
  loading = false;

  ngOnInit() {
    this.createForm();
  }

  checkCPF() {
    this.verifyFormValidations(this.form);
    if (this.form.invalid) {
      this.notificationService.show(
        'CPF inválido, por favor verifique o documento inserido',
        'error',
      );
      return;
    }
    this.loading = true;
    const cpfControl = this.form.get('cpf');
    if (cpfControl && cpfControl.value !== '') {
      const cleanedCpf = this.removeSpecialCharacters(cpfControl.value);
      this.cpfService.consultarCPF(cleanedCpf).subscribe((res: ICpf | null) => {
        if (res !== null) {
          this.notificationService.show(res?.status!, 'success');
          this.client = res;
          this.loading = false;
        } else {
          this.notificationService.show('CPF não encontrado', 'error');
          this.client = null;
          this.loading = false;
        }
      });
    }
  }

  createForm() {
    this.form = this.fb.group({
      cpf: new FormControl<string>('', [Validators.required, cpfValidator()]),
    });
  }

  verifyFormValidations(formGroup: FormGroup | FormArray): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      control!.markAsDirty();
      control!.markAllAsTouched();

      if (control instanceof FormGroup || control instanceof FormArray) {
        this.verifyFormValidations(control);
      }
    });
  }

  removeSpecialCharacters(value: string): string {
    return value.replace(/[^a-zA-Z0-9]/g, '');
  }

  comingSoon() {
    this.notificationService.show('Em breve', 'info');
  }
}
