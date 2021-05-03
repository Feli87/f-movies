import React, {useEffect} from "react";
import { connect } from 'react-redux';
import { getMovies } from '../../store/actions/index';
import './home.css';
import MovieCard from '../../components/Movie/MovieCard';
import { withTranslation } from 'react-i18next';
import Paginator from "../../components/Paginator/Paginator";
import Spinner from '../../assets/spinner.svg'

const Home = ({ t, getMoviesEffect, MOVIES_STORE})=>{

  const page = MOVIES_STORE.moviesPage && MOVIES_STORE.moviesPage > 0 ?  MOVIES_STORE.moviesPage: 1
  useEffect(() => {
    getMoviesEffect(page)
  }, [getMoviesEffect, page])
  

  return ( 
    <div className="home-main-div">

      <div className="top-paginator">
         <Paginator></Paginator>
      </div>
    
      <div className="home-main">
        {MOVIES_STORE.moviesLoading
        ?(
         <div>
            <img src={Spinner} alt="loadding"></img>
         </div>
        ):(
          MOVIES_STORE.movies.map((movie, index)=>{
        
           return  <MovieCard
                    key={index}
                    id={movie.id}
                    adult={movie.adult}
                    backdrop_path={movie.backdrop_path}
                    genre_ids={movie.genre_ids}
                    original_language={movie.original_language}
                    original_title={movie.adult}
                    overview={movie.overview}
                    popularity={movie.popularity}
                    poster_path={movie.poster_path}
                    release_date={movie.release_date}
                    title={movie.title}
                    video={movie.video}
                    vote_average={movie.vote_average}
                    vote_count={movie.vote_count}
                    />
          })
        )
        }
      </div>

      <div className="bottom-paginator">
         <Paginator></Paginator>
      </div>
     
    </div>
  )
};


const mapStateToProps =  state => {
  return {
    MOVIES_STORE : state.moviesReducers,
  };
};

const mapDispatchToProps = dispatch =>{
  return {
    getMoviesEffect: (page) => dispatch(getMovies(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Home));

