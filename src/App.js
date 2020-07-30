import React, { Component } from 'react';
import {CardList} from './Components/Card-list/card-list.Components';
import { SearchBox } from './Components/Search.Box/Search.Box';
import './App.css';

class App extends Component{

  constructor(){
    super();
    this.state = {
      robo:[],
      searchField:"" 
    };

    // this.HandelChange = this.HandelChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response=>Response.json())
    .then(users=>this.setState({
      robo:users
    }))
  }

  HandelChange = e =>{
    this.setState({
      searchField:e.target.value
    });
  }
  render(){

    const {robo,searchField} = this.state;
    const filtereData = robo.filter(robo=>
      robo.name.toLowerCase().includes(searchField.toLowerCase()));

   return(<div className="App">
   <h1 className="title">ROBO SEARCH</h1>
   <SearchBox 
    placeholder="Enter Robo name"
    HandelSeach={this.HandelChange}
   />

   <CardList list={filtereData}>
   </CardList>
   </div>); 
  }
}
export default App;