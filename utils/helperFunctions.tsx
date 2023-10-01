export const capitalizeString = (string) => {
    if (typeof string === 'string') {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } else if (typeof string === 'object' && string !== null) {
        return string.name.charAt(0).toUpperCase() + string.name.slice(1);
    }
}

export const formatNumber = (number: number) => {
  number = Number(number);

  if (isNaN(number)) {
    return 'NaN';
  };

  if (number < 1e3) {
    return number.toFixed(2).toString();
  } else if (number < 1e6) {
    return (number / 1e3).toFixed(2) + 'k';
  } else if (number < 1e9) {
    return (number / 1e6).toFixed(2) + 'm';
  } else if (number < 1e12) {
    return (number / 1e9).toFixed(2) + 'b';
  } else if (number < 1e15) {
    return (number / 1e12).toFixed(2) + 't';
  } else if (number < 1e18) {
    return (number / 1e15).toFixed(2) + 'qa';
  } else if (number < 1e21) {
    return (number / 1e18).toFixed(2) + 'qu';
  } else if (number < 1e24) {
    return (number / 1e21).toFixed(2) + 'sx';
  } else if (number < 1e27) {
    return (number / 1e24).toFixed(2) + 'sp';
  } else if (number < 1e30) {
    return (number / 1e27).toFixed(2) + 'o';
  } else if (number < 1e33) {
    return (number / 1e30).toFixed(2) + 'n';
  } else if (number < 1e36) {
    return (number / 1e33).toFixed(2) + 'd';
  } else if (number > 1e36) {
    return number.toExponential(2).replace('+', '');
  } else {
    return number
  }
};

