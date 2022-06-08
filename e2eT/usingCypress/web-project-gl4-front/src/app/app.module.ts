import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { AuthentificationInterceptorProvider } from "./interceptors/auth.interceptor";
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { RegistrationPageComponent } from './pages/auth/registration-page.component';
import { LoginCardComponent } from './pages/auth/login-card/login-card.component';
import { SignupCardComponent } from './pages/auth/signup-card/signup-card.component';
import { ErrorMessageComponent } from './pages/auth/error-message/error-message.component';
import { HttpClientModule } from '@angular/common/http';
import { CinemasPageComponent } from './pages/cinemas/cinemas-page.component';
import { CinemaElementComponent } from "./pages/cinemas/cinema-element/cinema-element.component"
import { ConfirmEmailComponent } from './pages/auth/confirm-email/confirm-email.component';
import { AccountPageComponent } from './pages/account/account-page.component';
import { TopSectionComponent } from './pages/account/top-section/top-section.component';
import { MainSectionProfileComponent } from './pages/account/main-section-profile/main-section-profile.component';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { GeneralInformationSectionComponent } from './pages/account/general-information-section/general-information-section.component';
import { EmailSectionComponent } from './pages/account/email-section/email-section.component';
import { PasswordSectionComponent } from './pages/account/password-section/password-section.component';
import { HttpErrorInterceptorProvider } from './interceptors/http-error.interceptor';
import { MovieElementComponent } from './pages/movies/movie-element/movie-element.component';
import { MoviesPageComponent } from './pages/movies/movies-page.component';
import { MoviePageComponent } from './pages/movie/movie-page.component';

import { AngularMultiSelectModule } from "angular2-multiselect-dropdown"
import {CinemasCreateComponent} from './pages/cinemas/cinemas-create.component';
import {CinemaImgComponent} from './pages/cinemas/cinema-img/cinema-img.component';
import { defaultImagePipe } from './pipes/default-image.pipe';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FullCalendarModule } from '@fullcalendar/angular';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; 
import timeGridPlugin from '@fullcalendar/timegrid';
import BootstrapThemePlugin  from '@fullcalendar/bootstrap';
import { CalendarComponent } from './pages/cinemas/calendar/calendar.component';
import { LandingComponent } from './pages/landing/landing.component';
import {CinemasUpdateComponent} from './pages/cinemas/cinemas-update.component';
import {SingleCinemaComponent} from './pages/cinemas/single-cinema/single-cinema.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin,
  BootstrapThemePlugin
]);


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegistrationPageComponent,
    LoginCardComponent,
    SignupCardComponent,
    CinemasPageComponent,
    CinemaImgComponent,
    CinemasCreateComponent,
    CinemaElementComponent,
    MoviesPageComponent,
    MovieElementComponent,
    MoviePageComponent,
    ErrorMessageComponent,
    ConfirmEmailComponent,
    AccountPageComponent,
    TopSectionComponent,
    MainSectionProfileComponent,
    GeneralInformationSectionComponent,
    EmailSectionComponent,
    PasswordSectionComponent,
    defaultImagePipe,
    CalendarComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMultiSelectModule,
    ReactiveFormsModule, 
    Ng2PageScrollModule,
    InfiniteScrollModule,
    FullCalendarModule
  ],
  providers: [AuthentificationInterceptorProvider, HttpErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
