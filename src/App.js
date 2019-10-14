import React from 'react';
import './App.css';
import Display from './Display';
import InfoList from './InfoList';
import ActionButton from './ActionButton';

class App extends React.ReactComponent {
  constructor() {
    super();
    this.state = { planet:{} };
  }

  componentDidMount() {
    this.showNextPlanet();
  }

  async showNextPlanet() {
    const {name, terrain, population, climate, films} = await this.getNextPlanet();
    const newPlanet = {
      name,
      info: {
        terrain,
        population,
        climate,
        films
      }
    };

    this.setState({planet: newPlanet});
  }

  async getNextPlanet() {
    const id = this.getNextId();
    const planet = await fetch(`https://swapi.co/api/planets/${id}`);

    return await planet;
  }

  getNextId() {
    let randomId;
    do {
      randomId = Math.random() * 100;
    } while ((randomId > 61) && (randomId <= 0));
    
    return Math.floor(randomId);
  }
 

  render() {
    return (
      <div className="App">
        <Display content={this.state.planet.name} />
        <InfoList list={this.state.planet.infos} />
        <ActionButton label="Next" handleClick={showNextPlanet} />
      </div>
    );
  }


}

export default App;
