import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { tareas } from './jsons/todos.json'


class App extends Component {

  //se ejecuta antes de cargar el componente
  constructor(){
      super();
      this.state = { 
        titulo:'Aplicacion de Tareas',
        tareas

      };
  }

  render() {
    //console.log('Previo a renderizar: ', tareas);
    const todos = this.state.tareas.map( (tarea, i) => {
      return (
        
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{tarea.titulo}</h3>
              <span className="badge bg-danger">
                {tarea.prioridad}
                </span>     
            </div>
            <div className="card-body">
              <p>{tarea.descripcion}</p>
              <p><mark>{tarea.responsable}</mark></p>
            </div>
          </div>
        </div>
        
      )
    });
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="/#" className="App-link"> 
          { this.state.titulo } &nbsp;
          <span className="badge badge-pill bg-success "> { this.state.tareas.length } </span> </a>
        </nav>

        <div className="container">
          <div className="row mt-4">
            {todos}
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> Edit <code>src/App.js</code> and save to reload. </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
            Aprenda React </a>
        </header> */}
      </div>
    );
  }
}

export default App;
