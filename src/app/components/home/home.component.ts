import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public isDarkThemeOn = true;

  constructor() { }

  ngOnInit(): void {
  }

}
