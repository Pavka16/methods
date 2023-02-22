import Daemon from '../Daemon';

test('Generated Daemon class', () => {
  expect(new Daemon('Daemon')).toEqual({
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defense: 40,
  });
});
