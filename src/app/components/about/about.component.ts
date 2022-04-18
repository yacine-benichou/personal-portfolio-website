import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public isDarkThemeOn: boolean = true;
  public themeStateObject: any;


  constructor(private location: Location) { }

  ngOnInit(): void {
    this.themeStateObject = this.location.getState();
    this.isDarkThemeOn = this.themeStateObject.themeState;
    console.log(this.themeStateObject)
  }

}
