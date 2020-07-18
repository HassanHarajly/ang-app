import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroPageComponent } from './components/intro-page/intro-page.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    IntroPageComponent
  ],
    imports: [
        BrowserModule,
        RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
