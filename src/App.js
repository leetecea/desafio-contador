import React, { Component} from 'react';
import './App.css';
import Foto from './img/northern-forest.jpg';

export default class App extends Component {
  
  state = {
    numero: 0
  } 

  add = () => {
    if ( this.state.numero < 10 ){
      this.setState({
        numero: this.state.numero + 1
      })
    }
  }

  remove = () => {
    if ( this.state.numero > 0 ){
      this.setState({
        numero: this.state.numero - 1
      })
    }
  }

  render(){
    return(
      <>
      <main>
      <div className='card'>
       <h1> Contador </h1>
       <h2>{this.state.numero}</h2>
       <div className='rmv-add'>
         <button className='btn remove' onClick={this.remove}> - </button>
         <button className="btn add" onClick={this.add}> + </button>
       </div>
      </div>
      </main> 
      </>
    )
  }
}