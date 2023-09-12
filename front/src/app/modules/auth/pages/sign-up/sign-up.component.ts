import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAuthService } from 'src/app/core/interfaces/auth-service.interface';
import { ISessionService } from 'src/app/core/interfaces/session-service.interface';
import { Session } from 'src/app/core/models/session';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {

  public registerForm: FormGroup;
  private session: Session;

  constructor(private formBuilder: FormBuilder,
              private authService: IAuthService,
              private sessionService: ISessionService) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(30)
      ]],
      lastName: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(30)
      ]],
      username: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(128),
      ]],
      // confirmPassword: ['', [
      //   Validators.required,
      //   Validators.minLength(14),
      //   Validators.maxLength(128),
      // ]],
    });
  }

  public onSubmit(): void {
    
    // VER LÓGICA CONFIRMAR PASSWORD

    // if(!this.confirmPasswordAreSame()) {
    //   // cambiar a notificacion ej.: NgxToaster
    //   console.error(`passwords do not match`);
    //   return;
    // }
    
    const newUser = new User(
      this.registerForm.get('username')?.value,
      this.registerForm.get('email')?.value,
      this.registerForm.get('password')?.value,
      this.registerForm.get('firstName')?.value,
      this.registerForm.get('lastName')?.value,
    );

    this.signUp(newUser);
  }

  private signUp(user: User) {
    this.authService.signUp(user).subscribe({
      next: (session: Session) => {
        this.session = session;
        this.sessionService.setToken(this.session);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => { console.info(`complete sign-up`); }
    });
  }

  // TODO: Aplicar lógica confirmar password
  private confirmPasswordAreSame(): boolean {
    return this.registerForm.get('confirmPassword')?.value === this.registerForm.get('password')?.value;
  }
}
