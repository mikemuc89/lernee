export const PARTIAL_DATE_REGEX = new RegExp('(^[0-9]{0,4}$)|(^[0-9]{4}-[0-9]{0,2}$)|(^[0-9]{4}-[0-9]{2}-[0-9]{0,2}$)', 'g');
export const FULL_DATE_REGEX = new RegExp('(^[0-9]{4}-[0-9]{2}-[0-9]{2}((T| )[0-9]{2}\\:[0-9]{2}(\\:[0-9]{2})?)?$)', 'g');

export const isLeapYear = (year) => {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

export default (dateString) => {
  if (typeof dateString !== 'string' || !dateString.match(FULL_DATE_REGEX)) {
    return undefined;
  }

  const [datePart, timePart] = dateString.split(/[ T]/g);
  const dateParts = datePart.split('-');
  if (dateParts.length !== 3) {
    return undefined;
  }
  const year = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10) - 1;
  const day = parseInt(dateParts[2], 10);

  const timeParts = timePart ? timePart.split(':') : '';
  if (timeParts.length < 2 || timeParts.length > 3) {
    return undefined;
  }
  const hour = timeParts[0] || null;
  const minute = timeParts[1] || null;
  const second = timeParts[2] || null;

  if (month < 0 || month >= 12) {
    return false;
  }
  if ([0, 2, 4, 6, 7, 9, 11].includes(month) && day > 31) {
    return false;
  }
  if ([3, 5, 8, 10].includes(month) && day > 30) {
    return false;
  }
  if (month === 1 && (day > 29 || (!isLeapYear(year) && day > 28))) {
    return false;
  }
  if (hour > 24 || minute > 59 || second > 59) {
    return false;
  }
  return { year, month, day, hour, minute, second };
};
