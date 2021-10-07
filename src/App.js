import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list';
import {SearchBox} from './components/search-box/search-box';
import './components/card-list/card-list.css';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [
        {
          id: 1,
          name: 'mon1'
        },
        {
          id: 2,
          name: 'mon2'
        },
        {
          id: 3,
          name: 'mon3'
        },
        {
          id: 4,
          name: 'mon4'
        },
      ],
      searchField: ''
    }
  }

  handleChange = e => this.setState({searchField:e.target.value});
  func = () => {
    console.log(123, this)
  }

  render(){
    const {monsters, searchField} = this.state;
    const filtered = monsters.filter( m => m.name.includes(searchField));

    return (
      <div className="App">
        <button onClick={this.func}>button</button>
        <SearchBox handleChange={this.handleChange}/>
        <CardList monsters={filtered}>
        </CardList>  
      </div>
    )
  }
}

export default App;
