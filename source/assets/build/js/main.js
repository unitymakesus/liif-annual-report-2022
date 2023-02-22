/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./source/_assets/js/main.js":
/*!***********************************!*\
  !*** ./source/_assets/js/main.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var counterup2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! counterup2 */ "./node_modules/counterup2/index.js");
/* harmony import */ var sal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sal.js */ "./node_modules/sal.js/dist/sal.js");
/* harmony import */ var sal_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sal_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_initTabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/initTabs */ "./source/_assets/js/util/initTabs.js");



window.addEventListener('DOMContentLoaded', function () {
  /**
   * Tablists.
   */
  var tablists = document.querySelectorAll('.tabs');
  if (tablists.length) {
    tablists.forEach(function (tablist) {
      (0,_util_initTabs__WEBPACK_IMPORTED_MODULE_2__["default"])(tablist);
    });
  }

  /**
   * Mobile table years
   */
  var tableYears = document.querySelectorAll('.table-years');
  if (tableYears.length) {
    tableYears.forEach(function (year) {
      var buttons = year.querySelectorAll('button');
      var tables = document.querySelectorAll('table.' + year.dataset.tables);
      buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
          e.preventDefault();

          // Toggle button active class
          var active = year.querySelector('button.active');
          active.classList.remove('active');
          button.classList.add('active');

          // Change visibility of columns on related tables
          if (tables.length) {
            tables.forEach(function (table) {
              // Remove active classes from all table cells
              var cells = table.querySelectorAll('td, th');
              if (cells.length) {
                cells.forEach(function (elem) {
                  elem.classList.remove('active');
                });
              }

              // Add active class to table cells in corresponding column
              var col = button.dataset.col;
              var tds = table.querySelectorAll('tbody td:nth-of-type(' + col + ')');
              if (tds.length) {
                tds.forEach(function (elem) {
                  elem.classList.add('active');
                });
              }

              // Add active class to table headers in corresponding column
              col++;
              var ths = table.querySelectorAll('thead th:nth-of-type(' + col + ')');
              if (ths.length) {
                ths.forEach(function (elem) {
                  elem.classList.add('active');
                });
              }
            });
          }
        });
      });
    });
  }

  /**
   * Initialize sal
   */
  sal_js__WEBPACK_IMPORTED_MODULE_1___default()({
    selector: '.animate'
  });

  /**
   * Intersection Observer
   */

  var accentObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-viewport');
        accentObserver.unobserve(entry.target);
        console.log(entry);
        if (entry.target.classList.contains('progress')) {
          var el = document.querySelector('.progress');

          // Start counting, do this on DOM ready or with Waypoints.
          (0,counterup2__WEBPACK_IMPORTED_MODULE_0__["default"])(el, {
            duration: 1000,
            delay: 16
          });
        }
        ;
      }
    });
  });
  var animateEls = document.querySelectorAll('.progress-bar__overlay, .green-rule, .green-rule__hero, .green-rule__article, .green-rule__tabs, .progress');
  animateEls.forEach(function (el) {
    accentObserver.observe(el);
  });
});

/***/ }),

/***/ "./source/_assets/js/util/initTabs.js":
/*!********************************************!*\
  !*** ./source/_assets/js/util/initTabs.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Initialize tabs.
 *
 * @param array tablist
 */
