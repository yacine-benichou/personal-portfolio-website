import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public isDarkThemeOn: boolean = true;
  public themeStateObject: any;
  public githubIcon: IconDefinition = faGithub;
  public codePenIcon: IconDefinition = faCodepen;

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.themeStateObject = this.location.getState();
    this.isDarkThemeOn = this.themeStateObject.themeState;
  }

}
