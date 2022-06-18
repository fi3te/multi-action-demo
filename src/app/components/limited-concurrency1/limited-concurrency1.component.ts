import { Component } from '@angular/core';
import { startWith } from 'rxjs';
import { Status } from 'src/app/models/status';
import { DemoService } from 'src/app/services/demo/demo.service';
import { LimitedConcurrencyActionService } from 'src/app/services/limited-concurrency-action/limited-concurrency-action.service';

@Component({
  selector: 'app-limited-concurrency1',
  templateUrl: './limited-concurrency1.component.html',
  styleUrls: ['./limited-concurrency1.component.scss']
})
export class LimitedConcurrencyComponent1 {

  private demoActions = [...Array(100).keys()]
    .map(() => this.demoService.demo$('limited1', 3));

  private connectableActions = this.demoActions
    .map(action => this.actionService.toConnectableAction(action));

  actions = this.connectableActions.map(
    action$ => action$.pipe(
      startWith(Status.PENDING)
    )
  );

  status$ = this.actionService.aggregateConnectables(this.connectableActions, 10);

  constructor(
    private actionService: LimitedConcurrencyActionService,
    private demoService: DemoService
  ) { }

}
