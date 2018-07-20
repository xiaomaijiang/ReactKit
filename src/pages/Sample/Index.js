import React, {Component} from 'react';

export default class extends Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }


    render() {
        return (
            <div className="container">
                {this.props.sample.count}
            </div>
        )
    }
}