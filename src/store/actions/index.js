import axios from 'axios';

//GET ALL TOPS MOVIES 
export const GET_MOVIES_REQUEST = "GET_MOVIES_REQUEST";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const GET_MOVIES_FAILURE = "GET_MOVIES_FAILURE";

//GET MOVIE DETAILS
export const GET_MOVIE_DETAILS_REQUEST = "GET_MOVIE_DETAILS_REQUEST";
export const GET_MOVIE_DETAILS_SUCCESS = "GET_MOVIE_DETAILS_SUCCESS";
export const GET_MOVIE_DETAILS_FAILURE = "GET_MOVIE_DETAILS_FAILURE";

//GET MOVIE IMAGES
export const GET_MOVIE_IMAGES_REQUEST = "GET_MOVIE_IMAGES_REQUEST";
export const GET_MOVIE_IMAGES_SUCCESS = "GET_MOVIE_IMAGES_SUCCESS";
export const GET_MOVIE_IMAGES_FAILURE = "GET_MOVIE_IMAGES_FAILURE";

//GET  MOVIE VIDEOS 
export const GET_MOVIE_VIDEOS_REQUEST = "GET_MOVIE_VIDEOS_REQUEST";
export const GET_MOVIE_VIDEOS_SUCCESS = "GET_MOVIE_VIDEOS_SUCCESS";
export const GET_MOVIE_VIDEOS_FAILURE = "GET_MOVIE_VIDEOS_FAILURE";

//GET KEYWORDS MOVIES 
export const GET_MOVIE_KEYWORDS_REQUEST = "GET_MOVIE_KEYWORDS_REQUEST";
export const GET_MOVIE_KEYWORDS_SUCCESS = "GET_MOVIE_KEYWORDS_SUCCESS";
export const GET_MOVIE_KEYWORDS_FAILURE = "GET_MOVIE_KEYWORDS_FAILURE";

//GET RELATED MOVIES 
export const GET_RELATED_MOVIES_REQUEST = "GET_RELATED_MOVIES_REQUEST";
export const GET_RELATED_MOVIES_SUCCESS = "GET_RELATED_MOVIES_SUCCESS";
export const GET_RELATED_MOVIES_FAILURE = "GET_RELATED_MOVIES_FAILURE";

//GET SEARCH MOVIE 
export const GET_SEARCH_MOVIE_REQUEST = "GET_SEARCH_MOVIE_REQUEST";
export const GET_SEARCH_MOVIE_SUCCESS = "GET_SEARCH_MOVIE_SUCCESS";
export const GET_SEARCH_MOVIE_FAILURE = "GET_SEARCH_MOVIE_FAILURE";


//GET ALL MOVIES
export const getMovies = (page) => {

    return (dispatch) => {
        
        dispatch(getMoviesRequest());

        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/top_rated`,
            params: {
                api_key: "d6457739d79b36fbc37f3aead5da67a8",
                language: localStorage.getItem('i18nextLng')  === "es" ? "es-ES" : "en-US",
                page: parseInt(page),
            },
            headers: { 'Content-Type': 'application/json' },
        };

        axios.request(options).then(movies => {

            dispatch(getMoviesSuccess(movies.data));

        }).catch(error => {
            dispatch(getMoviesFailure(error));
        });
    };
};

export const getMoviesRequest = () => {
    return {
        type: GET_MOVIES_REQUEST,
    };
};
export const getMoviesSuccess = (movies) => {
    return {
        type: GET_MOVIES_SUCCESS,
        payload: movies
    };
};
export const getMoviesFailure = (error) => {
    return {
        type: GET_MOVIES_FAILURE,
        payload: error
    };
};


//GET MOVIE DETAILS
export const getMovieDetails = (idMovie) => {

    return (dispatch) => {

        dispatch(getMovieDetailsRequest());

        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${idMovie}`,
            params: {
                api_key: "d6457739d79b36fbc37f3aead5da67a8",
                language: localStorage.getItem('i18nextLng')  === "es" ? "es-ES" : "en-US",
                page: 1,
            },
            headers: { 'Content-Type': 'application/json' },
        };

        axios.request(options).then(movies => {
            dispatch(getMovieDetailsSuccess(movies.data));
        }).catch(error => {
            dispatch(getMovieDetailsFailure(error));
        });
    };
};

export const getMovieDetailsRequest = () => {
    return {
        type: GET_MOVIE_DETAILS_REQUEST,
    };
};
export const getMovieDetailsSuccess = (movieDetails) => {
    return {
        type: GET_MOVIE_DETAILS_SUCCESS,
        payload: movieDetails
    };
};
export const getMovieDetailsFailure = (error) => {
    return {
        type: GET_MOVIE_DETAILS_FAILURE,
        payload: error
    };
};

