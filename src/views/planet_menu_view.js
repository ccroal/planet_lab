const PubSub = require('../helpers/pub_sub.js');

const PlanetMenuView = function(menu){
  this.menu = menu;
};

PlanetMenuView.prototype.bindEvents = function(){
  PubSub.subscribe('SolarSystem:all-planets', (event) => {
    this.populate(event.detail);
  });
};

PlanetMenuView.prototype.populate = function(planets){
  planets.forEach((planet) => {
    const planetLink = document.createElement('a');
    planetLink.id = planet.name;
    planetLink.classList.add('planet-menu-item');
    planetLink.innerTest = planet.name;
    this.menu.appendChild(planetLink);
  })
}



module.exports = PlanetMenuView;
