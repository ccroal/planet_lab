const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetMenuView = require('./views/planet_menu_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('nav.planets-menu');
  const planetMenuView = new PlanetMenuView(menu);
  planetMenuView.bindEvents();


  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents();

  console.log(planetsDataModel.planets);

});
