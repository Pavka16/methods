import Zombie from '../Zombie';

test('Generated Zombie class', () => {
  expect(new Zombie('Zombie')).toEqual({
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defense: 10,
  });
});
