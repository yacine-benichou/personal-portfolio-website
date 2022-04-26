import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { faBriefcase, faDownload, IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface PortfolioItem {
  largeText: string,
  smallText: string
}

interface Timeline {
  duration: string,
  job: string,
  company: string,
  description: string,
}

interface Framework {
  src: string,
  framework: string,
}

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

  public portfolioItems: PortfolioItem[]  = [
    {largeText: "10+", smallText: "Projects Completed"},
    {largeText: "2+", smallText: "Years of Experience"},
  ];

  public languages: string[] = [
    "HTML5",
    "CSS3 / SCSS",
    "JavaScript / TypeScript",
    "Python",
    "Java",
    "Kotlin"
  ];

  public timelines: Timeline[] = [
    {duration: "Juillet 2021 - Janvier 2022", job: "Développeur Full Stack", 
    company: "Société générale", description: "Développement application interne à l'entreprise avec Angular et Spring java."},
    {duration: "2020 - present", job: "Diplôme d'ingénieur en ingénierie et numérique", 
    company: "EPF École d'ingénieur-e-s", description: "Actuellement en 4ème année."},
  ];

  public frameworks: Framework[] = [
    {src: "../../../assets/images/angular-logo.png", framework: "Angular"},
    {src: "../../../assets/images/react-logo.png", framework: "React"},
    {src: "../../../assets/images/spring-logo.png", framework: "Spring"},
  ]


  constructor(private location: Location) { }

  ngOnInit(): void {
    this.themeStateObject = this.location.getState();
    this.isDarkThemeOn = this.themeStateObject.themeState;
  }

}
