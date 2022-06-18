import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaximumConcurrencyComponent } from './components/maximum-concurrency/maximum-concurrency.component';
import { LimitedConcurrencyComponent1 } from './components/limited-concurrency1/limited-concurrency1.component';
import { StatusBadgeComponent } from './components/status-badge/status-badge.component';
import { ConcurrencyDemoComponent } from './components/concurrency-demo/concurrency-demo.component';
import { LimitedConcurrency2Component } from './components/limited-concurrency2/limited-concurrency2.component';

@NgModule({
  declarations: [
    AppComponent,
    MaximumConcurrencyComponent,
    LimitedConcurrencyComponent1,
    StatusBadgeComponent,
    ConcurrencyDemoComponent,
    LimitedConcurrency2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
