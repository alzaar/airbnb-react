import Map from './components/map';
import React, { Component } from 'react';
import './App.css';
import Flat from './components/flat'
import './components/flat.css';
const axios = require('axios');


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      flats:[],
      selectedFlat: null,
      search: '',
      allFlats: []
    }
    this.selectFlat = this.selectFlat.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  selectFlat(flat) {
    this.setState({selectedFlat: flat});
  }

  handleChange(e) {
    this.setState({
      search: e.target.value,
      flats: this.state.allFlats.filter((flat) => new RegExp(e.target.value, "i").exec(flat.name))
      })
  }


  componentDidMount() {
    const url="https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json"
    // fetch(url)
    // .then((response) => {
    //   response.json();
    //
    // }).then((data) => {
    //   this.setState({flats: data})
    //   console.log(data);
    // })

    axios.get(url)
    .then((res) => {
      this.setState({flats: res.data});
      this.setState({allFlats: res.data});
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <input
              type='text'
              placeholder='Search...'
              value={this.state.search}
              onChange={this.handleChange}
            />
          </div>
          <div className="flats">
              {this.state.flats.map((flat) => {
                return(
                  <div key={flat.id}>
                    <Flat flat={flat} selectFlat={this.selectFlat}/>
                  </div>
                );
              })}

          </div>
        </div>
        <div className="map">
          <Map flats={this.state.flats} selectedFlat={this.state.selectedFlat}/>

        </div>
      </div>
    );
  }
}

export default App;
