import {
  MESSAGE_MAX_AMOUNT_CHARACTERS,
  MESSAGE_MAX_CONCEPT_CHARACTERS,
  MESSAGE_NEGATIVE_AMOUNT,
  MESSAGE_NOT_A_NUMBER_AMOUNT,
  MESSAGE_REQUIRED_AMOUNT,
  MESSAGE_REQUIRED_CONCEPT,
  MESSAGE_REQUIRED_TYPE,
  MESSAGE_VALID_DATE,
  MESSAGE_VALID_TYPE
}
  from "../constants/constants";

export const validateConcept = (concept) => {
  if (!concept) {
    return alert(MESSAGE_REQUIRED_CONCEPT)
  };
  if (concept.length >= 50) {
    return alert(MESSAGE_MAX_CONCEPT_CHARACTERS)
  } else {
    return true;
  }
};

export const validateAmount = (amount) => {
  if (!amount) {
    return alert(MESSAGE_REQUIRED_AMOUNT)
  };
  if (amount.length >= 20) {
    return alert(MESSAGE_MAX_AMOUNT_CHARACTERS)
  }
  if (amount <= 0) {
    return alert(MESSAGE_NEGATIVE_AMOUNT)
  }
  if (isNaN(amount)) {
    return alert(MESSAGE_NOT_A_NUMBER_AMOUNT)
  }
  else {
    return true;
  }
};

export const validateDate = (date) => { // code from: https://gist.github.com/arth2o/8471150
  // STRING FORMAT yyyy-mm-dd
  if (date == "" || date == null) { return alert(MESSAGE_VALID_DATE); }

  // m[1] is year 'YYYY' * m[2] is month 'MM' * m[3] is day 'DD'					
  var m = date.match(/(\d{4})-(\d{2})-(\d{2})/);

  // STR IS NOT FIT m IS NOT OBJECT
  if (m === null || typeof m !== 'object') { return alert(MESSAGE_VALID_DATE); }

  // CHECK m TYPE
  if (typeof m !== 'object' && m !== null && m.size !== 3) { return alert(MESSAGE_VALID_DATE); }

  var ret = true; //RETURN VALUE						
  var thisYear = new Date().getFullYear(); //YEAR NOW
  var minYear = 1999; //MIN YEAR

  // YEAR CHECK
  if ((m[1].length < 4) || m[1] < minYear || m[1] > thisYear) { ret = false; }
  // MONTH CHECK			
  if ((m[2].length < 2) || m[2] < 1 || m[2] > 12) { ret = false; }
  // DAY CHECK
  if ((m[3].length < 2) || m[3] < 1 || m[3] > 31) { ret = false; }

  return ret;
};

export const validateType = (type) => {
  if (!type) {
    return alert(MESSAGE_REQUIRED_TYPE)
  };
  if (type !== 'in' && type !== 'out') {
    return alert(MESSAGE_VALID_TYPE)
  } else {
    return true;
  }
};

export const validateForm = (concept, amount, date, type) => {
  if (validateConcept(concept) && validateAmount(amount) && validateDate(date) && validateType(type)) {
    return true;
  } else {
    return false;
  }
};