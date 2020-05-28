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
  focusedMenu = { sort: false, filter: false };
  instruments$: Observable<IInstrument[]>;
  isLoading$: Observable<boolean>;
  instrumentsSerialNum$: Observable<{
    serialNum: string;
    selected: boolean;
  }[]>;
  instrumentsFilters$: Observable<string[]>;

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
      InstrumentsSelectors.selectAllInstrumentsFilters
    );
    this.instrumentsFilters$ = this.store$.select(
      InstrumentsSelectors.instrumentsFilters
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
    this.matIconRegistry.addSvgIcon(
      'close',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/close.svg')
    );
  }

  changeSortOrder(sortOrder: string) {
    this.store$.dispatch(InstrumentsActions.sortInstruments({ sortOrder }));
  }

  closeFiltersFocus(element) {
    this.focusedMenu[element] = false;
  }

  openFiltersFocus(element) {
    this.focusedMenu[element] = true;
  }

  toggleFilter(proposedFilter: string) {
    this.store$.dispatch(
      InstrumentsActions.proposedInstrumentsFilter({ proposedFilter })
    );
  }

  applyFilters() {
    this.store$.dispatch(InstrumentsActions.applyInstrumentsFilter());
  }

  removeFilter(filter) {
    this.toggleFilter(filter);
    this.applyFilters();
  }
}
