import React from 'react';
import './movie-card.css';
import {useHistory} from 'react-router-dom';
import defaultImg from '../../assets/images/default.png'
const MovieCard = ({
    adult, backdrop_path, genre_ids, original_language, id,
    original_title, overview, popularity, poster_path,release_date, title, video, vote_average,vote_count})=>{
        const history = useHistory();
        const handleClick = (idMovie)=>{
            return history.push(`/movie/${idMovie}`)
        }
        return (
            <div onClick={()=> handleClick(id)} className="movie-related-card">
                <div className="movie-related-card-col-img">
                    {poster_path
                    ?(
                    <img className="movie-related-card-img" src={`https://image.tmdb.org/t/p/w185/${poster_path}`} alt={title}></img>
                    ):(
                     <img className="movie-related-card-img" src={defaultImg} alt={title}></img>
                    )

                    }
                    
                </div>
            </div>
        )
    }

export default MovieCard;