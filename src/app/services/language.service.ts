import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public isLanguageFrench: boolean = false; // english language by default
  constructor() { }


  public getLanguage(): boolean {
    return this.isLanguageFrench;
  }

  public setLanguageToFrench(): boolean {
    this.isLanguageFrench = true;
    return this.isLanguageFrench;
  }

  public setLanguageToEnglish(): boolean {
    this.isLanguageFrench = false;
    return this.isLanguageFrench;
  }
}
