import * as moment from 'moment';

export function convertDateInputToISOFormat(dateStr: string): string {
  if (!dateStr || dateStr === null) return '';
  const values = dateStr.split('/');

  if (
    values.length == 3 &&
    values[0].length > 0 &&
    values[1].length > 0 &&
    values[2].length > 0
  ) {
    const date = new Date(
      parseInt(values[2]),
      parseInt(values[1]) - 1,
      parseInt(values[0])
    );
    return moment(date).format('MM DD YYYY');
  } else return '';
}
