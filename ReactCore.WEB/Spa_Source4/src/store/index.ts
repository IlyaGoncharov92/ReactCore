import { combineReducers, Dispatch, Reducer } from 'redux';
import { routerReducer, RouterState }         from 'react-router-redux';
import { IAgenciesState }                     from './agencies/types';
import { agenciesReducer }                    from './agencies/reducer';

export interface IAppState
{
  routing?: Reducer<RouterState>;
  agencies?: IAgenciesState;
}

export const reducers: Reducer<IAppState> = combineReducers<IAppState>({
  routing: routerReducer,
  agencies: agenciesReducer
});

export interface IBaseAction<TActionType>
{
  type: TActionType;
  payload: any;
}
