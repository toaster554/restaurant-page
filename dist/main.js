/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common.js":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateNavbar\": () => (/* binding */ generateNavbar),\n/* harmony export */   \"generateFooter\": () => (/* binding */ generateFooter),\n/* harmony export */   \"generateCard\": () => (/* binding */ generateCard),\n/* harmony export */   \"generatePageContainer\": () => (/* binding */ generatePageContainer),\n/* harmony export */   \"generatePageHeader\": () => (/* binding */ generatePageHeader)\n/* harmony export */ });\nconst generateNavbar = () => {\n    let nav = document.createElement('nav');\n    nav.classList.add('navbar', 'navbar-expand-sm', 'justify-content-center');\n    nav.setAttribute('id', 'header');\n\n    let navItemsContainer = document.createElement('ul');\n    navItemsContainer.classList.add('navbar-nav');\n    navItemsContainer.appendChild(generateNavItem('Home'));\n    navItemsContainer.appendChild(generateNavItem('Food'));\n    navItemsContainer.appendChild(generateNavItem('Drinks'));\n\n    nav.appendChild(navItemsContainer);\n\n    return nav;\n}\n\nconst generateNavItem = (name) => {\n    let navItem = document.createElement('li');\n    navItem.classList.add('nav-item');\n\n    let navLink = document.createElement('a');\n    navLink.classList.add('nav-link');\n    navLink.setAttribute('href', '#');\n    navLink.setAttribute('id', `nav-${name.toLowerCase()}`);\n    navLink.innerText = name;\n\n    navItem.appendChild(navLink);\n\n    return navItem;\n}\n\nconst generateFooter = () => {\n    let footer = document.createElement('div');\n    footer.setAttribute('id', 'footer');\n\n    let footerText = document.createElement('p');\n    footerText.innerHTML = 'Page created by <a href=\"https://github.com/toaster554\">Nathan Nguyen</a>.';\n    footer.appendChild(footerText);\n\n    return footer;\n}\n\nconst generateCard = () => {\n    let card = document.createElement('div');\n    card.classList.add('page-card');\n\n    return card\n}\n\nconst generatePageContainer = () => {\n    let pageContainer = document.createElement('div');\n    pageContainer.classList.add('page-container');\n\n    return pageContainer;\n}\n\nconst generatePageHeader = (text) => {\n    let header = document.createElement('h1');\n    header.classList.add('display-4');\n    header.setAttribute('id', 'page-header');\n    header.innerText = text;\n\n    return header\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/common.js?");

/***/ }),

/***/ "./src/drinks.js":
/*!***********************!*\
  !*** ./src/drinks.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ \"./src/common.js\");\n/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.js */ \"./src/item.js\");\n\n\n\nconst drinksItems = [\n    {\n        name: 'Soft Drinks',\n        description: 'A great option for quenching your thirst. We currenly have Sprite, Fanta, and Coke products.',\n        imagePath: 'images/softDrinks.jpeg',\n        options: [\n            {\n                optionName: 'Small',\n                price: 0.99\n            },\n            {\n                optionName: 'Medium',\n                price: 1.49\n            },\n            {\n                optionName: 'Large',\n                price: 2.49\n            }\n        ]\n    },\n    {\n        name: 'Milkshakes',\n        description: 'Who doesn\\'t love milkshakes? We currently have 3 flavors: vanilla, chocolate, and strawberry.',\n        imagePath: 'images/milkshake.jpeg',\n        options: [\n            {\n                optionName: 'Small',\n                price: 1.99\n            },\n            {\n                optionName: 'Medium',\n                price: 2.49\n            },\n            {\n                optionName: 'Large',\n                price: 3.49\n            }\n        ]\n    },\n    {\n        name: 'Smoothies',\n        description: 'A healthy and tasty option. We have a variety of fruits and vegetables.',\n        imagePath: 'images/smoothies.jpeg',\n        options: [\n            {\n                optionName: 'Small',\n                price: 1.99\n            },\n            {\n                optionName: 'Medium',\n                price: 2.49\n            },\n            {\n                optionName: 'Large',\n                price: 3.49\n            }\n        ]\n    }\n]\n\nconst generateDrinksPage = () => {\n    let pageContainer = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.generatePageContainer)();\n\n    let header = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.generatePageHeader)('Drinks');\n    pageContainer.appendChild(header);\n\n    let drinksCards = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.generateCard)();\n\n    for (let item of drinksItems) {\n        drinksCards.appendChild((0,_item_js__WEBPACK_IMPORTED_MODULE_1__.default)(item));\n    }\n\n    pageContainer.appendChild(drinksCards);\n\n    return pageContainer;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateDrinksPage);\n\n//# sourceURL=webpack://restaurant-page/./src/drinks.js?");

