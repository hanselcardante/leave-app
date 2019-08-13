import * as moment from 'moment';

export const humanReadableDate = (date: Date) => {
  return moment(date).format('LL');
};