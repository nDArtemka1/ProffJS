
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

    createTotal() {
        const h2Total = document.createElement('h2');
        h2Total.classList.add('total');
        const productsC = document.querySelector('.products');
        productsC.append(h2Total);
        h2Total.innerHTML = `ИТОГО, общая стоимость товаров составляет: ${this.getSum()} руб.`;
    }
    getSum() {
        let sum = 0;
        for (let item of this.goods) {
            sum += item.price;
        }
        return sum;
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


class Basket {
    addGood() {

    }

    removeGood() {

    }

    changeGood() {

    }

    render() {

    }
}

class ElemBasket {
    render() {

    }
}




let list = new ProductList();
list.createTotal();



