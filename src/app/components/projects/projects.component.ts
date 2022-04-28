import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public githubIcon: IconDefinition = faGithub;
  public codePenIcon: IconDefinition = faCodepen;

  public projects: Project[] = [
    {
      src: "../../../assets/images/port1.jpg",
      imgDescription: "project.img.img_description_1",
      title: "project.project_title.title_1",
      githubLink: "https://github.com/yacine-benichou/Javascript-calculator-FCC",
      codePenLink: "https://codepen.io/yacine-epf/pen/WNOWmKv",
    },
    {
      src: "../../../assets/images/port2.jpg",
      imgDescription: "project.img.img_description_2",
      title: "project.project_title.title_2",
      githubLink: "https://github.com/yacine-benichou/drum-machine-fcc",
      codePenLink: "https://codepen.io/yacine-epf/pen/KKqMPRW",
    },
    {
      src: "../../../assets/images/port3.jpg",
      imgDescription: "project.img.img_description_3",
      title: "project.project_title.title_3",
      githubLink: "https://github.com/yacine-benichou/25-5-clock-fcc",
      codePenLink: "https://codepen.io/yacine-epf/pen/gOxyGYQ",
    },
    {
      src: "../../../assets/images/port4.jpg",
      imgDescription: "project.img.img_description_4",
      title: "project.project_title.title_4",
      codePenLink: "https://codepen.io/yacine-epf/pen/BamNBLr",
    },
    {
      src: "../../../assets/images/port5.jpg",
      imgDescription: "project.img.img_description_5",
      title: "project.project_title.title_5",
      githubLink: "https://github.com/yacine-benichou/Random-Quote-Machine",
      codePenLink: "https://codepen.io/yacine-epf/pen/abBqLMo",
    },
    {
      src: "../../../assets/images/port6.jpg",
      imgDescription: "project.img.img_description_6",
      title: "project.project_title.title_6",
      githubLink: "https://github.com/yacine-benichou/android-client-form"
    },
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

}
