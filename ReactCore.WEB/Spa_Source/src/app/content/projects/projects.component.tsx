import * as React from 'react';
import { ReactNode } from 'react';
import { ProjectDetails } from '../../../models/dto.models';
import { ProjectService } from '../../../services/webapi/project.service';
import { Subscription } from 'rxjs/Subscription';
import { ProjectComponent } from './project.component';
import { Page } from '../../../models/page.models';

export interface IProjectsComponentState
{
  projects?: ProjectDetails[];
}

export class ProjectsComponent extends React.Component<any, IProjectsComponentState>
{
  private _subscription: Subscription;
  private service = new ProjectService();

  public constructor(props: any)
  {
    super(props);

    this.state = {projects: []};

    this.selectProject = this.selectProject.bind(this);
  }

  public componentDidMount(): void
  {
    this._subscription = this.service.list().subscribe((projects: ProjectDetails[]) =>
    {
      console.log('projects', projects);
      this.setState((state: IProjectsComponentState) =>
      {
        state.projects = projects;
        return state;
      });
    });
  }

  public componentWillUnmount(): void
  {
    this._subscription.unsubscribe();
  }

  private selectProject(id: number): void
  {
    console.log('Passed: ' + id);
    console.log(this.props);
    this.props.history.push(Page.users.path);
  }

  public render(): ReactNode
  {
    return (
      <div className="container">
        <div className="title">
          <span>Projects</span>
          <button>Add</button>
        </div>
        <div className="container-content">
          <table>
            <thead>
            <tr>
              <th>Name</th>
              <th>Client Name</th>
            </tr>
            </thead>
            <tbody>
            {
              this.state.projects.map(project =>
              {
                return <ProjectComponent key={project.id} project={project} emittedId={this.selectProject}/>;
              })
            }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
