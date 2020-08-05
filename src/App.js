import React from 'react';
import logo from './logo.svg';
import './App.css';
import {_} from 'npmglf'

class App extends React.PureComponent {
    componentDidMount() {
        let str = ''
        if (_.isHasValue(str)) {
            console.log('1')
        } else {
            console.log('2')
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
