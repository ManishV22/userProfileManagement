//import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { NotificationService } from '../core/common-services/notification.service';
import { AuthService } from '../core/services/auth.service';
import { TokenStorageService } from '../core/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any = {};
  //  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  // form: FormGroup;
  // userId = 'test@mail.com';
  // password = 'test@123';
  // unit = 'Bangalore';

  loginForm: any = '';
  socialUser: any = "";
  isLoggedIn: boolean = false;

  constructor(private router: Router, private f_builder: FormBuilder, private notify: NotificationService,
    private authService: AuthService, private tokenStorage: TokenStorageService,
    private googleAuthService: SocialAuthService) { }

  ngOnInit(): void {
    // if (this.tokenStorage.getToken()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.tokenStorage.getUser().roles;
    // }

    this.googleAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedIn = (user != null);
      console.log(this.socialUser);
    });

  }



  loginWithGoogle(): void {
    this.googleAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.googleAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }


  logOut(): void {
    this.googleAuthService.signOut();
  }


  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['/dashboard']);
        //this.roles = this.tokenStorage.getUser().roles;
        //this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }


}
