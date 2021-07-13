import { useState } from 'react';

export const useFormFields = (initialState) => {
  const [formFields, setFormFields] = useState(initialState);

  const createChangeHandler = (key) => ({ target: { value } }) => (
    setFormFields((prev) => ({ ...prev, [key]: value }))
  );

  return { formFields, createChangeHandler };
};
