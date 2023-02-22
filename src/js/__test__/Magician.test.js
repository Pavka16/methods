import Magician from '../Magician';

test('Generated Magician class', () => {
  expect(new Magician('Magician')).toEqual({
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defense: 40,
  });
});
