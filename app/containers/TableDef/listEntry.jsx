import React, { Component } from 'react';

import { Button, Card, CardBlock, Collapse, ListGroupItem } from 'reactstrap';
import { TableDef } from 'PropTypes';

class TableDefEntry extends Component {
  static propTypes = {
    tableDef: TableDef.isRequired,
  }

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const { tableDef } = this.props;
    return (
      <div>
        <ListGroupItem>
          <Button color="link" onClick={this.toggle} style={{ margin: '0', padding: '0', border: 'none' }}>
            #{tableDef.id}-{tableDef.name}
          </Button>
        </ListGroupItem>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBlock>
              {console.log(tableDef)}
            </CardBlock>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default TableDefEntry;
