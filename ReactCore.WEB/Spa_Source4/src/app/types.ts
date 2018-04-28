import { RouteComponentProps } from 'react-router';
import { DispatchProp }        from 'react-redux';

export type GetStoreAllProps<TComponentProps, TStoreState, TMatchParams = {}> =
  & TComponentProps
  & TStoreState
  & DispatchProp<TStoreState>
  & RouteComponentProps<TMatchParams>;

export type GetAllProps<TComponentProps = {}, TMatchParams = {}> =
  & TComponentProps
  & RouteComponentProps<TMatchParams>;
