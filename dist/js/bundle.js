/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/parts/calculatur.js":
/*!********************************!*\
  !*** ./js/parts/calculatur.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calculator() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function () {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener('change', function () {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function () {
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });
}
module.exports = calculator;

/***/ }),

/***/ "./js/parts/form.js":
/*!**************************!*\
  !*** ./js/parts/form.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function fonm (){
    let massage = {
        loading: "Заргрузка",
        succesful: "Спасибо, мы скоро с вами свяжемся",
        fail: "Error"
    };


    let forma = document.querySelector("#form"),
        inputForm = document.querySelectorAll(".form-last"),
        statusText = document.createElement("div");

    statusText.classList.add("status");

    forma.addEventListener("submit", function (event) {
        event.preventDefault();
        forma.appendChild(statusText);
        let formData = new FormData(forma);

        function postData(data) {
            return new Promise(function(resolve, reject){
            let request = new XMLHttpRequest();

            request.open('Post', 'server.php');
            request.setRequestHeader('Content-type', 'aplication/x-www-form-urlencoded');
            request.addEventListener("readystatechange", function () {
                if (request.readyState < 4) {
                   resolve();
                } else if (request.readyState === 4 && request.status == 200) {
                 resolve();
                } else {
                    reject();
                }
            });
            request.send(data);
           });
        }

        function clearPole() {
            for (let i = 0; i < inputForm.length; i++) {
                inputForm[i].value = "";
            }
        }
        postData(formData)
           .then(()=> statusText.innerHTML = massage.loading)
           .then(()=> statusText.innerHTML = massage.succesful)
           .catch(()=> statusText.innerHTML = massage.fail)
           .then(clearPole);

    });
}

module.exports = fonm;

/***/ }),

/***/ "./js/parts/modalForm.js":
/*!*******************************!*\
  !*** ./js/parts/modalForm.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modalForm() {
    let message = {
        loading: "Загрузка",
        succesful: "Спасибо, ваша заявка принята",
        fail: "ERROR"
    };

    let form = document.querySelector(".main-form"),
        input = document.querySelectorAll(".popup-form__input"),
        statusMassage = document.createElement("div");

    statusMassage.classList.add("status");


    form.addEventListener("submit", function (event) {
        event.preventDefault();
        form.appendChild(statusMassage);
        let formData = new FormData(form);

        function postData(data) {
            return new Promise(function (resolve, reject) {



                let request = new XMLHttpRequest();

                request.open('POST', 'server.php');
                request.setRequestHeader('Content-type', 'aplication/x-www-form-urlencoded');
                request.addEventListener("readystatechange", function () {
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readyState === 4 && request.status == 200) {
                        resolve();
                    } else {
                        reject();
                    }

                });
                request.send(data);
            });
        }

        function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = "";
            }
        }


        postData(formData)
            .then(() => statusMassage.innerHTML = message.loading)
            .then(() => statusMassage.innerHTML = message.succesful)
            .catch(() => statusMassage.innerHTML = message.fail)
            .then(clearInput);
    });
}

module.exports = modalForm;

/***/ }),

/***/ "./js/parts/modalWindows.js":
/*!**********************************!*\
  !*** ./js/parts/modalWindows.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modalWindows() {
    let moreBtn = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        closeBtn = document.querySelector(".popup-close");

    moreBtn.addEventListener("click", function () {
        overlay.style.display = "block";
        this.classList.add("more-splash'");
        document.body.style.overflow = 'hidden';

    });

    closeBtn.addEventListener("click", function () {
        overlay.style.display = "none";
        moreBtn.classList.remove("more-splash'");
        document.body.style.overflow = '';
    });
}

module.exports = modalWindows;

/***/ }),

