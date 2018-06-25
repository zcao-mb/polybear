import React, { Component } from 'react';
import { config } from './helpers';

export default class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: [],
            loading: false
        }
    }

    componentDidMount() {
        const url = `${config.apiRoot}/values`;

        this.setState({ loading: true });
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('data:', data);
                this.setState({ values: data, loading: false });
            })
            .catch(error => {
                this.setState({ loading: false });
                console.log('error: ', error);
            });
    }

    render() {
        return (
            <div>
                <p>Test Component</p>
                <ul>
                    {this.state.values.map(value =>
                        <li key={value}>{value}</li>
                    )}
                </ul>
            </div>
        );
    }
}