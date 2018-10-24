'use strict';

import menu from './menu';
import services from './services';
import quotesSlider from './quotesSlider';
import dynamicNumbers from './dynamicNumbers';

let menuInstance = menu();
menuInstance.init();

let servicesInstance = services();
servicesInstance.init();

let quotesSliderFirstInstance = quotesSlider();
quotesSliderFirstInstance.init('FIRST_SLIDER');

let quotesSliderSecondInstance = quotesSlider();
quotesSliderSecondInstance.init('SECOND_SLIDER');

let dynamicNumbersInstance = dynamicNumbers();
dynamicNumbersInstance.init();
