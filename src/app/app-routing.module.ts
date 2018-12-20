import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamplesComponent } from './examples/examples.component';
import { APageComponent } from './a-page/a-page.component';
import { AnotherPageComponent } from './another-page/another-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  { path: 'examples', component: ExamplesComponent },
  { path: 'a-page', component: APageComponent },
  { path: 'another-page', component: AnotherPageComponent },
  { path: 'contact-us', component: ContactPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
