import { AnyAction, combineReducers, Reducer } from 'redux';
import { routerReducer, RouterState }          from 'react-router-redux';
import { IAgenciesState }                      from './agencies/types';
import { agenciesReducer }                     from './agencies/reducer';
import { IVolunteersState }                    from './volunteers/types';
import { volunteersReducer }                   from './volunteers/reducer';
import { IAuthenticationState }                from './authenticate/types';
import { authenticationReducer }               from './authenticate/reducer';

export interface IAppState
{
  routing?: Reducer<RouterState>;
  authentication?: IAuthenticationState;
  agencies?: IAgenciesState;
  volunteers?: IVolunteersState;
}

export const reducers: Reducer<IAppState> = combineReducers<IAppState>({
  routing: routerReducer,
  authentication: authenticationReducer,
  agencies: agenciesReducer,
  volunteers: volunteersReducer
});

export interface IBaseAction<TActionType> extends AnyAction
{
  type: TActionType;
  payload?: any;
}
