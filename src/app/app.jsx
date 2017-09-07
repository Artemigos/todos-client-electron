import React, { Component } from 'react';
import UrlPage from './url';
import Status from './status';
import ListsPage from './lists';
import conf from './config';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 'url',
            connected: false
        };
    }

    updateUrl = () =>
        this.setState({ url: conf.get('url') });

    setConnected = (conn) =>
        this.setState({ connected: conn });

    navigate = (page) =>
        this.setState({ page: page });

    connected = () => {
        this.navigate('lists');
        this.setConnected(true);
        this.updateUrl();
    };

    currentPage = () => {
        if (this.state.page === 'url')
            return <UrlPage onConnected={this.connected} />;
        else
            return <ListsPage />;
    };

    render = () =>
        <div className="page">
            {this.currentPage()}
            <Status
                isConnected={this.state.connected}
                url={this.state.url} />
        </div>;
}