import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { SetFiltroAction, filtrosValidos } from '../../filter/filter.actions';
import { Todo } from '../models/todo.model';
import { ClearCompletedAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  
  filtrosValidos: filtrosValidos[] = [ 'todos', 'completados', 'pendientes' ];
  filtroActual: filtrosValidos;
  countPendientes: number;

  constructor( private _store: Store<AppState>) { }

  ngOnInit() {
    this._store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.countPendientes = this.contarPendientes(state.todos);
    });
  }

  cambiarFiltro( nuevoFiltro: filtrosValidos ) {
    
    const action = new SetFiltroAction(nuevoFiltro);
    this._store.dispatch(action);

  }

  contarPendientes(todos: Todo[]) {
    
    return todos.reduce((val, item) => {
      
      if( !item.completado ) {
        return  val + 1; 
      }
      else {
        return val;
      }

    }, 0);
  }

  limpiarCompletados() {
    const action = new ClearCompletedAction();
    this._store.dispatch( action );
  }

}
