import { RouteComponentProps } from 'react-router';
import { DispatchProp }        from 'react-redux';

export type GetAllProps<TComponentProps, TStoreState, TMatchParams = {}> =
  & TComponentProps
  & TStoreState
  & DispatchProp<TStoreState>
  & RouteComponentProps<TMatchParams>;
