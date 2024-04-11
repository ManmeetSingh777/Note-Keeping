// Editor.jsx

import React, { Component } from 'react';
import './Editor.css'; // Importing the CSS file for styling

class Editor extends Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            value: ''
        };
    }

    handleInput(e) {
        this.setState({ value: e.target.textContent });
    }

    render() {
        return (
            <div className="container">
                <div className="input">
                    <h3>Input</h3>
                    <div className="editable-text" contentEditable="true" onInput={this.handleInput}></div>
                </div>
                <div className="output">
                    <h3>Pro Note</h3>
                    <div className="output-text">{this.state.value}</div>
                </div>
            </div>
        );
    }
}

export default Editor;
