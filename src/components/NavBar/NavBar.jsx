import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './navbar.css';
import i18n from '../../i18n';
import { withTranslation } from 'react-i18next';
import {connect} from 'react-redux';
import {getMovies, getMovieDetails} from '../../store/actions/index';
import traslationIcon from '../../assets/images/traslation-icon.png';
import favoriteIcon from '../../assets/likes-folder.png';
import infoIcon from '../../assets/info.png';
import movieIcon from '../../assets/popcorn-movie.png';
const NavBar = ({t, MOVIES_STORE, getMoviesEffect, getMovieDetailsEffect}) =>{

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        getMoviesEffect(MOVIES_STORE.moviesPage)
        if(MOVIES_STORE.movie && MOVIES_STORE.movie.id){
            getMovieDetailsEffect(MOVIES_STORE.movie.id)
        }
      } 

    const history = useHistory()
    const [query, setQuery] = useState("")
    const handleSearch = (e)=>{
        e.preventDefault();
        e.target.reset();
        return query.length >=1 ? history.push(`/search/${query}`) : alert(t("empySearch"))
        

    }
    return (
        <div className="navbar-main">
            <div className="home-main-div-title">
                <div className="home-main-div-search"> 
                <div className="home-text-traslations">
                    <img width="50px" src={movieIcon} alt="traslations"></img>
                </div>
                 <Link className="home-main-div-title-link" to="/">{t("title")}</Link>
                    <form onSubmit={(e)=>handleSearch(e)}>
                    <input 
                    placeholder="Type to search ej. La Vida Es Bella"
                    onChange={(e)=> setQuery(e.target.value)} type="text"/>
                    <button type="submit"> {t("searchButon")}</button>
                        {/* <Link className="navbar-main-links"  to={`/search/${query}`}>Search</Link> */}
               </form>
            </div>
            </div>

            <div className="home-main-div-icons"> 
                <div className="home-text-traslations">
                    <img width="50px" src={favoriteIcon} alt="traslations"></img>
                </div>
                <Link className="navbar-main-links" to="/favorites">{t("favorites")}</Link>
                <div className="home-text-traslations">
                    <img width="50px" src={infoIcon} alt="traslations"></img>
                </div>
                <Link className="navbar-main-links" to="/about">{t("about")}</Link>
                <div className="home-text-traslations">
                    <img width="50px" src={traslationIcon} alt="traslations"></img>
                </div>
                <div className='--header-flag'>
                <select 
                className="language-selector"
                onChange={(e) => changeLanguage(e.target.value)}
                name="languages" id="languages">
                    <option
                    value="en">{t("english")}</option>
                    <option
                     value="es">{t("spanish")}</option>
                </select>
                {/* <button className="btn-en" onClick={() => changeLanguage('en')}>{t("english")}</button>
                <button className="btn-es" onClick={() => changeLanguage('es')}>{t("spanish")}</button> */}
                </div> 

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

const mapStateToProps =  state => {
    return {
      MOVIES_STORE : state.moviesReducers,
    };
  };
  
  const mapDispatchToProps = dispatch =>{
    return {
      getMoviesEffect: (page) => dispatch(getMovies(page)),
      getMovieDetailsEffect: (idMovie) => dispatch(getMovieDetails(idMovie)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(NavBar));
