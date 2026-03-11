import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  private translations: { [key: string]: { [key: string]: string } } = {
    status: {
      'EN_COURS': 'En cours',
      'TERMINE': 'Terminé',
      'ANNULE': 'Annulé'
    },
    periodicity: {
      'MENSUELLE': 'Mensuelle',
      'ANNUELLE': 'Annuelle',
      'HEBDOMADAIRE': 'Hebdomadaire'
    }
  };

  transform(value: string | null, type: string): string {
    if (!value) return 'Non défini'; // ou toute autre valeur par défaut
    return this.translations[type]?.[value] || value;
  }
}
