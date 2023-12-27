import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../pages/homepage/homepage.component';
import { ContactComponent } from '../components/contact/contact.component';
import { BpjepsComponent } from '../pages/bpjeps/bpjeps.component';
import { TeamsComponent } from '../components/teams/teams.component';
import { HandicapComponent } from '../components/handicap/handicap.component';
import { ResultsComponent } from '../components/results/results.component';
import { LocalComponent } from '../components/local/local.component';
import { InscriptionComponent } from '../pages/inscription/inscription.component';
import { NutritionComponent } from '../pages/nutrition/nutrition.component';
import { ActusComponent } from '../pages/actus/actus.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'bpjeps',
    component: BpjepsComponent,
    children: [
      { path: 'equipes', component: TeamsComponent },
      {
        path: 'stagiaire_en_situation_d_handicap',
        component: HandicapComponent,
      },
      { path: 'resultats_et_debouches', component: ResultsComponent },
      { path: 'nos_locaux', component: LocalComponent },
    ],
  },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'certification-nutrition', component: NutritionComponent },
  { path: 'actu', component: ActusComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
