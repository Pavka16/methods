import Swordsman from '../Swordsman';

test('Generated Swordsman class', () => {
  expect(new Swordsman('Swordsman')).toEqual({
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defense: 10,
  });
});
