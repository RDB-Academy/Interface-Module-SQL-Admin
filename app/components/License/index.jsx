import React from 'react';
import { ListGroupItem, ListGroupItemText } from 'reactstrap';

/**
 * Created by nicolenaczk on 15.05.17.
 */

const LicenseItem = ({name, copyright, url}) => (
  <ListGroupItem>
    <div className="list-header d-flex w-100 justify-content-between">
      {name}
      <br />
      <br />
    </div>
    <ListGroupItemText>
      Copyright (c) {copyright}
      <br />
      <a href={url}>
        {url}
      </a>
    </ListGroupItemText>
  </ListGroupItem>
);


export default LicenseItem;
