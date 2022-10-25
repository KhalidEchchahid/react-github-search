import React, { Component } from 'react';
import './App.css'
import Users from './component/users/Users';
import Navbar from './component/partiel/Navbar';



class App extends Component {
    render() {
        return (
                <div>
                    <Navbar />
                    <Users />
                </div>
        );
    }
}

export default App;


