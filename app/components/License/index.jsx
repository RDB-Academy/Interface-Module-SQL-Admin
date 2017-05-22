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
                                    Copyright (C) 2013-present Facebook, Inc.
                                    https://facebook.github.io/react/
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div className="list-header d-flex w-100 justify-content-between">
                                    React Redux
                                </div>
                                <ListGroupItemText>
                                    Copyright (C) 2015-present Dan Abramov
                                    http://redux.js.org
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div className="list-header d-flex w-100 justify-content-between">
                                    React Moment
                                </div>
                                <ListGroupItemText>
                                    Copyright (C) 2016 Sean Hickey
                                    https://momentjs.com
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div className="list-header d-flex w-100 justify-content-between">
                                    React Helmet
                                </div>
                                <ListGroupItemText>
                                    Copyright (C) 2015 NFL
                                    https://github.com/nfl/react-helmet
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div className="list-header d-flex w-100 justify-content-between">
                                    Ember JS
                                </div>
                                <ListGroupItemText>
                                    Copyright (C) 2017 Yehuda Katz, Tom Dale and Ember.js contributors
                                    https://emberjs.com
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div className="list-header d-flex w-100 justify-content-between">
                                    Play Framework
                                </div>
                                <ListGroupItemText>
                                    Copyright (C) 2017
                                    https://www.playframework.com
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div className="list-header d-flex w-100 justify-content-between">
                                    Yarn
                                </div>
                                <ListGroupItemText>
                                    discription
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div className="list-header d-flex w-100 justify-content-between">
                                    sbt
                                </div>
                                <ListGroupItemText>
                                    discription
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div className="list-header d-flex w-100 justify-content-between">
                                    Bootstrap
                                </div>
                                <ListGroupItemText>
                                    discription
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div className="list-header d-flex w-100 justify-content-between">
                                    Babel
                                </div>
                                <ListGroupItemText>
                                    discription
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div className="list-header d-flex w-100 justify-content-between">
                                    Webpack
                                </div>
                                <ListGroupItemText>
                                    discription
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div className="list-header d-flex w-100 justify-content-between">
                                    jQuery
                                </div>
                                <ListGroupItemText>
                                    discription
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