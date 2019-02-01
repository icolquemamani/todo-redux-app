import { Action } from "@ngrx/store";

export enum ActionTypes {
    AGREGAR_TODO = '[TODO] Agregar Todo',
    EDITAR_TODO  = '[TODO] Editar Todo',
    TOGGLE_ALL_TODO  = '[TODO] Toggle all Todo',
    TOGGLE_TODO  = '[TODO] Toggle Todo',
    BORRAR_TODO  = '[TODO] Borrar Todo',
    CLEAR_COMPLETED_TODO = '[TODO] Limpiar Completados'
}

export class AgregarTodoAction implements Action {
    readonly type = ActionTypes.AGREGAR_TODO;

    constructor(public texto: string) {}
}

export class ToggleTodoAction implements Action {
    readonly type = ActionTypes.TOGGLE_TODO;

    constructor(public id: number) {}
}

export class ToggleAllTodoAction implements Action {
    readonly type = ActionTypes.TOGGLE_ALL_TODO;

    constructor(public completado: boolean) {}
}

export class EditarTodoAction implements Action {
    readonly type = ActionTypes.EDITAR_TODO;

    constructor(public id: number, public texto: string) {}
}

export class BorrarTodoAction implements Action {
    readonly type = ActionTypes.BORRAR_TODO;

    constructor(public id: number) {}
}

export class ClearCompletedAction implements Action{
    readonly type = ActionTypes.CLEAR_COMPLETED_TODO;
}

export type Acciones = AgregarTodoAction | ToggleTodoAction | EditarTodoAction | BorrarTodoAction | ToggleAllTodoAction | ClearCompletedAction;