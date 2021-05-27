const generateNavbar = () => {
    let nav = document.createElement('nav');
    nav.classList.add('navbar', 'navbar-expand-sm', 'justify-content-center');
    nav.setAttribute('id', 'header');

    let navItemsContainer = document.createElement('ul');
    navItemsContainer.classList.add('navbar-nav');
    navItemsContainer.appendChild(generateNavItem('Home'));
    navItemsContainer.appendChild(generateNavItem('Food'));
    navItemsContainer.appendChild(generateNavItem('Drinks'));

    nav.appendChild(navItemsContainer);

    return nav;
}

const generateNavItem = (name) => {
    let navItem = document.createElement('li');
    navItem.classList.add('nav-item');

    let navLink = document.createElement('a');
    navLink.classList.add('nav-link');
    navLink.setAttribute('href', '#');
    navLink.setAttribute('id', `nav-${name.toLowerCase()}`);
    navLink.innerText = name;

    navItem.appendChild(navLink);

    return navItem;
}

const generateFooter = () => {
    let footer = document.createElement('div');
    footer.setAttribute('id', 'footer');

    let footerText = document.createElement('p');
    footerText.innerHTML = 'Page created by <a href="https://github.com/toaster554">Nathan Nguyen</a>.';
    footer.appendChild(footerText);

    return footer;
}

const generateCard = () => {
    let card = document.createElement('div');
    card.classList.add('page-card');

    return card
}

const generatePageContainer = () => {
    let pageContainer = document.createElement('div');
    pageContainer.classList.add('page-container');

    return pageContainer;
}

const generatePageHeader = (text) => {
    let header = document.createElement('h1');
    header.classList.add('display-4');
    header.setAttribute('id', 'page-header');
    header.innerText = text;

    return header
}

export { generateNavbar,
         generateFooter, 
         generateCard, 
         generatePageContainer, 
         generatePageHeader };