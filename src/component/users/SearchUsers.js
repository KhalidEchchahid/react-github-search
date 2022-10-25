import React, { Component } from 'react';

export class SearchUsers extends Component {

    state = {
        search: '',
    }

    handleForm = (e) => {
        this.setState({
            search: e.target.value
        })

    }

    SearchOnes = (e) => {
        e.preventDefault();
        this.props.getUserSearch(this.state.search);
    }


    render() {
        const { search } = this.state
        return (
            <form onSubmit={this.SearchOnes}>
                <div>
                    <input onChange={this.handleForm} value={search} type='text' className='form-control' placeholder='search users' />
                </div>
                <button className='btn btn-danger btn-block mt-2'>Search</button>
            </form>);
    }
}

export default SearchUsers;
