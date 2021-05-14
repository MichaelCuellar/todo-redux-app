import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosValidos } from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Todo[], filtro: filtrosValidos): Todo[] {
    switch(filtro){
      case 'completados':
        return value.filter(data => data.completado);
      case 'pendientes':
        return value.filter(data => !data.completado);
      default:
        return value;
    }
  }

}
