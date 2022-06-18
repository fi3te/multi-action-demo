import { Injectable } from '@angular/core';
import { delay, from, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  demo$(message: string, maxDelay: number): Observable<boolean> {
    return from([this.randomBool(0.95)]).pipe(
      tap(() => console.log(message)),
      delay(this.randomInt(maxDelay) * 1000),
      map(value => { 
        if (!value) {
          throw new Error('Random error');
        }
        return value;
      }),
    );
  }

  private randomBool(successRate: number): boolean {
    return Math.random() <= successRate;
  }

  private randomInt(maxNumber: number): number {
    return 1 + Math.floor(Math.random() * maxNumber);
  }
}
