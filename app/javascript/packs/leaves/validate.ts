/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { reduxForm, FormErrors } from 'redux-form';
import { LeaveForm } from './components/LeaveWizard';
import * as moment from 'moment';

export const validate = (values: Readonly<LeaveForm>): FormErrors<LeaveForm> => {
  const errors: FormErrors<LeaveForm> = {};
  const daysDiff  = moment(values.end).diff(moment(values.start), 'days') + 1;

  if (values.start === undefined) {
    errors.start = '*Starting date needed';
  }

  if (values.end === undefined) {
    errors.end = '*Ending date needed';
  }
  
  if (values.start > values.end) {
    errors.end = '*End date should be after the start date';
  }

  if (values.half_days === undefined && values.leave_type !== 'VL') {
    errors.half_days = '*Number of half days needed';
  }

  if (values.leave_type === 'VL' && !values.read) {
    errors.read = '*Please read the note above and check this box'
  }

  if (values.half_days > daysDiff) {
    errors.half_days = '*Number of half days exceeds the number of days';
  }

  if (values.half_days < 0) {
    errors.half_days = '*Number of half days cannot be below 0';
  }

  if (!Number.isInteger(Number(values.half_days)) && values.leave_type !== 'VL') {
    errors.half_days = '*Number of half days should be a whole number';
  }

  if (!values.leave_type) {
    errors.leave_type = '*Leave type required';
  }

  if (!values.superior || values.superior === '- Please choose one -') {
    errors.superior = '*This field is required';
  }

  if (values.leave_type === 'SL' && values.doctor_note === undefined) {
    errors.doctor_note = '*This field is required';
  }

  if (values.leave_type === 'SL' && values.reason === undefined) {
    errors.reason = '*This field is required';
  }

  if (values.leave_type === 'BL' && values.relation === undefined) {
    errors.relation = '*This field is required';
  }

  if (values.leave_type === 'UL' && values.reason === undefined) {
    errors.reason = '*This field is required';
  }  

  if (values.sex === 'male') {
    if (values.leave_type === 'MatL') {
      errors.leave_type = 'You are not allowed to file this type of leave';
    }
    else if (values.leave_type === 'PatL' && values.civilStatus !== 'married') {
      errors.leave_type = 'You are not allowed to file this type of leave';
    }
  }

  if (values.sex === 'female' && values.leave_type === 'PatL') {
    errors.leave_type = 'You are not allowed to file this type of leave';
  }
  if (!values.leave_type) {
    errors.leave_type = '*Leave type required';
  }
  return errors;
};

