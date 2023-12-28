import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  menuItems = [
    { label: 'Accueil', link: '/' },
    {
      label: 'BPJEPS selon Le Panse',
      link: '/bpjeps',
    },
    { label: 'Certification Nutrition', link: '/certification-nutrition' },
    { label: "S'inscrire", link: '/inscription' },
    { label: 'Actu', link: '/actu' },
    { label: 'Contact', link: '/contact' },
  ];
  subMenu = [
    { label: 'Nos Équipes', link: '/equipes' },
    {
      label: 'Handicap',
      link: '/stagiaire_en_situation_d_handicap',
    },
    {
      label: 'Résultats et Débouchés',
      link: '/resultats_et_debouches',
    },
    { label: 'Nos Locaux', link: '/nos_locaux' },
  ];
  subMenu1 = [{ label: "tests d'entrée", link: '/inscription/test' }];
}
