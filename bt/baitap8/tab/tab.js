class Tab {

    constructor(id, data) {
        this.el = this.createElement(id, data);
        this.data = data;
        this.curent = 0;

        this.el.addEventListener('click', (event) => {
            this.onclick(event);
        })

    }
    onclick(event) {
        if (event.target.hasAttribute('data-index')) {
            let active = this.el.querySelector('.active');
            if (active) {
                active.classList.remove('active');
            }
            event.target.classList.add('active')
            this.curent = event.target.getAttribute('data-index');
            this.change();
        }
    }
    change() {
        this.el.querySelector('.content').textContent = this.data[this.curent].content;
    }
    createElement(id, data) {

        let wrapper = document.getElementById(id);
        wrapper.classList.add('tab');

        let titleWrapper = document.createElement('div');
        wrapper.appendChild(titleWrapper);
        titleWrapper.classList.add('title');

        let titles = data.map((article, index) => {
            let title = document.createElement('div');
            title.textContent = article.title;
            title.dataset.index = index;
            if (index == 0) {
                title.classList.add('active')
            }
            return title;
        });
        for (let title of titles) {
            titleWrapper.appendChild(title);
        }

        let content = document.createElement('p');
        wrapper.appendChild(content);
        content.classList.add('content');
        content.textContent = data[0].content;

        return wrapper;
    }
}