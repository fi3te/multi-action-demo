import { Injectable } from '@angular/core';
import { catchError, Connectable, connectable, from, last, map, mergeAll, mergeMap, Observable, of, startWith, Subject, tap, toArray } from 'rxjs';
import { reduce, Status } from 'src/app/models/status';

@Injectable({
  providedIn: 'root'
})
export class LimitedConcurrencyActionService {

  // Option 1

  toConnectableAction<T>(action: Observable<T>): Connectable<Status> {
    return connectable(action.pipe(
      last(),
      map(() => Status.COMPLETED),
      catchError(() => of(Status.FAILED)),
    ));
  }

  aggregateConnectables(actions: Connectable<Status>[], concurrency: number): Observable<Status> {
    return from(actions).pipe(
      mergeMap(action => {
        setTimeout(() => action.connect(), 0);
        return action;
      }, concurrency),
      toArray(),
      map(statusValues => reduce(statusValues)),
      startWith(Status.PENDING),
    );
  }

  // Option 2

  wrapAction<T>(action: Observable<T>): Observable<Status> {
    return action.pipe(
      last(),
      map(() => Status.COMPLETED),
      catchError(() => of(Status.FAILED)),
    );
  }

  createLinkedUiAction(action: Observable<Status>): [Observable<Status>, Observable<Status>] {
    const uiAction = new Subject<Status>();
    return [
      action.pipe(
        tap(value => {
          uiAction.next(value);
        }),
      ),
      uiAction.pipe(
        startWith(Status.PENDING)
      ),
    ];
  }

  aggregate(actions: Observable<Status>[], concurrency: number): Observable<Status> {
    return from(actions).pipe(
      mergeAll(concurrency),
      toArray(),
      map(statusValues => reduce(statusValues)),
      startWith(Status.PENDING),
    );
  }
}
