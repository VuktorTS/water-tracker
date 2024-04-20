const EMPTY_VALUES = [undefined, null, ''];

export const checkEmptyEntries = (object) => {
  const validObject = { ...object };
  Object.keys(validObject).forEach((key) => {
    if (EMPTY_VALUES.includes(validObject[key])) {
      delete validObject[key];
    }
  });
  return validObject;
};

export const checkDuplicateEntries = (initialValuesObject, formValueObject) => {
  Object.keys(initialValuesObject).forEach((key) => {
    if (initialValuesObject[key] === formValueObject[key]) {
      delete formValueObject[key];
    }
  });
  return formValueObject;
};

export const makeFormData = (object) => {
  const formData = new FormData();
  Object.entries(object).forEach(([key, value]) => {
    formData.append(key, value);
  });
  return formData;
};

export const assignValues = (obj1, obj2) => {
  for (let key in obj1) {
    obj2[key] = obj1[key];
  }
};
