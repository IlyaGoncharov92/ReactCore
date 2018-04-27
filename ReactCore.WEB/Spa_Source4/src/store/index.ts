import { combineReducers, Dispatch, Reducer } from 'redux';
import { routerReducer, RouterState }         from 'react-router-redux';
import { IAgenciesState }                     from './agencies/types';
import { agenciesReducer }                    from './agencies/reducer';
import { IVolunteersState }                   from './volunteers/types';
import { volunteersReducer }                  from './volunteers/reducer';

export interface IAppState
{
  routing?: Reducer<RouterState>;
  agencies?: IAgenciesState;
  volunteers?: IVolunteersState;
}

export const reducers: Reducer<IAppState> = combineReducers<IAppState>({
  routing: routerReducer,
  agencies: agenciesReducer,
  volunteers: volunteersReducer
});

export interface IBaseAction<TActionType>
{
  type: TActionType;
  payload?: any;
}
