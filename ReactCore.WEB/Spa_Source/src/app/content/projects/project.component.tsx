import * as React from 'react';
import { CSSProperties, ReactNode } from 'react';
import { ProjectDetails } from '../../../models/dto.models';

export interface IProjectComponentProps
{
  project?: ProjectDetails;
  emittedId?: Function;
}

export class ProjectComponent extends React.Component<IProjectComponentProps, any>
{
  public constructor(props: IProjectComponentProps)
  {
    super(props);

    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(): void
  {
    this.props.emittedId(this.props.project.id);
  }

  render(): ReactNode
  {
    const style: CSSProperties = {
      background: this.props.project.color
    };

    return (
      <tr style={style} onClick={this.onSelect}>
        <td>{this.props.project.name}</td>
        <td>{this.props.project.client.name}</td>
      </tr>
    );
  }
}
