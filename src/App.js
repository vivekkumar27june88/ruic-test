import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ExportModalWrapped } from 'ruic';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalProps: { open: false }
        };
    }

    openCloseExportModal = () => {
        this.setState({
            modalProps: {
                open: !this.state.modalProps.open
            }
        });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <button onClick={this.openCloseExportModal}>Open Close Modal</button>
                    <ExportModalWrapped modalProps={this.state.modalProps} />
                </header>
            </div>
        );
    }
}

export default App;
