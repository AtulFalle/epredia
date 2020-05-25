import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IInstrument } from '../../../core/models';
import {
  RootStoreState,
  InstrumentsActions,
  InstrumentsSelectors,
} from 'src/app/root-store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  instruments$: Observable<IInstrument[]>;
  isLoading$: Observable<boolean>;

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit(): void {
    this.store$.dispatch(InstrumentsActions.getInstruments());
    this.instruments$ = this.store$.select(
      InstrumentsSelectors.selectFilteredInstrumentsList
    );
  }
}
