import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeamsComponent } from './components/teams/teams.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BpjepsComponent } from './pages/bpjeps/bpjeps.component';
import { NutritionComponent } from './pages/nutrition/nutrition.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ActusComponent } from './pages/actus/actus.component';
import { MentionLegaleComponent } from './components/mention-legale/mention-legale.component';
import { HandicapComponent } from './components/handicap/handicap.component';
import { ResultsComponent } from './components/results/results.component';
import { LocalComponent } from './components/local/local.component';
import { CarouselComponent } from './core/carousel/carousel.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavComponent } from './core/nav/nav.component';
import { ActuComponent } from './components/actu/actu.component';
import { DistancielComponent } from './components/distanciel/distanciel.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TeamsComponent,
    ContactComponent,
    HomepageComponent,
    BpjepsComponent,
    NutritionComponent,
    InscriptionComponent,
    ActuComponent,
    MentionLegaleComponent,
    HandicapComponent,
    ResultsComponent,
    LocalComponent,
    CarouselComponent,
    NavComponent,
    ActusComponent,
    DistancielComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
