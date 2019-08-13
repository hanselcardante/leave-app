import * as React from 'react';
import LeaveMain from '../components/pages/LeaveFormComponent';
import LeaveSick from '../components/pages/LeaveSick';
import LeaveVacation from '../components/pages/LeaveVacation';
import LeaveBereave from '../components/pages/LeaveBereave';
import LeaveUnpaid from '../components/pages/LeaveUnpaid';
import { User } from '../../models/user';
import { WizardState, MAIN,
         SL, BL, VL, UL } from '../constants';
import Employee from '../../models/employee';
import { reduxForm, FormErrors } from 'redux-form';
import { validate } from '../validate';
import { ImmediateSuperiorInterface} from '../../definitions/immediateSuperior';
import { Scrollbars } from 'react-custom-scrollbars';

interface Props{
  employee?: Employee;
  page: string;
  onSubmit: () => void;
  back: () => void;
  submitForm: () => void;
  superiors: ImmediateSuperiorInterface[];
}

export interface LeaveForm {
  user_id: number;
  leave_type: string;
  start: Date;
  end: Date;
  half_days?: number;
  reason?: string;
  relation?: boolean;
  doctor_note?: boolean;
  superior?: number|string;
  read?: boolean;
  civilStatus?: string;
  sex?: string;
}

export class LeaveWizard extends React.Component <Props, WizardState>  {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    const { employee, page, onSubmit, back, submitForm, superiors } = this.props;
    return (
            <div>            
                {page === MAIN && <LeaveMain onSubmit={ onSubmit } initialValues={employee}
                                   employee={employee} superiors={superiors}/>}
                {page === SL && <LeaveSick onSubmit={ submitForm } back={back} />}
                {page === BL && <LeaveBereave onSubmit={ submitForm } back={back} />}
                {page === VL && <LeaveVacation onSubmit={ submitForm } back={back}/>}
                {page === UL && <LeaveUnpaid onSubmit={ submitForm } back={back}/>}
            </div>
    );

  }
}