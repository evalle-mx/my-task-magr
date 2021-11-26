import React, { Component } from 'react';

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            titulo:''
        }
    }

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a href="/#" className="App-link"> 
                { this.props.titulo } </a>
            </nav>
        );
    }

}

export default Navigation;