import * as React from 'react';
import { ClientDetails } from '../../../models/dto.models';

export interface IClientComponentProps
{
  client?: ClientDetails;
}

export interface IClientComponentState
{
  isShow: boolean;
}

export class ClientComponent extends React.Component<IClientComponentProps, IClientComponentState>
{
  private isShow: boolean = false;

  public constructor(props: IClientComponentProps)
  {
    super(props);

    this.state = {isShow: this.isShow};

    this.onSelect = this.onSelect.bind(this);
  }

  private onSelect(): void
  {
    this.isShow = !this.isShow;

    this.setState({isShow: this.isShow});
  }

  render()
  {
    return (
      <tr>
        <td style={{position: 'relative'}}>
          <div onClick={this.onSelect}>{this.props.client.name}</div>
          {this.state.isShow &&
          <div className="popup">
            <div className="popup-container">
              {
                this.props.client.projects.map(project =>
                {
                  return (<div style={{background: project.color}} key={project.id} className="elem">{project.name}</div>)
                })
              }
            </div>
          </div>
          }
        </td>
      </tr>
    );
  }
}