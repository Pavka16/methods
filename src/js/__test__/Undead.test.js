import Undead from '../Undead';

test('Generated Undead class', () => {
  expect(new Undead('Undead')).toEqual({
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defense: 25,
  });
});
