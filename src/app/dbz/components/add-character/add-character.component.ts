import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/dbz.interfaces';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void{

    console.log(this.character)
    if (this.character.name.length === 0) return;


    this.onNewCharacter.emit(this.character);
    this.character = { name: '', power: 0}
}

  // @Input() nuevo: Character = {
  //   name: 'Turks',
  //   power: 1700
  // };

  // @Output() onNuevoPersonaje: EventEmitter<Character> = new EventEmitter();
  // agregar() {
  //   if (this.nuevo.name.trim().length === 0) {
  //     return;
  //   }
  //   console.log(this.nuevo)
  //   this.onNuevoPersonaje.emit(this.nuevo);

  //   this.nuevo = {
  //     name: '',
  //     power: 0
  //   }

  }
