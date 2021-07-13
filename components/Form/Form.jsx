import PropTypes from 'prop-types';

import { useFormFields } from './hooks/useFormFields';

import { FieldContainer, Input, Label } from './Form.styled';

import { getFormFieldsInitialState } from './lib';
import { fieldType } from './types';

export const Form = ({
  fields,
  handleSubmit,
  submitLabel,
}) => {
  const { formFields, createChangeHandler } = useFormFields(getFormFieldsInitialState(fields));

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formFields);
  };

  return (
    <form onSubmit={onSubmit}>
      {fields.map(({
        key, label, type, defaultValue, ...rest
      }) => (
        <FieldContainer key={key}>
          <Label>
            {label}
          </Label>
          <Input
            {...rest}
            type={type}
            value={formFields[key]}
            onChange={createChangeHandler(key)}
          />
        </FieldContainer>
      ))}
      <button type="submit">{submitLabel}</button>
    </form>
  );
};

Form.propTypes = {
  fields: PropTypes.arrayOf(fieldType).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitLabel: PropTypes.string.isRequired,
};
