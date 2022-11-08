import { Component, OnInit } from '@angular/core';
import { faSun, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  public isDarkThemeOn!: boolean;

  public themeIcon: IconDefinition = faMoon;
  
  constructor(private themeService: ThemeService) { }

  ngOnInit(): void { 
    this.isDarkThemeOn = this.themeService.getThemeState();
    this.themeIcon = this.isDarkThemeOn ? faMoon : faSun; 
  }

  changeTheme(): void {
    this.isDarkThemeOn = this.themeService.changeTheme();
    this.themeIcon = this.isDarkThemeOn ? faMoon : faSun;
  }
}
