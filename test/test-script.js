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
  weapon = new Zombies.weapon('Club', 50);

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