function initTabs(tablist) {
  var tabs = tablist.querySelectorAll('[role="tab"]');
  var panels = tablist.querySelectorAll('[role="tabpanel"]');
  var delay = 0;

  // For easy reference
  var keys = {
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40
  };

  // Add or substract depending on key pressed
  var direction = {
    37: -1,
    38: -1,
    39: 1,
    40: 1
  };

  // Bind listeners
  for (var i = 0; i < tabs.length; ++i) {
    addListeners(i);
  }
  ;
  function addListeners(index) {
    tabs[index].addEventListener('click', clickEventListener);
    tabs[index].addEventListener('keydown', keydownEventListener);
    tabs[index].addEventListener('keyup', keyupEventListener);

    // Build an array with all tabs (<button>s) in it
    tabs[index].index = index;
  }
  ;

  // When a tab is clicked, activateTab is fired to activate it
  function clickEventListener(event) {
    var tab = event.target;
    activateTab(tab, false);
  }
  ;

  // Handle keydown on tabs
  function keydownEventListener(event) {
    var key = event.keyCode;
    switch (key) {
      case keys.end:
        event.preventDefault();
        // Activate last tab
        activateTab(tabs[tabs.length - 1]);
        break;
      case keys.home:
        event.preventDefault();
        // Activate first tab
        activateTab(tabs[0]);
        break;

      // Up and down are in keydown
      // because we need to prevent page scroll >:)
      case keys.up:
      case keys.down:
        determineOrientation(event);
        break;
    }
    ;
  }
  ;

  // Handle keyup on tabs
  function keyupEventListener(event) {
    var key = event.keyCode;
    switch (key) {
      case keys.left:
      case keys.right:
        determineOrientation(event);
        break;
    }
    ;
  }
  ;

  // When a tablistâ€™s aria-orientation is set to vertical,
  // only up and down arrow should function.
  // In all other cases only left and right arrow function.
  function determineOrientation(event) {
    var key = event.keyCode;
    var el = tablist.querySelector('[role="tablist"]');
    var vertical = el.getAttribute('aria-orientation') == 'vertical';
    var proceed = false;
    if (vertical) {
      if (key === keys.up || key === keys.down) {
        event.preventDefault();
        proceed = true;
      }
      ;
    } else {
      if (key === keys.left || key === keys.right) {
        proceed = true;
      }
      ;
    }
    ;
    if (proceed) {
      switchTabOnArrowPress(event);
    }
    ;
  }
  ;

  // Either focus the next, previous, first, or last tab
  // depening on key pressed
  function switchTabOnArrowPress(event) {
    var pressed = event.keyCode;
    for (var x = 0; x < tabs.length; x++) {
      tabs[x].addEventListener('focus', focusEventHandler);
    }
    ;
    if (direction[pressed]) {
      var target = event.target;
      if (target.index !== undefined) {
        if (tabs[target.index + direction[pressed]]) {
          tabs[target.index + direction[pressed]].focus();
        } else if (pressed === keys.left || pressed === keys.up) {
          focusLastTab();
        } else if (pressed === keys.right || pressed == keys.down) {
          focusFirstTab();
        }
        ;
      }
      ;
    }
    ;
  }
  ;

  // Activates any given tab panel
  function activateTab(tab, setFocus) {
    setFocus = setFocus || true;
    // Deactivate all other tabs
    deactivateTabs();

    // Remove tabindex attribute
    tab.removeAttribute('tabindex');

    // Set the tab as selected
    tab.setAttribute('aria-selected', 'true');

    // Get the value of aria-controls (which is an ID)
    var controls = tab.getAttribute('aria-controls');

    // Remove hidden attribute from tab panel to make it visible
    document.getElementById(controls).removeAttribute('hidden');

    // Set focus when required
    if (setFocus) {
      tab.focus();
    }
    ;
  }
  ;

  // Deactivate all tabs and tab panels
  function deactivateTabs() {
    for (var t = 0; t < tabs.length; t++) {
      tabs[t].setAttribute('tabindex', '-1');
      tabs[t].setAttribute('aria-selected', 'false');
      tabs[t].removeEventListener('focus', focusEventHandler);
    }
    ;
    for (var p = 0; p < panels.length; p++) {
      panels[p].setAttribute('hidden', 'hidden');
    }
    ;
  }
  ;

  // Make a guess
  function focusFirstTab() {
    tabs[0].focus();
  }
  ;

  // Make a guess
  function focusLastTab() {
    tabs[tabs.length - 1].focus();
  }
  ;

  // Determine whether there should be a delay
  // when user navigates with the arrow keys
  function determineDelay() {
    var hasDelay = tablist.hasAttribute('data-delay');
    var delay = 0;
    if (hasDelay) {
      var delayValue = tablist.getAttribute('data-delay');
      if (delayValue) {
        delay = delayValue;
      } else {
        // If no value is specified, default to 300ms
        delay = 300;
      }
      ;
    }
    ;
    return delay;
  }
  ;

  //
  function focusEventHandler(event) {
    var target = event.target;
    setTimeout(checkTabFocus, delay, target);
  }
  ;

  // Only activate tab on focus if it still has focus after the delay
  function checkTabFocus(target) {
    focused = document.activeElement;
    if (target === focused) {
      activateTab(target, false);
    }
    ;
  }
  ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initTabs);

