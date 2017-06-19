import React from 'react';
import { Jumbotron, Container, ListGroup } from 'reactstrap';

import LicenseItem from 'components/License';

const License = () => (
  <div>
    <Jumbotron>
      <Container>
        <div className="d-flex w-100 justify-content-between">
          <h1>Licenses</h1>
        </div>
      </Container>
    </Jumbotron>
    <Container>
      <ListGroup className="list-group-flush">
        <div className="container">
          <LicenseItem name="React JS" copyright="2013-present Facebook, Inc." url="https://facebook.github.io/react/" />
          <LicenseItem name="React Redux" copyright='2015-present Dan Abramov' url="http://redux.js.org" />
          <LicenseItem name="React Moment" copyright='2016 Sean Hickey' url="https://momentjs.com" />
          <LicenseItem name="React Helmet" copyright='2015 NFL' url="https://github.com/nfl/react-helmet" />
          <LicenseItem name="Ember JS" copyright='2017 Yehuda Katz, Tom Dale and Ember.js contributors' url="https://emberjs.com" />
          <LicenseItem name="Play Framework" copyright='2017 Lightbend, Inc.' url="https://www.playframework.com" />
          <LicenseItem name="Yarn" copyright='2016-present, Yarn Contributors' url="https://yarnpkg.com/" />
          <LicenseItem name="sbt" copyright='2008-2014 Typesafe ,Inc.' url="http://www.scala-sbt.org" />
          <LicenseItem name="Bootstrap" copyright='2011-2017 Twitter, Inc.' url="http://getbootstrap.com" />
          <LicenseItem name="Babel" copyright='2014-2017 Sebastian McKenzie' url="https://babeljs.io" />
          <LicenseItem name="Webpack" copyright='2017 JS Foundation and other contributors' url="https://webpack.js.org" />
          <LicenseItem name="jQuery" copyright='2017 JS Foundation and other contributors' url="https://jquery.com" />
        </div>
      </ListGroup>
    </Container>
  </div>
);

export default License;
