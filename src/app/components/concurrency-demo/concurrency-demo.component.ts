import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from 'src/app/models/status';

@Component({
  selector: 'app-concurrency-demo',
  templateUrl: './concurrency-demo.component.html',
  styleUrls: ['./concurrency-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConcurrencyDemoComponent {

  @Input()
  label?: string;

  @Input()
  actions?: Observable<Status>[];

  @Input()
  status$?: Observable<Status>;
}
