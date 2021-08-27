const item = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.type}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.count}</div>
                    <div><b>Стоимость</b>: ${good.count * good.price}</div>
                </div>`;
    }
}

const basket = {
    cartList: null,
    clearButton: null,
    item,
    goods: [
        {
            type: 'jeans',
            count: 3,
            price: 250,
            size: ['X', 'S', 'M', 'L', 'XL'],
            color: ['red', 'blue', 'white', 'green'],
        },

        {
            type: 'caps',
            count: 4,
            price: 150,
            size: ['X', 'S', 'M', 'L', 'XL'],
            color: ['red', 'blue', 'white', 'green'],
        },

        {
            type: 'blouses',
            count: 2,
            price: 200,
            size: ['X', 'S', 'M', 'L', 'XL'],
            color: ['red', 'blue', 'white', 'green'],
        },

        {
            type: 'socks',
            count: 5,
            price: 60,
            size: ['X', 'S', 'M', 'L', 'XL'],
            color: ['red', 'blue', 'white', 'green'],
        },
    ],

    init() {
        this.cartList = document.querySelector('.things');
        this.clearButton = document.querySelector('.clear');
        this.clearButton.addEventListener('click', this.clearBasker.bind(this));

        this.render();
    },

    render() {
        if (this.goods.length != 0) {
            this.goods.forEach(good => {
                this.cartList.insertAdjacentHTML('beforeend', this.item.render(good));
            });
            this.cartList.insertAdjacentHTML('beforeend', `В корзине <b>${this.goods.length}</b> позиций(а) стоимостью <b>${this.countBasketPrice()}</b>`);
        } else {
            this.cartList.textContent = 'Корзина пуста';
        }
    },

    countBasketPrice() {
        return this.goods.reduce((totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.count, 0);
    },

    clearBasker() {
        this.goods = [];
        this.render();
    },
};

basket.init();