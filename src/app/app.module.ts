import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    MyskillsComponent,
    MyWorkComponent,
    AboutMeComponent,
    ContactMeComponent,
    FooterComponent,
    MobileHeaderComponent,
    HomescreenComponent,
    ImprintComponent,
    DataProtectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
