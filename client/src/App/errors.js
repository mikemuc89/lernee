// Field errors
export const ERR_001 = () => (
  'This field is required.'
);

export const ERR_002 = () => (
  'Invalid value.'
);

export const ERR_003 = (maxLen, actualLen) => (
  (maxLen && actualLen && `Value is too long. Must be at most ${maxLen} characters, but has ${actualLen} characters.`) ||
  (maxLen && `Value is too long. Must be at most ${maxLen} characters.`) ||
  ('Value is too long.')
);

export const ERR_004 = (minLen, actualLen) => (
  (minLen && actualLen && `Value is too short. Must be at least ${minLen} characters, but has ${actualLen} characters.`) ||
  (minLen && `Value is too short. Must be at least ${minLen} characters.`) ||
  ('Value is too short.')
);

export const ERR_005 = (maxValue, actualValue) => (
  (maxValue && actualValue && `Value is too big. Must be at most ${maxValue}, but is ${actualValue}.`) ||
  (maxValue && `Value is too big. Must be at most ${maxValue}.`) ||
  ('Value is too big.')
);

export const ERR_006 = (minValue, actualValue) => (
  (minValue && actualValue && `Value is too small. Must be at least ${minValue}, but is ${actualValue}.`) ||
  (minValue && `Value is too small. Must be at least ${minValue}.`) ||
  ('Value is too small.')
);

export const ERR_007 = () => (
  'Invalid item selected.'
);

export const ERR_008 = () => (
  'Invalid value.'
);

export const ERR_009 = () => (
  'Wrong username or password'
);

export const ERR_010 = () => (
  'Passwords do not match.'
);

export const ERR_011 = () => (
  'E-mails do not match.'
);

export const ERR_012 = () => (
  'This username is taken.'
);

export const ERR_013 = () => (
  'This e-mail is already registered.'
);

export const ERR_014 = () => (
  'This e-mail does not exist in the database.'
);

export const ERR_015 = () => (
  'The account is not active.'
);

export const ERR_016 = (maxDate, actualDate) => (
  (maxDate && actualDate && `Date is set too far in the future. Must be at most ${maxDate}, but is ${actualDate}.`) ||
  (maxDate && `Date is set too far in the future. Must be at most ${maxDate}.`) ||
  ('Date is set too far in the future.')
);

export const ERR_017 = (minDate, actualDate) => (
  (minDate && actualDate && `Date is set too far in the past. Must be at least ${minDate}, but is ${actualDate}.`) ||
  (minDate && `Date is set too far in the past. Must be at least ${minDate}.`) ||
  ('Date is set too far in the past.')
);

// Form errors
export const ERR_101 = () => (
  'The form has errors.'
);

export const ERR_102 = () => (
  'Wrong username or password.'
);

export const ERR_103 = () => (
  'Data you provided is already used by one of our users.'
);

export const ERR_104 = () => (
  'Data you provided do not exist in our database.'
);

export const ERR_105 = () => (
  'The account is not active.'
);

// View errors
export const ERR_201 = () => (
  'Error processing request.'
);

export const ERR_202 = () => (
  'Error processing request.'
);

export const ERR_203 = () => (
  'Error processing request.'
);

export const ERR_204 = () => (
  'Error processing request.'
);

export const ERR_205 = () => (
  'Invalid request.'
);

export const ERR_206 = () => (
  'We are sorry, but we cannot process your request. Probably your link has expired.'
);