//GET MOVIE IMAGES
export const getMovieImages = (idMovie) => {

    return (dispatch) => {

        dispatch(getMovieImagesRequest());

        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${idMovie}/images`,
            params: {
                api_key: "d6457739d79b36fbc37f3aead5da67a8",
                language: "en-US",
                include_image_language: "es-ES",
            },
            headers: { 'Content-Type': 'application/json' },
        };

        axios.request(options).then(movies => {
            dispatch(getMovieImagesSuccess(movies.data));
        }).catch(error => {
            dispatch(getMovieImagesFailure(error));
        });
    };
};

export const getMovieImagesRequest = () => {
    return {
        type: GET_MOVIE_IMAGES_REQUEST,
    };
};
export const getMovieImagesSuccess = (movieImages) => {
    return {
        type: GET_MOVIE_IMAGES_SUCCESS,
        payload: movieImages
    };
};
export const getMovieImagesFailure = (error) => {
    return {
        type: GET_MOVIE_IMAGES_FAILURE,
        payload: error
    };
};

//GET RELATED MOVIE
export const getRelatedMovies = (idMovie) => {

    return (dispatch) => {

        dispatch(getRelatedMoviesRequest());

        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${idMovie}/similar`,
            params: {
                api_key: "d6457739d79b36fbc37f3aead5da67a8",
                language: localStorage.getItem('i18nextLng')  === "es" ? "es-ES" : "en-US",
                page: 1,
            },
            headers: { 'Content-Type': 'application/json' },
        };

        axios.request(options).then(movies => {
            dispatch(getRelatedMoviesSuccess(movies.data));
        }).catch(error => {
            dispatch(getRelatedMoviesFailure(error));
        });
    };
};

export const getRelatedMoviesRequest = () => {
    return {
        type: GET_RELATED_MOVIES_REQUEST,
    };
};
export const getRelatedMoviesSuccess = (relatedMovies) => {
    return {
        type: GET_RELATED_MOVIES_SUCCESS,
        payload: relatedMovies
    };
};
export const getRelatedMoviesFailure = (error) => {
    return {
        type: GET_RELATED_MOVIES_FAILURE,
        payload: error
    };
};

//GET MOVIE VIDEOS
export const getMovieVideos = (idMovie) => {

    return (dispatch) => {

        dispatch(getMovieVideosRequest());

        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${idMovie}/videos`,
            params: {
                api_key: "d6457739d79b36fbc37f3aead5da67a8",
                language: localStorage.getItem('i18nextLng')  === "es" ? "es-ES" : "en-US",
            },
            headers: { 'Content-Type': 'application/json' },
        };

        axios.request(options).then(movies => {
            dispatch(getMovieVideosSuccess(movies.data));
        }).catch(error => {
            dispatch(getMovieVideosFailure(error));
        });
    };
};

export const getMovieVideosRequest = () => {
    return {
        type: GET_MOVIE_VIDEOS_REQUEST,
    };
};
export const getMovieVideosSuccess = (movieVideos) => {
    return {
        type: GET_MOVIE_VIDEOS_SUCCESS,
        payload: movieVideos
    };
};
export const getMovieVideosFailure = (error) => {
    return {
        type: GET_MOVIE_VIDEOS_FAILURE,
        payload: error
    };
};

//GET MOVIE KEYWORDS
export const getMovieKeywords = (idMovie) => {

    return (dispatch) => {

        dispatch(getMovieKeywordsRequest());

        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${idMovie}/keywords`,
            params: {
                api_key: "d6457739d79b36fbc37f3aead5da67a8",
                language: localStorage.getItem('i18nextLng')  === "es" ? "es-ES" : "en-US",
            },
            headers: { 'Content-Type': 'application/json' },
        };

        axios.request(options).then(movies => {
            dispatch(getMovieKeywordsSuccess(movies.data));
        }).catch(error => {
            dispatch(getMovieKeywordsFailure(error));
        });
    };
};

export const getMovieKeywordsRequest = () => {
    return {
        type: GET_MOVIE_KEYWORDS_REQUEST,
    };
};
export const getMovieKeywordsSuccess = (movieKeywords) => {
    return {
        type: GET_MOVIE_KEYWORDS_SUCCESS,
        payload: movieKeywords
    };
};
export const getMovieKeywordsFailure = (error) => {
    return {
        type: GET_MOVIE_KEYWORDS_FAILURE,
        payload: error
    };
};

//GET SEARCH MOVIE 
export const getSearchMovie = (query, page) => {

    return (dispatch) => {

        dispatch(getSearchMovieRequest());

        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/search/movie`,
            params: {
                api_key: "d6457739d79b36fbc37f3aead5da67a8",
                language: localStorage.getItem('i18nextLng')  === "es" ? "es-ES" : "en-US",
                query:query,
                page:parseInt(page)
            },
            headers: { 'Content-Type': 'application/json' },
        };

        axios.request(options).then(movies => {
            dispatch(getSearchMovieSuccess(movies.data));
        }).catch(error => {
            dispatch(getSearchMovieFailure(error));
        });
    };
};

export const getSearchMovieRequest = () => {
    return {
        type: GET_SEARCH_MOVIE_REQUEST,
    };
};
export const getSearchMovieSuccess = (movies) => {
    return {
        type: GET_SEARCH_MOVIE_SUCCESS,
        payload: movies
    };
};
export const getSearchMovieFailure = (error) => {
    return {
        type: GET_SEARCH_MOVIE_FAILURE,
        payload: error
    };
};