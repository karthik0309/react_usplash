import React from 'react'
import NavBar from '../components/utilities/NavBar'
import SearchBar from '../components/utilities/SearchBar'
import {isAuthenticated} from '../components/core/Auth'
import '../App.css'

const Search = () => {
    return (
        <div className="main__container">
            <NavBar/>    
            {isAuthenticated() ? <SearchBar/> : <h1 className="h1">Login first</h1>}      
        </div>
    )
}

export default Search
