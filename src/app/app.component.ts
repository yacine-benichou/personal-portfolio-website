import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faderAnimation, slideInAnimation, stepper } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'portfolio-website';
  faSun = faSun;

  constructor() {}

  getRouteForAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData["animation"]
  }
}
