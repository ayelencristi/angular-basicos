import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/dbz.interfaces';
import { OutletContext } from '@angular/router';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html'
})

export class ListComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();



  onDeleteCharacter(id?: string): void {
    if (!id) return; // si el id no existe que nunca lo mande a llamar

    this.onDelete.emit(id);
  }
}
