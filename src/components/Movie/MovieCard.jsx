import React from 'react';
import './movie-card.css';
import {useHistory} from 'react-router-dom';

const MovieCard = ({
    adult, backdrop_path, genre_ids, original_language, id,
    original_title, overview, popularity, poster_path,release_date, title, video, vote_average,vote_count})=>{
        const history = useHistory();
        const handleClick = (idMovie)=>{
            return history.push(`/movie/${idMovie}`)
        }
        return (
            <div onClick={()=> handleClick(id)} className="movie-card">
                <div className="movie-card-col-img">
                    <img className="movie-card-img" src={`https://image.tmdb.org/t/p/w185/${poster_path}`} alt={title}></img>
                </div>
                <div className="movie-card-col-body">
                    <h3 className="movie-card-title">{title}</h3>
                    <div>
                        <p>{overview.substr(0,200) + "..."}</p>
                    </div>
                    <div className="movie-card-col-body-col">
                        <div className="movie-card-col-body-col-item">
                            {popularity}
                        </div>
                        <div className="movie-card-col-body-col-item">
                            {vote_average}
                        </div>
                        <div className="movie-card-col-body-col-item">
                            {vote_count}
                        </div>
                        <div className="movie-card-col-body-col-item">
                            {original_language}
                        </div>
                        <div className="movie-card-col-body-col-item">
                            {release_date}
                        </div>
                    </div>
                </div>

            </div>
        )
    }

export default MovieCard;