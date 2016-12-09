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
