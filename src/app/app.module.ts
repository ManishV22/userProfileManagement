import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule, ThemeService } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ContentAnimateDirective } from './shared/directives/content-animate.directive';
import { LoginComponent } from './login/login.component';
import {MatTableModule} from '@angular/material/table';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatTabsModule} from '@angular/material/tabs';
import { RegisterComponent } from './register/register.component';
import { AddDashboardComponent } from './dashboard/add-dashboard/add-dashboard.component';
import { EditDashboardComponent } from './dashboard/edit-dashboard/edit-dashboard.component';
import { ViewDashboardComponent } from './dashboard/view-dashboard/view-dashboard.component'
//import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
// import { ItemMasterComponent } from './modules/components/item-master/item-master.component';
// import { AuthLoginComponent } from './modules/auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    SpinnerComponent,
    ContentAnimateDirective,
    LoginComponent,
    RegisterComponent,
    AddDashboardComponent,
    EditDashboardComponent,
    ViewDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    MatTableModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    SocialLoginModule,
    MatAutocompleteModule,
    ToastrModule.forRoot({
      closeButton: true
    })
  ],
  // exports: [
  //   MatFormFieldModule,
  //   MatInputModule,
  //   MatAutocompleteModule
  // ],
  providers: [
    ThemeService,
    NgbActiveModal,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              "106431971147-j0r6827dt5db6r6fl1ge5e02g82fs3h0.apps.googleusercontent.com"
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('526244792835323')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }