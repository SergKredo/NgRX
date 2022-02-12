import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgModel } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ExampleSelectors } from '../store/example.selectors';
import { ExampleActions } from '../store/example.actions';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  count$: Observable<number>;
  message$: Observable<string>;

  constructor(private store$: Store) {
    this.count$ = this.store$.select(ExampleSelectors.count);
    this.message$ = this.store$.select(ExampleSelectors.message);
  }

  ngOnInit(): void {
     this.store$.select(ExampleSelectors.giveMeAllData).subscribe(data=>console.log(data));
  }

  getData(){
    this.store$.dispatch(ExampleActions.getData());

  }

}
