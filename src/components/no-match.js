import React, { Component } from 'react';

export default class NoMatch extends Component {

    /**
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div>
                Sorry but this doesn't go anywhere
            </div>
        );
    }
}