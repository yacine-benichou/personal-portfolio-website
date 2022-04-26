import { Component, OnInit } from '@angular/core';
import { faDownload, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public downloadIcon: IconDefinition = faDownload;

  constructor() { }

  ngOnInit(): void {
  }

}
