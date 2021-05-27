import { generateCard, generatePageContainer, generatePageHeader } from './common.js';

const generateHomepage = () => {
    let pageContainer = generatePageContainer();

    let header = generatePageHeader('Welcome to Nate\'s Restaurant!');
    pageContainer.appendChild(header);

    let introductionCard = generateCard();
    let introductionText = document.createElement('h3');
    introductionText.innerText = `
        We serve a variety of food and drinks from \
        all around the world from American to Asian. We always strive for the \
        highest customer statisfaction and will remake your food if it is not \
        right. As of right now, we only offer dine-in and carryout. We look forward \
        to serving you!.
    `;
    introductionCard.appendChild(introductionText);
    pageContainer.appendChild(introductionCard);

    let hoursCard = generateCard();
    let hoursCardHeader = document.createElement('h2');
    hoursCardHeader.innerText = 'Hours';
    hoursCard.appendChild(hoursCardHeader);
    hoursCard.appendChild(generateHoursTable());
    pageContainer.appendChild(hoursCard);

    let locationCard = generateCard();
    let locationCardHeader = document.createElement('h2');
    locationCardHeader.innerText = 'Location';
    locationCard.appendChild(locationCardHeader);

    let locationMap = document.createElement('iframe');
    locationMap.setAttribute('id', 'location');
    locationMap.setAttribute('loading', 'lazy');
    locationMap.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2454.7843680095402!2d-85.75729444585446!3d42.97306955294004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8819afe36768a6dd%3A0x47eb280f4c6ea3db!2sLincoln%20Lawns%20Neighborhood%20Park!5e0!3m2!1sen!2sus!4v1622079502684!5m2!1sen!2sus');
    locationCard.appendChild(locationMap);
    pageContainer.appendChild(locationCard);

    return pageContainer;
}

const generateHoursTable = () => {
    let table = document.createElement('table');
    table.classList.add('table', 'table-borderless', 'hours');

    let tableBody = document.createElement('tbody');
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    for (let day of days) {
        tableBody.appendChild(generateHoursTableRow(day));
    }

    table.appendChild(tableBody);

    return table;
}

const generateHoursTableRow = (day) => {
    let row = document.createElement('tr');

    let dayColumn = document.createElement('td');
    dayColumn.innerText = `${day}:`;

    let hourColumn = document.createElement('td');
    if (day === 'Sunday') {
        hourColumn.innerText = '8am - 8pm';
    } else if (day === 'Saturday') {
        hourColumn.innerText = 'Closed';
    } else {
        hourColumn.innerText = '8am - 10pm';
    }

    row.appendChild(dayColumn);
    row.appendChild(hourColumn);

    return row
}

export default generateHomepage;