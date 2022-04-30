import { Component, OnInit } from '@angular/core';
import { faHome, faUser, faBriefcase, faEnvelope, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  // définition des icones utilisées 
  public homeIcon: IconDefinition = faHome;
  public userIcon: IconDefinition = faUser;
  public briefcaseIcon: IconDefinition = faBriefcase;
  public enveloppeIcon: IconDefinition = faEnvelope;
  
  constructor() { }

  ngOnInit(): void {
  }

}
