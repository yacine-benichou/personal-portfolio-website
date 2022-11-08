import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public isDarkThemeOn: boolean = true;

  constructor() { }

  getThemeState(): boolean {
    return this.isDarkThemeOn;
  }

  changeTheme(): boolean { 
    this.isDarkThemeOn = !this.isDarkThemeOn;
    document.body.classList.toggle('light-mode'); // toggle light-theme in the whole app
    return this.isDarkThemeOn;
  }
}
