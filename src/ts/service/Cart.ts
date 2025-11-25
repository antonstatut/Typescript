import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items]; 
  }
    
  calculateTotalWithoutDiscount(): number {
    let sum = this._items.reduce((acc, item) => acc + item.price, 0);
    return sum;
  }

  calculateTotalWithDiscount(discount: number): number {
    let total = this.calculateTotalWithoutDiscount();
      if (discount < 0 || discount > 100) {
        throw new Error('Некорректное значение скидки. Допустимый диапазон: 0-100.');
      }
      return total = total * (1 - discount / 100);
  }

  removeItemById(id: number): void {
    this._items = this._items.filter(item => item.id !== id);
  }
}
