import * as React from 'react';
import { ChatState }                             from '../store/chat/types';
import { connect, Dispatch }                     from 'react-redux';
import { ApplicationState, ConnectedReduxProps } from '../store';

interface ChatWindowProps extends ConnectedReduxProps<ChatState> {}

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
  }

  render()
  {
    return (
      <div>
        zzzzz
      </div>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => state.chat;

export const ChatWindowConnect = connect(mapStateToProps)(ChatWindow);