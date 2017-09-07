import React, { Component } from 'react';

export default class Status extends Component {
    static defaultProps = { isConnected: false };

    render = () =>
        <div className="status">
            <a onClick={() => location.reload()}><i className="fa fa-refresh"></i> refresh</a>

            <div className="connectionState">
                <span style={{ marginRight: '5px' }}>{this.props.url}</span>
                <i
                    className="fa fa-plug"
                    style={{ color: this.props.isConnected ? "green" : "red" }}></i>
            </div>
        </div>;
}