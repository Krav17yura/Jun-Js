 window.addEventListener("DOMContentLoaded", function () {
     'use strict';

     let calc = require('./parts/calculatur'),
         form = require('./parts/form'),
         modalForm = require('./parts/modalForm'),
         modalWimdows = require('./parts/modalWindows'),
         slider = require('./parts/slider'),
         tabs = require('./parts/tabs'),
         timer = require('./parts/timer');

     calc();
     form();
     modalForm();
     modalWimdows();
     slider();
     tabs();
    timer(); 

 });