/***/ }),

/***/ "./src/food.js":
/*!*********************!*\
  !*** ./src/food.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ \"./src/common.js\");\n/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.js */ \"./src/item.js\");\n\n\n\nconst foodItemsAmerican = [\n    {\n        name: 'Hamburger',\n        description: 'An American classic. Comes with a side of fries.',\n        imagePath: 'images/hamburger.jpeg',\n        options: [\n            {\n                optionName: 'One patty',\n                price: 5.99\n            },\n            {\n                optionName: 'Two patties',\n                price: 7.99\n            },\n            {\n                optionName: 'Three patties',\n                price: 9.99\n            }\n        ]\n    },\n    {\n        name: 'Steak',\n        description: 'Comes with 2 sides. Options include: steamed broccoli, mashed potatoes, fries, and asparagus.',\n        imagePath: 'images/steak.jpeg',\n        options: [\n            {\n                optionName: '6 oz',\n                price: 10.99\n            },\n            {\n                optionName: '8 oz',\n                price: 12.99\n            },\n            {\n                optionName: '10 oz',\n                price: 14.99\n            }\n        ]\n    }\n]\n\nconst foodItemsAsian = [\n    {\n        name: 'Fried Rice',\n        description: 'Fried rice with green peas, carrot, and eggs. Comes with your choice of protein.',\n        imagePath: 'images/friedRice.jpeg',\n        options: [\n            {\n                optionName: 'Chicken',\n                price: 7.99\n            },\n            {\n                optionName: 'Beef',\n                price: 8.99\n            },\n            {\n                optionName: 'Shrimp',\n                price: 9.99\n            }\n        ]\n    },\n    {\n        name: 'Ramen',\n        description: 'Especially good on a cold day. Comes with your choice of protein.',\n        imagePath: 'images/ramen.jpeg',\n        options: [\n            {\n                optionName: 'Chicken',\n                price: 9.99\n            },\n            {\n                optionName: 'Beef',\n                price: 10.99\n            },\n            {\n                optionName: 'Shrimp',\n                price: 11.99\n            }\n        ]\n    }\n]\n\nconst generateFoodPage = () => {\n    let pageContainer = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.generatePageContainer)();\n\n    let header = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.generatePageHeader)('Food');\n    pageContainer.appendChild(header);\n\n    let americanSection = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.generateCard)();\n    let americanHeader = document.createElement('h1');\n    americanHeader.classList.add('category-header');\n    americanHeader.innerText = 'American';\n    americanSection.appendChild(americanHeader);\n\n    for (let item of foodItemsAmerican) {\n        americanSection.appendChild((0,_item_js__WEBPACK_IMPORTED_MODULE_1__.default)(item));\n    }\n\n    pageContainer.appendChild(americanSection);\n\n    let asianSection = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.generateCard)();\n    let asianHeader = document.createElement('h1');\n    asianHeader.classList.add('category-header');\n    asianHeader.innerText = 'Asian';\n    asianSection.appendChild(asianHeader);\n\n    for (let item of foodItemsAsian) {\n        asianSection.appendChild((0,_item_js__WEBPACK_IMPORTED_MODULE_1__.default)(item));\n    }\n\n    pageContainer.appendChild(asianSection);\n\n    return pageContainer;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateFoodPage);\n\n//# sourceURL=webpack://restaurant-page/./src/food.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ \"./src/common.js\");\n\n\nconst generateHomepage = () => {\n    let pageContainer = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.generatePageContainer)();\n\n    let header = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.generatePageHeader)('Welcome to Nate\\'s Restaurant!');\n    pageContainer.appendChild(header);\n\n    let introductionCard = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.generateCard)();\n    let introductionText = document.createElement('h3');\n    introductionText.innerText = `\n        We serve a variety of food and drinks from \\\n        all around the world from American to Asian. We always strive for the \\\n        highest customer statisfaction and will remake your food if it is not \\\n        right. As of right now, we only offer dine-in and carryout. We look forward \\\n        to serving you!.\n    `;\n    introductionCard.appendChild(introductionText);\n    pageContainer.appendChild(introductionCard);\n\n    let hoursCard = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.generateCard)();\n    let hoursCardHeader = document.createElement('h2');\n    hoursCardHeader.innerText = 'Hours';\n    hoursCard.appendChild(hoursCardHeader);\n    hoursCard.appendChild(generateHoursTable());\n    pageContainer.appendChild(hoursCard);\n\n    let locationCard = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.generateCard)();\n    let locationCardHeader = document.createElement('h2');\n    locationCardHeader.innerText = 'Location';\n    locationCard.appendChild(locationCardHeader);\n\n    let locationMap = document.createElement('iframe');\n    locationMap.setAttribute('id', 'location');\n    locationMap.setAttribute('loading', 'lazy');\n    locationMap.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2454.7843680095402!2d-85.75729444585446!3d42.97306955294004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8819afe36768a6dd%3A0x47eb280f4c6ea3db!2sLincoln%20Lawns%20Neighborhood%20Park!5e0!3m2!1sen!2sus!4v1622079502684!5m2!1sen!2sus');\n    locationCard.appendChild(locationMap);\n    pageContainer.appendChild(locationCard);\n\n    return pageContainer;\n}\n\nconst generateHoursTable = () => {\n    let table = document.createElement('table');\n    table.classList.add('table', 'table-borderless', 'hours');\n\n    let tableBody = document.createElement('tbody');\n    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\n\n    for (let day of days) {\n        tableBody.appendChild(generateHoursTableRow(day));\n    }\n\n    table.appendChild(tableBody);\n\n    return table;\n}\n\nconst generateHoursTableRow = (day) => {\n    let row = document.createElement('tr');\n\n    let dayColumn = document.createElement('td');\n    dayColumn.innerText = `${day}:`;\n\n    let hourColumn = document.createElement('td');\n    if (day === 'Sunday') {\n        hourColumn.innerText = '8am - 8pm';\n    } else if (day === 'Saturday') {\n        hourColumn.innerText = 'Closed';\n    } else {\n        hourColumn.innerText = '8am - 10pm';\n    }\n\n    row.appendChild(dayColumn);\n    row.appendChild(hourColumn);\n\n    return row\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateHomepage);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ \"./src/common.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _food_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food.js */ \"./src/food.js\");\n/* harmony import */ var _drinks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drinks.js */ \"./src/drinks.js\");\n\n\n\n\n\nlet content = document.querySelector('#content');\ncontent.appendChild((0,_common_js__WEBPACK_IMPORTED_MODULE_0__.generateNavbar)());\ncontent.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__.default)());\ncontent.appendChild((0,_common_js__WEBPACK_IMPORTED_MODULE_0__.generateFooter)());\n\nconst switchPage = (navId) => {\n    let targetPage;\n\n    if (navId === 'nav-home') {\n        targetPage = (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n    } else if (navId == 'nav-food') {\n        targetPage = (0,_food_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n    } else {\n        targetPage = (0,_drinks_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n    }\n\n    content.replaceChild(targetPage, content.childNodes[1]);\n}\n\nlet navLinks = document.querySelectorAll('.nav-link');\nnavLinks.forEach(navLink => {\n    navLink.addEventListener('click', () => switchPage(navLink.id));\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/item.js":
