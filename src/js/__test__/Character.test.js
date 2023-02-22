import Character from '../Character';
import Zombie from '../Zombie';

test('Generated Character class', () => {
  expect(new Character('Rob', 'Zombie')).toEqual({
    name: 'Rob',
    type: 'Zombie',
    health: 100,
    level: 1,
  });
});

test('Generated Character class', () => {
  expect(() => new Character('R', 'Zombie')).toThrowError(new Error('Длина переменной name должна быть от 2 до 10 символов'));
});

test('Generated Character class', () => {
  expect(() => new Character('Rob', 666)).toThrowError(new Error('Некоректное значение, тип переменной не строка'));
});

test('Generated Character class', () => {
  expect(() => new Character(666, 'Zombie')).toThrowError(new Error('Некоректное значение, тип переменной не строка'));
});

test('check damage', () => {
  const hero = new Zombie('Rob');
  hero.damage(40);
  expect(hero.health).toBe(64);
});

test('check damage < 0', () => {
  const hero = new Zombie('Rob');
  hero.health = -1;
  hero.damage(40);
  expect(hero.health).toBe(-1);
});

test('check levelUp', () => {
  const hero = new Zombie('Rob');
  hero.health = 30;
  hero.levelUp();
  expect(hero).toEqual({
    name: 'Rob',
    type: 'Zombie',
    health: 100,
    level: 2,
    attack: 48,
    defense: 12,
  });
});

test('check levelUp - health = 0', () => {
  const hero = new Zombie('Rob');
  hero.health = 0;
  expect(() => hero.levelUp()).toThrowError(new Error('Нельзя повысить уровень умершего'));
});
