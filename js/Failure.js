export default class Failure {
    constructor(root) {
        this.el = {
            f1: root.querySelector('.f1'),
            f2: root.querySelector('.f2'),
            f3: root.querySelector('.f3'),
            f4: root.querySelector('.f4'),
            fail: root.querySelector('.s5'),
        }

        this.el.f1.addEventListener('click', () => {
            this.calculate();
        });

        this.el.f2.addEventListener('click', () => {
            this.calculate();
        });

        this.el.f3.addEventListener('click', () => {
            this.calculate();
        });

        this.el.f4.addEventListener('click', () => {
            this.calculate();
        });
    }

    calculate() {
        let checks = this.el.f1.checked
              + this.el.f2.checked
              + this.el.f3.checked
              + this.el.f4.checked;
        this.el.fail.value = Number(5 * checks);
        this.dispatch();
    }

    dispatch() {
        let event = new Event('input');
        this.el.fail.dispatchEvent(event);
    }
}
