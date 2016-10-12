import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';

import { HomeComponent }         from './home/home.component';
import { ContactComponent }      from './contact/contact.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'contact', component: ContactComponent },
      { path: '', component: HomeComponent },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
