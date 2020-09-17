import React from 'react';
import './PlanetsView.css';
import InfoList from '../UI/InfoList/InfoList';
import ActionButton from '../UI/ActionButton/ActionButton';

class PlanetsView extends React.Component {
  constructor() {
    super();
    this.state = { planet: null };
    this.showNextPlanet = this.showNextPlanet.bind(this);
    this.countFilms = this.countFilms.bind(this);
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

  countFilms() {
    return this.state.planet ? this.state.planet.films.length : 0
  }

  render() {
    return (
      <div className="planets-view">
        <main>
          <header>
            <h2>{this.state.planet ? this.state.planet.name : "Waiting for planet name..."}</h2>
          </header>
          <InfoList list={this.state.planet ? this.state.planet.info : null} />
          <p>
            Appears in {this.countFilms()} {this.countFilms() === 1 ? "film" : "films"}
          </p>
          <ActionButton label="Next" handleClick={this.showNextPlanet} />
        </main>
      </div>
    );
  }
}

export default PlanetsView;
