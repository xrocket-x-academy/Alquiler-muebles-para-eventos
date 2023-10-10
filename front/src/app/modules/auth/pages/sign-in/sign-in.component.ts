import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAuthService } from 'src/app/core/interfaces/auth-service.interface';
import { ISessionService } from 'src/app/core/interfaces/session-service.interface';
import { Session } from 'src/app/core/models/session';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {

  public registerForm: FormGroup;
  private session: Session;
  // para almacenar el mensaje
  mensaje: string = '';

  constructor(private formBuilder: FormBuilder,
              private authService: IAuthService,
              private sessionService: ISessionService) {
    this.registerForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(128)
      ]]
    });
  }

  public onSubmit(): void {
    
    const userLogin = new User();
    userLogin.email = this.registerForm.get('email')?.value;
    userLogin.password = this.registerForm.get('password')?.value;


    this.signIn(userLogin);
  }

  private signIn(user: User) {
    this.authService.signIn(user).subscribe({
      next: (session: Session) => {
        this.session = session;
        this.sessionService.setToken(this.session);
        //Asigna el mensaje de éxito
         this.mensaje = 'Inicio de sesión exitoso';
      },
      error: (err) => {
        console.error(err);
        // En caso de error, puedes asignar un mensaje de error aquí también
        this.mensaje = 'Error al iniciar sesión. Email y/o password invalidos.';
      },
      complete: () => { console.info(`complete sign-in`); }
    });
  }

}
