import * as React from 'react';
import { ClientService } from '../../../services/webapi/client.service';
import { ClientDetails } from '../../../models/dto.models';
import { ClientComponent } from './client.component';

export interface IClientsComponentState
{
  clients: ClientDetails[];
}

export class ClientsComponent extends React.Component<any, IClientsComponentState>
{
  private clientService = new ClientService();

  public constructor(props: any)
  {
    super(props);

    this.state = {clients: []};
  }

  componentDidMount(): void
  {
    this.clientService.list().subscribe(clients =>
    {
      console.log('clients', clients);

      this.setState((state: IClientsComponentState) =>
      {
        state.clients = clients;
        return state;
      });
    });
  }

  render()
  {
    return (
      <div className="container">
        <div className="title">
          <span>Clients</span>
          <button>Add</button>
        </div>
        <div className="container-content">
          <table>
            <thead>
            <tr>
              <th>Name</th>
            </tr>
            </thead>
            <tbody>
            {
              this.state.clients.map(client =>
              {
                return <ClientComponent key={client.id} client={client}/>
              })
            }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
