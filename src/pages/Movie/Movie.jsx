import React, {useEffect} from "react";
import { connect } from 'react-redux';
import { useParams } from "react-router";
import YouTube from 'react-youtube';
import { 
  getMovieDetails,
  getMovieImages,
  getRelatedMovies,
  getMovieVideos,
  getMovieKeywords } from '../../store/actions/index';
import './movie.css';


const Movie = ({  getMovieDetailsEffect, getMovieImagesEffect,
   getRelatedMoviesEffect, getMovieVideosEffect, getMovieKeywordsEffect, MOVIES_STORE})=>{

    const {idMovie} = useParams();
    const movie = MOVIES_STORE.movie || false
    const movieVideo = MOVIES_STORE.movieVideos || false

  useEffect(() => {
    getMovieDetailsEffect(idMovie)
    getMovieImagesEffect(idMovie)
    getRelatedMoviesEffect(idMovie)
    getMovieVideosEffect(idMovie)
    getMovieKeywordsEffect(idMovie)
  }, [getMovieDetailsEffect,
     getMovieImagesEffect,
     getRelatedMoviesEffect,
     getMovieVideosEffect,
     getMovieKeywordsEffect,
     idMovie]);

    const VideoPlayerOptions = {
      height: '500px',
      width: window.innerWidth - 80,
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        color:"white",
        rel:0,
        showinfo:0,
        modestbranding:1
      },
      rel:0,
      showinfo:0,
      modestbranding:1
    };
     //pause video onLoad
     const _onReadyVideo = event=> event.target.pauseVideo(); 


  return ( 
      <div className="movie-main">
        {MOVIES_STORE.movieLoading
        ?(
          <p>Loading</p>
        ):(
          <>
          {movie
            ?(
              <>
              {!movieVideo.movieVideosLoading && movieVideo.results && movieVideo.results.length > 0
                ?(
                  <div className="movie-main-col-video">
                    {/* <iframe width="80%" height="500px" src={`https://www.youtube.com/embed/${movieVideo.results[0].key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                    <YouTube videoId={movieVideo.results[0].key} opts={VideoPlayerOptions} onReady={_onReadyVideo} />
                  </div>
                ):(
                  <p>No Video</p>
                )
              }
              <div className="movie-main-col">
                <h1>{movie.title}</h1>
              </div>
              </>
            ):(
              <p>No Movie</p>
            )

          }
          </>
        )
        
        }
        
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
    getMovieDetailsEffect: (idMovie) => dispatch(getMovieDetails(idMovie)),
    getMovieImagesEffect: (idMovie) => dispatch(getMovieImages(idMovie)),
    getRelatedMoviesEffect: (idMovie) => dispatch(getRelatedMovies(idMovie)),
    getMovieVideosEffect: (idMovie) => dispatch(getMovieVideos(idMovie)),
    getMovieKeywordsEffect: (idMovie) => dispatch(getMovieKeywords(idMovie)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);

