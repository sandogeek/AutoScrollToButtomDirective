import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AutoScrollToBottomDirective } from './auto-scroll-to-bottom.directive';

@NgModule({
  declarations: [
    AppComponent,
    AutoScrollToBottomDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
