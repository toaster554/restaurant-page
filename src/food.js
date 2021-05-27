import { generateCard, generatePageContainer, generatePageHeader } from './common.js';
import generateItemCard from './item.js';

const foodItemsAmerican = [
    {
        name: 'Hamburger',
        description: 'An American classic. Comes with a side of fries.',
        imagePath: 'images/hamburger.jpeg',
        options: [
            {
                optionName: 'One patty',
                price: 5.99
            },
            {
                optionName: 'Two patties',
                price: 7.99
            },
            {
                optionName: 'Three patties',
                price: 9.99
            }
        ]
    },
    {
        name: 'Steak',
        description: 'Comes with 2 sides. Options include: steamed broccoli, mashed potatoes, fries, and asparagus.',
        imagePath: 'images/steak.jpeg',
        options: [
            {
                optionName: '6 oz',
                price: 10.99
            },
            {
                optionName: '8 oz',
                price: 12.99
            },
            {
                optionName: '10 oz',
                price: 14.99
            }
        ]
    }
]

const foodItemsAsian = [
    {
        name: 'Fried Rice',
        description: 'Fried rice with green peas, carrot, and eggs. Comes with your choice of protein.',
        imagePath: 'images/friedRice.jpeg',
        options: [
            {
                optionName: 'Chicken',
                price: 7.99
            },
            {
                optionName: 'Beef',
                price: 8.99
            },
            {
                optionName: 'Shrimp',
                price: 9.99
            }
        ]
    },
    {
        name: 'Ramen',
        description: 'Especially good on a cold day. Comes with your choice of protein.',
        imagePath: 'images/ramen.jpeg',
        options: [
            {
                optionName: 'Chicken',
                price: 9.99
            },
            {
                optionName: 'Beef',
                price: 10.99
            },
            {
                optionName: 'Shrimp',
                price: 11.99
            }
        ]
    }
]

const generateFoodPage = () => {
    let pageContainer = generatePageContainer();

    let header = generatePageHeader('Food');
    pageContainer.appendChild(header);

    let americanSection = generateCard();
    let americanHeader = document.createElement('h1');
    americanHeader.classList.add('category-header');
    americanHeader.innerText = 'American';
    americanSection.appendChild(americanHeader);

    for (let item of foodItemsAmerican) {
        americanSection.appendChild(generateItemCard(item));
    }

    pageContainer.appendChild(americanSection);

    let asianSection = generateCard();
    let asianHeader = document.createElement('h1');
    asianHeader.classList.add('category-header');
    asianHeader.innerText = 'Asian';
    asianSection.appendChild(asianHeader);

    for (let item of foodItemsAsian) {
        asianSection.appendChild(generateItemCard(item));
    }

    pageContainer.appendChild(asianSection);

    return pageContainer;
}

export default generateFoodPage;