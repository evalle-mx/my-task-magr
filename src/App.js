import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { tareas } from './jsons/todos.json'
import FormTarea from './components/FormTarea'


class App extends Component {

  //se ejecuta antes de cargar el componente
  constructor(){
      super();
      this.state = { 
        titulo:'Aplicacion de Tareas',
        tareas

      };
      this.handleAddTarea= this.handleAddTarea.bind(this) ;
  }

  handleAddTarea(tarea){
    this.setState ({
      tareas: [...this.state.tareas, tarea]
    });
  }

  render() {
    //console.log('Previo a renderizar: ', tareas);
    const todos = this.state.tareas.map( (tarea, i) => {
      return (
        
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{tarea.titulo}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {tarea.prioridad}
                </span>     
            </div>
            <div className="card-body">
              <p>{tarea.descripcion}</p>
              <p><mark>{tarea.responsable}</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger">Borrar</button>
            </div>
          </div>
        </div>
        
      )
    });


    // RETURN THE COMPONENT
    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
          <a href="/#" className="App-link"> 
          { this.state.titulo } &nbsp;
          <span className="badge badge-pill badge-light ml-2"> 
            { this.state.tareas.length } </span> 
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <FormTarea onAddTarea={this.handleAddTarea} />
            </div>

            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
