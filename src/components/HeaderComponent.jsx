import React, { Component } from 'react';
import {NavLink} from "react-router-dom";


class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <li><NavLink to={"/"}      >Home</NavLink></li>
                        <li><NavLink to={"/board"} >Board</NavLink></li>
                        <li><NavLink to={"/create-board"} >CreateBoard</NavLink></li>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;