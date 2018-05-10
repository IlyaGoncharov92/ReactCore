import { RouteComponentProps } from 'react-router';
import { DispatchProp }        from 'react-redux';

export type GetPropsStoreRoute<TStoreState, TComponentProps = {}, TMatchParams = {}> =
  & TStoreState
  & DispatchProp<TStoreState>
  & TComponentProps
  & RouteComponentProps<TMatchParams>;

export type GetPropsStore<TStoreState, TComponentProps = {}> =
  & TStoreState
  & DispatchProp<TStoreState>
  & TComponentProps;

export type GetPropsRoute<TComponentProps = {}, TMatchParams = {}> =
  & TComponentProps
  & RouteComponentProps<TMatchParams>;
