import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons';

interface Project {
  src: string,
  imgDescription: string,
  title: string,
  githubLink?: string,
  codePenLink?: string,
}

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
      imgDescription: "hand typing on keyboard",
      title: "JavaScript Calculator (React)",
      githubLink: "https://github.com/yacine-benichou/Javascript-calculator-FCC",
      codePenLink: "https://codepen.io/yacine-epf/pen/WNOWmKv",
    },
    {
      src: "../../../assets/images/port2.jpg",
      imgDescription: "Mac screen with rose light",
      title: "Drum Machine (React)",
      githubLink: "https://github.com/yacine-benichou/drum-machine-fcc",
      codePenLink: "https://codepen.io/yacine-epf/pen/KKqMPRW",
    },
    {
      src: "../../../assets/images/port3.jpg",
      imgDescription: "Double screen with blue light",
      title: "25:5 clock (React)",
      githubLink: "https://github.com/yacine-benichou/25-5-clock-fcc",
      codePenLink: "https://codepen.io/yacine-epf/pen/gOxyGYQ",
    },
    {
      src: "../../../assets/images/port4.jpg",
      imgDescription: "Laptop viewed from the side",
      title: "Data Visualization of US GDP (D3.js)",
      codePenLink: "https://codepen.io/yacine-epf/pen/BamNBLr",
    },
    {
      src: "../../../assets/images/port5.jpg",
      imgDescription: "Macbook with Ipad viewed from the side",
      title: "Random Quote Machine (HTML/CSS/JS/Bootstrap)",
      githubLink: "https://github.com/yacine-benichou/Random-Quote-Machine",
      codePenLink: "https://codepen.io/yacine-epf/pen/abBqLMo",
    },
    {
      src: "../../../assets/images/port6.jpg",
      imgDescription: "Coding setup with big screen and laptop on the right",
      title: "Android Client Form (Kotlin)",
      githubLink: "https://github.com/yacine-benichou/android-client-form"
    },
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

}
