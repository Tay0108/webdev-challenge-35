'use strict';

import menu from './menu';
import services from './services';
import quotesSlider from './quotesSlider';
import dynamicNumbers from './dynamicNumbers';

let menuInstance = menu();
menuInstance.init();

let servicesInstance = services();
servicesInstance.init();

let quotesSliderInstance = quotesSlider();
quotesSliderInstance.init(); 

let dynamicNumbersInstance = dynamicNumbers();
dynamicNumbersInstance.init();
