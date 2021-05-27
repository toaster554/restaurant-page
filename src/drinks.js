import { generateCard, generatePageContainer, generatePageHeader } from './common.js';
import generateItemCard from './item.js';

const drinksItems = [
    {
        name: 'Soft Drinks',
        description: 'A great option for quenching your thirst. We currenly have Sprite, Fanta, and Coke products.',
        imagePath: 'images/softDrinks.jpeg',
        options: [
            {
                optionName: 'Small',
                price: 0.99
            },
            {
                optionName: 'Medium',
                price: 1.49
            },
            {
                optionName: 'Large',
                price: 2.49
            }
        ]
    },
    {
        name: 'Milkshakes',
        description: 'Who doesn\'t love milkshakes? We currently have 3 flavors: vanilla, chocolate, and strawberry.',
        imagePath: 'images/milkshake.jpeg',
        options: [
            {
                optionName: 'Small',
                price: 1.99
            },
            {
                optionName: 'Medium',
                price: 2.49
            },
            {
                optionName: 'Large',
                price: 3.49
            }
        ]
    },
    {
        name: 'Smoothies',
        description: 'A healthy and tasty option. We have a variety of fruits and vegetables.',
        imagePath: 'images/smoothies.jpeg',
        options: [
            {
                optionName: 'Small',
                price: 1.99
            },
            {
                optionName: 'Medium',
                price: 2.49
            },
            {
                optionName: 'Large',
                price: 3.49
            }
        ]
    }
]

const generateDrinksPage = () => {
    let pageContainer = generatePageContainer();

    let header = generatePageHeader('Drinks');
    pageContainer.appendChild(header);

    let drinksCards = generateCard();

    for (let item of drinksItems) {
        drinksCards.appendChild(generateItemCard(item));
    }

    pageContainer.appendChild(drinksCards);

    return pageContainer;
}

export default generateDrinksPage;