import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MyServiceService } from "../shared/my-service.service";
import { ExampleActions } from "./example.actions";
import{map, mergeMap} from "rxjs/operators";

@Injectable()
export class ExampleEffects{
  constructor(private actions$: Actions, private myService: MyServiceService){}


  loadData$ = createEffect(()=>
  this.actions$.pipe(
   ofType(ExampleActions.getData),
   mergeMap(()=>
   this.myService.getSomeStuff().pipe(
     map((data)=>{
       return ExampleActions.getDataSuccess({data: data});
     })
   )
  )
  )
  );

}
