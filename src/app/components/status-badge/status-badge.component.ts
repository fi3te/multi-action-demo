import { Component, Input, OnInit } from '@angular/core';
import { Status } from 'src/app/models/status';

@Component({
  selector: 'app-status-badge',
  templateUrl: './status-badge.component.html',
  styleUrls: ['./status-badge.component.scss']
})
export class StatusBadgeComponent {

  @Input()
  status?: Status | null;

  @Input()
  tiny?: boolean;

  Status = Status;
}
