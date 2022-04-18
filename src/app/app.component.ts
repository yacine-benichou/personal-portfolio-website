import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faderAnimation, stepper } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    faderAnimation
  ]
})
export class AppComponent {
  title = 'portfolio-website';
  faSun = faSun;

  constructor(private contexts: ChildrenOutletContexts, private router: Router) {}

  getRouteForAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData["animation"]
  }
}
