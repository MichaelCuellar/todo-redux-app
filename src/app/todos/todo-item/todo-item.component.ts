import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { AppState } from '../../app.redcur';
import { FormControl, Validators } from '@angular/forms';
import { toggle, editar, borrar } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todos: Todo;
  @ViewChild('inputFisico') inputFisico: ElementRef;

  chkCompletado: FormControl;
  txtInput: FormControl;
  edit: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todos.completado);
    this.txtInput = new FormControl(this.todos.texto, Validators.required);
    this.chkCompletado.valueChanges.subscribe(() => this.store.dispatch(toggle({id:this.todos.id})))
  }

  editar(){
    this.edit = true;
    this.txtInput.setValue(this.todos.texto);
    setTimeout(() => {
      this.inputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion(){
    this.edit = false;
    if(this.txtInput.valid && this.txtInput.value !== this.todos.texto){
      this.store.dispatch(
        editar({
          id:this.todos.id,
          texto:this.txtInput.value
        })
      );
    }
  }

  eliminar(){
    this.store.dispatch(borrar({id:this.todos.id}));
  }

}
