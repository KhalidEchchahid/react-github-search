import React, { Component } from 'react';
import '../../App.css'
import axios from 'axios'
import User from './User';
import SearchUsers from './SearchUsers';


class Users extends Component {
    constructor() {
        super()

        this.state = {
            users: []
        }

    }

    getUsers = () => {
        axios.get('https://api.github.com/users')
            .then(Response => {
                this.setState({
                    users: Response.data
                })
            })

    }

    componentDidMount() {
        this.getUsers();
    }


    searchFromGit = (data) => {
        if (data != '') {
            axios.get(`https://api.github.com/search/users?q=${data}`)
                .then(Response => {
                    this.setState({
                        users: Response.data.items
                    })
                })
        }
        console.log(this.state.users);
    }


    render() {
        return (
            <div className='container'>
                <SearchUsers getUserSearch={this.searchFromGit} />
                <div className='row'>
                    {this.state.users.map(user => (
                        <div className='col-sm-3 my-2' key={user.id}>
                            <User user={user} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }



}

export default Users;