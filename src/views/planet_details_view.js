const PubSub = require('../helpers/pub_sub.js');

const PlanetDetailsView = function(container){
  this.container = container;
};

PlanetDetailsView.prototype.bindEvents = function(){
  PubSub.subscribe('SolarSystem:planet-found', (event) => {
    const planetObject = event.detail;
    this.render(planetObject);
  });
};

PlanetDetailsView.prototype.render = function(planet){
  this.container.innerHTML = '';

  const heading = this.createHeading(planet);
  const infoList = this.createInfoList(planet);
  const image = this.createImage(planet);

  this.container.appendChild(heading);
  this.container.appendChild(infoList);
  // this.container.appendChild(image);

};

PlanetDetailsView.prototype.createHeading = function(planet){
  const heading = document.createElement('h3');
  heading.textContent = planet.name;
  return heading;
};

PlanetDetailsView.prototype.createInfoList = function(planet){
  const infoList = document.createElement('ul');

  const liOrbit = this.createLi(`Orbit: ${planet.orbit}`, infoList);
  const liDay = this.createLi(`Day: ${planet.day}`, infoList );
  const liSurfaceAre = this.createLi(`Surface Area: ${planet.surfaceArea}`, infoList);
  const liVolume = this.createLi(`Volume: ${planet.volume}`, infoList);
  const liGravity = this.createLi(`Gravity: ${planet.gravity}`, infoList);
  const liMoons = this.createLi(`Moons: ${planet.moons}`, infoList);
  return infoList;
};

PlanetDetailsView.prototype.createLi = function(textContent, ul) {
  const li = document.createElement('li');
  li.textContent = textContent;
  ul.appendChild(li);
};

// PlanetDetailsView.prototype.createImage = function(planet){
//   const image = document.createElement('img');
//   image.src = planet.image;
//   src.appendChild(image);
// }

module.exports = PlanetDetailsView;
