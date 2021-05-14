import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[Todo] Crea todo',
  props<{ texto: string}>());

export const toggle = createAction(
  '[Todo] Toggle Todo',
  props<{ id: number}>());

export const editar = createAction(
  '[Todo] Editar Todo',
  props<{ id: number, texto: string}>());

export const borrar = createAction(
  '[Todo] Borrar Todo',
  props<{ id: number}>());

export const toggleTodo = createAction(
  '[Todo] Cambiar Estado',
  props<{ estado: boolean}>());

export const limpiarCompletados = createAction(
  '[Todo] Limpiar Completados');


