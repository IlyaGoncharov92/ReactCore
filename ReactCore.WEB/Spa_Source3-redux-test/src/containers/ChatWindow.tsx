import * as React from 'react';
import { ChatState, UserInfo } from '../store/chat/types';
import { connect, Dispatch } from 'react-redux';
import { ApplicationState, ConnectedReduxProps } from '../store';
import { updateUsersList } from '../store/chat/actions';

interface ChatWindowProps extends ConnectedReduxProps<ChatState>
{
  dispatch: any;
  addUser: any;
  onThunkTest: any;
}

type AllProps = ChatWindowProps & ChatState;

// const ChatWindow: React.SFC<AllProps> = ({username, messages}) => (
//   <div>
//     zzz
//   </div>
// );

export class ChatWindow extends React.Component<AllProps, {}>
{
  public constructor(props: AllProps)
  {
    super(props);

    this.onClick1 = this.onClick1.bind(this);
    this.onClick2 = this.onClick2.bind(this);
  }

  onClick1()
  {
    const user: UserInfo = {
      id: 1231,
      name: 'zzzz'
    };

    this.props.addUser(user);
  }

  onClick2()
  {
    this.props.onThunkTest();
  }

  render()
  {
    return (
      <div>
        zzzzz
        <button onClick={this.onClick1}>Click1</button>
        <button onClick={this.onClick2}>Click2</button>
      </div>
    );
  }
}

const asyncTest = () =>
{
  return (dispatch: any) =>
  {
    setTimeout(() =>
    {
      const user1: UserInfo = {
        id: 12315555,
        name: 'zzzz'
      };
      dispatch(updateUsersList(user1))
    })
  }
};

const mapStateToProps = (state: ApplicationState, ownProps: any) =>
{
  console.log('own', ownProps);
  console.log('route', state.routing);
  return state.chat;
};

const mapsStateToDispatch = (dispatch: Dispatch<any>) => ({
  addUser: (user: UserInfo) => dispatch(updateUsersList(user)),
  dispatch: Function,
  onThunkTest: () =>
  {
    dispatch(asyncTest());
  }
});

export const ChatWindowConnect = connect(mapStateToProps, mapsStateToDispatch)(ChatWindow);
