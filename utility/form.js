export function formatDateString(dateString, prevLength) {
  if (dateString.length > prevLength) {
    if (dateString.length === 4 || dateString.length === 7) {
      return dateString + "-";
    }
  }
  return dateString;
}

export function maxLengthHelp(amountValue) {
  if (amountValue.includes(".")) {
    const decimalIndex = amountValue.indexOf(".");
    return decimalIndex + 3;
  }
}
