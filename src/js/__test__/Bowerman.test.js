import Bowerman from '../Bowerman';

test('Generated Bowerman class', () => {
  expect(new Bowerman('Bowerman')).toEqual({
    name: 'Bowerman',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defense: 25,
  });
});
