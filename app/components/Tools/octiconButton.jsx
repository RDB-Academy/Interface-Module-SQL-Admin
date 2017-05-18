import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

import Octicon from 'rdb-academy-octicon';

const OcticonButton = ({ outline, color, onClick, octiconName, children, size }) => (
  <Button
    outline={outline}
    color={color}
    onClick={onClick}
    size={size}
  >
    <Octicon name={octiconName} /> {children}
  </Button>
);

OcticonButton.propTypes = {
  outline: PropTypes.bool,
  color: PropTypes.string,
  onClick: PropTypes.func,
  octiconName: PropTypes.string.isRequired,
  children: PropTypes.string,
  size: PropTypes.string,
};

OcticonButton.defaultProps = {
  color: 'secondary',
  outline: false,
  onClick: null,
  children: '',
  size: null,
};

export default OcticonButton;
