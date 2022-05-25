import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    React.useEffect(() => {
        console.log('yyy');
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <button
                    onClick={() => {
                        console.log('xxx');
                    }}
                >
                    Click me!
                </button>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
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

export default App;
