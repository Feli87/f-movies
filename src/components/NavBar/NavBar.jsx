import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './navbar.css';

const NavBar = () =>{
    const history = useHistory()
    const [query, setQuery] = useState("")
    const handleSearch = (e)=>{
        e.preventDefault();
        return query.length >=1 ? history.push(`/search/${query}`) : alert("Please complete de search form")
        

    }
    return (
        <div className="navbar-main">
            <div className="home-main-div-title">
                <Link className="home-main-div-title-link" to="/">Movies</Link>
            </div>
            <div className="home-main-div-search">
               <form onSubmit={(e)=>handleSearch(e)}>
               <input onChange={(e)=> setQuery(e.target.value)} type="text"/>
               <button type="submit"> Search Movies</button>
                {/* <Link className="navbar-main-links"  to={`/search/${query}`}>Search</Link> */}
               </form>
            </div>
            <div className="home-main-div-icons"> 
                <Link className="navbar-main-links" to="/about">About This Page</Link>
            </div>
            {/* <ul>
                <li>
                    <Link className="navbar-main-links" to="/">Home</Link>
                </li>
                <li>
                    <Link className="navbar-main-links"  to="/movie/5050">Movie</Link>
                </li>
                <li>
                    <input onChange={(e)=> setQuery(e.target.value)} type="text"/>
                    <Link className="navbar-main-links"  to={`/search/${query}`}>Search</Link>
                </li>
            </ul> */}
        </div>
    )
}

export default NavBar