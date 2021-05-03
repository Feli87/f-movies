import React, {useEffect} from "react";
import { connect } from 'react-redux';
import { getSearchMovie } from '../../store/actions/index';
import { withTranslation } from 'react-i18next';
import {useParams} from 'react-router-dom';

const Paginator = ({ t, getSearchMovieEffect, MOVIES_STORE})=>{

  const {query} = useParams();

  const page = MOVIES_STORE.searchMoviePage && MOVIES_STORE.searchMoviePage > 0 ?  MOVIES_STORE.searchMoviePage: 1

  useEffect(() => {
    getSearchMovieEffect(query, page)
  }, [getSearchMovieEffect,query,page])

 

  const handlePaginator = (value)=>{
    switch (value) {
      case "prev":
        if(MOVIES_STORE.searchMoviePage && MOVIES_STORE.searchMoviePage > 1){
          return getSearchMovieEffect(query, MOVIES_STORE.searchMoviePage - 1)
        }
        break;
      case "next":
        if(MOVIES_STORE.searchMoviePage && MOVIES_STORE.searchMoviePage < MOVIES_STORE.searchMovieTotalPages){
          return getSearchMovieEffect(query, MOVIES_STORE.searchMoviePage + 1)
        }
        break;
      case "prev10":
        if(MOVIES_STORE.searchMoviePage && MOVIES_STORE.searchMoviePage > 1){
          return getSearchMovieEffect(query, MOVIES_STORE.searchMoviePage-10)
        }
        break;
      case "next10":
        if(MOVIES_STORE.searchMoviePage && MOVIES_STORE.searchMoviePage < MOVIES_STORE.searchMovieTotalPages){
          return getSearchMovieEffect(query, MOVIES_STORE.searchMoviePage+10)
        }
        break;
      case "start":
        if(MOVIES_STORE.searchMoviePage && MOVIES_STORE.searchMoviePage > 1){
          return getSearchMovieEffect(query, 1)
        }
        break;
      case "end":
        if(MOVIES_STORE.searchMoviePage && MOVIES_STORE.searchMoviePage < MOVIES_STORE.searchMovieTotalPages){
          return getSearchMovieEffect(query, MOVIES_STORE.searchMovieTotalPages)
        }
        break;
      default:
        break;
    }
  }

  return ( 
      <div className="home-paginator-div">

      {MOVIES_STORE.searchMoviePage && MOVIES_STORE.searchMoviePage > 1
            ?(
              <div className="home-paginator-div-col">
              <button onClick={()=>handlePaginator("start")}>Start</button>
              </div>
            ):(
              <div className="home-paginator-div-col">
             <button disabled onClick={()=>handlePaginator("start")}>Start</button>
              </div>
            )
          }
        
        {MOVIES_STORE.searchMoviePage && MOVIES_STORE.searchMoviePage > 10
            ?(
              <div className="home-paginator-div-col">
              <button onClick={()=>handlePaginator("prev10")}>-10</button>
              </div>
            ):(
              <div className="home-paginator-div-col">
                 <button disabled onClick={()=>handlePaginator("prev10")}>-10</button>
              </div>
            )
          }
          
          {MOVIES_STORE.searchMoviePage && MOVIES_STORE.searchMoviePage > 1
            ?(
              <div className="home-paginator-div-col">
              <button onClick={()=>handlePaginator("prev")}>Anterior</button>
              </div>
            ):(
              <div className="home-paginator-div-col">
             <button disabled onClick={()=>handlePaginator("prev")}>Anterior</button>
              </div>
            )
          }


          
    

        <div className="home-paginator-div-col page-paddin ">
            <div className="page-paginator-col">
                <div>
                    <h4>Page</h4>
                </div>
                <div>
                    <h4> {MOVIES_STORE.searchMoviePage}</h4>
                </div>
            </div>
        </div>


      {MOVIES_STORE.searchMovieTotalPages && MOVIES_STORE.searchMovieTotalPages >= MOVIES_STORE.searchMoviePage + 1
            ?(
              <div className="home-paginator-div-col">
              <button onClick={()=>handlePaginator("next")}>Siguiente</button>
            </div>
            ):(
              <div className="home-paginator-div-col">
                 <button disabled onClick={()=>handlePaginator("next")}>Siguiente</button>
              </div>
            )
          }

          
        {MOVIES_STORE.searchMovieTotalPages && MOVIES_STORE.searchMovieTotalPages > MOVIES_STORE.searchMoviePage + 10
            ?(
              <div className="home-paginator-div-col">
              <button onClick={()=>handlePaginator("next10")}>+10</button>
              </div>
            ):(
              <div className="home-paginator-div-col">
              <button disabled  onClick={()=>handlePaginator("next10")}>+10</button>
              </div>
            )
          }

    {MOVIES_STORE.searchMovieTotalPages && MOVIES_STORE.searchMovieTotalPages >= MOVIES_STORE.searchMoviePage + 1
            ?(
              <div className="home-paginator-div-col">
              <button onClick={()=>handlePaginator("end")}>End</button>
              </div>
            ):(
              <div className="home-paginator-div-col">
             <button disabled onClick={()=>handlePaginator("end")}>End</button>
              </div>
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
    getSearchMovieEffect: (query, page) => dispatch(getSearchMovie(query, page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Paginator));

