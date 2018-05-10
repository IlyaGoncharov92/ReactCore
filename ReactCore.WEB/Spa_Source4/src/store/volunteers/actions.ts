import { VolunteerService }                                                   from '../../services/webapi/volunteer.service';
import { ActionCreator, Dispatch }                                            from 'redux';
import { IVolunteersAddAction, IVolunteersClearAction, VolunteersActionType } from './types';
import { UserDetails }                                                        from '../../models/dto.models';

const service = new VolunteerService();

export const volunteersAddActionCreator: ActionCreator<IVolunteersAddAction> = (users: UserDetails[]) => ({
  type: VolunteersActionType.VOLUNTEERS_ADD,
  payload: users
});

export const volunteersClearActionCreator: ActionCreator<IVolunteersClearAction> = () => ({
  type: VolunteersActionType.VOLUNTEERS_CLEAR
});

export const volunteersAddAction = () =>
{
  return (dispatch: Dispatch<any>) =>
  {
    service.list().subscribe((users: UserDetails) =>
    {
      dispatch(volunteersAddActionCreator(users));
    });
  }
};
