import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent {
  cart$: Observable<[]>;

  constructor(private store: Store<{ cart: [] }>) {
    this.cart$ = store.pipe(select('cart'));
  }

}
