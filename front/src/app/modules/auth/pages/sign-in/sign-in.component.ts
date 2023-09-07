import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAuthService } from 'src/app/core/interfaces/auth-service.interface';
import { ISessionService } from 'src/app/core/interfaces/session-service.interface';
import { Session } from 'src/app/core/models/session';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  public signInForm: FormGroup;
  private session: Session;

  constructor(private formBuilder: FormBuilder,
              private authService: IAuthService,
              private sessionService: ISessionService) {
    this.signInForm = this.formBuilder.group({
      email: [undefined, []],
      password: [undefined, []]
    });
  }

  public onSubmit(): void {
    
    const userLogin = new User();
    userLogin.email = this.signInForm.get('email')?.value;
    userLogin.password = this.signInForm.get('password')?.value;


    this.signIn(userLogin);
  }

  private signIn(user: User) {
    this.authService.signIn(user).subscribe({
      next: (session: Session) => {
        this.session = session;
        this.sessionService.setToken(this.session);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => { console.info(`complete sign-in`); }
    });
  }

}