/***/ "./js/parts/slider.js":
/*!****************************!*\
  !*** ./js/parts/slider.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
    let sliderIndex = 1,
        slides = document.querySelectorAll(".slider-item"),
        next = document.querySelector(".next"),
        prev = document.querySelector(".prev"),
        sliderDots = document.querySelector(".slider-dots"),
        dots = document.querySelectorAll(".dot");

    showSlides(sliderIndex);

    function showSlides(n) {
        if (n > slides.length) {
            sliderIndex = 1;
        }
        if (n < 1) {
            sliderIndex = slides.length;
        }


        slides.forEach((item) => item.style.display = "none");
        dots.forEach((item) => item.classList.remove("dot-active"));

        slides[sliderIndex - 1].style.display = "block";
        dots[sliderIndex - 1].classList.add("dot-active");


    }

    function nextSlidetr(n) {
        showSlides(sliderIndex += n);
    }

    function prevSlider(n) {
        showSlides(sliderIndex = n);
    }

    next.addEventListener('click', function () {
        nextSlidetr(1);
    });

    prev.addEventListener('click', function () {
        nextSlidetr(-1);
    });

    sliderDots.addEventListener('click', function (e) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
                prevSlider(i);
            }
        }
    });
}

module.exports = slider;

/***/ }),

/***/ "./js/parts/tabs.js":
/*!**************************!*\
  !*** ./js/parts/tabs.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {

    let infoHeader = document.querySelector('.info-header'),
        infoHeaderTab = document.querySelectorAll('.info-header-tab'),
        infoTabContent = document.querySelectorAll('.info-tabcontent');


    function hideTabContent(a) {
        for (let i = a; i < infoTabContent.length; i++) {
            infoTabContent[i].classList.remove('show');
            infoTabContent[i].classList.add("hide");
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (infoTabContent[b].classList.contains("hide")) {
            infoTabContent[b].classList.remove('hide');
            infoTabContent[b].classList.add("show");
        }
    }


    infoHeader.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains("info-header-tab")) {
            for (let i = 0; i < infoHeaderTab.length; i++) {
                if (target == infoHeaderTab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });
}

module.exports = tabs;

/***/ }),

/***/ "./js/parts/timer.js":
/*!***************************!*\
  !*** ./js/parts/timer.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
    let deadLine = '2020-01-31';

    function getTimerDate(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total': t,
            'seconds': seconds,
            "minutes": minutes,
            "hours": hours
        };
    }


    function setTimerDate(id, endtime) {
        let timer = document.getElementById(id),
            hours = document.querySelector(".hours"),
            minutes = document.querySelector(".minutes"),
            seconds = document.querySelector(".seconds"),
            timeInterval = setInterval(updateImterval, 1000);

        function firstNumberZero(num) {
            if (num <= 9) {
                return "0" + num;
            } else {
                return num;
            }
        }

        function updateImterval() {
            let t = getTimerDate(endtime);
            hours.textContent = firstNumberZero(t.hours);
            minutes.textContent = firstNumberZero(t.minutes);
            seconds.textContent = firstNumberZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);

                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
            }

        }

    }

    setTimerDate("timer", deadLine);
}

module.exports = timer;

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

 window.addEventListener("DOMContentLoaded", function () {
     'use strict';

     let calc = __webpack_require__(/*! ./parts/calculatur */ "./js/parts/calculatur.js"),
         form = __webpack_require__(/*! ./parts/form */ "./js/parts/form.js"),
         modalForm = __webpack_require__(/*! ./parts/modalForm */ "./js/parts/modalForm.js"),
         modalWimdows = __webpack_require__(/*! ./parts/modalWindows */ "./js/parts/modalWindows.js"),
         slider = __webpack_require__(/*! ./parts/slider */ "./js/parts/slider.js"),
         tabs = __webpack_require__(/*! ./parts/tabs */ "./js/parts/tabs.js"),
         timer = __webpack_require__(/*! ./parts/timer */ "./js/parts/timer.js");

     calc();
     form();
     modalForm();
     modalWimdows();
     slider();
     tabs();
    timer(); 

 });

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map