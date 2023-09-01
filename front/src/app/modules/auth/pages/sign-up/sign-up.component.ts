import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IAuthService } from 'src/app/core/interfaces/auth-service.interface';
import { Session } from 'src/app/core/models/session';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  public signUpForm: FormGroup;
  private session: Session;

  constructor(private formBuilder: FormBuilder,
              private authService: IAuthService) {
    this.signUpForm = this.formBuilder.group({
      firstName: [undefined, []],
      lastName: [undefined, []],
      username: [undefined, []],
      email: [undefined, []],
      password: [undefined, []],
      confirmPassword: [undefined, []],
    });
  }

  public onSubmit(): void {
    if(!this.confirmPasswordAreSame()) {
      // cambiar a notificacion ej.: NgxToaster
      console.error(`passwords do not match`);
      return;
    }
    
    const newUser = new User(
      this.signUpForm.get('username')?.value,
      this.signUpForm.get('email')?.value,
      this.signUpForm.get('password')?.value,
      this.signUpForm.get('firstName')?.value,
      this.signUpForm.get('lastName')?.value,
    );

    this.signUp(newUser);
  }

  private signUp(user: User) {
    this.authService.signUp(user).subscribe({
      next: (session: Session) => {
        this.session = session;
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => { console.info(`complete sign-up`); }
    });
  }

  private confirmPasswordAreSame(): boolean {
    return this.signUpForm.get('confirmPassword')?.value === this.signUpForm.get('password')?.value;
  }
}
