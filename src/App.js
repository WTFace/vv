import React, { Component } from 'react'
import "@material-tailwind/react/tailwind.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Top } from './top/top';
import { Footer } from './footer/footer';
import { routes } from './routes';

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
      <div className="App -w-7xl m-auto px-6 pt-36">
        <Top></Top>
        <div className="my-4 p-4">
          <Switch>
            {routes.map((r, i) => <Route key={i} exact={r.exact} path={r.path} component={r.component}></Route>)}
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;
