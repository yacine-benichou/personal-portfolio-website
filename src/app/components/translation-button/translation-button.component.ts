import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translation-button',
  templateUrl: './translation-button.component.html',
  styleUrls: ['./translation-button.component.scss']
})
export class TranslationButtonComponent implements OnInit {

  public isLanguageFrench: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
