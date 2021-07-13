export const getFormFieldsInitialState = (fields) => (fields).reduce(
  (acc, { key, defaultValue }) => ({ ...acc, [key]: defaultValue }),
  {},
);
