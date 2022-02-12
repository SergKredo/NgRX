import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ExampleActions } from '../store/example.actions';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  message:string
  constructor(private store$: Store) { }

  ngOnInit(): void {
  }

  increaseCount():void{
       this.store$.dispatch(ExampleActions.increaseCount())
  }

  sendMessage():void{
      this.store$.dispatch(ExampleActions.sendMessage({message:this.message}));
  }
}
