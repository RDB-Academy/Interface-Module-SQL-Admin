import React, { PropTypes } from 'react';
import { Button } from 'reactstrap';

import Octicon from 'react-octicon';

const OcticonButton = ({ outline, color, onClick, octiconName, children }) => (
  <Button
    outline={outline}
    color={color}
    onClick={onClick}
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
};

OcticonButton.defaultProps = {
  color: 'secondary',
  outline: false,
  onClick: null,
  children: '',
};

export default OcticonButton;
