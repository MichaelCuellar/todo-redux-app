import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.redcur';
import { filtrosValidos, setFiltro } from '../../filtro/filtro.actions';
import { limpiarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtro: filtrosValidos;
  filtros: filtrosValidos [] = ['todos','completados','pendientes']
  count: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(result => {
      this.filtro=result.filtro;
      this.count = result.todos.filter( data => !data.completado).length;
    });
  }

  cambiarFiltro($event: filtrosValidos){
    if($event !== this.filtro){
      this.store.dispatch(setFiltro({filtro:$event}));
    }
  }

  clear(){
    this.store.dispatch(limpiarCompletados());
  }

}
