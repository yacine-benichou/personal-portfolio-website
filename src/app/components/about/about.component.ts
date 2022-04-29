import { Component, OnInit } from '@angular/core';
import { faBriefcase, faDownload, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { Framework, PortfolioItem, Timeline } from 'src/app/interfaces/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})


export class AboutComponent implements OnInit {

  public downloadIcon: IconDefinition = faDownload;
  public briefcaseIcon: IconDefinition = faBriefcase;

  public portfolioItems: PortfolioItem[]  = [
    {largeText: "10+", smallText: "about.small_text_project"},
    {largeText: "2+", smallText: "about.small_text_experience"},
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
    {
      duration: "about.timeline.duration_internship", 
      job: "about.timeline.job_internship", 
      company: "about.timeline.job_company", 
      description: "about.timeline.description_internship"
    },
    {
      duration: "about.timeline.duration_school", 
      job: "about.timeline.degree_school", 
      company: "about.timeline.name_school", 
      description: "about.timeline.description_school"
    },
  ];

  public frameworks: Framework[] = [
    {src: "assets/images/angular-logo.png", framework: "Angular"},
    {src: "assets/images/react-logo.png", framework: "React"},
    {src: "assets/images/spring-logo.png", framework: "Spring"},
  ];


  constructor() { }

  ngOnInit(): void {
  }
}
