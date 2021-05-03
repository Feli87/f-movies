import React, {useEffect} from "react";
import { connect } from 'react-redux';
import { useParams } from "react-router";
// import YouTube from 'react-youtube';
import MovieRelatedCard from "../../components/Movie/MovieRelatedCard";
import { 
  getMovieDetails,
  getMovieImages,
  getRelatedMovies,
  getMovieVideos,
  getMovieKeywords } from '../../store/actions/index';
import './movie.css';
import CircularSlider from '@fseehawer/react-circular-slider';

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

    // const VideoPlayerOptions = {
    //   height: '500px',
    //   width: window.innerWidth - 80,
    //   playerVars: {
    //     // https://developers.google.com/youtube/player_parameters
    //     autoplay: 1,
    //     color:"white",
    //     rel:0,
    //     showinfo:0,
    //     modestbranding:0
    //   }
    // };
    //  //pause video onLoad
    //  const _onReadyVideo = event => {
    //    event.target.pauseVideo()
    //  }; 

// {
//   {
//     movie: {
//       adult: false,
//       backdrop_path: '/jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg',
//       belongs_to_collection: {
//         id: 729322,
//         name: 'Gabriel\'s Inferno Collection',
//         poster_path: '/LdSn17U6ybhtPJT3S6fTNRni5Y.jpg',
//         backdrop_path: '/hXF55codODfnzTZDExbUbfFmA9y.jpg'
//       },
//       budget: 0,
//       genres: [
//         {
//           id: 10749,
//           name: 'Romance'
//         }
//       ],
//       homepage: 'https://watch.passionflix.com/watch/f299fa17-5a2b-4fee-b53a-a4651747431b',
//       id: 724089,
//       imdb_id: 'tt13535454',
//       original_language: 'en',
//       original_title: 'Gabriel\'s Inferno Part II',
//       overview: 'Professor Gabriel Emerson finally learns the truth about Julia Mitchell\'s identity, but his realization comes a moment too late. Julia is done waiting for the well-respected Dante specialist to remember her and wants nothing more to do with him. Can Gabriel win back her heart before she finds love in another\'s arms?',
//       popularity: 11.483,
//       poster_path: '/x5o8cLZfEXMoZczTYWLrUo1P7UJ.jpg',
//       production_companies: [
//         {
//           id: 92153,
//           logo_path: '/psjvYkjjgAPtS8utnFYDM8t8yi7.png',
//           name: 'PassionFlix',
//           origin_country: 'US'
//         }
//       ],
//       production_countries: [],
//       release_date: '2020-07-31',
//       revenue: 0,
//       runtime: 105,
//       spoken_languages: [
//         {
//           english_name: 'English',
//           iso_639_1: 'en',
//           name: 'English'
//         }
//       ],
//       status: 'Released',
//       tagline: '',
//       title: 'Gabriel\'s Inferno Part II',
//       video: false,
//       vote_average: 8.7,
//       vote_count: 1240
//     }
//   }
// }
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
              {movieVideo.results && movieVideo.results.length > 0
                ?(
                  <div className="movie-main-col-video">
                    <iframe width="90%" height="500px" src={`https://www.youtube.com/embed/${movieVideo.results[0].key}`} 
                    title={movie.title} frameborder="0" rel="0"  showinfo="0" modestbranding="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    {/* <YouTube videoId={movieVideo.results[0].key} opts={VideoPlayerOptions} onReady={_onReadyVideo} /> */}
                  </div>
                ):(
                  <p>No Video</p>
                )
              }
               <div className="movie-details">

                <div className="movie-details-main">
                  <h1>{movie.title} ( {movie.release_date.slice(0,4)} )</h1>
                  <p>{movie.overview}</p>
                </div>
                <div className="movie-details-main">
                 <p>Original Title: {movie.original_title}</p>
                 <p>Original Language: {movie.spoken_languages[0].name}</p>
                 <p>Popularity: {movie.popularity}</p>
                 <p>Status: {movie.status}</p>
                 <CircularSlider
                      width={"150"}
                      label="Rank 0/10"
                      min={0}
                      max={10}
                      labelColor={Math.round(movie.popularity) < 5 ? "#d558" : "#5a58"}
                      knobColor="#ff58"
                      progressColorFrom={Math.round(movie.popularity) < 5 ? "#d558" : "#5a58"}
                      progressColorTo={Math.round(movie.popularity) < 5 ? "#d55998" : "#516E47"}
                      progressSize={15}
                      trackColor="#eeeeee"
                      valueFontSize="2.5rem"
                      labelBottom={true}
                      trackSize={5}
                      knobDraggable={false}
                      // data={["1€","2€"]} //...
                      dataIndex={movie.vote_average}
                      onChange={ value => { console.log(value); } }
                  />
                 <CircularSlider
                      width={"150"}
                      label="Votes"
                      labelColor={Math.round(movie.popularity) < 5 ? "#d558" : "#5a58"}
                      knobColor="#ff58"
                      progressColorFrom={Math.round(movie.popularity) < 5 ? "#d558" : "#5a58"}
                      progressColorTo={Math.round(movie.popularity) < 5 ? "#d55998" : "#516E47"}
                      progressSize={15}
                      trackColor="#eeeeee"
                      valueFontSize="2.5rem"
                      labelBottom={true}
                      trackSize={5}
                      knobDraggable={false}
                      // data={["1€","2€"]} //...
                      dataIndex={movie.vote_count}
                      onChange={ value => { console.log(value); } }
                  />
                  <CircularSlider
                      width={"150"}
                      label="Popularity"
                      min={0}
                      max={100}
                      labelColor={Math.round(movie.popularity) < 40 ? "#d558" : "#5a58"}
                      knobColor="#ff58"
                      progressColorFrom={Math.round(movie.popularity) < 40 ? "#d558" : "#5a58"}
                      progressColorTo={Math.round(movie.popularity) < 40 ? "#d55998" : "#516E47"}
                      progressSize={15}
                      trackColor="#eeeeee"
                      valueFontSize="2.5rem"
                      trackSize={5}
                      labelBottom={true}
                      knobDraggable={false}
                      // data={["1€","2€"]} //...
                      dataIndex={movie.popularity}
                      onChange={ value => { console.log(value); } }
                  />

                  {movie.spoken_languages && movie.spoken_languages.length > 0
                  ?(
                    movie.spoken_languages.map((lang, index)=>{
                      return  <CircularSlider
                      width={"90"}
                      key={index}
                      label={lang.name}
                      min={0}
                      max={100}
                      labelColor={Math.round(movie.popularity) < 40 ? "#d558" : "#5a58"}
                      knobColor="#ff58"
                      progressColorFrom={Math.round(movie.popularity) < 40 ? "#d558" : "#5a58"}
                      progressColorTo={Math.round(movie.popularity) < 40 ? "#d55998" : "#516E47"}
                      progressSize={5}
                      trackColor="#eeeeee"
                      trackSize={5}
                      hideLabelValue={false}
                      valueFontSize={"0.2rem"}
                      labelBottom={true}
                      knobDraggable={false}
                      // data={["1€","2€"]} //...
                      dataIndex={100}
                      // onChange={ value => { console.log(value); } }
                  />
                    })
                  ):(
                    <></>
                  )

                  }

                 <div className="movies-genres-div">                
                {movie.genres && movie.genres.length > 0
                ?(
                  movie.genres.map((genre, index)=>{
                    return <div className="movie-genre">{genre.name}</div>
                  })
                ):(
                  <p>No Genres</p>
                )
                }
               </div>
                </div>

               <div>

               </div>

               <div className="related-movies-title-div">
                <h2>Related Movies</h2>
               </div>
              <div className="movie-related-details">
              
                  {MOVIES_STORE.relatedMovies && MOVIES_STORE.relatedMovies.length > 0
                  ?(  
                    MOVIES_STORE.relatedMovies.map((movie, index)=>{
                      return <MovieRelatedCard
                      key={index}
                      id={movie.id}
                      backdrop_path={movie.backdrop_path}
                      poster_path={movie.poster_path}

                      />
                    })
                    
                  ):(
                    <p>No hay peliculas relacionadas</p>
                  )

                  }
              </div>
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

