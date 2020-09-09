import React from 'react';
import './App.css';
import Display from './Display/Display.js';
import InfoList from './InfoList/InfoList.js';
import ActionButton from './ActionButton/ActionButton.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = { planet:{} };
    this.showNextPlanet = this.showNextPlanet.bind(this);
  }

  componentDidMount() {
    this.showNextPlanet();
  }

  async showNextPlanet() {
    const planet = await this.getNextPlanet();
    const newPlanet = {
      name: planet.name,
      films: planet.films,
      info: {
        terrain: planet.terrain,
        population: planet.population,
        climate: planet.climate
      }
    };
    this.setState({planet: newPlanet});
  }

  async getNextPlanet() {
    const id = this.getNextId();
    const planet = await fetch(`https://swapi.dev/api/planets/${id}`);

    return await planet.json();
  }

  getNextId() {
    let randomId;
    do {
      randomId = Math.random() * 100;
    } while (randomId > 60 || randomId < 1);

    return Math.floor(randomId);
  }


  render() {
    const films = this.state.planet.films ?
                  this.state.planet.films.length : 0;
    return (
      <div className="App">
        <main>
          <header>
            <Display content={this.state.planet.name} />
          </header>
          <InfoList list={this.state.planet.info} />
          <p>
            Appears in {films} {films === 1 ? "film" : "films"}
          </p>
          <ActionButton label="Next" handleClick={this.showNextPlanet} />
        </main>
      </div>
    );
  }


}

export default App;
