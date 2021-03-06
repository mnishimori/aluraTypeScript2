export abstract class View<T> {

    protected elemento: HTMLElement;
    private escapar: boolean = false;

    constructor(selector: string, escapar?: boolean) {
        const element = document.querySelector(selector);
        if (element) {
            this.elemento = element as HTMLElement;
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }

    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template
                .replace(/<script>[\s\S]*?<\/script>/, '');
        }        
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;

}