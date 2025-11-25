import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('создание новой пустой карты', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('проверка сумирования без учета скидки', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  const total = cart.calculateTotalWithoutDiscount();
  expect(total).toBe(2900);
});

test('проверка сумирования с учетом скидки', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  
  const total = cart.calculateTotalWithDiscount(10);
  expect(total).toBe(2610);
});

test('Проверка корректности скидки', () => {
  const cart = new Cart();

  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  
  expect(() => {cart.calculateTotalWithDiscount(150)}).toThrow('Некорректное значение скидки. Допустимый диапазон: 0-100.');

});

test('удаление обьекта по полю id', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));

  cart.removeItemById(1001);

  expect(cart.items.find(obj => obj.id === 1001)).toBe(undefined)
});
