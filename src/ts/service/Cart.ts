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
        let total: number = 0;
        for (const item of this._items) {
            total += item.price;
        }
        return total;
    }

    calculateTotalWithDiscount(discount: number): number {
        const total: number = this.calculateTotalWithoutDiscount();
        if (discount < 0 || discount > 100) {
            console.warn("Скидка должна быть в диапазоне от 0 до 100%");
            return total;
        }
        const discountedTotal: number = total * (1 - discount / 100);
        return discountedTotal;
    }

    removeItemById(id: number): void {
        this._items = this._items.filter(item => item.id !== id);
    }
}
