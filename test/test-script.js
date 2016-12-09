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

});

describe('Weapon', () => {

  let weapon;

  it('should be a class', () => {
    weapon.should.be.a.function;
  });

});
