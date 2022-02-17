
class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts(); // рекомендация, чтобы метод ыбл вызван в текущем классе
        this.render(); // вывод товара на страницу
    }

    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000, img: 'img/Notebook.jpg' },
            { id: 2, title: 'Mouse', price: 20, img: 'img/Mouse.jpg' },
            { id: 3, title: 'Keyboard', price: 200, img: 'img/Keyboard.jpg' },
            { id: 4, title: 'Gamepad', price: 50, img: 'img/Gamepad.jpg' },
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }
}

class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
    }

    render() {
        return `<div class="product-item">
        <img src="${this.img}" alt="img">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button class="buy-btn">Купить</button>
    </div>`;
    }
}

let list = new ProductList();


