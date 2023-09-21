const cardsContainer = document.querySelector('.cards-container');

const productList = [];
productList.push({
    name: 'Mountain bike Agile',
    price: 159.56,
    image: './images/mountain_bike_1.jpg'
});
productList.push({
    name: 'Mountain Bike Honor',
    price: 178.25,
    image: './images/mountain_bike_2.jpg'
});
productList.push({
    name: 'Mountain Elleven Bike Rocker',
    price: 182.10,
    image: './images/mountain_bike_3.jpg'
});
productList.push({
    name: 'Canyon Aro',
    price: 410.10,
    image: './images/mountain_bike_3.jpg'
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