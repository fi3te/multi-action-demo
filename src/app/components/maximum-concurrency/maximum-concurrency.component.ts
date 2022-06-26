import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoService } from 'src/app/services/demo/demo.service';
import { MaximumConcurrencyActionService } from 'src/app/services/maximum-concurrency-action/maximum-concurrency-action.service';

@Component({
  selector: 'app-maximum-concurrency',
  templateUrl: './maximum-concurrency.component.html',
  styleUrls: ['./maximum-concurrency.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaximumConcurrencyComponent {

  actions = [...Array(200).keys()]
    .map(() => this.demoService.demo$('maximum', 20))
    .map(action => this.actionService.wrapAction(action));

  status$ = this.actionService.aggregate(this.actions);

  constructor(
    private actionService: MaximumConcurrencyActionService,
    private demoService: DemoService
  ) { }
}
