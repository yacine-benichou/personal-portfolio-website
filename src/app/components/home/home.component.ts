import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faderAnimation } from 'src/app/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public isDarkThemeOn = true;
  public downloadIcon = faDownload;

  constructor() { }

  ngOnInit(): void {
  }

}
