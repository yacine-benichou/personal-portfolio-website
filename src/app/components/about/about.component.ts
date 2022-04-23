import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { faBriefcase, faDownload, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public isDarkThemeOn: boolean = true;
  public themeStateObject: any;
  public downloadIcon: IconDefinition = faDownload;
  public briefcaseIcon: IconDefinition = faBriefcase;


  constructor(private location: Location) { }

  ngOnInit(): void {
    this.themeStateObject = this.location.getState();
    this.isDarkThemeOn = this.themeStateObject.themeState;
  }

}
