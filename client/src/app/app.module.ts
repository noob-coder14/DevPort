import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WebViewComponent } from './pages/web-view/web-view.component';
import { HrClientComponent } from './pages/hr-client/hr-client.component';
import { BasicInfoDashboardComponent } from './components/dashboard-components/basic-info-dashboard/basic-info-dashboard.component';
import { EducationsDashboardComponent } from './components/dashboard-components/educations-dashboard/educations-dashboard.component';
import { ExperiencesDashboardComponent } from './components/dashboard-components/experiences-dashboard/experiences-dashboard.component';
import { ProjectsDashboardComponent } from './components/dashboard-components/projects-dashboard/projects-dashboard.component';
import { SidenavComponent } from './components/dashboard-components/sidenav/sidenav.component';
import { UserAccountsDashboardComponent } from './components/dashboard-components/user-accounts-dashboard/user-accounts-dashboard.component';
import { FiltersComponent } from './components/hr-client-components/filters/filters.component';
import { ResultsComponent } from './components/hr-client-components/results/results.component';
import { DevProfileComponent } from './components/hr-client-components/results/dev-profile/dev-profile.component';
import { BasicInfoWebComponent } from './components/web-view-components/basic-info-web/basic-info-web.component';
import { ContactFormWebComponent } from './components/web-view-components/contact-form-web/contact-form-web.component';
import { EducationsWebComponent } from './components/web-view-components/educations-web/educations-web.component';
import { ExperiencesWebComponent } from './components/web-view-components/experiences-web/experiences-web.component';
import { ProjectsWebComponent } from './components/web-view-components/projects-web/projects-web.component';
import { UserAccountsWebComponent } from './components/web-view-components/user-accounts-web/user-accounts-web.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/signin/login/login.component';
import { SignupComponent } from './pages/signin/signup/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './pages/landing/landing.component';
import { DashboardComponentsComponent } from './components/dashboard-components/dashboard-components.component';
import { HrClientComponentsComponent } from './components/hr-client-components/hr-client-components.component';
import { WebViewComponentsComponent } from './components/web-view-components/web-view-components.component';
import { CustombuttonComponent } from './components/custombutton/custombutton.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WebViewComponent,
    HrClientComponent,
    BasicInfoDashboardComponent,
    EducationsDashboardComponent,
    ExperiencesDashboardComponent,
    ProjectsDashboardComponent,
    SidenavComponent,
    UserAccountsDashboardComponent,
    FiltersComponent,
    ResultsComponent,
    DevProfileComponent,
    BasicInfoWebComponent,
    ContactFormWebComponent,
    EducationsWebComponent,
    ExperiencesWebComponent,
    ProjectsWebComponent,
    UserAccountsWebComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    LandingComponent,
    DashboardComponentsComponent,
    HrClientComponentsComponent,
    WebViewComponentsComponent,
    CustombuttonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
