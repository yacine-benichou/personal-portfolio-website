import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCodepen, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope, faGlobeAfrica, faMapMarkerAlt, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  public isDarkThemeOn: boolean = true;
  public themeStateObject: any;
  public downloadIcon: IconDefinition = faDownload;
  public locationIcon: IconDefinition = faMapMarkerAlt;
  public envelopeIcon: IconDefinition = faEnvelope;
  public userGraduateIcon: IconDefinition = faUserGraduate;
  public languageIcon: IconDefinition = faGlobeAfrica;
  public githubIcon: IconDefinition = faGithub;
  public codePenIcon: IconDefinition = faCodepen;
  public linkedinIcon: IconDefinition = faLinkedin;

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.themeStateObject = this.location.getState();
    this.isDarkThemeOn = this.themeStateObject.themeState;
  }

}
