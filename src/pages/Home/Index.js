import React, {Component} from 'react';

export default class extends Component {
    constructor() {
        super();
        this.add = this.add.bind(this);
        this.load = this.load.bind(this);
    }

    componentDidMount() {

    }

    load() {
        this.props.sampleAction.load();
    }

    add() {
        this.props.sampleAction.add(1);
    }

    render() {

        return (
            <div className="container">
                {this.props.sample.count}
                <p></p>
                <button onClick={this.add}>测试</button>
                <p></p>
                <button onClick={this.load}>加载模拟数据</button>
            </div>
        )
    }
}