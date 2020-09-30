import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CartModel } from '../../models/cart.model';

@Component({
selector: 'app-navbar',
templateUrl: './navbar.component.html',
styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
cart$: Observable<CartModel>;

constructor(private store: Store<CartModel>) {
    this.cart$ = store.pipe(select('cart'));
}

ngOnInit() {
}

}
