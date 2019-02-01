import * as fromTodo from './todo.actions';
import { Todo } from './models/todo.model';
const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar a Gamorra');
todo2.completado = true;

const stateInitial: Todo[] = [
    todo1,
    todo2
];

export function todoReducer(state = stateInitial, action: fromTodo.Acciones): Todo[] {
    switch(action.type) {
        case fromTodo.ActionTypes.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return [ ...state, todo ];
        case fromTodo.ActionTypes.TOGGLE_TODO:
            return state.map(todo => {
                if(action.id === todo.id) {
                    return {
                        ...todo, 
                        completado: !todo.completado
                    };
                } else {
                    return todo;
                }
            });
        case fromTodo.ActionTypes.TOGGLE_ALL_TODO:
            return state.map(todo => {
                return {
                    ...todo, 
                    completado: action.completado
                };
            });
        case fromTodo.ActionTypes.EDITAR_TODO:
            return state.map(todo => {
                if(action.id === todo.id) {
                    return {
                        ...todo, 
                        texto: action.texto
                    };
                } else {
                    return todo;
                }
            });
        case fromTodo.ActionTypes.BORRAR_TODO:
            return state.filter(todo => action.id !== todo.id );
        case fromTodo.ActionTypes.CLEAR_COMPLETED_TODO:
            return state.filter(todo => !todo.completado );
        default: 
            return state;
    }
}