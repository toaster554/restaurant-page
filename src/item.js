const generateItemCard = (item) => {
    let itemCard = document.createElement('div');
    itemCard.classList.add('item-card');

    let imageContainer = document.createElement('div');
    let image = document.createElement('img');
    image.classList.add('item-img');
    image.setAttribute('src', item.imagePath);
    image.setAttribute('alt', item.name);
    imageContainer.appendChild(image);
    itemCard.appendChild(imageContainer);

    let itemDescription = document.createElement('div');
    itemDescription.classList.add('item-description');
    itemDescription.innerHTML = `<h2>${item.name}</h2><p>${item.description}</p>`;
    itemCard.appendChild(itemDescription);

    let itemPrices = generatePrices(item.options);
    itemCard.appendChild(itemPrices);

    return itemCard;
}

const generatePrices = (options) => {
    let pricesContainer = document.createElement('div');
    pricesContainer.classList.add('item-price');

    let header = document.createElement('h5');
    header.innerText = 'Prices';
    pricesContainer.appendChild(header);

    let pricesElement = document.createElement('div');
    pricesElement.classList.add('prices');
    for (let option of options) {
        let optionElement = document.createElement('p');
        optionElement.innerText = `${option.optionName}: \$${option.price}`;
        pricesElement.appendChild(optionElement);
    }
    pricesContainer.appendChild(pricesElement);

    return pricesContainer;
}

export default generateItemCard;