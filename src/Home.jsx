import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './App.css';
import './sass/Home.scss';
import MarvelLogo from './images/marvel-logo.png';

class Home extends Component() {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        }
    }

    render() {
        return (
            <div>
                <h1>Welcome to the<br /><img className="marvel-logo" src={MarvelLogo} alt="Marvel Logo" /><br /> Universe</h1>

                <form>
                    <input type="text" />
                    <a href="http://google.com">Search</a>
                </form>


            </div>
        );
    }
}

export default Home;