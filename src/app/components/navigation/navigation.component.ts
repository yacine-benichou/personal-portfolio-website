import { Component, Input, OnInit } from '@angular/core';
import { faHome, faUser, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public homeIcon = faHome;
  public userIcon = faUser;
  public briefcaseIcon = faBriefcase;
  public enveloppeIcon = faEnvelope;
  
  @Input() isDarkThemeOn: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
