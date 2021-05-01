import React, {useEffect} from "react";
import { connect } from 'react-redux';
import { getMovies } from '../../store/actions/index';
import './Buscador.css';


const Buscador = ({getMoviesEffect, MOVIES})=>{

  useEffect(() => {
    getMoviesEffect()
  }, [getMoviesEffect])
  return ( 
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => console.log("object")}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={"title"}
              onChange={(e) => console.log("object")}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
        </ul>
      </div>
    
  )
}


const mapStateToProps =  state => {
  return {
    MOVIES : state.moviesReducers,
  };
};

const mapDispatchToProps = dispatch =>{
  return {
    getMoviesEffect: () => dispatch(getMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);