/*!*********************!*\
  !*** ./src/item.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst generateItemCard = (item) => {\n    let itemCard = document.createElement('div');\n    itemCard.classList.add('item-card');\n\n    let imageContainer = document.createElement('div');\n    let image = document.createElement('img');\n    image.classList.add('item-img');\n    image.setAttribute('src', item.imagePath);\n    image.setAttribute('alt', item.name);\n    imageContainer.appendChild(image);\n    itemCard.appendChild(imageContainer);\n\n    let itemDescription = document.createElement('div');\n    itemDescription.classList.add('item-description');\n    itemDescription.innerHTML = `<h2>${item.name}</h2><p>${item.description}</p>`;\n    itemCard.appendChild(itemDescription);\n\n    let itemPrices = generatePrices(item.options);\n    itemCard.appendChild(itemPrices);\n\n    return itemCard;\n}\n\nconst generatePrices = (options) => {\n    let pricesContainer = document.createElement('div');\n    pricesContainer.classList.add('item-price');\n\n    let header = document.createElement('h5');\n    header.innerText = 'Prices';\n    pricesContainer.appendChild(header);\n\n    let pricesElement = document.createElement('div');\n    pricesElement.classList.add('prices');\n    for (let option of options) {\n        let optionElement = document.createElement('p');\n        optionElement.innerText = `${option.optionName}: \\$${option.price}`;\n        pricesElement.appendChild(optionElement);\n    }\n    pricesContainer.appendChild(pricesElement);\n\n    return pricesContainer;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateItemCard);\n\n//# sourceURL=webpack://restaurant-page/./src/item.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;