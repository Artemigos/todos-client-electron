import React, { Component } from 'react';
import conf from './config';

export default class UrlPage extends Component {
    static defaultProps = { onConnected: () => {} };

    constructor(props) {
        super(props);
        this.state = { url: conf.get('url') };
    }

    tryConnect = () => {
        conf.set('url', this.state.url);
        this.props.onConnected();
    };

    handleChange = (args) =>
        this.setState({ url: args.target.value });

    render = () =>
        <div className="accentPage">
            <div style={{ textAlign: "center" }}>
                <i className="fa fa-link fa-5x"></i>
                <br />
                <input
                    type="text"
                    name="url"
                    id="url"
                    value={this.state.url}
                    onChange={this.handleChange}
                    style={{ width: "300px" }} />
                <br />
                <a
                    className="btn"
                    onClick={this.tryConnect}>connect</a>
            </div>
        </div>;
}