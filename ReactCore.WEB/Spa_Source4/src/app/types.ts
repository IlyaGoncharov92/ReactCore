import { RouteComponentProps } from 'react-router';
import { DispatchProp }        from 'react-redux';

export type GetAllProps<TComponentProps, TStoreState, TMatchParams = any> = TComponentProps & TStoreState & DispatchProp<TStoreState> & RouteComponentProps<TMatchParams>;
