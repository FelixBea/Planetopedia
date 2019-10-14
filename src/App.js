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
      films,
      info: {
        terrain,
        population,
        climate
      }
    };

    this.setState({planet: newPlanet});
  }

  async getNextPlanet() {
    const id = this.getNextId();
    const planet = await fetch(`https://swapi.co/api/planets/${id}`);

    return planet;
  }

  getNextId() {
    let randomId;
    do {
      randomId = Math.random() * 100;
    } while ((randomId > 61) && (randomId <= 0));
    
    return Math.floor(randomId);
  }
 

  render() {
    const films = this.state.planet.films.length;
    return (
      <div className="App">
        <main>
          <header>
            <Display content={this.state.planet.name} />
          </header>
          <InfoList list={this.state.planet.infos} />
          <p>
            Appears in {films} {films === 1 ? "film" : "films"}
          </p>
          <ActionButton label="Next" handleClick={showNextPlanet} />
        </main>
      </div>
    );
  }


}

export default App;
