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
  sortOrders: string[] = ['Name A-Z', 'Name Z-A', 'Status'];
  filters: string[] = [];
  focusedMenu = { sort: false, filter: false };
  instruments$: Observable<IInstrument[]>;
  isLoading$: Observable<boolean>;
  instrumentsSerialNum$: Observable<string[]>;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private store$: Store<RootStoreState.State>
  ) {
    this.registerIcons();
  }

  ngOnInit(): void {
    this.store$.dispatch(InstrumentsActions.getInstruments());
    this.instruments$ = this.store$.select(
      InstrumentsSelectors.selectFilteredInstrumentsList
    );
    this.instrumentsSerialNum$ = this.store$.select(
      InstrumentsSelectors.selectInstrumentsSerialNum
    );
  }

  registerIcons(): void {
    this.matIconRegistry.addSvgIcon(
      'sort',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/sort.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'filter',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/filter.svg')
    );
  }

  changeSortOrder(sortOrder: string) {
    this.store$.dispatch(InstrumentsActions.sortInstruments({ sortOrder }));
  }

  closeFiltersFocus(element) {
    console.log(element);
    this.focusedMenu[element] = false;
  }
  
  openFiltersFocus(element) {
    console.log(element);
    this.focusedMenu[element] = true;
  }
}
