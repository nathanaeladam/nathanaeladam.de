import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { ImprintComponent } from './imprint/imprint.component';

const routes: Routes = [
  {path:'', component: HomescreenComponent},
  {path:'imprint', component: ImprintComponent},
  {path:'data-protection', component: DataProtectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