/***/ }),

/***/ "./node_modules/counterup2/index.js":
/*!******************************************!*\
  !*** ./node_modules/counterup2/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "counterUp": () => (/* binding */ counterUp),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "divideNumbers": () => (/* binding */ divideNumbers)
/* harmony export */ });
const counterUp = ( el, options = {} ) => {
	const {
		action = 'start',
		duration = 1000,
		delay = 16,
	} = options

	// Allow people to use this as a stop method.
	if ( action === 'stop' ) {
		stopCountUp( el )
		return
	}

	stopCountUp( el )

	// If no number, don't do anything.
	if ( ! /[0-9]/.test( el.innerHTML ) ) {
		return
	}

	const nums = divideNumbers( el.innerHTML, {
		duration: duration || el.getAttribute( 'data-duration' ),
		delay: delay || el.getAttribute( 'data-delay' ),
	} )

	// Remember the contents.
	el._countUpOrigInnerHTML = el.innerHTML

	// Start counting.
	el.innerHTML = nums[ 0 ] || '&nbsp;' // Use a non-breaking space to prevent layout shift.
	el.style.visibility = 'visible'

	// Function for displaying output with the set time and delay.
	const output = function() {
		el.innerHTML = nums.shift() || '&nbsp;' // Use a non-breaking space to prevent layout shift.
		if ( nums.length ) {
			clearTimeout( el.countUpTimeout )
			el.countUpTimeout = setTimeout( output, delay )
		} else {
			el._countUpOrigInnerHTML = undefined
		}
	}
	el.countUpTimeout = setTimeout( output, delay )
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterUp);

const stopCountUp = el => {
	clearTimeout( el.countUpTimeout )
	if ( el._countUpOrigInnerHTML ) {
		el.innerHTML = el._countUpOrigInnerHTML
		el._countUpOrigInnerHTML = undefined
	}
	el.style.visibility = ''
}

const divideNumbers = ( numToDivide, options = {} ) => {
	const {
		duration = 1000,
		delay = 16,
	} = options

	// Number of times the number will change.
	const divisions = duration / delay

	// Split numbers and html tags.
	const splitValues = numToDivide.toString().split( /(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/ )

	// Contains all numbers to be displayed.
	const nums = []

	// Set blank strings to ready the split values.
	for ( let k = 0; k < divisions; k++ ) {
		nums.push( '' )
	}

	// Loop through all numbers and html tags.
	for ( let i = 0; i < splitValues.length; i++ ) {
		// If number split it into smaller numbers and insert it to nums.
		if ( /([0-9.][,.0-9]*[0-9]*)/.test( splitValues[ i ] ) && ! /<[^>]+>/.test( splitValues[ i ] ) ) {
			let num = splitValues[ i ]

			// Find all the occurances of . and ,
			const symbols = [ ...num.matchAll( /[.,]/g ) ]
				// Get all the locations of the characters so we can re-place them later on.
				.map( m => ( { char: m[0], i: num.length - m.index - 1 } ) )
				// Make sure we go through the characters from right to left
				.sort( ( a, b ) => a.i - b.i )

			// Remove commas and dots for computation purposes.
			num = num.replace( /[.,]/g, '' )

			// Start adding numbers from the end.
			let k = nums.length - 1

			// Create small numbers we'll the count over.
			for ( let val = divisions; val >= 1; val-- ) {
				let newNum = parseInt( num / divisions * val, 10 )

				// Re-insert the symbols in the indices they were at.
				newNum = symbols.reduce( ( num, { char, i } ) => {
					return num.length <= i ? num // If we don't have enough numbers, don't insert the symbol.
						: num.slice( 0, -i ) + char + num.slice( -i )
				}, newNum.toString() )

				// Insert all small numbers.
				nums[ k-- ] += newNum
			}
		} else {
			// Insert all non-numbers in the same place.
			for ( let k = 0; k < divisions; k++ ) {
				nums[ k ] += splitValues[ i ]
			}
		}
	}

	// The last value of the element should be the original one.
	nums[ nums.length ] = numToDivide.toString()

	return nums
}


/***/ }),

