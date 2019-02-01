import { Todo } from "./todo/models/todo.model";
import { filtrosValidos } from "./filter/filter.actions";
import { ActionReducerMap } from "@ngrx/store";
import * as fromTodo   from "./todo/todo.reducers";
import * as fromFiltro from './filter/filter.reducers';

export interface AppState {
    todos: Todo[];
    filtro: filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filtro: fromFiltro.filtroReducer
}