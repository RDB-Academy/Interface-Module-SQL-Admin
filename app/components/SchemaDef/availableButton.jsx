import React, { PropTypes } from 'react';
import { Button } from 'reactstrap';

import Octicon from 'react-octicon';

const SchemaDefAvailableButton = ({ outline, color, setAvailable, children }) => (
  <Button
    outline={outline}
    color={color}
    onClick={setAvailable}
  >
    <Octicon name="radio-tower" /> {children}
  </Button>
);

SchemaDefAvailableButton.propTypes = {
  outline: PropTypes.bool,
  color: PropTypes.string.isRequired,
  setAvailable: PropTypes.func.isRequired,
  children: PropTypes.string,
};

SchemaDefAvailableButton.defaultProps = {
  outline: false,
  children: '',
};

export default SchemaDefAvailableButton;
