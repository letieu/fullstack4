class Modal {
    constructor(id) {
        this.el = this.addCloseButton(id);
        this.showed = false;
        window.setTimeout(() => {
            this.showed = true;
            this.show()
        }, 1000);

    }

    hide() {
        this.showed = false;
        this.el.style.display = 'none';
    }
    show() {
        this.showed = true;
        this.el.style = 'block';
    }
    addCloseButton(id) {
        let modal = document.getElementById(id);
        modal.style.display = 'none';
        let close = document.createElement('button');
        close.classList.add('close');
        close.textContent = 'close';
        close.addEventListener('click', (event) => {
            this.hide()
        })
        modal.appendChild(close);

        return modal;
    }
}