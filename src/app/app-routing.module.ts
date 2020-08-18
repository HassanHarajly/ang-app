import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroPageComponent } from './components/intro-page/intro-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

const routes: Routes = [
    { path: 'intro', component: IntroPageComponent },
  { path: 'aboutme', component: AboutMeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
