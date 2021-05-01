import {
    GET_MOVIES_REQUEST,
    GET_MOVIES_SUCCESS,
    GET_MOVIES_FAILURE,
    GET_MOVIE_DETAILS_REQUEST,
    GET_MOVIE_DETAILS_SUCCESS,
    GET_MOVIE_DETAILS_FAILURE,
    GET_MOVIE_IMAGES_REQUEST,
    GET_MOVIE_IMAGES_SUCCESS,
    GET_MOVIE_IMAGES_FAILURE,
    GET_RELATED_MOVIES_REQUEST,
    GET_RELATED_MOVIES_SUCCESS,
    GET_RELATED_MOVIES_FAILURE,
    GET_MOVIE_VIDEOS_REQUEST,
    GET_MOVIE_VIDEOS_SUCCESS,
    GET_MOVIE_VIDEOS_FAILURE,
    GET_MOVIE_KEYWORDS_REQUEST,
    GET_MOVIE_KEYWORDS_SUCCESS,
    GET_MOVIE_KEYWORDS_FAILURE,
    GET_SEARCH_MOVIE_REQUEST,
    GET_SEARCH_MOVIE_SUCCESS,
    GET_SEARCH_MOVIE_FAILURE
} from '../actions/index.js';

let initialState = {
    movies: [],
    moviesLoading: true,
    moviesError: "All Good No Errors ",
    totalMovies:0,
    moviesTotalPages:0,
    moviesPage:0,
    searchMovie: [],
    searchMovieLoading: true,
    searchMovieError: "All Good No Errors ",
    totalSearchMovies:0,
    searchMovieTotalPages:0,
    searchMoviePage:0,
    movie:{},
    movieLoading: true,
    movieError: "All Good No Errors ",
    movieImages:{},
    movieImagesLoading: true,
    movieImagesError: "All Good No Errors ",
    movieVideos:{},
    movieVideosLoading: true,
    movieVideosError: "All Good No Errors ",
    movieKeywords:[],
    movieKeywordsLoading: true,
    movieKeywordsError: "All Good No Errors ",
    relatedMovies: [],
    relatedMoviesLoading: true,
    relatedMoviesError: "All Good No Errors ",
    totalRelatedMovies:0,
    relatedMoviesTotalPages:0,
    relatedMoviesPage:0,
};

const moviesReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES_REQUEST:
            return {
                ...state,
                moviesLoading: true
            }
        case GET_MOVIES_SUCCESS:
            return {
                ...state,
                moviesLoading: false,
                movies: action.payload.results,
                totalMovies: action.payload.total_results,
                moviesTotalPages:action.payload.total_pages,
                moviesPage:action.payload.page,
            }
        case GET_MOVIES_FAILURE:
            return {
                ...state,
                moviesError: action.payload,
                moviesLoading: false
            }
        case GET_SEARCH_MOVIE_REQUEST:
            return {
                ...state,
                searchMovieLoading: true
            }
        case GET_SEARCH_MOVIE_SUCCESS:
            return {
                ...state,
                searchMovieLoading: false,
                searchMovie: action.payload.results,
                totalSearchMovies: action.payload.total_results,
                searchMovieTotalPages:action.payload.total_pages,
                searchMoviePage:action.payload.page,
            }
        case GET_SEARCH_MOVIE_FAILURE:
            return {
                ...state,
                searchMovieError: action.payload,
                searchMovieLoading: false
            }
        case GET_MOVIE_DETAILS_REQUEST:
            return {
                ...state,
                movieLoading: true
            }
        case GET_MOVIE_DETAILS_SUCCESS:
            return {
                ...state,
                movieLoading: false,
                movie: action.payload
            }
        case GET_MOVIE_DETAILS_FAILURE:
            return {
                ...state,
                movieError: action.payload,
                movieLoading: false
            }
        case GET_MOVIE_IMAGES_REQUEST:
            return {
                ...state,
                movieImagesLoading: true
            }
        case GET_MOVIE_IMAGES_SUCCESS:
            return {
                ...state,
                movieImagesLoading: false,
                movieImages: action.payload
            }
        case GET_MOVIE_IMAGES_FAILURE:
            return {
                ...state,
                movieImagesError: action.payload,
                movieImagesLoading: false
            }
        case GET_MOVIE_VIDEOS_REQUEST:
            return {
                ...state,
                movieVideosLoading: true
            }
        case GET_MOVIE_VIDEOS_SUCCESS:
            return {
                ...state,
                movieVideosLoading: false,
                movieVideos: action.payload
            }
        case GET_MOVIE_VIDEOS_FAILURE:
            return {
                ...state,
                movieVideosError: action.payload,
                movieVideosLoading: false
            }
        case GET_MOVIE_KEYWORDS_REQUEST: 
            return {
                ...state,
                movieKeywordsLoading: true
            }
        case GET_MOVIE_KEYWORDS_SUCCESS:
            return {
                ...state,
                movieKeywordsLoading: false,
                movieKeywords: action.payload
            }
        case GET_MOVIE_KEYWORDS_FAILURE:
            return {
                ...state,
                movieKeywordsError: action.payload,
                movieKeywordsLoading: false
            }
        case GET_RELATED_MOVIES_REQUEST:
            return {
                ...state,
                relatedMoviesLoading: true
            }
        case GET_RELATED_MOVIES_SUCCESS:
            return {
                ...state,
                relatedMoviesLoading: false,
                relatedMovies: action.payload.results,
                totalRelatedMovies: action.payload.total_results,
                relatedMoviesTotalPages:action.payload.total_pages,
                relatedMoviesPage:action.payload.page,
            }
        case GET_RELATED_MOVIES_FAILURE:
            return {
                ...state,
                relatedMoviesError: action.payload,
                relatedMoviesLoading: false
            }
        default:
            return state;
    }
}

export default moviesReducers;