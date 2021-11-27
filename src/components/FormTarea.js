import React, { Component } from 'react';

class FormTarea extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            titulo:'',
            responsable:'',
            descripcion:'',
            prioridad:'low'
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        const {value, name } = e.target;
        //console.log(e.target.value, e.target.name);
        this.setState ({
            [name]: value
        })
        //console.log(this.state);
    }

    handleSubmit(e){
        //alert('enviando')
        e.preventDefault();
        console.log('enviando datos...');
        this.props.onAddTarea(this.state);
    }

    render() {
        return (
            
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="titulo" onChange={this.handleInput}
                            className="form-control" placeholder="Titulo tarea"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="responsable" onChange={this.handleInput}
                            className="form-control" placeholder="Persona responsable"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="descripcion" onChange={this.handleInput}
                            className="form-control" placeholder="Descripcion"/>
                    </div>

                    <div className="form-group">
                        <select name="priority" className="form-control"                            
                            onChange={this.handleInput} >
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Guardar
                    </button>
                
                </form>
            </div>
            
        );
    }

}

export default FormTarea;