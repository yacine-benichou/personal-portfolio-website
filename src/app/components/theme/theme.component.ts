import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  @Input() themeState: boolean | undefined;
  @Output() themeEvent: EventEmitter<boolean> = new EventEmitter();

  public themeIcon = faMoon;
  constructor() { }

  ngOnInit(): void {
  }

  changeTheme(): void {
    this.themeIcon = this.themeIcon === faMoon ? faSun : faMoon;
    this.themeState = this.themeIcon === faSun ? false : true;
    document.body.classList.toggle('light-mode');
    this.themeEvent.emit(this.themeState);
  }

}
