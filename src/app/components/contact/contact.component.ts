import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCodepen, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope, faGlobeAfrica, faMapMarkerAlt, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

interface ContactItem {
  icon: IconDefinition,
  type: string,
  data: string
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  public downloadIcon: IconDefinition = faDownload;
  public locationIcon: IconDefinition = faMapMarkerAlt;
  public envelopeIcon: IconDefinition = faEnvelope;
  public userGraduateIcon: IconDefinition = faUserGraduate;
  public languageIcon: IconDefinition = faGlobeAfrica;
  public githubIcon: IconDefinition = faGithub;
  public codePenIcon: IconDefinition = faCodepen;
  public linkedinIcon: IconDefinition = faLinkedin;

  public contactItemList: ContactItem[] = [
    {
      icon: this.locationIcon,
      type: "contact.type.location",
      data: "contact.data.data_location"
    },
    {
      icon: this.envelopeIcon,
      type: "contact.type.email",
      data: "contact.data.data_email"
    },
    {
      icon: this.userGraduateIcon,
      type: "contact.type.education",
      data: "contact.data.data_education"
    },
    {
      icon: this.languageIcon,
      type: "contact.type.language",
      data: "contact.data.data_language"
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
