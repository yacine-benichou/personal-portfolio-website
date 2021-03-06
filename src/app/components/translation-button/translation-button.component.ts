import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-translation-button',
  templateUrl: './translation-button.component.html',
  styleUrls: ['./translation-button.component.scss']
})
export class TranslationButtonComponent implements OnInit {

  public isLanguageFrench: boolean = true;

  constructor(private translateService: TranslateService, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.isLanguageFrench = this.languageService.getLanguage(); // affecte à isLanguageFrench la valeur retournée par getLanguage()
  }

  public setLanguageToFrench(): void {  
    this.isLanguageFrench = this.languageService.setLanguageToFrench();
    this.translateService.use("fr");  // fait en sorte que le service lit le fichier fr.json
  }

  public setLanguageToEnglish(): void {
    this.isLanguageFrench = this.languageService.setLanguageToEnglish();
    this.translateService.use("en"); // fait en sorte que le service lit le fichier en.json
  }

}
