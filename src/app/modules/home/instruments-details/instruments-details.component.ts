import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IInstrument } from 'src/app/core/models';

@Component({
  selector: 'app-instruments-details',
  templateUrl: './instruments-details.component.html',
  styleUrls: ['./instruments-details.component.scss'],
})
export class InstrumentsDetailsComponent implements OnInit {
  @Input() instrument: IInstrument;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.registerSvgIcons();
  }

  registerSvgIcons() {
    this.matIconRegistry.addSvgIcon(
      'star',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/star.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'ellipses',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svg/ellipses.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'circle',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/svg/circle.svg'
      )
    );
  }
}
