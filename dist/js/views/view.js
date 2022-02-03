export class View {
    constructor(selector, escapar) {
        this.escapar = false;
        const element = document.querySelector(selector);
        if (element) {
            this.elemento = element;
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template
                .replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
