import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public isDarkThemeOn: boolean = true;

  constructor() { }

  /* Les méthodes n'utilisent pas d'Observables car elles ne font pas appel à un serveur.
    Ainsi, elles n'ont pas besoin d'être asynchrones. */

  getThemeState(): boolean {
    return this.isDarkThemeOn;
  }

  changeTheme(): boolean {
    this.isDarkThemeOn = !this.isDarkThemeOn;
    document.body.classList.toggle('light-mode');
    return this.getThemeState();
  }
}
