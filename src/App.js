import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list';
import {SearchBox} from './components/search-box/search-box';
import { Top } from './components/top/top';
import "@material-tailwind/react/tailwind.css";

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( res => res.json())
    .then( res => {
      this.setState({monsters: res})
    })
  }

  handleChange = e => this.setState({searchField:e.target.value});
  func = () => {
    console.log(123, this)
  }

  render(){
    const {monsters, searchField} = this.state;
    const filtered = monsters.filter( m => m.name.includes(searchField));

    return (
      <div className="App m-4">
        <Top></Top>

        <button onClick={this.func}>button</button>
        <SearchBox handleChange={this.handleChange}/>
        <CardList monsters={filtered}>
        </CardList>  
      </div>
    )
  }
}

export default App;
