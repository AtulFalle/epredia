import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IInstrument } from '../../../core/models';
import {
  RootStoreState,
  InstrumentsActions,
  InstrumentsSelectors,
} from 'src/app/root-store';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.scss'],
})
export class InstrumentsComponent implements OnInit {
  instruments$: Observable<IInstrument[]>;
  isLoading$: Observable<boolean>;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private store$: Store<RootStoreState.State>
  ) {
    this.matIconRegistry.addSvgIcon(
      'sort',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/sort.svg')
    );
  }

  ngOnInit(): void {
    this.store$.dispatch(InstrumentsActions.getInstruments());
    this.instruments$ = this.store$.select(
      InstrumentsSelectors.selectFilteredInstrumentsList
    );
  }
}
