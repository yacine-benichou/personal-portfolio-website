import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public isLanguageFrench: boolean = true; // par défaut le langage est français
  constructor() { }


  public getLanguage(): boolean { // retourne isLanguageFrench
    return this.isLanguageFrench;
  }

  public setLanguageToFrench(): boolean { // rend le langage français et retourne isLanguageFrench
    this.isLanguageFrench = true;
    return this.isLanguageFrench;
  }

  public setLanguageToEnglish(): boolean {  // rend le langage anglais et retourne isLanguageFrench
    this.isLanguageFrench = false;
    return this.isLanguageFrench;
  }
}
