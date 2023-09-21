const cardsContainer = document.querySelector('.cards-container');

const productList = [];
productList.push({
    name: 'Raleigh',
    price: 159.56,
    image: './images/mountain_bike_1.jpg'
});
productList.push({
    name: 'Raleigh',
    price: 178.25,
    image: './images/mountain_bike_2.jpg'
});
productList.push({
    name: 'Jafi',
    price: 182.10,
    image: './images/mountain_bike_3.jpg'
});
productList.push({
    name: 'Monark',
    price: 410.10,
    image: './images/mountain_bike_4.jpg'
});
productList.push({
    name: 'Goliat',
    price: 389.85,
    image: './images/mountain_bike_5.jpg'
});
productList.push({
    name: 'Jafi Blast',
    price: 92.99,
    image: './images/mountain_bike_6.jpg'
});
productList.push({
    name: 'Mountain Bike Pro H',
    price: 92.99,
    image: './images/mountain_bike_7.jpg'
});
productList.push({
    name: 'Monark',
    price: 320.37,
    image: './images/mountain_bike_8.jpg'
});
productList.push({
    name: 'Monark',
    price: 320.37,
    image: './images/mountain_bike_9.jpg'
});
productList.push({
    name: 'Monark',
    price: 431.30,
    image: './images/mountain_bike_10.jpg'
});

function renderProducts(arr) {
    for(product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const cardImg = document.createElement('img');
        cardImg.src = product.image;

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        const productName = document.createElement('p');
        productPrice.innerText = `$${product.price}`;
        productName.innerText = `${product.name}`;

        const productInfoFigure = document.createElement('figure');
        const productIconCart = document.createElement('img');
        productInfoFigure.appendChild(productIconCart);
        productIconCart.src = './icons/bt_add_to_cart.svg';

        cardsContainer.appendChild(productCard);
        productCard.append(cardImg, productInfo);
        productInfo.append(productInfoDiv, productInfoFigure);
        productInfoDiv.append(productPrice, productName);
    }
}

renderProducts(productList);