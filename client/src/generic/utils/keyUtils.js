export const KEY_CODES = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CONTROL: 17,
  ALT: 18,
  CAPS_LOCK: 20,
  ESC: 27,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT_ARROW: 37,
  UP_ARROW: 38,
  RIGHT_ARROW: 39,
  DOWN_ARROW: 40,
  INSERT: 45,
  DELETE: 46,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  NUM_LOCK: 144
};

export const getCodeFromKeyEvent = (e = window.event) => {
  return e.keyCode || e.which;
};

export const getCharFromKeyEvent = (e = window.event) => {
  const keyCode = getCodeFromKeyEvent(e);
  const charCode = keyCode - 48 * Math.floor(keyCode / 48);
  return String.fromCharCode((keyCode >= 96) ? charCode: keyCode);
};

export const isSpecialCharacter = (e) => {
  const keyCode = getCodeFromKeyEvent(e);
  return keyCode && ([144].includes(keyCode) || (keyCode > 64 && keyCode < 91) || (keyCode > 96 && keyCode < 123) || keyCode <= 47);
};
