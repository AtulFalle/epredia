import { Component, OnInit } from '@angular/core';
import { IInstrument } from 'src/app/core/models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  RootStoreState,
  InstrumentsActions,
  InstrumentsSelectors,
} from 'src/app/root-store';

@Component({
  selector: 'app-instruments-favorite',
  templateUrl: './instruments-favorite.component.html',
  styleUrls: ['./instruments-favorite.component.scss'],
})
export class InstrumentsFavoriteComponent implements OnInit {
  favoriteInstruments$: Observable<IInstrument[]>;

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit(): void {
    this.favoriteInstruments$ = this.store$.select(
      InstrumentsSelectors.selectFavoriteInstruments
    );
  }
}
