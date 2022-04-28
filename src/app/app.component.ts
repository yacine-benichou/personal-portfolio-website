import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ChildrenOutletContexts, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio-website';
  faSun = faSun;

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang("fr");
    translateService.use("fr");
  }
}
