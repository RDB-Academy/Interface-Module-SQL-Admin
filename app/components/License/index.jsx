/**
 * Created by nicolenaczk on 15.05.17.
 */

import React, { Component } from 'react';
import { Jumbotron, Container, Table, ListGroup, ListGroupItem, ListGroupItemText } from 'reactstrap';

class License extends Component {

    render() {
        return (
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
                            <ListGroupItem>
                                <div className="list-header d-flex w-100 justify-content-between">
                                    React JS
                                </div>
                                <ListGroupItemText>
                                    Copyright (c) 2013-present Facebook, Inc.
                                    https://facebook.github.io/react/
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div className="list-header d-flex w-100 justify-content-between">
                                    React Redux
                                </div>
                                <ListGroupItemText>
                                    Copyright (c) 2015-present Dan Abramov
                                    http://redux.js.org
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div className="list-header d-flex w-100 justify-content-between">
                                    React Moment
                                </div>
                                <ListGroupItemText>
                                    Copyright (c) 2016 Sean Hickey
                                    https://momentjs.com
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div className="list-header d-flex w-100 justify-content-between">
                                    React Helmet
                                </div>
                                <ListGroupItemText>
                                    Copyright (c) 2015 NFL
                                    https://github.com/nfl/react-helmet
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div className="list-header d-flex w-100 justify-content-between">
                                    Ember JS
                                </div>
                                <ListGroupItemText>
                                    Copyright (c) 2017 Yehuda Katz, Tom Dale and Ember.js contributors
                                    https://emberjs.com
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div className="list-header d-flex w-100 justify-content-between">
                                    Play Framework
                                </div>
                                <ListGroupItemText>
                                    Copyright (c) 2017
                                    https://www.playframework.com
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div className="list-header d-flex w-100 justify-content-between">
                                    Yarn
                                </div>
                                <ListGroupItemText>
                                    Copyright (c) 2016-present, Yarn Contributors
                                    https://yarnpkg.com/
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div className="list-header d-flex w-100 justify-content-between">
                                    sbt
                                </div>
                                <ListGroupItemText>
                                    Copyright (c) 2008-2014 Typesafe Inc, Mark Harrah, Grzegorz Kossakowski,
                                    Josh Suereth, Indrajit Raychaudhuri, Eugene Yokota, and other contributors.
                                    http://www.scala-sbt.org
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div className="list-header d-flex w-100 justify-content-between">
                                    Bootstrap
                                </div>
                                <ListGroupItemText>
                                    Copyright (c) 2011-2017 Twitter, Inc.
                                    Copyright (c) 2011-2017 The Bootstrap Authors
                                    http://getbootstrap.com
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div className="list-header d-flex w-100 justify-content-between">
                                    Babel
                                </div>
                                <ListGroupItemText>
                                    Copyright (c) 2014-2017 Sebastian McKenzie
                                    https://babeljs.io
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div className="list-header d-flex w-100 justify-content-between">
                                    Webpack
                                </div>
                                <ListGroupItemText>
                                    Copyright (c) 2017 JS Foundation and other contributors
                                    https://webpack.js.org
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div className="list-header d-flex w-100 justify-content-between">
                                    jQuery
                                </div>
                                <ListGroupItemText>
                                    Copyright (c) 2017 JS Foundation and other contributors
                                    https://jquery.com
                                </ListGroupItemText>
                            </ListGroupItem>
                        </div>
                    </ListGroup>

                </Container>
            </div>
        );


    }
}


export default License;