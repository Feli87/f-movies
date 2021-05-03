import React, {useEffect} from "react";
import { connect } from 'react-redux';
import { useParams } from "react-router";
import { getSearchMovie } from '../../store/actions/index';
import './search-movie.css';
import MovieCard from '../../components/Movie/MovieCard'
import PaginatorSearch from "../../components/Paginator/PaginatorSearch";
import Spinner from '../../assets/spinner.svg';

const SearchMovie = ({getSearchMovieEffect, MOVIES_STORE})=>{

    const {query} = useParams();
    const page = MOVIES_STORE.searchMoviePage && MOVIES_STORE.searchMoviePage > 0 ?  MOVIES_STORE.searchMoviePage: 1
  useEffect(() => {
    getSearchMovieEffect(query, page)
  }, [getSearchMovieEffect, query,page])
  
  // const handlePaginator = (value)=>{
  //   switch (value) {
  //     case "prev":
  //       if(MOVIES_STORE.searchMoviePage && MOVIES_STORE.searchMoviePage > 1){
  //         return getSearchMovieEffect(query, MOVIES_STORE.searchMoviePage - 1)
  //       }
  //       break;
  //     case "next":
  //       if(MOVIES_STORE.searchMoviePage && MOVIES_STORE.searchMoviePage < MOVIES_STORE.searchMovieTotalPages){
  //         return getSearchMovieEffect(query, MOVIES_STORE.searchMoviePage + 1)
  //       }
  //       break;
  //     default:
  //       break;
  //   }
  // }
  return ( 
    <div className="home-main-div">
      <div className="home-main">
        <h1>Result for: {query}</h1>
      <PaginatorSearch></PaginatorSearch>
        {MOVIES_STORE.searchMovieLoading
        ?(
         
          <div>
          <img src={Spinner} alt="loadding"></img>
          </div>
        ):(
          <>
          {MOVIES_STORE.searchMovie && MOVIES_STORE.searchMovie.length > 0
            ?(
              MOVIES_STORE.searchMovie.map((movie, index)=>{
                return <MovieCard
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
            ):(
              <p>No se encontraron resultados</p>
            )
          }
          </>
        )
        }
      </div>
      {/* <div>
        <button onClick={()=>handlePaginator("prev")}>Anterior</button>
        <button onClick={()=>handlePaginator("next")}>Siguiente</button>
      </div> */}
      <PaginatorSearch></PaginatorSearch>
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
    getSearchMovieEffect: (query, page) => dispatch(getSearchMovie(query, page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovie);

