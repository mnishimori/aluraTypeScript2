export class Negociacao {

    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number) {
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    get volume() {
        return this.quantidade * this.valor;
    }

    public static criar(dataParam: string, quantidadeParam: string, valorParam: string): Negociacao {
        const exp = /-/g;
        const data = new Date(dataParam.replace(exp,','));
        const quantidade = parseInt(quantidadeParam);
        const valor = parseFloat(valorParam);
        return new Negociacao(data, quantidade, valor);
    }    
}