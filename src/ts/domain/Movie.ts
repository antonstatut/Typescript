import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly name: string,
        readonly realease: number,
        readonly country: string,
        readonly slogan: string,
        readonly genre: string,
        readonly duration: number,
    ) { }
}