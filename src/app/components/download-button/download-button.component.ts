import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-download-button',
  templateUrl: './download-button.component.html',
  styleUrls: ['./download-button.component.scss']
})
export class DownloadButtonComponent implements OnInit {

  public downloadIcon: IconDefinition = faDownload; 
  
  constructor() { }

  ngOnInit(): void {
  }

  public downloadCV(): void {
    let link = document.createElement("a")
    link.download = "CV-Yacine-BENICHOU";
    link.href = "../../../assets/CV-Yacine-BENICHOU.pdf";
    link.click();
  }

}
