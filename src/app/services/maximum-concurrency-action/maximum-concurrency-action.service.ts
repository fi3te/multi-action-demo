import { Injectable } from '@angular/core';
import { catchError, combineLatest, last, map, Observable, of, shareReplay, startWith } from 'rxjs';
import { reduce, Status } from '../../models/status';

@Injectable({
  providedIn: 'root'
})
export class MaximumConcurrencyActionService {

  wrapAction<T>(action: Observable<T>): Observable<Status> {
    return action.pipe(
      last(),
      map(() => Status.COMPLETED),
      startWith(Status.PENDING),
      catchError(() => of(Status.FAILED)),
      shareReplay({ bufferSize: 1, refCount: true }),
    );
  }

  aggregate(wrappedActions: Observable<Status>[]): Observable<Status> {
    return combineLatest(wrappedActions)
      .pipe(
        map(statusValues => reduce(statusValues)),
      );
  }
}
