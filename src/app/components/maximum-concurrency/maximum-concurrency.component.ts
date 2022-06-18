import { Component } from '@angular/core';
import { MaximumConcurrencyActionService } from 'src/app/services/maximum-concurrency-action/maximum-concurrency-action.service';
import { DemoService } from 'src/app/services/demo/demo.service';

@Component({
  selector: 'app-maximum-concurrency',
  templateUrl: './maximum-concurrency.component.html',
  styleUrls: ['./maximum-concurrency.component.scss']
})
export class MaximumConcurrencyComponent {

  actions = [...Array(100).keys()]
    .map(() => this.demoService.demo$('maximum', 20))
    .map(action => this.actionService.wrapAction(action));

  status$ = this.actionService.aggregate(this.actions);

  constructor(
    private actionService: MaximumConcurrencyActionService,
    private demoService: DemoService
  ) { }
}