/***/ "./source/_assets/sass/main.scss":
/*!***************************************!*\
  !*** ./source/_assets/sass/main.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./source/_assets/css/main.css":
/*!*************************************!*\
  !*** ./source/_assets/css/main.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/sal.js/dist/sal.js":
/*!*****************************************!*\
  !*** ./node_modules/sal.js/dist/sal.js ***!
  \*****************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){return(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.d(t,{default:()=>j});var a="Sal was not initialised! Probably it is used in SSR.",s="Your browser does not support IntersectionObserver!\nGet a polyfill from here:\nhttps://github.com/w3c/IntersectionObserver/tree/master/polyfill",i={root:null,rootMargin:"0% 50%",threshold:.5,animateClassName:"sal-animate",disabledClassName:"sal-disabled",enterEventName:"sal:in",exitEventName:"sal:out",selector:"[data-sal]",once:!0,disabled:!1},l=[],c=null,u=function(e){e&&e!==i&&(i=r(r({},i),e))},d=function(e){e.classList.remove(i.animateClassName)},f=function(e,t){var n=new CustomEvent(e,{bubbles:!0,detail:t});t.target.dispatchEvent(n)},b=function(){document.body.classList.add(i.disabledClassName)},p=function(){c.disconnect(),c=null},m=function(){return i.disabled||"function"==typeof i.disabled&&i.disabled()},v=function(e,t){e.forEach((function(e){var n=e.target,r=void 0!==n.dataset.salRepeat,o=void 0!==n.dataset.salOnce,a=r||!(o||i.once);e.intersectionRatio>=i.threshold?(function(e){e.target.classList.add(i.animateClassName),f(i.enterEventName,e)}(e),a||t.unobserve(n)):a&&function(e){d(e.target),f(i.exitEventName,e)}(e)}))},y=function(){var e=[].filter.call(document.querySelectorAll(i.selector),(function(e){return!function(e){return e.classList.contains(i.animateClassName)}(e,i.animateClassName)}));return e.forEach((function(e){return c.observe(e)})),e},O=function(){b(),p()},h=function(){document.body.classList.remove(i.disabledClassName),c=new IntersectionObserver(v,{root:i.root,rootMargin:i.rootMargin,threshold:i.threshold}),l=y()},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};p(),Array.from(document.querySelectorAll(i.selector)).forEach(d),u(e),h()},w=function(){var e=y();l.push(e)};const j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;if(u(e),"undefined"==typeof window)return console.warn(a),{elements:l,disable:O,enable:h,reset:g,update:w};if(!window.IntersectionObserver)throw b(),Error(s);return m()?b():h(),{elements:l,disable:O,enable:h,reset:g,update:w}};return t.default})()}));
//# sourceMappingURL=sal.js.map

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./source/_assets/js/main.js")))
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./source/_assets/sass/main.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./source/_assets/css/main.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;