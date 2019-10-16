import { Component, Input } from '@angular/core';
import { Niveau } from '@common/model/niveau.model';

@Component({
  selector: 'app-affichage-niveau',
  templateUrl: './affichage-niveau.component.html',
})
export class AffichageNiveauComponent {

  @Input() niveau: Niveau;

  constructor() {}
}
