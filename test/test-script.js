// jshint esversion: 6

const chai = require('chai');

chai.should();

const Zombies = require('../zombies.js');

describe('Item', () => {

  let item;
  beforeEach(() => {
    item = new Zombies.item('Club');
  });

  it('should be a class', () => {
    item.should.be.a.function;
  });
  it('should have a name', () => {
    item.name.should.equal('Club');
  });
});

describe('Weapon', () => {

  let weapon;
  beforeEach(() => {
    weapon = new Zombies.weapon('Club', 50);
  });

  it('should be a class', () => {
    weapon.should.be.a.function;
  });
  it('should have a name', () => {
    weapon.name.should.equal('Club');
  });
  it('should have a damage property', () => {
    weapon.should.have.a.property('damage');
  });
  it('should extend to the Item class', () => {
    weapon.should.be.an.instanceof(Zombies.item);
  });
});

describe('Food', () => {

  let food;
  beforeEach(() => {
    food = new Zombies.food('Twix', 10);
  });

  it('should be a class', () => {
    food.should.be.a.function;
  });
  it('should extend to Item class', () => {
    food.should.be.an.instanceof(Zombies.item);
  });
  it('should have property "energy"', () => {
    food.should.have.a.property('energy');
  });
});


describe('Player', () => {

  let player;
  beforeEach(() => {
    player = new Zombies.player('Bob', 150, 50, 20);
  });

  it('should be a class', () => {
    player.should.be.a.function;
  });
  it('should have a name property that is a string', () => {
    player.should.have.a.property('name');
    player.name.should.be.a('string');
  });
  it('should have a health property that is a number', () => {
    player.should.have.a.property('health');
    player.health.should.be.a('number');
  });
  it('should have a strength property that is a number', () => {
    player.should.have.a.property('strength');
    player.strength.should.be.a('number');
  });


});