import dateValidator from '../validators/date';


const DATE_REGEX = new RegExp('^([0-9]{4})\-([0-9]{2})\-([0-9]{2})([ T]([0-9]{1,2})\:([0-9]{1,2})(\:[0-9]{1,2})?)?$', 'g');

const prepareDateString = (dateParams, options) => {
  const { year, month, day, hour, minute, second } = dateParams;
  const { dateSeparator = '-', timeDateSeparator = 'T', timeSeparator = ':', includeTime = false } = options;
  const padString = (subject, length, character='0') => {
    return (new Array(length).join(character) + String(subject)).slice(-length);
  };

  const datePart = [
    year,
    padString(month, 2),
    padString(day, 2)
  ].join(dateSeparator);

  if (!includeTime) {
    return datePart;
  }

  const timePart = [].concat(
    hour ? padString(hour, 2) : '12',
    minute ? padString(minute, 2) : '00',
    second ? padString(second, 2) : '00'
  ).join(timeSeparator);

  return [datePart, timePart].join(timeDateSeparator);
};

const dateToString = (dateObj, { dateSeparator = '-', timeDateSeparator = 'T', timeSeparator = ':', includeTime = false } = {}) => {
  if (typeof dateObj === 'string') {
    const matches = DATE_REGEX.exec(dateObj);
    const year = parseInt(matches[1], 10);
    const month = parseInt(matches[2], 10);
    const day = parseInt(matches[3], 10);
    const hour = parseInt(matches[5], 10);
    const minute = parseInt(matches[6], 10);
    const second = parseInt(matches[7], 10);
    return prepareDateString({ year, month, day, hour, minute, second }, { dateSeparator, timeDateSeparator, timeSeparator, includeTime });
  }

  if (typeof dateObj.getMonth !== 'function') {
    throw 'Invalid date object';
  }

  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const hour = dateObj.getHours();
  const minute = dateObj.getMinutes();
  const second = dateObj.getSeconds();
  return prepareDateString({ year, month, day, hour, minute, second }, { dateSeparator, timeDateSeparator, timeSeparator, includeTime });
};

const stringToDate = (dateString) => {
  const params = dateValidator(dateString);
  if (!params) {
    return undefined;
  }
  const { year, month, day, hour, minute, second } = params;
  return new Date(year, month, day, hour, minute, second);
};

export {
  dateToString,
  stringToDate
};
