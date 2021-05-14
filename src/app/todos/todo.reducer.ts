import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as Actions from './todo.actions';


export const listTodo: Todo[] = [
  new Todo('Salvando el mundo'),
  new Todo('Todos unidos',true),
  new Todo('Vamos por el mundo'),
  new Todo('Aqui estamos juntos'),
  new Todo('Salvando unidos')
];

const _todoReducer = createReducer(
  listTodo,
  on(Actions.crear, (state, { texto }) => [ ...state, new Todo(texto)]),
  on(Actions.limpiarCompletados,(state) => state.filter(data => !data.completado)),
  on(Actions.borrar,(state,{id})=> state.filter(result=> result.id !== id)),
  on(Actions.toggleTodo,(state,{estado}) => {
    return state.map(data =>{
      return {
        ...data,
        completado: estado
      }
  })}),
  on(Actions.toggle, (state, { id }) =>{
    return state.map(resul =>{
      if(resul.id == id){
        return{
          ...resul,
          completado: !resul.completado
        }
      }else {
        return{
          ...resul
        }
      }
    })
  }),
  on(Actions.editar, (state, { id , texto }) =>{
    return state.map(resul =>{
      if(resul.id == id){
        return{
          ...resul,
          texto: texto
        }
      }else {
        return{
          ...resul
        }
      }
    })
  })
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
