import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }          from './app.component';
import { AppRoutingModule }      from './app-routing.module';
import { UserService }           from './services/user.service';
import { HeaderMainComponent }   from './header/header.main.component';
import { HeaderHomeComponent }   from './header/header.home.component';
import { FooterMainComponent }   from './footer/footer.main.component';
import { FooterHomeComponent }   from './footer/footer.home.component';
import { HomeComponent }         from './home/home.component';
import { ContactComponent }      from './contact/contact.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent, 
    HeaderMainComponent, 
    HeaderHomeComponent, 
    FooterMainComponent, 
    FooterHomeComponent, 
    HomeComponent, 
    ContactComponent, 
    PageNotFoundComponent
  ],
  providers: [
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
