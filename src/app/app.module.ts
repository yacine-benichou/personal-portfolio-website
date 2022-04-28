import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ThemeComponent } from './components/theme/theme.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DownloadButtonComponent } from './components/download-button/download-button.component';
import { TranslationButtonComponent } from './components/translation-button/translation-button.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThemeComponent,
    NavigationComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    DownloadButtonComponent,
    TranslationButtonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: "", redirectTo: "/home", pathMatch: "full"},
      {path: "home", component: HomeComponent, data: { animation: 'HomePage' }},
      {path: "about_me", component: AboutComponent, data: { animation: 'AboutPage' }},
      {path: "projects", component: ProjectsComponent},
      {path: "contact_me", component: ContactComponent},
    ], {scrollPositionRestoration: 'enabled'}),
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
