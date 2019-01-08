const PubSub = require('../helpers/pub_sub.js');
const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function(){
  PubSub.publish('SolarSystem:all-planets', this.planets);

  PubSub.subscribe('PlanetMenuView:planet-selected', (event) => {
    const planetName = event.detail;
    const selectedPlanet = this.findByName(planetName);
    PubSub.publish('SolarSystem:planet-found', selectedPlanet);
    console.log('Selected Planet', selectedPlanet);
  });
};


SolarSystem.prototype.findByName = function(name) {
  const foundPlanet = this.planets.find((planet) => {
    return planet.name === name;
  });
  return foundPlanet;
};

module.exports = SolarSystem;
