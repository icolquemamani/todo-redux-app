import * as fromFiltro from './filter.actions';

const stateInitial: fromFiltro.filtrosValidos = 'todos';

export function filtroReducer( state = stateInitial, action: fromFiltro.accionesFilter ): fromFiltro.filtrosValidos {
    switch( action.type ) {
        case fromFiltro.SET_FILTRO: 
            return action.filtro;
        default:
            return state;
    }
} 