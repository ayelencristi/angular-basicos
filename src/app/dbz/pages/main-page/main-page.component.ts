import { Component, Input } from '@angular/core';

import { Character } from '../../interfaces/dbz.interfaces';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  constructor(private dbzService: DbzService) { }

  get characters(): Character[]{
    return [...this.dbzService.characters]; //con el operador ... realiza una copia de lo que tenemos en service)
  }

  onDeleteCharacter(id: string): void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void{
    this.dbzService.addCharacter(character)
  }
}
