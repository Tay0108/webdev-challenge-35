'use strict';

import menu from './menu';
import services from './services';
import quotesSlider from './quotesSlider';
import dynamicNumbers from './dynamicNumbers';

let mainMenu = menu();
mainMenu.init();

services();

quotesSlider();

dynamicNumbers();
