import { Pipe, PipeTransform } from '@angular/core';

export type Languages = 'en' | 'pt';
export type Messages = 'placeholder' | 'title'

@Pipe({
  name: 'translate',
  standalone: true
})
export class TranslatePipe implements PipeTransform {

  translations = {
    'en' : {
      'placeholder': 'type new items here',
      'title': 'my TODO list'
    },
    'pt' : {
      'placeholder' : 'digite novos itens aqui',
      'title': 'Minha lista de a fazeres'
    }
  }

  transform(value: Messages, languages: Languages): string {
    return this.translations[languages][value];
  }

}
