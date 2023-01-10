const products = [
    {
        id: 1,
        title: 'Lenovo Yoga',
        price: 3000,
    },
    {
        id: 2,
        title: 'Acer Aspire',
        price: 1800,
    },
    {
        id: 3,
        title: 'Dell Vostro',
        price: 3400
    },
];


class Cart {
    order = []
    totalPrice

    constructor(products) {
        this.products = products
        this.renderCart()
    }

    addToBasket(productId) {
        if (this.order.find(el => el.id === productId)) {
            return alert('Product already in cart ')
        }
        this.order.push(this.products.find(el => el.id === productId))

        this.renderCart();
        this.rerenderTotalPrice();
    }

    removeFromBasket(productId) {
        this.order = this.order.filter(el => el.id !== productId)
        this.renderCart();
        this.rerenderTotalPrice();
    }

    rerenderTotalPrice() {
        this.totalPrice = this.order.reduce((acc, prod) => acc + prod.price, 0)
        document.getElementById('total').innerText = this.totalPrice;
    }
    renderCart() {
        const cart = document.getElementById('basket-items');
        cart.innerHTML = '';
        this.order.forEach(item => {
            const el = document.createElement('li');
            el.innerText = item.title;
            el.onclick = () => this.removeFromBasket(item.id);
            cart.appendChild(el);
        })
    }
}

const cart = new Cart(products)