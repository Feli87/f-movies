import React, {useEffect} from "react";
import { connect } from 'react-redux';
import { getMovies } from '../../store/actions/index';
import { withTranslation } from 'react-i18next';

const Paginator = ({ t, getMoviesEffect, MOVIES_STORE})=>{

  const page = MOVIES_STORE.moviesPage && MOVIES_STORE.moviesPage > 0 ?  MOVIES_STORE.moviesPage: 1
  useEffect(() => {
    getMoviesEffect(page)
  }, [getMoviesEffect, page])
  
  const handlePaginator = (value)=>{
    switch (value) {
      case "prev":
        if(MOVIES_STORE.moviesPage && MOVIES_STORE.moviesPage > 1){
          return getMoviesEffect(MOVIES_STORE.moviesPage-1)
        }
        break;
      case "next":
        if(MOVIES_STORE.moviesPage && MOVIES_STORE.moviesPage < MOVIES_STORE.moviesTotalPages){
          return getMoviesEffect(MOVIES_STORE.moviesPage+1)
        }
        break;
      case "prev10":
        if(MOVIES_STORE.moviesPage && MOVIES_STORE.moviesPage > 1){
          return getMoviesEffect(MOVIES_STORE.moviesPage-10)
        }
        break;
      case "next10":
        if(MOVIES_STORE.moviesPage && MOVIES_STORE.moviesPage < MOVIES_STORE.moviesTotalPages){
          return getMoviesEffect(MOVIES_STORE.moviesPage+10)
        }
        break;
      case "start":
        if(MOVIES_STORE.moviesPage && MOVIES_STORE.moviesPage > 1){
          return getMoviesEffect(1)
        }
        break;
      case "end":
        if(MOVIES_STORE.moviesPage && MOVIES_STORE.moviesPage < MOVIES_STORE.moviesTotalPages){
          return getMoviesEffect(MOVIES_STORE.moviesTotalPages)
        }
        break;
      default:
        break;
    }
  }

  return ( 
      <div className="home-paginator-div">

      {MOVIES_STORE.moviesPage && MOVIES_STORE.moviesPage > 1
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
        
        {MOVIES_STORE.moviesPage && MOVIES_STORE.moviesPage > 10
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
          
          {MOVIES_STORE.moviesPage && MOVIES_STORE.moviesPage > 1
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
                    <h4> {MOVIES_STORE.moviesPage}</h4>
                </div>
            </div>
        </div>


      {MOVIES_STORE.moviesTotalPages && MOVIES_STORE.moviesTotalPages >= MOVIES_STORE.moviesPage + 1
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

          
        {MOVIES_STORE.moviesTotalPages && MOVIES_STORE.moviesTotalPages > MOVIES_STORE.moviesPage + 10
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

    {MOVIES_STORE.moviesTotalPages && MOVIES_STORE.moviesTotalPages >= MOVIES_STORE.moviesPage + 1
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
    getMoviesEffect: (page) => dispatch(getMovies(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Paginator));

