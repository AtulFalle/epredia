import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.registerIcons();
  }

  ngOnInit(): void {}

  registerIcons(): void {
    this.matIconRegistry.addSvgIcon(
      'vertical-divider',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/topbar separator line.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'profile',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/topbar profile icon-UNSELECTED.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'notifications-bell',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/topbar notifications icon-UNSELECTED.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'chevron-down',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/topbar white chevron.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'location',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/topbar location icon-UNSELECTED.svg')
    );
  }
}
