import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoService } from 'src/app/services/demo/demo.service';
import { LimitedConcurrencyActionService } from 'src/app/services/limited-concurrency-action/limited-concurrency-action.service';

@Component({
  selector: 'app-limited-concurrency2',
  templateUrl: './limited-concurrency2.component.html',
  styleUrls: ['./limited-concurrency2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LimitedConcurrency2Component {

  private demoActions = [...Array(200).keys()]
    .map(() => this.demoService.demo$('limited2', 3));

  private wrappedActions = this.demoActions
    .map(action => this.actionService.wrapAction(action))
    .map(action => this.actionService.createLinkedUiAction(action));

  actions = this.wrappedActions.map(element => element[1]);

  status$ = this.actionService.aggregate(this.wrappedActions.map(element => element[0]), 10);

  constructor(
    private actionService: LimitedConcurrencyActionService,
    private demoService: DemoService
  ) { }
}
