export default class Calculator {
    constructor(root) {
        this.el = {
            r: root.querySelector('.color-red'),
            y: root.querySelector('.color-yellow'),
            g: root.querySelector('.color-green'),
            b: root.querySelector('.color-blue'),
            fail: root.querySelector('.color-grey'),
            total: root.querySelector('.long')
        }

        this.el.r.addEventListener('input', () => {
            this.calculate();
        });

        this.el.y.addEventListener('input', () => {
            this.calculate();
        });

        this.el.g.addEventListener('input', () => {
            this.calculate();
        });

        this.el.b.addEventListener('input', () => {
            this.calculate();
        });

        this.el.fail.addEventListener('input', () => {
            this.calculate();
        });
    }

    calculate() {
        this.el.total.value = Number(this.el.r.value) 
                            + Number(this.el.y.value)
                            + Number(this.el.g.value)
                            + Number(this.el.b.value)
                            - Number(this.el.fail.value)
    }
}
