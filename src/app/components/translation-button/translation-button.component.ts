import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-translation-button',
  templateUrl: './translation-button.component.html',
  styleUrls: ['./translation-button.component.scss']
})
export class TranslationButtonComponent implements OnInit {

  public isLanguageFrench!: boolean;

  constructor(private translateService: TranslateService, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.isLanguageFrench = this.languageService.getLanguage();
    console.log(this.isLanguageFrench);
  }

  public setLanguageToFrench(): void {  
    this.isLanguageFrench = this.languageService.setLanguageToFrench();
    this.translateService.use("fr");  // service read the file fr.json
  }

  public setLanguageToEnglish(): void {
    this.isLanguageFrench = this.languageService.setLanguageToEnglish();
    this.translateService.use("en"); // service read the file en.json
  }

}
