import PropTypes from 'prop-types';

export const fieldType = PropTypes.shape({
  key: PropTypes.string.isRequired,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
});
