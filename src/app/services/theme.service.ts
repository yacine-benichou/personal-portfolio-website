import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public isDarkThemeOn: boolean = true;

  constructor() { }

  getThemeState(): boolean {  // retourne isDarkThemeOn
    return this.isDarkThemeOn;
  }

  changeTheme(): boolean { 
    this.isDarkThemeOn = !this.isDarkThemeOn; // change la valeur de isDarkThemeOn par son contraire
    document.body.classList.toggle('light-mode'); // active le thème blanc sur toute l'application
    return this.isDarkThemeOn;
  }
}
