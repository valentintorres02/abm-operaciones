exports.manageObtainedValue = (value, valueAsNumber) => {
  if (!Number.isNaN(valueAsNumber) && valueAsNumber > 0) {
    value = valueAsNumber;
  }
  return parseInt(value);
}