(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("angular-resource"), require("angular-cookies"), require("angular-translate"), require("angular-animate"), require("angular-sanitize"), require("angular-touch"), require("lodash"), require("moment"), require("leaflet-providers"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "angular-resource", "angular-cookies", "angular-translate", "angular-animate", "angular-sanitize", "angular-touch", "lodash", "moment", "leaflet-providers"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("angular"), require("angular-resource"), require("angular-cookies"), require("angular-translate"), require("angular-animate"), require("angular-sanitize"), require("angular-touch"), require("lodash"), require("moment"), require("leaflet-providers")) : factory(root["angular"], root["angular-resource"], root["angular-cookies"], root["angular-translate"], root["angular-animate"], root["angular-sanitize"], root["angular-touch"], root["lodash"], root["moment"], root["leaflet-providers"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_108__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(99);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);

	__webpack_require__(6);

	__webpack_require__(7);

	__webpack_require__(8);

	__webpack_require__(9);

	__webpack_require__(10);

	__webpack_require__(11);

	__webpack_require__(12);

	__webpack_require__(13);

	__webpack_require__(3);

	__webpack_require__(14);

	__webpack_require__(22);

	angular.module('smartvel-common', ['ngAnimate', 'ngCookies', 'ngResource', 'ngSanitize', 'ngTouch', 'pascalprecht.translate', 'ui.bootstrap.datetimepicker']);

	__webpack_require__(23);

	__webpack_require__(30);

	__webpack_require__(46);

	__webpack_require__(56);

	__webpack_require__(79);

	__webpack_require__(60);


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {
	  verbose: true,
	  styleLoader: "style-loader!css-loader!sass-loader",

	  scripts: {
	    'transition': true,
	    'alert': true,
	    'button': true,
	    'carousel': true,
	    'collapse': true,
	    'dropdown': true,
	    'modal': true,
	    'tooltip': true,
	    'popover': true,
	    'scrollspy': true,
	    'tab': true,
	    'affix': true
	  },
	  styles: {
	    "mixins": true,

	    "normalize": true,
	    "print": true,

	    "scaffolding": true,
	    "type": true,
	    "code": true,
	    "grid": true,
	    "tables": true,
	    "forms": true,
	    "buttons": true,

	    "component-animations": true,
	    "glyphicons": true,
	    "dropdowns": true,
	    "button-groups": true,
	    "input-groups": true,
	    "navs": true,
	    "navbar": true,
	    "breadcrumbs": true,
	    "pagination": true,
	    "pager": true,
	    "labels": true,
	    "badges": true,
	    "jumbotron": true,
	    "thumbnails": true,
	    "alerts": true,
	    "progress-bars": true,
	    "media": true,
	    "list-group": true,
	    "panels": true,
	    "wells": true,
	    "close": true,

	    "modals": true,
	    "tooltip": true,
	    "popovers": true,
	    "carousel": true,

	    "utilities": true,
	    "responsive-utilities": true
	  }
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.1.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-04-28T16:01Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//

	var arr = [];

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		// Use the correct document accordingly with window argument (sandbox)
		document = window.document,

		version = "2.1.4",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {
		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		// (You can seed the arguments with an array of args, but this is
		// only used internally.)
		each: function( callback, args ) {
			return jQuery.each( this, callback, args );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map(this, function( elem, i ) {
				return callback.call( elem, i, elem );
			}));
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor(null);
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {
			// Only deal with non-null/undefined values
			if ( (options = arguments[ i ]) != null ) {
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend({
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type(obj) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {
			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
		},

		isPlainObject: function( obj ) {
			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			if ( obj.constructor &&
					!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}

			// If the function hasn't returned already, we're confident that
			// |obj| is a plain object, created by {} or constructed with new Object
			return true;
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call(obj) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {
				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf("use strict") === 1 ) {
					script = document.createElement("script");
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {
				// Otherwise, avoid the DOM node creation, insertion
				// and removal by using an indirect global eval
					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		// args is for internal usage only
		each: function( obj, callback, args ) {
			var value,
				i = 0,
				length = obj.length,
				isArray = isArraylike( obj );

			if ( args ) {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.apply( obj[ i ], args );

						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.apply( obj[ i ], args );

						if ( value === false ) {
							break;
						}
					}
				}

			// A special, fast, case for the most common use of each
			} else {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.call( obj[ i ], i, obj[ i ] );

						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.call( obj[ i ], i, obj[ i ] );

						if ( value === false ) {
							break;
						}
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArraylike( Object(arr) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var value,
				i = 0,
				length = elems.length,
				isArray = isArraylike( elems ),
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	});

	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	});

	function isArraylike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.nodeType === 1 && length ) {
			return true;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.0-pre
	 * http://sizzlejs.com/
	 *
	 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-12-16
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
		// http://www.w3.org/TR/css3-syntax/#characters
		characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Loosely modeled on CSS identifier characters
		// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
		// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = characterEncoding.replace( "w", "w#" ),

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + characterEncoding + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + characterEncoding + ")" ),
			"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
			"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var match, elem, m, nodeType,
			// QSA vars
			i, groups, old, nid, newContext, newSelector;

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}

		context = context || document;
		results = results || [];
		nodeType = context.nodeType;

		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		if ( !seed && documentIsHTML ) {

			// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
				// Speed-up: Sizzle("#ID")
				if ( (m = match[1]) ) {
					if ( nodeType === 9 ) {
						elem = context.getElementById( m );
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document (jQuery #6963)
						if ( elem && elem.parentNode ) {
							// Handle the case where IE, Opera, and Webkit return items
							// by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}
					} else {
						// Context is not a document
						if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
							contains( context, elem ) && elem.id === m ) {
							results.push( elem );
							return results;
						}
					}

				// Speed-up: Sizzle("TAG")
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Speed-up: Sizzle(".CLASS")
				} else if ( (m = match[3]) && support.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// QSA path
			if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
				nid = old = expando;
				newContext = context;
				newSelector = nodeType !== 1 && selector;

				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					groups = tokenize( selector );

					if ( (old = context.getAttribute("id")) ) {
						nid = old.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", nid );
					}
					nid = "[id='" + nid + "'] ";

					i = groups.length;
					while ( i-- ) {
						groups[i] = nid + toSelector( groups[i] );
					}
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
					newSelector = groups.join(",");
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch(qsaError) {
					} finally {
						if ( !old ) {
							context.removeAttribute("id");
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = attrs.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// If no document and documentElement is available, return
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Set our document
		document = doc;
		docElem = doc.documentElement;
		parent = doc.defaultView;

		// Support: IE>8
		// If iframe document is assigned to "document" variable and if iframe has been reloaded,
		// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
		// IE6-8 do not support the defaultView property so parent will be undefined
		if ( parent && parent !== parent.top ) {
			// IE11 does not have attachEvent, so all must suffer
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Support tests
		---------------------------------------------------------------------- */
		documentIsHTML = !isXML( doc );

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( doc.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( doc.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					return m && m.parentNode ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\f]' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = doc.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully does not implement inclusive descendent
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === doc ? -1 :
					b === doc ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return doc;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, outerCache, node, diff, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
								// Seek `elem` from a previously-cached index
								outerCache = parent[ expando ] || (parent[ expando ] = {});
								cache = outerCache[ type ] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = cache[0] === dirruns && cache[2];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										outerCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							// Use previously-cached element index if available
							} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
								diff = cache[1];

							// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
							} else {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
										// Cache the index of each encountered element
										if ( useCache ) {
											(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
							if ( (oldCache = outerCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								outerCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context !== document && context;
				}

				// Add elements passing elementMatchers directly to results
				// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context, xml ) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// Apply set filters to unmatched elements
				matchedCount += i;
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is no seed and only one group
		if ( match.length === 1 ) {

			// Take a shortcut and set the context if the root selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			});

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			});

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
		});
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			}));
	};

	jQuery.fn.extend({
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter(function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				}) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow(this, selector || [], false) );
		},
		not: function( selector ) {
			return this.pushStack( winnow(this, selector || [], true) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	});


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && (match[1] || !context) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[1] ) {
						context = context instanceof jQuery ? context[0] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[1],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[2] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {
							// Inject the element directly into the jQuery object
							this.length = 1;
							this[0] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || rootjQuery ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return typeof rootjQuery.ready !== "undefined" ?
					rootjQuery.ready( selector ) :
					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.extend({
		dir: function( elem, dir, until ) {
			var matched = [],
				truncate = until !== undefined;

			while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
				if ( elem.nodeType === 1 ) {
					if ( truncate && jQuery( elem ).is( until ) ) {
						break;
					}
					matched.push( elem );
				}
			}
			return matched;
		},

		sibling: function( n, elem ) {
			var matched = [];

			for ( ; n; n = n.nextSibling ) {
				if ( n.nodeType === 1 && n !== elem ) {
					matched.push( n );
				}
			}

			return matched;
		}
	});

	jQuery.fn.extend({
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter(function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[i] ) ) {
						return true;
					}
				}
			});
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
					// Always skip document fragments
					if ( cur.nodeType < 11 && (pos ?
						pos.index(cur) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector(cur, selectors)) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.unique(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter(selector)
			);
		}
	});

	function sibling( cur, dir ) {
		while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each({
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return jQuery.dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return jQuery.dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return jQuery.dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return jQuery.sibling( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.unique( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	});
	var rnotwhite = (/\S+/g);



	// String to Object options format cache
	var optionsCache = {};

	// Convert String-formatted options into Object-formatted ones and store in cache
	function createOptions( options ) {
		var object = optionsCache[ options ] = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		});
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			( optionsCache[ options ] || createOptions( options ) ) :
			jQuery.extend( {}, options );

		var // Last fire value (for non-forgettable lists)
			memory,
			// Flag to know if list was already fired
			fired,
			// Flag to know if list is currently firing
			firing,
			// First callback to fire (used internally by add and fireWith)
			firingStart,
			// End of the loop when firing
			firingLength,
			// Index of currently firing callback (modified by remove if needed)
			firingIndex,
			// Actual callback list
			list = [],
			// Stack of fire calls for repeatable lists
			stack = !options.once && [],
			// Fire callbacks
			fire = function( data ) {
				memory = options.memory && data;
				fired = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				firing = true;
				for ( ; list && firingIndex < firingLength; firingIndex++ ) {
					if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
						memory = false; // To prevent further calls using add
						break;
					}
				}
				firing = false;
				if ( list ) {
					if ( stack ) {
						if ( stack.length ) {
							fire( stack.shift() );
						}
					} else if ( memory ) {
						list = [];
					} else {
						self.disable();
					}
				}
			},
			// Actual Callbacks object
			self = {
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
						// First, we save the current length
						var start = list.length;
						(function add( args ) {
							jQuery.each( args, function( _, arg ) {
								var type = jQuery.type( arg );
								if ( type === "function" ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && type !== "string" ) {
									// Inspect recursively
									add( arg );
								}
							});
						})( arguments );
						// Do we need to add the callbacks to the
						// current firing batch?
						if ( firing ) {
							firingLength = list.length;
						// With memory, if we're not firing then
						// we should call right away
						} else if ( memory ) {
							firingStart = start;
							fire( memory );
						}
					}
					return this;
				},
				// Remove a callback from the list
				remove: function() {
					if ( list ) {
						jQuery.each( arguments, function( _, arg ) {
							var index;
							while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
								list.splice( index, 1 );
								// Handle firing indexes
								if ( firing ) {
									if ( index <= firingLength ) {
										firingLength--;
									}
									if ( index <= firingIndex ) {
										firingIndex--;
									}
								}
							}
						});
					}
					return this;
				},
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
				},
				// Remove all callbacks from the list
				empty: function() {
					list = [];
					firingLength = 0;
					return this;
				},
				// Have the list do nothing anymore
				disable: function() {
					list = stack = memory = undefined;
					return this;
				},
				// Is it disabled?
				disabled: function() {
					return !list;
				},
				// Lock the list in its current state
				lock: function() {
					stack = undefined;
					if ( !memory ) {
						self.disable();
					}
					return this;
				},
				// Is it locked?
				locked: function() {
					return !stack;
				},
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( list && ( !fired || stack ) ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						if ( firing ) {
							stack.push( args );
						} else {
							fire( args );
						}
					}
					return this;
				},
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend({

		Deferred: function( func ) {
			var tuples = [
					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks("memory") ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred(function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[1] ](function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.done( newDefer.resolve )
											.fail( newDefer.reject )
											.progress( newDefer.notify );
									} else {
										newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
									}
								});
							});
							fns = null;
						}).promise();
					},
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[1] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(function() {
						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[0] ] = function() {
					deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[0] + "With" ] = list.fireWith;
			});

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject )
							.progress( updateFunc( i, progressContexts, progressValues ) );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	});


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {
		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend({
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	});

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed, false );
		window.removeEventListener( "load", completed, false );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called after the browser event has already occurred.
			// We once tried to use readyState "interactive" here, but it caused issues like the one
			// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
			if ( document.readyState === "complete" ) {
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed, false );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed, false );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[0], key ) : emptyGet;
	};


	/**
	 * Determines whether an object can have data
	 */
	jQuery.acceptData = function( owner ) {
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};


	function Data() {
		// Support: Android<4,
		// Old WebKit does not have Object.preventExtensions/freeze method,
		// return new empty object instead with no [[set]] accessor
		Object.defineProperty( this.cache = {}, 0, {
			get: function() {
				return {};
			}
		});

		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;
	Data.accepts = jQuery.acceptData;

	Data.prototype = {
		key: function( owner ) {
			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return the key for a frozen object.
			if ( !Data.accepts( owner ) ) {
				return 0;
			}

			var descriptor = {},
				// Check if the owner object already has a cache key
				unlock = owner[ this.expando ];

			// If not, create one
			if ( !unlock ) {
				unlock = Data.uid++;

				// Secure it in a non-enumerable, non-writable property
				try {
					descriptor[ this.expando ] = { value: unlock };
					Object.defineProperties( owner, descriptor );

				// Support: Android<4
				// Fallback to a less secure definition
				} catch ( e ) {
					descriptor[ this.expando ] = unlock;
					jQuery.extend( owner, descriptor );
				}
			}

			// Ensure the cache object
			if ( !this.cache[ unlock ] ) {
				this.cache[ unlock ] = {};
			}

			return unlock;
		},
		set: function( owner, data, value ) {
			var prop,
				// There may be an unlock assigned to this node,
				// if there is no entry for this "owner", create one inline
				// and set the unlock as though an owner entry had always existed
				unlock = this.key( owner ),
				cache = this.cache[ unlock ];

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {
				// Fresh assignments by object are shallow copied
				if ( jQuery.isEmptyObject( cache ) ) {
					jQuery.extend( this.cache[ unlock ], data );
				// Otherwise, copy the properties one-by-one to the cache object
				} else {
					for ( prop in data ) {
						cache[ prop ] = data[ prop ];
					}
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			// Either a valid cache is found, or will be created.
			// New caches will be created and the unlock returned,
			// allowing direct access to the newly created
			// empty data object. A valid owner object must be provided.
			var cache = this.cache[ this.key( owner ) ];

			return key === undefined ?
				cache : cache[ key ];
		},
		access: function( owner, key, value ) {
			var stored;
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					((key && typeof key === "string") && value === undefined) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase(key) );
			}

			// [*]When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				unlock = this.key( owner ),
				cache = this.cache[ unlock ];

			if ( key === undefined ) {
				this.cache[ unlock ] = {};

			} else {
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );
					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {
						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;
				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}
		},
		hasData: function( owner ) {
			return !jQuery.isEmptyObject(
				this.cache[ owner[ this.expando ] ] || {}
			);
		},
		discard: function( owner ) {
			if ( owner[ this.expando ] ) {
				delete this.cache[ owner[ this.expando ] ];
			}
		}
	};
	var data_priv = new Data();

	var data_user = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /([A-Z])/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch( e ) {}

				// Make sure we set the data so it isn't changed later
				data_user.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend({
		hasData: function( elem ) {
			return data_user.hasData( elem ) || data_priv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return data_user.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			data_user.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to data_priv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return data_priv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			data_priv.remove( elem, name );
		}
	});

	jQuery.fn.extend({
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = data_user.get( elem );

					if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice(5) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						data_priv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each(function() {
					data_user.set( this, key );
				});
			}

			return access( this, function( value ) {
				var data,
					camelKey = jQuery.camelCase( key );

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
					// Attempt to get data from the cache
					// with the key as-is
					data = data_user.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to get data from the cache
					// with the key camelized
					data = data_user.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each(function() {
					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = data_user.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					data_user.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf("-") !== -1 && data !== undefined ) {
						data_user.set( this, key, value );
					}
				});
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each(function() {
				data_user.remove( this, key );
			});
		}
	});


	jQuery.extend({
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = data_priv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = data_priv.access( elem, type, jQuery.makeArray(data) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return data_priv.get( elem, key ) || data_priv.access( elem, key, {
				empty: jQuery.Callbacks("once memory").add(function() {
					data_priv.remove( elem, [ type + "queue", key ] );
				})
			});
		}
	});

	jQuery.fn.extend({
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[0], type );
			}

			return data === undefined ?
				this :
				this.each(function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[0] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				});
		},
		dequeue: function( type ) {
			return this.each(function() {
				jQuery.dequeue( this, type );
			});
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = data_priv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	});
	var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {
			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
		};

	var rcheckableType = (/^(?:checkbox|radio)$/i);



	(function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	})();
	var strundefined = typeof undefined;



	support.focusinBubbles = "onfocusin" in window;


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = data_priv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !(events = elemData.events) ) {
				events = elemData.events = {};
			}
			if ( !(eventHandle = elemData.handle) ) {
				eventHandle = elemData.handle = function( e ) {
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join(".")
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !(handlers = events[ type ]) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle, false );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = data_priv.hasData( elem ) && data_priv.get( elem );

			if ( !elemData || !(events = elemData.events) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				delete elemData.handle;
				data_priv.remove( elem, "events" );
			}
		},

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf(".") >= 0 ) {
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.namespace_re = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === (elem.ownerDocument || document) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
					jQuery.acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
								.apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( (event.result = ret) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			// Avoid non-left-click bubbling in Firefox (#3861)
			if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.disabled !== true || event.type !== "click" ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) >= 0 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push({ elem: cur, handlers: matches });
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},

		simulate: function( type, elem, event, bubble ) {
			// Piggyback on a donor event to simulate a different one.
			// Fake originalEvent to avoid donor's stopPropagation, but if the
			// simulated event prevents default then we do the same on the donor.
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true,
					originalEvent: {}
				}
			);
			if ( bubble ) {
				jQuery.event.trigger( e, null, elem );
			} else {
				jQuery.event.dispatch.call( elem, e );
			}
			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	};

	jQuery.Event = function( src, props ) {
		// Allow instantiation without the 'new' keyword
		if ( !(this instanceof jQuery.Event) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && e.preventDefault ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && e.stopPropagation ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && e.stopImmediatePropagation ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// Support: Chrome 15+
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mousenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	});

	// Support: Firefox, Chrome, Safari
	// Create "bubbling" focus and blur events
	if ( !support.focusinBubbles ) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
					jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
				};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = data_priv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = data_priv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						data_priv.remove( doc, fix );

					} else {
						data_priv.access( doc, fix, attaches );
					}
				}
			};
		});
	}

	jQuery.fn.extend({

		on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
			var origFn, type;

			// Types can be a map of types/handlers
			if ( typeof types === "object" ) {
				// ( types-Object, selector, data )
				if ( typeof selector !== "string" ) {
					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for ( type in types ) {
					this.on( type, selector, data, types[ type ], one );
				}
				return this;
			}

			if ( data == null && fn == null ) {
				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if ( fn == null ) {
				if ( typeof selector === "string" ) {
					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {
					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if ( fn === false ) {
				fn = returnFalse;
			} else if ( !fn ) {
				return this;
			}

			if ( one === 1 ) {
				origFn = fn;
				fn = function( event ) {
					// Can use an empty set, since event contains the info
					jQuery().off( event );
					return origFn.apply( this, arguments );
				};
				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
			}
			return this.each( function() {
				jQuery.event.add( this, types, fn, data, selector );
			});
		},
		one: function( types, selector, data, fn ) {
			return this.on( types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each(function() {
				jQuery.event.remove( this, types, fn, selector );
			});
		},

		trigger: function( type, data ) {
			return this.each(function() {
				jQuery.event.trigger( type, data, this );
			});
		},
		triggerHandler: function( type, data ) {
			var elem = this[0];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	});


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		rtagName = /<([\w:]+)/,
		rhtml = /<|&#?\w+;/,
		rnoInnerhtml = /<(?:script|style|link)/i,
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptType = /^$|\/(?:java|ecma)script/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

		// We have to close these tags to support XHTML (#13200)
		wrapMap = {

			// Support: IE9
			option: [ 1, "<select multiple='multiple'>", "</select>" ],

			thead: [ 1, "<table>", "</table>" ],
			col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
			tr: [ 2, "<table><tbody>", "</tbody></table>" ],
			td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

			_default: [ 0, "", "" ]
		};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	// Support: 1.x compatibility
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName("tbody")[0] ||
				elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute("type");
		}

		return elem;
	}

	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			data_priv.set(
				elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
			);
		}
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( data_priv.hasData( src ) ) {
			pdataOld = data_priv.access( src );
			pdataCur = data_priv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( data_user.hasData( src ) ) {
			udataOld = data_user.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			data_user.set( dest, udataCur );
		}
	}

	function getAll( context, tag ) {
		var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
				context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	jQuery.extend({
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		buildFragment: function( elems, context, scripts, selection ) {
			var elem, tmp, tag, wrap, contains, j,
				fragment = context.createDocumentFragment(),
				nodes = [],
				i = 0,
				l = elems.length;

			for ( ; i < l; i++ ) {
				elem = elems[ i ];

				if ( elem || elem === 0 ) {

					// Add nodes directly
					if ( jQuery.type( elem ) === "object" ) {
						// Support: QtWebKit, PhantomJS
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

					// Convert non-html into a text node
					} else if ( !rhtml.test( elem ) ) {
						nodes.push( context.createTextNode( elem ) );

					// Convert html into DOM nodes
					} else {
						tmp = tmp || fragment.appendChild( context.createElement("div") );

						// Deserialize a standard representation
						tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
						wrap = wrapMap[ tag ] || wrapMap._default;
						tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

						// Descend through wrappers to the right content
						j = wrap[ 0 ];
						while ( j-- ) {
							tmp = tmp.lastChild;
						}

						// Support: QtWebKit, PhantomJS
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( nodes, tmp.childNodes );

						// Remember the top-level container
						tmp = fragment.firstChild;

						// Ensure the created nodes are orphaned (#12392)
						tmp.textContent = "";
					}
				}
			}

			// Remove wrapper from fragment
			fragment.textContent = "";

			i = 0;
			while ( (elem = nodes[ i++ ]) ) {

				// #4087 - If origin and destination elements are the same, and this is
				// that element, do not do anything
				if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
					continue;
				}

				contains = jQuery.contains( elem.ownerDocument, elem );

				// Append to fragment
				tmp = getAll( fragment.appendChild( elem ), "script" );

				// Preserve script evaluation history
				if ( contains ) {
					setGlobalEval( tmp );
				}

				// Capture executables
				if ( scripts ) {
					j = 0;
					while ( (elem = tmp[ j++ ]) ) {
						if ( rscriptType.test( elem.type || "" ) ) {
							scripts.push( elem );
						}
					}
				}
			}

			return fragment;
		},

		cleanData: function( elems ) {
			var data, elem, type, key,
				special = jQuery.event.special,
				i = 0;

			for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
				if ( jQuery.acceptData( elem ) ) {
					key = elem[ data_priv.expando ];

					if ( key && (data = data_priv.cache[ key ]) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
						if ( data_priv.cache[ key ] ) {
							// Discard any remaining `private` data
							delete data_priv.cache[ key ];
						}
					}
				}
				// Discard any remaining `user` data
				delete data_user.cache[ elem[ data_user.expando ] ];
			}
		}
	});

	jQuery.fn.extend({
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each(function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					});
			}, null, value, arguments.length );
		},

		append: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			});
		},

		prepend: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			});
		},

		before: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			});
		},

		after: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			});
		},

		remove: function( selector, keepData /* Internal Use Only */ ) {
			var elem,
				elems = selector ? jQuery.filter( selector, this ) : this,
				i = 0;

			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem ) );
				}

				if ( elem.parentNode ) {
					if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
						setGlobalEval( getAll( elem, "script" ) );
					}
					elem.parentNode.removeChild( elem );
				}
			}

			return this;
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; (elem = this[i]) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map(function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			});
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = value.replace( rxhtmlTag, "<$1></$2>" );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var arg = arguments[ 0 ];

			// Make the changes, replacing each context element with the new content
			this.domManip( arguments, function( elem ) {
				arg = this.parentNode;

				jQuery.cleanData( getAll( this ) );

				if ( arg ) {
					arg.replaceChild( elem, this );
				}
			});

			// Force removal if there was no new content (e.g., from empty arguments)
			return arg && (arg.length || arg.nodeType) ? this : this.remove();
		},

		detach: function( selector ) {
			return this.remove( selector, true );
		},

		domManip: function( args, callback ) {

			// Flatten any nested arrays
			args = concat.apply( [], args );

			var fragment, first, scripts, hasScripts, node, doc,
				i = 0,
				l = this.length,
				set = this,
				iNoClone = l - 1,
				value = args[ 0 ],
				isFunction = jQuery.isFunction( value );

			// We can't cloneNode fragments that contain checked, in WebKit
			if ( isFunction ||
					( l > 1 && typeof value === "string" &&
						!support.checkClone && rchecked.test( value ) ) ) {
				return this.each(function( index ) {
					var self = set.eq( index );
					if ( isFunction ) {
						args[ 0 ] = value.call( this, index, self.html() );
					}
					self.domManip( args, callback );
				});
			}

			if ( l ) {
				fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
				first = fragment.firstChild;

				if ( fragment.childNodes.length === 1 ) {
					fragment = first;
				}

				if ( first ) {
					scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
					hasScripts = scripts.length;

					// Use the original fragment for the last item instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for ( ; i < l; i++ ) {
						node = fragment;

						if ( i !== iNoClone ) {
							node = jQuery.clone( node, true, true );

							// Keep references to cloned scripts for later restoration
							if ( hasScripts ) {
								// Support: QtWebKit
								// jQuery.merge because push.apply(_, arraylike) throws
								jQuery.merge( scripts, getAll( node, "script" ) );
							}
						}

						callback.call( this[ i ], node, i );
					}

					if ( hasScripts ) {
						doc = scripts[ scripts.length - 1 ].ownerDocument;

						// Reenable scripts
						jQuery.map( scripts, restoreScript );

						// Evaluate executable scripts on first document insertion
						for ( i = 0; i < hasScripts; i++ ) {
							node = scripts[ i ];
							if ( rscriptType.test( node.type || "" ) &&
								!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

								if ( node.src ) {
									// Optional AJAX dependency, but won't run scripts if not present
									if ( jQuery._evalUrl ) {
										jQuery._evalUrl( node.src );
									}
								} else {
									jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
								}
							}
						}
					}
				}
			}

			return this;
		}
	});

	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	});


	var iframe,
		elemdisplay = {};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */
	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var style,
			elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			// getDefaultComputedStyle might be reliably used only on attached element
			display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

				// Use of this method is a temporary fix (more like optimization) until something better comes along,
				// since it was removed from specification and supported only in FF
				style.display : jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = (/^margin/);

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {
			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			if ( elem.ownerDocument.defaultView.opener ) {
				return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
			}

			return window.getComputedStyle( elem, null );
		};



	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];
		}

		if ( computed ) {

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// Support: iOS < 6
			// A tribute to the "awesome hack by Dean Edwards"
			// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?
			// Support: IE
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return (this.get = hookFn).apply( this, arguments );
			}
		};
	}


	(function() {
		var pixelPositionVal, boxSizingReliableVal,
			docElem = document.documentElement,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
			"position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computePixelPositionAndBoxSizingReliable() {
			div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
				"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
				"border:1px;padding:1px;width:4px;position:absolute";
			div.innerHTML = "";
			docElem.appendChild( container );

			var divStyle = window.getComputedStyle( div, null );
			pixelPositionVal = divStyle.top !== "1%";
			boxSizingReliableVal = divStyle.width === "4px";

			docElem.removeChild( container );
		}

		// Support: node.js jsdom
		// Don't assume that getComputedStyle is a property of the global object
		if ( window.getComputedStyle ) {
			jQuery.extend( support, {
				pixelPosition: function() {

					// This test is executed only once but we still do memoizing
					// since we can use the boxSizingReliable pre-computing.
					// No need to check if the test was already performed, though.
					computePixelPositionAndBoxSizingReliable();
					return pixelPositionVal;
				},
				boxSizingReliable: function() {
					if ( boxSizingReliableVal == null ) {
						computePixelPositionAndBoxSizingReliable();
					}
					return boxSizingReliableVal;
				},
				reliableMarginRight: function() {

					// Support: Android 2.3
					// Check if div with explicit width and no margin-right incorrectly
					// gets computed margin-right based on width of container. (#3333)
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					// This support function is only executed once so no memoizing is needed.
					var ret,
						marginDiv = div.appendChild( document.createElement( "div" ) );

					// Reset CSS: box-sizing; display; margin; border; padding
					marginDiv.style.cssText = div.style.cssText =
						// Support: Firefox<29, Android 2.3
						// Vendor-prefix box-sizing
						"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
						"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
					marginDiv.style.marginRight = marginDiv.style.width = "0";
					div.style.width = "1px";
					docElem.appendChild( container );

					ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );

					docElem.removeChild( container );
					div.removeChild( marginDiv );

					return ret;
				}
			});
		}
	})();


	// A method for quickly swapping in/out CSS properties to get correct calculations.
	jQuery.swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var
		// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
		rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( style, name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in style ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[0].toUpperCase() + name.slice(1),
			origName = name,
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in style ) {
				return name;
			}
		}

		return origName;
	}

	function setPositiveNumber( elem, value, subtract ) {
		var matches = rnumsplit.exec( value );
		return matches ?
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
			// If we already have the right measurement, avoid augmentation
			4 :
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test(val) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = data_priv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend({

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && (ret = rrelNum.exec( value )) ) {
					value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number, add 'px' to the (except for certain CSS properties)
				if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
					value += "px";
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
					style[ name ] = value;
				}

			} else {
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
			}
			return val;
		}
	});

	jQuery.each([ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
						jQuery.swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						}) :
						getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var styles = extra && getStyles( elem );
				return setPositiveNumber( elem, value, extra ?
					augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					) : 0
				);
			}
		};
	});

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return jQuery.swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	});

	jQuery.fn.extend({
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each(function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			});
		}
	});


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || "swing";
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				if ( tween.elem[ tween.prop ] != null &&
					(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		}
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
		rrun = /queueHooks$/,
		animationPrefilters = [ defaultPrefilter ],
		tweeners = {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value ),
					target = tween.cur(),
					parts = rfxnum.exec( value ),
					unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

					// Starting value computation is required for potential unit mismatches
					start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
						rfxnum.exec( jQuery.css( tween.elem, prop ) ),
					scale = 1,
					maxIterations = 20;

				if ( start && start[ 3 ] !== unit ) {
					// Trust units reported by jQuery.css
					unit = unit || start[ 3 ];

					// Make sure we update the tween properties later on
					parts = parts || [];

					// Iteratively approximate from a nonzero starting point
					start = +target || 1;

					do {
						// If previous iteration zeroed out, double until we get *something*.
						// Use string for doubling so we don't accidentally see scale as unchanged below
						scale = scale || ".5";

						// Adjust and apply
						start = start / scale;
						jQuery.style( tween.elem, prop, start + unit );

					// Update scale, tolerating zero or NaN from tween.cur(),
					// break the loop if scale is unchanged or perfect, or if we've just had enough
					} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
				}

				// Update tween properties
				if ( parts ) {
					start = tween.start = +start || +target || 0;
					tween.unit = unit;
					// If a +=/-= token was provided, we're doing a relative animation
					tween.end = parts[ 1 ] ?
						start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
						+parts[ 2 ];
				}

				return tween;
			} ]
		};

	// Animations created synchronously will run synchronously
	function createFxNow() {
		setTimeout(function() {
			fxNow = undefined;
		});
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( (tween = collection[ index ].call( animation, prop, value )) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = data_priv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always(function() {
				// Ensure the complete handler is called before this completes
				anim.always(function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				});
			});
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always(function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			});
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = data_priv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done(function() {
					jQuery( elem ).hide();
				});
			}
			anim.done(function() {
				var prop;

				data_priv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			});
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = animationPrefilters.length,
			deferred = jQuery.Deferred().always( function() {
				// Don't match elem in the :animated selector
				delete tick.elem;
			}),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ]);

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise({
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, { specialEasing: {} }, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			}),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			})
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.split(" ");
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				tweeners[ prop ] = tweeners[ prop ] || [];
				tweeners[ prop ].unshift( callback );
			}
		},

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				animationPrefilters.unshift( callback );
			} else {
				animationPrefilters.push( callback );
			}
		}
	});

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend({
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || data_priv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each(function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = data_priv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			});
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each(function() {
				var index,
					data = data_priv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			});
		}
	});

	jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	});

	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	});

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;

	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		clearInterval( timerId );
		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	};


	(function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	})();


	var nodeHook, boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend({
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each(function() {
				jQuery.removeAttr( this, name );
			});
		}
	});

	jQuery.extend({
		attr: function( elem, name, value ) {
			var hooks, ret,
				nType = elem.nodeType;

			// don't get/set attributes on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === strundefined ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
			}

			if ( value !== undefined ) {

				if ( value === null ) {
					jQuery.removeAttr( elem, name );

				} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
					return ret;

				} else {
					elem.setAttribute( name, value + "" );
					return value;
				}

			} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;

			} else {
				ret = jQuery.find.attr( elem, name );

				// Non-existent attributes return null, we normalize to undefined
				return ret == null ?
					undefined :
					ret;
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( (name = attrNames[i++]) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {
						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		}
	});

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	});




	var rfocusable = /^(?:input|select|textarea|button)$/i;

	jQuery.fn.extend({
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each(function() {
				delete this[ jQuery.propFix[ name ] || name ];
			});
		}
	});

	jQuery.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},

		prop: function( elem, name, value ) {
			var ret, hooks, notxml,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

			if ( notxml ) {
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
					ret :
					( elem[ name ] = value );

			} else {
				return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
					ret :
					elem[ name ];
			}
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {
					return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
						elem.tabIndex :
						-1;
				}
			}
		}
	});

	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			}
		};
	}

	jQuery.each([
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	});




	var rclass = /[\t\r\n\f]/g;

	jQuery.fn.extend({
		addClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				proceed = typeof value === "string" && value,
				i = 0,
				len = this.length;

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).addClass( value.call( this, j, this.className ) );
				});
			}

			if ( proceed ) {
				// The disjunction here is for better compressibility (see removeClass)
				classes = ( value || "" ).match( rnotwhite ) || [];

				for ( ; i < len; i++ ) {
					elem = this[ i ];
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						" "
					);

					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				proceed = arguments.length === 0 || typeof value === "string" && value,
				i = 0,
				len = this.length;

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).removeClass( value.call( this, j, this.className ) );
				});
			}
			if ( proceed ) {
				classes = ( value || "" ).match( rnotwhite ) || [];

				for ( ; i < len; i++ ) {
					elem = this[ i ];
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						""
					);

					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = value ? jQuery.trim( cur ) : "";
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( i ) {
					jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
				});
			}

			return this.each(function() {
				if ( type === "string" ) {
					// Toggle individual class names
					var className,
						i = 0,
						self = jQuery( this ),
						classNames = value.match( rnotwhite ) || [];

					while ( (className = classNames[ i++ ]) ) {
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( type === strundefined || type === "boolean" ) {
					if ( this.className ) {
						// store className if set
						data_priv.set( this, "__className__", this.className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
				}
			});
		},

		hasClass: function( selector ) {
			var className = " " + selector + " ",
				i = 0,
				l = this.length;
			for ( ; i < l; i++ ) {
				if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
					return true;
				}
			}

			return false;
		}
	});




	var rreturn = /\r/g;

	jQuery.fn.extend({
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[0];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?
						// Handle most common string cases
						ret.replace(rreturn, "") :
						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each(function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					});
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			});
		}
	});

	jQuery.extend({
		valHooks: {
			option: {
				get: function( elem ) {
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						jQuery.trim( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE6-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	});

	// Radios and checkboxes getter/setter
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});




	// Return jQuery for attributes-only inclusion


	jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	});

	jQuery.fn.extend({
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		},

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
		}
	});


	var nonce = jQuery.now();

	var rquery = (/\?/);



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			tmp = new DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
		rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Document location
		ajaxLocation = window.location.href,

		// Segment location into parts
		ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {
				// For each dataType in the dataTypeExpression
				while ( (dataType = dataTypes[i++]) ) {
					// Prepend if requested
					if ( dataType[0] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

					// Otherwise append
					} else {
						(structure[ dataType ] = structure[ dataType ] || []).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			});
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s[ "throws" ] ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend({

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,
				// URL without anti-cache param
				cacheURL,
				// Response headers
				responseHeadersString,
				responseHeaders,
				// timeout handle
				timeoutTimer,
				// Cross-domain detection vars
				parts,
				// To know if global events are to be dispatched
				fireGlobals,
				// Loop variable
				i,
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
				// Callbacks context
				callbackContext = s.context || s,
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks("once memory"),
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
				// The jqXHR state
				state = 0,
				// Default abort message
				strAbort = "canceled",
				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( (match = rheaders.exec( responseHeadersString )) ) {
									responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
				.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if ( s.crossDomain == null ) {
				parts = rurl.exec( s.url.toLowerCase() );
				s.crossDomain = !!( parts &&
					( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
						( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
							( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
				);
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger("ajaxStart");
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
					s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = setTimeout(function() {
						jqXHR.abort("timeout");
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {
					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );
					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	});

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			return jQuery.ajax({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			});
		};
	});


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax({
			url: url,
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		});
	};


	jQuery.fn.extend({
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each(function( i ) {
					jQuery( this ).wrapAll( html.call(this, i) );
				});
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map(function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				}).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each(function( i ) {
					jQuery( this ).wrapInner( html.call(this, i) );
				});
			}

			return this.each(function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			});
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each(function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
			});
		},

		unwrap: function() {
			return this.parent().each(function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			}).end();
		}
	});


	jQuery.expr.filters.hidden = function( elem ) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
	};
	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
					// Treat each array item as a scalar.
					add( prefix, v );

				} else {
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
				}
			});

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {
			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			});

		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend({
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map(function() {
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			})
			.filter(function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			})
			.map(function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						}) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			}).get();
		}
	});


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest();
		} catch( e ) {}
	};

	var xhrId = 0,
		xhrCallbacks = {},
		xhrSuccessStatus = {
			// file protocol always yields status code 0, assume 200
			0: 200,
			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	// Support: IE9
	// Open requests must be manually aborted on unload (#5280)
	// See https://support.microsoft.com/kb/2856746 for more info
	if ( window.attachEvent ) {
		window.attachEvent( "onunload", function() {
			for ( var key in xhrCallbacks ) {
				xhrCallbacks[ key ]();
			}
		});
	}

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport(function( options ) {
		var callback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					xhr.open( options.type, options.url, options.async, options.username, options.password );

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								delete xhrCallbacks[ id ];
								callback = xhr.onload = xhr.onerror = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
									complete(
										// file: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
										// Support: IE9
										// Accessing binary-data responseText throws an exception
										// (#11426)
										typeof xhr.responseText === "string" ? {
											text: xhr.responseText
										} : undefined,
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					xhr.onerror = callback("error");

					// Create the abort callback
					callback = xhrCallbacks[ id ] = callback("abort");

					try {
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	});




	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	});

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	});

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery("<script>").prop({
						async: true,
						charset: s.scriptCharset,
						src: s.url
					}).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	});




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	});

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always(function() {
				// Restore preexisting value
				window[ callbackName ] = overwritten;

				// Save back as free
				if ( s[ callbackName ] ) {
					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			});

			// Delegate to script
			return "script";
		}
	});




	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[1] ) ];
		}

		parsed = jQuery.buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf(" ");

		if ( off >= 0 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax({
				url: url,

				// if "type" variable is undefined, then "GET" method will be used
				type: type,
				dataType: "html",
				data: params
			}).done(function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			}).complete( callback && function( jqXHR, status ) {
				self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
			});
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	});




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};




	var docElem = window.document.documentElement;

	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {
				options = options.call( elem, i, curOffset );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend({
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each(function( i ) {
						jQuery.offset.setOffset( this, options, i );
					});
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			// Support: BlackBerry 5, iOS 3 (original iPhone)
			// If we don't have gBCR, just use 0,0 rather than error
			if ( typeof elem.getBoundingClientRect !== strundefined ) {
				box = elem.getBoundingClientRect();
			}
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {
				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		offsetParent: function() {
			return this.map(function() {
				var offsetParent = this.offsetParent || docElem;

				while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || docElem;
			});
		}
	});

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : window.pageXOffset,
						top ? val : window.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length, null );
		};
	});

	// Support: Safari<7+, Chrome<37+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	});


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		});
	});


	// The number of elements contained in the matched element set
	jQuery.fn.size = function() {
		return this.length;
	};

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}




	var
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( typeof noGlobal === strundefined ) {
		window.jQuery = window.$ = jQuery;
	}




	return jQuery;

	}));


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(15);
	__webpack_require__(19);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/bootstrap-sass-loader/bootstrap-sass-styles.loader.js!./bootstrap-sass.config.js", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/bootstrap-sass-loader/bootstrap-sass-styles.loader.js!./bootstrap-sass.config.js");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, "* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n*:before, *:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: transparent; }\n\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #333333;\n  background-color: #fff; }\n\ninput, button, select, textarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\na {\n  color: #337ab7;\n  text-decoration: none; }\n  a:hover, a:focus {\n    color: #23527c;\n    text-decoration: underline; }\n  a:focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n\nfigure {\n  margin: 0; }\n\nimg {\n  vertical-align: middle; }\n\n.img-responsive {\n  display: block;\n  max-width: 100%;\n  height: auto; }\n\n.img-rounded {\n  border-radius: 6px; }\n\n.img-thumbnail {\n  padding: 4px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: all .2s ease-in-out;\n  -o-transition: all .2s ease-in-out;\n  transition: all .2s ease-in-out;\n  display: inline-block;\n  max-width: 100%;\n  height: auto; }\n\n.img-circle {\n  border-radius: 50%; }\n\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eeeeee; }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto; }\n\n[role=\"button\"] {\n  cursor: pointer; }\n\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px; }\n  .container:before, .container:after {\n    content: \" \";\n    display: table; }\n  .container:after {\n    clear: both; }\n  @media (min-width: 768px) {\n    .container {\n      width: 750px; } }\n  @media (min-width: 992px) {\n    .container {\n      width: 970px; } }\n  @media (min-width: 1200px) {\n    .container {\n      width: 1170px; } }\n\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px; }\n  .container-fluid:before, .container-fluid:after {\n    content: \" \";\n    display: table; }\n  .container-fluid:after {\n    clear: both; }\n\n.row {\n  margin-left: -15px;\n  margin-right: -15px; }\n  .row:before, .row:after {\n    content: \" \";\n    display: table; }\n  .row:after {\n    clear: both; }\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px; }\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left; }\n\n.col-xs-1 {\n  width: 8.33333%; }\n\n.col-xs-2 {\n  width: 16.66667%; }\n\n.col-xs-3 {\n  width: 25%; }\n\n.col-xs-4 {\n  width: 33.33333%; }\n\n.col-xs-5 {\n  width: 41.66667%; }\n\n.col-xs-6 {\n  width: 50%; }\n\n.col-xs-7 {\n  width: 58.33333%; }\n\n.col-xs-8 {\n  width: 66.66667%; }\n\n.col-xs-9 {\n  width: 75%; }\n\n.col-xs-10 {\n  width: 83.33333%; }\n\n.col-xs-11 {\n  width: 91.66667%; }\n\n.col-xs-12 {\n  width: 100%; }\n\n.col-xs-pull-0 {\n  right: auto; }\n\n.col-xs-pull-1 {\n  right: 8.33333%; }\n\n.col-xs-pull-2 {\n  right: 16.66667%; }\n\n.col-xs-pull-3 {\n  right: 25%; }\n\n.col-xs-pull-4 {\n  right: 33.33333%; }\n\n.col-xs-pull-5 {\n  right: 41.66667%; }\n\n.col-xs-pull-6 {\n  right: 50%; }\n\n.col-xs-pull-7 {\n  right: 58.33333%; }\n\n.col-xs-pull-8 {\n  right: 66.66667%; }\n\n.col-xs-pull-9 {\n  right: 75%; }\n\n.col-xs-pull-10 {\n  right: 83.33333%; }\n\n.col-xs-pull-11 {\n  right: 91.66667%; }\n\n.col-xs-pull-12 {\n  right: 100%; }\n\n.col-xs-push-0 {\n  left: auto; }\n\n.col-xs-push-1 {\n  left: 8.33333%; }\n\n.col-xs-push-2 {\n  left: 16.66667%; }\n\n.col-xs-push-3 {\n  left: 25%; }\n\n.col-xs-push-4 {\n  left: 33.33333%; }\n\n.col-xs-push-5 {\n  left: 41.66667%; }\n\n.col-xs-push-6 {\n  left: 50%; }\n\n.col-xs-push-7 {\n  left: 58.33333%; }\n\n.col-xs-push-8 {\n  left: 66.66667%; }\n\n.col-xs-push-9 {\n  left: 75%; }\n\n.col-xs-push-10 {\n  left: 83.33333%; }\n\n.col-xs-push-11 {\n  left: 91.66667%; }\n\n.col-xs-push-12 {\n  left: 100%; }\n\n.col-xs-offset-0 {\n  margin-left: 0%; }\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%; }\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%; }\n\n.col-xs-offset-3 {\n  margin-left: 25%; }\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%; }\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%; }\n\n.col-xs-offset-6 {\n  margin-left: 50%; }\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%; }\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%; }\n\n.col-xs-offset-9 {\n  margin-left: 75%; }\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%; }\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%; }\n\n.col-xs-offset-12 {\n  margin-left: 100%; }\n\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left; }\n  .col-sm-1 {\n    width: 8.33333%; }\n  .col-sm-2 {\n    width: 16.66667%; }\n  .col-sm-3 {\n    width: 25%; }\n  .col-sm-4 {\n    width: 33.33333%; }\n  .col-sm-5 {\n    width: 41.66667%; }\n  .col-sm-6 {\n    width: 50%; }\n  .col-sm-7 {\n    width: 58.33333%; }\n  .col-sm-8 {\n    width: 66.66667%; }\n  .col-sm-9 {\n    width: 75%; }\n  .col-sm-10 {\n    width: 83.33333%; }\n  .col-sm-11 {\n    width: 91.66667%; }\n  .col-sm-12 {\n    width: 100%; }\n  .col-sm-pull-0 {\n    right: auto; }\n  .col-sm-pull-1 {\n    right: 8.33333%; }\n  .col-sm-pull-2 {\n    right: 16.66667%; }\n  .col-sm-pull-3 {\n    right: 25%; }\n  .col-sm-pull-4 {\n    right: 33.33333%; }\n  .col-sm-pull-5 {\n    right: 41.66667%; }\n  .col-sm-pull-6 {\n    right: 50%; }\n  .col-sm-pull-7 {\n    right: 58.33333%; }\n  .col-sm-pull-8 {\n    right: 66.66667%; }\n  .col-sm-pull-9 {\n    right: 75%; }\n  .col-sm-pull-10 {\n    right: 83.33333%; }\n  .col-sm-pull-11 {\n    right: 91.66667%; }\n  .col-sm-pull-12 {\n    right: 100%; }\n  .col-sm-push-0 {\n    left: auto; }\n  .col-sm-push-1 {\n    left: 8.33333%; }\n  .col-sm-push-2 {\n    left: 16.66667%; }\n  .col-sm-push-3 {\n    left: 25%; }\n  .col-sm-push-4 {\n    left: 33.33333%; }\n  .col-sm-push-5 {\n    left: 41.66667%; }\n  .col-sm-push-6 {\n    left: 50%; }\n  .col-sm-push-7 {\n    left: 58.33333%; }\n  .col-sm-push-8 {\n    left: 66.66667%; }\n  .col-sm-push-9 {\n    left: 75%; }\n  .col-sm-push-10 {\n    left: 83.33333%; }\n  .col-sm-push-11 {\n    left: 91.66667%; }\n  .col-sm-push-12 {\n    left: 100%; }\n  .col-sm-offset-0 {\n    margin-left: 0%; }\n  .col-sm-offset-1 {\n    margin-left: 8.33333%; }\n  .col-sm-offset-2 {\n    margin-left: 16.66667%; }\n  .col-sm-offset-3 {\n    margin-left: 25%; }\n  .col-sm-offset-4 {\n    margin-left: 33.33333%; }\n  .col-sm-offset-5 {\n    margin-left: 41.66667%; }\n  .col-sm-offset-6 {\n    margin-left: 50%; }\n  .col-sm-offset-7 {\n    margin-left: 58.33333%; }\n  .col-sm-offset-8 {\n    margin-left: 66.66667%; }\n  .col-sm-offset-9 {\n    margin-left: 75%; }\n  .col-sm-offset-10 {\n    margin-left: 83.33333%; }\n  .col-sm-offset-11 {\n    margin-left: 91.66667%; }\n  .col-sm-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left; }\n  .col-md-1 {\n    width: 8.33333%; }\n  .col-md-2 {\n    width: 16.66667%; }\n  .col-md-3 {\n    width: 25%; }\n  .col-md-4 {\n    width: 33.33333%; }\n  .col-md-5 {\n    width: 41.66667%; }\n  .col-md-6 {\n    width: 50%; }\n  .col-md-7 {\n    width: 58.33333%; }\n  .col-md-8 {\n    width: 66.66667%; }\n  .col-md-9 {\n    width: 75%; }\n  .col-md-10 {\n    width: 83.33333%; }\n  .col-md-11 {\n    width: 91.66667%; }\n  .col-md-12 {\n    width: 100%; }\n  .col-md-pull-0 {\n    right: auto; }\n  .col-md-pull-1 {\n    right: 8.33333%; }\n  .col-md-pull-2 {\n    right: 16.66667%; }\n  .col-md-pull-3 {\n    right: 25%; }\n  .col-md-pull-4 {\n    right: 33.33333%; }\n  .col-md-pull-5 {\n    right: 41.66667%; }\n  .col-md-pull-6 {\n    right: 50%; }\n  .col-md-pull-7 {\n    right: 58.33333%; }\n  .col-md-pull-8 {\n    right: 66.66667%; }\n  .col-md-pull-9 {\n    right: 75%; }\n  .col-md-pull-10 {\n    right: 83.33333%; }\n  .col-md-pull-11 {\n    right: 91.66667%; }\n  .col-md-pull-12 {\n    right: 100%; }\n  .col-md-push-0 {\n    left: auto; }\n  .col-md-push-1 {\n    left: 8.33333%; }\n  .col-md-push-2 {\n    left: 16.66667%; }\n  .col-md-push-3 {\n    left: 25%; }\n  .col-md-push-4 {\n    left: 33.33333%; }\n  .col-md-push-5 {\n    left: 41.66667%; }\n  .col-md-push-6 {\n    left: 50%; }\n  .col-md-push-7 {\n    left: 58.33333%; }\n  .col-md-push-8 {\n    left: 66.66667%; }\n  .col-md-push-9 {\n    left: 75%; }\n  .col-md-push-10 {\n    left: 83.33333%; }\n  .col-md-push-11 {\n    left: 91.66667%; }\n  .col-md-push-12 {\n    left: 100%; }\n  .col-md-offset-0 {\n    margin-left: 0%; }\n  .col-md-offset-1 {\n    margin-left: 8.33333%; }\n  .col-md-offset-2 {\n    margin-left: 16.66667%; }\n  .col-md-offset-3 {\n    margin-left: 25%; }\n  .col-md-offset-4 {\n    margin-left: 33.33333%; }\n  .col-md-offset-5 {\n    margin-left: 41.66667%; }\n  .col-md-offset-6 {\n    margin-left: 50%; }\n  .col-md-offset-7 {\n    margin-left: 58.33333%; }\n  .col-md-offset-8 {\n    margin-left: 66.66667%; }\n  .col-md-offset-9 {\n    margin-left: 75%; }\n  .col-md-offset-10 {\n    margin-left: 83.33333%; }\n  .col-md-offset-11 {\n    margin-left: 91.66667%; }\n  .col-md-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left; }\n  .col-lg-1 {\n    width: 8.33333%; }\n  .col-lg-2 {\n    width: 16.66667%; }\n  .col-lg-3 {\n    width: 25%; }\n  .col-lg-4 {\n    width: 33.33333%; }\n  .col-lg-5 {\n    width: 41.66667%; }\n  .col-lg-6 {\n    width: 50%; }\n  .col-lg-7 {\n    width: 58.33333%; }\n  .col-lg-8 {\n    width: 66.66667%; }\n  .col-lg-9 {\n    width: 75%; }\n  .col-lg-10 {\n    width: 83.33333%; }\n  .col-lg-11 {\n    width: 91.66667%; }\n  .col-lg-12 {\n    width: 100%; }\n  .col-lg-pull-0 {\n    right: auto; }\n  .col-lg-pull-1 {\n    right: 8.33333%; }\n  .col-lg-pull-2 {\n    right: 16.66667%; }\n  .col-lg-pull-3 {\n    right: 25%; }\n  .col-lg-pull-4 {\n    right: 33.33333%; }\n  .col-lg-pull-5 {\n    right: 41.66667%; }\n  .col-lg-pull-6 {\n    right: 50%; }\n  .col-lg-pull-7 {\n    right: 58.33333%; }\n  .col-lg-pull-8 {\n    right: 66.66667%; }\n  .col-lg-pull-9 {\n    right: 75%; }\n  .col-lg-pull-10 {\n    right: 83.33333%; }\n  .col-lg-pull-11 {\n    right: 91.66667%; }\n  .col-lg-pull-12 {\n    right: 100%; }\n  .col-lg-push-0 {\n    left: auto; }\n  .col-lg-push-1 {\n    left: 8.33333%; }\n  .col-lg-push-2 {\n    left: 16.66667%; }\n  .col-lg-push-3 {\n    left: 25%; }\n  .col-lg-push-4 {\n    left: 33.33333%; }\n  .col-lg-push-5 {\n    left: 41.66667%; }\n  .col-lg-push-6 {\n    left: 50%; }\n  .col-lg-push-7 {\n    left: 58.33333%; }\n  .col-lg-push-8 {\n    left: 66.66667%; }\n  .col-lg-push-9 {\n    left: 75%; }\n  .col-lg-push-10 {\n    left: 83.33333%; }\n  .col-lg-push-11 {\n    left: 91.66667%; }\n  .col-lg-push-12 {\n    left: 100%; }\n  .col-lg-offset-0 {\n    margin-left: 0%; }\n  .col-lg-offset-1 {\n    margin-left: 8.33333%; }\n  .col-lg-offset-2 {\n    margin-left: 16.66667%; }\n  .col-lg-offset-3 {\n    margin-left: 25%; }\n  .col-lg-offset-4 {\n    margin-left: 33.33333%; }\n  .col-lg-offset-5 {\n    margin-left: 41.66667%; }\n  .col-lg-offset-6 {\n    margin-left: 50%; }\n  .col-lg-offset-7 {\n    margin-left: 58.33333%; }\n  .col-lg-offset-8 {\n    margin-left: 66.66667%; }\n  .col-lg-offset-9 {\n    margin-left: 75%; }\n  .col-lg-offset-10 {\n    margin-left: 83.33333%; }\n  .col-lg-offset-11 {\n    margin-left: 91.66667%; }\n  .col-lg-offset-12 {\n    margin-left: 100%; } }\n\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  min-width: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5; }\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold; }\n\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\ninput[type=\"radio\"], input[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal; }\n\ninput[type=\"file\"] {\n  display: block; }\n\ninput[type=\"range\"] {\n  display: block;\n  width: 100%; }\n\nselect[multiple], select[size] {\n  height: auto; }\n\ninput[type=\"file\"]:focus, input[type=\"radio\"]:focus, input[type=\"checkbox\"]:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px; }\n\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555; }\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s; }\n  .form-control:focus {\n    border-color: #66afe9;\n    outline: 0;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6); }\n  .form-control::-moz-placeholder {\n    color: #999;\n    opacity: 1; }\n  .form-control:-ms-input-placeholder {\n    color: #999; }\n  .form-control::-webkit-input-placeholder {\n    color: #999; }\n  .form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {\n    background-color: #eeeeee;\n    opacity: 1; }\n  .form-control[disabled], fieldset[disabled] .form-control {\n    cursor: false; }\n\ntextarea.form-control {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: none; }\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control, input[type=\"time\"].form-control, input[type=\"datetime-local\"].form-control, input[type=\"month\"].form-control {\n    line-height: 34px; }\n  input[type=\"date\"].input-sm, .input-group-sm input[type=\"date\"], input[type=\"time\"].input-sm, .input-group-sm input[type=\"time\"], input[type=\"datetime-local\"].input-sm, .input-group-sm input[type=\"datetime-local\"], input[type=\"month\"].input-sm, .input-group-sm input[type=\"month\"] {\n    line-height: 30px; }\n  input[type=\"date\"].input-lg, .input-group-lg input[type=\"date\"], input[type=\"time\"].input-lg, .input-group-lg input[type=\"time\"], input[type=\"datetime-local\"].input-lg, .input-group-lg input[type=\"datetime-local\"], input[type=\"month\"].input-lg, .input-group-lg input[type=\"month\"] {\n    line-height: 46px; } }\n\n.form-group {\n  margin-bottom: 15px; }\n\n.radio, .checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n  .radio label, .checkbox label {\n    min-height: 20px;\n    padding-left: 20px;\n    margin-bottom: 0;\n    font-weight: normal;\n    cursor: pointer; }\n\n.radio input[type=\"radio\"], .radio-inline input[type=\"radio\"], .checkbox input[type=\"checkbox\"], .checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 4px \\9; }\n\n.radio + .radio, .checkbox + .checkbox {\n  margin-top: -5px; }\n\n.radio-inline, .checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer; }\n\n.radio-inline + .radio-inline, .checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px; }\n\ninput[type=\"radio\"][disabled], input[type=\"radio\"].disabled, fieldset[disabled] input[type=\"radio\"], input[type=\"checkbox\"][disabled], input[type=\"checkbox\"].disabled, fieldset[disabled] input[type=\"checkbox\"] {\n  cursor: false; }\n\n.radio-inline.disabled, fieldset[disabled] .radio-inline, .checkbox-inline.disabled, fieldset[disabled] .checkbox-inline {\n  cursor: false; }\n\n.radio.disabled label, fieldset[disabled] .radio label, .checkbox.disabled label, fieldset[disabled] .checkbox label {\n  cursor: false; }\n\n.form-control-static {\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n  min-height: 34px; }\n  .form-control-static.input-lg, .form-control-static.input-sm {\n    padding-left: 0;\n    padding-right: 0; }\n\n.input-sm {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\nselect.input-sm {\n  height: 30px;\n  line-height: 30px; }\n\ntextarea.input-sm, select[multiple].input-sm {\n  height: auto; }\n\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n.form-group-sm select.form-control {\n  height: 30px;\n  line-height: 30px; }\n.form-group-sm textarea.form-control, .form-group-sm select[multiple].form-control {\n  height: auto; }\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 6px 10px;\n  font-size: 12px;\n  line-height: 1.5; }\n\n.input-lg {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\nselect.input-lg {\n  height: 46px;\n  line-height: 46px; }\n\ntextarea.input-lg, select[multiple].input-lg {\n  height: auto; }\n\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n.form-group-lg select.form-control {\n  height: 46px;\n  line-height: 46px; }\n.form-group-lg textarea.form-control, .form-group-lg select[multiple].form-control {\n  height: auto; }\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 11px 16px;\n  font-size: 18px;\n  line-height: 1.33333; }\n\n.has-feedback {\n  position: relative; }\n  .has-feedback .form-control {\n    padding-right: 42.5px; }\n\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none; }\n\n.input-lg + .form-control-feedback, .input-group-lg + .form-control-feedback, .form-group-lg .form-control + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px; }\n\n.input-sm + .form-control-feedback, .input-group-sm + .form-control-feedback, .form-group-sm .form-control + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px; }\n\n.has-success .help-block, .has-success .control-label, .has-success .radio, .has-success .checkbox, .has-success .radio-inline, .has-success .checkbox-inline, .has-success.radio label, .has-success.checkbox label, .has-success.radio-inline label, .has-success.checkbox-inline label {\n  color: #3c763d; }\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-success .form-control:focus {\n    border-color: #2b542c;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168; }\n.has-success .input-group-addon {\n  color: #3c763d;\n  border-color: #3c763d;\n  background-color: #dff0d8; }\n.has-success .form-control-feedback {\n  color: #3c763d; }\n\n.has-warning .help-block, .has-warning .control-label, .has-warning .radio, .has-warning .checkbox, .has-warning .radio-inline, .has-warning .checkbox-inline, .has-warning.radio label, .has-warning.checkbox label, .has-warning.radio-inline label, .has-warning.checkbox-inline label {\n  color: #8a6d3b; }\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-warning .form-control:focus {\n    border-color: #66512c;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b; }\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  border-color: #8a6d3b;\n  background-color: #fcf8e3; }\n.has-warning .form-control-feedback {\n  color: #8a6d3b; }\n\n.has-error .help-block, .has-error .control-label, .has-error .radio, .has-error .checkbox, .has-error .radio-inline, .has-error .checkbox-inline, .has-error.radio label, .has-error.checkbox label, .has-error.radio-inline label, .has-error.checkbox-inline label {\n  color: #a94442; }\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-error .form-control:focus {\n    border-color: #843534;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483; }\n.has-error .input-group-addon {\n  color: #a94442;\n  border-color: #a94442;\n  background-color: #f2dede; }\n.has-error .form-control-feedback {\n  color: #a94442; }\n\n.has-feedback label ~ .form-control-feedback {\n  top: 25px; }\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0; }\n\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373; }\n\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle; }\n  .form-inline .form-control-static {\n    display: inline-block; }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle; }\n    .form-inline .input-group .input-group-addon, .form-inline .input-group .input-group-btn, .form-inline .input-group .form-control {\n      width: auto; }\n  .form-inline .input-group > .form-control {\n    width: 100%; }\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .radio, .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle; }\n    .form-inline .radio label, .form-inline .checkbox label {\n      padding-left: 0; }\n  .form-inline .radio input[type=\"radio\"], .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0; }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0; } }\n\n.form-horizontal .radio, .form-horizontal .checkbox, .form-horizontal .radio-inline, .form-horizontal .checkbox-inline {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 7px; }\n.form-horizontal .radio, .form-horizontal .checkbox {\n  min-height: 27px; }\n.form-horizontal .form-group {\n  margin-left: -15px;\n  margin-right: -15px; }\n  .form-horizontal .form-group:before, .form-horizontal .form-group:after {\n    content: \" \";\n    display: table; }\n  .form-horizontal .form-group:after {\n    clear: both; }\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    text-align: right;\n    margin-bottom: 0;\n    padding-top: 7px; } }\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px; }\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 14.33333px;\n    font-size: 18px; } }\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 12px; } }\n\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .btn:focus, .btn.focus, .btn:active:focus, .btn:active.focus, .btn.active:focus, .btn.active.focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n  .btn:hover, .btn:focus, .btn.focus {\n    color: #333;\n    text-decoration: none; }\n  .btn:active, .btn.active {\n    outline: 0;\n    background-image: none;\n    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn.disabled, .btn[disabled], fieldset[disabled] .btn {\n    cursor: false;\n    opacity: 0.65;\n    filter: alpha(opacity=65);\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n\na.btn.disabled, fieldset[disabled] a.btn {\n  pointer-events: none; }\n\n.btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc; }\n  .btn-default:focus, .btn-default.focus {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #8c8c8c; }\n  .btn-default:hover {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n  .btn-default:active, .btn-default.active, .open > .btn-default.dropdown-toggle {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n    .btn-default:active:hover, .btn-default:active:focus, .btn-default:active.focus, .btn-default.active:hover, .btn-default.active:focus, .btn-default.active.focus, .open > .btn-default.dropdown-toggle:hover, .open > .btn-default.dropdown-toggle:focus, .open > .btn-default.dropdown-toggle.focus {\n      color: #333;\n      background-color: #d4d4d4;\n      border-color: #8c8c8c; }\n  .btn-default:active, .btn-default.active, .open > .btn-default.dropdown-toggle {\n    background-image: none; }\n  .btn-default.disabled, .btn-default.disabled:hover, .btn-default.disabled:focus, .btn-default.disabled.focus, .btn-default.disabled:active, .btn-default.disabled.active, .btn-default[disabled], .btn-default[disabled]:hover, .btn-default[disabled]:focus, .btn-default[disabled].focus, .btn-default[disabled]:active, .btn-default[disabled].active, fieldset[disabled] .btn-default, fieldset[disabled] .btn-default:hover, fieldset[disabled] .btn-default:focus, fieldset[disabled] .btn-default.focus, fieldset[disabled] .btn-default:active, fieldset[disabled] .btn-default.active {\n    background-color: #fff;\n    border-color: #ccc; }\n  .btn-default .badge {\n    color: #fff;\n    background-color: #333; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4; }\n  .btn-primary:focus, .btn-primary.focus {\n    color: #fff;\n    background-color: #286090;\n    border-color: #122b40; }\n  .btn-primary:hover {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74; }\n  .btn-primary:active, .btn-primary.active, .open > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74; }\n    .btn-primary:active:hover, .btn-primary:active:focus, .btn-primary:active.focus, .btn-primary.active:hover, .btn-primary.active:focus, .btn-primary.active.focus, .open > .btn-primary.dropdown-toggle:hover, .open > .btn-primary.dropdown-toggle:focus, .open > .btn-primary.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #204d74;\n      border-color: #122b40; }\n  .btn-primary:active, .btn-primary.active, .open > .btn-primary.dropdown-toggle {\n    background-image: none; }\n  .btn-primary.disabled, .btn-primary.disabled:hover, .btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary.disabled:active, .btn-primary.disabled.active, .btn-primary[disabled], .btn-primary[disabled]:hover, .btn-primary[disabled]:focus, .btn-primary[disabled].focus, .btn-primary[disabled]:active, .btn-primary[disabled].active, fieldset[disabled] .btn-primary, fieldset[disabled] .btn-primary:hover, fieldset[disabled] .btn-primary:focus, fieldset[disabled] .btn-primary.focus, fieldset[disabled] .btn-primary:active, fieldset[disabled] .btn-primary.active {\n    background-color: #337ab7;\n    border-color: #2e6da4; }\n  .btn-primary .badge {\n    color: #337ab7;\n    background-color: #fff; }\n\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c; }\n  .btn-success:focus, .btn-success.focus {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #255625; }\n  .btn-success:hover {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439; }\n  .btn-success:active, .btn-success.active, .open > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439; }\n    .btn-success:active:hover, .btn-success:active:focus, .btn-success:active.focus, .btn-success.active:hover, .btn-success.active:focus, .btn-success.active.focus, .open > .btn-success.dropdown-toggle:hover, .open > .btn-success.dropdown-toggle:focus, .open > .btn-success.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #398439;\n      border-color: #255625; }\n  .btn-success:active, .btn-success.active, .open > .btn-success.dropdown-toggle {\n    background-image: none; }\n  .btn-success.disabled, .btn-success.disabled:hover, .btn-success.disabled:focus, .btn-success.disabled.focus, .btn-success.disabled:active, .btn-success.disabled.active, .btn-success[disabled], .btn-success[disabled]:hover, .btn-success[disabled]:focus, .btn-success[disabled].focus, .btn-success[disabled]:active, .btn-success[disabled].active, fieldset[disabled] .btn-success, fieldset[disabled] .btn-success:hover, fieldset[disabled] .btn-success:focus, fieldset[disabled] .btn-success.focus, fieldset[disabled] .btn-success:active, fieldset[disabled] .btn-success.active {\n    background-color: #5cb85c;\n    border-color: #4cae4c; }\n  .btn-success .badge {\n    color: #5cb85c;\n    background-color: #fff; }\n\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da; }\n  .btn-info:focus, .btn-info.focus {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #1b6d85; }\n  .btn-info:hover {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #269abc; }\n  .btn-info:active, .btn-info.active, .open > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #269abc; }\n    .btn-info:active:hover, .btn-info:active:focus, .btn-info:active.focus, .btn-info.active:hover, .btn-info.active:focus, .btn-info.active.focus, .open > .btn-info.dropdown-toggle:hover, .open > .btn-info.dropdown-toggle:focus, .open > .btn-info.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #269abc;\n      border-color: #1b6d85; }\n  .btn-info:active, .btn-info.active, .open > .btn-info.dropdown-toggle {\n    background-image: none; }\n  .btn-info.disabled, .btn-info.disabled:hover, .btn-info.disabled:focus, .btn-info.disabled.focus, .btn-info.disabled:active, .btn-info.disabled.active, .btn-info[disabled], .btn-info[disabled]:hover, .btn-info[disabled]:focus, .btn-info[disabled].focus, .btn-info[disabled]:active, .btn-info[disabled].active, fieldset[disabled] .btn-info, fieldset[disabled] .btn-info:hover, fieldset[disabled] .btn-info:focus, fieldset[disabled] .btn-info.focus, fieldset[disabled] .btn-info:active, fieldset[disabled] .btn-info.active {\n    background-color: #5bc0de;\n    border-color: #46b8da; }\n  .btn-info .badge {\n    color: #5bc0de;\n    background-color: #fff; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236; }\n  .btn-warning:focus, .btn-warning.focus {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #985f0d; }\n  .btn-warning:hover {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #d58512; }\n  .btn-warning:active, .btn-warning.active, .open > .btn-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #d58512; }\n    .btn-warning:active:hover, .btn-warning:active:focus, .btn-warning:active.focus, .btn-warning.active:hover, .btn-warning.active:focus, .btn-warning.active.focus, .open > .btn-warning.dropdown-toggle:hover, .open > .btn-warning.dropdown-toggle:focus, .open > .btn-warning.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #d58512;\n      border-color: #985f0d; }\n  .btn-warning:active, .btn-warning.active, .open > .btn-warning.dropdown-toggle {\n    background-image: none; }\n  .btn-warning.disabled, .btn-warning.disabled:hover, .btn-warning.disabled:focus, .btn-warning.disabled.focus, .btn-warning.disabled:active, .btn-warning.disabled.active, .btn-warning[disabled], .btn-warning[disabled]:hover, .btn-warning[disabled]:focus, .btn-warning[disabled].focus, .btn-warning[disabled]:active, .btn-warning[disabled].active, fieldset[disabled] .btn-warning, fieldset[disabled] .btn-warning:hover, fieldset[disabled] .btn-warning:focus, fieldset[disabled] .btn-warning.focus, fieldset[disabled] .btn-warning:active, fieldset[disabled] .btn-warning.active {\n    background-color: #f0ad4e;\n    border-color: #eea236; }\n  .btn-warning .badge {\n    color: #f0ad4e;\n    background-color: #fff; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a; }\n  .btn-danger:focus, .btn-danger.focus {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #761c19; }\n  .btn-danger:hover {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #ac2925; }\n  .btn-danger:active, .btn-danger.active, .open > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #ac2925; }\n    .btn-danger:active:hover, .btn-danger:active:focus, .btn-danger:active.focus, .btn-danger.active:hover, .btn-danger.active:focus, .btn-danger.active.focus, .open > .btn-danger.dropdown-toggle:hover, .open > .btn-danger.dropdown-toggle:focus, .open > .btn-danger.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #ac2925;\n      border-color: #761c19; }\n  .btn-danger:active, .btn-danger.active, .open > .btn-danger.dropdown-toggle {\n    background-image: none; }\n  .btn-danger.disabled, .btn-danger.disabled:hover, .btn-danger.disabled:focus, .btn-danger.disabled.focus, .btn-danger.disabled:active, .btn-danger.disabled.active, .btn-danger[disabled], .btn-danger[disabled]:hover, .btn-danger[disabled]:focus, .btn-danger[disabled].focus, .btn-danger[disabled]:active, .btn-danger[disabled].active, fieldset[disabled] .btn-danger, fieldset[disabled] .btn-danger:hover, fieldset[disabled] .btn-danger:focus, fieldset[disabled] .btn-danger.focus, fieldset[disabled] .btn-danger:active, fieldset[disabled] .btn-danger.active {\n    background-color: #d9534f;\n    border-color: #d43f3a; }\n  .btn-danger .badge {\n    color: #d9534f;\n    background-color: #fff; }\n\n.btn-link {\n  color: #337ab7;\n  font-weight: normal;\n  border-radius: 0; }\n  .btn-link, .btn-link:active, .btn-link.active, .btn-link[disabled], fieldset[disabled] .btn-link {\n    background-color: transparent;\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n  .btn-link, .btn-link:hover, .btn-link:focus, .btn-link:active {\n    border-color: transparent; }\n  .btn-link:hover, .btn-link:focus {\n    color: #23527c;\n    text-decoration: underline;\n    background-color: transparent; }\n  .btn-link[disabled]:hover, .btn-link[disabled]:focus, fieldset[disabled] .btn-link:hover, fieldset[disabled] .btn-link:focus {\n    color: #777777;\n    text-decoration: none; }\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.btn-xs, .btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n\n.btn-block + .btn-block {\n  margin-top: 5px; }\n\ninput[type=\"submit\"].btn-block, input[type=\"reset\"].btn-block, input[type=\"button\"].btn-block {\n  width: 100%; }\n\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent; }\n\n.dropup, .dropdown {\n  position: relative; }\n\n.dropdown-toggle:focus {\n  outline: 0; }\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  background-clip: padding-box; }\n  .dropdown-menu.pull-right {\n    right: 0;\n    left: auto; }\n  .dropdown-menu .divider {\n    height: 1px;\n    margin: 9px 0;\n    overflow: hidden;\n    background-color: #e5e5e5; }\n  .dropdown-menu > li > a {\n    display: block;\n    padding: 3px 20px;\n    clear: both;\n    font-weight: normal;\n    line-height: 1.42857;\n    color: #333333;\n    white-space: nowrap; }\n\n.dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus {\n  text-decoration: none;\n  color: #262626;\n  background-color: #f5f5f5; }\n\n.dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  background-color: #337ab7; }\n\n.dropdown-menu > .disabled > a, .dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus {\n  color: #777777; }\n.dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n  cursor: false; }\n\n.open > .dropdown-menu {\n  display: block; }\n.open > a {\n  outline: 0; }\n\n.dropdown-menu-right {\n  left: auto;\n  right: 0; }\n\n.dropdown-menu-left {\n  left: 0;\n  right: auto; }\n\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857;\n  color: #777777;\n  white-space: nowrap; }\n\n.dropdown-backdrop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 990; }\n\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto; }\n\n.dropup .caret, .navbar-fixed-bottom .dropdown .caret {\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n  content: \"\"; }\n.dropup .dropdown-menu, .navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px; }\n\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto; }\n  .navbar-right .dropdown-menu-left {\n    left: 0;\n    right: auto; } }\n\n.btn-group, .btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle; }\n  .btn-group > .btn, .btn-group-vertical > .btn {\n    position: relative;\n    float: left; }\n    .btn-group > .btn:hover, .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active, .btn-group-vertical > .btn:hover, .btn-group-vertical > .btn:focus, .btn-group-vertical > .btn:active, .btn-group-vertical > .btn.active {\n      z-index: 2; }\n\n.btn-group .btn + .btn, .btn-group .btn + .btn-group, .btn-group .btn-group + .btn, .btn-group .btn-group + .btn-group {\n  margin-left: -1px; }\n\n.btn-toolbar {\n  margin-left: -5px; }\n  .btn-toolbar:before, .btn-toolbar:after {\n    content: \" \";\n    display: table; }\n  .btn-toolbar:after {\n    clear: both; }\n  .btn-toolbar .btn, .btn-toolbar .btn-group, .btn-toolbar .input-group {\n    float: left; }\n  .btn-toolbar > .btn, .btn-toolbar > .btn-group, .btn-toolbar > .input-group {\n    margin-left: 5px; }\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0; }\n\n.btn-group > .btn:first-child {\n  margin-left: 0; }\n  .btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0; }\n\n.btn-group > .btn:last-child:not(:first-child), .btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group > .btn-group {\n  float: left; }\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child, .btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group .dropdown-toggle:active, .btn-group.open .dropdown-toggle {\n  outline: 0; }\n\n.btn-group > .btn + .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px; }\n\n.btn-group > .btn-lg + .dropdown-toggle, .btn-group-lg.btn-group > .btn + .dropdown-toggle {\n  padding-left: 12px;\n  padding-right: 12px; }\n\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn-group.open .dropdown-toggle.btn-link {\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n\n.btn .caret {\n  margin-left: 0; }\n\n.btn-lg .caret, .btn-group-lg > .btn .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0; }\n\n.dropup .btn-lg .caret, .dropup .btn-group-lg > .btn .caret {\n  border-width: 0 5px 5px; }\n\n.btn-group-vertical > .btn, .btn-group-vertical > .btn-group, .btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%; }\n.btn-group-vertical > .btn-group:before, .btn-group-vertical > .btn-group:after {\n  content: \" \";\n  display: table; }\n.btn-group-vertical > .btn-group:after {\n  clear: both; }\n.btn-group-vertical > .btn-group > .btn {\n  float: none; }\n.btn-group-vertical > .btn + .btn, .btn-group-vertical > .btn + .btn-group, .btn-group-vertical > .btn-group + .btn, .btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0; }\n\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0; }\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-bottom-left-radius: 4px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child, .btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate; }\n  .btn-group-justified > .btn, .btn-group-justified > .btn-group {\n    float: none;\n    display: table-cell;\n    width: 1%; }\n  .btn-group-justified > .btn-group .btn {\n    width: 100%; }\n  .btn-group-justified > .btn-group .dropdown-menu {\n    left: auto; }\n\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"], [data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"], [data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"], [data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none; }\n\n/* Common colors */\n*, :after, :before {\n  box-sizing: border-box; }\n\nbody {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  font-size: 14px;\n  font-weight: 300;\n  font-family: \"Open Sans\", sans-serif; }\n\nh1 {\n  font-weight: 300;\n  margin-top: 0;\n  font-size: 2em; }\n\nh2 {\n  font-size: 1.625em;\n  font-weight: 600; }\n\nh3 {\n  font-size: 0.85em;\n  font-weight: 300; }\n\nh4 {\n  font-size: 1em;\n  font-weight: 300; }\n\nheader {\n  border-bottom: 1px solid #e5e5e5; }\n\nfooter {\n  padding-top: 19px;\n  color: #777;\n  border-top: 1px;\n  margin-top: 20px; }\n\nheader, footer {\n  padding-left: 15px;\n  padding-right: 15px; }\n\nnav {\n  top: -20px;\n  height: 90px; }\n\nnav.navbar {\n  margin: 0;\n  padding: 0; }\n\nlabel.space {\n  margin-left: 15px; }\n\n.custom-pull-left {\n  float: left !important; }\n\n.custom-pull-right {\n  float: right !important; }\n\n/*.datetimepicker {\n    .table {\n        tbody>tr>td, tbody>tr>th, tfoot>tr>td, tfoot>tr>th, thead>tr>td, thead>tr>th {\n            padding: 8px;\n            line-height: 1.42em;\n            vertical-align: top;\n        }\n    }\n}*/\n#smartvel .events .list-element {\n  width: 100%;\n  overflow: hidden;\n  display: inline-block;\n  vertical-align: top; }\n#smartvel .events h1 {\n  color: black;\n  padding: 0.5em; }\n#smartvel .events h2 {\n  max-width: 99%; }\n@media (min-width: 768px) {\n  #smartvel .events h1 {\n    font-size: 3.2em; }\n  #smartvel .events h2 {\n    font-size: 1.25em; }\n  #smartvel .events .list-element {\n    width: 50%; } }\n@media (min-width: 992px) {\n  #smartvel .events h1 {\n    font-size: 3.5em; } }\n#smartvel .events .row > div {\n  margin: 0;\n  padding: 0; }\n#smartvel .events .title-cell {\n  height: 175px; }\n\n@media (min-width: 768px) {\n  #smartvel {\n    /* Space out the masthead */\n    /* Remove the padding we set earlier */\n    /* Remove the bottom border on the jumbotron for visual effect */ }\n    #smartvel h1 {\n      font-size: 2.2em; }\n    #smartvel h2 {\n      font-size: 1.625em; }\n    #smartvel h3 {\n      font-size: 0.85em; }\n    #smartvel h4 {\n      font-size: 1em; }\n    #smartvel header {\n      margin-bottom: 30px; }\n    #smartvel header, #smartvel footer {\n      padding-left: 0;\n      padding-right: 0; }\n    #smartvel .contain {\n      max-width: 730px; }\n    #smartvel .jumbotron {\n      border-bottom: 0; }\n    #smartvel .login div.login-header {\n      min-height: 150px; }\n    #smartvel .login-text > h3 {\n      font-size: 3em; }\n    #smartvel .col-offset-05 {\n      margin-left: 4.1667%; }\n    #smartvel #menu.in #menu.collapsing {\n      width: 200px !important; }\n    #smartvel #menu {\n      float: right;\n      margin-top: 27px; } }\n\n@media (min-width: 992px) {\n  #smartvel h1 {\n    font-size: 3em; }\n  #smartvel h2 {\n    font-size: 1.3em; }\n  #smartvel h3 {\n    font-size: 0.85em; }\n  #smartvel h4 {\n    font-size: 0.85em; } }\n", ""]);

/***/ },
/* 17 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(20);
	__webpack_require__(21);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: dropdown.js v3.3.5
	 * http://getbootstrap.com/javascript/#dropdowns
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // DROPDOWN CLASS DEFINITION
	  // =========================

	  var backdrop = '.dropdown-backdrop'
	  var toggle   = '[data-toggle="dropdown"]'
	  var Dropdown = function (element) {
	    $(element).on('click.bs.dropdown', this.toggle)
	  }

	  Dropdown.VERSION = '3.3.5'

	  function getParent($this) {
	    var selector = $this.attr('data-target')

	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }

	    var $parent = selector && $(selector)

	    return $parent && $parent.length ? $parent : $this.parent()
	  }

	  function clearMenus(e) {
	    if (e && e.which === 3) return
	    $(backdrop).remove()
	    $(toggle).each(function () {
	      var $this         = $(this)
	      var $parent       = getParent($this)
	      var relatedTarget = { relatedTarget: this }

	      if (!$parent.hasClass('open')) return

	      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

	      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

	      if (e.isDefaultPrevented()) return

	      $this.attr('aria-expanded', 'false')
	      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
	    })
	  }

	  Dropdown.prototype.toggle = function (e) {
	    var $this = $(this)

	    if ($this.is('.disabled, :disabled')) return

	    var $parent  = getParent($this)
	    var isActive = $parent.hasClass('open')

	    clearMenus()

	    if (!isActive) {
	      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
	        // if mobile we use a backdrop because click events don't delegate
	        $(document.createElement('div'))
	          .addClass('dropdown-backdrop')
	          .insertAfter($(this))
	          .on('click', clearMenus)
	      }

	      var relatedTarget = { relatedTarget: this }
	      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

	      if (e.isDefaultPrevented()) return

	      $this
	        .trigger('focus')
	        .attr('aria-expanded', 'true')

	      $parent
	        .toggleClass('open')
	        .trigger('shown.bs.dropdown', relatedTarget)
	    }

	    return false
	  }

	  Dropdown.prototype.keydown = function (e) {
	    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

	    var $this = $(this)

	    e.preventDefault()
	    e.stopPropagation()

	    if ($this.is('.disabled, :disabled')) return

	    var $parent  = getParent($this)
	    var isActive = $parent.hasClass('open')

	    if (!isActive && e.which != 27 || isActive && e.which == 27) {
	      if (e.which == 27) $parent.find(toggle).trigger('focus')
	      return $this.trigger('click')
	    }

	    var desc = ' li:not(.disabled):visible a'
	    var $items = $parent.find('.dropdown-menu' + desc)

	    if (!$items.length) return

	    var index = $items.index(e.target)

	    if (e.which == 38 && index > 0)                 index--         // up
	    if (e.which == 40 && index < $items.length - 1) index++         // down
	    if (!~index)                                    index = 0

	    $items.eq(index).trigger('focus')
	  }


	  // DROPDOWN PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.dropdown')

	      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
	      if (typeof option == 'string') data[option].call($this)
	    })
	  }

	  var old = $.fn.dropdown

	  $.fn.dropdown             = Plugin
	  $.fn.dropdown.Constructor = Dropdown


	  // DROPDOWN NO CONFLICT
	  // ====================

	  $.fn.dropdown.noConflict = function () {
	    $.fn.dropdown = old
	    return this
	  }


	  // APPLY TO STANDARD DROPDOWN ELEMENTS
	  // ===================================

	  $(document)
	    .on('click.bs.dropdown.data-api', clearMenus)
	    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
	    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
	    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
	    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: tab.js v3.3.5
	 * http://getbootstrap.com/javascript/#tabs
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // TAB CLASS DEFINITION
	  // ====================

	  var Tab = function (element) {
	    // jscs:disable requireDollarBeforejQueryAssignment
	    this.element = $(element)
	    // jscs:enable requireDollarBeforejQueryAssignment
	  }

	  Tab.VERSION = '3.3.5'

	  Tab.TRANSITION_DURATION = 150

	  Tab.prototype.show = function () {
	    var $this    = this.element
	    var $ul      = $this.closest('ul:not(.dropdown-menu)')
	    var selector = $this.data('target')

	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }

	    if ($this.parent('li').hasClass('active')) return

	    var $previous = $ul.find('.active:last a')
	    var hideEvent = $.Event('hide.bs.tab', {
	      relatedTarget: $this[0]
	    })
	    var showEvent = $.Event('show.bs.tab', {
	      relatedTarget: $previous[0]
	    })

	    $previous.trigger(hideEvent)
	    $this.trigger(showEvent)

	    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

	    var $target = $(selector)

	    this.activate($this.closest('li'), $ul)
	    this.activate($target, $target.parent(), function () {
	      $previous.trigger({
	        type: 'hidden.bs.tab',
	        relatedTarget: $this[0]
	      })
	      $this.trigger({
	        type: 'shown.bs.tab',
	        relatedTarget: $previous[0]
	      })
	    })
	  }

	  Tab.prototype.activate = function (element, container, callback) {
	    var $active    = container.find('> .active')
	    var transition = callback
	      && $.support.transition
	      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

	    function next() {
	      $active
	        .removeClass('active')
	        .find('> .dropdown-menu > .active')
	          .removeClass('active')
	        .end()
	        .find('[data-toggle="tab"]')
	          .attr('aria-expanded', false)

	      element
	        .addClass('active')
	        .find('[data-toggle="tab"]')
	          .attr('aria-expanded', true)

	      if (transition) {
	        element[0].offsetWidth // reflow for transition
	        element.addClass('in')
	      } else {
	        element.removeClass('fade')
	      }

	      if (element.parent('.dropdown-menu').length) {
	        element
	          .closest('li.dropdown')
	            .addClass('active')
	          .end()
	          .find('[data-toggle="tab"]')
	            .attr('aria-expanded', true)
	      }

	      callback && callback()
	    }

	    $active.length && transition ?
	      $active
	        .one('bsTransitionEnd', next)
	        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
	      next()

	    $active.removeClass('in')
	  }


	  // TAB PLUGIN DEFINITION
	  // =====================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.tab')

	      if (!data) $this.data('bs.tab', (data = new Tab(this)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.tab

	  $.fn.tab             = Plugin
	  $.fn.tab.Constructor = Tab


	  // TAB NO CONFLICT
	  // ===============

	  $.fn.tab.noConflict = function () {
	    $.fn.tab = old
	    return this
	  }


	  // TAB DATA-API
	  // ============

	  var clickHandler = function (e) {
	    e.preventDefault()
	    Plugin.call($(this), 'show')
	  }

	  $(document)
	    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
	    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap Dropdowns Enhancement: dropdowns-enhancement.js v3.1.1 (Beta 1)
	 * http://behigh.github.io/bootstrap_dropdowns_enhancement/
	 * ========================================================================
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	(function($) {
	    "use strict";

	    var toggle   = '[data-toggle="dropdown"]',
	        disabled = '.disabled, :disabled',
	        backdrop = '.dropdown-backdrop',
	        menuClass = 'dropdown-menu',
	        subMenuClass = 'dropdown-submenu',
	        namespace = '.bs.dropdown.data-api',
	        eventNamespace = '.bs.dropdown',
	        openClass = 'open',
	        touchSupport = 'ontouchstart' in document.documentElement,
	        opened;


	    function Dropdown(element) {
	        $(element).on('click' + eventNamespace, this.toggle)
	    }

	    var proto = Dropdown.prototype;

	    proto.toggle = function(event) {
	        var $element = $(this);

	        if ($element.is(disabled)) return;

	        var $parent = getParent($element);
	        var isActive = $parent.hasClass(openClass);
	        var isSubMenu = $parent.hasClass(subMenuClass);
	        var menuTree = isSubMenu ? getSubMenuParents($parent) : null;

	        closeOpened(event, menuTree);

	        if (!isActive) {
	            if (!menuTree)
	                menuTree = [$parent];

	            if (touchSupport && !$parent.closest('.navbar-nav').length && !menuTree[0].find(backdrop).length) {
	                // if mobile we use a backdrop because click events don't delegate
	                $('<div class="' + backdrop.substr(1) + '"/>').appendTo(menuTree[0]).on('click', closeOpened)
	            }

	            for (var i = 0, s = menuTree.length; i < s; i++) {
	                if (!menuTree[i].hasClass(openClass)) {
	                    menuTree[i].addClass(openClass);
	                    positioning(menuTree[i].children('.' + menuClass), menuTree[i]);
	                }
	            }
	            opened = menuTree[0];
	        }

	        return false;
	    };

	    proto.keydown = function (e) {
	        if (!/(38|40|27)/.test(e.keyCode)) return;

	        var $this = $(this);

	        e.preventDefault();
	        e.stopPropagation();

	        if ($this.is('.disabled, :disabled')) return;

	        var $parent = getParent($this);
	        var isActive = $parent.hasClass('open');

	        if (!isActive || (isActive && e.keyCode == 27)) {
	            if (e.which == 27) $parent.find(toggle).trigger('focus');
	            return $this.trigger('click')
	        }

	        var desc = ' li:not(.divider):visible a';
	        var desc1 = 'li:not(.divider):visible > input:not(disabled) ~ label';
	        var $items = $parent.find(desc1 + ', ' + '[role="menu"]' + desc + ', [role="listbox"]' + desc);

	        if (!$items.length) return;

	        var index = $items.index($items.filter(':focus'));

	        if (e.keyCode == 38 && index > 0)                 index--;                        // up
	        if (e.keyCode == 40 && index < $items.length - 1) index++;                        // down
	        if (!~index)                                      index = 0;

	        $items.eq(index).trigger('focus')
	    };

	    proto.change = function (e) {

	        var
	            $parent,
	            $menu,
	            $toggle,
	            selector,
	            text = '',
	            $items;

	        $menu = $(this).closest('.' + menuClass);

	        $toggle = $menu.parent().find('[data-label-placement]');

	        if (!$toggle || !$toggle.length) {
	            $toggle = $menu.parent().find(toggle);
	        }

	        if (!$toggle || !$toggle.length || $toggle.data('placeholder') === false)
	            return; // do nothing, no control

	        ($toggle.data('placeholder') == undefined && $toggle.data('placeholder', $.trim($toggle.text())));
	        text = $.data($toggle[0], 'placeholder');

	        $items = $menu.find('li > input:checked');

	        if ($items.length) {
	            text = [];
	            $items.each(function () {
	                var str = $(this).parent().find('label').eq(0),
	                    label = str.find('.data-label');

	                if (label.length) {
	                    var p = $('<p></p>');
	                    p.append(label.clone());
	                    str = p.html();
	                }
	                else {
	                    str = str.html();
	                }


	                str && text.push($.trim(str));
	            });

	            text = text.length < 4 ? text.join(', ') : text.length + ' selected';
	        }

	        var caret = $toggle.find('.caret');

	        $toggle.html(text || '&nbsp;');
	        if (caret.length)
	            $toggle.append(' ') && caret.appendTo($toggle);

	    };

	    function positioning($menu, $control) {
	        if ($menu.hasClass('pull-center')) {
	            $menu.css('margin-right', $menu.outerWidth() / -2);
	        }

	        if ($menu.hasClass('pull-middle')) {
	            $menu.css('margin-top', ($menu.outerHeight() / -2) - ($control.outerHeight() / 2));
	        }
	    }

	    function closeOpened(event, menuTree) {
	        if (opened) {

	            if (!menuTree) {
	                menuTree = [opened];
	            }

	            var parent;

	            if (opened[0] !== menuTree[0][0]) {
	                parent = opened;
	            } else {
	                parent = menuTree[menuTree.length - 1];
	                if (parent.parent().hasClass(menuClass)) {
	                    parent = parent.parent();
	                }
	            }

	            parent.find('.' + openClass).removeClass(openClass);

	            if (parent.hasClass(openClass))
	                parent.removeClass(openClass);

	            if (parent === opened) {
	                opened = null;
	                $(backdrop).remove();
	            }
	        }
	    }

	    function getSubMenuParents($submenu) {
	        var result = [$submenu];
	        var $parent;
	        while (!$parent || $parent.hasClass(subMenuClass)) {
	            $parent = ($parent || $submenu).parent();
	            if ($parent.hasClass(menuClass)) {
	                $parent = $parent.parent();
	            }
	            if ($parent.children(toggle)) {
	                result.unshift($parent);
	            }
	        }
	        return result;
	    }

	    function getParent($this) {
	        var selector = $this.attr('data-target');

	        if (!selector) {
	            selector = $this.attr('href');
	            selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, ''); //strip for ie7
	        }

	        var $parent = selector && $(selector);

	        return $parent && $parent.length ? $parent : $this.parent()
	    }

	    // DROPDOWN PLUGIN DEFINITION
	    // ==========================

	    var old = $.fn.dropdown;

	    $.fn.dropdown = function (option) {
	        return this.each(function () {
	            var $this = $(this);
	            var data = $this.data('bs.dropdown');

	            if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)));
	            if (typeof option == 'string') data[option].call($this);
	        })
	    };

	    $.fn.dropdown.Constructor = Dropdown;

	    $.fn.dropdown.clearMenus = function(e) {
	        $(backdrop).remove();
	        $('.' + openClass + ' ' + toggle).each(function () {
	            var $parent = getParent($(this));
	            var relatedTarget = { relatedTarget: this };
	            if (!$parent.hasClass('open')) return;
	            $parent.trigger(e = $.Event('hide' + eventNamespace, relatedTarget));
	            if (e.isDefaultPrevented()) return;
	            $parent.removeClass('open').trigger('hidden' + eventNamespace, relatedTarget);
	        });
	        return this;
	    };


	    // DROPDOWN NO CONFLICT
	    // ====================

	    $.fn.dropdown.noConflict = function () {
	        $.fn.dropdown = old;
	        return this
	    };


	    $(document).off(namespace)
	        .on('click' + namespace, closeOpened)
	        .on('click' + namespace, toggle, proto.toggle)
	        .on('click' + namespace, '.dropdown-menu > li > input[type="checkbox"] ~ label, .dropdown-menu > li > input[type="checkbox"], .dropdown-menu.noclose > li', function (e) {
	            e.stopPropagation()
	        })
	        .on('change' + namespace, '.dropdown-menu > li > input[type="checkbox"], .dropdown-menu > li > input[type="radio"]', proto.change)
	        .on('keydown' + namespace, toggle + ', [role="menu"], [role="listbox"]', proto.keydown)
	}(jQuery));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(25);

	__webpack_require__(26);

	__webpack_require__(27);

	__webpack_require__(24);

	__webpack_require__(28);

	__webpack_require__(29);


/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';
	angular.module('smartvel-common').filter('no_underscores', function() {
	  return function(input) {
	    return input != null ? input.replace(/_/g, ' ') : void 0;
	  };
	});


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	  * @ngdoc filter
	  * @name smartvel.filter:capitalize
	  * @function
	  * @description
	  * # capitalize
	  * Filter in the smartvel.
	 */
	var angular;

	angular = __webpack_require__(5);

	angular.module('smartvel-common').filter('capitalize', function() {
	  return function(input) {
	    var trimmed;
	    trimmed = _.trim(input);
	    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
	  };
	}).filter('capitalize_all', function() {
	  return function(input) {
	    return input != null ? input.replace(/([^\W_]+[^\s-]*) */g, function(txt) {
	      if (_.size(txt) > 1) {
	        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	      } else {
	        return txt.toLowerCase();
	      }
	    }) : void 0;
	  };
	}).filter('capitalize_paragraph', function() {
	  return function(input) {
	    return _.map(input != null ? input.split(".") : void 0, function(phrase) {
	      var trimmed;
	      trimmed = _.trim(phrase);
	      return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
	    }).join('. ');
	  };
	});


/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	angular.module('smartvel-common').filter('safe', function($filter) {
	  return function(input) {
	    return $filter('no_underscores')(input != null ? input.replace(/\*/g, '') : void 0);
	  };
	});


/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';
	angular.module('smartvel-common').filter('take', function() {
	  return function(input, max) {
	    return _.take(input, max);
	  };
	});


/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';
	angular.module('smartvel-common').filter('visible_on_map', function() {
	  return function(markers, bounds) {
	    if (bounds && bounds.southWest) {
	      return _.filter(markers, function(marker) {
	        var ref, ref1;
	        return (marker.type === "event" || marker.type === "place") && marker && marker.lat && marker.lng && ((bounds.southWest.lat < (ref = marker.lat) && ref < bounds.northEast.lat)) && ((bounds.southWest.lng < (ref1 = marker.lng) && ref1 < bounds.northEast.lng));
	      });
	    } else {
	      return markers;
	    }
	  };
	});


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular;

	angular = __webpack_require__(5);

	angular.module('smartvel-common').filter('asReplica', function() {
	  var eventToReplica;
	  eventToReplica = function(event) {
	    if (!event.event) {
	      return {
	        event: event,
	        starts: event.starts,
	        ends: event.ends,
	        region: event.place.region
	      };
	    } else {
	      return event;
	    }
	  };
	  return function(input) {
	    if (Array.isArray(input)) {
	      return _.map(input, eventToReplica);
	    } else {
	      return eventToReplica(input);
	    }
	  };
	}).filter('asEvent', function() {
	  var replicaToEvent;
	  replicaToEvent = function(replica) {
	    return replica.event;
	  };
	  return function(input) {
	    if (Array.isArray(input)) {
	      return _.map(input, replicaToEvent);
	    } else {
	      return replicaToEvent(input);
	    }
	  };
	});


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(32);

	__webpack_require__(33);

	__webpack_require__(34);

	__webpack_require__(35);

	__webpack_require__(36);

	__webpack_require__(38);

	__webpack_require__(39);

	__webpack_require__(31);

	__webpack_require__(40);

	__webpack_require__(41);

	__webpack_require__(42);

	__webpack_require__(43);

	__webpack_require__(44);

	__webpack_require__(45);


/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';
	angular.module('smartvel-common').factory('params', function() {
	  var _getParams, res;
	  res = {};
	  _getParams = function(params) {
	    var activate, force_delete, parent;
	    activate = "";
	    parent = "=";
	    force_delete = "*";
	    if ((res.searchBox == null) && ((params != null ? params.searchBox : void 0) != null) && !(params.searchBox === parent)) {
	      res['searchBox'] = activate;
	    }
	    if ((res.bookParams == null) && ((params != null ? params.bookParams : void 0) != null) && !(params.bookParams === parent)) {
	      res['bookParams'] = params.bookParams;
	    }
	    if ((res.allowTickets == null) && ((params != null ? params.allowTickets : void 0) != null) && !(params.allowTicket === parent)) {
	      res['allowTickets'] = activate;
	    }
	    if ((res.allowTravelplan == null) && ((params != null ? params.allowTravelplan : void 0) != null) && !(params.allowTravelplan === parent)) {
	      res['allowTravelplan'] = activate;
	    }
	    if ((res.latitude == null) && ((params != null ? params.latitude : void 0) != null) && !(params.latitude === parent)) {
	      res['latitude'] = params.latitude;
	    }
	    if ((res.longitude == null) && ((params != null ? params.longitude : void 0) != null) && !(params.longitude === parent)) {
	      res['longitude'] = params.longitude;
	    }
	    if ((res.zoom == null) && ((params != null ? params.zoom : void 0) != null) && !(params.zoom === parent)) {
	      res['zoom'] = params.zoom;
	    }
	    if ((res.showPlaces == null) && ((params != null ? params.showPlaces : void 0) != null) && !(params.showPlaces === parent)) {
	      res['showPlaces'] = activate;
	    }
	    return res;
	  };
	  return {
	    getParams: function(params) {
	      return _getParams(params);
	    }
	  };
	});


/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';
	angular.module('smartvel-common').factory('api', function($http, $q, Session) {
	  var _tokenWrapper, authenticateResource, base_url, request, toUrlParams;
	  base_url = "http://api.smartvel.com/v1";
	  toUrlParams = function(params) {
	    return _.reduce(params, function(acc, values) {
	      if (acc) {
	        return acc + "&" + values[0] + "=" + values[1];
	      } else {
	        return "?" + values[0] + "=" + values[1];
	      }
	    }, '');
	  };
	  request = function(url, params) {
	    var result;
	    if (params == null) {
	      params = [];
	    }
	    result = $q.defer();
	    if (Session.getApiKey()) {
	      params.push(['key', Session.getApiKey()]);
	      result.resolve($http.get("" + base_url + url + (toUrlParams(params))));
	    } else {
	      Session.getToken().then(function(token) {
	        return result.resolve($http.get("" + base_url + url + (toUrlParams(params)), {
	          headers: {
	            Authorization: "Token " + token
	          }
	        }));
	      });
	    }
	    return result.promise;
	  };
	  authenticateResource = function(resource, actions) {
	    var action, i, len, wrappedResource;
	    wrappedResource = resource;
	    for (i = 0, len = actions.length; i < len; i++) {
	      action = actions[i];
	      _tokenWrapper(wrappedResource, action);
	    }
	    return wrappedResource;
	  };
	  _tokenWrapper = function(resource, action) {
	    resource["_" + action] = resource[action];
	    return resource[action] = function(params, success, error) {
	      var result;
	      result = {};
	      if (Session.getApiKey()) {
	        params['key'] = Session.getApiKey();
	        return resource["_" + action](params, success, error);
	      } else {
	        return Session.getToken().then(function(token) {
	          $http.defaults.headers.common['Authorization'] = "Token " + token;
	          result = resource["_" + action](params, success, error);
	          $http.defaults.headers.common['Authorization'] = void 0;
	          return result;
	        });
	      }
	    };
	  };
	  return {
	    request: request,
	    resource: authenticateResource,
	    url: base_url
	  };
	});


/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	/**
	  * @ngdoc service
	  * @name smartvel.customEvents
	  * @description
	  * # customEvents
	  * Service in the smartvel.
	 */
	angular.module('smartvel-common').factory('customEvents', function($resource, $q, api, locale, customPlaces, filters, taxonomies) {
	  var addUserEvent, customEvents, removeUserEvent, retrieveEvents, retrievePlaces, updateUserEvent, userEvents;
	  userEvents = [];
	  customEvents = api.resource($resource(api.url + "/user-events/:id", {
	    id: '@id'
	  }, {
	    query: {
	      isArray: true,
	      method: 'GET',
	      transformResponse: function(data) {
	        var parsed;
	        parsed = JSON.parse(data);
	        return parsed.results;
	      }
	    },
	    update: {
	      method: 'PUT'
	    }
	  }), ['get', 'query', 'save', 'update', 'delete']);
	  addUserEvent = function(event) {
	    userEvents.push(event);
	  };
	  updateUserEvent = function(event) {
	    var index;
	    index = _.map(userEvents, function(userEvent) {
	      if (userEvent.id === event.id) {
	        index = userEvents.indexOf(userEvent);
	        return userEvents[index] = event;
	      }
	    });
	  };
	  removeUserEvent = function(event) {
	    _.remove(userEvents, function(n) {
	      return n.id === event.id;
	    });
	  };
	  retrieveEvents = function(_filters, customParams) {
	    var lang, params, result;
	    if (customParams == null) {
	      customParams = {};
	    }
	    result = $q.defer();
	    lang = locale.currentLang();
	    params = _.defaults(filters.getUrlParams(_filters), customParams, {
	      unrolled: ''
	    });
	    if (_.size(params) === 0 && userEvents.length > 0) {
	      result.resolve(userEvents);
	    } else {
	      customEvents.query(params, function(data) {
	        return taxonomies.request().then(function(taxonomies) {
	          userEvents = _.map(data, function(event) {
	            event.taxonomies = _.filter(taxonomies, function(taxonomy) {
	              return taxonomy.id === event.taxonomies[0];
	            });
	            return event = _.defaults(event, event.translations[lang.abbr]);
	          });
	          return result.resolve(userEvents);
	        });
	      });
	    }
	    return result.promise;
	  };
	  retrievePlaces = function(params) {
	    var places, result;
	    result = $q.defer();
	    if (_.size(params) === 0 && userPlaces.length > 0) {
	      result.resolve(userPlaces);
	    } else {
	      places = customPlaces.query(params, function(data) {
	        return result.resolve(result);
	      });
	    }
	    return result.promise;
	  };
	  return {
	    get: function(id) {
	      return customEvents.get({
	        id: id,
	        unrolled: ''
	      });
	    },
	    all: function() {
	      return retrieveEvents({});
	    },
	    query: retrieveEvents,
	    update: function(event, callback) {
	      if (callback == null) {
	        callback = function() {};
	      }
	      updateUserEvent(event);
	      return event.$update(callback);
	    },
	    create: function(event, callback) {
	      var k, new_event, result, v;
	      if (callback == null) {
	        callback = function() {};
	      }
	      new_event = new customEvents;
	      for (k in event) {
	        v = event[k];
	        new_event[k] = v;
	      }
	      new_event['taxonomies'] = [new_event['taxonomy']];
	      delete new_event['taxonomy'];
	      result = $q.defer();
	      new_event.$save(callback).then(function(event) {
	        result.resolve(event);
	        return addUserEvent(event);
	      });
	      return result.promise;
	    },
	    "delete": function(event, callback) {
	      if (callback == null) {
	        callback = function() {};
	      }
	      removeUserEvent(event);
	      return event.$delete(callback);
	    },
	    deleteBatch: function(events, callback) {
	      var event, i, len, results;
	      if (callback == null) {
	        callback = function() {};
	      }
	      results = [];
	      for (i = 0, len = events.length; i < len; i++) {
	        event = events[i];
	        removeUserEvent(event);
	        results.push(event.$delete(callback));
	      }
	      return results;
	    }
	  };
	});


/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';

	/**
	  * @ngdoc service
	  * @name smartvel.customPlaces
	  * @description
	  * # customPlaces
	  * Service in the smartvel.
	 */
	angular.module('smartvel-common').factory('customPlaces', function($resource, $q, api) {
	  var addUserPlace, customPlaces, removeUserPlace, retrievePlaces, updateUserPlace, userPlaces;
	  userPlaces = [];
	  customPlaces = api.resource($resource(api.url + "/user-places/:id", {
	    id: '@id'
	  }, {
	    query: {
	      isArray: true,
	      method: 'GET',
	      transformResponse: function(data) {
	        var parsed;
	        parsed = JSON.parse(data);
	        return parsed.results;
	      }
	    },
	    update: {
	      method: 'PUT'
	    }
	  }), ['get', 'query', 'save', 'update', 'delete']);
	  addUserPlace = function(place) {
	    userPlaces.push(place);
	  };
	  updateUserPlace = function(place) {
	    var index;
	    index = _.map(userPlaces, function(userPlace) {
	      if (userPlace.id === place.id) {
	        index = userPlaces.indexOf(userPlace);
	        return userPlaces[index] = place;
	      }
	    });
	  };
	  removeUserPlace = function(place) {
	    _.remove(userPlaces, function(n) {
	      return n.id === place.id;
	    });
	  };
	  retrievePlaces = function(params) {
	    var result;
	    result = $q.defer();
	    if (_.size(params) === 0 && userPlaces.length > 0) {
	      result.resolve(userPlaces);
	    } else {
	      customPlaces.query(params, function(places) {
	        userPlaces = places;
	        return result.resolve(userPlaces);
	      });
	    }
	    return result.promise;
	  };
	  return {
	    get: function(id) {
	      return customPlaces.get({
	        id: id
	      });
	    },
	    all: function() {
	      return retrievePlaces({});
	    },
	    query: retrievePlaces,
	    update: function(place) {
	      updateUserPlace(place);
	      return place.$update();
	    },
	    create: function(place) {
	      var k, new_place, result, v;
	      new_place = new customPlaces;
	      for (k in place) {
	        v = place[k];
	        new_place[k] = v;
	      }
	      result = $q.defer();
	      new_place.$save().then(function(place) {
	        result.resolve(place);
	        return addUserPlace(place);
	      });
	      return result.promise;
	    },
	    "delete": function(place) {
	      removeUserPlace(place);
	      return place.$delete();
	    }
	  };
	});


/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';
	angular.module('smartvel-common').factory('events', function($resource, $http, $filter, $q, api, locale, taxonomies, filters) {
	  var base_url, request_events;
	  base_url = "/events/local";
	  request_events = function(_filters) {
	    var result, urlParams;
	    result = $q.defer();
	    urlParams = filters.getUrlParams(_filters);
	    api.request(base_url, urlParams).then(function(response) {
	      return result.resolve(_.map(response.data.results, function(event) {
	        var lang;
	        lang = locale.currentLang();
	        if ((event != null ? event.translations : void 0) && lang) {
	          event = _.defaults(event, event.translations[lang.abbr]);
	        }
	        event.taxonomies = _.map(event.taxonomies, function(taxonomy) {
	          return {
	            name: taxonomies.translate(taxonomy.name)
	          };
	        });
	        return event;
	      }));
	    });
	    return result.promise;
	  };
	  return {
	    request: function(_filters) {
	      return request_events(_filters);
	    }
	  };
	});


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var moment;

	moment = __webpack_require__(37);

	angular.module('smartvel-common').factory('filters', function($filter, $q, taxonomies, regions, locale) {
	  var _getParams, _prepare_region_filters, _prepare_taxonomy_filters, _request_for_events;
	  _getParams = function(filters) {
	    var lang, params, ref, ref1, ref2, ref3;
	    params = [];
	    lang = locale.currentLang();
	    if (lang) {
	      params.push(['lang', lang.abbr]);
	    }
	    if (filters != null ? filters.starts : void 0) {
	      params.push(['starts', $filter('date')(filters.starts, 'MM-dd-yyyy')]);
	    }
	    if (filters != null ? filters.ends : void 0) {
	      params.push(['ends', $filter('date')(filters.ends, 'MM-dd-yyyy')]);
	    }
	    if (filters != null ? filters.region : void 0) {
	      params.push(['region', filters.region.name]);
	    }
	    if ((filters != null ? filters.bounding_box : void 0) && (filters != null ? filters.bounding_box.northEast : void 0)) {
	      params.push(['in_bbox', [[(ref = filters.bounding_box.northEast) != null ? ref.lat : void 0, (ref1 = filters.bounding_box.southWest) != null ? ref1.lng : void 0], [(ref2 = filters.bounding_box.southWest) != null ? ref2.lat : void 0, (ref3 = filters.bounding_box.northEast) != null ? ref3.lng : void 0]]]);
	    }
	    if (filters != null ? filters.taxonomies : void 0) {
	      _.forEach(_.pluck(_.filter(filters.taxonomies, 'selected'), 'code'), function(taxonomy) {
	        return params.push(['taxonomies', taxonomy]);
	      });
	    }
	    if (filters != null ? filters.text : void 0) {
	      params.push(['text', filters.text]);
	    }
	    params.push(['page_size', 250]);
	    return params;
	  };
	  _prepare_taxonomy_filters = function(taxonomies) {
	    if (taxonomies) {
	      return _.map(taxonomies, function(tx) {
	        return {
	          code: tx,
	          selected: true
	        };
	      });
	    }
	  };
	  _prepare_region_filters = function(region) {
	    if (region) {
	      return {
	        name: region
	      };
	    }
	  };
	  _request_for_events = function(forced_data) {
	    var _filters, date;
	    if (forced_data.date_forced !== void 0) {
	      date = moment(forced_data.date_forced, 'YYYY-MM-DD').toDate();
	    } else {
	      date = moment().toDate();
	    }
	    _filters = {
	      taxonomies: [],
	      taxonomies_forced: (forced_data != null ? forced_data.taxonomies_forced : void 0) !== void 0,
	      region: void 0,
	      regions: [],
	      regions_forced: (forced_data != null ? forced_data.regions_forced : void 0) !== void 0,
	      starts: date,
	      ends: date,
	      text: ''
	    };
	    $q.all({
	      taxonomies: taxonomies.request(forced_data != null ? forced_data.taxonomies_forced : void 0),
	      regions: regions.request(forced_data != null ? forced_data.regions_forced : void 0)
	    }).then(function(data) {
	      _filters.taxonomies = data.taxonomies;
	      _filters.regions = data.regions;
	      if (_filters.regions_forced) {
	        return _filters.region = _.head(_filters.regions);
	      }
	    });
	    return _filters;
	  };
	  return {
	    request_for_events: _request_for_events,
	    getUrlParams: _getParams
	  };
	});


/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';
	angular.module('smartvel-common').factory('images', function() {
	  var default_tint_overlay, generic_image, image_generic_index, images, static_url;
	  images = [];
	  image_generic_index = 0;
	  static_url = 'http://static.smartvel.com/images';
	  default_tint_overlay = "linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.5))";
	  generic_image = function() {
	    image_generic_index = (image_generic_index + 1) % 10;
	    return static_url + "/img_generic_" + image_generic_index + ".jpg";
	  };
	  return {
	    next_generic_image: function() {
	      return generic_image();
	    },
	    image_tint: default_tint_overlay
	  };
	});


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var moment;

	moment = __webpack_require__(37);

	angular.module('smartvel-common').factory('locale', function($resource, $translate) {
	  var _availableLanguages, _currentLang, _fallbackLang, currentLang, getAvailableLanguages, setLang;
	  _availableLanguages = {
	    en: {
	      name: "English",
	      abbr: "en",
	      locale: "en_US"
	    },
	    es: {
	      name: "Español",
	      abbr: "es",
	      locale: "es_ES"
	    },
	    de: {
	      name: "Deutsch",
	      abbr: "de",
	      locale: "de_DE"
	    },
	    pt: {
	      name: "Português",
	      abbr: "pt",
	      locale: "pt_PT"
	    },
	    it: {
	      name: "Italiano",
	      abbr: "it",
	      locale: "it_IT"
	    },
	    fr: {
	      name: "Française",
	      abbr: "fr",
	      locale: "fr_FR"
	    },
	    ja: {
	      name: "日本語",
	      abbr: "ja",
	      locale: "ja_JP"
	    },
	    zh: {
	      name: "中國",
	      abbr: "zh",
	      locale: "zh_CN"
	    },
	    ru: {
	      name: "русский",
	      abbr: "ru",
	      locale: "ru_RU"
	    }
	  };
	  _fallbackLang = 'en';
	  _currentLang = _.trunc($translate.use(), {
	    'length': 2,
	    'omission': ''
	  }) || setLang(_fallbackLang);
	  getAvailableLanguages = function() {
	    return _availableLanguages;
	  };
	  setLang = function(lang) {
	    $translate.use(lang);
	    moment.locale(lang);
	    return _currentLang = lang;
	  };
	  currentLang = function() {
	    return _availableLanguages[_currentLang];
	  };
	  $translate.use(_currentLang);
	  moment.locale(_currentLang);
	  return {
	    getAvailableLanguages: getAvailableLanguages,
	    currentLang: currentLang,
	    setLang: setLang
	  };
	});


/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';
	angular.module('smartvel-common').factory('places', function($resource, $http, $filter, $q, api, locale, taxonomies, filters) {
	  var base_url, request_places;
	  base_url = "/places";
	  request_places = function(_filters) {
	    var result, urlParams;
	    result = $q.defer();
	    urlParams = filters.getUrlParams(_filters);
	    api.request(base_url, urlParams).then(function(request) {
	      return result.resolve(_.map(request.data.results, function(place) {
	        var lang;
	        lang = locale.currentLang();
	        if ((place != null ? place.translations : void 0) && lang) {
	          place = _.defaults(place, place.translations[lang.abbr]);
	        }
	        place.taxonomies = _.map(place.taxonomies, function(taxonomy) {
	          return {
	            name: taxonomies.translate(taxonomy.name)
	          };
	        });
	        return place;
	      }));
	    });
	    return result.promise;
	  };
	  return {
	    request: function(_filters) {
	      return request_places(_filters);
	    }
	  };
	});


/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';
	angular.module('smartvel-common').factory('regions', function($q, $filter, api) {
	  var _cache, _prepare_region_filters, _request_regions, url;
	  url = "/regions";
	  _cache = [];
	  _prepare_region_filters = function(regions) {
	    return _.map(regions, function(item) {
	      return {
	        name: $filter('capitalize')((item.name ? item.name : item)),
	        id: item.id,
	        coverage: item.coverage,
	        url: item.url,
	        selected: false
	      };
	    });
	  };
	  _request_regions = function(regions_forced) {
	    var result;
	    result = $q.defer();
	    if (regions_forced) {
	      result.resolve(_prepare_region_filters(regions_forced));
	    } else {
	      api.request(url).then(function(response) {
	        if (_cache.length === 0) {
	          _.each(_prepare_region_filters(response.data.results), function(item) {
	            return _cache.push(item);
	          });
	        }
	        return result.resolve(_cache);
	      });
	    }
	    return result.promise;
	  };
	  return {
	    request: _request_regions
	  };
	});


/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';
	angular.module('smartvel-common').factory('replicas', function($resource, $http, $filter, $q, api, locale, taxonomies, filters) {
	  var base_url, request_replicas;
	  base_url = "/events";
	  request_replicas = function(_filters) {
	    var result, urlParams;
	    result = $q.defer();
	    urlParams = filters.getUrlParams(_filters);
	    api.request(base_url, urlParams).then(function(request) {
	      return result.resolve(_.map(request.data.results, function(replica) {
	        var lang, ref;
	        lang = locale.currentLang();
	        if ((replica != null ? (ref = replica.event) != null ? ref.translations : void 0 : void 0) && lang) {
	          replica.event = _.defaults(replica.event, replica.event.translations[lang.abbr]);
	        }
	        replica.event.taxonomies = _.map(replica.event.taxonomies, function(taxonomy) {
	          return {
	            name: taxonomies.translate(taxonomy.name)
	          };
	        });
	        return replica;
	      }));
	    });
	    return result.promise;
	  };
	  return {
	    request: function(_filters) {
	      return request_replicas(_filters);
	    }
	  };
	});


/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';
	angular.module('smartvel-common').factory('Session', function($http, $location, $cookies, $q, $window) {
	  var _tokenWrapper, addLoginHook, addLogoutHook, apiKey, authenticateResource, getApiKey, getCredentials, getToken, getUser, isLogged, login, loginHooks, logout, logoutHooks, setApiKey, token, token_promise, user;
	  token = $cookies.smartToken;
	  user = $cookies.smartUser;
	  apiKey = null;
	  token_promise = $q.defer();
	  loginHooks = [];
	  logoutHooks = [];
	  login = function(user, password, redirectTo, onError) {
	    var data;
	    if (user == null) {
	      user = "";
	    }
	    if (password == null) {
	      password = "";
	    }
	    if (redirectTo == null) {
	      redirectTo = "/";
	    }
	    if (onError == null) {
	      onError = function() {};
	    }
	    data = {
	      username: user,
	      password: password
	    };
	    $http.post('http://api.smartvel.com/v1/auth/token', data).success(function(data) {
	      token = data.token;
	      $cookies.smartToken = data.token;
	      $cookies.smartUser = user;
	      $location.path(redirectTo);
	      token_promise.resolve(token);
	      _.forEach(loginHooks, function(f) {
	        return f(user, user);
	      });
	    }).error(function(data) {
	      return onError();
	    });
	  };
	  isLogged = function() {
	    return token != null;
	  };
	  getToken = function() {
	    var result;
	    result = $q.defer();
	    if (token) {
	      result.resolve(token);
	    } else {
	      result = token_promise;
	    }
	    return result.promise;
	  };
	  getCredentials = function() {
	    if (isLogged()) {
	      return {
	        Authorization: "Token " + (getToken())
	      };
	    } else {
	      return {};
	    }
	  };
	  getUser = function() {
	    if (isLogged()) {
	      return user;
	    } else {
	      return void 0;
	    }
	  };
	  logout = function() {
	    token = null;
	    delete $cookies.smartToken;
	    delete $cookies.smartUser;
	    $location.path("/login");
	    _.forEach(logoutHooks, function(f) {
	      return f();
	    });
	  };
	  authenticateResource = function(resource, actions) {
	    var action, i, len, wrappedResource;
	    wrappedResource = resource;
	    for (i = 0, len = actions.length; i < len; i++) {
	      action = actions[i];
	      _tokenWrapper(wrappedResource, action);
	    }
	    return wrappedResource;
	  };
	  _tokenWrapper = function(resource, action) {
	    resource["_" + action] = resource[action];
	    return resource[action] = function(params, success, error) {
	      var result;
	      result = {};
	      if (getApiKey()) {
	        params['key'] = getApiKey();
	        return resource["_" + action](params, success, error);
	      } else {
	        return getToken().then(function(token) {
	          $http.defaults.headers.common['Authorization'] = "Token " + token;
	          result = resource["_" + action](data, success, error);
	          $http.defaults.headers.common['Authorization'] = void 0;
	          return result;
	        });
	      }
	    };
	  };
	  setApiKey = function(key) {
	    return apiKey = key;
	  };
	  getApiKey = function() {
	    return apiKey;
	  };
	  addLoginHook = function(f) {
	    return loginHooks.push(f);
	  };
	  addLogoutHook = function(f) {
	    return logoutHooks.push(f);
	  };
	  return {
	    login: login,
	    isLogged: isLogged,
	    getToken: getToken,
	    getCredentials: getCredentials,
	    getUser: getUser,
	    logout: logout,
	    authenticateResource: authenticateResource,
	    setApiKey: setApiKey,
	    getApiKey: getApiKey,
	    addLoginHook: addLoginHook,
	    addLogoutHook: addLogoutHook
	  };
	});


/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';
	angular.module('smartvel-common').factory('taxonomies', function($http, $q, $filter, api, locale) {
	  var _cache, _prepare_taxonomy_filters, _request_taxonomies, base_url;
	  base_url = "/taxonomies";
	  _cache = [];
	  _prepare_taxonomy_filters = function(taxonomies) {
	    if (taxonomies) {
	      return _.map(taxonomies, function(tx) {
	        return {
	          code: tx,
	          selected: true
	        };
	      });
	    }
	  };
	  _request_taxonomies = function(taxonomies_forced) {
	    var taxonomies;
	    taxonomies = $q.defer();
	    if (taxonomies_forced) {
	      taxonomies.resolve(_prepare_taxonomy_filters(taxonomies_forced));
	    } else {
	      if (_cache.length === 0) {
	        api.request(base_url).then(function(response) {
	          if (_cache.length === 0) {
	            _.each(response.data.results, function(item) {
	              return _cache.push({
	                name: $filter('capitalize_all')($filter('no_underscores')(item.translations[locale.currentLang().abbr].name)),
	                code: item.slug,
	                translations: item.translations,
	                id: parseInt(item.url.match(/\/(\d+)$/)[1]),
	                url: item.url,
	                selected: false
	              });
	            });
	          }
	          return taxonomies.resolve(_cache);
	        });
	      } else {
	        taxonomies.resolve(_cache);
	      }
	    }
	    return taxonomies.promise;
	  };
	  return {
	    request: _request_taxonomies,
	    translate: function(taxonomies) {
	      return _.each(taxonomies, function(tx) {
	        if (tx.translations) {
	          return tx.name = tx.translations[locale.currentLang().abbr].name;
	        }
	      });
	    }
	  };
	});


/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';
	angular.module('smartvel-common').factory('travelPlan', function($resource, $http, $filter, $q, Session, locale, taxonomies, filters, customEvents, customPlaces) {
	  var _addEvent, _addPlace, _hasEvent, _hasPlace, _removeEvent, _removePlace, init, travelPlan;
	  travelPlan = {
	    events: {},
	    places: {}
	  };
	  filters = {};
	  init = function() {
	    return $q.all({
	      userEvents: customEvents.query(filters, {
	        show_in_travelplan: ''
	      }),
	      userPlaces: customPlaces.query({
	        show_in_travelplan: ''
	      })
	    }).then(function(data) {
	      travelPlan.events = _.assign(travelPlan.events, _.indexBy(data.userEvents, 'id'));
	      return travelPlan.places = _.assign(travelPlan.places, _.indexBy(data.userPlaces, 'id'));
	    });
	  };
	  _addEvent = function(event) {
	    if (event.id != null) {
	      return travelPlan.events[event.id] = event;
	    }
	  };
	  _hasEvent = function(event) {
	    return _.has(travelPlan.events, event != null ? event.id : void 0);
	  };
	  _removeEvent = function(event) {
	    if (event.id != null) {
	      return delete travelPlan.events[event.id];
	    }
	  };
	  _addPlace = function(place) {
	    if (place.id != null) {
	      return travelPlan.places[place.id] = place;
	    }
	  };
	  _hasPlace = function(place) {
	    return _.has(travelPlan.places, place != null ? place.id : void 0);
	  };
	  _removePlace = function(place) {
	    if (place.id != null) {
	      return delete travelPlan.places[place.id];
	    }
	  };
	  init();
	  return {
	    empty: function() {
	      return _.size(travelPlan.events) === 0 && _.size(travelPlan.places) === 0;
	    },
	    events: travelPlan.events,
	    addEvent: _addEvent,
	    hasEvent: _hasEvent,
	    removeEvent: _removeEvent,
	    places: travelPlan.places,
	    addPlace: _addPlace,
	    hasPlace: _hasPlace,
	    removePlace: _removePlace
	  };
	});


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(47);

	__webpack_require__(48);

	__webpack_require__(49);

	__webpack_require__(50);

	__webpack_require__(51);

	__webpack_require__(52);

	__webpack_require__(53);

	__webpack_require__(54);

	__webpack_require__(55);


/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';
	angular.module('smartvel-common').config(function($translateProvider) {
	  return $translateProvider.translations('de', {
	    COOKIES_TEXT: "Smartvel verwendet Cookies. Wir verwenden Cookies, um Ihren Benutzererlebnis persönlicher zu gestalten und zu untersuchen, wie unsere Website genutzt wird. Sie stimmen zu, unsere Cookies, wenn Sie weiterhin zur Nutzung dieser Website.",
	    CUST_ACTIONS: "Aktionen",
	    CUST_ADD_TO_TRAVELPLAN: "Zu meinen Reiseplan",
	    CUST_ALL_CATEGORIES: "Alle Kategorien",
	    CUST_BOOK_HOTEL: "Hotel buchen",
	    CUST_CONTINUE: "Fortsetzen",
	    CUST_CLOSE: "Zu Schlie\u00dfen",
	    CUST_DELETE: "l\u00f6schen",
	    CUST_DESCRIPTION: "Beschreibung",
	    CUST_EDIT: "bearbeiten",
	    CUST_EVENTS: "GESCHEHEN",
	    CUST_EVENTS_ADD: "Ereignis hinzuf\u00fcgen",
	    CUST_EVENTS_EDIT: "Ereignis bearbeiten",
	    CUST_EVENTS_ENDS: "Enden",
	    CUST_EVENTS_PLACE: "Platz",
	    CUST_EVENTS_STARTS: "Startet",
	    CUST_EVENTS_TAXONOMY: "Taxonomie",
	    CUST_LINK: "Link",
	    CUST_MANUAL: "Datum wählen",
	    CUST_NAME: "Name",
	    CUST_NEXT_MONTH: "Nächsten 30 Tage",
	    CUST_NEXT_WEEK: "Nächste 7 Tage",
	    CUST_PLACES_ADD: "Platz hinzuf\u00fcgen",
	    CUST_PLACES_ADDRESS: "Anschrift",
	    CUST_PLACES_ADDRESS_LONG: "Platz -Adresse",
	    CUST_PLACES_EDIT: "Platz bearbeiten",
	    CUST_PLACES_HEAD: "Meine Orte",
	    CUST_PLACES_LAT: "Breite",
	    CUST_PLACES_LNG: "L\u00e4nge",
	    CUST_PLACES_REGION: "Region",
	    CUST_PURCHASE_TICKETS: "Tickets kaufen",
	    CUST_READ_MORE: "Weiterlesen",
	    CUST_REMOVE_FROM_TRAVELPLAN: "Von meinem Reiseplan entfernen",
	    CUST_SAVE: "Speichern",
	    CUST_SAVE_CHANGES: "\u00c4nderungen speichern",
	    CUST_TODAY: "Heute",
	    CUST_TOMORROW: "Morgen",
	    CUST_WEBSITE: "Webseite",
	    EVENT_FROM: "Von",
	    EVENT_TO: "bis",
	    EVENT_AT: "um",
	    FILTERS_CATEGORIES: "Kategorien:",
	    FILTERS_FROM: "Desde:",
	    FILTERS_REGIONS: "Regionen:",
	    FILTERS_RELOAD: "Neu Laden",
	    FILTERS_TEXT: "Text:",
	    FILTERS_TEXT_PLACEHOLDER: "Fühlen Sie sich frei, das heißt: jazz ...",
	    FILTERS_TO: "bis Zur:",
	    FILTERS_WHEN: "Wann:",
	    INSPIRE_TEXT: "Genie\u00dfen Sie eine einzigartige Erfahrung , wo immer Sie mit Smartvel gehen.",
	    MAIN_CONTACT: "F\u00fcr jeden Bedarf Sie haben, kontaktieren Sie uns unter sales@smartvel.com oder +34 917 55 85 40",
	    MAIN_H1: "ACCESS ALL UNSERE PRODUKTE",
	    MAIN_H2: "REAL SIMULATIONEN AUF IHRE ZIELE",
	    MAIN_H3: "ALLE INFOS SIE",
	    MAIN_H4: "LADEN SIE IHRE EIGENE INHALTE",
	    MAIN_TEXT1: "Jedes Produkt, das hier arbeitet in Echtzeit und mit echten Inhalt",
	    MAIN_TEXT2: "Produkte und Demos werden mit den St\u00e4dte, die Sie uns zur Verf\u00fcgung gestellt konfiguriert. Smartvel derzeit Inhalte auf mehr als hundert St\u00e4dten , zwanzig L\u00e4ndern und drei Kontinenten",
	    MAIN_TEXT3: "Entdecken Sie die Vorteile von jedem Produkt auf unserer Web besser zu verstehen, wie sie Ihre Konvertibilit\u00e4t und den Kundenservice zu verbessern",
	    MAIN_TEXT4: "Wir laden Sie ein, Ihre eigenen Inhalte zu laden und zu \u00fcberpr\u00fcfen, wie Ihre Kunden w\u00fcrde es sehen. Dies k\u00f6nnen Sie im Hauptmen\u00fc unter dem Punkt Einstellungen zu tun",
	    MAIN_WELCOME: 'Willkommen auf der Demo -Site von Smartvel Produkte',
	    NAV_CUST_EVENTS: "Meine Veranstaltungen",
	    NAV_CUST_PLACES: "Meine Adresse",
	    NAV_LOGOUT: "Logout",
	    NAV_MAIN: "Armaturenbrett",
	    NAV_OPTIONS: "Optionen",
	    NAV_SETTINGS: "Einstellungen",
	    NAV_TRAVELPLAN: "Meinem Reiseplan",
	    NAV_CUST_COMPONENTS: "My components",
	    NAV_COMPONENTS: "Web components",
	    NAV_API: "Events API",
	    RESTORE_PASSWD: "Passwort wiederherstellen",
	    RESTORE: "Wiederherstellen",
	    TRAVELPLAN_TEXT: "Meinem Reiseplan"
	  });
	});


/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';
	angular.module('smartvel-common').config(function($translateProvider) {
	  $translateProvider.translations('en', {
	    COOKIES_TEXT: "Smartvel uses cookies. We use cookies to personalize your user experience and to study how our website is being used. You consent to our cookies if you continue to use this website.",
	    CUST_ACTIONS: "Actions",
	    CUST_ADD_TO_TRAVELPLAN: "Add to my travel plan",
	    CUST_ALL_CATEGORIES: "All categories",
	    CUST_BOOK_HOTEL: "Book hotel",
	    CUST_CLOSE: "Close",
	    CUST_CONTINUE: "Continue",
	    CUST_DELETE: "Delete",
	    CUST_DESCRIPTION: "Description",
	    CUST_EDIT: "Edit",
	    CUST_EVENTS: "EVENTS",
	    CUST_EVENTS_ADD: "Add Event",
	    CUST_EVENTS_EDIT: "Edit Event",
	    CUST_EVENTS_ENDS: "Ends",
	    CUST_EVENTS_PLACE: "Place",
	    CUST_EVENTS_STARTS: "Starts",
	    CUST_EVENTS_TAXONOMY: "Taxonomy",
	    CUST_LINK: "Link",
	    CUST_MANUAL: "Choose date",
	    CUST_NAME: "Name",
	    CUST_NEXT_MONTH: "Next 30 days",
	    CUST_NEXT_WEEK: "Next 7 days",
	    CUST_PLACES_ADD: "Add Place",
	    CUST_PLACES_ADDRESS: "Address",
	    CUST_PLACES_ADDRESS_LONG: "Place address",
	    CUST_PLACES_EDIT: "Edit Place",
	    CUST_PLACES_HEAD: "My Places",
	    CUST_PLACES_LAT: "Latitude",
	    CUST_PLACES_LNG: "Longitude",
	    CUST_PLACES_REGION: "Region",
	    CUST_PURCHASE_TICKETS: "Purchase tickets",
	    CUST_READ_MORE: "Read more",
	    CUST_REMOVE_FROM_TRAVELPLAN: "Remove from my travel plan",
	    CUST_SAVE: "Save",
	    CUST_SAVE_CHANGES: "Save changes",
	    CUST_TODAY: "Today",
	    CUST_TOMORROW: "Tomorrow",
	    CUST_WEBSITE: "Website",
	    EVENT_FROM: "From",
	    EVENT_TO: "to",
	    EVENT_AT: "at",
	    FILTERS_CATEGORIES: "Categories:",
	    FILTERS_FROM: "From:",
	    FILTERS_REGIONS: "Regions:",
	    FILTERS_RELOAD: "Reload",
	    FILTERS_TEXT: "Text:",
	    FILTERS_TEXT_PLACEHOLDER: "Feel free, ie: jazz ...",
	    FILTERS_TO: "To:",
	    FILTERS_WHEN: "Where:",
	    INSPIRE_TEXT: "Enjoy a unique experience wherever you go with Smartvel.",
	    MAIN_CONTACT: "For any requirement you may have, please contact us on sales@smartvel.com or on +34 917 55 85 40 or let us know through our support widget on this page",
	    MAIN_H1: "ACCESS ALL OUR PRODUCTS",
	    MAIN_H2: "REAL SIMULATIONS ON YOUR DESTINATIONS",
	    MAIN_H3: "ALL THE INFO YOU NEED",
	    MAIN_H4: "LOAD YOUR OWN CONTENT",
	    MAIN_TEXT1: "Every product available here is working real-time and with real content",
	    MAIN_TEXT2: "Products and demos are configured with the cities you provided us. Smartvel currently has content on more than a hundred cities, twenty countries, and three continents",
	    MAIN_TEXT3: "Find the advantages of every product on our web to better understand how they can improve your convertibility and customer service",
	    MAIN_TEXT4: "We invite you to load your own content and check how your clients would see it. You can do this on the main menu, under the settings option",
	    MAIN_WELCOME: 'Welcome to the Demo Site of Smartvel Products',
	    NAV_CUST_EVENTS: "My Events",
	    NAV_CUST_PLACES: "My Places",
	    NAV_LOGOUT: "Logout",
	    NAV_MAIN: "Dashboard",
	    NAV_OPTIONS: "Options",
	    NAV_SETTINGS: "Settings",
	    NAV_TRAVELPLAN: "My travel plan",
	    NAV_CUST_COMPONENTS: "My components",
	    NAV_COMPONENTS: "Web components",
	    NAV_API: "Events API",
	    RESTORE_PASSWD: "Restore Password",
	    RESTORE: "Restore",
	    TRAVELPLAN_TEXT: "My travel plan"
	  });
	  return $translateProvider.determinePreferredLanguage();
	});


/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';
	angular.module('smartvel-common').config(function($translateProvider) {
	  return $translateProvider.translations('es', {
	    COOKIES_TEXT: "Smartvel usa cookies. Usamos cookies para personalizar su experiencia de usuario y estudiar cómo se usa nuestra web. Al utilizar nuestros servicios, aceptas el uso que hacemos de las cookies.",
	    CUST_ACTIONS: "Acciones",
	    CUST_ADD_TO_TRAVELPLAN: "Añadir a mi plan de viajes",
	    CUST_ALL_CATEGORIES: "Todas las categorías",
	    CUST_BOOK_HOTEL: "Reservar hotel",
	    CUST_CLOSE: "Cerrar",
	    CUST_CONTINUE: "Continuar",
	    CUST_DELETE: "Borrar",
	    CUST_DESCRIPTION: "Descripción",
	    CUST_EDIT: "Editar",
	    CUST_EVENTS: "EVENTOS",
	    CUST_EVENTS_ADD: "Añadir Evento",
	    CUST_EVENTS_EDIT: "Editar Evento",
	    CUST_EVENTS_ENDS: "Acaba",
	    CUST_EVENTS_PLACE: "Lugar",
	    CUST_EVENTS_STARTS: "Empieza",
	    CUST_EVENTS_TAXONOMY: "Taxonomía",
	    CUST_LINK: "Enlace",
	    CUST_MANUAL: "Escoge fecha",
	    CUST_NAME: "Nombre",
	    CUST_NEXT_MONTH: "Próximos 30 días",
	    CUST_NEXT_WEEK: "Próximos 7 días",
	    CUST_PLACES_ADD: "Añadir Lugar",
	    CUST_PLACES_ADDRESS: "Dirección",
	    CUST_PLACES_ADDRESS_LONG: "Dirección del Lugar",
	    CUST_PLACES_EDIT: "Editar Lugar",
	    CUST_PLACES_HEAD: "Mis Lugares",
	    CUST_PLACES_LAT: "Latitud",
	    CUST_PLACES_LNG: "Longitud",
	    CUST_PLACES_REGION: "Región",
	    CUST_PURCHASE_TICKETS: "Comprar entradas",
	    CUST_READ_MORE: "Leer más",
	    CUST_REMOVE_FROM_TRAVELPLAN: "Quitar de mi plan de viajes",
	    CUST_SAVE: "Guardar",
	    CUST_SAVE_CHANGES: "Guardar cambios",
	    CUST_TODAY: "Hoy",
	    CUST_TOMORROW: "Mañana",
	    CUST_WEBSITE: "Página web",
	    EVENT_FROM: "Desde",
	    EVENT_TO: "hasta",
	    EVENT_AT: "a las",
	    FILTERS_CATEGORIES: "Categorías:",
	    FILTERS_FROM: "Desde:",
	    FILTERS_REGIONS: "Regiones:",
	    FILTERS_RELOAD: "Recargar",
	    FILTERS_TEXT: "Texto:",
	    FILTERS_TEXT_PLACEHOLDER: "Superbuscador, ej. Jazz",
	    FILTERS_TO: "Hasta:",
	    FILTERS_WHEN: "Cuándo:",
	    INSPIRE_TEXT: "Disfruta con Smartvel de una experiencia única allá donde vayas.",
	    MAIN_CONTACT: "Cualquier duda o requisito que tengas, por favor contacta con nosotros en sales@smartvel.com o en +34 917 55 85 40 o cuéntanoslo en el icono de soporte",
	    MAIN_H1: "ACCEDE A TODOS NUESTROS PRODUCTOS",
	    MAIN_H2: "SIMULACIONES REALES EN TUS DESTINOS",
	    MAIN_H3: "TODA LA INFORMACIÓN QUE NECESITAS",
	    MAIN_H4: "CARGA TU PROPIO CONTENIDO",
	    MAIN_TEXT1: "Todo el contenido y productos que están aquí disponibles están funcionando en tiempo real, con contenido real y vivo.",
	    MAIN_TEXT2: "Los productos y demos están ajustados a las ciudades que nos has solicitado, Smartvel tiene en la actualidad contenido en más de cien ciudades, veinte países y tres continentes.",
	    MAIN_TEXT3: "Encuentra las ventajas de cada producto en nuestra web para comprender mejor como pueden mejorar tu convertibilidad y servicio al cliente.",
	    MAIN_TEXT4: "Te invitamos a cargar contenido propio y comprobar como quedaría para tus clientes a través del menú principal de la aplicación en “Mis eventos” o “Mis lugares”.",
	    MAIN_WELCOME: 'Bienvenidos a la Web de Demo de los productos de Smartvel.',
	    NAV_CUST_EVENTS: "Mis Eventos",
	    NAV_CUST_PLACES: "Mis Lugares",
	    NAV_LOGOUT: "Salir",
	    NAV_MAIN: "Página Principal",
	    NAV_OPTIONS: "Opciones",
	    NAV_SETTINGS: "Configuración",
	    NAV_TRAVELPLAN: "Mi plan de viajes",
	    NAV_CUST_COMPONENTS: "Mis componentes",
	    NAV_COMPONENTS: "Componentes Web",
	    NAV_API: "API de eventos",
	    RESTORE_PASSWD: "Restaurar contraseña",
	    RESTORE: "Restaurar",
	    TRAVELPLAN_TEXT: "Mi plan de viajes"
	  });
	});


/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';
	angular.module('smartvel-common').config(function($translateProvider) {
	  return $translateProvider.translations('fr', {
	    COOKIES_TEXT: "Smartvel utilise des cookies. Nous utilisons des cookies pour personnaliser votre expérience d'utilisateur et pour étudier comment notre site est utilisé. Si vous continuez votre visite sur ce site, vous consentez à l'utilisation de nos cookies.",
	    CUST_ACTIONS: "actes",
	    CUST_ALL_CATEGORIES: "Toutes catégories",
	    CUST_ADD_TO_TRAVELPLAN: "Ajouter à mon plan de voyage",
	    CUST_BOOK_HOTEL: "Rérserver l'hôtel",
	    CUST_CLOSE: "pr\u00e8s",
	    CUST_CONTINUE: "Continuer",
	    CUST_DELETE: "effacer",
	    CUST_DESCRIPTION: "description",
	    CUST_EDIT: "\u00e9diter",
	    CUST_EVENTS: "ÉVÉNEMENTS",
	    CUST_EVENTS_ADD: "Ajouter \u00e9v\u00e9nement",
	    CUST_EVENTS_EDIT: "Modifier l'\u00e9v\u00e9nement",
	    CUST_EVENTS_ENDS: "extr\u00e9mit\u00e9s",
	    CUST_EVENTS_PLACE: "lieu",
	    CUST_EVENTS_STARTS: "commence",
	    CUST_EVENTS_TAXONOMY: "taxonomie",
	    CUST_LINK: "lien",
	    CUST_MANUAL: "Choisissez une date",
	    CUST_NAME: "nom",
	    CUST_NEXT_MONTH: "Les 30 prochains jours",
	    CUST_NEXT_WEEK: "Les 7 prochains jours",
	    CUST_PLACES_ADD: "Ajouter place",
	    CUST_PLACES_ADDRESS: "adresse",
	    CUST_PLACES_ADDRESS_LONG: "lieu adresse",
	    CUST_PLACES_EDIT: "Modifier Lieu",
	    CUST_PLACES_HEAD: "Mes Lieux",
	    CUST_PLACES_LAT: "latitude",
	    CUST_PLACES_LNG: "longitude",
	    CUST_PLACES_REGION: "r\u00e9gion",
	    CUST_PURCHASE_TICKETS: "Acheter dess tickets",
	    CUST_READ_MORE: "En savoir plus",
	    CUST_REMOVE_FROM_TRAVELPLAN: "Retirer de mon plan de voyage",
	    CUST_SAVE: "Enregistrer",
	    CUST_SAVE_CHANGES: "enregistrer les modifications",
	    CUST_TODAY: "Aujourd'hui",
	    CUST_TOMORROW: "Demain",
	    CUST_WEBSITE: "site Web",
	    EVENT_FROM: "De",
	    EVENT_TO: "au",
	    EVENT_AT: "à",
	    FILTERS_CATEGORIES: "Cat\u00e9gories:",
	    FILTERS_FROM: "De:",
	    FILTERS_REGIONS: "r\u00e9gions:",
	    FILTERS_RELOAD: "recharger",
	    FILTERS_TEXT: "Texte:",
	    FILTERS_TEXT_PLACEHOLDER: "Sentez-vous libre, à savoir: le jazz ...",
	    FILTERS_TO: "Pour:",
	    FILTERS_WHEN: "Quand:",
	    INSPIRE_TEXT: "Vivez une exp\u00e9rience unique o\u00f9 que vous alliez avec Smartvel .",
	    MAIN_CONTACT: "Pour toute demande que vous pourriez avoir , se il vous pla\u00eet nous contacter sur sales@smartvel.com ou +34 917 55 85 40",
	    MAIN_H1: "ACC\u00c8S TOUS NOS PRODUITS",
	    MAIN_H2: "REAL SIMULATIONS SUR VOS DESTINATIONS",
	    MAIN_H3: "TOUTES LES INFOS VOUS AVEZ BESOIN",
	    MAIN_H4: "Chargez votre propre contenu",
	    MAIN_TEXT1: "Chaque produit ici travaille en temps r\u00e9el et avec un contenu r\u00e9el",
	    MAIN_TEXT2: "Produits et d\u00e9mos sont configur\u00e9s avec les villes que vous nous avez fournies . Smartvel dispose actuellement de contenu sur plus d' une centaine de villes, vingt pays et trois continents",
	    MAIN_TEXT3: "Trouver les avantages de chaque produit sur notre site web afin de mieux comprendre comment ils peuvent am\u00e9liorer votre convertibilit\u00e9 et service \u00e0 la client\u00e8le",
	    MAIN_TEXT4: "Nous vous invitons \u00e0 charger votre propre contenu et de v\u00e9rifier la fa\u00e7on dont vos clients verraient . Vous pouvez le faire sur le menu principal, sous l'option Param\u00e8tres",
	    MAIN_WELCOME: "Bienvenue sur le site de d\u00e9monstration de Smartvel Produits",
	    NAV_CUST_EVENTS: "Mes \u00e9v\u00e9nements",
	    NAV_CUST_PLACES: "Mes endroits",
	    NAV_LOGOUT: "D\u00e9connexion",
	    NAV_MAIN: "Tableau de bord",
	    NAV_OPTIONS: "Options",
	    NAV_SETTINGS: "Param\u00e8tres",
	    NAV_TRAVELPLAN: "Mon plan de voyage",
	    NAV_CUST_COMPONENTS: "My components",
	    NAV_COMPONENTS: "Web components",
	    NAV_API: "Events API",
	    RESTORE_PASSWD: "Restaurer mot de passe",
	    RESTORE: "Restaurer",
	    TRAVELPLAN_TEXT: "Mon plan de voyage"
	  });
	});


/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';
	angular.module('smartvel-common').config(function($translateProvider) {
	  return $translateProvider.translations('it', {
	    COOKIES_TEXT: "Smartvel utilizza cookie. Utilizziamo i cookie per personalizzare l' esperienza degli utenti e studiare come viene usato il nostro sito. Continuando ad usare il nostro sito, l' utente accetta il loro uso.",
	    CUST_ACTIONS: "azioni",
	    CUST_ADD_TO_TRAVELPLAN: "Aggiungere al mio piano di viaggio",
	    CUST_ALL_CATEGORIES: "Tutte le categorie",
	    CUST_BOOK_HOTEL: "Prenotare un albergo",
	    CUST_CLOSE: "vicino",
	    CUST_CONTINUE: "Continua",
	    CUST_DELETE: "cancellare",
	    CUST_DESCRIPTION: "descrizione",
	    CUST_EDIT: "Modifica",
	    CUST_EVENTS: "EVENTI",
	    CUST_EVENTS_ADD: "Aggiungi evento",
	    CUST_EVENTS_EDIT: "Modifica evento",
	    CUST_EVENTS_ENDS: "Ends",
	    CUST_EVENTS_PLACE: "luogo",
	    CUST_EVENTS_STARTS: "Inizia",
	    CUST_EVENTS_TAXONOMY: "Tassonomia",
	    CUST_LINK: "collegamento",
	    CUST_MANUAL: "Scegli la data",
	    CUST_NAME: "nome",
	    CUST_NEXT_MONTH: "Prossimi 30 giorni",
	    CUST_NEXT_WEEK: "Prossimi 7 giorni",
	    CUST_PLACES_ADD: "Aggiungi luogo",
	    CUST_PLACES_ADDRESS: "indirizzo",
	    CUST_PLACES_ADDRESS_LONG: "luogo indirizzo",
	    CUST_PLACES_EDIT: "Modifica Luogo",
	    CUST_PLACES_HEAD: "Luoghi",
	    CUST_PLACES_LAT: "latitudine",
	    CUST_PLACES_LNG: "longitudine",
	    CUST_PLACES_REGION: "regione",
	    CUST_PURCHASE_TICKETS: "Acquistare biglietti",
	    CUST_READ_MORE: "Leggi",
	    CUST_REMOVE_FROM_TRAVELPLAN: "Togliere dal mio piano di viaggio",
	    CUST_SAVE: "Salva",
	    CUST_SAVE_CHANGES: "Salva modifiche",
	    CUST_TODAY: "Oggi",
	    CUST_TOMORROW: "Domani",
	    CUST_WEBSITE: "sito web",
	    EVENT_FROM: "Dal",
	    EVENT_TO: "al",
	    EVENT_AT: "alle",
	    FILTERS_CATEGORIES: "Categorie:",
	    FILTERS_FROM: "Da:",
	    FILTERS_REGIONS: "regioni:",
	    FILTERS_RELOAD: "ricaricare",
	    FILTERS_TEXT: "Testo",
	    FILTERS_TEXT_PLACEHOLDER: "Sentiti libero, vale a dire: il jazz ...",
	    FILTERS_TO: "a:",
	    FILTERS_WHEN: "Quando:",
	    INSPIRE_TEXT: "Goditi un'esperienza unica , ovunque tu vada con Smartvel .",
	    MAIN_CONTACT: "Per qualsiasi esigenza doveste avere, non esitate a contattarci su sales@smartvel.com o su +34 917 55 85 40",
	    MAIN_H1: "ACCESSO TUTTI I NOSTRI PRODOTTI",
	    MAIN_H2: "SIMULAZIONI IN REAL TIME DELLE DESTINAZIONI",
	    MAIN_H3: "TUTTE LE INFORMAZIONI DI CUI HAI BISOGNO",
	    MAIN_H4: "CARICARE I PROPRI CONTENUTI",
	    MAIN_TEXT1: "Ogni prodotto qui disponibile funziona in tempo reale e con contenuti reali",
	    MAIN_TEXT2: "I prodotti e le demo sono configurati con le citt\u00e0 che hai scelto. Smartvel ha attualmente contenuti di pi\u00f9 di un centinaio di citt\u00e0 , una ventina di paesi e tre continenti",
	    MAIN_TEXT3: "Trovate i vantaggi di ogni prodotto sul nostro sito web per capire meglio come possono migliorare il servizio al cliente ed il convertion rate",
	    MAIN_TEXT4: "Vi invitiamo a caricare i vostri contenuti e controllare come li vedrebbero i vostri clienti. \u00c8 possibile farlo nel menu principale , sotto l'opzione Impostazioni",
	    MAIN_WELCOME: "Benvenuti nel sito di Demo Smartvel Prodotti",
	    NAV_CUST_EVENTS: "I miei Eventi",
	    NAV_CUST_PLACES: "I miei posti",
	    NAV_LOGOUT: "Logout",
	    NAV_MAIN: "Pagina Principale",
	    NAV_OPTIONS: "Opzioni",
	    NAV_SETTINGS: "Impostazioni",
	    NAV_TRAVELPLAN: "Il mio piano di viaggio",
	    NAV_CUST_COMPONENTS: "My components",
	    NAV_COMPONENTS: "Web components",
	    NAV_API: "Events API",
	    RESTORE_PASSWD: "Recupera password",
	    RESTORE: "Recupera",
	    TRAVELPLAN_TEXT: "Il mio piano di viaggio"
	  });
	});


/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';
	angular.module('smartvel-common').config(function($translateProvider) {
	  return $translateProvider.translations('ja', {
	    COOKIES_TEXT: "Smartvelはクッキーを使用しています。私たちはあなたのユーザー体験をパーソナライズすると、 当社のウェブサイトが使用されているかを研究するためにクッキーを使用しています。 あなたがこのウェブサイトを継続して使用する場合、あなたは私たちのクッキーに同意するものとします。",
	    CUST_ACTIONS: "アクション",
	    CUST_ADD_TO_TRAVELPLAN: "自身の旅行プランに追加します",
	    CUST_ALL_CATEGORIES: "全てのカテゴリー",
	    CUST_BOOK_HOTEL: "ホテル予約",
	    CUST_CLOSE: "閉じる",
	    CUST_CONTINUE: "続ける",
	    CUST_DELETE: "削除",
	    CUST_DESCRIPTION: "説明",
	    CUST_EDIT: "編集",
	    CUST_EVENTS: "イベント",
	    CUST_EVENTS_ADD: "イベントを追加",
	    CUST_EVENTS_EDIT: "イベントを編集",
	    CUST_EVENTS_ENDS: "魔で",
	    CUST_EVENTS_PLACE: "場所",
	    CUST_EVENTS_STARTS: "から",
	    CUST_EVENTS_TAXONOMY: "分類",
	    CUST_LINK: "リン",
	    CUST_MANUAL: "日付を選択してください",
	    CUST_NAME: "名前",
	    CUST_NEXT_MONTH: "次の30日",
	    CUST_NEXT_WEEK: "次の7日",
	    CUST_PLACES_ADD: "場所を追加",
	    CUST_PLACES_ADDRESS: "住所",
	    CUST_PLACES_ADDRESS_LONG: "置き住所",
	    CUST_PLACES_EDIT: "アドレスの編集",
	    CUST_PLACES_HEAD: "私の場所",
	    CUST_PLACES_LAT: "緯度",
	    CUST_PLACES_LNG: "経度",
	    CUST_PLACES_REGION: "地域",
	    CUST_PURCHASE_TICKETS: "購入チケット",
	    CUST_READ_MORE: "続きを読む",
	    CUST_REMOVE_FROM_TRAVELPLAN: "自身の旅行プランから削除します",
	    CUST_SAVE: "保存",
	    CUST_SAVE_CHANGES: "変更を保存します",
	    CUST_TODAY: "今日",
	    CUST_TOMORROW: "明日",
	    CUST_WEBSITE: "ウェブサイト",
	    EVENT_FROM: "From",
	    EVENT_TO: "to",
	    EVENT_AT: "at",
	    FILTERS_CATEGORIES: "種類:",
	    FILTERS_FROM: "から:",
	    FILTERS_REGIONS: "地域:",
	    FILTERS_RELOAD: "補充する",
	    FILTERS_TEXT: "本文:",
	    FILTERS_TEXT_PLACEHOLDER: "自由、すなわち感じ：ジャズ...",
	    FILTERS_TO: "魔で:",
	    FILTERS_WHEN: "いつ:",
	    INSPIRE_TEXT: "あなたがSmartvelでどこへ行ってユニークな体験をお楽しみください。",
	    MAIN_CONTACT: "あなたが持つかもしれない要件については、sales@smartvel.com上または+34917558540 にお問い合わせください。",
	    MAIN_H1: "すべての製品をテストします",
	    MAIN_H2: "あなたの目的地でのリアルなシミュレーション",
	    MAIN_H3: "あなたが必要とするすべての情報",
	    MAIN_H4: "独自のコンテンツをロード",
	    MAIN_TEXT1: "ここで利用可能なすべての製品は、実際のコンテンツにリアルタイムと働いている",
	    MAIN_TEXT2: "製品とデモはあなたが私たちを提供する都市で構成されている。Smartvelは現在、 百以上の都市で、20カ国、3大陸のコンテンツを持ってい",
	    MAIN_TEXT3: "より良い彼らはあなたの兌換性と顧客サービスを向上させることができます方法を理解する ために、当社のウェブ上のすべての製品の長所を探す",
	    MAIN_TEXT4: "私たちは、あなたがあなた自身のコンテンツをロードし、クライアントがそれを見るだろうか 確認することを勧めます。あなたは、設定オプションの下、メインメニューでこれを行うことができます",
	    MAIN_WELCOME: 'Smartvel製品のデモサイトへようこそ',
	    NAV_CUST_EVENTS: "自分のイベント",
	    NAV_CUST_PLACES: "自分の場所",
	    NAV_LOGOUT: "ログアウト",
	    NAV_MAIN: "計器盤",
	    NAV_OPTIONS: "オプション",
	    NAV_SETTINGS: "設定",
	    NAV_TRAVELPLAN: "自身の旅行プラン",
	    NAV_CUST_COMPONENTS: "My components",
	    NAV_COMPONENTS: "Web components",
	    NAV_API: "Events API",
	    RESTORE_PASSWD: "パスワードの復元",
	    RESTORE: "復元",
	    TRAVELPLAN_TEXT: "自身の旅行プラン"
	  });
	});


/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';
	angular.module('smartvel-common').config(function($translateProvider) {
	  return $translateProvider.translations('pt', {
	    COOKIES_TEXT: "Smartvel usar cookies. Nós usamos cookies para personalizar a sua experiência do usuário e para estudar como nosso site está sendo usado. Você concorda com nossos cookies, se você continuar a usar o site.",
	    CUST_ACTIONS: "a\u00e7\u00f5es",
	    CUST_ADD_TO_TRAVELPLAN: "Adicionar ao meu plano de viagem",
	    CUST_ALL_CATEGORIES: "Todas as categorias",
	    CUST_BOOK_HOTEL: "Reserva hotel",
	    CUST_CLOSE: "perto",
	    CUST_CONTINUE: "Continuar",
	    CUST_DELETE: "excluir",
	    CUST_DESCRIPTION: "descri\u00e7\u00e3o",
	    CUST_EDIT: "editar",
	    CUST_EVENTS: "EVENTOS",
	    CUST_EVENTS_ADD: "Adicionar Evento",
	    CUST_EVENTS_EDIT: "Editar evento",
	    CUST_EVENTS_ENDS: "Termina",
	    CUST_EVENTS_PLACE: "lugares",
	    CUST_EVENTS_STARTS: "Inicia",
	    CUST_EVENTS_TAXONOMY: "Taxonomia",
	    CUST_LINK: "link",
	    CUST_MANUAL: "Escolha data",
	    CUST_NAME: "nome",
	    CUST_NEXT_MONTH: "Próximos 30 dias",
	    CUST_NEXT_WEEK: "Próximos 7 dias",
	    CUST_PLACES_ADD: "Adicionar Lugar",
	    CUST_PLACES_ADDRESS: "endere\u00e7o",
	    CUST_PLACES_ADDRESS_LONG: "local endere\u00e7o",
	    CUST_PLACES_EDIT: "Editar Local",
	    CUST_PLACES_HEAD: "Meus Locais",
	    CUST_PLACES_LAT: "latitude",
	    CUST_PLACES_LNG: "longitude",
	    CUST_PLACES_REGION: "regi\u00e3o",
	    CUST_PURCHASE_TICKETS: "Compra de passagens",
	    CUST_READ_MORE: "Leia mais",
	    CUST_REMOVE_FROM_TRAVELPLAN: "Retire do meu plano de viagem",
	    CUST_SAVE: "Salvar",
	    CUST_SAVE_CHANGES: "Salvar altera\u00e7\u00f5es",
	    CUST_TODAY: "Hoje",
	    CUST_TOMORROW: "amanhã",
	    CUST_WEBSITE: "site",
	    EVENT_FROM: "De",
	    EVENT_TO: "a",
	    EVENT_AT: "às",
	    FILTERS_CATEGORIES: "Categorias:",
	    FILTERS_FROM: "A partir de:",
	    FILTERS_REGIONS: "Regi\u00f5es:",
	    FILTERS_RELOAD: "Recarregar",
	    FILTERS_TEXT: "Texto:",
	    FILTERS_TEXT_PLACEHOLDER: "Sinta-se livre, ou seja: jazz ...",
	    FILTERS_TO: "Para:",
	    FILTERS_WHEN: "Quando",
	    INSPIRE_TEXT: "Desfrute de uma experi\u00eancia \u00fanica , onde quer que voc\u00ea v\u00e1 com Smartvel .",
	    MAIN_CONTACT: "Para qualquer exig\u00eancia que possa ter, por favor contacte -nos no sales@smartvel.com ou on +34 917 55 85 40",
	    MAIN_H1: "ACESSO DE TODOS OS NOSSOS PRODUTOS",
	    MAIN_H2: "SIMULA\u00c7\u00d5ES REAL EM SEU DESTINOS",
	    MAIN_H3: "TODA A INFORMA\u00c7\u00c3O QUE VOC\u00ca PRECISA",
	    MAIN_H4: "CARREGAR SEU PR\U00f3PRIO CONTE\U00faDO",
	    MAIN_TEXT1: "Todo o produto dispon\u00edvel aqui est\u00e1 trabalhando em tempo real e com um conte\u00fado real",
	    MAIN_TEXT2: "Produtos e demos s\u00e3o configurados com as cidades que voc\u00ea nos forneceu . Smartvel atualmente tem conte\u00fado em mais de uma centena de cidades, vinte pa\u00edses e tr\u00eas continentes",
	    MAIN_TEXT3: "Encontre as vantagens de cada produto no nosso web para entender melhor como eles podem melhorar a sua conversibilidade e servi\u00e7o ao cliente",
	    MAIN_TEXT4: "N\u00f3s convidamos voc\u00ea a carregar seu pr\u00f3prio conte\u00fado e verificar como seus clientes iria v\u00ea-lo . Voc\u00ea pode fazer isso no menu principal, na op\u00e7\u00e3o de configura\u00e7\u00f5es",
	    MAIN_WELCOME: "Bem-vindo ao site de demonstra\u00e7\u00e3o de produtos Smartvel",
	    NAV_CUST_EVENTS: "Meus eventos",
	    NAV_CUST_PLACES: "Meus lugares",
	    NAV_LOGOUT: "Sair",
	    NAV_MAIN: "Painel de instrumentos",
	    NAV_OPTIONS: "Opções",
	    NAV_SETTINGS: "Defini\u00e7\u00f5es",
	    NAV_TRAVELPLAN: "O meu plano de viagem",
	    NAV_CUST_COMPONENTS: "My components",
	    NAV_COMPONENTS: "Web components",
	    NAV_API: "Events API",
	    RESTORE_PASSWD: "Restaurar senha",
	    RESTORE: "Restaurar",
	    TRAVELPLAN_TEXT: "O meu plano de viagem"
	  });
	});


/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';
	angular.module('smartvel-common').config(function($translateProvider) {
	  return $translateProvider.translations('ru', {
	    COOKIES_TEXT: "Smartvel используем куки. Мы используем куки, чтобы персонализировать свой пользовательский опыт и изучить, как используется наш сайт. Вы соглашаетесь с нашими печенье, если вы будете продолжать использовать этот сайт.",
	    CUST_ACTIONS: "действия",
	    CUST_ADD_TO_TRAVELPLAN: "Добавить в мой план путешествия",
	    CUST_ALL_CATEGORIES: "Все категории",
	    CUST_BOOK_HOTEL: "отель книга",
	    CUST_CLOSE: "близко",
	    CUST_CONTINUE: "продолжать",
	    CUST_DELETE: "удалять",
	    CUST_DESCRIPTION: "описание",
	    CUST_EDIT: "редактировать",
	    CUST_EVENTS: "СОБЫТИЯ",
	    CUST_EVENTS_ADD: "Добавить событие",
	    CUST_EVENTS_EDIT: "Редактировать событие",
	    CUST_EVENTS_ENDS: "концы",
	    CUST_EVENTS_PLACE: "место",
	    CUST_EVENTS_STARTS: "Начинает",
	    CUST_EVENTS_TAXONOMY: "систематика",
	    CUST_LINK: "ссылка",
	    CUST_MANUAL: "Выберите дату",
	    CUST_NAME: "имя",
	    CUST_NEXT_MONTH: "Следующие 30 дней",
	    CUST_NEXT_WEEK: "Следующие 7 дней",
	    CUST_PLACES_ADD: "Добавить место",
	    CUST_PLACES_ADDRESS: "адрес",
	    CUST_PLACES_ADDRESS_LONG: "Место адрес",
	    CUST_PLACES_EDIT: "Редактировать Место",
	    CUST_PLACES_HEAD: "Мои места",
	    CUST_PLACES_LAT: "широта",
	    CUST_PLACES_LNG: "долгота",
	    CUST_PLACES_REGION: "область",
	    CUST_PURCHASE_TICKETS: "Покупка билетов",
	    CUST_READ_MORE: "читать далее",
	    CUST_REMOVE_FROM_TRAVELPLAN: "Удалить из мой план путешествия",
	    CUST_SAVE: "Сохранить",
	    CUST_SAVE_CHANGES: "Сохранить изменения",
	    CUST_TODAY: "сегодня",
	    CUST_TOMORROW: "завтра",
	    CUST_WEBSITE: "сайт",
	    EVENT_FROM: "С",
	    EVENT_TO: "по",
	    EVENT_AT: "в",
	    FILTERS_CATEGORIES: "Категории:",
	    FILTERS_FROM: "от:",
	    FILTERS_REGIONS: "районы:",
	    FILTERS_RELOAD: "перезагружать",
	    FILTERS_TEXT: "текст:",
	    FILTERS_TEXT_PLACEHOLDER: "Не стесняйтесь, а именно: джаз ...",
	    FILTERS_TO: "для:",
	    FILTERS_WHEN: "когда:",
	    INSPIRE_TEXT: "Насладитесь уникальным опытом, где бы вы пойти с Smartvel.",
	    MAIN_CONTACT: "Для любого требования вы можете иметь, пожалуйста, свяжитесь с нами по sales@smartvel.com или на 34 917 55 85 40",
	    MAIN_H1: "Доступ все наши продукты",
	    MAIN_H2: "Реальные моделирования на ваших мест",
	    MAIN_H3: "Все инф вам нужно",
	    MAIN_H4: "Загрузите у вас есть содержание",
	    MAIN_TEXT1: "Каждый продукт можно ознакомиться здесь работает в режиме реального времени и с реальным содержанием",
	    MAIN_TEXT2: "Продукты и демонстрации настроены с городами вы предоставили нам. Smartvel в настоящее время имеет содержание на более чем ста городах, в двадцати странах, и на трех континентах",
	    MAIN_TEXT3: "Найти преимущества каждого продукта на нашем сайте, чтобы лучше понять, как они могут улучшить свою конвертируемости и обслуживания клиентов",
	    MAIN_TEXT4: "Мы приглашаем Вас, чтобы загрузить свое собственное содержание и проверить, как ваши клиенты будут видеть это. Вы можете сделать это в главном меню, в опции настроек",
	    MAIN_WELCOME: 'Добро пожаловать в Демо Сайт Smartvel Продукция',
	    NAV_CUST_EVENTS: "Мои события",
	    NAV_CUST_PLACES: "Мои места",
	    NAV_LOGOUT: "Выход",
	    NAV_MAIN: "приборная панель",
	    NAV_OPTIONS: "опции",
	    NAV_SETTINGS: "настройки",
	    NAV_TRAVELPLAN: "Мой план путешествия",
	    NAV_CUST_COMPONENTS: "My components",
	    NAV_COMPONENTS: "Web components",
	    NAV_API: "Events API",
	    RESTORE_PASSWD: "восстановить пароль",
	    RESTORE: "восстановление",
	    TRAVELPLAN_TEXT: "Мой план путешествия"
	  });
	});


/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';
	angular.module('smartvel-common').config(function($translateProvider) {
	  return $translateProvider.translations('zh', {
	    COOKIES_TEXT: "Smartvel使用cookies。我们使用cookies来个性化您的用户体验， 并研究如何我们网站的使用情况。您同意我们的cookies，如果你继续使用这个网站。",
	    CUST_ACTIONS: "行动",
	    CUST_ADD_TO_TRAVELPLAN: "添加到我的旅游计划",
	    CUST_ALL_CATEGORIES: "所有分类",
	    CUST_BOOK_HOTEL: "预订酒店",
	    CUST_CLOSE: "近",
	    CUST_CONTINUE: "继续",
	    CUST_DELETE: "删除",
	    CUST_DESCRIPTION: "描述",
	    CUST_EDIT: "编辑",
	    CUST_EVENTS: "活动",
	    CUST_EVENTS_ADD: "添加事件",
	    CUST_EVENTS_EDIT: "编辑事件",
	    CUST_EVENTS_ENDS: "完",
	    CUST_EVENTS_PLACE: "地方",
	    CUST_EVENTS_STARTS: "开始",
	    CUST_EVENTS_TAXONOMY: "分类",
	    CUST_LINK: "链接",
	    CUST_MANUAL: "选择日期",
	    CUST_NAME: "名字",
	    CUST_NEXT_MONTH: "未来30天",
	    CUST_NEXT_WEEK: "未来7天",
	    CUST_PLACES_ADD: "添加地区",
	    CUST_PLACES_ADDRESS: "地址",
	    CUST_PLACES_ADDRESS_LONG: "地点地址",
	    CUST_PLACES_EDIT: "编辑的地方",
	    CUST_PLACES_HEAD: "我的位置",
	    CUST_PLACES_LAT: "纬度",
	    CUST_PLACES_LNG: "经度",
	    CUST_PLACES_REGION: "区域",
	    CUST_PURCHASE_TICKETS: "购买门票",
	    CUST_READ_MORE: "阅读更多",
	    CUST_REMOVE_FROM_TRAVELPLAN: "从我的旅行计划中删除",
	    CUST_SAVE: "保存",
	    CUST_SAVE_CHANGES: "保存更改",
	    CUST_TODAY: "今天",
	    CUST_TOMORROW: "明天",
	    CUST_WEBSITE: "网站",
	    EVENT_FROM: "From",
	    EVENT_TO: "to",
	    EVENT_AT: "at",
	    FILTERS_CATEGORIES: "分类:",
	    FILTERS_FROM: "从:",
	    FILTERS_REGIONS: "地区:",
	    FILTERS_RELOAD: "刷新",
	    FILTERS_TEXT: "文本:",
	    FILTERS_TEXT_PLACEHOLDER: "随意，即：爵士...",
	    FILTERS_TO: "到:",
	    FILTERS_WHEN: "什么时候:",
	    INSPIRE_TEXT: "您可以随时随地与Smartvel的独特体验。",
	    MAIN_CONTACT: "对于任何要求，你可能有，请联系我们sales@smartvel.com或+34917558540",
	    MAIN_H1: "试试我们所有的产品",
	    MAIN_H2: "在你的目的地真正模拟",
	    MAIN_H3: "所有你需要的信息",
	    MAIN_H4: "加载自己的内容",
	    MAIN_TEXT1: "可在这里的每一件产品正在实时和实时内容",
	    MAIN_TEXT2: "产品展示和演示都配置了，你提供给我们的城市。Smartvel目前有超过一百个城市， 20个国家和3大洲的内容",
	    MAIN_TEXT3: "找到我们的网站的每一个产品的优势，更好地了解他们如何能提高你的兑换和客户服务",
	    MAIN_TEXT4: "我们邀请您来加载自己的内容，并检查您的客户会怎么看它。你可以这样做在主菜单上， 在设置选项",
	    MAIN_WELCOME: '欢迎来到Smartvel产品的演示站点',
	    NAV_CUST_EVENTS: "我的事件",
	    NAV_CUST_PLACES: "我的地方",
	    NAV_LOGOUT: "注销",
	    NAV_MAIN: "仪表盘",
	    NAV_OPTIONS: "选项",
	    NAV_SETTINGS: "设置",
	    NAV_TRAVELPLAN: "我的旅游计划",
	    NAV_CUST_COMPONENTS: "My components",
	    NAV_COMPONENTS: "Web components",
	    NAV_API: "Events API",
	    RESTORE_PASSWD: "恢复密码",
	    RESTORE: "恢复",
	    TRAVELPLAN_TEXT: "我的旅游计划"
	  });
	});


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(57);

	__webpack_require__(58);

	__webpack_require__(63);

	__webpack_require__(67);

	__webpack_require__(72);

	__webpack_require__(76);

	__webpack_require__(82);


/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';
	angular.module('smartvel-common').directive('smartimg', function(images) {
	  return {
	    restrict: 'C',
	    scope: {
	      pictures: '@'
	    },
	    link: function(scope, element, attrs) {
	      var css_pictures, pictures, ref, ref1;
	      pictures = [(ref = eval(attrs != null ? attrs.pictures : void 0)) != null ? (ref1 = ref.reverse()[0]) != null ? ref1.link : void 0 : void 0] || [];
	      pictures.push(images.next_generic_image());
	      css_pictures = _.map(pictures, function(link) {
	        return "url(" + link + ")";
	      });
	      return element.css({
	        'background-image': (images.image_tint + ", ") + css_pictures.join(', ')
	      });
	    }
	  };
	});


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var moment;

	moment = __webpack_require__(37);

	__webpack_require__(59);

	__webpack_require__(60);

	angular.module('smartvel-common').directive('smtDate', function() {
	  return {
	    template: __webpack_require__(62),
	    restrict: 'E',
	    scope: {
	      starts: '=',
	      ends: '=',
	      period: '@'
	    },
	    link: function(scope, element, attrs) {
	      return scope.controlWidth = attrs["controlWidth"];
	    },
	    controller: function($scope, $filter) {
	      var beforeRender, dateStr, setInitialDates, showDates;
	      setInitialDates = function() {
	        if ($scope.period === 'day') {
	          $scope.viewType = 'CUST_TODAY';
	          $scope.starts = $scope.today;
	          $scope.ends = $scope.today;
	        }
	        if ($scope.period === 'week') {
	          $scope.viewType = 'CUST_NEXT_WEEK';
	          $scope.starts = $scope.today;
	          $scope.ends = $scope.next_week;
	        }
	        if ($scope.period === 'month') {
	          $scope.viewType = 'CUST_NEXT_MONTH';
	          $scope.starts = $scope.today;
	          return $scope.ends = $scope.next_month;
	        }
	      };
	      showDates = false;
	      $scope.viewType = 'CUST_TODAY';
	      angular.extend($scope, {
	        today: moment().toDate(),
	        tomorrow: moment().add(1, 'day').toDate(),
	        next_week: moment().add(1, 'week').toDate(),
	        next_month: moment().add(1, 'month').toDate(),
	        showCalendar: false,
	        showView: function() {
	          return $filter('translate')($scope.viewType) || ((dateStr($scope.starts)) + " - " + (dateStr($scope.ends)));
	        }
	      });
	      setInitialDates();
	      dateStr = function(date) {
	        return $filter('date')(date, 'dd/MM/yyyy');
	      };
	      $scope.changeDate = function(starts, ends, view) {
	        if (view == null) {
	          view = null;
	        }
	        showDates = false;
	        $scope.starts = starts;
	        $scope.ends = ends;
	        $scope.changeView(starts, ends, view);
	      };
	      $scope.toggleView = function() {
	        $scope.showCalendar = !$scope.showCalendar;
	        return showDates = !showDates;
	      };
	      $scope.changeView = function(starts, ends, view) {
	        if (view == null) {
	          view = null;
	        }
	        if (!showDates) {
	          if (view) {
	            return $scope.viewType = view;
	          }
	        } else {
	          return $scope.viewType = null;
	        }
	      };
	      beforeRender = function($dates, date) {
	        var d, day, i, len, minDate, results;
	        minDate = moment(date).format("YYYY-MM-DD");
	        results = [];
	        for (i = 0, len = $dates.length; i < len; i++) {
	          d = $dates[i];
	          day = moment.utc(d.utcDateValue).format("YYYY-MM-DD");
	          if (day < minDate) {
	            results.push(d.selectable = false);
	          } else {
	            results.push(void 0);
	          }
	        }
	        return results;
	      };
	      $scope.beforeRenderStarts = function($dates) {
	        return beforeRender($dates, $scope.today);
	      };
	      $scope.beforeRenderEnds = function($dates) {
	        return beforeRender($dates, $scope.starts);
	      };
	      $scope.$watch('starts', function(newVal, oldVal) {
	        if (showDates) {
	          $scope.ends = newVal;
	        }
	        return $scope.changeView(newVal, $scope.ends);
	      });
	      return $scope.$watch('ends', function(newVal, oldVal) {
	        return $scope.changeView($scope.starts, newVal);
	      });
	    }
	  };
	});


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(jQuery) {/*globals define, jQuery, module, require */
	/*jslint vars:true */

	/**
	 * @license angular-bootstrap-datetimepicker  version: 0.3.13
	 * Copyright 2013-2015 Knight Rider Consulting, Inc. http://www.knightrider.com
	 * License: MIT
	 */

	/**
	 *
	 *    @author        Dale "Ducky" Lotts
	 *    @since        2013-Jul-8
	 */

	(function (factory) {
	  'use strict';
	  /* istanbul ignore if */
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(5), __webpack_require__(37)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    /* istanbul ignore next */
	  } else if (typeof exports === 'object') {
	    module.exports = factory(require('angular'), require('moment')); // CommonJS
	  } else {
	    factory(window.angular, window.moment); // Browser global
	  }
	}(function (angular, moment) {
	  'use strict';
	  angular.module('ui.bootstrap.datetimepicker', [])
	    .constant('dateTimePickerConfig', {
	      dropdownSelector: null,
	      minuteStep: 5,
	      minView: 'minute',
	      startView: 'day'
	    })
	    .directive('datetimepicker', ['$log', 'dateTimePickerConfig', function datetimepickerDirective($log, defaultConfig) {

	      function DateObject() {

	        var tempDate = new Date();
	        var localOffset = tempDate.getTimezoneOffset() * 60000;
	        this.utcDateValue = tempDate.getTime();
	        this.selectable = true;

	        this.localDateValue = function () {
	          return this.utcDateValue + localOffset;
	        };

	        var validProperties = ['utcDateValue', 'localDateValue', 'display', 'active', 'selectable', 'past', 'future'];

	        for (var prop in arguments[0]) {
	          /* istanbul ignore else */
	          //noinspection JSUnfilteredForInLoop
	          if (validProperties.indexOf(prop) >= 0) {
	            //noinspection JSUnfilteredForInLoop
	            this[prop] = arguments[0][prop];
	          }
	        }
	      }

	      var validateConfiguration = function validateConfiguration(configuration) {
	        var validOptions = ['startView', 'minView', 'minuteStep', 'dropdownSelector'];

	        for (var prop in configuration) {
	          //noinspection JSUnfilteredForInLoop
	          if (validOptions.indexOf(prop) < 0) {
	            throw ('invalid option: ' + prop);
	          }
	        }

	        // Order of the elements in the validViews array is significant.
	        var validViews = ['minute', 'hour', 'day', 'month', 'year'];

	        if (validViews.indexOf(configuration.startView) < 0) {
	          throw ('invalid startView value: ' + configuration.startView);
	        }

	        if (validViews.indexOf(configuration.minView) < 0) {
	          throw ('invalid minView value: ' + configuration.minView);
	        }

	        if (validViews.indexOf(configuration.minView) > validViews.indexOf(configuration.startView)) {
	          throw ('startView must be greater than minView');
	        }

	        if (!angular.isNumber(configuration.minuteStep)) {
	          throw ('minuteStep must be numeric');
	        }
	        if (configuration.minuteStep <= 0 || configuration.minuteStep >= 60) {
	          throw ('minuteStep must be greater than zero and less than 60');
	        }
	        if (configuration.dropdownSelector !== null && !angular.isString(configuration.dropdownSelector)) {
	          throw ('dropdownSelector must be a string');
	        }

	        /* istanbul ignore next */
	        if (configuration.dropdownSelector !== null && ((typeof jQuery === 'undefined') || (typeof jQuery().dropdown !== 'function'))) {
	          $log.error('Please DO NOT specify the dropdownSelector option unless you are using jQuery AND Bootstrap.js. ' +
	          'Please include jQuery AND Bootstrap.js, or write code to close the dropdown in the on-set-time callback. \n\n' +
	          'The dropdownSelector configuration option is being removed because it will not function properly.');
	          delete configuration.dropdownSelector;
	        }
	      };

	      return {
	        restrict: 'E',
	        require: 'ngModel',
	        template: '<div class="datetimepicker table-responsive">' +
	        '<table class="table table-striped  {{ data.currentView }}-view">' +
	        '   <thead>' +
	        '       <tr>' +
	        '           <th class="left" data-ng-click="changeView(data.currentView, data.leftDate, $event)" data-ng-show="data.leftDate.selectable"><i class="glyphicon glyphicon-arrow-left"/></th>' +
	        '           <th class="switch" colspan="5" data-ng-show="data.previousViewDate.selectable" data-ng-click="changeView(data.previousView, data.previousViewDate, $event)">{{ data.previousViewDate.display }}</th>' +
	        '           <th class="right" data-ng-click="changeView(data.currentView, data.rightDate, $event)" data-ng-show="data.rightDate.selectable"><i class="glyphicon glyphicon-arrow-right"/></th>' +
	        '       </tr>' +
	        '       <tr>' +
	        '           <th class="dow" data-ng-repeat="day in data.dayNames" >{{ day }}</th>' +
	        '       </tr>' +
	        '   </thead>' +
	        '   <tbody>' +
	        '       <tr data-ng-if="data.currentView !== \'day\'" >' +
	        '           <td colspan="7" >' +
	        '              <span    class="{{ data.currentView }}" ' +
	        '                       data-ng-repeat="dateObject in data.dates"  ' +
	        '                       data-ng-class="{active: dateObject.active, past: dateObject.past, future: dateObject.future, disabled: !dateObject.selectable}" ' +
	        '                       data-ng-click="changeView(data.nextView, dateObject, $event)">{{ dateObject.display }}</span> ' +
	        '           </td>' +
	        '       </tr>' +
	        '       <tr data-ng-if="data.currentView === \'day\'" data-ng-repeat="week in data.weeks">' +
	        '           <td data-ng-repeat="dateObject in week.dates" ' +
	        '               data-ng-click="changeView(data.nextView, dateObject, $event)"' +
	        '               class="day" ' +
	        '               data-ng-class="{active: dateObject.active, past: dateObject.past, future: dateObject.future, disabled: !dateObject.selectable}" >{{ dateObject.display }}</td>' +
	        '       </tr>' +
	        '   </tbody>' +
	        '</table></div>',
	        scope: {
	          onSetTime: '&',
	          beforeRender: '&'
	        },
	        replace: true,
	        link: function link(scope, element, attrs, ngModelController) {

	          var directiveConfig = {};

	          if (attrs.datetimepickerConfig) {
	            directiveConfig = scope.$parent.$eval(attrs.datetimepickerConfig);
	          }

	          var configuration = {};

	          angular.extend(configuration, defaultConfig, directiveConfig);

	          validateConfiguration(configuration);

	          var startOfDecade = function startOfDecade(unixDate) {
	            var startYear = (parseInt(moment.utc(unixDate).year() / 10, 10) * 10);
	            return moment.utc(unixDate).year(startYear).startOf('year');
	          };

	          var dataFactory = {
	            year: function year(unixDate) {
	              var selectedDate = moment.utc(unixDate).startOf('year');
	              // View starts one year before the decade starts and ends one year after the decade ends
	              // i.e. passing in a date of 1/1/2013 will give a range of 2009 to 2020
	              // Truncate the last digit from the current year and subtract 1 to get the start of the decade
	              var startDecade = (parseInt(selectedDate.year() / 10, 10) * 10);
	              var startDate = moment.utc(startOfDecade(unixDate)).subtract(1, 'year').startOf('year');

	              var activeYear = ngModelController.$modelValue ? moment(ngModelController.$modelValue).year() : 0;

	              var result = {
	                'currentView': 'year',
	                'nextView': configuration.minView === 'year' ? 'setTime' : 'month',
	                'previousViewDate': new DateObject({
	                  utcDateValue: null,
	                  display: startDecade + '-' + (startDecade + 9)
	                }),
	                'leftDate': new DateObject({utcDateValue: moment.utc(startDate).subtract(9, 'year').valueOf()}),
	                'rightDate': new DateObject({utcDateValue: moment.utc(startDate).add(11, 'year').valueOf()}),
	                'dates': []
	              };

	              for (var i = 0; i < 12; i += 1) {
	                var yearMoment = moment.utc(startDate).add(i, 'years');
	                var dateValue = {
	                  'utcDateValue': yearMoment.valueOf(),
	                  'display': yearMoment.format('YYYY'),
	                  'past': yearMoment.year() < startDecade,
	                  'future': yearMoment.year() > startDecade + 9,
	                  'active': yearMoment.year() === activeYear
	                };

	                result.dates.push(new DateObject(dateValue));
	              }

	              return result;
	            },

	            month: function month(unixDate) {

	              var startDate = moment.utc(unixDate).startOf('year');
	              var previousViewDate = startOfDecade(unixDate);
	              var activeDate = ngModelController.$modelValue ? moment(ngModelController.$modelValue).format('YYYY-MMM') : 0;

	              var result = {
	                'previousView': 'year',
	                'currentView': 'month',
	                'nextView': configuration.minView === 'month' ? 'setTime' : 'day',
	                'previousViewDate': new DateObject({
	                  utcDateValue: previousViewDate.valueOf(),
	                  display: startDate.format('YYYY')
	                }),
	                'leftDate': new DateObject({utcDateValue: moment.utc(startDate).subtract(1, 'year').valueOf()}),
	                'rightDate': new DateObject({utcDateValue: moment.utc(startDate).add(1, 'year').valueOf()}),
	                'dates': []
	              };

	              for (var i = 0; i < 12; i += 1) {
	                var monthMoment = moment.utc(startDate).add(i, 'months');
	                var dateValue = {
	                  'utcDateValue': monthMoment.valueOf(),
	                  'display': monthMoment.format('MMM'),
	                  'active': monthMoment.format('YYYY-MMM') === activeDate
	                };

	                result.dates.push(new DateObject(dateValue));
	              }

	              return result;
	            },

	            day: function day(unixDate) {

	              var selectedDate = moment.utc(unixDate);
	              var startOfMonth = moment.utc(selectedDate).startOf('month');
	              var previousViewDate = moment.utc(selectedDate).startOf('year');
	              var endOfMonth = moment.utc(selectedDate).endOf('month');

	              var startDate = moment.utc(startOfMonth).subtract(Math.abs(startOfMonth.weekday()), 'days');

	              var activeDate = ngModelController.$modelValue ? moment(ngModelController.$modelValue).format('YYYY-MMM-DD') : '';

	              var result = {
	                'previousView': 'month',
	                'currentView': 'day',
	                'nextView': configuration.minView === 'day' ? 'setTime' : 'hour',
	                'previousViewDate': new DateObject({
	                  utcDateValue: previousViewDate.valueOf(),
	                  display: startOfMonth.format('YYYY-MMM')
	                }),
	                'leftDate': new DateObject({utcDateValue: moment.utc(startOfMonth).subtract(1, 'months').valueOf()}),
	                'rightDate': new DateObject({utcDateValue: moment.utc(startOfMonth).add(1, 'months').valueOf()}),
	                'dayNames': [],
	                'weeks': []
	              };


	              for (var dayNumber = 0; dayNumber < 7; dayNumber += 1) {
	                result.dayNames.push(moment.utc().weekday(dayNumber).format('dd'));
	              }

	              for (var i = 0; i < 6; i += 1) {
	                var week = {dates: []};
	                for (var j = 0; j < 7; j += 1) {
	                  var monthMoment = moment.utc(startDate).add((i * 7) + j, 'days');
	                  var dateValue = {
	                    'utcDateValue': monthMoment.valueOf(),
	                    'display': monthMoment.format('D'),
	                    'active': monthMoment.format('YYYY-MMM-DD') === activeDate,
	                    'past': monthMoment.isBefore(startOfMonth),
	                    'future': monthMoment.isAfter(endOfMonth)
	                  };
	                  week.dates.push(new DateObject(dateValue));
	                }
	                result.weeks.push(week);
	              }

	              return result;
	            },

	            hour: function hour(unixDate) {
	              var selectedDate = moment.utc(unixDate).startOf('day');
	              var previousViewDate = moment.utc(selectedDate).startOf('month');

	              var activeFormat = ngModelController.$modelValue ? moment(ngModelController.$modelValue).format('YYYY-MM-DD H') : '';

	              var result = {
	                'previousView': 'day',
	                'currentView': 'hour',
	                'nextView': configuration.minView === 'hour' ? 'setTime' : 'minute',
	                'previousViewDate': new DateObject({
	                  utcDateValue: previousViewDate.valueOf(),
	                  display: selectedDate.format('ll')
	                }),
	                'leftDate': new DateObject({utcDateValue: moment.utc(selectedDate).subtract(1, 'days').valueOf()}),
	                'rightDate': new DateObject({utcDateValue: moment.utc(selectedDate).add(1, 'days').valueOf()}),
	                'dates': []
	              };

	              for (var i = 0; i < 24; i += 1) {
	                var hourMoment = moment.utc(selectedDate).add(i, 'hours');
	                var dateValue = {
	                  'utcDateValue': hourMoment.valueOf(),
	                  'display': hourMoment.format('LT'),
	                  'active': hourMoment.format('YYYY-MM-DD H') === activeFormat
	                };

	                result.dates.push(new DateObject(dateValue));
	              }

	              return result;
	            },

	            minute: function minute(unixDate) {
	              var selectedDate = moment.utc(unixDate).startOf('hour');
	              var previousViewDate = moment.utc(selectedDate).startOf('day');
	              var activeFormat = ngModelController.$modelValue ? moment(ngModelController.$modelValue).format('YYYY-MM-DD H:mm') : '';

	              var result = {
	                'previousView': 'hour',
	                'currentView': 'minute',
	                'nextView': 'setTime',
	                'previousViewDate': new DateObject({
	                  utcDateValue: previousViewDate.valueOf(),
	                  display: selectedDate.format('lll')
	                }),
	                'leftDate': new DateObject({utcDateValue: moment.utc(selectedDate).subtract(1, 'hours').valueOf()}),
	                'rightDate': new DateObject({utcDateValue: moment.utc(selectedDate).add(1, 'hours').valueOf()}),
	                'dates': []
	              };

	              var limit = 60 / configuration.minuteStep;

	              for (var i = 0; i < limit; i += 1) {
	                var hourMoment = moment.utc(selectedDate).add(i * configuration.minuteStep, 'minute');
	                var dateValue = {
	                  'utcDateValue': hourMoment.valueOf(),
	                  'display': hourMoment.format('LT'),
	                  'active': hourMoment.format('YYYY-MM-DD H:mm') === activeFormat
	                };

	                result.dates.push(new DateObject(dateValue));
	              }

	              return result;
	            },

	            setTime: function setTime(unixDate) {
	              var tempDate = new Date(unixDate);
	              var newDate = new Date(tempDate.getTime() + (tempDate.getTimezoneOffset() * 60000));

	              var oldDate = ngModelController.$modelValue;
	              ngModelController.$setViewValue(newDate);

	              if (configuration.dropdownSelector) {
	                jQuery(configuration.dropdownSelector).dropdown('toggle');
	              }

	              scope.onSetTime({newDate: newDate, oldDate: oldDate});

	              return dataFactory[configuration.startView](unixDate);
	            }
	          };

	          var getUTCTime = function getUTCTime(modelValue) {
	            var tempDate = (modelValue ? moment(modelValue).toDate() : new Date());
	            return tempDate.getTime() - (tempDate.getTimezoneOffset() * 60000);
	          };

	          scope.changeView = function changeView(viewName, dateObject, event) {
	            if (event) {
	              event.stopPropagation();
	              event.preventDefault();
	            }

	            if (viewName && (dateObject.utcDateValue > -Infinity) && dateObject.selectable && dataFactory[viewName]) {
	              var result = dataFactory[viewName](dateObject.utcDateValue);

	              var weekDates = [];
	              if (result.weeks) {
	                for (var i = 0; i < result.weeks.length; i += 1) {
	                  var week = result.weeks[i];
	                  for (var j = 0; j < week.dates.length; j += 1) {
	                    var weekDate = week.dates[j];
	                    weekDates.push(weekDate);
	                  }
	                }
	              }

	              scope.beforeRender({
	                $view: result.currentView,
	                $dates: result.dates || weekDates,
	                $leftDate: result.leftDate,
	                $upDate: result.previousViewDate,
	                $rightDate: result.rightDate
	              });

	              scope.data = result;
	            }
	          };

	          ngModelController.$render = function $render() {
	            scope.changeView(configuration.startView, new DateObject({utcDateValue: getUTCTime(ngModelController.$viewValue)}));
	          };
	        }
	      };
	    }]);
	}));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },
/* 60 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 61 */,
/* 62 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"searchbox-field starts\"\n  style=\"width: {{ control_width }};\">\n\n    <div class=\"btn-group\">\n        <button class=\"btn btn-default control\"\n                id=\"dropdown-to\"\n                data-placeholder=\"false\"\n                data-toggle=\"dropdown\"\n                data-label-placement>\n                {{ showView() }}\n            <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\">\n            <li>\n                <input type=\"checkbox\">\n                <label ng-click=\"changeDate(today, today, 'CUST_TODAY')\">\n                    {{'CUST_TODAY' | translate}}\n                </label>\n            </li>\n            <li>\n                <input type=\"checkbox\">\n                <label ng-click=\"changeDate(today, next_week, 'CUST_NEXT_WEEK')\">\n                    {{'CUST_NEXT_WEEK' | translate}}\n                </label>\n            </li>\n            <li>\n                <input type=\"checkbox\">\n                <label ng-click=\"changeDate(today, next_month, 'CUST_NEXT_MONTH')\">\n                    {{'CUST_NEXT_MONTH' | translate}}\n                </label>\n            </li>\n            <li>\n                <input type=\"checkbox\">\n                <label ng-click=\"toggleView();changeView(starts, ends);$event.stopPropagation()\">\n                  {{'CUST_MANUAL' | translate}}\n                </label>\n                <ul class=\"calendar\" role=\"menu\" aria-labelledby=\"dLabel\" ng-show=\"showCalendar\">\n                    <span>{{'FILTERS_FROM' | translate}} </span>\n                    <datetimepicker data-before-render=\"beforeRenderStarts($dates)\"\n                                    data-ng-model=\"starts\"\n                                    data-datetimepicker-config=\"{\n                                                dropdownSelector: '#dropdown-from',\n                                                startView:'day',\n                                                minView:'day'\n                                                }\">\n                    </datetimepicker>\n                </ul>\n                <ul class=\"calendar\" role=\"menu\" aria-labelledby=\"dLabel\" ng-show=\"showCalendar\">\n                    <span>{{'FILTERS_TO' | translate}} </span>\n                    <datetimepicker data-before-render=\"beforeRenderEnds($dates)\"\n                                    data-ng-model=\"ends\"\n                                    data-datetimepicker-config=\"{\n                                                startView:'day',\n                                                minView:'day'\n                                                }\">\n                    </datetimepicker>\n                    </ul>\n                </label>\n        </ul>\n    </div>\n</div>\n";

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(64);

	angular.module('smartvel-common').directive('smtDescription', function($timeout) {
	  return {
	    template: __webpack_require__(66),
	    transclude: true,
	    restrict: 'E',
	    link: function(scope, element, attrs) {
	      return $timeout(function() {
	        scope.expanded = element[0].clientHeight < 70;
	        return scope.more = !scope.expanded;
	      }, 200);
	    },
	    controller: function($scope) {
	      $scope.toggleView = function() {
	        return $scope.expanded = !$scope.expanded;
	      };
	      return $scope.showMore = function() {
	        return $scope.more;
	      };
	    }
	  };
	});


/***/ },
/* 64 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 65 */,
/* 66 */
/***/ function(module, exports) {

	module.exports = "<div class=\"event-description\"\n     ng-class=\"{'short': !expanded, 'long': expanded}\">\n    <div class=\"content\" ng-transclude>\n    </div>\n</div>\n<div class=\"more\" ng-show=\"showMore()\">\n    <span ng-show=\"!expanded\"\n          ng-click=\"toggleView()\">\n          more\n    </span>\n    <span ng-show=\"expanded\"\n          ng-click=\"toggleView()\">\n          hide\n    </span>\n</div>\n";

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var moment;

	moment = __webpack_require__(37);

	__webpack_require__(68);

	angular.module('smartvel-common').directive('smtEvent', function($compile, images) {
	  var getTemplate, templates;
	  templates = {
	    overlay: __webpack_require__(70),
	    list: __webpack_require__(71),
	    "default": __webpack_require__(71)
	  };
	  getTemplate = function(contentType) {
	    return templates[contentType] || templates["default"];
	  };
	  return {
	    restrict: 'E',
	    template: templates["default"],
	    scope: {
	      event: '=',
	      day: '='
	    },
	    link: function(scope, element, attrs) {
	      element[0].innerHTML = getTemplate(attrs.type);
	      $compile(element.contents())(scope);
	    },
	    controller: function($scope, $cookies, $attrs, params, images, travelPlan) {
	      $scope._params = params.getParams($attrs);
	      $scope.bookParams = $scope.$eval($scope._params.bookParams);
	      $scope.getPictures = function() {
	        var ref, ref1;
	        return ((ref = eval((ref1 = $scope.event) != null ? ref1.pictures : void 0)) != null ? ref.reverse() : void 0) || [];
	      };
	      $scope.getRegionName = function() {
	        var ref, ref1, ref2, ref3, ref4;
	        return ((ref = $scope.event) != null ? (ref1 = ref.place) != null ? (ref2 = ref1.region) != null ? ref2.name : void 0 : void 0 : void 0) || ((ref3 = $scope.event) != null ? (ref4 = ref3.region) != null ? ref4.name : void 0 : void 0);
	      };
	      $scope.one_day_event = function() {
	        var ref;
	        if (((ref = $scope.event) != null ? ref.starts : void 0) != null) {
	          return moment($scope.event.starts).utc().dayOfYear() === moment($scope.event.ends).utc().dayOfYear();
	        } else {
	          return false;
	        }
	      };
	      $scope.canBookHotel = function() {
	        return !($scope.bookParams === void 0);
	      };
	      $scope.getBookingLink = function() {
	        var day, endDate, endParam, endpoint, ref, ref1, ref10, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, startDate, startParam;
	        if ($scope.day) {
	          day = moment($scope.day);
	        } else {
	          day = moment($scope.event.starts);
	        }
	        endpoint = (ref = $scope.bookParams) != null ? ref.url : void 0;
	        if (((ref1 = $scope.bookParams) != null ? ref1.startDate : void 0) && endpoint) {
	          startParam = (ref2 = $scope.bookParams) != null ? (ref3 = ref2.startDate) != null ? ref3.param : void 0 : void 0;
	          startDate = day.format((ref4 = $scope.bookParams) != null ? (ref5 = ref4.startDate) != null ? ref5.format : void 0 : void 0);
	          endpoint = endpoint + "&" + startParam + "=" + startDate;
	        }
	        if (((ref6 = $scope.bookParams) != null ? ref6.endDate : void 0) && endpoint) {
	          endParam = (ref7 = $scope.bookParams) != null ? (ref8 = ref7.endDate) != null ? ref8.param : void 0 : void 0;
	          endDate = day.add(1, 'day').format((ref9 = $scope.bookParams) != null ? (ref10 = ref9.endDate) != null ? ref10.format : void 0 : void 0);
	          endpoint = endpoint + "&" + endParam + "=" + endDate;
	        }
	        return endpoint || "#";
	      };
	      $scope.canGotTicket = function() {
	        var ref, ref1, ref2;
	        return !(((ref = $scope._params) != null ? ref.allowTickets : void 0) === void 0) && (((ref1 = $scope.event) != null ? (ref2 = ref1.purchase_link) != null ? ref2.length : void 0 : void 0) > 0);
	      };
	      $scope.getTicketLink = function() {
	        var ref;
	        return (ref = $scope.event) != null ? ref.purchase_link : void 0;
	      };
	      $scope.addToTravelPlan = function() {
	        travelPlan.addEvent($scope.event);
	      };
	      $scope.isInTravelPlan = function() {
	        return travelPlan.hasEvent($scope.event);
	      };
	      $scope.showTravelPlan = function() {
	        var ref;
	        return !(((ref = $scope._params) != null ? ref.allowTravelplan : void 0) === void 0);
	      };
	      $scope.removeFromTravelPlan = function() {
	        travelPlan.removeEvent($scope.event);
	      };
	      return $scope.downloadEvent = function(event) {
	        var cal;
	        cal = ics();
	        cal.addEvent(event.name, event.description, event.place.name, event.starts, event.ends);
	        return cal.download();
	      };
	    }
	  };
	});


/***/ },
/* 68 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 69 */,
/* 70 */
/***/ function(module, exports) {

	module.exports = "<div class=\"overlay smartimg\" data-pictures=\"{{ getPictures() }}\">\n\n    <div class=\"data\">\n        <div class=\"taxonomies\">\n            <h3 class=\"category\" ng-repeat=\"tx in event.taxonomies\">\n                <span ng-hide=\"$first\">\n                    &nbsp;|&nbsp;\n                </span>\n                {{ tx.name | no_underscores | uppercase }}\n            </h3>\n        </div>\n        <h2 class=\"title\">{{ event.name }}</h2>\n        <h4 class=\"dates\">\n            {{ getRegionName() }}\n            |&nbsp;\n            {{ event.starts | date: 'dd-MM-yy' }}\n            <span ng-hide=\"one_day_event()\">\n                &nbsp;al&nbsp; {{ event.ends | date: 'dd-MM-yy' }}\n            </span>\n        </h4>\n    </div>\n\n</div>\n";

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "<div class=\"list\">\n\n    <div class=\"picture\">\n        <div class=\"smartimg\" data-pictures=\"{{ getPictures() }}\">\n        </div>\n    </div>\n\n    <div class=\"facets clearfix\">\n        <h3 class=\"category\" ng-repeat=\"tx in event.taxonomies\">\n            {{ tx.name | no_underscores | capitalize }}\n        </h3>\n\n        <h2 class=\"title\">{{ event.name }}</h2>\n        <h4 class=\"place\">\n        <span class=\"icon icon-location\">\n            {{ getRegionName(event) }} |&nbsp; {{ event.place.name | capitalize_all }}\n        </span>\n        </h4>\n        <h4 class=\"dates\">\n            <span class=\"icon icon-calendar\">\n                <a ng-click=\"downloadEvent()\" href=\"\">\n                <span ng-hide=\"one_day_event()\">\n                    {{'EVENT_FROM' | translate}}\n                    {{ event.starts | date: 'dd-MM-yy' }}\n                    &nbsp;{{'EVENT_TO' | translate}}&nbsp;\n                    {{ event.ends | date: 'dd-MM-yy' }}\n                </span>\n\n                <span ng-show=\"one_day_event()\">\n                    {{ event.starts | date: 'dd-MM-yy' }}\n                </span>\n                </a>\n           </span>\n        </h4>\n    </div>\n\n    <smt-description>\n        <p>{{ event.description | safe | capitalize_paragraph }}</p>\n    </smt-description>\n\n    <div class=\"button-bar\">\n      <div class=\"get-ticket\" ng-show=\"canGotTicket()\">\n        <a href=\"{{ getTicketLink() }}\" class=\"btn btn-primary\" target=\"_blank\">{{'CUST_PURCHASE_TICKETS' | translate}}</a>\n      </div>\n\n      <div class=\"book-hotel\" ng-show=\"canBookHotel()\">\n        <a href=\"{{ getBookingLink() }}\" class=\"btn btn-primary\" target=\"_blank\">{{'CUST_BOOK_HOTEL' | translate}}</a>\n      </div>\n\n      <div ng-show=\"showTravelPlan()\">\n        <div class=\"book-hotel\" ng-hide=\"isInTravelPlan()\">\n          <a ng-click=\"addToTravelPlan()\" class=\"btn btn-primary\">{{'CUST_ADD_TO_TRAVELPLAN' | translate}}</a>\n        </div>\n\n        <div class=\"book-hotel\" ng-show=\"isInTravelPlan()\">\n          <a ng-click=\"removeFromTravelPlan()\" class=\"btn btn-danger\">{{'CUST_REMOVE_FROM_TRAVELPLAN' | translate}}</a>\n        </div>\n      </div>\n  </div>\n\n</div>\n\n";

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var moment;

	moment = __webpack_require__(37);

	__webpack_require__(73);

	angular.module('smartvel-common').directive('smtPlace', function($compile, images) {
	  var getTemplate, templates;
	  templates = {
	    list: __webpack_require__(75),
	    "default": __webpack_require__(75)
	  };
	  getTemplate = function(contentType) {
	    return templates[contentType] || templates["default"];
	  };
	  return {
	    restrict: 'E',
	    template: templates["default"],
	    scope: {
	      place: '='
	    },
	    link: function(scope, element, attrs) {
	      element[0].innerHTML = getTemplate(attrs.type);
	      $compile(element.contents())(scope);
	    },
	    controller: function($scope, $cookies, $attrs, params, images, travelPlan) {
	      $scope._params = params.getParams($attrs);
	      $scope.getPictures = function() {
	        var ref, ref1;
	        return ((ref = eval((ref1 = $scope.place) != null ? ref1.pictures : void 0)) != null ? ref.reverse() : void 0) || [];
	      };
	      $scope.getRegionName = function() {
	        var ref, ref1;
	        return (ref = $scope.place) != null ? (ref1 = ref.region) != null ? ref1.name : void 0 : void 0;
	      };
	      $scope.addToTravelPlan = function() {
	        travelPlan.addPlace($scope.place);
	      };
	      $scope.isInTravelPlan = function() {
	        return travelPlan.hasPlace($scope.place);
	      };
	      $scope.showTravelPlan = function() {
	        var ref;
	        return !(((ref = $scope._params) != null ? ref.allowTravelplan : void 0) === void 0);
	      };
	      return $scope.removeFromTravelPlan = function() {
	        travelPlan.removePlace($scope.place);
	      };
	    }
	  };
	});


/***/ },
/* 73 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 74 */,
/* 75 */
/***/ function(module, exports) {

	module.exports = "<div class=\"list\">\n\n    <div class=\"picture\">\n        <div class=\"smartimg\" data-pictures=\"{{ getPictures() }}\">\n        </div>\n    </div>\n\n    <div class=\"facets clearfix\">\n        <h3 class=\"place_category\">\n            Lugar\n        </h3>\n\n        <h2 class=\"title\">{{ place.name }}</h2>\n    </div>\n\n    <smt-description>\n        <p>{{ place.description | safe | capitalize_paragraph }}</p>\n    </smt-description>\n\n    <div class=\"button-bar\">\n      <div ng-show=\"showTravelPlan()\">\n        <div ng-hide=\"isInTravelPlan()\">\n          <a ng-click=\"addToTravelPlan()\" class=\"btn btn-primary\">{{'CUST_ADD_TO_TRAVELPLAN' | translate}}</a>\n        </div>\n\n        <div ng-show=\"isInTravelPlan()\">\n          <a ng-click=\"removeFromTravelPlan()\" class=\"btn btn-danger\">{{'CUST_REMOVE_FROM_TRAVELPLAN' | translate}}</a>\n        </div>\n      </div>\n  </div>\n\n</div>\n\n";

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(22);

	__webpack_require__(77);

	__webpack_require__(79);

	angular.module('smartvel-common').directive('smtSearchbox', function(locale) {
	  return {
	    template: __webpack_require__(81),
	    restrict: 'E',
	    scope: {
	      filters: '=',
	      customControls: '@',
	      reload: '&'
	    },
	    link: function(scope, element, attrs) {
	      scope.customControls = scope.$eval(scope.customControls);
	      return scope.control_width = 100 / (_.size(scope.customControls) + 1);
	    },
	    controller: function($scope, $filter) {
	      $scope.controlUtilityChecks = {
	        taxonomies: function() {
	          var ref;
	          return !((ref = $scope.filters) != null ? ref.taxonomies_forced : void 0);
	        },
	        regions: function() {
	          var ref, ref1;
	          return !((ref = $scope.filters) != null ? ref.regions_forced : void 0) && ((ref1 = $scope.filters.regions) != null ? ref1.length : void 0) > 1;
	        }
	      };
	      $scope.isUseful = function(key) {
	        return !_.include(_.keys($scope.controlUtilityChecks), key) || $scope.controlUtilityChecks[key]();
	      };
	      $scope.show = function(label) {
	        return _.include($scope.customControls, label) && $scope.isUseful(label);
	      };
	      $scope.getTaxonomyLabels = function() {
	        return _.map(_.filter($scope.filters.taxonomies, 'selected'), function(taxonomy) {
	          var ref;
	          return (ref = taxonomy.translations) != null ? ref[locale.currentLang().abbr].name : void 0;
	        }).join(', ') || $filter('translate')('CUST_ALL_CATEGORIES');
	      };
	      return $scope.getTaxonomyTranslation = function(taxonomy) {
	        var ref;
	        return (ref = taxonomy.translations) != null ? ref[locale.currentLang().abbr].name : void 0;
	      };
	    }
	  };
	});


/***/ },
/* 77 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 78 */,
/* 79 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 80 */,
/* 81 */
/***/ function(module, exports) {

	module.exports = "<div class=\"searchbox\">\n    <form role=\"search\">\n        <div class=\"searchbox-field taxonomies\"\n             style=\"width: {{ control_width }}%;\"\n             ng-if=\"show('taxonomies')\">\n\n             <div class=\"btn-group\">\n                <button class=\"btn btn-default taxonomies-selected control\"\n                        data-placeholder=\"false\"\n                        data-toggle=\"dropdown\"\n                        data-label-placement>\n                    {{ getTaxonomyLabels() }}\n                    <span class=\"caret\"></span>\n                </button>\n                <ul class=\"dropdown-menu\">\n                    <li ng-repeat=\"taxonomy in filters.taxonomies\">\n                        <input type=\"checkbox\" id=\"{{ taxonomy.code }}\" ng-model=\"taxonomy.selected\">\n                        <label for=\"{{ taxonomy.code }}\"\n                               name=\"{{ taxonomy.name }}\"\n                               value=\"{{ taxonomy.code }}\">\n                            {{ getTaxonomyTranslation(taxonomy) }}\n                        </label>\n                    </li>\n                </ul>\n            </div>\n        </div>\n\n        <div class=\"searchbox-field regions\"\n             style=\"width: {{ control_width }}%;\"\n             ng-if=\"show('regions')\">\n\n            <select class=\"form-control control\"\n                    ng-model=\"filters.region\"\n                    ng-options=\"region as region.name for region in filters.regions\">\n                <option></option>\n            </select>\n        </div>\n\n        <div class=\"searchbox-field text\"\n             style=\"width: {{ control_width }}%;\"\n             ng-if=\"show('text')\">\n\n             <input type=\"text\"\n                    class=\"control\"\n                    placeholder=\"{{'FILTERS_TEXT_PLACEHOLDER' | translate}}\"\n                    ng-model=\"filters.text\"></input>\n        </div>\n\n        <smt-date starts=\"filters.starts\"\n                  ends=\"filters.ends\"\n                  period='day'\n                  control_width=\"{{ control_width }}%\"\n                  ng-if=\"show('starts')\"></smt-date>\n\n        <div class=\"searchbox-field submit\">\n            <button type=\"submit\" class=\"btn btn-primary custom-pull-right\" ng-click=\"reload()\">\n              {{'FILTERS_RELOAD' | translate}}\n            </button>\n        </div>\n    </form>\n</div>\n\n\n";

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var moment;

	moment = __webpack_require__(37);

	__webpack_require__(77);

	angular.module('smartvel-common').directive('smtTravelplan', function(filters, Session, taxonomies, locale) {
	  return {
	    template: __webpack_require__(83),
	    restrict: 'E',
	    transclude: true,
	    scope: {
	      filters: '=',
	      taxonomies: '@',
	      region: '@',
	      searchBox: '@',
	      key: '@',
	      language: '@',
	      allowTickets: '@',
	      bookParams: '@',
	      allowTravelplan: '@'
	    },
	    compile: function(element, attrs) {
	      Session.setApiKey(attrs.key);
	      if (attrs.language !== void 0) {
	        return locale.setLang(attrs.language);
	      }
	    },
	    controller: function($scope, $attrs, params, travelPlan) {
	      var getDateRange;
	      $scope._params = params.getParams($attrs);
	      $scope.travelPlanEvents = function() {
	        return travelPlan.events;
	      };
	      $scope.travelPlanPlaces = function() {
	        return travelPlan.places;
	      };
	      $scope.hasTravelPlan = function() {
	        return !travelPlan.empty();
	      };
	      $scope.bookHotel = function() {
	        var dates, ends, starts, text, travelplanEvents;
	        travelplanEvents = $scope.travelPlanEvents();
	        if (travelplanEvents.length > 0) {
	          dates = getDateRange($scope.travelPlanEvents());
	          starts = moment(dates.starts).format("YYYY-MM-DD");
	          ends = moment(dates.ends).format("YYYY-MM-DD");
	          text = "Book Hotel from " + starts + " to " + ends;
	          return alert(text);
	        }
	      };
	      return getDateRange = function(events) {
	        return {
	          starts: _.first(_.map(events, 'starts').sort()),
	          ends: _.last(_.map(events, 'ends').sort())
	        };
	      };
	    }
	  };
	});


/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = "<div class=\"events travelplan\">\n\n    <div class=\"container-fluid\">\n      <div>\n        <div class=\"row\">\n          <div>\n          <div ng-transclude>\n          </div>\n            <div class=\"custom-pull-right\" ng-show=\"hasTravelPlan()\">\n              <a ng-click=\"bookHotel()\" class=\"btn btn-primary\">{{'CUST_BOOK_HOTEL' | translate}}</a>\n            </div>\n          </div>\n      </div>\n        <hr class=\"separator\">\n        <div class=\"row\">\n            <div ng-repeat=\"event in travelPlanEvents()\"\n                 class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 animated travelPlan.customClass\"\n              >\n                <smt-event type=\"list\"\n                     event=\"event\"\n                     allow-travelplan=\"allowTravelplan\"\n                     allow-tickets=\"allowTickets\"\n                     >\n                </smt-event>\n            </div>\n            <div ng-repeat=\"place in travelPlanPlaces()\"\n                 class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 animated travelPlan.customClass\">\n                 <smt-place type=\"list\" place=\"place\"></smt-place>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var angular;

	angular = __webpack_require__(5);

	__webpack_require__(2);

	angular.module('smartvel-map', ['ngAnimate', 'ngSanitize', 'ngTouch', 'smartvel-common', 'leaflet-directive']);

	__webpack_require__(100);

	__webpack_require__(68);

	__webpack_require__(115);


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(105);

	__webpack_require__(107);

	__webpack_require__(108);

	__webpack_require__(109);

	__webpack_require__(101);

	__webpack_require__(110);

	__webpack_require__(112);

	angular.module('smartvel-map').directive('smtMap', function(filters, Session, taxonomies, locale) {
	  return {
	    template: __webpack_require__(114),
	    restrict: 'E',
	    scope: {
	      filters: '=',
	      startsDate: '@',
	      taxonomies: '@',
	      searchBox: '@',
	      key: '@',
	      language: '@',
	      bookParams: '@',
	      allowTickets: '@',
	      allowTravelplan: '@'
	    },
	    compile: function(element, attrs) {
	      Session.setApiKey(attrs.key);
	      if (attrs.language !== void 0) {
	        return locale.setLang(attrs.language);
	      }
	    },
	    controller: function($scope, $compile, $filter, $attrs, $q, params, leafletData, events, places, customEvents, customPlaces) {
	      var getPlaces;
	      $scope._params = params.getParams($attrs);
	      $scope.init = function() {
	        var forced_filters;
	        angular.extend($scope, {
	          layers: {
	            baselayers: {
	              positron: {
	                name: 'CartoDB Positron',
	                url: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
	                type: 'xyz',
	                subdomains: 'abcd',
	                minZoom: 0,
	                maxZoom: 18
	              },
	              osm: {
	                name: 'OpenStreetMap',
	                url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
	                type: 'xyz'
	              },
	              googleRoadmap: {
	                name: 'Google Streets',
	                layerType: 'ROADMAP',
	                type: 'google'
	              }
	            },
	            overlays: {
	              main: {
	                name: 'main',
	                type: "markercluster",
	                visible: true,
	                layerOptions: {
	                  chunkedLoading: true,
	                  showCoverageOnHover: false,
	                  removeOutsideVisibleBounds: true
	                }
	              },
	              places: {
	                name: 'places',
	                type: 'markercluster',
	                visible: true,
	                layerOptions: {
	                  chunkedLoading: true,
	                  showCoverageOnHover: false,
	                  removeOutsideVisibleBounds: true,
	                  disableClusteringAtZoom: 1
	                }
	              }
	            }
	          },
	          bounds: {},
	          center: {
	            lat: parseFloat($scope._params.latitude) || 40.4444,
	            lng: parseFloat($scope._params.longitude) || -3.6707,
	            zoom: parseInt($scope._params.zoom) || 6
	          },
	          markers: [],
	          defaults: {
	            scrollWheelZoom: false,
	            zoomControl: true,
	            zoomControlPosition: 'bottomleft'
	          },
	          events: {},
	          places: {},
	          eventSelected: [],
	          placeSelected: []
	        });
	        forced_filters = {
	          taxonomies_forced: eval($scope.taxonomies),
	          date_forced: $scope.startsDate
	        };
	        $scope._filters = $scope.filters || filters.request_for_events(forced_filters);
	        return leafletData.getMap().then(function(map) {
	          var initBounds, mapBounds;
	          mapBounds = map.getBounds();
	          initBounds = {
	            northEast: mapBounds._northEast,
	            southWest: mapBounds._southWest
	          };
	          $scope.reload(initBounds);
	        });
	      };
	      $scope.$on('leafletDirectiveMarker.popupopen', function(event, args) {
	        if (args.model.layer === "main") {
	          $scope.eventSelected = [args.model];
	        }
	        if (args.model.layer === "places") {
	          return $scope.placeSelected = [args.model];
	        }
	      });
	      $scope.$on('leafletDirectiveMarker.popupclose', function(event, args) {
	        $scope.eventSelected = [];
	        return $scope.placeSelected = [];
	      });
	      $scope.hasSomethingSelected = function() {
	        return $scope.eventSelected.length > 0 || $scope.placeSelected.length > 0;
	      };
	      $scope.reload = function(initBounds) {
	        var mapBounds;
	        $scope.markers = [];
	        mapBounds = _.isEmpty($scope.bounds) ? initBounds : $scope.bounds;
	        $q.all({
	          events: events.request(_.defaults({
	            'bounding_box': mapBounds
	          }, _.omit($scope._filters, 'region'))),
	          userEvents: customEvents.query($scope._filters)
	        }).then(function(data) {
	          var currentLang, result;
	          currentLang = locale.currentLang();
	          result = data.events.concat(data.userEvents);
	          taxonomies.translate($scope._filters.taxonomies);
	          $scope.events = _.map(_.filter(result, function(event) {
	            var ref;
	            return (ref = event.place) != null ? ref.location : void 0;
	          }), function(event) {
	            return _.assign(event, {
	              enable: ['popupopen', 'popupclose'],
	              type: "event",
	              lng: event.place.location.coordinates[0],
	              lat: event.place.location.coordinates[1],
	              layer: 'main',
	              label: {
	                message: event.name,
	                options: {
	                  noHide: false
	                }
	              },
	              message: "<div class=\"place-popup\" align=\"center\">\n  <h4>\n    <p class=place-name>\n      <b><font size=\"3\">" + event.name + "</font></b>\n    </p>\n  </h4>\n    <p class=place-description>\n      " + event.place.name + "\n    </p>\n  <br/>\n</div>"
	            });
	          });
	          $scope.markers = _.union($scope.markers, $scope.events);
	        });
	        if (!($scope._params.showPlaces === void 0) && $scope.center.zoom > 11) {
	          getPlaces();
	        }
	      };
	      getPlaces = function() {
	        return $q.all({
	          places: places.request(_.defaults({
	            'bounding_box': $scope.bounds || {}
	          }, _.omit($scope._filters, 'region'))),
	          userPlaces: customPlaces.all()
	        }).then(function(data) {
	          var result;
	          result = data.places.concat(data.userPlaces);
	          taxonomies.translate($scope._filters.taxonomies);
	          $scope.places = _.map(_.filter(result, function(place) {
	            return place != null ? place.location : void 0;
	          }), function(place) {
	            var placeType;
	            placeType = "Smartvel Landmark";
	            return _.assign(place, {
	              type: "place",
	              lng: place.location.coordinates[0],
	              lat: place.location.coordinates[1],
	              layer: 'places',
	              icon: {
	                iconUrl: 'http://static.smartvel.com/images/icons/place-marker-icon.png',
	                popupAnchor: [12, 5],
	                shadowAnchor: [2, 12],
	                shadowUrl: 'http://static.smartvel.com/images/icons/marker-shadow.png'
	              },
	              label: {
	                message: place.name,
	                options: {
	                  noHide: false
	                }
	              },
	              message: "<div class=\"place-popup\" align=\"center\">\n  <!--<p class=place-type>\n    " + placeType + "\n  </p>-->\n  <h4>\n    <p class=place-name>\n      <b><font size=\"3\">" + place.name + "</font></b>\n    </p>\n  </h4>\n    <p class=place-description>\n      " + place.description + "\n    </p>\n  <br/>\n</div>"
	            });
	          });
	          $scope.markers = _.union($scope.markers, $scope.places);
	        });
	      };
	      $scope.downloadEvent = function(event) {
	        var cal;
	        cal = ics();
	        cal.addEvent(event.name, event.description, event.place.name, event.starts, event.ends);
	        return cal.download();
	      };
	      return $scope.init();
	    }
	  };
	});


/***/ },
/* 101 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 Leaflet, a JavaScript library for mobile-friendly interactive maps. http://leafletjs.com
	 (c) 2010-2013, Vladimir Agafonkin
	 (c) 2010-2011, CloudMade
	*/
	!function(t,e,i){var n=t.L,o={};o.version="0.7.3","object"==typeof module&&"object"==typeof module.exports?module.exports=o:"function"=="function"&&__webpack_require__(106)&&!(__WEBPACK_AMD_DEFINE_FACTORY__ = (o), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)),o.noConflict=function(){return t.L=n,this},t.L=o,o.Util={extend:function(t){var e,i,n,o,s=Array.prototype.slice.call(arguments,1);for(i=0,n=s.length;n>i;i++){o=s[i]||{};for(e in o)o.hasOwnProperty(e)&&(t[e]=o[e])}return t},bind:function(t,e){var i=arguments.length>2?Array.prototype.slice.call(arguments,2):null;return function(){return t.apply(e,i||arguments)}},stamp:function(){var t=0,e="_leaflet_id";return function(i){return i[e]=i[e]||++t,i[e]}}(),invokeEach:function(t,e,i){var n,o;if("object"==typeof t){o=Array.prototype.slice.call(arguments,3);for(n in t)e.apply(i,[n,t[n]].concat(o));return!0}return!1},limitExecByInterval:function(t,e,i){var n,o;return function s(){var a=arguments;return n?void(o=!0):(n=!0,setTimeout(function(){n=!1,o&&(s.apply(i,a),o=!1)},e),void t.apply(i,a))}},falseFn:function(){return!1},formatNum:function(t,e){var i=Math.pow(10,e||5);return Math.round(t*i)/i},trim:function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")},splitWords:function(t){return o.Util.trim(t).split(/\s+/)},setOptions:function(t,e){return t.options=o.extend({},t.options,e),t.options},getParamString:function(t,e,i){var n=[];for(var o in t)n.push(encodeURIComponent(i?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(e&&-1!==e.indexOf("?")?"&":"?")+n.join("&")},template:function(t,e){return t.replace(/\{ *([\w_]+) *\}/g,function(t,n){var o=e[n];if(o===i)throw new Error("No value provided for variable "+t);return"function"==typeof o&&(o=o(e)),o})},isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},emptyImageUrl:"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="},function(){function e(e){var i,n,o=["webkit","moz","o","ms"];for(i=0;i<o.length&&!n;i++)n=t[o[i]+e];return n}function i(e){var i=+new Date,o=Math.max(0,16-(i-n));return n=i+o,t.setTimeout(e,o)}var n=0,s=t.requestAnimationFrame||e("RequestAnimationFrame")||i,a=t.cancelAnimationFrame||e("CancelAnimationFrame")||e("CancelRequestAnimationFrame")||function(e){t.clearTimeout(e)};o.Util.requestAnimFrame=function(e,n,a,r){return e=o.bind(e,n),a&&s===i?void e():s.call(t,e,r)},o.Util.cancelAnimFrame=function(e){e&&a.call(t,e)}}(),o.extend=o.Util.extend,o.bind=o.Util.bind,o.stamp=o.Util.stamp,o.setOptions=o.Util.setOptions,o.Class=function(){},o.Class.extend=function(t){var e=function(){this.initialize&&this.initialize.apply(this,arguments),this._initHooks&&this.callInitHooks()},i=function(){};i.prototype=this.prototype;var n=new i;n.constructor=e,e.prototype=n;for(var s in this)this.hasOwnProperty(s)&&"prototype"!==s&&(e[s]=this[s]);t.statics&&(o.extend(e,t.statics),delete t.statics),t.includes&&(o.Util.extend.apply(null,[n].concat(t.includes)),delete t.includes),t.options&&n.options&&(t.options=o.extend({},n.options,t.options)),o.extend(n,t),n._initHooks=[];var a=this;return e.__super__=a.prototype,n.callInitHooks=function(){if(!this._initHooksCalled){a.prototype.callInitHooks&&a.prototype.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,e=n._initHooks.length;e>t;t++)n._initHooks[t].call(this)}},e},o.Class.include=function(t){o.extend(this.prototype,t)},o.Class.mergeOptions=function(t){o.extend(this.prototype.options,t)},o.Class.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i="function"==typeof t?t:function(){this[t].apply(this,e)};this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i)};var s="_leaflet_events";o.Mixin={},o.Mixin.Events={addEventListener:function(t,e,i){if(o.Util.invokeEach(t,this.addEventListener,this,e,i))return this;var n,a,r,h,l,u,c,d=this[s]=this[s]||{},p=i&&i!==this&&o.stamp(i);for(t=o.Util.splitWords(t),n=0,a=t.length;a>n;n++)r={action:e,context:i||this},h=t[n],p?(l=h+"_idx",u=l+"_len",c=d[l]=d[l]||{},c[p]||(c[p]=[],d[u]=(d[u]||0)+1),c[p].push(r)):(d[h]=d[h]||[],d[h].push(r));return this},hasEventListeners:function(t){var e=this[s];return!!e&&(t in e&&e[t].length>0||t+"_idx"in e&&e[t+"_idx_len"]>0)},removeEventListener:function(t,e,i){if(!this[s])return this;if(!t)return this.clearAllEventListeners();if(o.Util.invokeEach(t,this.removeEventListener,this,e,i))return this;var n,a,r,h,l,u,c,d,p,_=this[s],m=i&&i!==this&&o.stamp(i);for(t=o.Util.splitWords(t),n=0,a=t.length;a>n;n++)if(r=t[n],u=r+"_idx",c=u+"_len",d=_[u],e){if(h=m&&d?d[m]:_[r]){for(l=h.length-1;l>=0;l--)h[l].action!==e||i&&h[l].context!==i||(p=h.splice(l,1),p[0].action=o.Util.falseFn);i&&d&&0===h.length&&(delete d[m],_[c]--)}}else delete _[r],delete _[u],delete _[c];return this},clearAllEventListeners:function(){return delete this[s],this},fireEvent:function(t,e){if(!this.hasEventListeners(t))return this;var i,n,a,r,h,l=o.Util.extend({},e,{type:t,target:this}),u=this[s];if(u[t])for(i=u[t].slice(),n=0,a=i.length;a>n;n++)i[n].action.call(i[n].context,l);r=u[t+"_idx"];for(h in r)if(i=r[h].slice())for(n=0,a=i.length;a>n;n++)i[n].action.call(i[n].context,l);return this},addOneTimeEventListener:function(t,e,i){if(o.Util.invokeEach(t,this.addOneTimeEventListener,this,e,i))return this;var n=o.bind(function(){this.removeEventListener(t,e,i).removeEventListener(t,n,i)},this);return this.addEventListener(t,e,i).addEventListener(t,n,i)}},o.Mixin.Events.on=o.Mixin.Events.addEventListener,o.Mixin.Events.off=o.Mixin.Events.removeEventListener,o.Mixin.Events.once=o.Mixin.Events.addOneTimeEventListener,o.Mixin.Events.fire=o.Mixin.Events.fireEvent,function(){var n="ActiveXObject"in t,s=n&&!e.addEventListener,a=navigator.userAgent.toLowerCase(),r=-1!==a.indexOf("webkit"),h=-1!==a.indexOf("chrome"),l=-1!==a.indexOf("phantom"),u=-1!==a.indexOf("android"),c=-1!==a.search("android [23]"),d=-1!==a.indexOf("gecko"),p=typeof orientation!=i+"",_=t.navigator&&t.navigator.msPointerEnabled&&t.navigator.msMaxTouchPoints&&!t.PointerEvent,m=t.PointerEvent&&t.navigator.pointerEnabled&&t.navigator.maxTouchPoints||_,f="devicePixelRatio"in t&&t.devicePixelRatio>1||"matchMedia"in t&&t.matchMedia("(min-resolution:144dpi)")&&t.matchMedia("(min-resolution:144dpi)").matches,g=e.documentElement,v=n&&"transition"in g.style,y="WebKitCSSMatrix"in t&&"m11"in new t.WebKitCSSMatrix&&!c,P="MozPerspective"in g.style,L="OTransition"in g.style,x=!t.L_DISABLE_3D&&(v||y||P||L)&&!l,w=!t.L_NO_TOUCH&&!l&&function(){var t="ontouchstart";if(m||t in g)return!0;var i=e.createElement("div"),n=!1;return i.setAttribute?(i.setAttribute(t,"return;"),"function"==typeof i[t]&&(n=!0),i.removeAttribute(t),i=null,n):!1}();o.Browser={ie:n,ielt9:s,webkit:r,gecko:d&&!r&&!t.opera&&!n,android:u,android23:c,chrome:h,ie3d:v,webkit3d:y,gecko3d:P,opera3d:L,any3d:x,mobile:p,mobileWebkit:p&&r,mobileWebkit3d:p&&y,mobileOpera:p&&t.opera,touch:w,msPointer:_,pointer:m,retina:f}}(),o.Point=function(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e},o.Point.prototype={clone:function(){return new o.Point(this.x,this.y)},add:function(t){return this.clone()._add(o.point(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(o.point(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},distanceTo:function(t){t=o.point(t);var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return t=o.point(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=o.point(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+o.Util.formatNum(this.x)+", "+o.Util.formatNum(this.y)+")"}},o.point=function(t,e,n){return t instanceof o.Point?t:o.Util.isArray(t)?new o.Point(t[0],t[1]):t===i||null===t?t:new o.Point(t,e,n)},o.Bounds=function(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;o>n;n++)this.extend(i[n])},o.Bounds.prototype={extend:function(t){return t=o.point(t),this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(t.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(t.y,this.max.y)):(this.min=t.clone(),this.max=t.clone()),this},getCenter:function(t){return new o.Point((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return new o.Point(this.min.x,this.max.y)},getTopRight:function(){return new o.Point(this.max.x,this.min.y)},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return t="number"==typeof t[0]||t instanceof o.Point?o.point(t):o.bounds(t),t instanceof o.Bounds?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=o.bounds(t);var e=this.min,i=this.max,n=t.min,s=t.max,a=s.x>=e.x&&n.x<=i.x,r=s.y>=e.y&&n.y<=i.y;return a&&r},isValid:function(){return!(!this.min||!this.max)}},o.bounds=function(t,e){return!t||t instanceof o.Bounds?t:new o.Bounds(t,e)},o.Transformation=function(t,e,i,n){this._a=t,this._b=e,this._c=i,this._d=n},o.Transformation.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new o.Point((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}},o.DomUtil={get:function(t){return"string"==typeof t?e.getElementById(t):t},getStyle:function(t,i){var n=t.style[i];if(!n&&t.currentStyle&&(n=t.currentStyle[i]),(!n||"auto"===n)&&e.defaultView){var o=e.defaultView.getComputedStyle(t,null);n=o?o[i]:null}return"auto"===n?null:n},getViewportOffset:function(t){var i,n=0,s=0,a=t,r=e.body,h=e.documentElement;do{if(n+=a.offsetTop||0,s+=a.offsetLeft||0,n+=parseInt(o.DomUtil.getStyle(a,"borderTopWidth"),10)||0,s+=parseInt(o.DomUtil.getStyle(a,"borderLeftWidth"),10)||0,i=o.DomUtil.getStyle(a,"position"),a.offsetParent===r&&"absolute"===i)break;if("fixed"===i){n+=r.scrollTop||h.scrollTop||0,s+=r.scrollLeft||h.scrollLeft||0;break}if("relative"===i&&!a.offsetLeft){var l=o.DomUtil.getStyle(a,"width"),u=o.DomUtil.getStyle(a,"max-width"),c=a.getBoundingClientRect();("none"!==l||"none"!==u)&&(s+=c.left+a.clientLeft),n+=c.top+(r.scrollTop||h.scrollTop||0);break}a=a.offsetParent}while(a);a=t;do{if(a===r)break;n-=a.scrollTop||0,s-=a.scrollLeft||0,a=a.parentNode}while(a);return new o.Point(s,n)},documentIsLtr:function(){return o.DomUtil._docIsLtrCached||(o.DomUtil._docIsLtrCached=!0,o.DomUtil._docIsLtr="ltr"===o.DomUtil.getStyle(e.body,"direction")),o.DomUtil._docIsLtr},create:function(t,i,n){var o=e.createElement(t);return o.className=i,n&&n.appendChild(o),o},hasClass:function(t,e){if(t.classList!==i)return t.classList.contains(e);var n=o.DomUtil._getClass(t);return n.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(n)},addClass:function(t,e){if(t.classList!==i)for(var n=o.Util.splitWords(e),s=0,a=n.length;a>s;s++)t.classList.add(n[s]);else if(!o.DomUtil.hasClass(t,e)){var r=o.DomUtil._getClass(t);o.DomUtil._setClass(t,(r?r+" ":"")+e)}},removeClass:function(t,e){t.classList!==i?t.classList.remove(e):o.DomUtil._setClass(t,o.Util.trim((" "+o.DomUtil._getClass(t)+" ").replace(" "+e+" "," ")))},_setClass:function(t,e){t.className.baseVal===i?t.className=e:t.className.baseVal=e},_getClass:function(t){return t.className.baseVal===i?t.className:t.className.baseVal},setOpacity:function(t,e){if("opacity"in t.style)t.style.opacity=e;else if("filter"in t.style){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch(o){if(1===e)return}e=Math.round(100*e),i?(i.Enabled=100!==e,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}},testProp:function(t){for(var i=e.documentElement.style,n=0;n<t.length;n++)if(t[n]in i)return t[n];return!1},getTranslateString:function(t){var e=o.Browser.webkit3d,i="translate"+(e?"3d":"")+"(",n=(e?",0":"")+")";return i+t.x+"px,"+t.y+"px"+n},getScaleString:function(t,e){var i=o.DomUtil.getTranslateString(e.add(e.multiplyBy(-1*t))),n=" scale("+t+") ";return i+n},setPosition:function(t,e,i){t._leaflet_pos=e,!i&&o.Browser.any3d?t.style[o.DomUtil.TRANSFORM]=o.DomUtil.getTranslateString(e):(t.style.left=e.x+"px",t.style.top=e.y+"px")},getPosition:function(t){return t._leaflet_pos}},o.DomUtil.TRANSFORM=o.DomUtil.testProp(["transform","WebkitTransform","OTransform","MozTransform","msTransform"]),o.DomUtil.TRANSITION=o.DomUtil.testProp(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),o.DomUtil.TRANSITION_END="webkitTransition"===o.DomUtil.TRANSITION||"OTransition"===o.DomUtil.TRANSITION?o.DomUtil.TRANSITION+"End":"transitionend",function(){if("onselectstart"in e)o.extend(o.DomUtil,{disableTextSelection:function(){o.DomEvent.on(t,"selectstart",o.DomEvent.preventDefault)},enableTextSelection:function(){o.DomEvent.off(t,"selectstart",o.DomEvent.preventDefault)}});else{var i=o.DomUtil.testProp(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);o.extend(o.DomUtil,{disableTextSelection:function(){if(i){var t=e.documentElement.style;this._userSelect=t[i],t[i]="none"}},enableTextSelection:function(){i&&(e.documentElement.style[i]=this._userSelect,delete this._userSelect)}})}o.extend(o.DomUtil,{disableImageDrag:function(){o.DomEvent.on(t,"dragstart",o.DomEvent.preventDefault)},enableImageDrag:function(){o.DomEvent.off(t,"dragstart",o.DomEvent.preventDefault)}})}(),o.LatLng=function(t,e,n){if(t=parseFloat(t),e=parseFloat(e),isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=t,this.lng=e,n!==i&&(this.alt=parseFloat(n))},o.extend(o.LatLng,{DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,MAX_MARGIN:1e-9}),o.LatLng.prototype={equals:function(t){if(!t)return!1;t=o.latLng(t);var e=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return e<=o.LatLng.MAX_MARGIN},toString:function(t){return"LatLng("+o.Util.formatNum(this.lat,t)+", "+o.Util.formatNum(this.lng,t)+")"},distanceTo:function(t){t=o.latLng(t);var e=6378137,i=o.LatLng.DEG_TO_RAD,n=(t.lat-this.lat)*i,s=(t.lng-this.lng)*i,a=this.lat*i,r=t.lat*i,h=Math.sin(n/2),l=Math.sin(s/2),u=h*h+l*l*Math.cos(a)*Math.cos(r);return 2*e*Math.atan2(Math.sqrt(u),Math.sqrt(1-u))},wrap:function(t,e){var i=this.lng;return t=t||-180,e=e||180,i=(i+e)%(e-t)+(t>i||i===e?e:t),new o.LatLng(this.lat,i)}},o.latLng=function(t,e){return t instanceof o.LatLng?t:o.Util.isArray(t)?"number"==typeof t[0]||"string"==typeof t[0]?new o.LatLng(t[0],t[1],t[2]):null:t===i||null===t?t:"object"==typeof t&&"lat"in t?new o.LatLng(t.lat,"lng"in t?t.lng:t.lon):e===i?null:new o.LatLng(t,e)},o.LatLngBounds=function(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;o>n;n++)this.extend(i[n])},o.LatLngBounds.prototype={extend:function(t){if(!t)return this;var e=o.latLng(t);return t=null!==e?e:o.latLngBounds(t),t instanceof o.LatLng?this._southWest||this._northEast?(this._southWest.lat=Math.min(t.lat,this._southWest.lat),this._southWest.lng=Math.min(t.lng,this._southWest.lng),this._northEast.lat=Math.max(t.lat,this._northEast.lat),this._northEast.lng=Math.max(t.lng,this._northEast.lng)):(this._southWest=new o.LatLng(t.lat,t.lng),this._northEast=new o.LatLng(t.lat,t.lng)):t instanceof o.LatLngBounds&&(this.extend(t._southWest),this.extend(t._northEast)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,s=Math.abs(e.lng-i.lng)*t;return new o.LatLngBounds(new o.LatLng(e.lat-n,e.lng-s),new o.LatLng(i.lat+n,i.lng+s))},getCenter:function(){return new o.LatLng((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new o.LatLng(this.getNorth(),this.getWest())},getSouthEast:function(){return new o.LatLng(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t="number"==typeof t[0]||t instanceof o.LatLng?o.latLng(t):o.latLngBounds(t);var e,i,n=this._southWest,s=this._northEast;return t instanceof o.LatLngBounds?(e=t.getSouthWest(),i=t.getNorthEast()):e=i=t,e.lat>=n.lat&&i.lat<=s.lat&&e.lng>=n.lng&&i.lng<=s.lng},intersects:function(t){t=o.latLngBounds(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),a=s.lat>=e.lat&&n.lat<=i.lat,r=s.lng>=e.lng&&n.lng<=i.lng;return a&&r},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t){return t?(t=o.latLngBounds(t),this._southWest.equals(t.getSouthWest())&&this._northEast.equals(t.getNorthEast())):!1},isValid:function(){return!(!this._southWest||!this._northEast)}},o.latLngBounds=function(t,e){return!t||t instanceof o.LatLngBounds?t:new o.LatLngBounds(t,e)},o.Projection={},o.Projection.SphericalMercator={MAX_LATITUDE:85.0511287798,project:function(t){var e=o.LatLng.DEG_TO_RAD,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),s=t.lng*e,a=n*e;return a=Math.log(Math.tan(Math.PI/4+a/2)),new o.Point(s,a)},unproject:function(t){var e=o.LatLng.RAD_TO_DEG,i=t.x*e,n=(2*Math.atan(Math.exp(t.y))-Math.PI/2)*e;return new o.LatLng(n,i)}},o.Projection.LonLat={project:function(t){return new o.Point(t.lng,t.lat)},unproject:function(t){return new o.LatLng(t.y,t.x)}},o.CRS={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},scale:function(t){return 256*Math.pow(2,t)},getSize:function(t){var e=this.scale(t);return o.point(e,e)}},o.CRS.Simple=o.extend({},o.CRS,{projection:o.Projection.LonLat,transformation:new o.Transformation(1,0,-1,0),scale:function(t){return Math.pow(2,t)}}),o.CRS.EPSG3857=o.extend({},o.CRS,{code:"EPSG:3857",projection:o.Projection.SphericalMercator,transformation:new o.Transformation(.5/Math.PI,.5,-.5/Math.PI,.5),project:function(t){var e=this.projection.project(t),i=6378137;return e.multiplyBy(i)}}),o.CRS.EPSG900913=o.extend({},o.CRS.EPSG3857,{code:"EPSG:900913"}),o.CRS.EPSG4326=o.extend({},o.CRS,{code:"EPSG:4326",projection:o.Projection.LonLat,transformation:new o.Transformation(1/360,.5,-1/360,.5)}),o.Map=o.Class.extend({includes:o.Mixin.Events,options:{crs:o.CRS.EPSG3857,fadeAnimation:o.DomUtil.TRANSITION&&!o.Browser.android23,trackResize:!0,markerZoomAnimation:o.DomUtil.TRANSITION&&o.Browser.any3d},initialize:function(t,e){e=o.setOptions(this,e),this._initContainer(t),this._initLayout(),this._onResize=o.bind(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.center&&e.zoom!==i&&this.setView(o.latLng(e.center),e.zoom,{reset:!0}),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._tileLayersNum=0,this.callInitHooks(),this._addLayers(e.layers)},setView:function(t,e){return e=e===i?this.getZoom():e,this._resetView(o.latLng(t),this._limitZoom(e)),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=this._limitZoom(t),this)},zoomIn:function(t,e){return this.setZoom(this._zoom+(t||1),e)},zoomOut:function(t,e){return this.setZoom(this._zoom-(t||1),e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),s=this.getSize().divideBy(2),a=t instanceof o.Point?t:this.latLngToContainerPoint(t),r=a.subtract(s).multiplyBy(1-1/n),h=this.containerPointToLatLng(s.add(r));return this.setView(h,e,{zoom:i})},fitBounds:function(t,e){e=e||{},t=t.getBounds?t.getBounds():o.latLngBounds(t);var i=o.point(e.paddingTopLeft||e.padding||[0,0]),n=o.point(e.paddingBottomRight||e.padding||[0,0]),s=this.getBoundsZoom(t,!1,i.add(n)),a=n.subtract(i).divideBy(2),r=this.project(t.getSouthWest(),s),h=this.project(t.getNorthEast(),s),l=this.unproject(r.add(h).divideBy(2).add(a),s);return s=e&&e.maxZoom?Math.min(e.maxZoom,s):s,this.setView(l,s,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t){return this.fire("movestart"),this._rawPanBy(o.point(t)),this.fire("move"),this.fire("moveend")},setMaxBounds:function(t){return t=o.latLngBounds(t),this.options.maxBounds=t,t?(this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds,this)):this.off("moveend",this._panInsideMaxBounds,this)},panInsideBounds:function(t,e){var i=this.getCenter(),n=this._limitCenter(i,this._zoom,t);return i.equals(n)?this:this.panTo(n,e)},addLayer:function(t){var e=o.stamp(t);return this._layers[e]?this:(this._layers[e]=t,!t.options||isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[e]=t,this._updateZoomLevels()),this.options.zoomAnimation&&o.TileLayer&&t instanceof o.TileLayer&&(this._tileLayersNum++,this._tileLayersToLoad++,t.on("load",this._onTileLayerLoad,this)),this._loaded&&this._layerAdd(t),this)},removeLayer:function(t){var e=o.stamp(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&this.fire("layerremove",{layer:t}),this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels()),this.options.zoomAnimation&&o.TileLayer&&t instanceof o.TileLayer&&(this._tileLayersNum--,this._tileLayersToLoad--,t.off("load",this._onTileLayerLoad,this)),this):this},hasLayer:function(t){return t?o.stamp(t)in this._layers:!1},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},invalidateSize:function(t){if(!this._loaded)return this;t=o.extend({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._initialCenter=null;var i=this.getSize(),n=e.divideBy(2).round(),s=i.divideBy(2).round(),a=n.subtract(s);return a.x||a.y?(t.animate&&t.pan?this.panBy(a):(t.pan&&this._rawPanBy(a),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(o.bind(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i})):this},addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){this._loaded&&this.fire("unload"),this._initEvents("off");try{delete this._container._leaflet}catch(t){this._container._leaflet=i}return this._clearPanes(),this._clearControlPos&&this._clearControlPos(),this._clearHandlers(),this},getCenter:function(){return this._checkIfLoaded(),this._initialCenter&&!this._moved()?this._initialCenter:this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new o.LatLngBounds(e,i)},getMinZoom:function(){return this.options.minZoom===i?this._layersMinZoom===i?0:this._layersMinZoom:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===i?this._layersMaxZoom===i?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=o.latLngBounds(t);var n,s=this.getMinZoom()-(e?1:0),a=this.getMaxZoom(),r=this.getSize(),h=t.getNorthWest(),l=t.getSouthEast(),u=!0;i=o.point(i||[0,0]);do s++,n=this.project(l,s).subtract(this.project(h,s)).add(i),u=e?n.x<r.x||n.y<r.y:r.contains(n);while(u&&a>=s);return u&&e?null:e?s:s-1},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new o.Point(this._container.clientWidth,this._container.clientHeight),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(){var t=this._getTopLeftPoint();return new o.Bounds(t,t.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._initialTopLeftPoint},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t){var e=this.options.crs;return e.scale(t)/e.scale(this._zoom)},getScaleZoom:function(t){return this._zoom+Math.log(t)/Math.LN2},project:function(t,e){return e=e===i?this._zoom:e,this.options.crs.latLngToPoint(o.latLng(t),e)},unproject:function(t,e){return e=e===i?this._zoom:e,this.options.crs.pointToLatLng(o.point(t),e)},layerPointToLatLng:function(t){var e=o.point(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(o.latLng(t))._round();return e._subtract(this.getPixelOrigin())},containerPointToLayerPoint:function(t){return o.point(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return o.point(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(o.point(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(o.latLng(t)))},mouseEventToContainerPoint:function(t){return o.DomEvent.getMousePosition(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=o.DomUtil.get(t);if(!e)throw new Error("Map container not found.");if(e._leaflet)throw new Error("Map container is already initialized.");e._leaflet=!0},_initLayout:function(){var t=this._container;o.DomUtil.addClass(t,"leaflet-container"+(o.Browser.touch?" leaflet-touch":"")+(o.Browser.retina?" leaflet-retina":"")+(o.Browser.ielt9?" leaflet-oldie":"")+(this.options.fadeAnimation?" leaflet-fade-anim":""));var e=o.DomUtil.getStyle(t,"position");"absolute"!==e&&"relative"!==e&&"fixed"!==e&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._mapPane=t.mapPane=this._createPane("leaflet-map-pane",this._container),this._tilePane=t.tilePane=this._createPane("leaflet-tile-pane",this._mapPane),t.objectsPane=this._createPane("leaflet-objects-pane",this._mapPane),t.shadowPane=this._createPane("leaflet-shadow-pane"),t.overlayPane=this._createPane("leaflet-overlay-pane"),t.markerPane=this._createPane("leaflet-marker-pane"),t.popupPane=this._createPane("leaflet-popup-pane");var e=" leaflet-zoom-hide";this.options.markerZoomAnimation||(o.DomUtil.addClass(t.markerPane,e),o.DomUtil.addClass(t.shadowPane,e),o.DomUtil.addClass(t.popupPane,e))},_createPane:function(t,e){return o.DomUtil.create("div",t,e||this._panes.objectsPane)},_clearPanes:function(){this._container.removeChild(this._mapPane)},_addLayers:function(t){t=t?o.Util.isArray(t)?t:[t]:[];for(var e=0,i=t.length;i>e;e++)this.addLayer(t[e])},_resetView:function(t,e,i,n){var s=this._zoom!==e;n||(this.fire("movestart"),s&&this.fire("zoomstart")),this._zoom=e,this._initialCenter=t,this._initialTopLeftPoint=this._getNewTopLeftPoint(t),i?this._initialTopLeftPoint._add(this._getMapPanePos()):o.DomUtil.setPosition(this._mapPane,new o.Point(0,0)),this._tileLayersToLoad=this._tileLayersNum;var a=!this._loaded;this._loaded=!0,this.fire("viewreset",{hard:!i}),a&&(this.fire("load"),this.eachLayer(this._layerAdd,this)),this.fire("move"),(s||n)&&this.fire("zoomend"),this.fire("moveend",{hard:!i})},_rawPanBy:function(t){o.DomUtil.setPosition(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_updateZoomLevels:function(){var t,e=1/0,n=-1/0,o=this._getZoomSpan();for(t in this._zoomBoundLayers){var s=this._zoomBoundLayers[t];isNaN(s.options.minZoom)||(e=Math.min(e,s.options.minZoom)),isNaN(s.options.maxZoom)||(n=Math.max(n,s.options.maxZoom))}t===i?this._layersMaxZoom=this._layersMinZoom=i:(this._layersMaxZoom=n,this._layersMinZoom=e),o!==this._getZoomSpan()&&this.fire("zoomlevelschange")},_panInsideMaxBounds:function(){this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(e){if(o.DomEvent){e=e||"on",o.DomEvent[e](this._container,"click",this._onMouseClick,this);var i,n,s=["dblclick","mousedown","mouseup","mouseenter","mouseleave","mousemove","contextmenu"];for(i=0,n=s.length;n>i;i++)o.DomEvent[e](this._container,s[i],this._fireMouseEvent,this);this.options.trackResize&&o.DomEvent[e](t,"resize",this._onResize,this)}},_onResize:function(){o.Util.cancelAnimFrame(this._resizeRequest),this._resizeRequest=o.Util.requestAnimFrame(function(){this.invalidateSize({debounceMoveend:!0})},this,!1,this._container)},_onMouseClick:function(t){!this._loaded||!t._simulated&&(this.dragging&&this.dragging.moved()||this.boxZoom&&this.boxZoom.moved())||o.DomEvent._skipped(t)||(this.fire("preclick"),this._fireMouseEvent(t))},_fireMouseEvent:function(t){if(this._loaded&&!o.DomEvent._skipped(t)){var e=t.type;if(e="mouseenter"===e?"mouseover":"mouseleave"===e?"mouseout":e,this.hasEventListeners(e)){"contextmenu"===e&&o.DomEvent.preventDefault(t);var i=this.mouseEventToContainerPoint(t),n=this.containerPointToLayerPoint(i),s=this.layerPointToLatLng(n);this.fire(e,{latlng:s,layerPoint:n,containerPoint:i,originalEvent:t})}}},_onTileLayerLoad:function(){this._tileLayersToLoad--,this._tileLayersNum&&!this._tileLayersToLoad&&this.fire("tilelayersload")},_clearHandlers:function(){for(var t=0,e=this._handlers.length;e>t;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,this):this.on("load",t,e),this},_layerAdd:function(t){t.onAdd(this),this.fire("layeradd",{layer:t})},_getMapPanePos:function(){return o.DomUtil.getPosition(this._mapPane)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(){return this.getPixelOrigin().subtract(this._getMapPanePos())},_getNewTopLeftPoint:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewTopLeftPoint(i,e).add(this._getMapPanePos());return this.project(t,e)._subtract(n)},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t;var n=this.project(t,e),s=this.getSize().divideBy(2),a=new o.Bounds(n.subtract(s),n.add(s)),r=this._getBoundsOffset(a,i,e);return this.unproject(n.add(r),e)},_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),n=new o.Bounds(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(n,e))},_getBoundsOffset:function(t,e,i){var n=this.project(e.getNorthWest(),i).subtract(t.min),s=this.project(e.getSouthEast(),i).subtract(t.max),a=this._rebound(n.x,-s.x),r=this._rebound(n.y,-s.y);return new o.Point(a,r)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom();return Math.max(e,Math.min(i,t))}}),o.map=function(t,e){return new o.Map(t,e)},o.Projection.Mercator={MAX_LATITUDE:85.0840591556,R_MINOR:6356752.314245179,R_MAJOR:6378137,project:function(t){var e=o.LatLng.DEG_TO_RAD,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),s=this.R_MAJOR,a=this.R_MINOR,r=t.lng*e*s,h=n*e,l=a/s,u=Math.sqrt(1-l*l),c=u*Math.sin(h);c=Math.pow((1-c)/(1+c),.5*u);var d=Math.tan(.5*(.5*Math.PI-h))/c;return h=-s*Math.log(d),new o.Point(r,h)},unproject:function(t){for(var e,i=o.LatLng.RAD_TO_DEG,n=this.R_MAJOR,s=this.R_MINOR,a=t.x*i/n,r=s/n,h=Math.sqrt(1-r*r),l=Math.exp(-t.y/n),u=Math.PI/2-2*Math.atan(l),c=15,d=1e-7,p=c,_=.1;Math.abs(_)>d&&--p>0;)e=h*Math.sin(u),_=Math.PI/2-2*Math.atan(l*Math.pow((1-e)/(1+e),.5*h))-u,u+=_;
	return new o.LatLng(u*i,a)}},o.CRS.EPSG3395=o.extend({},o.CRS,{code:"EPSG:3395",projection:o.Projection.Mercator,transformation:function(){var t=o.Projection.Mercator,e=t.R_MAJOR,i=.5/(Math.PI*e);return new o.Transformation(i,.5,-i,.5)}()}),o.TileLayer=o.Class.extend({includes:o.Mixin.Events,options:{minZoom:0,maxZoom:18,tileSize:256,subdomains:"abc",errorTileUrl:"",attribution:"",zoomOffset:0,opacity:1,unloadInvisibleTiles:o.Browser.mobile,updateWhenIdle:o.Browser.mobile},initialize:function(t,e){e=o.setOptions(this,e),e.detectRetina&&o.Browser.retina&&e.maxZoom>0&&(e.tileSize=Math.floor(e.tileSize/2),e.zoomOffset++,e.minZoom>0&&e.minZoom--,this.options.maxZoom--),e.bounds&&(e.bounds=o.latLngBounds(e.bounds)),this._url=t;var i=this.options.subdomains;"string"==typeof i&&(this.options.subdomains=i.split(""))},onAdd:function(t){this._map=t,this._animated=t._zoomAnimated,this._initContainer(),t.on({viewreset:this._reset,moveend:this._update},this),this._animated&&t.on({zoomanim:this._animateZoom,zoomend:this._endZoomAnim},this),this.options.updateWhenIdle||(this._limitedUpdate=o.Util.limitExecByInterval(this._update,150,this),t.on("move",this._limitedUpdate,this)),this._reset(),this._update()},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){this._container.parentNode.removeChild(this._container),t.off({viewreset:this._reset,moveend:this._update},this),this._animated&&t.off({zoomanim:this._animateZoom,zoomend:this._endZoomAnim},this),this.options.updateWhenIdle||t.off("move",this._limitedUpdate,this),this._container=null,this._map=null},bringToFront:function(){var t=this._map._panes.tilePane;return this._container&&(t.appendChild(this._container),this._setAutoZIndex(t,Math.max)),this},bringToBack:function(){var t=this._map._panes.tilePane;return this._container&&(t.insertBefore(this._container,t.firstChild),this._setAutoZIndex(t,Math.min)),this},getAttribution:function(){return this.options.attribution},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},setUrl:function(t,e){return this._url=t,e||this.redraw(),this},redraw:function(){return this._map&&(this._reset({hard:!0}),this._update()),this},_updateZIndex:function(){this._container&&this.options.zIndex!==i&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t,e){var i,n,o,s=t.children,a=-e(1/0,-1/0);for(n=0,o=s.length;o>n;n++)s[n]!==this._container&&(i=parseInt(s[n].style.zIndex,10),isNaN(i)||(a=e(a,i)));this.options.zIndex=this._container.style.zIndex=(isFinite(a)?a:0)+e(1,-1)},_updateOpacity:function(){var t,e=this._tiles;if(o.Browser.ielt9)for(t in e)o.DomUtil.setOpacity(e[t],this.options.opacity);else o.DomUtil.setOpacity(this._container,this.options.opacity)},_initContainer:function(){var t=this._map._panes.tilePane;if(!this._container){if(this._container=o.DomUtil.create("div","leaflet-layer"),this._updateZIndex(),this._animated){var e="leaflet-tile-container";this._bgBuffer=o.DomUtil.create("div",e,this._container),this._tileContainer=o.DomUtil.create("div",e,this._container)}else this._tileContainer=this._container;t.appendChild(this._container),this.options.opacity<1&&this._updateOpacity()}},_reset:function(t){for(var e in this._tiles)this.fire("tileunload",{tile:this._tiles[e]});this._tiles={},this._tilesToLoad=0,this.options.reuseTiles&&(this._unusedTiles=[]),this._tileContainer.innerHTML="",this._animated&&t&&t.hard&&this._clearBgBuffer(),this._initContainer()},_getTileSize:function(){var t=this._map,e=t.getZoom()+this.options.zoomOffset,i=this.options.maxNativeZoom,n=this.options.tileSize;return i&&e>i&&(n=Math.round(t.getZoomScale(e)/t.getZoomScale(i)*n)),n},_update:function(){if(this._map){var t=this._map,e=t.getPixelBounds(),i=t.getZoom(),n=this._getTileSize();if(!(i>this.options.maxZoom||i<this.options.minZoom)){var s=o.bounds(e.min.divideBy(n)._floor(),e.max.divideBy(n)._floor());this._addTilesFromCenterOut(s),(this.options.unloadInvisibleTiles||this.options.reuseTiles)&&this._removeOtherTiles(s)}}},_addTilesFromCenterOut:function(t){var i,n,s,a=[],r=t.getCenter();for(i=t.min.y;i<=t.max.y;i++)for(n=t.min.x;n<=t.max.x;n++)s=new o.Point(n,i),this._tileShouldBeLoaded(s)&&a.push(s);var h=a.length;if(0!==h){a.sort(function(t,e){return t.distanceTo(r)-e.distanceTo(r)});var l=e.createDocumentFragment();for(this._tilesToLoad||this.fire("loading"),this._tilesToLoad+=h,n=0;h>n;n++)this._addTile(a[n],l);this._tileContainer.appendChild(l)}},_tileShouldBeLoaded:function(t){if(t.x+":"+t.y in this._tiles)return!1;var e=this.options;if(!e.continuousWorld){var i=this._getWrapTileNum();if(e.noWrap&&(t.x<0||t.x>=i.x)||t.y<0||t.y>=i.y)return!1}if(e.bounds){var n=e.tileSize,o=t.multiplyBy(n),s=o.add([n,n]),a=this._map.unproject(o),r=this._map.unproject(s);if(e.continuousWorld||e.noWrap||(a=a.wrap(),r=r.wrap()),!e.bounds.intersects([a,r]))return!1}return!0},_removeOtherTiles:function(t){var e,i,n,o;for(o in this._tiles)e=o.split(":"),i=parseInt(e[0],10),n=parseInt(e[1],10),(i<t.min.x||i>t.max.x||n<t.min.y||n>t.max.y)&&this._removeTile(o)},_removeTile:function(t){var e=this._tiles[t];this.fire("tileunload",{tile:e,url:e.src}),this.options.reuseTiles?(o.DomUtil.removeClass(e,"leaflet-tile-loaded"),this._unusedTiles.push(e)):e.parentNode===this._tileContainer&&this._tileContainer.removeChild(e),o.Browser.android||(e.onload=null,e.src=o.Util.emptyImageUrl),delete this._tiles[t]},_addTile:function(t,e){var i=this._getTilePos(t),n=this._getTile();o.DomUtil.setPosition(n,i,o.Browser.chrome),this._tiles[t.x+":"+t.y]=n,this._loadTile(n,t),n.parentNode!==this._tileContainer&&e.appendChild(n)},_getZoomForUrl:function(){var t=this.options,e=this._map.getZoom();return t.zoomReverse&&(e=t.maxZoom-e),e+=t.zoomOffset,t.maxNativeZoom?Math.min(e,t.maxNativeZoom):e},_getTilePos:function(t){var e=this._map.getPixelOrigin(),i=this._getTileSize();return t.multiplyBy(i).subtract(e)},getTileUrl:function(t){return o.Util.template(this._url,o.extend({s:this._getSubdomain(t),z:t.z,x:t.x,y:t.y},this.options))},_getWrapTileNum:function(){var t=this._map.options.crs,e=t.getSize(this._map.getZoom());return e.divideBy(this._getTileSize())._floor()},_adjustTilePoint:function(t){var e=this._getWrapTileNum();this.options.continuousWorld||this.options.noWrap||(t.x=(t.x%e.x+e.x)%e.x),this.options.tms&&(t.y=e.y-t.y-1),t.z=this._getZoomForUrl()},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_getTile:function(){if(this.options.reuseTiles&&this._unusedTiles.length>0){var t=this._unusedTiles.pop();return this._resetTile(t),t}return this._createTile()},_resetTile:function(){},_createTile:function(){var t=o.DomUtil.create("img","leaflet-tile");return t.style.width=t.style.height=this._getTileSize()+"px",t.galleryimg="no",t.onselectstart=t.onmousemove=o.Util.falseFn,o.Browser.ielt9&&this.options.opacity!==i&&o.DomUtil.setOpacity(t,this.options.opacity),o.Browser.mobileWebkit3d&&(t.style.WebkitBackfaceVisibility="hidden"),t},_loadTile:function(t,e){t._layer=this,t.onload=this._tileOnLoad,t.onerror=this._tileOnError,this._adjustTilePoint(e),t.src=this.getTileUrl(e),this.fire("tileloadstart",{tile:t,url:t.src})},_tileLoaded:function(){this._tilesToLoad--,this._animated&&o.DomUtil.addClass(this._tileContainer,"leaflet-zoom-animated"),this._tilesToLoad||(this.fire("load"),this._animated&&(clearTimeout(this._clearBgBufferTimer),this._clearBgBufferTimer=setTimeout(o.bind(this._clearBgBuffer,this),500)))},_tileOnLoad:function(){var t=this._layer;this.src!==o.Util.emptyImageUrl&&(o.DomUtil.addClass(this,"leaflet-tile-loaded"),t.fire("tileload",{tile:this,url:this.src})),t._tileLoaded()},_tileOnError:function(){var t=this._layer;t.fire("tileerror",{tile:this,url:this.src});var e=t.options.errorTileUrl;e&&(this.src=e),t._tileLoaded()}}),o.tileLayer=function(t,e){return new o.TileLayer(t,e)},o.TileLayer.WMS=o.TileLayer.extend({defaultWmsParams:{service:"WMS",request:"GetMap",version:"1.1.1",layers:"",styles:"",format:"image/jpeg",transparent:!1},initialize:function(t,e){this._url=t;var i=o.extend({},this.defaultWmsParams),n=e.tileSize||this.options.tileSize;i.width=i.height=e.detectRetina&&o.Browser.retina?2*n:n;for(var s in e)this.options.hasOwnProperty(s)||"crs"===s||(i[s]=e[s]);this.wmsParams=i,o.setOptions(this,e)},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,o.TileLayer.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._map,i=this.options.tileSize,n=t.multiplyBy(i),s=n.add([i,i]),a=this._crs.project(e.unproject(n,t.z)),r=this._crs.project(e.unproject(s,t.z)),h=this._wmsVersion>=1.3&&this._crs===o.CRS.EPSG4326?[r.y,a.x,a.y,r.x].join(","):[a.x,r.y,r.x,a.y].join(","),l=o.Util.template(this._url,{s:this._getSubdomain(t)});return l+o.Util.getParamString(this.wmsParams,l,!0)+"&BBOX="+h},setParams:function(t,e){return o.extend(this.wmsParams,t),e||this.redraw(),this}}),o.tileLayer.wms=function(t,e){return new o.TileLayer.WMS(t,e)},o.TileLayer.Canvas=o.TileLayer.extend({options:{async:!1},initialize:function(t){o.setOptions(this,t)},redraw:function(){this._map&&(this._reset({hard:!0}),this._update());for(var t in this._tiles)this._redrawTile(this._tiles[t]);return this},_redrawTile:function(t){this.drawTile(t,t._tilePoint,this._map._zoom)},_createTile:function(){var t=o.DomUtil.create("canvas","leaflet-tile");return t.width=t.height=this.options.tileSize,t.onselectstart=t.onmousemove=o.Util.falseFn,t},_loadTile:function(t,e){t._layer=this,t._tilePoint=e,this._redrawTile(t),this.options.async||this.tileDrawn(t)},drawTile:function(){},tileDrawn:function(t){this._tileOnLoad.call(t)}}),o.tileLayer.canvas=function(t){return new o.TileLayer.Canvas(t)},o.ImageOverlay=o.Class.extend({includes:o.Mixin.Events,options:{opacity:1},initialize:function(t,e,i){this._url=t,this._bounds=o.latLngBounds(e),o.setOptions(this,i)},onAdd:function(t){this._map=t,this._image||this._initImage(),t._panes.overlayPane.appendChild(this._image),t.on("viewreset",this._reset,this),t.options.zoomAnimation&&o.Browser.any3d&&t.on("zoomanim",this._animateZoom,this),this._reset()},onRemove:function(t){t.getPanes().overlayPane.removeChild(this._image),t.off("viewreset",this._reset,this),t.options.zoomAnimation&&t.off("zoomanim",this._animateZoom,this)},addTo:function(t){return t.addLayer(this),this},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},bringToFront:function(){return this._image&&this._map._panes.overlayPane.appendChild(this._image),this},bringToBack:function(){var t=this._map._panes.overlayPane;return this._image&&t.insertBefore(this._image,t.firstChild),this},setUrl:function(t){this._url=t,this._image.src=this._url},getAttribution:function(){return this.options.attribution},_initImage:function(){this._image=o.DomUtil.create("img","leaflet-image-layer"),this._map.options.zoomAnimation&&o.Browser.any3d?o.DomUtil.addClass(this._image,"leaflet-zoom-animated"):o.DomUtil.addClass(this._image,"leaflet-zoom-hide"),this._updateOpacity(),o.extend(this._image,{galleryimg:"no",onselectstart:o.Util.falseFn,onmousemove:o.Util.falseFn,onload:o.bind(this._onImageLoad,this),src:this._url})},_animateZoom:function(t){var e=this._map,i=this._image,n=e.getZoomScale(t.zoom),s=this._bounds.getNorthWest(),a=this._bounds.getSouthEast(),r=e._latLngToNewLayerPoint(s,t.zoom,t.center),h=e._latLngToNewLayerPoint(a,t.zoom,t.center)._subtract(r),l=r._add(h._multiplyBy(.5*(1-1/n)));i.style[o.DomUtil.TRANSFORM]=o.DomUtil.getTranslateString(l)+" scale("+n+") "},_reset:function(){var t=this._image,e=this._map.latLngToLayerPoint(this._bounds.getNorthWest()),i=this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(e);o.DomUtil.setPosition(t,e),t.style.width=i.x+"px",t.style.height=i.y+"px"},_onImageLoad:function(){this.fire("load")},_updateOpacity:function(){o.DomUtil.setOpacity(this._image,this.options.opacity)}}),o.imageOverlay=function(t,e,i){return new o.ImageOverlay(t,e,i)},o.Icon=o.Class.extend({options:{className:""},initialize:function(t){o.setOptions(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n;return n=e&&"IMG"===e.tagName?this._createImg(i,e):this._createImg(i),this._setIconStyles(n,t),n},_setIconStyles:function(t,e){var i,n=this.options,s=o.point(n[e+"Size"]);i=o.point("shadow"===e?n.shadowAnchor||n.iconAnchor:n.iconAnchor),!i&&s&&(i=s.divideBy(2,!0)),t.className="leaflet-marker-"+e+" "+n.className,i&&(t.style.marginLeft=-i.x+"px",t.style.marginTop=-i.y+"px"),s&&(t.style.width=s.x+"px",t.style.height=s.y+"px")},_createImg:function(t,i){return i=i||e.createElement("img"),i.src=t,i},_getIconUrl:function(t){return o.Browser.retina&&this.options[t+"RetinaUrl"]?this.options[t+"RetinaUrl"]:this.options[t+"Url"]}}),o.icon=function(t){return new o.Icon(t)},o.Icon.Default=o.Icon.extend({options:{iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]},_getIconUrl:function(t){var e=t+"Url";if(this.options[e])return this.options[e];o.Browser.retina&&"icon"===t&&(t+="-2x");var i=o.Icon.Default.imagePath;if(!i)throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");return i+"/marker-"+t+".png"}}),o.Icon.Default.imagePath=function(){var t,i,n,o,s,a=e.getElementsByTagName("script"),r=/[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;for(t=0,i=a.length;i>t;t++)if(n=a[t].src,o=n.match(r))return s=n.split(r)[0],(s?s+"/":"")+"images"}(),o.Marker=o.Class.extend({includes:o.Mixin.Events,options:{icon:new o.Icon.Default,title:"",alt:"",clickable:!0,draggable:!1,keyboard:!0,zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250},initialize:function(t,e){o.setOptions(this,e),this._latlng=o.latLng(t)},onAdd:function(t){this._map=t,t.on("viewreset",this.update,this),this._initIcon(),this.update(),this.fire("add"),t.options.zoomAnimation&&t.options.markerZoomAnimation&&t.on("zoomanim",this._animateZoom,this)},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){this.dragging&&this.dragging.disable(),this._removeIcon(),this._removeShadow(),this.fire("remove"),t.off({viewreset:this.update,zoomanim:this._animateZoom},this),this._map=null},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=o.latLng(t),this.update(),this.fire("move",{latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update(),this},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup),this},update:function(){if(this._icon){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e=this._map,i=e.options.zoomAnimation&&e.options.markerZoomAnimation,n=i?"leaflet-zoom-animated":"leaflet-zoom-hide",s=t.icon.createIcon(this._icon),a=!1;s!==this._icon&&(this._icon&&this._removeIcon(),a=!0,t.title&&(s.title=t.title),t.alt&&(s.alt=t.alt)),o.DomUtil.addClass(s,n),t.keyboard&&(s.tabIndex="0"),this._icon=s,this._initInteraction(),t.riseOnHover&&o.DomEvent.on(s,"mouseover",this._bringToFront,this).on(s,"mouseout",this._resetZIndex,this);var r=t.icon.createShadow(this._shadow),h=!1;r!==this._shadow&&(this._removeShadow(),h=!0),r&&o.DomUtil.addClass(r,n),this._shadow=r,t.opacity<1&&this._updateOpacity();var l=this._map._panes;a&&l.markerPane.appendChild(this._icon),r&&h&&l.shadowPane.appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&o.DomEvent.off(this._icon,"mouseover",this._bringToFront).off(this._icon,"mouseout",this._resetZIndex),this._map._panes.markerPane.removeChild(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&this._map._panes.shadowPane.removeChild(this._shadow),this._shadow=null},_setPos:function(t){o.DomUtil.setPosition(this._icon,t),this._shadow&&o.DomUtil.setPosition(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon.style.zIndex=this._zIndex+t},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.clickable){var t=this._icon,e=["dblclick","mousedown","mouseover","mouseout","contextmenu"];o.DomUtil.addClass(t,"leaflet-clickable"),o.DomEvent.on(t,"click",this._onMouseClick,this),o.DomEvent.on(t,"keypress",this._onKeyPress,this);for(var i=0;i<e.length;i++)o.DomEvent.on(t,e[i],this._fireMouseEvent,this);o.Handler.MarkerDrag&&(this.dragging=new o.Handler.MarkerDrag(this),this.options.draggable&&this.dragging.enable())}},_onMouseClick:function(t){var e=this.dragging&&this.dragging.moved();(this.hasEventListeners(t.type)||e)&&o.DomEvent.stopPropagation(t),e||(this.dragging&&this.dragging._enabled||!this._map.dragging||!this._map.dragging.moved())&&this.fire(t.type,{originalEvent:t,latlng:this._latlng})},_onKeyPress:function(t){13===t.keyCode&&this.fire("click",{originalEvent:t,latlng:this._latlng})},_fireMouseEvent:function(t){this.fire(t.type,{originalEvent:t,latlng:this._latlng}),"contextmenu"===t.type&&this.hasEventListeners(t.type)&&o.DomEvent.preventDefault(t),"mousedown"!==t.type?o.DomEvent.stopPropagation(t):o.DomEvent.preventDefault(t)},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){o.DomUtil.setOpacity(this._icon,this.options.opacity),this._shadow&&o.DomUtil.setOpacity(this._shadow,this.options.opacity)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)}}),o.marker=function(t,e){return new o.Marker(t,e)},o.DivIcon=o.Icon.extend({options:{iconSize:[12,12],className:"leaflet-div-icon",html:!1},createIcon:function(t){var i=t&&"DIV"===t.tagName?t:e.createElement("div"),n=this.options;return i.innerHTML=n.html!==!1?n.html:"",n.bgPos&&(i.style.backgroundPosition=-n.bgPos.x+"px "+-n.bgPos.y+"px"),this._setIconStyles(i,"icon"),i},createShadow:function(){return null}}),o.divIcon=function(t){return new o.DivIcon(t)},o.Map.mergeOptions({closePopupOnClick:!0}),o.Popup=o.Class.extend({includes:o.Mixin.Events,options:{minWidth:50,maxWidth:300,autoPan:!0,closeButton:!0,offset:[0,7],autoPanPadding:[5,5],keepInView:!1,className:"",zoomAnimation:!0},initialize:function(t,e){o.setOptions(this,t),this._source=e,this._animated=o.Browser.any3d&&this.options.zoomAnimation,this._isOpen=!1},onAdd:function(t){this._map=t,this._container||this._initLayout();var e=t.options.fadeAnimation;e&&o.DomUtil.setOpacity(this._container,0),t._panes.popupPane.appendChild(this._container),t.on(this._getEvents(),this),this.update(),e&&o.DomUtil.setOpacity(this._container,1),this.fire("open"),t.fire("popupopen",{popup:this}),this._source&&this._source.fire("popupopen",{popup:this})},addTo:function(t){return t.addLayer(this),this},openOn:function(t){return t.openPopup(this),this},onRemove:function(t){t._panes.popupPane.removeChild(this._container),o.Util.falseFn(this._container.offsetWidth),t.off(this._getEvents(),this),t.options.fadeAnimation&&o.DomUtil.setOpacity(this._container,0),this._map=null,this.fire("close"),t.fire("popupclose",{popup:this}),this._source&&this._source.fire("popupclose",{popup:this})},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=o.latLng(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},_getEvents:function(){var t={viewreset:this._updatePosition};return this._animated&&(t.zoomanim=this._zoomAnimation),("closeOnClick"in this.options?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this._close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_close:function(){this._map&&this._map.closePopup(this)},_initLayout:function(){var t,e="leaflet-popup",i=e+" "+this.options.className+" leaflet-zoom-"+(this._animated?"animated":"hide"),n=this._container=o.DomUtil.create("div",i);this.options.closeButton&&(t=this._closeButton=o.DomUtil.create("a",e+"-close-button",n),t.href="#close",t.innerHTML="&#215;",o.DomEvent.disableClickPropagation(t),o.DomEvent.on(t,"click",this._onCloseButtonClick,this));var s=this._wrapper=o.DomUtil.create("div",e+"-content-wrapper",n);o.DomEvent.disableClickPropagation(s),this._contentNode=o.DomUtil.create("div",e+"-content",s),o.DomEvent.disableScrollPropagation(this._contentNode),o.DomEvent.on(s,"contextmenu",o.DomEvent.stopPropagation),this._tipContainer=o.DomUtil.create("div",e+"-tip-container",n),this._tip=o.DomUtil.create("div",e+"-tip",this._tipContainer)},_updateContent:function(){if(this._content){if("string"==typeof this._content)this._contentNode.innerHTML=this._content;else{for(;this._contentNode.hasChildNodes();)this._contentNode.removeChild(this._contentNode.firstChild);this._contentNode.appendChild(this._content)}this.fire("contentupdate")}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var n=t.offsetHeight,s=this.options.maxHeight,a="leaflet-popup-scrolled";s&&n>s?(e.height=s+"px",o.DomUtil.addClass(t,a)):o.DomUtil.removeClass(t,a),this._containerWidth=this._container.offsetWidth},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=this._animated,i=o.point(this.options.offset);e&&o.DomUtil.setPosition(this._container,t),this._containerBottom=-i.y-(e?0:t.y),this._containerLeft=-Math.round(this._containerWidth/2)+i.x+(e?0:t.x),this._container.style.bottom=this._containerBottom+"px",this._container.style.left=this._containerLeft+"px"}},_zoomAnimation:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);o.DomUtil.setPosition(this._container,e)},_adjustPan:function(){if(this.options.autoPan){var t=this._map,e=this._container.offsetHeight,i=this._containerWidth,n=new o.Point(this._containerLeft,-e-this._containerBottom);this._animated&&n._add(o.DomUtil.getPosition(this._container));var s=t.layerPointToContainerPoint(n),a=o.point(this.options.autoPanPadding),r=o.point(this.options.autoPanPaddingTopLeft||a),h=o.point(this.options.autoPanPaddingBottomRight||a),l=t.getSize(),u=0,c=0;s.x+i+h.x>l.x&&(u=s.x+i-l.x+h.x),s.x-u-r.x<0&&(u=s.x-r.x),s.y+e+h.y>l.y&&(c=s.y+e-l.y+h.y),s.y-c-r.y<0&&(c=s.y-r.y),(u||c)&&t.fire("autopanstart").panBy([u,c])}},_onCloseButtonClick:function(t){this._close(),o.DomEvent.stop(t)}}),o.popup=function(t,e){return new o.Popup(t,e)},o.Map.include({openPopup:function(t,e,i){if(this.closePopup(),!(t instanceof o.Popup)){var n=t;t=new o.Popup(i).setLatLng(e).setContent(n)}return t._isOpen=!0,this._popup=t,this.addLayer(t)},closePopup:function(t){return t&&t!==this._popup||(t=this._popup,this._popup=null),t&&(this.removeLayer(t),t._isOpen=!1),this}}),o.Marker.include({openPopup:function(){return this._popup&&this._map&&!this._map.hasLayer(this._popup)&&(this._popup.setLatLng(this._latlng),this._map.openPopup(this._popup)),this},closePopup:function(){return this._popup&&this._popup._close(),this},togglePopup:function(){return this._popup&&(this._popup._isOpen?this.closePopup():this.openPopup()),this},bindPopup:function(t,e){var i=o.point(this.options.icon.options.popupAnchor||[0,0]);return i=i.add(o.Popup.prototype.options.offset),e&&e.offset&&(i=i.add(e.offset)),e=o.extend({offset:i},e),this._popupHandlersAdded||(this.on("click",this.togglePopup,this).on("remove",this.closePopup,this).on("move",this._movePopup,this),this._popupHandlersAdded=!0),t instanceof o.Popup?(o.setOptions(t,e),this._popup=t):this._popup=new o.Popup(e,this).setContent(t),this},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},unbindPopup:function(){return this._popup&&(this._popup=null,this.off("click",this.togglePopup,this).off("remove",this.closePopup,this).off("move",this._movePopup,this),this._popupHandlersAdded=!1),this},getPopup:function(){return this._popup},_movePopup:function(t){this._popup.setLatLng(t.latlng)}}),o.LayerGroup=o.Class.extend({initialize:function(t){this._layers={};var e,i;if(t)for(e=0,i=t.length;i>e;e++)this.addLayer(t[e])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){return t?t in this._layers||this.getLayerId(t)in this._layers:!1},clearLayers:function(){return this.eachLayer(this.removeLayer,this),this},invoke:function(t){var e,i,n=Array.prototype.slice.call(arguments,1);for(e in this._layers)i=this._layers[e],i[t]&&i[t].apply(i,n);return this},onAdd:function(t){this._map=t,this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t),this._map=null},addTo:function(t){return t.addLayer(this),this},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];for(var e in this._layers)t.push(this._layers[e]);return t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return o.stamp(t)}}),o.layerGroup=function(t){return new o.LayerGroup(t)},o.FeatureGroup=o.LayerGroup.extend({includes:o.Mixin.Events,statics:{EVENTS:"click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"},addLayer:function(t){return this.hasLayer(t)?this:("on"in t&&t.on(o.FeatureGroup.EVENTS,this._propagateEvent,this),o.LayerGroup.prototype.addLayer.call(this,t),this._popupContent&&t.bindPopup&&t.bindPopup(this._popupContent,this._popupOptions),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.off(o.FeatureGroup.EVENTS,this._propagateEvent,this),o.LayerGroup.prototype.removeLayer.call(this,t),this._popupContent&&this.invoke("unbindPopup"),this.fire("layerremove",{layer:t})):this},bindPopup:function(t,e){return this._popupContent=t,this._popupOptions=e,this.invoke("bindPopup",t,e)},openPopup:function(t){for(var e in this._layers){this._layers[e].openPopup(t);break}return this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new o.LatLngBounds;return this.eachLayer(function(e){t.extend(e instanceof o.Marker?e.getLatLng():e.getBounds())}),t},_propagateEvent:function(t){t=o.extend({layer:t.target,target:this},t),this.fire(t.type,t)}}),o.featureGroup=function(t){return new o.FeatureGroup(t)},o.Path=o.Class.extend({includes:[o.Mixin.Events],statics:{CLIP_PADDING:function(){var e=o.Browser.mobile?1280:2e3,i=(e/Math.max(t.outerWidth,t.outerHeight)-1)/2;return Math.max(0,Math.min(.5,i))}()},options:{stroke:!0,color:"#0033ff",dashArray:null,lineCap:null,lineJoin:null,weight:5,opacity:.5,fill:!1,fillColor:null,fillOpacity:.2,clickable:!0},initialize:function(t){o.setOptions(this,t)},onAdd:function(t){this._map=t,this._container||(this._initElements(),this._initEvents()),this.projectLatlngs(),this._updatePath(),this._container&&this._map._pathRoot.appendChild(this._container),this.fire("add"),t.on({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){t._pathRoot.removeChild(this._container),this.fire("remove"),this._map=null,o.Browser.vml&&(this._container=null,this._stroke=null,this._fill=null),t.off({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},projectLatlngs:function(){},setStyle:function(t){return o.setOptions(this,t),this._container&&this._updateStyle(),this},redraw:function(){return this._map&&(this.projectLatlngs(),this._updatePath()),this}}),o.Map.include({_updatePathViewport:function(){var t=o.Path.CLIP_PADDING,e=this.getSize(),i=o.DomUtil.getPosition(this._mapPane),n=i.multiplyBy(-1)._subtract(e.multiplyBy(t)._round()),s=n.add(e.multiplyBy(1+2*t)._round());this._pathViewport=new o.Bounds(n,s)}}),o.Path.SVG_NS="http://www.w3.org/2000/svg",o.Browser.svg=!(!e.createElementNS||!e.createElementNS(o.Path.SVG_NS,"svg").createSVGRect),o.Path=o.Path.extend({statics:{SVG:o.Browser.svg},bringToFront:function(){var t=this._map._pathRoot,e=this._container;return e&&t.lastChild!==e&&t.appendChild(e),this},bringToBack:function(){var t=this._map._pathRoot,e=this._container,i=t.firstChild;return e&&i!==e&&t.insertBefore(e,i),this},getPathString:function(){},_createElement:function(t){return e.createElementNS(o.Path.SVG_NS,t)},_initElements:function(){this._map._initPathRoot(),this._initPath(),this._initStyle()},_initPath:function(){this._container=this._createElement("g"),this._path=this._createElement("path"),this.options.className&&o.DomUtil.addClass(this._path,this.options.className),this._container.appendChild(this._path)},_initStyle:function(){this.options.stroke&&(this._path.setAttribute("stroke-linejoin","round"),this._path.setAttribute("stroke-linecap","round")),this.options.fill&&this._path.setAttribute("fill-rule","evenodd"),this.options.pointerEvents&&this._path.setAttribute("pointer-events",this.options.pointerEvents),this.options.clickable||this.options.pointerEvents||this._path.setAttribute("pointer-events","none"),this._updateStyle()},_updateStyle:function(){this.options.stroke?(this._path.setAttribute("stroke",this.options.color),this._path.setAttribute("stroke-opacity",this.options.opacity),this._path.setAttribute("stroke-width",this.options.weight),this.options.dashArray?this._path.setAttribute("stroke-dasharray",this.options.dashArray):this._path.removeAttribute("stroke-dasharray"),this.options.lineCap&&this._path.setAttribute("stroke-linecap",this.options.lineCap),this.options.lineJoin&&this._path.setAttribute("stroke-linejoin",this.options.lineJoin)):this._path.setAttribute("stroke","none"),this.options.fill?(this._path.setAttribute("fill",this.options.fillColor||this.options.color),this._path.setAttribute("fill-opacity",this.options.fillOpacity)):this._path.setAttribute("fill","none")},_updatePath:function(){var t=this.getPathString();t||(t="M0 0"),this._path.setAttribute("d",t)},_initEvents:function(){if(this.options.clickable){(o.Browser.svg||!o.Browser.vml)&&o.DomUtil.addClass(this._path,"leaflet-clickable"),o.DomEvent.on(this._container,"click",this._onMouseClick,this);for(var t=["dblclick","mousedown","mouseover","mouseout","mousemove","contextmenu"],e=0;e<t.length;e++)o.DomEvent.on(this._container,t[e],this._fireMouseEvent,this)}},_onMouseClick:function(t){this._map.dragging&&this._map.dragging.moved()||this._fireMouseEvent(t)},_fireMouseEvent:function(t){if(this.hasEventListeners(t.type)){var e=this._map,i=e.mouseEventToContainerPoint(t),n=e.containerPointToLayerPoint(i),s=e.layerPointToLatLng(n);this.fire(t.type,{latlng:s,layerPoint:n,containerPoint:i,originalEvent:t}),"contextmenu"===t.type&&o.DomEvent.preventDefault(t),"mousemove"!==t.type&&o.DomEvent.stopPropagation(t)}}}),o.Map.include({_initPathRoot:function(){this._pathRoot||(this._pathRoot=o.Path.prototype._createElement("svg"),this._panes.overlayPane.appendChild(this._pathRoot),this.options.zoomAnimation&&o.Browser.any3d?(o.DomUtil.addClass(this._pathRoot,"leaflet-zoom-animated"),this.on({zoomanim:this._animatePathZoom,zoomend:this._endPathZoom})):o.DomUtil.addClass(this._pathRoot,"leaflet-zoom-hide"),this.on("moveend",this._updateSvgViewport),this._updateSvgViewport())
	},_animatePathZoom:function(t){var e=this.getZoomScale(t.zoom),i=this._getCenterOffset(t.center)._multiplyBy(-e)._add(this._pathViewport.min);this._pathRoot.style[o.DomUtil.TRANSFORM]=o.DomUtil.getTranslateString(i)+" scale("+e+") ",this._pathZooming=!0},_endPathZoom:function(){this._pathZooming=!1},_updateSvgViewport:function(){if(!this._pathZooming){this._updatePathViewport();var t=this._pathViewport,e=t.min,i=t.max,n=i.x-e.x,s=i.y-e.y,a=this._pathRoot,r=this._panes.overlayPane;o.Browser.mobileWebkit&&r.removeChild(a),o.DomUtil.setPosition(a,e),a.setAttribute("width",n),a.setAttribute("height",s),a.setAttribute("viewBox",[e.x,e.y,n,s].join(" ")),o.Browser.mobileWebkit&&r.appendChild(a)}}}),o.Path.include({bindPopup:function(t,e){return t instanceof o.Popup?this._popup=t:((!this._popup||e)&&(this._popup=new o.Popup(e,this)),this._popup.setContent(t)),this._popupHandlersAdded||(this.on("click",this._openPopup,this).on("remove",this.closePopup,this),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this._popup=null,this.off("click",this._openPopup).off("remove",this.closePopup),this._popupHandlersAdded=!1),this},openPopup:function(t){return this._popup&&(t=t||this._latlng||this._latlngs[Math.floor(this._latlngs.length/2)],this._openPopup({latlng:t})),this},closePopup:function(){return this._popup&&this._popup._close(),this},_openPopup:function(t){this._popup.setLatLng(t.latlng),this._map.openPopup(this._popup)}}),o.Browser.vml=!o.Browser.svg&&function(){try{var t=e.createElement("div");t.innerHTML='<v:shape adj="1"/>';var i=t.firstChild;return i.style.behavior="url(#default#VML)",i&&"object"==typeof i.adj}catch(n){return!1}}(),o.Path=o.Browser.svg||!o.Browser.vml?o.Path:o.Path.extend({statics:{VML:!0,CLIP_PADDING:.02},_createElement:function(){try{return e.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return e.createElement("<lvml:"+t+' class="lvml">')}}catch(t){return function(t){return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),_initPath:function(){var t=this._container=this._createElement("shape");o.DomUtil.addClass(t,"leaflet-vml-shape"+(this.options.className?" "+this.options.className:"")),this.options.clickable&&o.DomUtil.addClass(t,"leaflet-clickable"),t.coordsize="1 1",this._path=this._createElement("path"),t.appendChild(this._path),this._map._pathRoot.appendChild(t)},_initStyle:function(){this._updateStyle()},_updateStyle:function(){var t=this._stroke,e=this._fill,i=this.options,n=this._container;n.stroked=i.stroke,n.filled=i.fill,i.stroke?(t||(t=this._stroke=this._createElement("stroke"),t.endcap="round",n.appendChild(t)),t.weight=i.weight+"px",t.color=i.color,t.opacity=i.opacity,t.dashStyle=i.dashArray?o.Util.isArray(i.dashArray)?i.dashArray.join(" "):i.dashArray.replace(/( *, *)/g," "):"",i.lineCap&&(t.endcap=i.lineCap.replace("butt","flat")),i.lineJoin&&(t.joinstyle=i.lineJoin)):t&&(n.removeChild(t),this._stroke=null),i.fill?(e||(e=this._fill=this._createElement("fill"),n.appendChild(e)),e.color=i.fillColor||i.color,e.opacity=i.fillOpacity):e&&(n.removeChild(e),this._fill=null)},_updatePath:function(){var t=this._container.style;t.display="none",this._path.v=this.getPathString()+" ",t.display=""}}),o.Map.include(o.Browser.svg||!o.Browser.vml?{}:{_initPathRoot:function(){if(!this._pathRoot){var t=this._pathRoot=e.createElement("div");t.className="leaflet-vml-container",this._panes.overlayPane.appendChild(t),this.on("moveend",this._updatePathViewport),this._updatePathViewport()}}}),o.Browser.canvas=function(){return!!e.createElement("canvas").getContext}(),o.Path=o.Path.SVG&&!t.L_PREFER_CANVAS||!o.Browser.canvas?o.Path:o.Path.extend({statics:{CANVAS:!0,SVG:!1},redraw:function(){return this._map&&(this.projectLatlngs(),this._requestUpdate()),this},setStyle:function(t){return o.setOptions(this,t),this._map&&(this._updateStyle(),this._requestUpdate()),this},onRemove:function(t){t.off("viewreset",this.projectLatlngs,this).off("moveend",this._updatePath,this),this.options.clickable&&(this._map.off("click",this._onClick,this),this._map.off("mousemove",this._onMouseMove,this)),this._requestUpdate(),this.fire("remove"),this._map=null},_requestUpdate:function(){this._map&&!o.Path._updateRequest&&(o.Path._updateRequest=o.Util.requestAnimFrame(this._fireMapMoveEnd,this._map))},_fireMapMoveEnd:function(){o.Path._updateRequest=null,this.fire("moveend")},_initElements:function(){this._map._initPathRoot(),this._ctx=this._map._canvasCtx},_updateStyle:function(){var t=this.options;t.stroke&&(this._ctx.lineWidth=t.weight,this._ctx.strokeStyle=t.color),t.fill&&(this._ctx.fillStyle=t.fillColor||t.color)},_drawPath:function(){var t,e,i,n,s,a;for(this._ctx.beginPath(),t=0,i=this._parts.length;i>t;t++){for(e=0,n=this._parts[t].length;n>e;e++)s=this._parts[t][e],a=(0===e?"move":"line")+"To",this._ctx[a](s.x,s.y);this instanceof o.Polygon&&this._ctx.closePath()}},_checkIfEmpty:function(){return!this._parts.length},_updatePath:function(){if(!this._checkIfEmpty()){var t=this._ctx,e=this.options;this._drawPath(),t.save(),this._updateStyle(),e.fill&&(t.globalAlpha=e.fillOpacity,t.fill()),e.stroke&&(t.globalAlpha=e.opacity,t.stroke()),t.restore()}},_initEvents:function(){this.options.clickable&&(this._map.on("mousemove",this._onMouseMove,this),this._map.on("click",this._onClick,this))},_onClick:function(t){this._containsPoint(t.layerPoint)&&this.fire("click",t)},_onMouseMove:function(t){this._map&&!this._map._animatingZoom&&(this._containsPoint(t.layerPoint)?(this._ctx.canvas.style.cursor="pointer",this._mouseInside=!0,this.fire("mouseover",t)):this._mouseInside&&(this._ctx.canvas.style.cursor="",this._mouseInside=!1,this.fire("mouseout",t)))}}),o.Map.include(o.Path.SVG&&!t.L_PREFER_CANVAS||!o.Browser.canvas?{}:{_initPathRoot:function(){var t,i=this._pathRoot;i||(i=this._pathRoot=e.createElement("canvas"),i.style.position="absolute",t=this._canvasCtx=i.getContext("2d"),t.lineCap="round",t.lineJoin="round",this._panes.overlayPane.appendChild(i),this.options.zoomAnimation&&(this._pathRoot.className="leaflet-zoom-animated",this.on("zoomanim",this._animatePathZoom),this.on("zoomend",this._endPathZoom)),this.on("moveend",this._updateCanvasViewport),this._updateCanvasViewport())},_updateCanvasViewport:function(){if(!this._pathZooming){this._updatePathViewport();var t=this._pathViewport,e=t.min,i=t.max.subtract(e),n=this._pathRoot;o.DomUtil.setPosition(n,e),n.width=i.x,n.height=i.y,n.getContext("2d").translate(-e.x,-e.y)}}}),o.LineUtil={simplify:function(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=this._reducePoints(t,i),t=this._simplifyDP(t,i)},pointToSegmentDistance:function(t,e,i){return Math.sqrt(this._sqClosestPointOnSegment(t,e,i,!0))},closestPointOnSegment:function(t,e,i){return this._sqClosestPointOnSegment(t,e,i)},_simplifyDP:function(t,e){var n=t.length,o=typeof Uint8Array!=i+""?Uint8Array:Array,s=new o(n);s[0]=s[n-1]=1,this._simplifyDPStep(t,s,e,0,n-1);var a,r=[];for(a=0;n>a;a++)s[a]&&r.push(t[a]);return r},_simplifyDPStep:function(t,e,i,n,o){var s,a,r,h=0;for(a=n+1;o-1>=a;a++)r=this._sqClosestPointOnSegment(t[a],t[n],t[o],!0),r>h&&(s=a,h=r);h>i&&(e[s]=1,this._simplifyDPStep(t,e,i,n,s),this._simplifyDPStep(t,e,i,s,o))},_reducePoints:function(t,e){for(var i=[t[0]],n=1,o=0,s=t.length;s>n;n++)this._sqDist(t[n],t[o])>e&&(i.push(t[n]),o=n);return s-1>o&&i.push(t[s-1]),i},clipSegment:function(t,e,i,n){var o,s,a,r=n?this._lastCode:this._getBitCode(t,i),h=this._getBitCode(e,i);for(this._lastCode=h;;){if(!(r|h))return[t,e];if(r&h)return!1;o=r||h,s=this._getEdgeIntersection(t,e,o,i),a=this._getBitCode(s,i),o===r?(t=s,r=a):(e=s,h=a)}},_getEdgeIntersection:function(t,e,i,n){var s=e.x-t.x,a=e.y-t.y,r=n.min,h=n.max;return 8&i?new o.Point(t.x+s*(h.y-t.y)/a,h.y):4&i?new o.Point(t.x+s*(r.y-t.y)/a,r.y):2&i?new o.Point(h.x,t.y+a*(h.x-t.x)/s):1&i?new o.Point(r.x,t.y+a*(r.x-t.x)/s):void 0},_getBitCode:function(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i},_sqDist:function(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n},_sqClosestPointOnSegment:function(t,e,i,n){var s,a=e.x,r=e.y,h=i.x-a,l=i.y-r,u=h*h+l*l;return u>0&&(s=((t.x-a)*h+(t.y-r)*l)/u,s>1?(a=i.x,r=i.y):s>0&&(a+=h*s,r+=l*s)),h=t.x-a,l=t.y-r,n?h*h+l*l:new o.Point(a,r)}},o.Polyline=o.Path.extend({initialize:function(t,e){o.Path.prototype.initialize.call(this,e),this._latlngs=this._convertLatLngs(t)},options:{smoothFactor:1,noClip:!1},projectLatlngs:function(){this._originalPoints=[];for(var t=0,e=this._latlngs.length;e>t;t++)this._originalPoints[t]=this._map.latLngToLayerPoint(this._latlngs[t])},getPathString:function(){for(var t=0,e=this._parts.length,i="";e>t;t++)i+=this._getPathPartStr(this._parts[t]);return i},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._latlngs=this._convertLatLngs(t),this.redraw()},addLatLng:function(t){return this._latlngs.push(o.latLng(t)),this.redraw()},spliceLatLngs:function(){var t=[].splice.apply(this._latlngs,arguments);return this._convertLatLngs(this._latlngs,!0),this.redraw(),t},closestLayerPoint:function(t){for(var e,i,n=1/0,s=this._parts,a=null,r=0,h=s.length;h>r;r++)for(var l=s[r],u=1,c=l.length;c>u;u++){e=l[u-1],i=l[u];var d=o.LineUtil._sqClosestPointOnSegment(t,e,i,!0);n>d&&(n=d,a=o.LineUtil._sqClosestPointOnSegment(t,e,i))}return a&&(a.distance=Math.sqrt(n)),a},getBounds:function(){return new o.LatLngBounds(this.getLatLngs())},_convertLatLngs:function(t,e){var i,n,s=e?t:[];for(i=0,n=t.length;n>i;i++){if(o.Util.isArray(t[i])&&"number"!=typeof t[i][0])return;s[i]=o.latLng(t[i])}return s},_initEvents:function(){o.Path.prototype._initEvents.call(this)},_getPathPartStr:function(t){for(var e,i=o.Path.VML,n=0,s=t.length,a="";s>n;n++)e=t[n],i&&e._round(),a+=(n?"L":"M")+e.x+" "+e.y;return a},_clipPoints:function(){var t,e,i,n=this._originalPoints,s=n.length;if(this.options.noClip)return void(this._parts=[n]);this._parts=[];var a=this._parts,r=this._map._pathViewport,h=o.LineUtil;for(t=0,e=0;s-1>t;t++)i=h.clipSegment(n[t],n[t+1],r,t),i&&(a[e]=a[e]||[],a[e].push(i[0]),(i[1]!==n[t+1]||t===s-2)&&(a[e].push(i[1]),e++))},_simplifyPoints:function(){for(var t=this._parts,e=o.LineUtil,i=0,n=t.length;n>i;i++)t[i]=e.simplify(t[i],this.options.smoothFactor)},_updatePath:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),o.Path.prototype._updatePath.call(this))}}),o.polyline=function(t,e){return new o.Polyline(t,e)},o.PolyUtil={},o.PolyUtil.clipPolygon=function(t,e){var i,n,s,a,r,h,l,u,c,d=[1,4,2,8],p=o.LineUtil;for(n=0,l=t.length;l>n;n++)t[n]._code=p._getBitCode(t[n],e);for(a=0;4>a;a++){for(u=d[a],i=[],n=0,l=t.length,s=l-1;l>n;s=n++)r=t[n],h=t[s],r._code&u?h._code&u||(c=p._getEdgeIntersection(h,r,u,e),c._code=p._getBitCode(c,e),i.push(c)):(h._code&u&&(c=p._getEdgeIntersection(h,r,u,e),c._code=p._getBitCode(c,e),i.push(c)),i.push(r));t=i}return t},o.Polygon=o.Polyline.extend({options:{fill:!0},initialize:function(t,e){o.Polyline.prototype.initialize.call(this,t,e),this._initWithHoles(t)},_initWithHoles:function(t){var e,i,n;if(t&&o.Util.isArray(t[0])&&"number"!=typeof t[0][0])for(this._latlngs=this._convertLatLngs(t[0]),this._holes=t.slice(1),e=0,i=this._holes.length;i>e;e++)n=this._holes[e]=this._convertLatLngs(this._holes[e]),n[0].equals(n[n.length-1])&&n.pop();t=this._latlngs,t.length>=2&&t[0].equals(t[t.length-1])&&t.pop()},projectLatlngs:function(){if(o.Polyline.prototype.projectLatlngs.call(this),this._holePoints=[],this._holes){var t,e,i,n;for(t=0,i=this._holes.length;i>t;t++)for(this._holePoints[t]=[],e=0,n=this._holes[t].length;n>e;e++)this._holePoints[t][e]=this._map.latLngToLayerPoint(this._holes[t][e])}},setLatLngs:function(t){return t&&o.Util.isArray(t[0])&&"number"!=typeof t[0][0]?(this._initWithHoles(t),this.redraw()):o.Polyline.prototype.setLatLngs.call(this,t)},_clipPoints:function(){var t=this._originalPoints,e=[];if(this._parts=[t].concat(this._holePoints),!this.options.noClip){for(var i=0,n=this._parts.length;n>i;i++){var s=o.PolyUtil.clipPolygon(this._parts[i],this._map._pathViewport);s.length&&e.push(s)}this._parts=e}},_getPathPartStr:function(t){var e=o.Polyline.prototype._getPathPartStr.call(this,t);return e+(o.Browser.svg?"z":"x")}}),o.polygon=function(t,e){return new o.Polygon(t,e)},function(){function t(t){return o.FeatureGroup.extend({initialize:function(t,e){this._layers={},this._options=e,this.setLatLngs(t)},setLatLngs:function(e){var i=0,n=e.length;for(this.eachLayer(function(t){n>i?t.setLatLngs(e[i++]):this.removeLayer(t)},this);n>i;)this.addLayer(new t(e[i++],this._options));return this},getLatLngs:function(){var t=[];return this.eachLayer(function(e){t.push(e.getLatLngs())}),t}})}o.MultiPolyline=t(o.Polyline),o.MultiPolygon=t(o.Polygon),o.multiPolyline=function(t,e){return new o.MultiPolyline(t,e)},o.multiPolygon=function(t,e){return new o.MultiPolygon(t,e)}}(),o.Rectangle=o.Polygon.extend({initialize:function(t,e){o.Polygon.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=o.latLngBounds(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}}),o.rectangle=function(t,e){return new o.Rectangle(t,e)},o.Circle=o.Path.extend({initialize:function(t,e,i){o.Path.prototype.initialize.call(this,i),this._latlng=o.latLng(t),this._mRadius=e},options:{fill:!0},setLatLng:function(t){return this._latlng=o.latLng(t),this.redraw()},setRadius:function(t){return this._mRadius=t,this.redraw()},projectLatlngs:function(){var t=this._getLngRadius(),e=this._latlng,i=this._map.latLngToLayerPoint([e.lat,e.lng-t]);this._point=this._map.latLngToLayerPoint(e),this._radius=Math.max(this._point.x-i.x,1)},getBounds:function(){var t=this._getLngRadius(),e=this._mRadius/40075017*360,i=this._latlng;return new o.LatLngBounds([i.lat-e,i.lng-t],[i.lat+e,i.lng+t])},getLatLng:function(){return this._latlng},getPathString:function(){var t=this._point,e=this._radius;return this._checkIfEmpty()?"":o.Browser.svg?"M"+t.x+","+(t.y-e)+"A"+e+","+e+",0,1,1,"+(t.x-.1)+","+(t.y-e)+" z":(t._round(),e=Math.round(e),"AL "+t.x+","+t.y+" "+e+","+e+" 0,23592600")},getRadius:function(){return this._mRadius},_getLatRadius:function(){return this._mRadius/40075017*360},_getLngRadius:function(){return this._getLatRadius()/Math.cos(o.LatLng.DEG_TO_RAD*this._latlng.lat)},_checkIfEmpty:function(){if(!this._map)return!1;var t=this._map._pathViewport,e=this._radius,i=this._point;return i.x-e>t.max.x||i.y-e>t.max.y||i.x+e<t.min.x||i.y+e<t.min.y}}),o.circle=function(t,e,i){return new o.Circle(t,e,i)},o.CircleMarker=o.Circle.extend({options:{radius:10,weight:2},initialize:function(t,e){o.Circle.prototype.initialize.call(this,t,null,e),this._radius=this.options.radius},projectLatlngs:function(){this._point=this._map.latLngToLayerPoint(this._latlng)},_updateStyle:function(){o.Circle.prototype._updateStyle.call(this),this.setRadius(this.options.radius)},setLatLng:function(t){return o.Circle.prototype.setLatLng.call(this,t),this._popup&&this._popup._isOpen&&this._popup.setLatLng(t),this},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius}}),o.circleMarker=function(t,e){return new o.CircleMarker(t,e)},o.Polyline.include(o.Path.CANVAS?{_containsPoint:function(t,e){var i,n,s,a,r,h,l,u=this.options.weight/2;for(o.Browser.touch&&(u+=10),i=0,a=this._parts.length;a>i;i++)for(l=this._parts[i],n=0,r=l.length,s=r-1;r>n;s=n++)if((e||0!==n)&&(h=o.LineUtil.pointToSegmentDistance(t,l[s],l[n]),u>=h))return!0;return!1}}:{}),o.Polygon.include(o.Path.CANVAS?{_containsPoint:function(t){var e,i,n,s,a,r,h,l,u=!1;if(o.Polyline.prototype._containsPoint.call(this,t,!0))return!0;for(s=0,h=this._parts.length;h>s;s++)for(e=this._parts[s],a=0,l=e.length,r=l-1;l>a;r=a++)i=e[a],n=e[r],i.y>t.y!=n.y>t.y&&t.x<(n.x-i.x)*(t.y-i.y)/(n.y-i.y)+i.x&&(u=!u);return u}}:{}),o.Circle.include(o.Path.CANVAS?{_drawPath:function(){var t=this._point;this._ctx.beginPath(),this._ctx.arc(t.x,t.y,this._radius,0,2*Math.PI,!1)},_containsPoint:function(t){var e=this._point,i=this.options.stroke?this.options.weight/2:0;return t.distanceTo(e)<=this._radius+i}}:{}),o.CircleMarker.include(o.Path.CANVAS?{_updateStyle:function(){o.Path.prototype._updateStyle.call(this)}}:{}),o.GeoJSON=o.FeatureGroup.extend({initialize:function(t,e){o.setOptions(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e,i,n,s=o.Util.isArray(t)?t:t.features;if(s){for(e=0,i=s.length;i>e;e++)n=s[e],(n.geometries||n.geometry||n.features||n.coordinates)&&this.addData(s[e]);return this}var a=this.options;if(!a.filter||a.filter(t)){var r=o.GeoJSON.geometryToLayer(t,a.pointToLayer,a.coordsToLatLng,a);return r.feature=o.GeoJSON.asFeature(t),r.defaultOptions=r.options,this.resetStyle(r),a.onEachFeature&&a.onEachFeature(t,r),this.addLayer(r)}},resetStyle:function(t){var e=this.options.style;e&&(o.Util.extend(t.options,t.defaultOptions),this._setLayerStyle(t,e))},setStyle:function(t){this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){"function"==typeof e&&(e=e(t.feature)),t.setStyle&&t.setStyle(e)}}),o.extend(o.GeoJSON,{geometryToLayer:function(t,e,i,n){var s,a,r,h,l="Feature"===t.type?t.geometry:t,u=l.coordinates,c=[];switch(i=i||this.coordsToLatLng,l.type){case"Point":return s=i(u),e?e(t,s):new o.Marker(s);case"MultiPoint":for(r=0,h=u.length;h>r;r++)s=i(u[r]),c.push(e?e(t,s):new o.Marker(s));return new o.FeatureGroup(c);case"LineString":return a=this.coordsToLatLngs(u,0,i),new o.Polyline(a,n);case"Polygon":if(2===u.length&&!u[1].length)throw new Error("Invalid GeoJSON object.");return a=this.coordsToLatLngs(u,1,i),new o.Polygon(a,n);case"MultiLineString":return a=this.coordsToLatLngs(u,1,i),new o.MultiPolyline(a,n);case"MultiPolygon":return a=this.coordsToLatLngs(u,2,i),new o.MultiPolygon(a,n);case"GeometryCollection":for(r=0,h=l.geometries.length;h>r;r++)c.push(this.geometryToLayer({geometry:l.geometries[r],type:"Feature",properties:t.properties},e,i,n));return new o.FeatureGroup(c);default:throw new Error("Invalid GeoJSON object.")}},coordsToLatLng:function(t){return new o.LatLng(t[1],t[0],t[2])},coordsToLatLngs:function(t,e,i){var n,o,s,a=[];for(o=0,s=t.length;s>o;o++)n=e?this.coordsToLatLngs(t[o],e-1,i):(i||this.coordsToLatLng)(t[o]),a.push(n);return a},latLngToCoords:function(t){var e=[t.lng,t.lat];return t.alt!==i&&e.push(t.alt),e},latLngsToCoords:function(t){for(var e=[],i=0,n=t.length;n>i;i++)e.push(o.GeoJSON.latLngToCoords(t[i]));return e},getFeature:function(t,e){return t.feature?o.extend({},t.feature,{geometry:e}):o.GeoJSON.asFeature(e)},asFeature:function(t){return"Feature"===t.type?t:{type:"Feature",properties:{},geometry:t}}});var a={toGeoJSON:function(){return o.GeoJSON.getFeature(this,{type:"Point",coordinates:o.GeoJSON.latLngToCoords(this.getLatLng())})}};o.Marker.include(a),o.Circle.include(a),o.CircleMarker.include(a),o.Polyline.include({toGeoJSON:function(){return o.GeoJSON.getFeature(this,{type:"LineString",coordinates:o.GeoJSON.latLngsToCoords(this.getLatLngs())})}}),o.Polygon.include({toGeoJSON:function(){var t,e,i,n=[o.GeoJSON.latLngsToCoords(this.getLatLngs())];if(n[0].push(n[0][0]),this._holes)for(t=0,e=this._holes.length;e>t;t++)i=o.GeoJSON.latLngsToCoords(this._holes[t]),i.push(i[0]),n.push(i);return o.GeoJSON.getFeature(this,{type:"Polygon",coordinates:n})}}),function(){function t(t){return function(){var e=[];return this.eachLayer(function(t){e.push(t.toGeoJSON().geometry.coordinates)}),o.GeoJSON.getFeature(this,{type:t,coordinates:e})}}o.MultiPolyline.include({toGeoJSON:t("MultiLineString")}),o.MultiPolygon.include({toGeoJSON:t("MultiPolygon")}),o.LayerGroup.include({toGeoJSON:function(){var e,i=this.feature&&this.feature.geometry,n=[];if(i&&"MultiPoint"===i.type)return t("MultiPoint").call(this);var s=i&&"GeometryCollection"===i.type;return this.eachLayer(function(t){t.toGeoJSON&&(e=t.toGeoJSON(),n.push(s?e.geometry:o.GeoJSON.asFeature(e)))}),s?o.GeoJSON.getFeature(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}})}(),o.geoJson=function(t,e){return new o.GeoJSON(t,e)},o.DomEvent={addListener:function(t,e,i,n){var s,a,r,h=o.stamp(i),l="_leaflet_"+e+h;return t[l]?this:(s=function(e){return i.call(n||t,e||o.DomEvent._getEvent())},o.Browser.pointer&&0===e.indexOf("touch")?this.addPointerListener(t,e,s,h):(o.Browser.touch&&"dblclick"===e&&this.addDoubleTapListener&&this.addDoubleTapListener(t,s,h),"addEventListener"in t?"mousewheel"===e?(t.addEventListener("DOMMouseScroll",s,!1),t.addEventListener(e,s,!1)):"mouseenter"===e||"mouseleave"===e?(a=s,r="mouseenter"===e?"mouseover":"mouseout",s=function(e){return o.DomEvent._checkMouse(t,e)?a(e):void 0},t.addEventListener(r,s,!1)):"click"===e&&o.Browser.android?(a=s,s=function(t){return o.DomEvent._filterClick(t,a)},t.addEventListener(e,s,!1)):t.addEventListener(e,s,!1):"attachEvent"in t&&t.attachEvent("on"+e,s),t[l]=s,this))},removeListener:function(t,e,i){var n=o.stamp(i),s="_leaflet_"+e+n,a=t[s];return a?(o.Browser.pointer&&0===e.indexOf("touch")?this.removePointerListener(t,e,n):o.Browser.touch&&"dblclick"===e&&this.removeDoubleTapListener?this.removeDoubleTapListener(t,n):"removeEventListener"in t?"mousewheel"===e?(t.removeEventListener("DOMMouseScroll",a,!1),t.removeEventListener(e,a,!1)):"mouseenter"===e||"mouseleave"===e?t.removeEventListener("mouseenter"===e?"mouseover":"mouseout",a,!1):t.removeEventListener(e,a,!1):"detachEvent"in t&&t.detachEvent("on"+e,a),t[s]=null,this):this},stopPropagation:function(t){return t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,o.DomEvent._skipped(t),this},disableScrollPropagation:function(t){var e=o.DomEvent.stopPropagation;return o.DomEvent.on(t,"mousewheel",e).on(t,"MozMousePixelScroll",e)},disableClickPropagation:function(t){for(var e=o.DomEvent.stopPropagation,i=o.Draggable.START.length-1;i>=0;i--)o.DomEvent.on(t,o.Draggable.START[i],e);return o.DomEvent.on(t,"click",o.DomEvent._fakeStop).on(t,"dblclick",e)},preventDefault:function(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this},stop:function(t){return o.DomEvent.preventDefault(t).stopPropagation(t)},getMousePosition:function(t,e){if(!e)return new o.Point(t.clientX,t.clientY);var i=e.getBoundingClientRect();return new o.Point(t.clientX-i.left-e.clientLeft,t.clientY-i.top-e.clientTop)},getWheelDelta:function(t){var e=0;return t.wheelDelta&&(e=t.wheelDelta/120),t.detail&&(e=-t.detail/3),e},_skipEvents:{},_fakeStop:function(t){o.DomEvent._skipEvents[t.type]=!0},_skipped:function(t){var e=this._skipEvents[t.type];return this._skipEvents[t.type]=!1,e},_checkMouse:function(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch(n){return!1}return i!==t},_getEvent:function(){var e=t.event;if(!e)for(var i=arguments.callee.caller;i&&(e=i.arguments[0],!e||t.Event!==e.constructor);)i=i.caller;return e},_filterClick:function(t,e){var i=t.timeStamp||t.originalEvent.timeStamp,n=o.DomEvent._lastClick&&i-o.DomEvent._lastClick;return n&&n>100&&500>n||t.target._simulatedClick&&!t._simulated?void o.DomEvent.stop(t):(o.DomEvent._lastClick=i,e(t))}},o.DomEvent.on=o.DomEvent.addListener,o.DomEvent.off=o.DomEvent.removeListener,o.Draggable=o.Class.extend({includes:o.Mixin.Events,statics:{START:o.Browser.touch?["touchstart","mousedown"]:["mousedown"],END:{mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},MOVE:{mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"}},initialize:function(t,e){this._element=t,this._dragStartTarget=e||t},enable:function(){if(!this._enabled){for(var t=o.Draggable.START.length-1;t>=0;t--)o.DomEvent.on(this._dragStartTarget,o.Draggable.START[t],this._onDown,this);this._enabled=!0}},disable:function(){if(this._enabled){for(var t=o.Draggable.START.length-1;t>=0;t--)o.DomEvent.off(this._dragStartTarget,o.Draggable.START[t],this._onDown,this);this._enabled=!1,this._moved=!1}},_onDown:function(t){if(this._moved=!1,!(t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||(o.DomEvent.stopPropagation(t),o.Draggable._disabled||(o.DomUtil.disableImageDrag(),o.DomUtil.disableTextSelection(),this._moving)))){var i=t.touches?t.touches[0]:t;this._startPoint=new o.Point(i.clientX,i.clientY),this._startPos=this._newPos=o.DomUtil.getPosition(this._element),o.DomEvent.on(e,o.Draggable.MOVE[t.type],this._onMove,this).on(e,o.Draggable.END[t.type],this._onUp,this)}},_onMove:function(t){if(t.touches&&t.touches.length>1)return void(this._moved=!0);var i=t.touches&&1===t.touches.length?t.touches[0]:t,n=new o.Point(i.clientX,i.clientY),s=n.subtract(this._startPoint);(s.x||s.y)&&(o.Browser.touch&&Math.abs(s.x)+Math.abs(s.y)<3||(o.DomEvent.preventDefault(t),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=o.DomUtil.getPosition(this._element).subtract(s),o.DomUtil.addClass(e.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,o.DomUtil.addClass(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(s),this._moving=!0,o.Util.cancelAnimFrame(this._animRequest),this._animRequest=o.Util.requestAnimFrame(this._updatePosition,this,!0,this._dragStartTarget)))},_updatePosition:function(){this.fire("predrag"),o.DomUtil.setPosition(this._element,this._newPos),this.fire("drag")},_onUp:function(){o.DomUtil.removeClass(e.body,"leaflet-dragging"),this._lastTarget&&(o.DomUtil.removeClass(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null);for(var t in o.Draggable.MOVE)o.DomEvent.off(e,o.Draggable.MOVE[t],this._onMove).off(e,o.Draggable.END[t],this._onUp);o.DomUtil.enableImageDrag(),o.DomUtil.enableTextSelection(),this._moved&&this._moving&&(o.Util.cancelAnimFrame(this._animRequest),this.fire("dragend",{distance:this._newPos.distanceTo(this._startPos)})),this._moving=!1}}),o.Handler=o.Class.extend({initialize:function(t){this._map=t},enable:function(){this._enabled||(this._enabled=!0,this.addHooks())},disable:function(){this._enabled&&(this._enabled=!1,this.removeHooks())},enabled:function(){return!!this._enabled}}),o.Map.mergeOptions({dragging:!0,inertia:!o.Browser.android23,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,inertiaThreshold:o.Browser.touch?32:18,easeLinearity:.25,worldCopyJump:!1}),o.Map.Drag=o.Handler.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new o.Draggable(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDrag,this),t.on("viewreset",this._onViewReset,this),t.whenReady(this._onViewReset,this))}this._draggable.enable()},removeHooks:function(){this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){var t=this._map;t._panAnim&&t._panAnim.stop(),t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(){if(this._map.options.inertia){var t=this._lastTime=+new Date,e=this._lastPos=this._draggable._newPos;this._positions.push(e),this._times.push(t),t-this._times[0]>200&&(this._positions.shift(),this._times.shift())}this._map.fire("move").fire("drag")},_onViewReset:function(){var t=this._map.getSize()._divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.project([0,180]).x},_onPreDrag:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-e+i)%t+e-i,s=(n+e+i)%t-e-i,a=Math.abs(o+i)<Math.abs(s+i)?o:s;this._draggable._newPos.x=a},_onDragEnd:function(t){var e=this._map,i=e.options,n=+new Date-this._lastTime,s=!i.inertia||n>i.inertiaThreshold||!this._positions[0];if(e.fire("dragend",t),s)e.fire("moveend");else{var a=this._lastPos.subtract(this._positions[0]),r=(this._lastTime+n-this._times[0])/1e3,h=i.easeLinearity,l=a.multiplyBy(h/r),u=l.distanceTo([0,0]),c=Math.min(i.inertiaMaxSpeed,u),d=l.multiplyBy(c/u),p=c/(i.inertiaDeceleration*h),_=d.multiplyBy(-p/2).round();_.x&&_.y?(_=e._limitOffset(_,e.options.maxBounds),o.Util.requestAnimFrame(function(){e.panBy(_,{duration:p,easeLinearity:h,noMoveStart:!0})})):e.fire("moveend")}}}),o.Map.addInitHook("addHandler","dragging",o.Map.Drag),o.Map.mergeOptions({doubleClickZoom:!0}),o.Map.DoubleClickZoom=o.Handler.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom()+(t.originalEvent.shiftKey?-1:1);"center"===e.options.doubleClickZoom?e.setZoom(i):e.setZoomAround(t.containerPoint,i)}}),o.Map.addInitHook("addHandler","doubleClickZoom",o.Map.DoubleClickZoom),o.Map.mergeOptions({scrollWheelZoom:!0}),o.Map.ScrollWheelZoom=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"mousewheel",this._onWheelScroll,this),o.DomEvent.on(this._map._container,"MozMousePixelScroll",o.DomEvent.preventDefault),this._delta=0},removeHooks:function(){o.DomEvent.off(this._map._container,"mousewheel",this._onWheelScroll),o.DomEvent.off(this._map._container,"MozMousePixelScroll",o.DomEvent.preventDefault)},_onWheelScroll:function(t){var e=o.DomEvent.getWheelDelta(t);this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var i=Math.max(40-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(o.bind(this._performZoom,this),i),o.DomEvent.preventDefault(t),o.DomEvent.stopPropagation(t)},_performZoom:function(){var t=this._map,e=this._delta,i=t.getZoom();e=e>0?Math.ceil(e):Math.floor(e),e=Math.max(Math.min(e,4),-4),e=t._limitZoom(i+e)-i,this._delta=0,this._startTime=null,e&&("center"===t.options.scrollWheelZoom?t.setZoom(i+e):t.setZoomAround(this._lastMousePos,i+e))}}),o.Map.addInitHook("addHandler","scrollWheelZoom",o.Map.ScrollWheelZoom),o.extend(o.DomEvent,{_touchstart:o.Browser.msPointer?"MSPointerDown":o.Browser.pointer?"pointerdown":"touchstart",_touchend:o.Browser.msPointer?"MSPointerUp":o.Browser.pointer?"pointerup":"touchend",addDoubleTapListener:function(t,i,n){function s(t){var e;if(o.Browser.pointer?(_.push(t.pointerId),e=_.length):e=t.touches.length,!(e>1)){var i=Date.now(),n=i-(r||i);h=t.touches?t.touches[0]:t,l=n>0&&u>=n,r=i}}function a(t){if(o.Browser.pointer){var e=_.indexOf(t.pointerId);if(-1===e)return;_.splice(e,1)}if(l){if(o.Browser.pointer){var n,s={};for(var a in h)n=h[a],s[a]="function"==typeof n?n.bind(h):n;h=s}h.type="dblclick",i(h),r=null}}var r,h,l=!1,u=250,c="_leaflet_",d=this._touchstart,p=this._touchend,_=[];t[c+d+n]=s,t[c+p+n]=a;var m=o.Browser.pointer?e.documentElement:t;return t.addEventListener(d,s,!1),m.addEventListener(p,a,!1),o.Browser.pointer&&m.addEventListener(o.DomEvent.POINTER_CANCEL,a,!1),this},removeDoubleTapListener:function(t,i){var n="_leaflet_";return t.removeEventListener(this._touchstart,t[n+this._touchstart+i],!1),(o.Browser.pointer?e.documentElement:t).removeEventListener(this._touchend,t[n+this._touchend+i],!1),o.Browser.pointer&&e.documentElement.removeEventListener(o.DomEvent.POINTER_CANCEL,t[n+this._touchend+i],!1),this}}),o.extend(o.DomEvent,{POINTER_DOWN:o.Browser.msPointer?"MSPointerDown":"pointerdown",POINTER_MOVE:o.Browser.msPointer?"MSPointerMove":"pointermove",POINTER_UP:o.Browser.msPointer?"MSPointerUp":"pointerup",POINTER_CANCEL:o.Browser.msPointer?"MSPointerCancel":"pointercancel",_pointers:[],_pointerDocumentListener:!1,addPointerListener:function(t,e,i,n){switch(e){case"touchstart":return this.addPointerListenerStart(t,e,i,n);case"touchend":return this.addPointerListenerEnd(t,e,i,n);case"touchmove":return this.addPointerListenerMove(t,e,i,n);default:throw"Unknown touch event type"}},addPointerListenerStart:function(t,i,n,s){var a="_leaflet_",r=this._pointers,h=function(t){o.DomEvent.preventDefault(t);for(var e=!1,i=0;i<r.length;i++)if(r[i].pointerId===t.pointerId){e=!0;
	break}e||r.push(t),t.touches=r.slice(),t.changedTouches=[t],n(t)};if(t[a+"touchstart"+s]=h,t.addEventListener(this.POINTER_DOWN,h,!1),!this._pointerDocumentListener){var l=function(t){for(var e=0;e<r.length;e++)if(r[e].pointerId===t.pointerId){r.splice(e,1);break}};e.documentElement.addEventListener(this.POINTER_UP,l,!1),e.documentElement.addEventListener(this.POINTER_CANCEL,l,!1),this._pointerDocumentListener=!0}return this},addPointerListenerMove:function(t,e,i,n){function o(t){if(t.pointerType!==t.MSPOINTER_TYPE_MOUSE&&"mouse"!==t.pointerType||0!==t.buttons){for(var e=0;e<a.length;e++)if(a[e].pointerId===t.pointerId){a[e]=t;break}t.touches=a.slice(),t.changedTouches=[t],i(t)}}var s="_leaflet_",a=this._pointers;return t[s+"touchmove"+n]=o,t.addEventListener(this.POINTER_MOVE,o,!1),this},addPointerListenerEnd:function(t,e,i,n){var o="_leaflet_",s=this._pointers,a=function(t){for(var e=0;e<s.length;e++)if(s[e].pointerId===t.pointerId){s.splice(e,1);break}t.touches=s.slice(),t.changedTouches=[t],i(t)};return t[o+"touchend"+n]=a,t.addEventListener(this.POINTER_UP,a,!1),t.addEventListener(this.POINTER_CANCEL,a,!1),this},removePointerListener:function(t,e,i){var n="_leaflet_",o=t[n+e+i];switch(e){case"touchstart":t.removeEventListener(this.POINTER_DOWN,o,!1);break;case"touchmove":t.removeEventListener(this.POINTER_MOVE,o,!1);break;case"touchend":t.removeEventListener(this.POINTER_UP,o,!1),t.removeEventListener(this.POINTER_CANCEL,o,!1)}return this}}),o.Map.mergeOptions({touchZoom:o.Browser.touch&&!o.Browser.android23,bounceAtZoomLimits:!0}),o.Map.TouchZoom=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){o.DomEvent.off(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var i=this._map;if(t.touches&&2===t.touches.length&&!i._animatingZoom&&!this._zooming){var n=i.mouseEventToLayerPoint(t.touches[0]),s=i.mouseEventToLayerPoint(t.touches[1]),a=i._getCenterLayerPoint();this._startCenter=n.add(s)._divideBy(2),this._startDist=n.distanceTo(s),this._moved=!1,this._zooming=!0,this._centerOffset=a.subtract(this._startCenter),i._panAnim&&i._panAnim.stop(),o.DomEvent.on(e,"touchmove",this._onTouchMove,this).on(e,"touchend",this._onTouchEnd,this),o.DomEvent.preventDefault(t)}},_onTouchMove:function(t){var e=this._map;if(t.touches&&2===t.touches.length&&this._zooming){var i=e.mouseEventToLayerPoint(t.touches[0]),n=e.mouseEventToLayerPoint(t.touches[1]);this._scale=i.distanceTo(n)/this._startDist,this._delta=i._add(n)._divideBy(2)._subtract(this._startCenter),1!==this._scale&&(e.options.bounceAtZoomLimits||!(e.getZoom()===e.getMinZoom()&&this._scale<1||e.getZoom()===e.getMaxZoom()&&this._scale>1))&&(this._moved||(o.DomUtil.addClass(e._mapPane,"leaflet-touching"),e.fire("movestart").fire("zoomstart"),this._moved=!0),o.Util.cancelAnimFrame(this._animRequest),this._animRequest=o.Util.requestAnimFrame(this._updateOnMove,this,!0,this._map._container),o.DomEvent.preventDefault(t))}},_updateOnMove:function(){var t=this._map,e=this._getScaleOrigin(),i=t.layerPointToLatLng(e),n=t.getScaleZoom(this._scale);t._animateZoom(i,n,this._startCenter,this._scale,this._delta,!1,!0)},_onTouchEnd:function(){if(!this._moved||!this._zooming)return void(this._zooming=!1);var t=this._map;this._zooming=!1,o.DomUtil.removeClass(t._mapPane,"leaflet-touching"),o.Util.cancelAnimFrame(this._animRequest),o.DomEvent.off(e,"touchmove",this._onTouchMove).off(e,"touchend",this._onTouchEnd);var i=this._getScaleOrigin(),n=t.layerPointToLatLng(i),s=t.getZoom(),a=t.getScaleZoom(this._scale)-s,r=a>0?Math.ceil(a):Math.floor(a),h=t._limitZoom(s+r),l=t.getZoomScale(h)/this._scale;t._animateZoom(n,h,i,l)},_getScaleOrigin:function(){var t=this._centerOffset.subtract(this._delta).divideBy(this._scale);return this._startCenter.add(t)}}),o.Map.addInitHook("addHandler","touchZoom",o.Map.TouchZoom),o.Map.mergeOptions({tap:!0,tapTolerance:15}),o.Map.Tap=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){o.DomEvent.off(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(t.touches){if(o.DomEvent.preventDefault(t),this._fireClick=!0,t.touches.length>1)return this._fireClick=!1,void clearTimeout(this._holdTimeout);var i=t.touches[0],n=i.target;this._startPos=this._newPos=new o.Point(i.clientX,i.clientY),n.tagName&&"a"===n.tagName.toLowerCase()&&o.DomUtil.addClass(n,"leaflet-active"),this._holdTimeout=setTimeout(o.bind(function(){this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",i))},this),1e3),o.DomEvent.on(e,"touchmove",this._onMove,this).on(e,"touchend",this._onUp,this)}},_onUp:function(t){if(clearTimeout(this._holdTimeout),o.DomEvent.off(e,"touchmove",this._onMove,this).off(e,"touchend",this._onUp,this),this._fireClick&&t&&t.changedTouches){var i=t.changedTouches[0],n=i.target;n&&n.tagName&&"a"===n.tagName.toLowerCase()&&o.DomUtil.removeClass(n,"leaflet-active"),this._isTapValid()&&this._simulateEvent("click",i)}},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(t){var e=t.touches[0];this._newPos=new o.Point(e.clientX,e.clientY)},_simulateEvent:function(i,n){var o=e.createEvent("MouseEvents");o._simulated=!0,n.target._simulatedClick=!0,o.initMouseEvent(i,!0,!0,t,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),n.target.dispatchEvent(o)}}),o.Browser.touch&&!o.Browser.pointer&&o.Map.addInitHook("addHandler","tap",o.Map.Tap),o.Map.mergeOptions({boxZoom:!0}),o.Map.BoxZoom=o.Handler.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._moved=!1},addHooks:function(){o.DomEvent.on(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){o.DomEvent.off(this._container,"mousedown",this._onMouseDown),this._moved=!1},moved:function(){return this._moved},_onMouseDown:function(t){return this._moved=!1,!t.shiftKey||1!==t.which&&1!==t.button?!1:(o.DomUtil.disableTextSelection(),o.DomUtil.disableImageDrag(),this._startLayerPoint=this._map.mouseEventToLayerPoint(t),void o.DomEvent.on(e,"mousemove",this._onMouseMove,this).on(e,"mouseup",this._onMouseUp,this).on(e,"keydown",this._onKeyDown,this))},_onMouseMove:function(t){this._moved||(this._box=o.DomUtil.create("div","leaflet-zoom-box",this._pane),o.DomUtil.setPosition(this._box,this._startLayerPoint),this._container.style.cursor="crosshair",this._map.fire("boxzoomstart"));var e=this._startLayerPoint,i=this._box,n=this._map.mouseEventToLayerPoint(t),s=n.subtract(e),a=new o.Point(Math.min(n.x,e.x),Math.min(n.y,e.y));o.DomUtil.setPosition(i,a),this._moved=!0,i.style.width=Math.max(0,Math.abs(s.x)-4)+"px",i.style.height=Math.max(0,Math.abs(s.y)-4)+"px"},_finish:function(){this._moved&&(this._pane.removeChild(this._box),this._container.style.cursor=""),o.DomUtil.enableTextSelection(),o.DomUtil.enableImageDrag(),o.DomEvent.off(e,"mousemove",this._onMouseMove).off(e,"mouseup",this._onMouseUp).off(e,"keydown",this._onKeyDown)},_onMouseUp:function(t){this._finish();var e=this._map,i=e.mouseEventToLayerPoint(t);if(!this._startLayerPoint.equals(i)){var n=new o.LatLngBounds(e.layerPointToLatLng(this._startLayerPoint),e.layerPointToLatLng(i));e.fitBounds(n),e.fire("boxzoomend",{boxZoomBounds:n})}},_onKeyDown:function(t){27===t.keyCode&&this._finish()}}),o.Map.addInitHook("addHandler","boxZoom",o.Map.BoxZoom),o.Map.mergeOptions({keyboard:!0,keyboardPanOffset:80,keyboardZoomOffset:1}),o.Map.Keyboard=o.Handler.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,173]},initialize:function(t){this._map=t,this._setPanOffset(t.options.keyboardPanOffset),this._setZoomOffset(t.options.keyboardZoomOffset)},addHooks:function(){var t=this._map._container;-1===t.tabIndex&&(t.tabIndex="0"),o.DomEvent.on(t,"focus",this._onFocus,this).on(t,"blur",this._onBlur,this).on(t,"mousedown",this._onMouseDown,this),this._map.on("focus",this._addHooks,this).on("blur",this._removeHooks,this)},removeHooks:function(){this._removeHooks();var t=this._map._container;o.DomEvent.off(t,"focus",this._onFocus,this).off(t,"blur",this._onBlur,this).off(t,"mousedown",this._onMouseDown,this),this._map.off("focus",this._addHooks,this).off("blur",this._removeHooks,this)},_onMouseDown:function(){if(!this._focused){var i=e.body,n=e.documentElement,o=i.scrollTop||n.scrollTop,s=i.scrollLeft||n.scrollLeft;this._map._container.focus(),t.scrollTo(s,o)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanOffset:function(t){var e,i,n=this._panKeys={},o=this.keyCodes;for(e=0,i=o.left.length;i>e;e++)n[o.left[e]]=[-1*t,0];for(e=0,i=o.right.length;i>e;e++)n[o.right[e]]=[t,0];for(e=0,i=o.down.length;i>e;e++)n[o.down[e]]=[0,t];for(e=0,i=o.up.length;i>e;e++)n[o.up[e]]=[0,-1*t]},_setZoomOffset:function(t){var e,i,n=this._zoomKeys={},o=this.keyCodes;for(e=0,i=o.zoomIn.length;i>e;e++)n[o.zoomIn[e]]=t;for(e=0,i=o.zoomOut.length;i>e;e++)n[o.zoomOut[e]]=-t},_addHooks:function(){o.DomEvent.on(e,"keydown",this._onKeyDown,this)},_removeHooks:function(){o.DomEvent.off(e,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){var e=t.keyCode,i=this._map;if(e in this._panKeys){if(i._panAnim&&i._panAnim._inProgress)return;i.panBy(this._panKeys[e]),i.options.maxBounds&&i.panInsideBounds(i.options.maxBounds)}else{if(!(e in this._zoomKeys))return;i.setZoom(i.getZoom()+this._zoomKeys[e])}o.DomEvent.stop(t)}}),o.Map.addInitHook("addHandler","keyboard",o.Map.Keyboard),o.Handler.MarkerDrag=o.Handler.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new o.Draggable(t,t)),this._draggable.on("dragstart",this._onDragStart,this).on("drag",this._onDrag,this).on("dragend",this._onDragEnd,this),this._draggable.enable(),o.DomUtil.addClass(this._marker._icon,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off("dragstart",this._onDragStart,this).off("drag",this._onDrag,this).off("dragend",this._onDragEnd,this),this._draggable.disable(),o.DomUtil.removeClass(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){this._marker.closePopup().fire("movestart").fire("dragstart")},_onDrag:function(){var t=this._marker,e=t._shadow,i=o.DomUtil.getPosition(t._icon),n=t._map.layerPointToLatLng(i);e&&o.DomUtil.setPosition(e,i),t._latlng=n,t.fire("move",{latlng:n}).fire("drag")},_onDragEnd:function(t){this._marker.fire("moveend").fire("dragend",t)}}),o.Control=o.Class.extend({options:{position:"topright"},initialize:function(t){o.setOptions(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return o.DomUtil.addClass(e,"leaflet-control"),-1!==i.indexOf("bottom")?n.insertBefore(e,n.firstChild):n.appendChild(e),this},removeFrom:function(t){var e=this.getPosition(),i=t._controlCorners[e];return i.removeChild(this._container),this._map=null,this.onRemove&&this.onRemove(t),this},_refocusOnMap:function(){this._map&&this._map.getContainer().focus()}}),o.control=function(t){return new o.Control(t)},o.Map.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.removeFrom(this),this},_initControlPos:function(){function t(t,s){var a=i+t+" "+i+s;e[t+s]=o.DomUtil.create("div",a,n)}var e=this._controlCorners={},i="leaflet-",n=this._controlContainer=o.DomUtil.create("div",i+"control-container",this._container);t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){this._container.removeChild(this._controlContainer)}}),o.Control.Zoom=o.Control.extend({options:{position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"-",zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=o.DomUtil.create("div",e+" leaflet-bar");return this._map=t,this._zoomInButton=this._createButton(this.options.zoomInText,this.options.zoomInTitle,e+"-in",i,this._zoomIn,this),this._zoomOutButton=this._createButton(this.options.zoomOutText,this.options.zoomOutTitle,e+"-out",i,this._zoomOut,this),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},_zoomIn:function(t){this._map.zoomIn(t.shiftKey?3:1)},_zoomOut:function(t){this._map.zoomOut(t.shiftKey?3:1)},_createButton:function(t,e,i,n,s,a){var r=o.DomUtil.create("a",i,n);r.innerHTML=t,r.href="#",r.title=e;var h=o.DomEvent.stopPropagation;return o.DomEvent.on(r,"click",h).on(r,"mousedown",h).on(r,"dblclick",h).on(r,"click",o.DomEvent.preventDefault).on(r,"click",s,a).on(r,"click",this._refocusOnMap,a),r},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";o.DomUtil.removeClass(this._zoomInButton,e),o.DomUtil.removeClass(this._zoomOutButton,e),t._zoom===t.getMinZoom()&&o.DomUtil.addClass(this._zoomOutButton,e),t._zoom===t.getMaxZoom()&&o.DomUtil.addClass(this._zoomInButton,e)}}),o.Map.mergeOptions({zoomControl:!0}),o.Map.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new o.Control.Zoom,this.addControl(this.zoomControl))}),o.control.zoom=function(t){return new o.Control.Zoom(t)},o.Control.Attribution=o.Control.extend({options:{position:"bottomright",prefix:'<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(t){o.setOptions(this,t),this._attributions={}},onAdd:function(t){this._container=o.DomUtil.create("div","leaflet-control-attribution"),o.DomEvent.disableClickPropagation(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return t.on("layeradd",this._onLayerAdd,this).on("layerremove",this._onLayerRemove,this),this._update(),this._container},onRemove:function(t){t.off("layeradd",this._onLayerAdd).off("layerremove",this._onLayerRemove)},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):void 0},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):void 0},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(" | ")}},_onLayerAdd:function(t){t.layer.getAttribution&&this.addAttribution(t.layer.getAttribution())},_onLayerRemove:function(t){t.layer.getAttribution&&this.removeAttribution(t.layer.getAttribution())}}),o.Map.mergeOptions({attributionControl:!0}),o.Map.addInitHook(function(){this.options.attributionControl&&(this.attributionControl=(new o.Control.Attribution).addTo(this))}),o.control.attribution=function(t){return new o.Control.Attribution(t)},o.Control.Scale=o.Control.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0,updateWhenIdle:!1},onAdd:function(t){this._map=t;var e="leaflet-control-scale",i=o.DomUtil.create("div",e),n=this.options;return this._addScales(n,e,i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=o.DomUtil.create("div",e+"-line",i)),t.imperial&&(this._iScale=o.DomUtil.create("div",e+"-line",i))},_update:function(){var t=this._map.getBounds(),e=t.getCenter().lat,i=6378137*Math.PI*Math.cos(e*Math.PI/180),n=i*(t.getNorthEast().lng-t.getSouthWest().lng)/180,o=this._map.getSize(),s=this.options,a=0;o.x>0&&(a=n*(s.maxWidth/o.x)),this._updateScales(s,a)},_updateScales:function(t,e){t.metric&&e&&this._updateMetric(e),t.imperial&&e&&this._updateImperial(e)},_updateMetric:function(t){var e=this._getRoundNum(t);this._mScale.style.width=this._getScaleWidth(e/t)+"px",this._mScale.innerHTML=1e3>e?e+" m":e/1e3+" km"},_updateImperial:function(t){var e,i,n,o=3.2808399*t,s=this._iScale;o>5280?(e=o/5280,i=this._getRoundNum(e),s.style.width=this._getScaleWidth(i/e)+"px",s.innerHTML=i+" mi"):(n=this._getRoundNum(o),s.style.width=this._getScaleWidth(n/o)+"px",s.innerHTML=n+" ft")},_getScaleWidth:function(t){return Math.round(this.options.maxWidth*t)-10},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}}),o.control.scale=function(t){return new o.Control.Scale(t)},o.Control.Layers=o.Control.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0},initialize:function(t,e,i){o.setOptions(this,i),this._layers={},this._lastZIndex=0,this._handlingClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){return this._initLayout(),this._update(),t.on("layeradd",this._onLayerChange,this).on("layerremove",this._onLayerChange,this),this._container},onRemove:function(t){t.off("layeradd",this._onLayerChange,this).off("layerremove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._update(),this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._update(),this},removeLayer:function(t){var e=o.stamp(t);return delete this._layers[e],this._update(),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=o.DomUtil.create("div",t);e.setAttribute("aria-haspopup",!0),o.Browser.touch?o.DomEvent.on(e,"click",o.DomEvent.stopPropagation):o.DomEvent.disableClickPropagation(e).disableScrollPropagation(e);var i=this._form=o.DomUtil.create("form",t+"-list");if(this.options.collapsed){o.Browser.android||o.DomEvent.on(e,"mouseover",this._expand,this).on(e,"mouseout",this._collapse,this);var n=this._layersLink=o.DomUtil.create("a",t+"-toggle",e);n.href="#",n.title="Layers",o.Browser.touch?o.DomEvent.on(n,"click",o.DomEvent.stop).on(n,"click",this._expand,this):o.DomEvent.on(n,"focus",this._expand,this),o.DomEvent.on(i,"click",function(){setTimeout(o.bind(this._onInputClick,this),0)},this),this._map.on("click",this._collapse,this)}else this._expand();this._baseLayersList=o.DomUtil.create("div",t+"-base",i),this._separator=o.DomUtil.create("div",t+"-separator",i),this._overlaysList=o.DomUtil.create("div",t+"-overlays",i),e.appendChild(i)},_addLayer:function(t,e,i){var n=o.stamp(t);this._layers[n]={layer:t,name:e,overlay:i},this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex))},_update:function(){if(this._container){this._baseLayersList.innerHTML="",this._overlaysList.innerHTML="";var t,e,i=!1,n=!1;for(t in this._layers)e=this._layers[t],this._addItem(e),n=n||e.overlay,i=i||!e.overlay;this._separator.style.display=n&&i?"":"none"}},_onLayerChange:function(t){var e=this._layers[o.stamp(t.layer)];if(e){this._handlingClick||this._update();var i=e.overlay?"layeradd"===t.type?"overlayadd":"overlayremove":"layeradd"===t.type?"baselayerchange":null;i&&this._map.fire(i,e)}},_createRadioElement:function(t,i){var n='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"';i&&(n+=' checked="checked"'),n+="/>";var o=e.createElement("div");return o.innerHTML=n,o.firstChild},_addItem:function(t){var i,n=e.createElement("label"),s=this._map.hasLayer(t.layer);t.overlay?(i=e.createElement("input"),i.type="checkbox",i.className="leaflet-control-layers-selector",i.defaultChecked=s):i=this._createRadioElement("leaflet-base-layers",s),i.layerId=o.stamp(t.layer),o.DomEvent.on(i,"click",this._onInputClick,this);var a=e.createElement("span");a.innerHTML=" "+t.name,n.appendChild(i),n.appendChild(a);var r=t.overlay?this._overlaysList:this._baseLayersList;return r.appendChild(n),n},_onInputClick:function(){var t,e,i,n=this._form.getElementsByTagName("input"),o=n.length;for(this._handlingClick=!0,t=0;o>t;t++)e=n[t],i=this._layers[e.layerId],e.checked&&!this._map.hasLayer(i.layer)?this._map.addLayer(i.layer):!e.checked&&this._map.hasLayer(i.layer)&&this._map.removeLayer(i.layer);this._handlingClick=!1,this._refocusOnMap()},_expand:function(){o.DomUtil.addClass(this._container,"leaflet-control-layers-expanded")},_collapse:function(){this._container.className=this._container.className.replace(" leaflet-control-layers-expanded","")}}),o.control.layers=function(t,e,i){return new o.Control.Layers(t,e,i)},o.PosAnimation=o.Class.extend({includes:o.Mixin.Events,run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._newPos=e,this.fire("start"),t.style[o.DomUtil.TRANSITION]="all "+(i||.25)+"s cubic-bezier(0,0,"+(n||.5)+",1)",o.DomEvent.on(t,o.DomUtil.TRANSITION_END,this._onTransitionEnd,this),o.DomUtil.setPosition(t,e),o.Util.falseFn(t.offsetWidth),this._stepTimer=setInterval(o.bind(this._onStep,this),50)},stop:function(){this._inProgress&&(o.DomUtil.setPosition(this._el,this._getPos()),this._onTransitionEnd(),o.Util.falseFn(this._el.offsetWidth))},_onStep:function(){var t=this._getPos();return t?(this._el._leaflet_pos=t,void this.fire("step")):void this._onTransitionEnd()},_transformRe:/([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,_getPos:function(){var e,i,n,s=this._el,a=t.getComputedStyle(s);if(o.Browser.any3d){if(n=a[o.DomUtil.TRANSFORM].match(this._transformRe),!n)return;e=parseFloat(n[1]),i=parseFloat(n[2])}else e=parseFloat(a.left),i=parseFloat(a.top);return new o.Point(e,i,!0)},_onTransitionEnd:function(){o.DomEvent.off(this._el,o.DomUtil.TRANSITION_END,this._onTransitionEnd,this),this._inProgress&&(this._inProgress=!1,this._el.style[o.DomUtil.TRANSITION]="",this._el._leaflet_pos=this._newPos,clearInterval(this._stepTimer),this.fire("step").fire("end"))}}),o.Map.include({setView:function(t,e,n){if(e=e===i?this._zoom:this._limitZoom(e),t=this._limitCenter(o.latLng(t),e,this.options.maxBounds),n=n||{},this._panAnim&&this._panAnim.stop(),this._loaded&&!n.reset&&n!==!0){n.animate!==i&&(n.zoom=o.extend({animate:n.animate},n.zoom),n.pan=o.extend({animate:n.animate},n.pan));var s=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,n.zoom):this._tryAnimatedPan(t,n.pan);if(s)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e),this},panBy:function(t,e){if(t=o.point(t).round(),e=e||{},!t.x&&!t.y)return this;if(this._panAnim||(this._panAnim=new o.PosAnimation,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){o.DomUtil.addClass(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t);this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){o.DomUtil.removeClass(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._floor();return(e&&e.animate)===!0||this.getSize().contains(i)?(this.panBy(i,e),!0):!1}}),o.PosAnimation=o.DomUtil.TRANSITION?o.PosAnimation:o.PosAnimation.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=o.DomUtil.getPosition(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(),this._complete())},_animate:function(){this._animId=o.Util.requestAnimFrame(this._animate,this),this._step()},_step:function(){var t=+new Date-this._startTime,e=1e3*this._duration;e>t?this._runFrame(this._easeOut(t/e)):(this._runFrame(1),this._complete())},_runFrame:function(t){var e=this._startPos.add(this._offset.multiplyBy(t));o.DomUtil.setPosition(this._el,e),this.fire("step")},_complete:function(){o.Util.cancelAnimFrame(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),o.Map.mergeOptions({zoomAnimation:!0,zoomAnimationThreshold:4}),o.DomUtil.TRANSITION&&o.Map.addInitHook(function(){this._zoomAnimated=this.options.zoomAnimation&&o.DomUtil.TRANSITION&&o.Browser.any3d&&!o.Browser.android23&&!o.Browser.mobileOpera,this._zoomAnimated&&o.DomEvent.on(this._mapPane,o.DomUtil.TRANSITION_END,this._catchTransitionEnd,this)}),o.Map.include(o.DomUtil.TRANSITION?{_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||i.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),o=this._getCenterOffset(t)._divideBy(1-1/n),s=this._getCenterLayerPoint()._add(o);return i.animate===!0||this.getSize().contains(o)?(this.fire("movestart").fire("zoomstart"),this._animateZoom(t,e,s,n,null,!0),!0):!1},_animateZoom:function(t,e,i,n,s,a,r){r||(this._animatingZoom=!0),o.DomUtil.addClass(this._mapPane,"leaflet-zoom-anim"),this._animateToCenter=t,this._animateToZoom=e,o.Draggable&&(o.Draggable._disabled=!0),o.Util.requestAnimFrame(function(){this.fire("zoomanim",{center:t,zoom:e,origin:i,scale:n,delta:s,backwards:a})},this)},_onZoomTransitionEnd:function(){this._animatingZoom=!1,o.DomUtil.removeClass(this._mapPane,"leaflet-zoom-anim"),this._resetView(this._animateToCenter,this._animateToZoom,!0,!0),o.Draggable&&(o.Draggable._disabled=!1)}}:{}),o.TileLayer.include({_animateZoom:function(t){this._animating||(this._animating=!0,this._prepareBgBuffer());var e=this._bgBuffer,i=o.DomUtil.TRANSFORM,n=t.delta?o.DomUtil.getTranslateString(t.delta):e.style[i],s=o.DomUtil.getScaleString(t.scale,t.origin);e.style[i]=t.backwards?s+" "+n:n+" "+s},_endZoomAnim:function(){var t=this._tileContainer,e=this._bgBuffer;t.style.visibility="",t.parentNode.appendChild(t),o.Util.falseFn(e.offsetWidth),this._animating=!1},_clearBgBuffer:function(){var t=this._map;!t||t._animatingZoom||t.touchZoom._zooming||(this._bgBuffer.innerHTML="",this._bgBuffer.style[o.DomUtil.TRANSFORM]="")},_prepareBgBuffer:function(){var t=this._tileContainer,e=this._bgBuffer,i=this._getLoadedTilesPercentage(e),n=this._getLoadedTilesPercentage(t);return e&&i>.5&&.5>n?(t.style.visibility="hidden",void this._stopLoadingImages(t)):(e.style.visibility="hidden",e.style[o.DomUtil.TRANSFORM]="",this._tileContainer=e,e=this._bgBuffer=t,this._stopLoadingImages(e),void clearTimeout(this._clearBgBufferTimer))},_getLoadedTilesPercentage:function(t){var e,i,n=t.getElementsByTagName("img"),o=0;for(e=0,i=n.length;i>e;e++)n[e].complete&&o++;return o/i},_stopLoadingImages:function(t){var e,i,n,s=Array.prototype.slice.call(t.getElementsByTagName("img"));for(e=0,i=s.length;i>e;e++)n=s[e],n.complete||(n.onload=o.Util.falseFn,n.onerror=o.Util.falseFn,n.src=o.Util.emptyImageUrl,n.parentNode.removeChild(n))}}),o.Map.include({_defaultLocateOptions:{watch:!1,setView:!1,maxZoom:1/0,timeout:1e4,maximumAge:0,enableHighAccuracy:!1},locate:function(t){if(t=this._locateOptions=o.extend(this._defaultLocateOptions,t),!navigator.geolocation)return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=o.bind(this._handleGeolocationResponse,this),i=o.bind(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var e=t.code,i=t.message||(1===e?"permission denied":2===e?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})},_handleGeolocationResponse:function(t){var e=t.coords.latitude,i=t.coords.longitude,n=new o.LatLng(e,i),s=180*t.coords.accuracy/40075017,a=s/Math.cos(o.LatLng.DEG_TO_RAD*e),r=o.latLngBounds([e-s,i-a],[e+s,i+a]),h=this._locateOptions;if(h.setView){var l=Math.min(this.getBoundsZoom(r),h.maxZoom);this.setView(n,l)}var u={latlng:n,bounds:r,timestamp:t.timestamp};for(var c in t.coords)"number"==typeof t.coords[c]&&(u[c]=t.coords[c]);this.fire("locationfound",u)}})}(window,document);

/***/ },
/* 106 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 107 */
/***/ function(module, exports) {

	/*!
	*  angular-leaflet-directive 0.7.15 2015-04-21
	*  angular-leaflet-directive - An AngularJS directive to easily interact with Leaflet maps
	*  git: https://github.com/tombatossals/angular-leaflet-directive
	*/
	(function(angular){
	'use strict';
	angular.module("leaflet-directive", []).directive('leaflet',
	    ["$q", "leafletData", "leafletMapDefaults", "leafletHelpers", "leafletEvents", function ($q, leafletData, leafletMapDefaults, leafletHelpers, leafletEvents) {
	    var _leafletMap;
	    return {
	        restrict: "EA",
	        replace: true,
	        scope: {
	            center         : '=',
	            defaults       : '=',
	            maxbounds      : '=',
	            bounds         : '=',
	            markers        : '=',
	            legend         : '=',
	            geojson        : '=',
	            paths          : '=',
	            tiles          : '=',
	            layers         : '=',
	            controls       : '=',
	            decorations    : '=',
	            eventBroadcast : '=',
	            markersWatchOptions : '=',
	            geojsonWatchOptions : '='
	        },
	        transclude: true,
	        template: '<div class="angular-leaflet-map"><div ng-transclude></div></div>',
	        controller: ["$scope", function ($scope) {
	            _leafletMap = $q.defer();
	            this.getMap = function () {
	                return _leafletMap.promise;
	            };

	            this.getLeafletScope = function() {
	                return $scope;
	            };
	        }],

	        link: function(scope, element, attrs) {
	            var isDefined = leafletHelpers.isDefined,
	                defaults = leafletMapDefaults.setDefaults(scope.defaults, attrs.id),
	                genDispatchMapEvent = leafletEvents.genDispatchMapEvent,
	                mapEvents = leafletEvents.getAvailableMapEvents();

	            leafletData.setDirectiveControls({}, attrs.id);

	            // Set width and height utility functions
	            function updateWidth() {
	                if (isNaN(attrs.width)) {
	                    element.css('width', attrs.width);
	                } else {
	                    element.css('width', attrs.width + 'px');
	                }
	            }

	            function updateHeight() {
	                if (isNaN(attrs.height)) {
	                    element.css('height', attrs.height);
	                } else {
	                    element.css('height', attrs.height + 'px');
	                }
	            }

	            // If the width attribute defined update css
	            // Then watch if bound property changes and update css
	            if (isDefined(attrs.width)) {
	                updateWidth();

	                scope.$watch(
	                    function () {
	                        return element[0].getAttribute('width');
	                    },
	                    function () {
	                        updateWidth();
	                        map.invalidateSize();
	                    });
	            }

	            // If the height attribute defined update css
	            // Then watch if bound property changes and update css
	            if (isDefined(attrs.height)) {
	                updateHeight();

	                scope.$watch(
	                    function () {
	                        return element[0].getAttribute('height');
	                    },
	                    function () {
	                        updateHeight();
	                        map.invalidateSize();
	                    });
	            }

	            // Create the Leaflet Map Object with the options
	            var map = new L.Map(element[0], leafletMapDefaults.getMapCreationDefaults(attrs.id));
	            _leafletMap.resolve(map);

	            if (!isDefined(attrs.center)) {
	                map.setView([defaults.center.lat, defaults.center.lng], defaults.center.zoom);
	            }

	            // If no layers nor tiles defined, set the default tileLayer
	            if (!isDefined(attrs.tiles) && (!isDefined(attrs.layers))) {
	                var tileLayerObj = L.tileLayer(defaults.tileLayer, defaults.tileLayerOptions);
	                tileLayerObj.addTo(map);
	                leafletData.setTiles(tileLayerObj, attrs.id);
	            }

	            // Set zoom control configuration
	            if (isDefined(map.zoomControl) &&
	                isDefined(defaults.zoomControlPosition)) {
	                map.zoomControl.setPosition(defaults.zoomControlPosition);
	            }

	            if (isDefined(map.zoomControl) &&
	                defaults.zoomControl===false) {
	                map.zoomControl.removeFrom(map);
	            }

	            if (isDefined(map.zoomsliderControl) &&
	                isDefined(defaults.zoomsliderControl) &&
	                defaults.zoomsliderControl===false) {
	                map.zoomsliderControl.removeFrom(map);
	            }


	            // if no event-broadcast attribute, all events are broadcasted
	            if (!isDefined(attrs.eventBroadcast)) {
	                var logic = "broadcast";
	                for (var i = 0; i < mapEvents.length; i++) {
	                    var eventName = mapEvents[i];
	                    map.on(eventName, genDispatchMapEvent(scope, eventName, logic), {
	                        eventName: eventName
	                    });
	                }
	            }

	            // Resolve the map object to the promises
	            map.whenReady(function() {
	                leafletData.setMap(map, attrs.id);
	            });

	            scope.$on('$destroy', function () {
	                map.remove();
	                leafletData.unresolveMap(attrs.id);
	            });

	            //Handle request to invalidate the map size
	            //Up scope using $scope.$emit('invalidateSize')
	            //Down scope using $scope.$broadcast('invalidateSize')
	            scope.$on('invalidateSize', function() {
	                map.invalidateSize();
	            });
	        }
	    };
	}]);

	angular.module("leaflet-directive").factory('leafletBoundsHelpers', ["$log", "leafletHelpers", function ($log, leafletHelpers) {

	    var isArray = leafletHelpers.isArray,
	        isNumber = leafletHelpers.isNumber;

	    function _isValidBounds(bounds) {
	        return angular.isDefined(bounds) && angular.isDefined(bounds.southWest) &&
	               angular.isDefined(bounds.northEast) && angular.isNumber(bounds.southWest.lat) &&
	               angular.isNumber(bounds.southWest.lng) && angular.isNumber(bounds.northEast.lat) &&
	               angular.isNumber(bounds.northEast.lng);
	    }

	    return {
	        createLeafletBounds: function(bounds) {
	            if (_isValidBounds(bounds)) {
	                return L.latLngBounds([bounds.southWest.lat, bounds.southWest.lng],
	                                      [bounds.northEast.lat, bounds.northEast.lng ]);
	            }
	        },

	        isValidBounds: _isValidBounds,

	        createBoundsFromArray: function(boundsArray) {
	            if (!(isArray(boundsArray) && boundsArray.length === 2 &&
	                  isArray(boundsArray[0]) && isArray(boundsArray[1]) &&
	                  boundsArray[0].length === 2 && boundsArray[1].length === 2 &&
	                  isNumber(boundsArray[0][0]) && isNumber(boundsArray[0][1]) &&
	                  isNumber(boundsArray[1][0]) && isNumber(boundsArray[1][1]))) {
	                $log.error("[AngularJS - Leaflet] The bounds array is not valid.");
	                return;
	            }

	            return {
	                northEast: {
	                    lat: boundsArray[0][0],
	                    lng: boundsArray[0][1]
	                },
	                southWest: {
	                    lat: boundsArray[1][0],
	                    lng: boundsArray[1][1]
	                }
	            };

	        }
	    };
	}]);

	angular.module("leaflet-directive").factory('leafletControlHelpers', ["$rootScope", "$log", "leafletHelpers", "leafletMapDefaults", function ($rootScope, $log, leafletHelpers, leafletMapDefaults) {
	    var isDefined = leafletHelpers.isDefined;
	    var isObject = leafletHelpers.isObject;
	    var _controls = {};

	    var _controlLayersMustBeVisible = function(baselayers, overlays, mapId) {
	        var defaults = leafletMapDefaults.getDefaults(mapId);
	        if(!defaults.controls.layers.visible) {
	            return false;
	        }

	        var atLeastOneControlItemMustBeShown = false;

	        if (isObject(baselayers)) {
	            Object.keys(baselayers).forEach(function(key) {
	                var layer = baselayers[key];
	                if (!isDefined(layer.layerOptions) || layer.layerOptions.showOnSelector !== false) {
	                    atLeastOneControlItemMustBeShown = true;
	                }
	            });
	        }

	        if (isObject(overlays)) {
	            Object.keys(overlays).forEach(function(key) {
	                var layer = overlays[key];
	                if (!isDefined(layer.layerParams) || layer.layerParams.showOnSelector !== false) {
	                    atLeastOneControlItemMustBeShown = true;
	                }
	            });
	        }

	        return atLeastOneControlItemMustBeShown;
	    };

	    var _createLayersControl = function(mapId) {
	        var defaults = leafletMapDefaults.getDefaults(mapId);
	        var controlOptions = {
	            collapsed: defaults.controls.layers.collapsed,
	            position: defaults.controls.layers.position,
	            autoZIndex: false
	        };

	        angular.extend(controlOptions, defaults.controls.layers.options);

	        var control;
	        if(defaults.controls.layers && isDefined(defaults.controls.layers.control)) {
				control = defaults.controls.layers.control.apply(this, [[], [], controlOptions]);
			} else {
				control = new L.control.layers([], [], controlOptions);
			}

	        return control;
	    };

	    return {
	        layersControlMustBeVisible: _controlLayersMustBeVisible,

	        updateLayersControl: function(map, mapId, loaded, baselayers, overlays, leafletLayers) {
	            var i;
	            var _layersControl = _controls[mapId];
	            var mustBeLoaded = _controlLayersMustBeVisible(baselayers, overlays, mapId);

	            if (isDefined(_layersControl) && loaded) {
	                for (i in leafletLayers.baselayers) {
	                    _layersControl.removeLayer(leafletLayers.baselayers[i]);
	                }
	                for (i in leafletLayers.overlays) {
	                    _layersControl.removeLayer(leafletLayers.overlays[i]);
	                }
	                map.removeControl(_layersControl);
	                delete _controls[mapId];
	            }

	            if (mustBeLoaded) {
	                _layersControl = _createLayersControl(mapId);
	                _controls[mapId] = _layersControl;
	                for (i in baselayers) {
	                    var hideOnSelector = isDefined(baselayers[i].layerOptions) &&
	                                         baselayers[i].layerOptions.showOnSelector === false;
	                    if (!hideOnSelector && isDefined(leafletLayers.baselayers[i])) {
	                        _layersControl.addBaseLayer(leafletLayers.baselayers[i], baselayers[i].name);
	                    }
	                }
	                for (i in overlays) {
	                	var hideOverlayOnSelector = isDefined(overlays[i].layerParams) &&
	                            overlays[i].layerParams.showOnSelector === false;
	                    if (!hideOverlayOnSelector && isDefined(leafletLayers.overlays[i])) {
	                        _layersControl.addOverlay(leafletLayers.overlays[i], overlays[i].name);
	                    }
	                }

	                map.addControl(_layersControl);
	            }
	            return mustBeLoaded;
	        }
	    };
	}]);

	angular.module("leaflet-directive").service('leafletData', ["$log", "$q", "leafletHelpers", function ($log, $q, leafletHelpers) {
	    var getDefer = leafletHelpers.getDefer,
	        getUnresolvedDefer = leafletHelpers.getUnresolvedDefer,
	        setResolvedDefer = leafletHelpers.setResolvedDefer;

	    var _private = {};
	    var self = this;

	    var upperFirst = function (string) {
	        return string.charAt(0).toUpperCase() + string.slice(1);
	    };

	    var _privateItems = [
	        'map',
	        'tiles',
	        'layers',
	        'paths',
	        'markers',
	        'geoJSON',
	        'UTFGrid', //odd ball on naming convention keeping to not break
	        'decorations',
	        'directiveControls'];

	    //init
	    _privateItems.forEach(function(itemName){
	        _private[itemName] = {};
	    });

	    this.unresolveMap = function (scopeId) {
	        var id = leafletHelpers.obtainEffectiveMapId(_private.map, scopeId);
	        _privateItems.forEach(function (itemName) {
	            _private[itemName][id] = undefined;
	        });
	    };

	    //int repetitive stuff (get and sets)
	    _privateItems.forEach(function (itemName) {
	        var name = upperFirst(itemName);
	        self['set' + name] = function (lObject, scopeId) {
	            var defer = getUnresolvedDefer(_private[itemName], scopeId);
	            defer.resolve(lObject);
	            setResolvedDefer(_private[itemName], scopeId);
	        };

	        self['get' + name] = function (scopeId) {
	            var defer = getDefer(_private[itemName], scopeId);
	            return defer.promise;
	        };
	    });
	}]);

	angular.module("leaflet-directive")
	.service('leafletDirectiveControlsHelpers', ["$log", "leafletData", "leafletHelpers", function ($log, leafletData, leafletHelpers) {
	    var _isDefined = leafletHelpers.isDefined,
	        _isString = leafletHelpers.isString,
	        _isObject = leafletHelpers.isObject,
	        _mainErrorHeader = leafletHelpers.errorHeader;

	    var _errorHeader = _mainErrorHeader + '[leafletDirectiveControlsHelpers';

	    var _extend = function(id, thingToAddName, createFn, cleanFn){
	        var _fnHeader = _errorHeader + '.extend] ';
	        var extender = {};
	        if(!_isDefined(thingToAddName)){
	            $log.error(_fnHeader + 'thingToAddName cannot be undefined');
	            return;
	        }

	        if(_isString(thingToAddName) && _isDefined(createFn) && _isDefined(cleanFn)){
	            extender[thingToAddName] = {
	                create: createFn,
	                clean: cleanFn
	            };
	        }
	        else if(_isObject(thingToAddName) && !_isDefined(createFn) && !_isDefined(cleanFn)){
	            extender = thingToAddName;
	        }
	        else{
	            $log.error(_fnHeader + 'incorrect arguments');
	            return;
	        }

	        //add external control to create / destroy markers without a watch
	        leafletData.getDirectiveControls().then(function(controls){
	            angular.extend(controls, extender);
	            leafletData.setDirectiveControls(controls, id);
	        });
	    };

	    return {
	        extend: _extend
	    };
	}]);

	angular.module("leaflet-directive").factory('leafletEvents',
	    ["leafletMapEvents", "leafletMarkerEvents", "leafletPathEvents", function (leafletMapEvents, leafletMarkerEvents, leafletPathEvents) {
	        var retObj = {};
	        angular.extend(retObj,leafletMapEvents, leafletMarkerEvents, leafletPathEvents);
	        return retObj;
	}]);

	angular.module("leaflet-directive")
	.service('leafletGeoJsonHelpers', ["leafletHelpers", "leafletIterators", function (leafletHelpers, leafletIterators) {
	    var lHlp = leafletHelpers,
	    lIt = leafletIterators;
	    var Point = function(lat,lng){
	        this.lat = lat;
	        this.lng = lng;
	        return this;
	    };

	    var _getLat = function(value) {
	        if (Array.isArray(value) && value.length === 2) {
	            return value[1];
	        } else if (lHlp.isDefined(value.type) && value.type === 'Point') {
	            return +value.coordinates[1];
	        } else {
	            return +value.lat;
	        }
	    };

	    var _getLng = function(value) {
	        if (Array.isArray(value) && value.length === 2) {
	            return value[0];
	        } else if (lHlp.isDefined(value.type) && value.type === 'Point') {
	            return +value.coordinates[0];
	        } else {
	            return +value.lng;
	        }
	    };

	    var _validateCoords = function(coords) {
	        if (lHlp.isUndefined(coords)) {
	            return false;
	        }
	        if (lHlp.isArray(coords)) {
	            if (coords.length === 2 && lHlp.isNumber(coords[0]) && lHlp.isNumber(coords[1])) {
	                return true;
	            }
	        } else if (lHlp.isDefined(coords.type)) {
	            if (
	                coords.type === 'Point' && lHlp.isArray(coords.coordinates) &&
	                coords.coordinates.length === 2  &&
	                lHlp.isNumber(coords.coordinates[0]) &&
	                lHlp.isNumber(coords.coordinates[1])) {
	                    return true;
	                }
	            }

	            var ret = lIt.all(['lat', 'lng'], function(pos){
	                return lHlp.isDefined(coords[pos]) && lHlp.isNumber(coords[pos]);
	            });
	            return ret;
	        };

	        var _getCoords = function(value) {
	            if (!value || !_validateCoords(value)) {
	                return;
	            }
	            var p =  null;
	            if (Array.isArray(value) && value.length === 2) {
	                p = new Point(value[1], value[0]);
	            } else if (lHlp.isDefined(value.type) && value.type === 'Point') {
	                p = new Point(value.coordinates[1], value.coordinates[0]);
	            } else {
	                return value;
	            }
	            //note angular.merge is avail in angular 1.4.X we might want to fill it here
	            return angular.extend(value, p);//tap on lat, lng if it doesnt exist
	        };


	        return {
	            getLat: _getLat,
	            getLng: _getLng,
	            validateCoords: _validateCoords,
	            getCoords: _getCoords
	        };
	    }]);

	angular.module("leaflet-directive").factory('leafletHelpers', ["$q", "$log", function ($q, $log) {
	    var _errorHeader = '[AngularJS - Leaflet] ';
	    var _copy = angular.copy;
	    var _clone = _copy;
	    /*
	    For parsing paths to a field in an object

	    Example:
	    var obj = {
	        bike:{
	         1: 'hi'
	         2: 'foo'
	        }
	    };
	    _getObjectValue(obj,"bike.1") returns 'hi'
	    this is getPath in ui-gmap
	     */
	    var _getObjectValue = function(object, pathStr) {
	        var obj;
	        if(!object || !angular.isObject(object))
	            return;
	        //if the key is not a sting then we already have the value
	        if ((pathStr === null) || !angular.isString(pathStr)) {
	            return pathStr;
	        }
	        obj = object;
	        pathStr.split('.').forEach(function(value) {
	            if (obj) {
	                obj = obj[value];
	            }
	        });
	        return obj;
	    };

	    /*
	     Object Array Notation
	     _getObjectArrayPath("bike.one.two")
	     returns:
	     'bike["one"]["two"]'
	     */
	    var _getObjectArrayPath = function(pathStr){
	        return pathStr.split('.').reduce(function(previous, current) {
	            return previous + '["'+ current + '"]';
	        });
	    };

	    /* Object Dot Notation
	     _getObjectPath(["bike","one","two"])
	     returns:
	     "bike.one.two"
	     */
	    var _getObjectDotPath = function(arrayOfStrings){
	        return arrayOfStrings.reduce(function(previous, current) {
	            return previous + '.' + current;
	        });
	    };

	    function _obtainEffectiveMapId(d, mapId) {
	        var id, i;
	        if (!angular.isDefined(mapId)) {
	        if (Object.keys(d).length === 0) {
	            id = "main";
	        } else if (Object.keys(d).length >= 1) {
	            for (i in d) {
	                if (d.hasOwnProperty(i)) {
	                    id = i;
	                }
	            }
	        } else if (Object.keys(d).length === 0) {
	            id = "main";
	        } else {
	                $log.error(_errorHeader + "- You have more than 1 map on the DOM, you must provide the map ID to the leafletData.getXXX call");
	            }
	        } else {
	            id = mapId;
	        }

	        return id;
	    }

	    function _getUnresolvedDefer(d, mapId) {
	        var id = _obtainEffectiveMapId(d, mapId),
	            defer;

	        if (!angular.isDefined(d[id]) || d[id].resolvedDefer === true) {
	            defer = $q.defer();
	            d[id] = {
	                defer: defer,
	                resolvedDefer: false
	            };
	        } else {
	            defer = d[id].defer;
	        }

	        return defer;
	    }

	    var _isDefined = function(value) {
	        return angular.isDefined(value) && value !== null;
	    };
	    var _isUndefined = function(value){
	        return !_isDefined(value);
	    };

	    return {
	        copy:_copy,
	        clone:_clone,
	        errorHeader: _errorHeader,
	        getObjectValue: _getObjectValue,
	        getObjectArrayPath:_getObjectArrayPath,
	        getObjectDotPath: _getObjectDotPath,
	        defaultTo: function(val, _default){
	            return _isDefined(val) ? val : _default;
	        },
	        //mainly for checking attributes of directives lets keep this minimal (on what we accept)
	        isTruthy: function(val){
	            return val === 'true' || val === true;
	        },
	        //Determine if a reference is {}
	        isEmpty: function(value) {
	            return Object.keys(value).length === 0;
	        },

	        //Determine if a reference is undefined or {}
	        isUndefinedOrEmpty: function (value) {
	            return (angular.isUndefined(value) || value === null) || Object.keys(value).length === 0;
	        },

	        // Determine if a reference is defined
	        isDefined: _isDefined,
	        isUndefined:_isUndefined,
	        // Determine if a reference is a number
	        isNumber: function(value) {
	            return angular.isNumber(value);
	        },

	        // Determine if a reference is a string
	        isString: function(value) {
	            return angular.isString(value);
	        },

	        // Determine if a reference is an array
	        isArray: function(value) {
	            return angular.isArray(value);
	        },

	        // Determine if a reference is an object
	        isObject: function(value) {
	            return angular.isObject(value);
	        },

	        // Determine if a reference is a function.
	        isFunction: function(value) {
	            return angular.isFunction(value);
	        },

	        // Determine if two objects have the same properties
	        equals: function(o1, o2) {
	            return angular.equals(o1, o2);
	        },

	        isValidCenter: function(center) {
	            return angular.isDefined(center) && angular.isNumber(center.lat) &&
	                   angular.isNumber(center.lng) && angular.isNumber(center.zoom);
	        },

	        isValidPoint: function(point) {
	            if (!angular.isDefined(point)) {
	                return false;
	            }
	            if (angular.isArray(point)) {
	                return point.length === 2 && angular.isNumber(point[0]) && angular.isNumber(point[1]);
	            }
	            return angular.isNumber(point.lat) && angular.isNumber(point.lng);
	        },

	        isSameCenterOnMap: function(centerModel, map) {
	            var mapCenter = map.getCenter();
	            var zoom = map.getZoom();
	            if (centerModel.lat && centerModel.lng &&
	                mapCenter.lat.toFixed(4) === centerModel.lat.toFixed(4) &&
	                mapCenter.lng.toFixed(4) === centerModel.lng.toFixed(4) &&
	                zoom === centerModel.zoom) {
	                    return true;
	            }
	            return false;
	        },

	        safeApply: function($scope, fn) {
	            var phase = $scope.$root.$$phase;
	            if (phase === '$apply' || phase === '$digest') {
	                $scope.$eval(fn);
	            } else {
	                $scope.$evalAsync(fn);
	            }
	        },

	        obtainEffectiveMapId: _obtainEffectiveMapId,

	        getDefer: function(d, mapId) {
	            var id = _obtainEffectiveMapId(d, mapId),
	                defer;
	            if (!angular.isDefined(d[id]) || d[id].resolvedDefer === false) {
	                defer = _getUnresolvedDefer(d, mapId);
	            } else {
	                defer = d[id].defer;
	            }
	            return defer;
	        },

	        getUnresolvedDefer: _getUnresolvedDefer,

	        setResolvedDefer: function(d, mapId) {
	            var id = _obtainEffectiveMapId(d, mapId);
	            d[id].resolvedDefer = true;
	        },

	        FullScreenControlPlugin: {
	            isLoaded: function() {
	                return angular.isDefined(L.Control.Fullscreen);
	            }
	        },

	        AwesomeMarkersPlugin: {
	            isLoaded: function() {
	                return angular.isDefined(L.AwesomeMarkers) && angular.isDefined(L.AwesomeMarkers.Icon);
	            },
	            is: function(icon) {
	                if (this.isLoaded()) {
	                    return icon instanceof L.AwesomeMarkers.Icon;
	                } else {
	                    return false;
	                }
	            },
	            equal: function (iconA, iconB) {
	                if (!this.isLoaded()) {
	                    return false;
	                }
	                if (this.is(iconA)) {
	                    return angular.equals(iconA, iconB);
	                } else {
	                    return false;
	                }
	            }
	        },

	        PolylineDecoratorPlugin: {
	            isLoaded: function() {
	                if (angular.isDefined(L.PolylineDecorator)) {
	                    return true;
	                } else {
	                    return false;
	                }
	            },
	            is: function(decoration) {
	                if (this.isLoaded()) {
	                    return decoration instanceof L.PolylineDecorator;
	                } else {
	                    return false;
	                }
	            },
	            equal: function(decorationA, decorationB) {
	                if (!this.isLoaded()) {
	                    return false;
	                }
	                if (this.is(decorationA)) {
	                    return angular.equals(decorationA, decorationB);
	                } else {
	                    return false;
	                }
	            }
	        },

	        MakiMarkersPlugin: {
	            isLoaded: function() {
	                if (angular.isDefined(L.MakiMarkers) && angular.isDefined(L.MakiMarkers.Icon)) {
	                    return true;
	                } else {
	                    return false;
	                }
	            },
	            is: function(icon) {
	                if (this.isLoaded()) {
	                    return icon instanceof L.MakiMarkers.Icon;
	                } else {
	                    return false;
	                }
	            },
	            equal: function (iconA, iconB) {
	                if (!this.isLoaded()) {
	                    return false;
	                }
	                if (this.is(iconA)) {
	                    return angular.equals(iconA, iconB);
	                } else {
	                    return false;
	                }
	            }
	        },
	        ExtraMarkersPlugin: {
	            isLoaded: function () {
	                if (angular.isDefined(L.ExtraMarkers) && angular.isDefined(L.ExtraMarkers.Icon)) {
	                    return true;
	                } else {
	                    return false;
	                }
	            },
	            is: function (icon) {
	                if (this.isLoaded()) {
	                    return icon instanceof L.ExtraMarkers.Icon;
	                } else {
	                    return false;
	                }
	            },
	            equal: function (iconA, iconB) {
	                if (!this.isLoaded()) {
	                    return false;
	                }
	                if (this.is(iconA)) {
	                    return angular.equals(iconA, iconB);
	                } else {
	                    return false;
	                }
	            }
	        },
	        LabelPlugin: {
	            isLoaded: function() {
	                return angular.isDefined(L.Label);
	            },
	            is: function(layer) {
	                if (this.isLoaded()) {
	                    return layer instanceof L.MarkerClusterGroup;
	                } else {
	                    return false;
	                }
	            }
	        },
	        MarkerClusterPlugin: {
	            isLoaded: function() {
	                return angular.isDefined(L.MarkerClusterGroup);
	            },
	            is: function(layer) {
	                if (this.isLoaded()) {
	                    return layer instanceof L.MarkerClusterGroup;
	                } else {
	                    return false;
	                }
	            }
	        },
	        GoogleLayerPlugin: {
	            isLoaded: function() {
	                return angular.isDefined(L.Google);
	            },
	            is: function(layer) {
	                if (this.isLoaded()) {
	                    return layer instanceof L.Google;
	                } else {
	                    return false;
	                }
	            }
	        },
	        ChinaLayerPlugin: {
	            isLoaded: function() {
	                return angular.isDefined(L.tileLayer.chinaProvider);
	            }
	        },
	        HeatLayerPlugin: {
	            isLoaded: function() {
	                return angular.isDefined(L.heatLayer);
	            }
	        },
	        WebGLHeatMapLayerPlugin: {
	            isLoaded: function() {
	                return angular.isDefined(L.TileLayer.WebGLHeatMap);
	            }
	        },
	        BingLayerPlugin: {
	            isLoaded: function() {
	                return angular.isDefined(L.BingLayer);
	            },
	            is: function(layer) {
	                if (this.isLoaded()) {
	                    return layer instanceof L.BingLayer;
	                } else {
	                    return false;
	                }
	            }
	        },
	        WFSLayerPlugin: {
	            isLoaded: function() {
	                return L.GeoJSON.WFS !== undefined;
	            },
	            is: function(layer) {
	                if (this.isLoaded()) {
	                    return layer instanceof L.GeoJSON.WFS;
	                } else {
	                    return false;
	                }
	            }
	        },
	        AGSLayerPlugin: {
	            isLoaded: function() {
	                return lvector !== undefined && lvector.AGS !== undefined;
	            },
	            is: function(layer) {
	                if (this.isLoaded()) {
	                    return layer instanceof lvector.AGS;
	                } else {
	                    return false;
	                }
	            }
	        },
	        YandexLayerPlugin: {
	            isLoaded: function() {
	                return angular.isDefined(L.Yandex);
	            },
	            is: function(layer) {
	                if (this.isLoaded()) {
	                    return layer instanceof L.Yandex;
	                } else {
	                    return false;
	                }
	            }
	        },
	        DynamicMapLayerPlugin: {
	            isLoaded: function () {
	                return L.esri !== undefined && L.esri.dynamicMapLayer !== undefined;
	            },
	            is: function (layer) {
	                if (this.isLoaded()) {
	                    return layer instanceof L.esri.dynamicMapLayer;
	                } else {
	                    return false;
	                }
	            }
	        },
	        GeoJSONPlugin: {
	            isLoaded: function(){
	                return angular.isDefined(L.TileLayer.GeoJSON);
	            },
	            is: function(layer) {
	                if (this.isLoaded()) {
	                    return layer instanceof L.TileLayer.GeoJSON;
	                } else {
	                    return false;
	                }
	            }
	        },
	        UTFGridPlugin: {
	            isLoaded: function(){
	                return angular.isDefined(L.UtfGrid);
	            },
	            is: function(layer) {
	                if (this.isLoaded()) {
	                    return layer instanceof L.UtfGrid;
	                } else {
	                    $log.error('[AngularJS - Leaflet] No UtfGrid plugin found.');
	                    return false;
	                }
	            }
	        },
	        CartoDB: {
	            isLoaded: function(){
	                return cartodb;
	            },
	            is: function(/*layer*/) {
	                return true;
	                /*
	                if (this.isLoaded()) {
	                    return layer instanceof L.TileLayer.GeoJSON;
	                } else {
	                    return false;
	                }*/
	            }
	        },
	        Leaflet: {
	            DivIcon: {
	                is: function(icon) {
	                    return icon instanceof L.DivIcon;
	                },
	                equal: function(iconA, iconB) {
	                    if (this.is(iconA)) {
	                        return angular.equals(iconA, iconB);
	                    } else {
	                        return false;
	                    }
	                }
	            },
	            Icon: {
	                is: function(icon) {
	                    return icon instanceof L.Icon;
	                },
	                equal: function(iconA, iconB) {
	                    if (this.is(iconA)) {
	                        return angular.equals(iconA, iconB);
	                    } else {
	                        return false;
	                    }
	                }
	            }
	        },
	        /*
	         watchOptions - object to set deep nested watches and turn off watches all together
	         (rely on control / functional updates)
	         watchOptions - Object
	             doWatch:boolean
	             isDeep:boolean (sets $watch(function,isDeep))
	             individual
	                 doWatch:boolean
	                 isDeep:boolean
	         */
	        //legacy defaults
	        watchOptions: {
	            doWatch:true,
	            isDeep: true,
	            individual:{
	                doWatch:true,
	                isDeep: true
	            }
	        }
	    };
	}]);

	angular.module('leaflet-directive').service('leafletIterators', ["$log", "leafletHelpers", function ($log, leafletHelpers) {

	  var lHlp = leafletHelpers,
	  errorHeader = leafletHelpers.errorHeader + 'leafletIterators: ';

	  //BEGIN COPY from underscore
	  var _keys = Object.keys;
	  var _isFunction = lHlp.isFunction;
	  var _isObject = lHlp.isObject;

	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

	  var _isArrayLike = function(collection) {
	    var length = collection !== null && collection.length;
	    return  lHlp.isNumber(length) && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };

	  // Keep the identity function around for default iteratees.
	  var _identity = function(value) {
	    return value;
	  };

	  var _property = function(key) {
	    return function(obj) {
	      return obj === null ? void 0 : obj[key];
	    };
	  };

	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount === null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };

	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj === null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };

	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  var _extendOwn, _assign = null;
	  _extendOwn = _assign = createAssigner(_keys);

	  // Returns whether an object has a given set of `key:value` pairs.
	  var _isMatch = function(object, attrs) {
	    var keys = _keys(attrs), length = keys.length;
	    if (object === null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };

	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  var _matcher, _matches = null;
	  _matcher = _matches = function(attrs) {
	    attrs = _extendOwn({}, attrs);
	    return function(obj) {
	      return _isMatch(obj, attrs);
	    };
	  };


	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value === null) return _identity;
	    if (_isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_isObject(value)) return _matcher(value);
	    return _property(value);
	  };

	  var _every, _all = null;
	  _every = _all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !_isArrayLike(obj) && _keys(obj),
	    length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };

	  //END COPY fron underscore

	  var _hasErrors = function(collection, cb, ignoreCollection, cbName){
	    if(!ignoreCollection) {
	      if (!lHlp.isDefined(collection) || !lHlp.isDefined(cb)) {
	        $log.error(errorHeader + 'collection or cb undefined');
	        return true;
	      }
	    }
	    if(!lHlp.isFunction(cb)){
	      cbName = lHlp.defaultTo(cb,'cb');
	      $log.error(errorHeader + cbName + ' is not a function');
	      return true;
	    }
	    return false;
	  };

	  var _iterate = function(collection, externalCb, internalCb){
	    if(_hasErrors(undefined, internalCb, true, 'internalCb')){
	      return;
	    }
	    if(!_hasErrors(collection, externalCb)){
	      for(var key in collection){
	        internalCb(collection[key], key);
	      }
	    }
	  };


	  //consider adding lodash or underscore but for now adding iterators as we need them
	  var _each = function(collection, cb){
	    _iterate(collection, cb, function(val, key){
	      cb(val, key);
	    });
	  };

	  //lodash or underscore have preference
	  return window._ ? window._ : {
	    each:_each,
	    every: _every,
	    all: _all
	  };
	}]);

	angular.module("leaflet-directive")
	.factory('leafletLayerHelpers', ["$rootScope", "$log", "leafletHelpers", function ($rootScope, $log, leafletHelpers) {
	    var Helpers = leafletHelpers;
	    var isString = leafletHelpers.isString;
	    var isObject = leafletHelpers.isObject;
	    var isArray = leafletHelpers.isArray;
	    var isDefined = leafletHelpers.isDefined;

	    var utfGridCreateLayer = function(params) {
	        if (!Helpers.UTFGridPlugin.isLoaded()) {
	            $log.error('[AngularJS - Leaflet] The UTFGrid plugin is not loaded.');
	            return;
	        }
	        var utfgrid = new L.UtfGrid(params.url, params.pluginOptions);

	        utfgrid.on('mouseover', function(e) {
	            $rootScope.$broadcast('leafletDirectiveMap.utfgridMouseover', e);
	        });

	        utfgrid.on('mouseout', function(e) {
	            $rootScope.$broadcast('leafletDirectiveMap.utfgridMouseout', e);
	        });

	        utfgrid.on('click', function(e) {
	            $rootScope.$broadcast('leafletDirectiveMap.utfgridClick', e);
	        });

	        return utfgrid;
	    };

	    var layerTypes = {
	        xyz: {
	            mustHaveUrl: true,
	            createLayer: function(params) {
	                return L.tileLayer(params.url, params.options);
	            }
	        },
	        mapbox: {
	            mustHaveKey: true,
	            createLayer: function(params) {
	                var url = '//{s}.tiles.mapbox.com/v3/' + params.key + '/{z}/{x}/{y}.png';
	                return L.tileLayer(url, params.options);
	            }
	        },
	        geoJSON: {
	            mustHaveUrl: true,
	            createLayer: function(params) {
	                if (!Helpers.GeoJSONPlugin.isLoaded()) {
	                    return;
	                }
	                return new L.TileLayer.GeoJSON(params.url, params.pluginOptions, params.options);
	            }
	        },
	        utfGrid: {
	            mustHaveUrl: true,
	            createLayer: utfGridCreateLayer
	        },
	        cartodbTiles: {
	            mustHaveKey: true,
	            createLayer: function(params) {
	                var url = '//' + params.user + '.cartodb.com/api/v1/map/' + params.key + '/{z}/{x}/{y}.png';
	                return L.tileLayer(url, params.options);
	            }
	        },
	        cartodbUTFGrid: {
	            mustHaveKey: true,
	            mustHaveLayer : true,
	            createLayer: function(params) {
	                params.url = '//' + params.user + '.cartodb.com/api/v1/map/' + params.key + '/' + params.layer + '/{z}/{x}/{y}.grid.json';
	                return utfGridCreateLayer(params);
	            }
	        },
	        cartodbInteractive: {
	            mustHaveKey: true,
	            mustHaveLayer : true,
	            createLayer: function(params) {
	                var tilesURL = '//' + params.user + '.cartodb.com/api/v1/map/' + params.key + '/{z}/{x}/{y}.png';
	                var tileLayer = L.tileLayer(tilesURL, params.options);
	                params.url = '//' + params.user + '.cartodb.com/api/v1/map/' + params.key + '/' + params.layer + '/{z}/{x}/{y}.grid.json';
	                var utfLayer = utfGridCreateLayer(params);
	                return L.layerGroup([tileLayer, utfLayer]);
	            }
	        },
	        wms: {
	            mustHaveUrl: true,
	            createLayer: function(params) {
	                return L.tileLayer.wms(params.url, params.options);
	            }
	        },
	        wmts: {
	            mustHaveUrl: true,
	            createLayer: function(params) {
	                return L.tileLayer.wmts(params.url, params.options);
	            }
	        },
	        wfs: {
	            mustHaveUrl: true,
	            mustHaveLayer : true,
	            createLayer: function(params) {
	                if (!Helpers.WFSLayerPlugin.isLoaded()) {
	                    return;
	                }
	                var options = angular.copy(params.options);
	                if(options.crs && 'string' === typeof options.crs) {
	                    /*jshint -W061 */
	                    options.crs = eval(options.crs);
	                }
	                return new L.GeoJSON.WFS(params.url, params.layer, options);
	            }
	        },
	        group: {
	            mustHaveUrl: false,
	            createLayer: function (params) {
	                var lyrs = [];
	                angular.forEach(params.options.layers, function(l){
	                  lyrs.push(createLayer(l));
	                });
	                return L.layerGroup(lyrs);
	            }
	        },
	        featureGroup: {
	            mustHaveUrl: false,
	            createLayer: function () {
	                return L.featureGroup();
	            }
	        },
	        google: {
	            mustHaveUrl: false,
	            createLayer: function(params) {
	                var type = params.type || 'SATELLITE';
	                if (!Helpers.GoogleLayerPlugin.isLoaded()) {
	                    return;
	                }
	                return new L.Google(type, params.options);
	            }
	        },
	        china:{
	            mustHaveUrl:false,
	            createLayer:function(params){
	                var type = params.type || '';
	                if(!Helpers.ChinaLayerPlugin.isLoaded()){
	                    return;
	                }
	                return L.tileLayer.chinaProvider(type, params.options);
	            }
	        },
	        ags: {
	            mustHaveUrl: true,
	            createLayer: function(params) {
	                if (!Helpers.AGSLayerPlugin.isLoaded()) {
	                    return;
	                }

	                var options = angular.copy(params.options);
	                angular.extend(options, {
	                    url: params.url
	                });
	                var layer = new lvector.AGS(options);
	                layer.onAdd = function(map) {
	                    this.setMap(map);
	                };
	                layer.onRemove = function() {
	                    this.setMap(null);
	                };
	                return layer;
	            }
	        },
	        dynamic: {
	            mustHaveUrl: true,
	            createLayer: function(params) {
	                if (!Helpers.DynamicMapLayerPlugin.isLoaded()) {
	                    return;
	                }
	                return L.esri.dynamicMapLayer(params.url, params.options);
	            }
	        },
	        markercluster: {
	            mustHaveUrl: false,
	            createLayer: function(params) {
	                if (!Helpers.MarkerClusterPlugin.isLoaded()) {
	                    $log.error('[AngularJS - Leaflet] The markercluster plugin is not loaded.');
	                    return;
	                }
	                return new L.MarkerClusterGroup(params.options);
	            }
	        },
	        bing: {
	            mustHaveUrl: false,
	            createLayer: function(params) {
	                if (!Helpers.BingLayerPlugin.isLoaded()) {
	                    return;
	                }
	                return new L.BingLayer(params.key, params.options);
	            }
	        },
	        webGLHeatmap: {
	            mustHaveUrl: false,
	            mustHaveData: true,
	            createLayer: function(params) {
	                if (!Helpers.WebGLHeatMapLayerPlugin.isLoaded()) {
	                    return;
	                }
	                var layer = new L.TileLayer.WebGLHeatMap(params.options);
	                if (isDefined(params.data)) {
	                    layer.setData(params.data);
	                }

	                return layer;
	            }
	        },
	        heat: {
	            mustHaveUrl: false,
	            mustHaveData: true,
	            createLayer: function(params) {
	                if (!Helpers.HeatLayerPlugin.isLoaded()) {
	                    return;
	                }
	                var layer = new L.heatLayer();

	                if (isArray(params.data)) {
	                    layer.setLatLngs(params.data);
	                }

	                if (isObject(params.options)) {
	                    layer.setOptions(params.options);
	                }

	                return layer;
	            }
	        },
	        yandex: {
	            mustHaveUrl: false,
	            createLayer: function(params) {
	                var type = params.type || 'map';
	                if (!Helpers.YandexLayerPlugin.isLoaded()) {
	                    return;
	                }
	                return new L.Yandex(type, params.options);
	            }
	        },
	        imageOverlay: {
	            mustHaveUrl: true,
	            mustHaveBounds : true,
	            createLayer: function(params) {
	                return L.imageOverlay(params.url, params.bounds, params.options);
	            }
	        },

	        // This "custom" type is used to accept every layer that user want to define himself.
	        // We can wrap these custom layers like heatmap or yandex, but it means a lot of work/code to wrap the world,
	        // so we let user to define their own layer outside the directive,
	        // and pass it on "createLayer" result for next processes
	        custom: {
	            createLayer: function (params) {
	                if (params.layer instanceof L.Class) {
	                    return angular.copy(params.layer);
	                }
	                else {
	                    $log.error('[AngularJS - Leaflet] A custom layer must be a leaflet Class');
	                }
	            }
	        },
	        cartodb: {
	            mustHaveUrl: true,
	            createLayer: function(params) {
	                return cartodb.createLayer(params.map, params.url);
	            }
	        }
	    };

	    function isValidLayerType(layerDefinition) {
	        // Check if the baselayer has a valid type
	        if (!isString(layerDefinition.type)) {
	            $log.error('[AngularJS - Leaflet] A layer must have a valid type defined.');
	            return false;
	        }

	        if (Object.keys(layerTypes).indexOf(layerDefinition.type) === -1) {
	            $log.error('[AngularJS - Leaflet] A layer must have a valid type: ' + Object.keys(layerTypes));
	            return false;
	        }

	        // Check if the layer must have an URL
	        if (layerTypes[layerDefinition.type].mustHaveUrl && !isString(layerDefinition.url)) {
	            $log.error('[AngularJS - Leaflet] A base layer must have an url');
	            return false;
	        }

	        if (layerTypes[layerDefinition.type].mustHaveData && !isDefined(layerDefinition.data)) {
	            $log.error('[AngularJS - Leaflet] The base layer must have a "data" array attribute');
	            return false;
	        }

	        if(layerTypes[layerDefinition.type].mustHaveLayer && !isDefined(layerDefinition.layer)) {
	            $log.error('[AngularJS - Leaflet] The type of layer ' + layerDefinition.type + ' must have an layer defined');
	            return false;
	        }

	        if (layerTypes[layerDefinition.type].mustHaveBounds && !isDefined(layerDefinition.bounds)) {
	            $log.error('[AngularJS - Leaflet] The type of layer ' + layerDefinition.type + ' must have bounds defined');
	            return false ;
	        }

	        if (layerTypes[layerDefinition.type].mustHaveKey && !isDefined(layerDefinition.key)) {
	            $log.error('[AngularJS - Leaflet] The type of layer ' + layerDefinition.type + ' must have key defined');
	            return false ;
	        }
	        return true;
	    }

	    function createLayer(layerDefinition) {
	        if (!isValidLayerType(layerDefinition)) {
	            return;
	        }

	        if (!isString(layerDefinition.name)) {
	            $log.error('[AngularJS - Leaflet] A base layer must have a name');
	            return;
	        }
	        if (!isObject(layerDefinition.layerParams)) {
	            layerDefinition.layerParams = {};
	        }
	        if (!isObject(layerDefinition.layerOptions)) {
	            layerDefinition.layerOptions = {};
	        }

	        // Mix the layer specific parameters with the general Leaflet options. Although this is an overhead
	        // the definition of a base layers is more 'clean' if the two types of parameters are differentiated
	        for (var attrname in layerDefinition.layerParams) {
	            layerDefinition.layerOptions[attrname] = layerDefinition.layerParams[attrname];
	        }

	        var params = {
	            url: layerDefinition.url,
	            data: layerDefinition.data,
	            options: layerDefinition.layerOptions,
	            layer: layerDefinition.layer,
	            type: layerDefinition.layerType,
	            bounds: layerDefinition.bounds,
	            key: layerDefinition.key,
	            pluginOptions: layerDefinition.pluginOptions,
	            user: layerDefinition.user
	        };

	        //TODO Add $watch to the layer properties
	        return layerTypes[layerDefinition.type].createLayer(params);
	    }

	    return {
	        createLayer: createLayer
	    };
	}]);

	angular.module("leaflet-directive").factory('leafletLegendHelpers', function () {
		var _updateLegend = function(div, legendData, type, url) {
			div.innerHTML = '';
			if(legendData.error) {
				div.innerHTML += '<div class="info-title alert alert-danger">' + legendData.error.message + '</div>';
			} else {
				if (type === 'arcgis') {
					for (var i = 0; i < legendData.layers.length; i++) {
						var layer = legendData.layers[i];
						div.innerHTML += '<div class="info-title" data-layerid="' + layer.layerId + '">' + layer.layerName + '</div>';
						for(var j = 0; j < layer.legend.length; j++) {
							var leg = layer.legend[j];
							div.innerHTML +=
								'<div class="inline" data-layerid="' + layer.layerId + '"><img src="data:' + leg.contentType + ';base64,' + leg.imageData + '" /></div>' +
								'<div class="info-label" data-layerid="' + layer.layerId + '">' + leg.label + '</div>';
						}
					}
				}
				else if (type === 'image') {
					div.innerHTML = '<img src="' + url + '"/>';
				}
			}
		};

		var _getOnAddLegend = function(legendData, legendClass, type, url) {
			return function(/*map*/) {
				var div = L.DomUtil.create('div', legendClass);

				if (!L.Browser.touch) {
					L.DomEvent.disableClickPropagation(div);
					L.DomEvent.on(div, 'mousewheel', L.DomEvent.stopPropagation);
				} else {
					L.DomEvent.on(div, 'click', L.DomEvent.stopPropagation);
				}
				_updateLegend(div, legendData, type, url);
				return div;
			};
		};

		var _getOnAddArrayLegend = function(legend, legendClass) {
			return function(/*map*/) {
				var div = L.DomUtil.create('div', legendClass);
	            for (var i = 0; i < legend.colors.length; i++) {
	                div.innerHTML +=
	                    '<div class="outline"><i style="background:' + legend.colors[i] + '"></i></div>' +
	                    '<div class="info-label">' + legend.labels[i] + '</div>';
	            }
	            if (!L.Browser.touch) {
					L.DomEvent.disableClickPropagation(div);
					L.DomEvent.on(div, 'mousewheel', L.DomEvent.stopPropagation);
				} else {
					L.DomEvent.on(div, 'click', L.DomEvent.stopPropagation);
				}
	            return div;
			};
		};

		return {
			getOnAddLegend: _getOnAddLegend,
			getOnAddArrayLegend: _getOnAddArrayLegend,
			updateLegend: _updateLegend,
		};
	});

	angular.module("leaflet-directive").factory('leafletMapDefaults', ["$q", "leafletHelpers", function ($q, leafletHelpers) {
	    function _getDefaults() {
	        return {
	            keyboard: true,
	            dragging: true,
	            worldCopyJump: false,
	            doubleClickZoom: true,
	            scrollWheelZoom: true,
	            tap: true,
	            touchZoom: true,
	            zoomControl: true,
	            zoomsliderControl: false,
	            zoomControlPosition: 'topleft',
	            attributionControl: true,
	            controls: {
	                layers: {
	                    visible: true,
	                    position: 'topright',
	                    collapsed: true
	                }
	            },
	            crs: L.CRS.EPSG3857,
	            tileLayer: '//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
	            tileLayerOptions: {
	                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	            },
	            path: {
	                weight: 10,
	                opacity: 1,
	                color: '#0000ff'
	            },
	            center: {
	                lat: 0,
	                lng: 0,
	                zoom: 1
	            }
	        };
	    }

	    var isDefined = leafletHelpers.isDefined,
	        isObject = leafletHelpers.isObject,
	        obtainEffectiveMapId = leafletHelpers.obtainEffectiveMapId,
	        defaults = {};

	    // Get the _defaults dictionary, and override the properties defined by the user
	    return {
	        getDefaults: function (scopeId) {
	            var mapId = obtainEffectiveMapId(defaults, scopeId);
	            return defaults[mapId];
	        },

	        getMapCreationDefaults: function (scopeId) {
	            var mapId = obtainEffectiveMapId(defaults, scopeId);
	            var d = defaults[mapId];

	            var mapDefaults = {
	                maxZoom: d.maxZoom,
	                keyboard: d.keyboard,
	                dragging: d.dragging,
	                zoomControl: d.zoomControl,
	                doubleClickZoom: d.doubleClickZoom,
	                scrollWheelZoom: d.scrollWheelZoom,
	                tap: d.tap,
	                touchZoom: d.touchZoom,
	                attributionControl: d.attributionControl,
	                worldCopyJump: d.worldCopyJump,
	                crs: d.crs
	            };

	            if (isDefined(d.minZoom)) {
	                mapDefaults.minZoom = d.minZoom;
	            }

	            if (isDefined(d.zoomAnimation)) {
	                mapDefaults.zoomAnimation = d.zoomAnimation;
	            }

	            if (isDefined(d.fadeAnimation)) {
	                mapDefaults.fadeAnimation = d.fadeAnimation;
	            }

	            if (isDefined(d.markerZoomAnimation)) {
	                mapDefaults.markerZoomAnimation = d.markerZoomAnimation;
	            }

	            if (d.map) {
	                for (var option in d.map) {
	                    mapDefaults[option] = d.map[option];
	                }
	            }

	            return mapDefaults;
	        },

	        setDefaults: function (userDefaults, scopeId) {
	            var newDefaults = _getDefaults();

	            if (isDefined(userDefaults)) {
	                newDefaults.doubleClickZoom = isDefined(userDefaults.doubleClickZoom) ? userDefaults.doubleClickZoom : newDefaults.doubleClickZoom;
	                newDefaults.scrollWheelZoom = isDefined(userDefaults.scrollWheelZoom) ? userDefaults.scrollWheelZoom : newDefaults.doubleClickZoom;
	                newDefaults.tap = isDefined(userDefaults.tap) ? userDefaults.tap : newDefaults.tap;
	                newDefaults.touchZoom = isDefined(userDefaults.touchZoom) ? userDefaults.touchZoom : newDefaults.doubleClickZoom;
	                newDefaults.zoomControl = isDefined(userDefaults.zoomControl) ? userDefaults.zoomControl : newDefaults.zoomControl;
	                newDefaults.zoomsliderControl = isDefined(userDefaults.zoomsliderControl) ? userDefaults.zoomsliderControl : newDefaults.zoomsliderControl;
	                newDefaults.attributionControl = isDefined(userDefaults.attributionControl) ? userDefaults.attributionControl : newDefaults.attributionControl;
	                newDefaults.tileLayer = isDefined(userDefaults.tileLayer) ? userDefaults.tileLayer : newDefaults.tileLayer;
	                newDefaults.zoomControlPosition = isDefined(userDefaults.zoomControlPosition) ? userDefaults.zoomControlPosition : newDefaults.zoomControlPosition;
	                newDefaults.keyboard = isDefined(userDefaults.keyboard) ? userDefaults.keyboard : newDefaults.keyboard;
	                newDefaults.dragging = isDefined(userDefaults.dragging) ? userDefaults.dragging : newDefaults.dragging;

	                if (isDefined(userDefaults.controls)) {
	                    angular.extend(newDefaults.controls, userDefaults.controls);
	                }

	                if (isObject(userDefaults.crs)) {
	                    newDefaults.crs = userDefaults.crs;
	                } else if (isDefined(L.CRS[userDefaults.crs])) {
	                    newDefaults.crs = L.CRS[userDefaults.crs];
	                }

	                if (isDefined(userDefaults.center)) {
	                    angular.copy(userDefaults.center, newDefaults.center);
	                }

	                if (isDefined(userDefaults.tileLayerOptions)) {
	                    angular.copy(userDefaults.tileLayerOptions, newDefaults.tileLayerOptions);
	                }

	                if (isDefined(userDefaults.maxZoom)) {
	                    newDefaults.maxZoom = userDefaults.maxZoom;
	                }

	                if (isDefined(userDefaults.minZoom)) {
	                    newDefaults.minZoom = userDefaults.minZoom;
	                }

	                if (isDefined(userDefaults.zoomAnimation)) {
	                    newDefaults.zoomAnimation = userDefaults.zoomAnimation;
	                }

	                if (isDefined(userDefaults.fadeAnimation)) {
	                    newDefaults.fadeAnimation = userDefaults.fadeAnimation;
	                }

	                if (isDefined(userDefaults.markerZoomAnimation)) {
	                    newDefaults.markerZoomAnimation = userDefaults.markerZoomAnimation;
	                }

	                if (isDefined(userDefaults.worldCopyJump)) {
	                    newDefaults.worldCopyJump = userDefaults.worldCopyJump;
	                }

	                if (isDefined(userDefaults.map)) {
	                    newDefaults.map = userDefaults.map;
	                }
	                
	                if (isDefined(userDefaults.path)) {
	                    newDefaults.path = userDefaults.path;
	                }
	            }

	            var mapId = obtainEffectiveMapId(defaults, scopeId);
	            defaults[mapId] = newDefaults;
	            return newDefaults;
	        }
	    };
	}]);

	angular.module("leaflet-directive")
	.service('leafletMarkersHelpers', ["$rootScope", "leafletHelpers", "$log", "$compile", "leafletGeoJsonHelpers", function ($rootScope, leafletHelpers, $log, $compile,
	  leafletGeoJsonHelpers) {

	    var isDefined = leafletHelpers.isDefined,
	        defaultTo = leafletHelpers.defaultTo,
	        MarkerClusterPlugin = leafletHelpers.MarkerClusterPlugin,
	        AwesomeMarkersPlugin = leafletHelpers.AwesomeMarkersPlugin,
	        MakiMarkersPlugin = leafletHelpers.MakiMarkersPlugin,
	        ExtraMarkersPlugin = leafletHelpers.ExtraMarkersPlugin,
	        safeApply     = leafletHelpers.safeApply,
	        Helpers = leafletHelpers,
	        isString = leafletHelpers.isString,
	        isNumber  = leafletHelpers.isNumber,
	        isObject = leafletHelpers.isObject,
	        groups = {},
	        geoHlp = leafletGeoJsonHelpers,
	        errorHeader = leafletHelpers.errorHeader;


	   var _string = function(marker){
	       //this exists since JSON.stringify barfs on cyclic
	       var retStr = '';
	       ['_icon', '_latlng', '_leaflet_id', '_map', '_shadow'].forEach(function(prop){
	           retStr += prop + ': ' + defaultTo(marker[prop], 'undefined') + ' \n';
	       });
	       return '[leafletMarker] : \n' + retStr;
	   };
	    var _log = function(marker, useConsole){
	        var logger = useConsole? console : $log;
	        logger.debug(_string(marker));
	    };

	    var createLeafletIcon = function(iconData) {
	        if (isDefined(iconData) && isDefined(iconData.type) && iconData.type === 'awesomeMarker') {
	            if (!AwesomeMarkersPlugin.isLoaded()) {
	                $log.error( errorHeader + ' The AwesomeMarkers Plugin is not loaded.');
	            }

	            return new L.AwesomeMarkers.icon(iconData);
	        }

	        if (isDefined(iconData) && isDefined(iconData.type) && iconData.type === 'makiMarker') {
	            if (!MakiMarkersPlugin.isLoaded()) {
	                $log.error(errorHeader + 'The MakiMarkers Plugin is not loaded.');
	            }

	            return new L.MakiMarkers.icon(iconData);
	        }

	        if (isDefined(iconData) && isDefined(iconData.type) && iconData.type === 'extraMarker') {
	            if (!ExtraMarkersPlugin.isLoaded()) {
	                $log.error(errorHeader + 'The ExtraMarkers Plugin is not loaded.');
	            }
	            return new L.ExtraMarkers.icon(iconData);
	        }

	        if (isDefined(iconData) && isDefined(iconData.type) && iconData.type === 'div') {
	            return new L.divIcon(iconData);
	        }

	        // allow for any custom icon to be used... assumes the icon has already been initialized
	        if (isDefined(iconData) && isDefined(iconData.type) && iconData.type === 'icon') {
	            return iconData.icon;
	        }

	        var base64icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAGmklEQVRYw7VXeUyTZxjvNnfELFuyIzOabermMZEeQC/OclkO49CpOHXOLJl/CAURuYbQi3KLgEhbrhZ1aDwmaoGqKII6odATmH/scDFbdC7LvFqOCc+e95s2VG50X/LLm/f4/Z7neY/ne18aANCmAr5E/xZf1uDOkTcGcWR6hl9247tT5U7Y6SNvWsKT63P58qbfeLJG8M5qcgTknrvvrdDbsT7Ml+tv82X6vVxJE33aRmgSyYtcWVMqX97Yv2JvW39UhRE2HuyBL+t+gK1116ly06EeWFNlAmHxlQE0OMiV6mQCScusKRlhS3QLeVJdl1+23h5dY4FNB3thrbYboqptEFlphTC1hSpJnbRvxP4NWgsE5Jyz86QNNi/5qSUTGuFk1gu54tN9wuK2wc3o+Wc13RCmsoBwEqzGcZsxsvCSy/9wJKf7UWf1mEY8JWfewc67UUoDbDjQC+FqK4QqLVMGGR9d2wurKzqBk3nqIT/9zLxRRjgZ9bqQgub+DdoeCC03Q8j+0QhFhBHR/eP3U/zCln7Uu+hihJ1+bBNffLIvmkyP0gpBZWYXhKussK6mBz5HT6M1Nqpcp+mBCPXosYQfrekGvrjewd59/GvKCE7TbK/04/ZV5QZYVWmDwH1mF3xa2Q3ra3DBC5vBT1oP7PTj4C0+CcL8c7C2CtejqhuCnuIQHaKHzvcRfZpnylFfXsYJx3pNLwhKzRAwAhEqG0SpusBHfAKkxw3w4627MPhoCH798z7s0ZnBJ/MEJbZSbXPhER2ih7p2ok/zSj2cEJDd4CAe+5WYnBCgR2uruyEw6zRoW6/DWJ/OeAP8pd/BGtzOZKpG8oke0SX6GMmRk6GFlyAc59K32OTEinILRJRchah8HQwND8N435Z9Z0FY1EqtxUg+0SO6RJ/mmXz4VuS+DpxXC3gXmZwIL7dBSH4zKE50wESf8qwVgrP1EIlTO5JP9Igu0aexdh28F1lmAEGJGfh7jE6ElyM5Rw/FDcYJjWhbeiBYoYNIpc2FT/SILivp0F1ipDWk4BIEo2VuodEJUifhbiltnNBIXPUFCMpthtAyqws/BPlEF/VbaIxErdxPphsU7rcCp8DohC+GvBIPJS/tW2jtvTmmAeuNO8BNOYQeG8G/2OzCJ3q+soYB5i6NhMaKr17FSal7GIHheuV3uSCY8qYVuEm1cOzqdWr7ku/R0BDoTT+DT+ohCM6/CCvKLKO4RI+dXPeAuaMqksaKrZ7L3FE5FIFbkIceeOZ2OcHO6wIhTkNo0ffgjRGxEqogXHYUPHfWAC/lADpwGcLRY3aeK4/oRGCKYcZXPVoeX/kelVYY8dUGf8V5EBRbgJXT5QIPhP9ePJi428JKOiEYhYXFBqou2Guh+p/mEB1/RfMw6rY7cxcjTrneI1FrDyuzUSRm9miwEJx8E/gUmqlyvHGkneiwErR21F3tNOK5Tf0yXaT+O7DgCvALTUBXdM4YhC/IawPU+2PduqMvuaR6eoxSwUk75ggqsYJ7VicsnwGIkZBSXKOUww73WGXyqP+J2/b9c+gi1YAg/xpwck3gJuucNrh5JvDPvQr0WFXf0piyt8f8/WI0hV4pRxxkQZdJDfDJNOAmM0Ag8jyT6hz0WGXWuP94Yh2jcfjmXAGvHCMslRimDHYuHuDsy2QtHuIavznhbYURq5R57KpzBBRZKPJi8eQg48h4j8SDdowifdIrEVdU+gbO6QNvRRt4ZBthUaZhUnjlYObNagV3keoeru3rU7rcuceqU1mJBxy+BWZYlNEBH+0eH4vRiB+OYybU2hnblYlTvkHinM4m54YnxSyaZYSF6R3jwgP7udKLGIX6r/lbNa9N6y5MFynjWDtrHd75ZvTYAPO/6RgF0k76mQla3FGq7dO+cH8sKn0Vo7nDllwAhqwLPkxrHwWmHJOo+AKJ4rab5OgrM7rVu8eWb2Pu0Dh4eDgXoOfvp7Y7QeqknRmvcTBEyq9m/HQQSCSz6LHq3z0yzsNySRfMS253wl2KyRDbcZPcfJKjZmSEOjcxyi+Y8dUOtsIEH6R2wNykdqrkYJ0RV92H0W58pkfQk7cKevsLK10Py8SdMGfXNXATY+pPbyJR/ET6n9nIfztNtZYRV9XniQu9IA2vOVgy4ir7GCLVmmd+zjkH0eAF9Po6K61pmCXHxU5rHMYd1ftc3owjwRSVRzLjKvqZEty6cRUD7jGqiOdu5HG6MdHjNcNYGqfDm5YRzLBBCCDl/2bk8a8gdbqcfwECu62Fg/HrggAAAABJRU5ErkJggg==";
	        var base64shadow = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAC5ElEQVRYw+2YW4/TMBCF45S0S1luXZCABy5CgLQgwf//S4BYBLTdJLax0fFqmB07nnQfEGqkIydpVH85M+NLjPe++dcPc4Q8Qh4hj5D/AaQJx6H/4TMwB0PeBNwU7EGQAmAtsNfAzoZkgIa0ZgLMa4Aj6CxIAsjhjOCoL5z7Glg1JAOkaicgvQBXuncwJAWjksLtBTWZe04CnYRktUGdilALppZBOgHGZcBzL6OClABvMSVIzyBjazOgrvACf1ydC5mguqAVg6RhdkSWQFj2uxfaq/BrIZOLEWgZdALIDvcMcZLD8ZbLC9de4yR1sYMi4G20S4Q/PWeJYxTOZn5zJXANZHIxAd4JWhPIloTJZhzMQduM89WQ3MUVAE/RnhAXpTycqys3NZALOBbB7kFrgLesQl2h45Fcj8L1tTSohUwuxhy8H/Qg6K7gIs+3kkaigQCOcyEXCHN07wyQazhrmIulvKMQAwMcmLNqyCVyMAI+BuxSMeTk3OPikLY2J1uE+VHQk6ANrhds+tNARqBeaGc72cK550FP4WhXmFmcMGhTwAR1ifOe3EvPqIegFmF+C8gVy0OfAaWQPMR7gF1OQKqGoBjq90HPMP01BUjPOqGFksC4emE48tWQAH0YmvOgF3DST6xieJgHAWxPAHMuNhrImIdvoNOKNWIOcE+UXE0pYAnkX6uhWsgVXDxHdTfCmrEEmMB2zMFimLVOtiiajxiGWrbU52EeCdyOwPEQD8LqyPH9Ti2kgYMf4OhSKB7qYILbBv3CuVTJ11Y80oaseiMWOONc/Y7kJYe0xL2f0BaiFTxknHO5HaMGMublKwxFGzYdWsBF174H/QDknhTHmHHN39iWFnkZx8lPyM8WHfYELmlLKtgWNmFNzQcC1b47gJ4hL19i7o65dhH0Negbca8vONZoP7doIeOC9zXm8RjuL0Gf4d4OYaU5ljo3GYiqzrWQHfJxA6ALhDpVKv9qYeZA8eM3EhfPSCmpuD0AAAAASUVORK5CYII=";

	        if (!isDefined(iconData) || !isDefined(iconData.iconUrl)) {
	            return new L.Icon.Default({
	                iconUrl: base64icon,
	                shadowUrl: base64shadow,
	                iconSize: [25, 41],
	                iconAnchor: [12, 41],
	                popupAnchor: [1, -34],
	                shadowSize: [41, 41]
	            });
	        }

	        return new L.Icon(iconData);
	    };

	    var _resetMarkerGroup = function(groupName) {
	      if (isDefined(groups[groupName])) {
	        groups.splice(groupName, 1);
	      }
	    };

	    var _resetMarkerGroups = function() {
	      groups = {};
	    };

	    var _deleteMarker = function(marker, map, layers) {
	        marker.closePopup();
	        // There is no easy way to know if a marker is added to a layer, so we search for it
	        // if there are overlays
	        if (isDefined(layers) && isDefined(layers.overlays)) {
	            for (var key in layers.overlays) {
	                if (layers.overlays[key] instanceof L.LayerGroup || layers.overlays[key] instanceof L.FeatureGroup) {
	                    if (layers.overlays[key].hasLayer(marker)) {
	                        layers.overlays[key].removeLayer(marker);
	                        return;
	                    }
	                }
	            }
	        }

	        if (isDefined(groups)) {
	            for (var groupKey in groups) {
	                if (groups[groupKey].hasLayer(marker)) {
	                    groups[groupKey].removeLayer(marker);
	                }
	            }
	        }

	        if (map.hasLayer(marker)) {
	            map.removeLayer(marker);
	        }
	    };

	    var _manageOpenPopup = function(marker, markerData) {
	        marker.openPopup();

	        //the marker may have angular templates to compile
	        var popup = marker.getPopup(),
	            //the marker may provide a scope returning function used to compile the message
	            //default to $rootScope otherwise
	            markerScope = angular.isFunction(markerData.getMessageScope) ? markerData.getMessageScope() : $rootScope,
	            compileMessage = isDefined(markerData.compileMessage) ? markerData.compileMessage : true;

	        if (isDefined(popup)) {
	            var updatePopup = function(popup) {
	                popup._updateLayout();
	                popup._updatePosition();
	            };

	            if (compileMessage) {
	                $compile(popup._contentNode)(markerScope);
	                //in case of an ng-include, we need to update the content after template load
	                if (isDefined(popup._contentNode) && popup._contentNode.innerHTML.indexOf("ngInclude") > -1) {
	                    var unregister = markerScope.$on('$includeContentLoaded', function() {
	                        updatePopup(popup);
	                        unregister();
	                    });
	                }
	                else {
	                    updatePopup(popup);
	                }
	            }
	        }
	    };

	    var _manageOpenLabel = function(marker, markerData) {
	        var markerScope = angular.isFunction(markerData.getMessageScope) ? markerData.getMessageScope() : $rootScope,
	            labelScope = angular.isFunction(markerData.getLabelScope) ? markerData.getLabelScope() : markerScope,
	            compileMessage = isDefined(markerData.compileMessage) ? markerData.compileMessage : true;

	        if (Helpers.LabelPlugin.isLoaded() && isDefined(markerData.label)) {
	            if (isDefined(markerData.label.options) && markerData.label.options.noHide === true) {
	                marker.showLabel();
	            }
	            if (compileMessage && isDefined(marker.label)) {
	                $compile(marker.label._container)(labelScope);
	            }
	        }
	    };

	    return {
	        resetMarkerGroup: _resetMarkerGroup,

	        resetMarkerGroups: _resetMarkerGroups,

	        deleteMarker: _deleteMarker,

	        manageOpenPopup: _manageOpenPopup,

	        manageOpenLabel: _manageOpenLabel,

	        createMarker: function(markerData) {
	            if (!isDefined(markerData) || !geoHlp.validateCoords(markerData)){
	                $log.error(errorHeader + 'The marker definition is not valid.');
	                return;
	            }
	            var coords = geoHlp.getCoords(markerData);

	            if (!isDefined(coords)){
	                $log.error(errorHeader + 'Unable to get coordinates from markerData.');
	                return;
	            }

	            var markerOptions = {
	                icon: createLeafletIcon(markerData.icon),
	                title: isDefined(markerData.title) ? markerData.title : '',
	                draggable: isDefined(markerData.draggable) ? markerData.draggable : false,
	                clickable: isDefined(markerData.clickable) ? markerData.clickable : true,
	                riseOnHover: isDefined(markerData.riseOnHover) ? markerData.riseOnHover : false,
	                zIndexOffset: isDefined(markerData.zIndexOffset) ? markerData.zIndexOffset : 0,
	                iconAngle: isDefined(markerData.iconAngle) ? markerData.iconAngle : 0
	            };
	            // Add any other options not added above to markerOptions
	            for (var markerDatum in markerData) {
	                if (markerData.hasOwnProperty(markerDatum) && !markerOptions.hasOwnProperty(markerDatum)) {
	                    markerOptions[markerDatum] = markerData[markerDatum];
	                }
	            }

	            var marker = new L.marker(coords, markerOptions);

	            if (!isString(markerData.message)) {
	                marker.unbindPopup();
	            }

	            return marker;
	        },

	        addMarkerToGroup: function(marker, groupName, groupOptions, map) {
	            if (!isString(groupName)) {
	                $log.error(errorHeader + 'The marker group you have specified is invalid.');
	                return;
	            }

	            if (!MarkerClusterPlugin.isLoaded()) {
	                $log.error(errorHeader + "The MarkerCluster plugin is not loaded.");
	                return;
	            }
	            if (!isDefined(groups[groupName])) {
	                groups[groupName] = new L.MarkerClusterGroup(groupOptions);
	                map.addLayer(groups[groupName]);
	            }
	            groups[groupName].addLayer(marker);
	        },

	        listenMarkerEvents: function(marker, markerData, leafletScope) {
	            //these should be deregistered on destroy .. possible leake
	            //handles should not be closures since they will need to be removed
	            marker.on("popupopen", function(/* event */) {
	                safeApply(leafletScope, function() {
	                    markerData.focus = true;
	                    _manageOpenPopup(marker, markerData);//needed since markerData is now a copy
	                });
	            });
	            marker.on("popupclose", function(/* event */) {
	                safeApply(leafletScope, function() {
	                    markerData.focus = false;
	                });
	            });
	            marker.on("add", function(/* event */) {
	                safeApply(leafletScope, function() {
	                  if('label' in markerData)
	                    _manageOpenLabel(marker, markerData);
	                });
	            });
	        },

	        addMarkerWatcher: function(marker, name, leafletScope, layers, map, isDeepWatch) {
	            var markerWatchPath = Helpers.getObjectArrayPath("markers." + name);
	            isDeepWatch = defaultTo(isDeepWatch, true);
	            //TODO:break up this 200 line function to be readable (nmccready)
	            var clearWatch = leafletScope.$watch(markerWatchPath, function(markerData, oldMarkerData) {
	                if (!isDefined(markerData)) {
	                    _deleteMarker(marker, map, layers);
	                    clearWatch();
	                    return;
	                }

	                if (!isDefined(oldMarkerData)) {
	                    return;
	                }

	                // Update the lat-lng property (always present in marker properties)
	                if (!geoHlp.validateCoords(markerData)) {
	                    $log.warn('There are problems with lat-lng data, please verify your marker model');
	                    _deleteMarker(marker, map, layers);
	                    return;
	                }

	                // watch is being initialized if old and new object is the same
	                var isInitializing = markerData === oldMarkerData;

	                // Update marker rotation
	                if (isDefined(markerData.iconAngle) && oldMarkerData.iconAngle !== markerData.iconAngle) {
	                    marker.setIconAngle(markerData.iconAngle);
	                }

	                // It is possible that the layer has been removed or the layer marker does not exist
	                // Update the layer group if present or move it to the map if not
	                if (!isString(markerData.layer)) {
	                    // There is no layer information, we move the marker to the map if it was in a layer group
	                    if (isString(oldMarkerData.layer)) {
	                        // Remove from the layer group that is supposed to be
	                        if (isDefined(layers.overlays[oldMarkerData.layer]) && layers.overlays[oldMarkerData.layer].hasLayer(marker)) {
	                            layers.overlays[oldMarkerData.layer].removeLayer(marker);
	                            marker.closePopup();
	                        }
	                        // Test if it is not on the map and add it
	                        if (!map.hasLayer(marker)) {
	                            map.addLayer(marker);
	                        }
	                    }
	                }

	                if ((isNumber(markerData.opacity) || isNumber(parseFloat(markerData.opacity))) && markerData.opacity !== oldMarkerData.opacity) {
	                    // There was a different opacity so we update it
	                    marker.setOpacity(markerData.opacity);
	                }

	                if (isString(markerData.layer) && oldMarkerData.layer !== markerData.layer) {
	                    // If it was on a layer group we have to remove it
	                    if (isString(oldMarkerData.layer) && isDefined(layers.overlays[oldMarkerData.layer]) && layers.overlays[oldMarkerData.layer].hasLayer(marker)) {
	                        layers.overlays[oldMarkerData.layer].removeLayer(marker);
	                    }
	                    marker.closePopup();

	                    // Remove it from the map in case the new layer is hidden or there is an error in the new layer
	                    if (map.hasLayer(marker)) {
	                        map.removeLayer(marker);
	                    }

	                    // The markerData.layer is defined so we add the marker to the layer if it is different from the old data
	                    if (!isDefined(layers.overlays[markerData.layer])) {
	                        $log.error(errorHeader + 'You must use a name of an existing layer');
	                        return;
	                    }
	                    // Is a group layer?
	                    var layerGroup = layers.overlays[markerData.layer];
	                    if (!(layerGroup instanceof L.LayerGroup || layerGroup instanceof L.FeatureGroup)) {
	                        $log.error(errorHeader + 'A marker can only be added to a layer of type "group" or "featureGroup"');
	                        return;
	                    }
	                    // The marker goes to a correct layer group, so first of all we add it
	                    layerGroup.addLayer(marker);
	                    // The marker is automatically added to the map depending on the visibility
	                    // of the layer, so we only have to open the popup if the marker is in the map
	                    if (map.hasLayer(marker) && markerData.focus === true) {
	                        _manageOpenPopup(marker, markerData);
	                    }
	                }

	                // Update the draggable property
	                if (markerData.draggable !== true && oldMarkerData.draggable === true && (isDefined(marker.dragging))) {
	                    marker.dragging.disable();
	                }

	                if (markerData.draggable === true && oldMarkerData.draggable !== true) {
	                    // The markerData.draggable property must be true so we update if there wasn't a previous value or it wasn't true
	                    if (marker.dragging) {
	                        marker.dragging.enable();
	                    } else {
	                        if (L.Handler.MarkerDrag) {
	                            marker.dragging = new L.Handler.MarkerDrag(marker);
	                            marker.options.draggable = true;
	                            marker.dragging.enable();
	                        }
	                    }
	                }

	                // Update the icon property
	                if (!isObject(markerData.icon)) {
	                    // If there is no icon property or it's not an object
	                    if (isObject(oldMarkerData.icon)) {
	                        // If there was an icon before restore to the default
	                        marker.setIcon(createLeafletIcon());
	                        marker.closePopup();
	                        marker.unbindPopup();
	                        if (isString(markerData.message)) {
	                            marker.bindPopup(markerData.message, markerData.popupOptions);
	                        }
	                    }
	                }

	                if (isObject(markerData.icon) && isObject(oldMarkerData.icon) && !angular.equals(markerData.icon, oldMarkerData.icon)) {
	                    var dragG = false;
	                    if (marker.dragging) {
	                        dragG = marker.dragging.enabled();
	                    }
	                    marker.setIcon(createLeafletIcon(markerData.icon));
	                    if (dragG) {
	                        marker.dragging.enable();
	                    }
	                    marker.closePopup();
	                    marker.unbindPopup();
	                    if (isString(markerData.message)) {
	                        marker.bindPopup(markerData.message, markerData.popupOptions);
	                    }
	                }

	                // Update the Popup message property
	                if (!isString(markerData.message) && isString(oldMarkerData.message)) {
	                    marker.closePopup();
	                    marker.unbindPopup();
	                }

	                // Update the label content or bind a new label if the old one has been removed.
	                if (Helpers.LabelPlugin.isLoaded()) {
	                    if (isDefined(markerData.label) && isDefined(markerData.label.message)) {
	                        if ('label' in oldMarkerData && 'message' in oldMarkerData.label && !angular.equals(markerData.label.message, oldMarkerData.label.message)) {
	                            marker.updateLabelContent(markerData.label.message);
	                        } else if (!angular.isFunction(marker.getLabel)) {
	                            marker.bindLabel(markerData.label.message, markerData.label.options);
	                            _manageOpenLabel(marker, markerData);
	                        } else {
	                            _manageOpenLabel(marker, markerData);
	                        }
	                    } else if (!('label' in markerData && !('message' in markerData.label))) {
	                        if (angular.isFunction(marker.unbindLabel)) {
	                            marker.unbindLabel();
	                        }
	                    }
	                }

	                // There is some text in the popup, so we must show the text or update existing
	                if (isString(markerData.message) && !isString(oldMarkerData.message)) {
	                    // There was no message before so we create it
	                    marker.bindPopup(markerData.message, markerData.popupOptions);
	                }

	                if (isString(markerData.message) && isString(oldMarkerData.message) && markerData.message !== oldMarkerData.message) {
	                    // There was a different previous message so we update it
	                    marker.setPopupContent(markerData.message);
	                }

	                // Update the focus property
	                var updatedFocus = false;
	                if (markerData.focus !== true && oldMarkerData.focus === true) {
	                    // If there was a focus property and was true we turn it off
	                    marker.closePopup();
	                    updatedFocus = true;
	                }

	                // The markerData.focus property must be true so we update if there wasn't a previous value or it wasn't true
	                if (markerData.focus === true && ( !isDefined(oldMarkerData.focus) || oldMarkerData.focus === false) || (isInitializing && markerData.focus === true)) {
	                    // Reopen the popup when focus is still true
	                    _manageOpenPopup(marker, markerData);
	                    updatedFocus = true;
	                }

	                // zIndexOffset adjustment
	                if (oldMarkerData.zIndexOffset !== markerData.zIndexOffset) {
	                    marker.setZIndexOffset(markerData.zIndexOffset);
	                }

	                var markerLatLng = marker.getLatLng();
	                var isCluster = (isString(markerData.layer) && Helpers.MarkerClusterPlugin.is(layers.overlays[markerData.layer]));
	                // If the marker is in a cluster it has to be removed and added to the layer when the location is changed
	                if (isCluster) {
	                    // The focus has changed even by a user click or programatically
	                    if (updatedFocus) {
	                        // We only have to update the location if it was changed programatically, because it was
	                        // changed by a user drag the marker data has already been updated by the internal event
	                        // listened by the directive
	                        if ((markerData.lat !== oldMarkerData.lat) || (markerData.lng !== oldMarkerData.lng)) {
	                            layers.overlays[markerData.layer].removeLayer(marker);
	                            marker.setLatLng([markerData.lat, markerData.lng]);
	                            layers.overlays[markerData.layer].addLayer(marker);
	                        }
	                    } else {
	                        // The marker has possibly moved. It can be moved by a user drag (marker location and data are equal but old
	                        // data is diferent) or programatically (marker location and data are diferent)
	                        if ((markerLatLng.lat !== markerData.lat) || (markerLatLng.lng !== markerData.lng)) {
	                            // The marker was moved by a user drag
	                            layers.overlays[markerData.layer].removeLayer(marker);
	                            marker.setLatLng([markerData.lat, markerData.lng]);
	                            layers.overlays[markerData.layer].addLayer(marker);
	                        } else if ((markerData.lat !== oldMarkerData.lat) || (markerData.lng !== oldMarkerData.lng)) {
	                            // The marker was moved programatically
	                            layers.overlays[markerData.layer].removeLayer(marker);
	                            marker.setLatLng([markerData.lat, markerData.lng]);
	                            layers.overlays[markerData.layer].addLayer(marker);
	                        } else if (isObject(markerData.icon) && isObject(oldMarkerData.icon) && !angular.equals(markerData.icon, oldMarkerData.icon)) {
	                            layers.overlays[markerData.layer].removeLayer(marker);
	                            layers.overlays[markerData.layer].addLayer(marker);
	                        }
	                    }
	                } else if (markerLatLng.lat !== markerData.lat || markerLatLng.lng !== markerData.lng) {
	                    marker.setLatLng([markerData.lat, markerData.lng]);
	                }
	            }, isDeepWatch);
	        },
	        string: _string,
	        log: _log
	    };
	}]);

	angular.module("leaflet-directive").factory('leafletPathsHelpers', ["$rootScope", "$log", "leafletHelpers", function ($rootScope, $log, leafletHelpers) {
	    var isDefined = leafletHelpers.isDefined,
	        isArray = leafletHelpers.isArray,
	        isNumber = leafletHelpers.isNumber,
	        isValidPoint = leafletHelpers.isValidPoint;
	    var availableOptions = [
	        // Path options
	        'stroke', 'weight', 'color', 'opacity',
	        'fill', 'fillColor', 'fillOpacity',
	        'dashArray', 'lineCap', 'lineJoin', 'clickable',
	        'pointerEvents', 'className',

	        // Polyline options
	        'smoothFactor', 'noClip'
	    ];
	    function _convertToLeafletLatLngs(latlngs) {
	        return latlngs.filter(function(latlng) {
	            return isValidPoint(latlng);
	        }).map(function (latlng) {
	            return _convertToLeafletLatLng(latlng);
	        });
	    }

	    function _convertToLeafletLatLng(latlng) {
	        if (isArray(latlng)) {
	            return new L.LatLng(latlng[0], latlng[1]);
	        } else {
	            return new L.LatLng(latlng.lat, latlng.lng);
	        }
	    }

	    function _convertToLeafletMultiLatLngs(paths) {
	        return paths.map(function(latlngs) {
	            return _convertToLeafletLatLngs(latlngs);
	        });
	    }

	    function _getOptions(path, defaults) {
	        var options = {};
	        for (var i = 0; i < availableOptions.length; i++) {
	            var optionName = availableOptions[i];

	            if (isDefined(path[optionName])) {
	                options[optionName] = path[optionName];
	            } else if (isDefined(defaults.path[optionName])) {
	                options[optionName] = defaults.path[optionName];
	            }
	        }

	        return options;
	    }

	    var _updatePathOptions = function (path, data) {
	        var updatedStyle = {};
	        for (var i = 0; i < availableOptions.length; i++) {
	            var optionName = availableOptions[i];
	            if (isDefined(data[optionName])) {
	                updatedStyle[optionName] = data[optionName];
	            }
	        }
	        path.setStyle(data);
	    };

	    var _isValidPolyline = function(latlngs) {
	        if (!isArray(latlngs)) {
	            return false;
	        }
	        for (var i = 0; i < latlngs.length; i++) {
	            var point = latlngs[i];
	            if (!isValidPoint(point)) {
	                return false;
	            }
	        }
	        return true;
	    };

	    var pathTypes = {
	        polyline: {
	            isValid: function(pathData) {
	                var latlngs = pathData.latlngs;
	                return _isValidPolyline(latlngs);
	            },
	            createPath: function(options) {
	                return new L.Polyline([], options);
	            },
	            setPath: function(path, data) {
	                path.setLatLngs(_convertToLeafletLatLngs(data.latlngs));
	                _updatePathOptions(path, data);
	                return;
	            }
	        },
	        multiPolyline: {
	            isValid: function(pathData) {
	                var latlngs = pathData.latlngs;
	                if (!isArray(latlngs)) {
	                    return false;
	                }

	                for (var i in latlngs) {
	                    var polyline = latlngs[i];
	                    if (!_isValidPolyline(polyline)) {
	                        return false;
	                    }
	                }

	                return true;
	            },
	            createPath: function(options) {
	                return new L.multiPolyline([[[0,0],[1,1]]], options);
	            },
	            setPath: function(path, data) {
	                path.setLatLngs(_convertToLeafletMultiLatLngs(data.latlngs));
	                _updatePathOptions(path, data);
	                return;
	            }
	        } ,
	        polygon: {
	            isValid: function(pathData) {
	                var latlngs = pathData.latlngs;
	                return _isValidPolyline(latlngs);
	            },
	            createPath: function(options) {
	                return new L.Polygon([], options);
	            },
	            setPath: function(path, data) {
	                path.setLatLngs(_convertToLeafletLatLngs(data.latlngs));
	                _updatePathOptions(path, data);
	                return;
	            }
	        },
	        multiPolygon: {
	            isValid: function(pathData) {
	                var latlngs = pathData.latlngs;

	                if (!isArray(latlngs)) {
	                    return false;
	                }

	                for (var i in latlngs) {
	                    var polyline = latlngs[i];
	                    if (!_isValidPolyline(polyline)) {
	                        return false;
	                    }
	                }

	                return true;
	            },
	            createPath: function(options) {
	                return new L.MultiPolygon([[[0,0],[1,1],[0,1]]], options);
	            },
	            setPath: function(path, data) {
	                path.setLatLngs(_convertToLeafletMultiLatLngs(data.latlngs));
	                _updatePathOptions(path, data);
	                return;
	            }
	        },
	        rectangle: {
	            isValid: function(pathData) {
	                var latlngs = pathData.latlngs;

	                if (!isArray(latlngs) || latlngs.length !== 2) {
	                    return false;
	                }

	                for (var i in latlngs) {
	                    var point = latlngs[i];
	                    if (!isValidPoint(point)) {
	                        return false;
	                    }
	                }

	                return true;
	            },
	            createPath: function(options) {
	                return new L.Rectangle([[0,0],[1,1]], options);
	            },
	            setPath: function(path, data) {
	                path.setBounds(new L.LatLngBounds(_convertToLeafletLatLngs(data.latlngs)));
	                _updatePathOptions(path, data);
	            }
	        },
	        circle: {
	            isValid: function(pathData) {
	                var point= pathData.latlngs;
	                return isValidPoint(point) && isNumber(pathData.radius);
	            },
	            createPath: function(options) {
	                return new L.Circle([0,0], 1, options);
	            },
	            setPath: function(path, data) {
	                path.setLatLng(_convertToLeafletLatLng(data.latlngs));
	                if (isDefined(data.radius)) {
	                    path.setRadius(data.radius);
	                }
	                _updatePathOptions(path, data);
	            }
	        },
	        circleMarker: {
	            isValid: function(pathData) {
	                var point= pathData.latlngs;
	                return isValidPoint(point) && isNumber(pathData.radius);
	            },
	            createPath: function(options) {
	                return new L.CircleMarker([0,0], options);
	            },
	            setPath: function(path, data) {
	                path.setLatLng(_convertToLeafletLatLng(data.latlngs));
	                if (isDefined(data.radius)) {
	                    path.setRadius(data.radius);
	                }
	                _updatePathOptions(path, data);
	            }
	        }
	    };

	    var _getPathData = function(path) {
	        var pathData = {};
	        if (path.latlngs) {
	            pathData.latlngs = path.latlngs;
	        }

	        if (path.radius) {
	            pathData.radius = path.radius;
	        }

	        return pathData;
	    };

	    return {
	        setPathOptions: function(leafletPath, pathType, data) {
	            if(!isDefined(pathType)) {
	                pathType = "polyline";
	            }
	            pathTypes[pathType].setPath(leafletPath, data);
	        },
	        createPath: function(name, path, defaults) {
	            if(!isDefined(path.type)) {
	                path.type = "polyline";
	            }
	            var options = _getOptions(path, defaults);
	            var pathData = _getPathData(path);

	            if (!pathTypes[path.type].isValid(pathData)) {
	                $log.error("[AngularJS - Leaflet] Invalid data passed to the " + path.type + " path");
	                return;
	            }

	            return pathTypes[path.type].createPath(options);
	        }
	    };
	}]);

	angular.module("leaflet-directive")
	.service('leafletWatchHelpers', function (){

	    var _maybe = function(scope, watchFunctionName, thingToWatchStr, watchOptions, initCb){
	        //watchOptions.isDeep is/should be ignored in $watchCollection
	        var unWatch = scope[watchFunctionName](thingToWatchStr, function(newValue, oldValue) {
	            initCb(newValue, oldValue);
	            if(!watchOptions.doWatch)
	                unWatch();
	        }, watchOptions.isDeep);

	        return unWatch;
	    };

	  /*
	  @name: maybeWatch
	  @description: Utility to watch something once or forever.
	  @returns unWatch function
	  @param watchOptions - see markersWatchOptions and or derrivatives. This object is used
	  to set watching to once and its watch depth.
	  */
	  var _maybeWatch = function(scope, thingToWatchStr, watchOptions, initCb){
	      return _maybe(scope, '$watch', thingToWatchStr, watchOptions, initCb);
	  };

	  /*
	  @name: _maybeWatchCollection
	  @description: Utility to watch something once or forever.
	  @returns unWatch function
	  @param watchOptions - see markersWatchOptions and or derrivatives. This object is used
	  to set watching to once and its watch depth.
	  */
	  var _maybeWatchCollection = function(scope, thingToWatchStr, watchOptions, initCb){
	      return _maybe(scope, '$watchCollection', thingToWatchStr, watchOptions, initCb);
	  };

	  return {
	    maybeWatch: _maybeWatch,
	    maybeWatchCollection: _maybeWatchCollection
	  };
	});

	angular.module("leaflet-directive").directive('bounds', ["$log", "$timeout", "leafletHelpers", "leafletBoundsHelpers", function ($log, $timeout, leafletHelpers, leafletBoundsHelpers) {
	    return {
	        restrict: "A",
	        scope: false,
	        replace: false,
	        require: [ 'leaflet', 'center' ],

	        link: function(scope, element, attrs, controller) {
	            var isDefined = leafletHelpers.isDefined,
	                createLeafletBounds = leafletBoundsHelpers.createLeafletBounds,
	                leafletScope = controller[0].getLeafletScope(),
	                mapController = controller[0];

	            var emptyBounds = function(bounds) {
	                return (bounds._southWest.lat === 0 && bounds._southWest.lng === 0 &&
	                        bounds._northEast.lat === 0 && bounds._northEast.lng === 0);
	            };

	            mapController.getMap().then(function (map) {
	                leafletScope.$on('boundsChanged', function (event) {
	                    var scope = event.currentScope;
	                    var bounds = map.getBounds();
	                    //$log.debug('updated map bounds...', bounds);
	                    if (emptyBounds(bounds) || scope.settingBoundsFromScope) {
	                        return;
	                    }
	                    var newScopeBounds = {
	                        northEast: {
	                            lat: bounds._northEast.lat,
	                            lng: bounds._northEast.lng
	                        },
	                        southWest: {
	                            lat: bounds._southWest.lat,
	                            lng: bounds._southWest.lng
	                        }
	                    };
	                    if (!angular.equals(scope.bounds, newScopeBounds)) {
	                        //$log.debug('Need to update scope bounds.');
	                        scope.bounds = newScopeBounds;
	                    }
	                });
	                leafletScope.$watch('bounds', function (bounds) {
	                    //$log.debug('updated bounds...', bounds);
	                    if (!isDefined(bounds)) {
	                        $log.error('[AngularJS - Leaflet] Invalid bounds');
	                        return;
	                    }
	                    var leafletBounds = createLeafletBounds(bounds);
	                    if (leafletBounds && !map.getBounds().equals(leafletBounds)) {
	                        //$log.debug('Need to update map bounds.');
	                        scope.settingBoundsFromScope = true;
	                        map.fitBounds(leafletBounds);
	                        $timeout( function() {
	                            //$log.debug('Allow bound updates.');
	                            scope.settingBoundsFromScope = false;
	                        });
	                    }
	                }, true);
	            });
	        }
	    };
	}]);

	angular.module("leaflet-directive").directive('center',
	    ["$log", "$q", "$location", "$timeout", "leafletMapDefaults", "leafletHelpers", "leafletBoundsHelpers", "leafletEvents", function ($log, $q, $location, $timeout, leafletMapDefaults, leafletHelpers, leafletBoundsHelpers, leafletEvents) {

	    var isDefined     = leafletHelpers.isDefined,
	        isNumber      = leafletHelpers.isNumber,
	        isSameCenterOnMap = leafletHelpers.isSameCenterOnMap,
	        safeApply     = leafletHelpers.safeApply,
	        isValidCenter = leafletHelpers.isValidCenter,
	        isValidBounds = leafletBoundsHelpers.isValidBounds,
	        isUndefinedOrEmpty = leafletHelpers.isUndefinedOrEmpty;

	    var shouldInitializeMapWithBounds = function(bounds, center) {
	        return isDefined(bounds) && isValidBounds(bounds) && isUndefinedOrEmpty(center);
	    };

	    var _leafletCenter;
	    return {
	        restrict: "A",
	        scope: false,
	        replace: false,
	        require: 'leaflet',
	        controller: function () {
	            _leafletCenter = $q.defer();
	            this.getCenter = function() {
	                return _leafletCenter.promise;
	            };
	        },
	        link: function(scope, element, attrs, controller) {
	            var leafletScope  = controller.getLeafletScope(),
	                centerModel   = leafletScope.center;

	            controller.getMap().then(function(map) {
	                var defaults = leafletMapDefaults.getDefaults(attrs.id);

	                if (attrs.center.search("-") !== -1) {
	                    $log.error('The "center" variable can\'t use a "-" on his key name: "' + attrs.center + '".');
	                    map.setView([defaults.center.lat, defaults.center.lng], defaults.center.zoom);
	                    return;
	                } else if (shouldInitializeMapWithBounds(leafletScope.bounds, centerModel)) {
	                    map.fitBounds(leafletBoundsHelpers.createLeafletBounds(leafletScope.bounds));
	                    centerModel = map.getCenter();
	                    safeApply(leafletScope, function (scope) {
	                        scope.center = {
	                            lat: map.getCenter().lat,
	                            lng: map.getCenter().lng,
	                            zoom: map.getZoom(),
	                            autoDiscover: false
	                        };
	                        angular.extend(scope.center,{
	                           lat: map.getCenter().lat,
	                           lng: map.getCenter().lng,
	                           zoom: map.getZoom(),
	                           autoDiscover: false
	                        });
	                    });
	                    safeApply(leafletScope, function (scope) {
	                        var mapBounds = map.getBounds();
	                        scope.bounds = {
	                            northEast: {
	                                lat: mapBounds._northEast.lat,
	                                lng: mapBounds._northEast.lng
	                            },
	                            southWest: {
	                                lat: mapBounds._southWest.lat,
	                                lng: mapBounds._southWest.lng
	                            }
	                        };
	                    });
	                } else if (!isDefined(centerModel)) {
	                    $log.error('The "center" property is not defined in the main scope');
	                    map.setView([defaults.center.lat, defaults.center.lng], defaults.center.zoom);
	                    return;
	                } else if (!(isDefined(centerModel.lat) && isDefined(centerModel.lng)) && !isDefined(centerModel.autoDiscover)) {
	                    angular.copy(defaults.center, centerModel);
	                }

	                var urlCenterHash, mapReady;
	                if (attrs.urlHashCenter === "yes") {
	                    var extractCenterFromUrl = function() {
	                        var search = $location.search();
	                        var centerParam;
	                        if (isDefined(search.c)) {
	                            var cParam = search.c.split(":");
	                            if (cParam.length === 3) {
	                                centerParam = { lat: parseFloat(cParam[0]), lng: parseFloat(cParam[1]), zoom: parseInt(cParam[2], 10) };
	                            }
	                        }
	                        return centerParam;
	                    };
	                    urlCenterHash = extractCenterFromUrl();

	                    leafletScope.$on('$locationChangeSuccess', function(event) {
	                        var scope = event.currentScope;
	                        //$log.debug("updated location...");
	                        var urlCenter = extractCenterFromUrl();
	                        if (isDefined(urlCenter) && !isSameCenterOnMap(urlCenter, map)) {
	                            //$log.debug("updating center model...", urlCenter);
	                            scope.center = {
	                                lat: urlCenter.lat,
	                                lng: urlCenter.lng,
	                                zoom: urlCenter.zoom
	                            };
	                        }
	                    });
	                }

	                leafletScope.$watch("center", function(center) {
	                    //$log.debug("updated center model...");
	                    // The center from the URL has priority
	                    if (isDefined(urlCenterHash)) {
	                        angular.copy(urlCenterHash, center);
	                        urlCenterHash = undefined;
	                    }

	                    if (!isValidCenter(center) && center.autoDiscover !== true) {
	                        $log.warn("[AngularJS - Leaflet] invalid 'center'");
	                        //map.setView([defaults.center.lat, defaults.center.lng], defaults.center.zoom);
	                        return;
	                    }

	                    if (center.autoDiscover === true) {
	                        if (!isNumber(center.zoom)) {
	                            map.setView([defaults.center.lat, defaults.center.lng], defaults.center.zoom);
	                        }
	                        if (isNumber(center.zoom) && center.zoom > defaults.center.zoom) {
	                            map.locate({ setView: true, maxZoom: center.zoom });
	                        } else if (isDefined(defaults.maxZoom)) {
	                            map.locate({ setView: true, maxZoom: defaults.maxZoom });
	                        } else {
	                            map.locate({ setView: true });
	                        }
	                        return;
	                    }

	                    if (mapReady && isSameCenterOnMap(center, map)) {
	                        //$log.debug("no need to update map again.");
	                        return;
	                    }

	                    //$log.debug("updating map center...", center);
	                    leafletScope.settingCenterFromScope = true;
	                    map.setView([center.lat, center.lng], center.zoom);
	                    leafletEvents.notifyCenterChangedToBounds(leafletScope, map);
	                    $timeout(function() {
	                        leafletScope.settingCenterFromScope = false;
	                        //$log.debug("allow center scope updates");
	                    });
	                }, true);

	                map.whenReady(function() {
	                    mapReady = true;
	                });

	                map.on("moveend", function(/* event */) {
	                    // Resolve the center after the first map position
	                    _leafletCenter.resolve();
	                    leafletEvents.notifyCenterUrlHashChanged(leafletScope, map, attrs, $location.search());
	                    //$log.debug("updated center on map...");
	                    if (isSameCenterOnMap(centerModel, map) || scope.settingCenterFromScope) {
	                        //$log.debug("same center in model, no need to update again.");
	                        return;
	                    }
	                    safeApply(leafletScope, function(scope) {
	                        if (!leafletScope.settingCenterFromScope) {
	                            //$log.debug("updating center model...", map.getCenter(), map.getZoom());
	                            
	                            angular.extend(scope.center,{
	                               lat: map.getCenter().lat,
	                               lng: map.getCenter().lng,
	                               zoom: map.getZoom(),
	                               autoDiscover: false
	                            });
	                        }
	                        leafletEvents.notifyCenterChangedToBounds(leafletScope, map);
	                    });
	                });

	                if (centerModel.autoDiscover === true) {
	                    map.on("locationerror", function() {
	                        $log.warn("[AngularJS - Leaflet] The Geolocation API is unauthorized on this page.");
	                        if (isValidCenter(centerModel)) {
	                            map.setView([centerModel.lat, centerModel.lng], centerModel.zoom);
	                            leafletEvents.notifyCenterChangedToBounds(leafletScope, map);
	                        } else {
	                            map.setView([defaults.center.lat, defaults.center.lng], defaults.center.zoom);
	                            leafletEvents.notifyCenterChangedToBounds(leafletScope, map);
	                        }
	                    });
	                }
	            });
	        }
	    };
	}]);

	angular.module("leaflet-directive").directive('controls', ["$log", "leafletHelpers", function ($log, leafletHelpers) {
	    return {
	        restrict: "A",
	        scope: false,
	        replace: false,
	        require: '?^leaflet',

	        link: function(scope, element, attrs, controller) {
	            if(!controller) {
	                return;
	            }

	            var isDefined = leafletHelpers.isDefined,
	                leafletScope  = controller.getLeafletScope(),
	                controls = leafletScope.controls;

	            controller.getMap().then(function(map) {
	                if (isDefined(L.Control.Draw) && isDefined(controls.draw)) {

	                    if (!isDefined(controls.edit)) {
	                        controls.edit = { featureGroup: new L.FeatureGroup() };
	                        map.addLayer(controls.edit.featureGroup);
	                    }

	                    var drawControl = new L.Control.Draw(controls);
	                    map.addControl(drawControl);
	                }

	                if (isDefined(controls.scale)) {
	                    var scaleControl = new L.control.scale(controls.scale);
	                    map.addControl(scaleControl);
	                }

	                if (isDefined(controls.fullscreen)) {
	                    if (leafletHelpers.FullScreenControlPlugin.isLoaded()) {
	                        var fullscreenControl = new L.Control.Fullscreen(controls.fullscreen);
	                        map.addControl(fullscreenControl);
	                    } else {
	                        $log.error('[AngularJS - Leaflet] Fullscreen plugin is not loaded.');
	                    }
	                }

	                if (isDefined(controls.custom)) {
	                    for(var i in controls.custom) {
	                        map.addControl(controls.custom[i]);
	                    }
	                }
	            });
	        }
	    };
	}]);

	angular.module("leaflet-directive").directive("decorations", ["$log", "leafletHelpers", function($log, leafletHelpers) {
		return {
			restrict: "A",
			scope: false,
			replace: false,
			require: 'leaflet',

			link: function(scope, element, attrs, controller) {
				var leafletScope = controller.getLeafletScope(),
					PolylineDecoratorPlugin = leafletHelpers.PolylineDecoratorPlugin,
					isDefined = leafletHelpers.isDefined,
					leafletDecorations = {};

				/* Creates an "empty" decoration with a set of coordinates, but no pattern. */
				function createDecoration(options) {
					if (isDefined(options) && isDefined(options.coordinates)) {
						if (!PolylineDecoratorPlugin.isLoaded()) {
							$log.error('[AngularJS - Leaflet] The PolylineDecorator Plugin is not loaded.');
						}
					}

					return L.polylineDecorator(options.coordinates);
				}

				/* Updates the path and the patterns for the provided decoration, and returns the decoration. */
				function setDecorationOptions(decoration, options) {
					if (isDefined(decoration) && isDefined(options)) {
						if (isDefined(options.coordinates) && isDefined(options.patterns)) {
							decoration.setPaths(options.coordinates);
							decoration.setPatterns(options.patterns);
							return decoration;
						}
					}
				}

				controller.getMap().then(function(map) {
					leafletScope.$watch("decorations", function(newDecorations) {
						for (var name in leafletDecorations) {
							if (!isDefined(newDecorations[name]) || !angular.equals(newDecorations[name], leafletDecorations)) {
								map.removeLayer(leafletDecorations[name]);
								delete leafletDecorations[name];
							}
						}

						for (var newName in newDecorations) {
							var decorationData = newDecorations[newName],
								newDecoration = createDecoration(decorationData);

							if (isDefined(newDecoration)) {
								leafletDecorations[newName] = newDecoration;
								map.addLayer(newDecoration);
								setDecorationOptions(newDecoration, decorationData);
							}
						}
					}, true);
				});
			}
		};
	}]);

	angular.module("leaflet-directive").directive('eventBroadcast', ["$log", "$rootScope", "leafletHelpers", "leafletEvents", function ($log, $rootScope, leafletHelpers, leafletEvents) {
	    return {
	        restrict: "A",
	        scope: false,
	        replace: false,
	        require: 'leaflet',

	        link: function(scope, element, attrs, controller) {
	            var isObject = leafletHelpers.isObject,
	                isDefined = leafletHelpers.isDefined,
	                leafletScope  = controller.getLeafletScope(),
	                eventBroadcast = leafletScope.eventBroadcast,
	                availableMapEvents = leafletEvents.getAvailableMapEvents(),
	                genDispatchMapEvent = leafletEvents.genDispatchMapEvent;

	            controller.getMap().then(function(map) {

	                var mapEvents = [];
	                var i;
	                var eventName;
	                var logic = "broadcast";

	                // We have a possible valid object
	                if (!isDefined(eventBroadcast.map)) {
	                    // We do not have events enable/disable do we do nothing (all enabled by default)
	                    mapEvents = availableMapEvents;
	                } else if (!isObject(eventBroadcast.map)) {
	                    // Not a valid object
	                    $log.warn("[AngularJS - Leaflet] event-broadcast.map must be an object check your model.");
	                } else {
	                    // We have a possible valid map object
	                    // Event propadation logic
	                    if (eventBroadcast.map.logic !== "emit" && eventBroadcast.map.logic !== "broadcast") {
	                        // This is an error
	                        $log.warn("[AngularJS - Leaflet] Available event propagation logic are: 'emit' or 'broadcast'.");
	                    } else {
	                        logic = eventBroadcast.map.logic;
	                    }

	                    if (!(isObject(eventBroadcast.map.enable) && eventBroadcast.map.enable.length >= 0)) {
	                        $log.warn("[AngularJS - Leaflet] event-broadcast.map.enable must be an object check your model.");
	                    } else {
	                        // Enable events
	                        for (i = 0; i < eventBroadcast.map.enable.length; i++) {
	                            eventName = eventBroadcast.map.enable[i];
	                            // Do we have already the event enabled?
	                            if (mapEvents.indexOf(eventName) === -1 && availableMapEvents.indexOf(eventName) !== -1) {
	                                mapEvents.push(eventName);
	                            }
	                        }
	                    }

	                }

	                for (i = 0; i < mapEvents.length; i++) {
	                    eventName = mapEvents[i];
	                    map.on(eventName, genDispatchMapEvent(leafletScope, eventName, logic), {
	                        eventName: eventName
	                    });
	                }
	            });
	        }
	    };
	}]);

	angular.module("leaflet-directive")
	.directive('geojson', ["$log", "$rootScope", "leafletData", "leafletHelpers", "leafletWatchHelpers", "leafletDirectiveControlsHelpers", "leafletIterators", function ($log, $rootScope, leafletData, leafletHelpers,
	    leafletWatchHelpers, leafletDirectiveControlsHelpers,leafletIterators) {

	    var _maybeWatchCollection = leafletWatchHelpers.maybeWatchCollection,
	        _watchOptions = leafletHelpers.watchOptions,
	        _extendDirectiveControls = leafletDirectiveControlsHelpers.extend,
	        hlp = leafletHelpers,
	        $it = leafletIterators;

	    return {
	        restrict: "A",
	        scope: false,
	        replace: false,
	        require: 'leaflet',

	        link: function(scope, element, attrs, controller) {
	            var safeApply = leafletHelpers.safeApply,
	                isDefined = leafletHelpers.isDefined,
	                leafletScope  = controller.getLeafletScope(),
	                leafletGeoJSON = {},
	                _hasSetLeafletData = false;

	            controller.getMap().then(function(map) {
	                var watchOptions = leafletScope.geojsonWatchOptions || _watchOptions;

	                var _hookUpEvents = function(geojson){
	                    var resetStyleOnMouseout = geojson.resetStyleOnMouseout;
	                    var onEachFeature;

	                    if (angular.isFunction(geojson.onEachFeature)) {
	                        onEachFeature = geojson.onEachFeature;
	                    } else {
	                        onEachFeature = function(feature, layer) {
	                            if (leafletHelpers.LabelPlugin.isLoaded() && isDefined(geojson.label)) {
	                                layer.bindLabel(feature.properties.description);
	                            }

	                            layer.on({
	                                mouseover: function(e) {
	                                    safeApply(leafletScope, function() {
	                                        $rootScope.$broadcast('leafletDirectiveMap.geojsonMouseover', feature, e);
	                                    });
	                                },
	                                mouseout: function(e) {
	                                    if (resetStyleOnMouseout) {
	                                        //this is broken on nested needs to traverse
	                                        leafletGeoJSON.resetStyle(e.target);
	                                    }
	                                    safeApply(leafletScope, function() {
	                                        $rootScope.$broadcast('leafletDirectiveMap.geojsonMouseout', e);
	                                    });
	                                },
	                                click: function(e) {
	                                    safeApply(leafletScope, function() {
	                                        $rootScope.$broadcast('leafletDirectiveMap.geojsonClick', feature, e);
	                                    });
	                                }
	                            });
	                        };
	                    }
	                    return onEachFeature;
	                };

	                var isNested = (hlp.isDefined(attrs.geojsonNested) &&
	                    hlp.isTruthy(attrs.geojsonNested));

	                var _clean = function(){
	                    if(!leafletGeoJSON)
	                        return;
	                    var _remove = function(lObject) {
	                        if (isDefined(lObject) && map.hasLayer(lObject)) {
	                            map.removeLayer(lObject);
	                        }
	                    };
	                    if(isNested) {
	                        $it.each(leafletGeoJSON, function(lObject) {
	                            _remove(lObject);
	                        });
	                        return;
	                    }
	                    _remove(leafletGeoJSON);
	                };

	                var _addGeojson = function(model, maybeName){
	                    var geojson = angular.copy(model);
	                    if (!(isDefined(geojson) && isDefined(geojson.data))) {
	                        return;
	                    }
	                    var onEachFeature = _hookUpEvents(geojson);

	                    if (!isDefined(geojson.options)) {
	                        //right here is why we use a clone / copy (we modify and thus)
	                        //would kick of a watcher.. we need to be more careful everywhere
	                        //for stuff like this
	                        geojson.options = {
	                            style: geojson.style,
	                            filter: geojson.filter,
	                            onEachFeature: onEachFeature,
	                            pointToLayer: geojson.pointToLayer
	                        };
	                    }

	                    var lObject = L.geoJson(geojson.data, geojson.options);

	                    if(maybeName && hlp.isString(maybeName)){
	                        leafletGeoJSON[maybeName] = lObject;
	                    }
	                    else{
	                        leafletGeoJSON = lObject;
	                    }

	                    lObject.addTo(map);

	                    if(!_hasSetLeafletData){//only do this once and play with the same ref forever
	                        _hasSetLeafletData = true;
	                        leafletData.setGeoJSON(leafletGeoJSON, attrs.id);
	                    }
	                };

	                var _create = function(model){
	                    _clean();
	                    if(isNested) {
	                        if(!model || !Object.keys(model).length)
	                            return;
	                        $it.each(model, function(m, name) {
	                            //name could be layerName and or groupName
	                            //for now it is not tied to a layer
	                            _addGeojson(m,name);
	                        });
	                        return;
	                    }
	                    _addGeojson(model);
	                };

	                _extendDirectiveControls(attrs.id, 'geojson', _create, _clean);

	                _maybeWatchCollection(leafletScope,'geojson', watchOptions, function(geojson){
	                    _create(geojson);
	                });
	            });
	        }
	    };
	}]);

	angular.module("leaflet-directive").directive('layercontrol', ["$log", "leafletData", "leafletHelpers", function ($log, leafletData, leafletHelpers) {
	  return {
	    restrict: "E",
	    scope: {
	    },
	    replace: true,
	    transclude: false,
	    require: '^leaflet',
	    controller: ["$scope", "$element", "$sce", function ($scope, $element, $sce) {
	      $log.debug('[Angular Directive - Layers] layers', $scope, $element);
	      var safeApply = leafletHelpers.safeApply,
	        isDefined = leafletHelpers.isDefined;
	      angular.extend($scope, {
	        baselayer: '',
	        icons: {
	          uncheck: 'fa fa-check-square-o',
	          check: 'fa fa-square-o',
	          radio: 'fa fa-dot-circle-o',
	          unradio: 'fa fa-circle-o',
	          up: 'fa fa-angle-up',
	          down: 'fa fa-angle-down',
	          open: 'fa fa-angle-double-down',
	          close: 'fa fa-angle-double-up'
	        },
	        changeBaseLayer: function(key, e) {
	          leafletHelpers.safeApply($scope, function(scp) {
	            scp.baselayer = key;
	            leafletData.getMap().then(function(map) {
	              leafletData.getLayers().then(function(leafletLayers) {
	                if(map.hasLayer(leafletLayers.baselayers[key])) {
	                  return;
	                }
	                for(var i in scp.layers.baselayers) {
	                  scp.layers.baselayers[i].icon = scp.icons.unradio;
	                  if(map.hasLayer(leafletLayers.baselayers[i])) {
	                    map.removeLayer(leafletLayers.baselayers[i]);
	                  }
	                }
	                map.addLayer(leafletLayers.baselayers[key]);
	                scp.layers.baselayers[key].icon = $scope.icons.radio;
	              });
	            });
	          });
	          e.preventDefault();
	        },
	        moveLayer: function(ly, newIndex, e) {
	            var delta = Object.keys($scope.layers.baselayers).length;
	            if(newIndex >= (1+delta) && newIndex <= ($scope.overlaysArray.length+delta)) {
	                var oldLy;
	                for(var key in $scope.layers.overlays) {
	                    if($scope.layers.overlays[key].index === newIndex) {
	                        oldLy = $scope.layers.overlays[key];
	                        break;
	                    }
	                }
	                if(oldLy) {
	                    safeApply($scope, function() {
	                        oldLy.index = ly.index;
	                        ly.index = newIndex;
	                    });
	                }
	            }
	            e.stopPropagation();
	            e.preventDefault();
	        },
	        initIndex: function(layer, idx) {
	            var delta = Object.keys($scope.layers.baselayers).length;
	            layer.index = isDefined(layer.index)? layer.index:idx+delta+1;
	        },
	        toggleOpacity: function(e, layer) {
	            $log.debug('Event', e);
	            if(layer.visible) {
	                var el = angular.element(e.currentTarget);
	                el.toggleClass($scope.icons.close + ' ' + $scope.icons.open);
	                el = el.parents('.lf-row').find('.lf-opacity');
	                el.toggle('fast', function() {
	                    safeApply($scope, function() {
	                        layer.opacityControl = !layer.opacityControl;
	                    });
	                });
	            }
	            e.stopPropagation();
	            e.preventDefault();
	        },
	        unsafeHTML: function(html) {
	          return $sce.trustAsHtml(html);
	        }
	      });

	      var div = $element.get(0);
	      if (!L.Browser.touch) {
	          L.DomEvent.disableClickPropagation(div);
	          L.DomEvent.on(div, 'mousewheel', L.DomEvent.stopPropagation);
	      } else {
	          L.DomEvent.on(div, 'click', L.DomEvent.stopPropagation);
	      }
	    }],
	    template:
	      '<div class="angular-leaflet-control-layers" ng-show="overlaysArray.length">' +
	        '<div class="lf-baselayers">' +
	            '<div class="lf-row" ng-repeat="(key, layer) in layers.baselayers">' +
	                '<label class="lf-icon-bl" ng-click="changeBaseLayer(key, $event)">' +
	                    '<input class="leaflet-control-layers-selector" type="radio" name="lf-radio" ' +
	                        'ng-show="false" ng-checked="baselayer === key" ng-value="key" /> ' +
	                    '<i class="lf-icon lf-icon-radio" ng-class="layer.icon"></i>' +
	                    '<div class="lf-text">{{layer.name}}</div>' +
	                '</label>' +
	            '</div>' +
	        '</div>' +
	        '<div class="lf-overlays">' +
	            '<div class="lf-container">' +
	                '<div class="lf-row" ng-repeat="layer in overlaysArray | orderBy:\'index\':order" ng-init="initIndex(layer, $index)">' +
	                    '<label class="lf-icon-ol">' +
	                        '<input class="lf-control-layers-selector" type="checkbox" ng-show="false" ng-model="layer.visible"/> ' +
	                        '<i class="lf-icon lf-icon-check" ng-class="layer.icon"></i>' +
	                        '<div class="lf-text">{{layer.name}}</div>' +
	                        '<div class="lf-icons">' +
	                            '<i class="lf-icon lf-up" ng-class="icons.up" ng-click="moveLayer(layer, layer.index - orderNumber, $event)"></i> ' +
	                            '<i class="lf-icon lf-down" ng-class="icons.down" ng-click="moveLayer(layer, layer.index + orderNumber, $event)"></i> ' +
	                            '<i class="lf-icon lf-open" ng-class="layer.opacityControl? icons.close:icons.open" ng-click="toggleOpacity($event, layer)"></i>' +
	                        '</div>' +
	                    '</label>'+
	                    '<div class="lf-legend" ng-if="layer.legend" ng-bind-html="unsafeHTML(layer.legend)"></div>' +
	                    '<div class="lf-opacity" ng-show="layer.visible &amp;&amp; layer.opacityControl">' +
	                        '<input type="text" class="lf-opacity-control" name="lf-opacity-control" data-key="{{layer.index}}" />' +
	                    '</div>' +
	                '</div>' +
	            '</div>' +
	        '</div>' +
	      '</div>',
	    link: function(scope, element, attrs, controller) {
	        var isDefined = leafletHelpers.isDefined,
	        leafletScope = controller.getLeafletScope(),
	        layers = leafletScope.layers;

	        // Setting layer stack order.
	        attrs.order = (isDefined(attrs.order) && (attrs.order === 'normal' || attrs.order === 'reverse'))? attrs.order:'normal';
	        scope.order = attrs.order === 'normal';
	        scope.orderNumber = attrs.order === 'normal'? -1:1;

	        scope.layers = layers;
	        controller.getMap().then(function(map) {

	            leafletScope.$watch('layers.baselayers', function(newBaseLayers) {
	                leafletData.getLayers().then(function(leafletLayers) {
	                    var key;
	                    for(key in newBaseLayers) {
	                      if(map.hasLayer(leafletLayers.baselayers[key])) {
	                        newBaseLayers[key].icon = scope.icons.radio;
	                      } else {
	                        newBaseLayers[key].icon = scope.icons.unradio;
	                      }
	                    }
	                });
	            });

	            leafletScope.$watch('layers.overlays', function(newOverlayLayers) {
	                var overlaysArray = [];
	                leafletData.getLayers().then(function(leafletLayers) {
	                    for(var key in newOverlayLayers) {
	                        newOverlayLayers[key].icon = scope.icons[(newOverlayLayers[key].visible? 'uncheck':'check')];
	                        overlaysArray.push(newOverlayLayers[key]);
	                        if(isDefined(newOverlayLayers[key].index) && leafletLayers.overlays[key].setZIndex) {
	                            leafletLayers.overlays[key].setZIndex(newOverlayLayers[key].index);
	                        }
	                    }
	                });

	                var unreg = scope.$watch(function() {
	                    if(element.children().size() > 1) {
	                        element.find('.lf-overlays').trigger('resize');
	                        return element.find('.lf-opacity').size() === Object.keys(layers.overlays).length;
	                    }
	                }, function(el) {
	                    if(el === true) {
	                        if(isDefined(element.find('.lf-opacity-control').ionRangeSlider)) {
	                            element.find('.lf-opacity-control').each(function(idx, inp) {
	                                var delta =  Object.keys(layers.baselayers).length,
	                                    lyAux;
	                                for(var key in scope.overlaysArray) {
	                                    if(scope.overlaysArray[key].index === idx+delta+1) {
	                                        lyAux = scope.overlaysArray[key];
	                                    }
	                                }

	                                var input = angular.element(inp),
	                                    op = isDefined(lyAux) && isDefined(lyAux.layerOptions)?
	                                        lyAux.layerOptions.opacity:undefined;
	                                input.ionRangeSlider({
	                                    min: 0,
	                                    from: isDefined(op)? Math.ceil(op*100):100,
	                                    step: 1,
	                                    max: 100,
	                                    prettify: false,
	                                    hasGrid: false,
	                                    hideMinMax: true,
	                                    onChange: function(val) {
	                                        leafletData.getLayers().then(function(leafletLayers) {
	                                            var key = val.input.data().key;
	                                            var ly, layer;
	                                            for(var k in layers.overlays) {
	                                                if(layers.overlays[k].index === key) {
	                                                    ly = leafletLayers.overlays[k];
	                                                    layer = layers.overlays[k];
	                                                    break;
	                                                }
	                                            }
	                                            if(map.hasLayer(ly)) {
	                                                layer.layerOptions = isDefined(layer.layerOptions)? layer.layerOptions:{};
	                                                layer.layerOptions.opacity = val.input.val()/100;
	                                                if(ly.setOpacity) {
	                                                    ly.setOpacity(val.input.val()/100);
	                                                }
	                                                if(ly.getLayers && ly.eachLayer) {
	                                                    ly.eachLayer(function(lay) {
	                                                        if(lay.setOpacity) {
	                                                            lay.setOpacity(val.input.val()/100);
	                                                        }
	                                                    });
	                                                }
	                                            }
	                                        });
	                                    }
	                                });
	                            });
	                        } else {
	                            $log.warn('[AngularJS - Leaflet] Ion Slide Range Plugin is not loaded');
	                        }
	                        unreg();
	                    }
	                });

	                scope.overlaysArray = overlaysArray;
	            }, true);
	        });
	    }
	  };
	}]);

	angular.module("leaflet-directive").directive('layers', ["$log", "$q", "leafletData", "leafletHelpers", "leafletLayerHelpers", "leafletControlHelpers", function ($log, $q, leafletData, leafletHelpers, leafletLayerHelpers, leafletControlHelpers) {
	    return {
	        restrict: "A",
	        scope: false,
	        replace: false,
	        require: 'leaflet',
	        controller: ["$scope", function ($scope) {
	            $scope._leafletLayers = $q.defer();
	            this.getLayers = function () {
	                return $scope._leafletLayers.promise;
	            };
	        }],
	        link: function(scope, element, attrs, controller){
	            var isDefined = leafletHelpers.isDefined,
	                leafletLayers = {},
	                leafletScope  = controller.getLeafletScope(),
	                layers = leafletScope.layers,
	                createLayer = leafletLayerHelpers.createLayer,
	                updateLayersControl = leafletControlHelpers.updateLayersControl,
	                isLayersControlVisible = false;

	            controller.getMap().then(function(map) {

	                // We have baselayers to add to the map
	                scope._leafletLayers.resolve(leafletLayers);
	                leafletData.setLayers(leafletLayers, attrs.id);

	                leafletLayers.baselayers = {};
	                leafletLayers.overlays = {};

	                var mapId = attrs.id;

	                // Setup all baselayers definitions
	                var oneVisibleLayer = false;
	                for (var layerName in layers.baselayers) {
	                    var newBaseLayer = createLayer(layers.baselayers[layerName]);
	                    if (!isDefined(newBaseLayer)) {
	                        delete layers.baselayers[layerName];
	                        continue;
	                    }
	                    leafletLayers.baselayers[layerName] = newBaseLayer;
	                    // Only add the visible layer to the map, layer control manages the addition to the map
	                    // of layers in its control
	                    if (layers.baselayers[layerName].top === true) {
	                        map.addLayer(leafletLayers.baselayers[layerName]);
	                        oneVisibleLayer = true;
	                    }
	                }

	                // If there is no visible layer add first to the map
	                if (!oneVisibleLayer && Object.keys(leafletLayers.baselayers).length > 0) {
	                    map.addLayer(leafletLayers.baselayers[Object.keys(layers.baselayers)[0]]);
	                }

	                // Setup the Overlays
	                for (layerName in layers.overlays) {
	                    if(layers.overlays[layerName].type === 'cartodb') {

	                    }
	                    var newOverlayLayer = createLayer(layers.overlays[layerName]);
	                    if (!isDefined(newOverlayLayer)) {
	                        delete layers.overlays[layerName];
	                        continue;
	                    }
	                    leafletLayers.overlays[layerName] = newOverlayLayer;
	                    // Only add the visible overlays to the map
	                    if (layers.overlays[layerName].visible === true) {
	                        map.addLayer(leafletLayers.overlays[layerName]);
	                    }
	                }

	                // Watch for the base layers
	                leafletScope.$watch('layers.baselayers', function(newBaseLayers) {
	                    // Delete layers from the array
	                    for (var name in leafletLayers.baselayers) {
	                        if (!isDefined(newBaseLayers[name])) {
	                            // Remove from the map if it's on it
	                            if (map.hasLayer(leafletLayers.baselayers[name])) {
	                                map.removeLayer(leafletLayers.baselayers[name]);
	                            }
	                            delete leafletLayers.baselayers[name];
	                        }
	                    }
	                    // add new layers
	                    for (var newName in newBaseLayers) {
	                        if (!isDefined(leafletLayers.baselayers[newName])) {
	                            var testBaseLayer = createLayer(newBaseLayers[newName]);
	                            if (isDefined(testBaseLayer)) {
	                                leafletLayers.baselayers[newName] = testBaseLayer;
	                                // Only add the visible layer to the map
	                                if (newBaseLayers[newName].top === true) {
	                                    map.addLayer(leafletLayers.baselayers[newName]);
	                                }
	                            }
	                        } else {
	                            if (newBaseLayers[newName].top === true && !map.hasLayer(leafletLayers.baselayers[newName])) {
	                                map.addLayer(leafletLayers.baselayers[newName]);
	                            } else if (newBaseLayers[newName].top === false && map.hasLayer(leafletLayers.baselayers[newName])) {
	                                map.removeLayer(leafletLayers.baselayers[newName]);
	                            }
	                        }
	                    }

	                    //we have layers, so we need to make, at least, one active
	                    var found = false;
	                    // search for an active layer
	                    for (var key in leafletLayers.baselayers) {
	                        if (map.hasLayer(leafletLayers.baselayers[key])) {
	                            found = true;
	                            break;
	                        }
	                    }
	                    // If there is no active layer make one active
	                    if (!found && Object.keys(leafletLayers.baselayers).length > 0) {
	                        map.addLayer(leafletLayers.baselayers[Object.keys(leafletLayers.baselayers)[0]]);
	                    }

	                    // Only show the layers switch selector control if we have more than one baselayer + overlay
	                    isLayersControlVisible = updateLayersControl(map, mapId, isLayersControlVisible, newBaseLayers, layers.overlays, leafletLayers);
	                }, true);

	                // Watch for the overlay layers
	                leafletScope.$watch('layers.overlays', function(newOverlayLayers) {
	                    // Delete layers from the array
	                    for (var name in leafletLayers.overlays) {
	                        if (!isDefined(newOverlayLayers[name])) {
	                            // Remove from the map if it's on it
	                            if (map.hasLayer(leafletLayers.overlays[name])) {
	                                map.removeLayer(leafletLayers.overlays[name]);
	                            }
	                            // TODO: Depending on the layer type we will have to delete what's included on it
	                            delete leafletLayers.overlays[name];
	                        }
	                    }

	                    // add new overlays
	                    for (var newName in newOverlayLayers) {
	                        if (!isDefined(leafletLayers.overlays[newName])) {
	                            var testOverlayLayer = createLayer(newOverlayLayers[newName]);
	                            if (!isDefined(testOverlayLayer)) {
	                                // If the layer creation fails, continue to the next overlay
	                                continue;
	                            }
	                            leafletLayers.overlays[newName] = testOverlayLayer;
	                            if (newOverlayLayers[newName].visible === true) {
	                                map.addLayer(leafletLayers.overlays[newName]);
	                            }
	                        }

	                        // check for the .visible property to hide/show overLayers
	                        if (newOverlayLayers[newName].visible && !map.hasLayer(leafletLayers.overlays[newName])) {
	                            map.addLayer(leafletLayers.overlays[newName]);
	                        } else if (newOverlayLayers[newName].visible === false && map.hasLayer(leafletLayers.overlays[newName])) {
	                            map.removeLayer(leafletLayers.overlays[newName]);
	                        }

	                        //refresh heatmap data if present
	                        if (newOverlayLayers[newName].visible && map._loaded && newOverlayLayers[newName].data && newOverlayLayers[newName].type === "heatmap") {
	                            leafletLayers.overlays[newName].setData(newOverlayLayers[newName].data);
	                            leafletLayers.overlays[newName].update();
	                        }
	                    }

	                    // Only add the layers switch selector control if we have more than one baselayer + overlay
	                    isLayersControlVisible = updateLayersControl(map, mapId, isLayersControlVisible, layers.baselayers, newOverlayLayers, leafletLayers);
	                }, true);
	            });
	        }
	    };
	}]);

	angular.module("leaflet-directive").directive('legend', ["$log", "$http", "leafletHelpers", "leafletLegendHelpers", function ($log, $http, leafletHelpers, leafletLegendHelpers) {
	        return {
	            restrict: "A",
	            scope: false,
	            replace: false,
	            require: 'leaflet',

	            link: function (scope, element, attrs, controller) {

	                var isArray = leafletHelpers.isArray,
	                    isDefined = leafletHelpers.isDefined,
	                    isFunction = leafletHelpers.isFunction,
	                    leafletScope = controller.getLeafletScope(),
	                    legend = leafletScope.legend;

	                var legendClass;
	                var position;
	                var leafletLegend;
	                var type;

	                leafletScope.$watch('legend', function (newLegend) {

	                    if (isDefined(newLegend)) {

	                        legendClass = newLegend.legendClass ? newLegend.legendClass : "legend";

	                        position = newLegend.position || 'bottomright';

	                        // default to arcgis
	                        type = newLegend.type || 'arcgis'; 
	                    }

	                }, true);

	                controller.getMap().then(function (map) {

	                    leafletScope.$watch('legend', function (newLegend) {

	                        if (!isDefined(newLegend)) {

	                            if (isDefined(leafletLegend)) {
	                                leafletLegend.removeFrom(map);
	                                leafletLegend= null;
	                            }

	                            return;
	                        }

	                        if (!isDefined(newLegend.url) && (type === 'arcgis') && (!isArray(newLegend.colors) || !isArray(newLegend.labels) || newLegend.colors.length !== newLegend.labels.length)) {

	                            $log.warn("[AngularJS - Leaflet] legend.colors and legend.labels must be set.");

	                            return;
	                        }

	                        if (isDefined(newLegend.url)) {

	                            $log.info("[AngularJS - Leaflet] loading legend service.");

	                            return;
	                        }

	                        if (isDefined(leafletLegend)) {
	                            leafletLegend.removeFrom(map);
	                            leafletLegend= null;
	                        }

	                        leafletLegend = L.control({
	                            position: position
	                        });
	                        if (type === 'arcgis') {
	                            leafletLegend.onAdd = leafletLegendHelpers.getOnAddArrayLegend(newLegend, legendClass);
	                        }
	                        leafletLegend.addTo(map);

	                    });

	                    leafletScope.$watch('legend.url', function (newURL) {

	                        if (!isDefined(newURL)) {
	                            return;
	                        }
	                        $http.get(newURL)
	                            .success(function (legendData) {

	                                if (isDefined(leafletLegend)) {

	                                    leafletLegendHelpers.updateLegend(leafletLegend.getContainer(), legendData, type, newURL);

	                                } else {

	                                    leafletLegend = L.control({
	                                        position: position
	                                    });
	                                    leafletLegend.onAdd = leafletLegendHelpers.getOnAddLegend(legendData, legendClass, type, newURL);
	                                    leafletLegend.addTo(map);
	                                }

	                                if (isDefined(legend.loadedData) && isFunction(legend.loadedData)) {
	                                    legend.loadedData();
	                                }
	                            })
	                            .error(function () {
	                                $log.warn('[AngularJS - Leaflet] legend.url not loaded.');
	                            });
	                    });

	                });
	            }
	        };
	    }]);

	angular.module("leaflet-directive").directive('markers',
	    ["$log", "$rootScope", "$q", "leafletData", "leafletHelpers", "leafletMapDefaults", "leafletMarkersHelpers", "leafletEvents", "leafletIterators", "leafletWatchHelpers", "leafletDirectiveControlsHelpers", function ($log, $rootScope, $q, leafletData, leafletHelpers, leafletMapDefaults,
	      leafletMarkersHelpers, leafletEvents, leafletIterators, leafletWatchHelpers,
	      leafletDirectiveControlsHelpers) {
	    //less terse vars to helpers
	    var isDefined = leafletHelpers.isDefined,
	        errorHeader = leafletHelpers.errorHeader,
	        Helpers = leafletHelpers,
	        isString = leafletHelpers.isString,
	        addMarkerWatcher = leafletMarkersHelpers.addMarkerWatcher,
	        listenMarkerEvents = leafletMarkersHelpers.listenMarkerEvents,
	        addMarkerToGroup = leafletMarkersHelpers.addMarkerToGroup,
	        bindMarkerEvents = leafletEvents.bindMarkerEvents,
	        createMarker = leafletMarkersHelpers.createMarker,
	        deleteMarker = leafletMarkersHelpers.deleteMarker,
	        $it = leafletIterators,
	        _markersWatchOptions = leafletHelpers.watchOptions,
	        maybeWatch = leafletWatchHelpers.maybeWatch,
	        extendDirectiveControls = leafletDirectiveControlsHelpers.extend;

	    var _maybeAddMarkerToLayer = function(layerName, layers, model, marker, doIndividualWatch, map){

	        if (!isString(layerName)) {
	            $log.error(errorHeader + ' A layername must be a string');
	            return false;
	        }

	        if (!isDefined(layers)) {
	            $log.error(errorHeader + ' You must add layers to the directive if the markers are going to use this functionality.');
	            return false;
	        }

	        if (!isDefined(layers.overlays) || !isDefined(layers.overlays[layerName])) {
	            $log.error(errorHeader +' A marker can only be added to a layer of type "group"');
	            return false;
	        }
	        var layerGroup = layers.overlays[layerName];
	        if (!(layerGroup instanceof L.LayerGroup || layerGroup instanceof L.FeatureGroup)) {
	            $log.error(errorHeader + ' Adding a marker to an overlay needs a overlay of the type "group" or "featureGroup"');
	            return false;
	        }

	        // The marker goes to a correct layer group, so first of all we add it
	        layerGroup.addLayer(marker);

	        // The marker is automatically added to the map depending on the visibility
	        // of the layer, so we only have to open the popup if the marker is in the map
	        if (!doIndividualWatch && map.hasLayer(marker) && model.focus === true) {
	            leafletMarkersHelpers.manageOpenPopup(marker, model);
	        }
	        return true;
	    };
	    //TODO: move to leafletMarkersHelpers??? or make a new class/function file (leafletMarkersHelpers is large already)
	    var _addMarkers = function(markersToRender, map, layers, leafletMarkers, leafletScope,
	                               watchOptions, maybeLayerName){

	        for (var newName in markersToRender) {
	            if (newName.search("-") !== -1) {
	                $log.error('The marker can\'t use a "-" on his key name: "' + newName + '".');
	                continue;
	            }

	            if (!isDefined(leafletMarkers[newName])) {
	                //(nmccready) very important to not have model changes when lObject is changed
	                //this might be desirable in some cases but it causes two-way binding to lObject which is not ideal
	                //if it is left as the reference then all changes from oldModel vs newModel are ignored
	                //see _destroy (where modelDiff becomes meaningless if we do not copy here)
	                var model = Helpers.copy(markersToRender[newName]);
	                var marker = createMarker(model);
	                var layerName = (model? model.layer : undefined) || maybeLayerName; //original way takes pref
	                if (!isDefined(marker)) {
	                    $log.error(errorHeader + ' Received invalid data on the marker ' + newName + '.');
	                    continue;
	                }
	                leafletMarkers[newName] = marker;

	                // Bind message
	                if (isDefined(model.message)) {
	                    marker.bindPopup(model.message, model.popupOptions);
	                }

	                // Add the marker to a cluster group if needed
	                if (isDefined(model.group)) {
	                    var groupOptions = isDefined(model.groupOption) ? model.groupOption : null;
	                    addMarkerToGroup(marker, model.group, groupOptions, map);
	                }

	                // Show label if defined
	                if (Helpers.LabelPlugin.isLoaded() && isDefined(model.label) && isDefined(model.label.message)) {
	                    marker.bindLabel(model.label.message, model.label.options);
	                }

	                // Check if the marker should be added to a layer
	                if (isDefined(model) && (isDefined(model.layer) || isDefined(maybeLayerName))){

	                    var pass = _maybeAddMarkerToLayer(layerName, layers, model, marker,
	                        watchOptions.individual.doWatch, map);
	                    if(!pass)
	                        continue; //something went wrong move on in the loop
	                } else if (!isDefined(model.group)) {
	                    // We do not have a layer attr, so the marker goes to the map layer
	                    map.addLayer(marker);
	                    if (!watchOptions.individual.doWatch && model.focus === true) {
	                        leafletMarkersHelpers.manageOpenPopup(marker, model);
	                    }
	                }
	                var pathToMarker = Helpers.getObjectDotPath(maybeLayerName? [maybeLayerName, newName]: [newName]);
	                if (watchOptions.individual.doWatch) {
	                    addMarkerWatcher(marker, pathToMarker, leafletScope, layers, map,
	                        watchOptions.individual.doWatch);
	                }

	                listenMarkerEvents(marker, model, leafletScope, watchOptions.individual.doWatch);
	                bindMarkerEvents(marker, pathToMarker, model, leafletScope, layerName);
	            }
	        }
	    };
	    var _destroy = function(markerModels, oldMarkerModels, lMarkers, map, layers){
	        // Delete markers from the array
	        var hasLogged = false,
	          modelIsDiff = false;
	        var doCheckOldModel =  isDefined(oldMarkerModels);
	        for (var name in lMarkers) {
	            if(!hasLogged) {
	                $log.debug(errorHeader + "[markers] destroy: ");
	                hasLogged = true;
	            }

	            if(doCheckOldModel){
	              //might want to make the option (in watch options) to disable deep checking
	              //ie the options to only check !== (reference check) instead of angular.equals (slow)
	              modelIsDiff = !angular.equals(markerModels[name],oldMarkerModels[name]);
	            }
	            if (!isDefined(markerModels) ||
	                !Object.keys(markerModels).length ||
	                !isDefined(markerModels[name]) ||
	                !Object.keys(markerModels[name]).length ||
	                modelIsDiff) {
	                deleteMarker(lMarkers[name], map, layers);
	                delete lMarkers[name];
	            }
	        }
	    };

	    return {
	        restrict: "A",
	        scope: false,
	        replace: false,
	        require: ['leaflet', '?layers'],

	        link: function(scope, element, attrs, controller) {
	            var mapController = controller[0],
	                leafletScope  = mapController.getLeafletScope();

	            mapController.getMap().then(function(map) {
	                var leafletMarkers = {}, getLayers;

	                // If the layers attribute is used, we must wait until the layers are created
	                if (isDefined(controller[1])) {
	                    getLayers = controller[1].getLayers;
	                } else {
	                    getLayers = function() {
	                        var deferred = $q.defer();
	                        deferred.resolve();
	                        return deferred.promise;
	                    };
	                }

	                var watchOptions = leafletScope.markersWatchOptions || _markersWatchOptions;

	                // backwards compat
	                if(isDefined(attrs.watchMarkers))
	                  watchOptions.doWatch = watchOptions.individual.doWatch =
	                        (!isDefined(attrs.watchMarkers) || Helpers.isTruthy(attrs.watchMarkers));

	                var isNested = (isDefined(attrs.markersNested) && Helpers.isTruthy(attrs.markersNested));

	                getLayers().then(function(layers) {
	                    var _clean = function(models, oldModels){
	                        _destroy(models, oldModels, leafletMarkers, map, layers);
	                    };

	                    var _create = function(models, oldModels){
	                        _clean(models, oldModels);
	                        if(isNested) {
	                            $it.each(models, function(markersToAdd, layerName) {
	                                _addMarkers(markersToAdd, map, layers, leafletMarkers, leafletScope,
	                                    watchOptions, layerName);
	                            });
	                            return;
	                        }
	                        _addMarkers(models, map, layers, leafletMarkers, leafletScope,
	                            watchOptions);
	                    };
	                    extendDirectiveControls(attrs.id, 'markers', _create, _clean);
	                    leafletData.setMarkers(leafletMarkers, attrs.id);

	                    maybeWatch(leafletScope,'markers', watchOptions, function(newMarkers, oldMarkers){
	                        _create(newMarkers, oldMarkers);
	                    });
	                });
	            });
	        }
	    };
	}]);

	angular.module("leaflet-directive").directive('maxbounds', ["$log", "leafletMapDefaults", "leafletBoundsHelpers", "leafletHelpers", function ($log, leafletMapDefaults, leafletBoundsHelpers, leafletHelpers) {
	    return {
	        restrict: "A",
	        scope: false,
	        replace: false,
	        require: 'leaflet',

	        link: function(scope, element, attrs, controller) {
	            var leafletScope  = controller.getLeafletScope(),
	                isValidBounds = leafletBoundsHelpers.isValidBounds,
	                isNumber = leafletHelpers.isNumber;


	            controller.getMap().then(function(map) {
	                leafletScope.$watch("maxbounds", function (maxbounds) {
	                    if (!isValidBounds(maxbounds)) {
	                        // Unset any previous maxbounds
	                        map.setMaxBounds();
	                        return;
	                    }
	                    
	                    var leafletBounds = leafletBoundsHelpers.createLeafletBounds(maxbounds);
	                    if(isNumber(maxbounds.pad)) {
	                      leafletBounds = leafletBounds.pad(maxbounds.pad);
	                    }

	                    map.setMaxBounds(leafletBounds);
	                    if (!attrs.center) {
	                        map.fitBounds(leafletBounds);
	                    }
	                });
	            });
	        }
	    };
	}]);

	angular.module("leaflet-directive").directive('paths', ["$log", "$q", "leafletData", "leafletMapDefaults", "leafletHelpers", "leafletPathsHelpers", "leafletEvents", function ($log, $q, leafletData, leafletMapDefaults, leafletHelpers, leafletPathsHelpers, leafletEvents) {
	    return {
	        restrict: "A",
	        scope: false,
	        replace: false,
	        require: ['leaflet', '?layers'],

	        link: function(scope, element, attrs, controller) {
	            var mapController = controller[0],
	                isDefined = leafletHelpers.isDefined,
	                isString = leafletHelpers.isString,
	                leafletScope  = mapController.getLeafletScope(),
	                paths     = leafletScope.paths,
	                createPath = leafletPathsHelpers.createPath,
	                bindPathEvents = leafletEvents.bindPathEvents,
	                setPathOptions = leafletPathsHelpers.setPathOptions;

	            mapController.getMap().then(function(map) {
	                var defaults = leafletMapDefaults.getDefaults(attrs.id),
	                    getLayers;

	                // If the layers attribute is used, we must wait until the layers are created
	                if (isDefined(controller[1])) {
	                    getLayers = controller[1].getLayers;
	                } else {
	                    getLayers = function() {
	                        var deferred = $q.defer();
	                        deferred.resolve();
	                        return deferred.promise;
	                    };
	                }

	                if (!isDefined(paths)) {
	                    return;
	                }

	                getLayers().then(function(layers) {

	                    var leafletPaths = {};
	                    leafletData.setPaths(leafletPaths, attrs.id);

	                    // Should we watch for every specific marker on the map?
	                    var shouldWatch = (!isDefined(attrs.watchPaths) || attrs.watchPaths === 'true');

	                    // Function for listening every single path once created
	                    var watchPathFn = function(leafletPath, name) {
	                        var clearWatch = leafletScope.$watch("paths[\""+name+"\"]", function(pathData, old) {
	                            if (!isDefined(pathData)) {
	                                if (isDefined(old.layer)) {
	                                    for (var i in layers.overlays) {
	                                        var overlay = layers.overlays[i];
	                                        overlay.removeLayer(leafletPath);
	                                    }
	                                }
	                                map.removeLayer(leafletPath);
	                                clearWatch();
	                                return;
	                            }
	                            setPathOptions(leafletPath, pathData.type, pathData);
	                        }, true);
	                    };

	                    leafletScope.$watchCollection("paths", function (newPaths) {

	                        // Delete paths (by name) from the array
	                        for (var name in leafletPaths) {
	                            if (!isDefined(newPaths[name])) {
	                                map.removeLayer(leafletPaths[name]);
	                                delete leafletPaths[name];
	                            }
	                        }

	                        // Create the new paths
	                        for (var newName in newPaths) {
	                            if (newName.search('\\$') === 0) {
	                                continue;
	                            }
	                            if (newName.search("-") !== -1) {
	                                $log.error('[AngularJS - Leaflet] The path name "' + newName + '" is not valid. It must not include "-" and a number.');
	                                continue;
	                            }

	                            if (!isDefined(leafletPaths[newName])) {
	                                var pathData = newPaths[newName];
	                                var newPath = createPath(newName, newPaths[newName], defaults);

	                                // bind popup if defined
	                                if (isDefined(newPath) && isDefined(pathData.message)) {
	                                    newPath.bindPopup(pathData.message);
	                                }

	                                // Show label if defined
	                                if (leafletHelpers.LabelPlugin.isLoaded() && isDefined(pathData.label) && isDefined(pathData.label.message)) {
	                                    newPath.bindLabel(pathData.label.message, pathData.label.options);
	                                }

	                                // Check if the marker should be added to a layer
	                                if (isDefined(pathData) && isDefined(pathData.layer)) {

	                                    if (!isString(pathData.layer)) {
	                                        $log.error('[AngularJS - Leaflet] A layername must be a string');
	                                        continue;
	                                    }
	                                    if (!isDefined(layers)) {
	                                        $log.error('[AngularJS - Leaflet] You must add layers to the directive if the markers are going to use this functionality.');
	                                        continue;
	                                    }

	                                    if (!isDefined(layers.overlays) || !isDefined(layers.overlays[pathData.layer])) {
	                                        $log.error('[AngularJS - Leaflet] A marker can only be added to a layer of type "group"');
	                                        continue;
	                                    }
	                                    var layerGroup = layers.overlays[pathData.layer];
	                                    if (!(layerGroup instanceof L.LayerGroup || layerGroup instanceof L.FeatureGroup)) {
	                                        $log.error('[AngularJS - Leaflet] Adding a marker to an overlay needs a overlay of the type "group" or "featureGroup"');
	                                        continue;
	                                    }

	                                    // Listen for changes on the new path
	                                    leafletPaths[newName] = newPath;
	                                    // The path goes to a correct layer group, so first of all we add it
	                                    layerGroup.addLayer(newPath);

	                                    if (shouldWatch) {
	                                        watchPathFn(newPath, newName);
	                                    } else {
	                                        setPathOptions(newPath, pathData.type, pathData);
	                                    }
	                                } else if (isDefined(newPath)) {
	                                    // Listen for changes on the new path
	                                    leafletPaths[newName] = newPath;
	                                    map.addLayer(newPath);

	                                    if (shouldWatch) {
	                                        watchPathFn(newPath, newName);
	                                    } else {
	                                        setPathOptions(newPath, pathData.type, pathData);
	                                    }
	                                }

	                                bindPathEvents(newPath, newName, pathData, leafletScope);
	                            }
	                        }
	                    });
	                });
	            });
	        }
	    };
	}]);

	angular.module("leaflet-directive").directive('tiles', ["$log", "leafletData", "leafletMapDefaults", "leafletHelpers", function ($log, leafletData, leafletMapDefaults, leafletHelpers) {
	    return {
	        restrict: "A",
	        scope: false,
	        replace: false,
	        require: 'leaflet',

	        link: function(scope, element, attrs, controller) {
	            var isDefined = leafletHelpers.isDefined,
	                leafletScope  = controller.getLeafletScope(),
	                tiles = leafletScope.tiles;

	            if (!isDefined(tiles) && !isDefined(tiles.url)) {
	                $log.warn("[AngularJS - Leaflet] The 'tiles' definition doesn't have the 'url' property.");
	                return;
	            }

	            controller.getMap().then(function(map) {
	                var defaults = leafletMapDefaults.getDefaults(attrs.id);
	                var tileLayerObj;
	                leafletScope.$watch("tiles", function(tiles) {
	                    var tileLayerOptions = defaults.tileLayerOptions;
	                    var tileLayerUrl = defaults.tileLayer;

	                    // If no valid tiles are in the scope, remove the last layer
	                    if (!isDefined(tiles.url) && isDefined(tileLayerObj)) {
	                        map.removeLayer(tileLayerObj);
	                        return;
	                    }

	                    // No leafletTiles object defined yet
	                    if (!isDefined(tileLayerObj)) {
	                        if (isDefined(tiles.options)) {
	                            angular.copy(tiles.options, tileLayerOptions);
	                        }

	                        if (isDefined(tiles.url)) {
	                            tileLayerUrl = tiles.url;
	                        }

	                        tileLayerObj = L.tileLayer(tileLayerUrl, tileLayerOptions);
	                        tileLayerObj.addTo(map);
	                        leafletData.setTiles(tileLayerObj, attrs.id);
	                        return;
	                    }

	                    // If the options of the tilelayer is changed, we need to redraw the layer
	                    if (isDefined(tiles.url) && isDefined(tiles.options) && !angular.equals(tiles.options, tileLayerOptions)) {
	                        map.removeLayer(tileLayerObj);
	                        tileLayerOptions = defaults.tileLayerOptions;
	                        angular.copy(tiles.options, tileLayerOptions);
	                        tileLayerUrl = tiles.url;
	                        tileLayerObj = L.tileLayer(tileLayerUrl, tileLayerOptions);
	                        tileLayerObj.addTo(map);
	                        leafletData.setTiles(tileLayerObj, attrs.id);
	                        return;
	                    }

	                    // Only the URL of the layer is changed, update the tiles object
	                    if (isDefined(tiles.url)) {
	                        tileLayerObj.setUrl(tiles.url);
	                    }
	                }, true);
	            });
	        }
	    };
	}]);

	/*
	    Create multiple similar directives for watchOptions to support directiveControl
	    instead. (when watches are disabled)
	    NgAnnotate does not work here due to the functional creation
	*/
	['markers', 'geojson'].forEach(function(name){
	    angular.module("leaflet-directive").directive(name + 'WatchOptions', [
	        '$log', '$rootScope', '$q', 'leafletData', 'leafletHelpers',
	        function ($log, $rootScope, $q, leafletData, leafletHelpers) {

	            var isDefined = leafletHelpers.isDefined,
	                errorHeader = leafletHelpers.errorHeader,
	                isObject = leafletHelpers.isObject,
	                _watchOptions = leafletHelpers.watchOptions;

	            return {
	                restrict: "A",
	                scope: false,
	                replace: false,
	                require: ['leaflet'],

	                link: function (scope, element, attrs, controller) {
	                    var mapController = controller[0],
	                        leafletScope = mapController.getLeafletScope();

	                    mapController.getMap().then(function () {
	                        if (isDefined(scope[name + 'WatchOptions'])) {
	                            if (isObject(scope[name + 'WatchOptions']))
	                                angular.extend(_watchOptions, scope[name + 'WatchOptions']);
	                            else
	                                $log.error(errorHeader + '[' + name + 'WatchOptions] is not an object');
	                            leafletScope[name + 'WatchOptions'] = _watchOptions;
	                        }
	                    });
	                }
	            };
	    }]);
	});

	angular.module("leaflet-directive")
	.factory('leafletEventsHelpers', ["$rootScope", "$q", "$log", "leafletHelpers", function ($rootScope, $q, $log, leafletHelpers) {
	        var safeApply = leafletHelpers.safeApply,
	            isDefined = leafletHelpers.isDefined;

	        var _fire = function(scope, broadcastName, logic, event, lObject, model, modelName, layerName){
	            // Safely broadcast the event
	            safeApply(scope, function(){
	                var toSend = {
	                    leafletEvent: event,
	                    leafletObject: lObject,
	                    modelName: modelName,
	                    model: model
	                };
	                if (isDefined(layerName))
	                    angular.extend(toSend, {layerName: layerName});

	                if (logic === "emit") {
	                    scope.$emit(broadcastName, toSend);
	                } else {
	                    $rootScope.$broadcast(broadcastName, toSend);
	                }
	            });
	        };

	        return {
	            fire: _fire
	        }
	}]);

	angular.module("leaflet-directive")
	.factory('leafletLabelEvents', ["$rootScope", "$q", "$log", "leafletHelpers", "leafletEventsHelpers", function ($rootScope, $q, $log, leafletHelpers, leafletEventsHelpers) {
	    var Helpers = leafletHelpers,
	        fire = leafletEventsHelpers.fire;

	    var _getAvailableLabelEvents = function () {
	        return [
	            'click',
	            'dblclick',
	            'mousedown',
	            'mouseover',
	            'mouseout',
	            'contextmenu'
	        ];
	    };

	    var _genDispatchLabelEvent = function (eventName, logic, leafletScope, label, name, model, layerName) {
	        return function (e) {
	            // Put together broadcast name
	            var broadcastName = 'leafletDirectiveLabel.' + eventName;
	            var markerName = scope_watch_name.replace('markers.', '');
	            fire(leafletScope, broadcastName, logic, e, label, model, markerName, layerName);
	        };
	    };


	    var _genLabelEvents = function (eventName, logic, leafletScope, lObject, name, model, layerName) {
	        var labelEvents = _getAvailableLabelEvents();
	        var scopeWatchName = Helpers.getObjectArrayPath("markers." + name);
	        for (var i = 0; i < labelEvents.length; i++) {
	            var eventName = labelEvents[i];
	            lObject.label.on(eventName,
	                _genDispatchLabelEvent(
	                    eventName, logic, leafletScope, lObject.label, scopeWatchName, model, layerName));
	        }
	    };

	    return {
	        getAvailableLabelEvents: _getAvailableLabelEvents,
	        genDispatchLabelEvent: _genDispatchLabelEvent,
	        genLabelEvents: _genLabelEvents
	    };
	}]);

	angular.module("leaflet-directive")
	.factory('leafletMapEvents', ["$rootScope", "$q", "$log", "leafletHelpers", "leafletEventsHelpers", function ($rootScope, $q, $log, leafletHelpers, leafletEventsHelpers) {
	    var safeApply = leafletHelpers.safeApply,
	        isDefined = leafletHelpers.isDefined,
	        isObject = leafletHelpers.isObject,
	        Helpers = leafletHelpers,
	        errorHeader = leafletHelpers.errorHeader,
	        fire = leafletEventsHelpers.fire;

	    var _getAvailableMapEvents = function() {
	        return [
	            'click',
	            'dblclick',
	            'mousedown',
	            'mouseup',
	            'mouseover',
	            'mouseout',
	            'mousemove',
	            'contextmenu',
	            'focus',
	            'blur',
	            'preclick',
	            'load',
	            'unload',
	            'viewreset',
	            'movestart',
	            'move',
	            'moveend',
	            'dragstart',
	            'drag',
	            'dragend',
	            'zoomstart',
	            'zoomend',
	            'zoomlevelschange',
	            'resize',
	            'autopanstart',
	            'layeradd',
	            'layerremove',
	            'baselayerchange',
	            'overlayadd',
	            'overlayremove',
	            'locationfound',
	            'locationerror',
	            'popupopen',
	            'popupclose',
	            'draw:created',
	            'draw:edited',
	            'draw:deleted',
	            'draw:drawstart',
	            'draw:drawstop',
	            'draw:editstart',
	            'draw:editstop',
	            'draw:deletestart',
	            'draw:deletestop'
	        ];
	    };

	    var _genDispatchMapEvent = function(scope, eventName, logic) {
	        return function(e) {
	            // Put together broadcast name
	            var broadcastName = 'leafletDirectiveMap.' + eventName;
	            // Safely broadcast the event
	            fire(scope, broadcastName, logic, e, e.target, scope)
	        };
	    };

	    var _notifyCenterChangedToBounds = function(scope) {
	        scope.$broadcast("boundsChanged");
	    };

	    var _notifyCenterUrlHashChanged = function(scope, map, attrs, search) {
	        if (!isDefined(attrs.urlHashCenter)) {
	            return;
	        }
	        var center = map.getCenter();
	        var centerUrlHash = (center.lat).toFixed(4) + ":" + (center.lng).toFixed(4) + ":" + map.getZoom();
	        if (!isDefined(search.c) || search.c !== centerUrlHash) {
	            //$log.debug("notified new center...");
	            scope.$emit("centerUrlHash", centerUrlHash);
	        }
	    };

	    return {
	        getAvailableMapEvents: _getAvailableMapEvents,
	        genDispatchMapEvent: _genDispatchMapEvent,
	        notifyCenterChangedToBounds: _notifyCenterChangedToBounds,
	        notifyCenterUrlHashChanged: _notifyCenterUrlHashChanged
	    };
	}]);

	angular.module("leaflet-directive")
	.factory('leafletMarkerEvents', ["$rootScope", "$q", "$log", "leafletHelpers", "leafletEventsHelpers", "leafletLabelEvents", function ($rootScope, $q, $log, leafletHelpers, leafletEventsHelpers, leafletLabelEvents) {
	    var safeApply = leafletHelpers.safeApply,
	        isDefined = leafletHelpers.isDefined,
	        isObject = leafletHelpers.isObject,
	        Helpers = leafletHelpers,
	        errorHeader = leafletHelpers.errorHeader,
	        fire = leafletEventsHelpers.fire,
	        lblHelp = leafletLabelEvents;

	    /*
	     argument: name: Note this can be a single string or dot notation
	     Example:
	     markerModel : {
	     m1: { lat:_, lon: _}
	     }
	     //would yield name of
	     name = "m1"

	     If nested:
	     markerModel : {
	     cars: {
	     m1: { lat:_, lon: _}
	     }
	     }
	     //would yield name of
	     name = "cars.m1"
	     */
	    var _genDispatchMarkerEvent = function (eventName, logic, leafletScope, lObject, name, model, layerName) {
	        return function (e) {
	            var broadcastName = 'leafletDirectiveMarker.' + eventName;

	            // Broadcast old marker click name for backwards compatibility
	            if (eventName === "click") {
	                safeApply(leafletScope, function () {
	                    $rootScope.$broadcast('leafletDirectiveMarkersClick', name);
	                });
	            } else if (eventName === 'dragend') {
	                safeApply(leafletScope, function () {
	                    model.lat = lObject.getLatLng().lat;
	                    model.lng = lObject.getLatLng().lng;
	                });
	                if (model.message && model.focus === true) {
	                    lObject.openPopup();
	                }
	            }

	            fire(leafletScope, broadcastName, logic, e, e.target || lObject, model, name, layerName);
	        };
	    };

	    var _getAvailableMarkerEvents = function () {
	        return [
	            'click',
	            'dblclick',
	            'mousedown',
	            'mouseover',
	            'mouseout',
	            'contextmenu',
	            'dragstart',
	            'drag',
	            'dragend',
	            'move',
	            'remove',
	            'popupopen',
	            'popupclose'
	        ];
	    };

	    return {
	        getAvailableMarkerEvents: _getAvailableMarkerEvents,

	        bindMarkerEvents: function (lObject, name, model, leafletScope, layerName) {
	            var markerEvents = [];
	            var i;
	            var eventName;
	            var logic = "emit";

	            if (!isDefined(leafletScope.eventBroadcast)) {
	                // Backward compatibility, if no event-broadcast attribute, all events are broadcasted
	                markerEvents = _getAvailableMarkerEvents();
	            } else if (!isObject(leafletScope.eventBroadcast)) {
	                // Not a valid object
	                $log.error(errorHeader + "event-broadcast must be an object check your model.");
	            } else {
	                // We have a possible valid object
	                if (!isDefined(leafletScope.eventBroadcast.marker)) {
	                    // We do not have events enable/disable do we do nothing (all enabled by default)
	                    markerEvents = _getAvailableMarkerEvents();
	                } else if (!isObject(leafletScope.eventBroadcast.marker)) {
	                    // Not a valid object
	                    $log.warn(errorHeader + "event-broadcast.marker must be an object check your model.");
	                } else {
	                    // We have a possible valid map object
	                    // Event propadation logic
	                    if (leafletScope.eventBroadcast.marker.logic !== undefined && leafletScope.eventBroadcast.marker.logic !== null) {
	                        // We take care of possible propagation logic
	                        if (leafletScope.eventBroadcast.marker.logic !== "emit" && leafletScope.eventBroadcast.marker.logic !== "broadcast") {
	                            // This is an error
	                            $log.warn(errorHeader + "Available event propagation logic are: 'emit' or 'broadcast'.");
	                        } else if (leafletScope.eventBroadcast.marker.logic === "emit") {
	                            logic = "emit";
	                        }
	                    }
	                    // Enable / Disable
	                    var markerEventsEnable = false, markerEventsDisable = false;
	                    if (leafletScope.eventBroadcast.marker.enable !== undefined && leafletScope.eventBroadcast.marker.enable !== null) {
	                        if (typeof leafletScope.eventBroadcast.marker.enable === 'object') {
	                            markerEventsEnable = true;
	                        }
	                    }
	                    if (leafletScope.eventBroadcast.marker.disable !== undefined && leafletScope.eventBroadcast.marker.disable !== null) {
	                        if (typeof leafletScope.eventBroadcast.marker.disable === 'object') {
	                            markerEventsDisable = true;
	                        }
	                    }
	                    if (markerEventsEnable && markerEventsDisable) {
	                        // Both are active, this is an error
	                        $log.warn(errorHeader + "can not enable and disable events at the same time");
	                    } else if (!markerEventsEnable && !markerEventsDisable) {
	                        // Both are inactive, this is an error
	                        $log.warn(errorHeader + "must enable or disable events");
	                    } else {
	                        // At this point the marker object is OK, lets enable or disable events
	                        if (markerEventsEnable) {
	                            // Enable events
	                            for (i = 0; i < leafletScope.eventBroadcast.marker.enable.length; i++) {
	                                eventName = leafletScope.eventBroadcast.marker.enable[i];
	                                // Do we have already the event enabled?
	                                if (markerEvents.indexOf(eventName) !== -1) {
	                                    // Repeated event, this is an error
	                                    $log.warn(errorHeader + "This event " + eventName + " is already enabled");
	                                } else {
	                                    // Does the event exists?
	                                    if (_getAvailableMarkerEvents().indexOf(eventName) === -1) {
	                                        // The event does not exists, this is an error
	                                        $log.warn(errorHeader + "This event " + eventName + " does not exist");
	                                    } else {
	                                        // All ok enable the event
	                                        markerEvents.push(eventName);
	                                    }
	                                }
	                            }
	                        } else {
	                            // Disable events
	                            markerEvents = _getAvailableMarkerEvents();
	                            for (i = 0; i < leafletScope.eventBroadcast.marker.disable.length; i++) {
	                                eventName = leafletScope.eventBroadcast.marker.disable[i];
	                                var index = markerEvents.indexOf(eventName);
	                                if (index === -1) {
	                                    // The event does not exist
	                                    $log.warn(errorHeader + "This event " + eventName + " does not exist or has been already disabled");

	                                } else {
	                                    markerEvents.splice(index, 1);
	                                }
	                            }
	                        }
	                    }
	                }
	            }

	            for (i = 0; i < markerEvents.length; i++) {
	                eventName = markerEvents[i];
	                lObject.on(eventName,
	                    _genDispatchMarkerEvent(eventName, logic, leafletScope, lObject, name, model, layerName));
	            }

	            if (Helpers.LabelPlugin.isLoaded() && isDefined(lObject.label)) {
	                lblHelp.genLabelEvents(name, logic, leafletScope, lObject, model, layerName);
	            }
	        }
	    };
	}]);

	angular.module("leaflet-directive")
	.factory('leafletPathEvents', ["$rootScope", "$q", "$log", "leafletHelpers", "leafletLabelEvents", "leafletEventsHelpers", function ($rootScope, $q, $log, leafletHelpers, leafletLabelEvents, leafletEventsHelpers) {
	    var safeApply = leafletHelpers.safeApply,
	        isDefined = leafletHelpers.isDefined,
	        isObject = leafletHelpers.isObject,
	        Helpers = leafletHelpers,
	        errorHeader = leafletHelpers.errorHeader,
	        lblHelp = leafletLabelEvents,
	        fire = leafletEventsHelpers.fire;

	    var _genDispatchPathEvent = function (eventName, logic, leafletScope, lObject, name, model, layerName) {
	        return function (e) {
	            var broadcastName = 'leafletDirectivePath.' + eventName;

	            fire(leafletScope, broadcastName, logic, e, e.target || lObject, model, name, layerName);
	        };
	    };

	    var _bindPathEvents = function (lObject, name, model, leafletScope) {
	        var pathEvents = [],
	            i,
	            eventName,
	            logic = "broadcast";

	        if (!isDefined(leafletScope.eventBroadcast)) {
	            // Backward compatibility, if no event-broadcast attribute, all events are broadcasted
	            pathEvents = _getAvailablePathEvents();
	        } else if (!isObject(leafletScope.eventBroadcast)) {
	            // Not a valid object
	            $log.error(errorHeader + "event-broadcast must be an object check your model.");
	        } else {
	            // We have a possible valid object
	            if (!isDefined(leafletScope.eventBroadcast.path)) {
	                // We do not have events enable/disable do we do nothing (all enabled by default)
	                pathEvents = _getAvailablePathEvents();
	            } else if (isObject(leafletScope.eventBroadcast.paths)) {
	                // Not a valid object
	                $log.warn(errorHeader + "event-broadcast.path must be an object check your model.");
	            } else {
	                // We have a possible valid map object
	                // Event propadation logic
	                if (leafletScope.eventBroadcast.path.logic !== undefined && leafletScope.eventBroadcast.path.logic !== null) {
	                    // We take care of possible propagation logic
	                    if (leafletScope.eventBroadcast.path.logic !== "emit" && leafletScope.eventBroadcast.path.logic !== "broadcast") {
	                        // This is an error
	                        $log.warn(errorHeader + "Available event propagation logic are: 'emit' or 'broadcast'.");
	                    } else if (leafletScope.eventBroadcast.path.logic === "emit") {
	                        logic = "emit";
	                    }
	                }
	                // Enable / Disable
	                var pathEventsEnable = false, pathEventsDisable = false;
	                if (leafletScope.eventBroadcast.path.enable !== undefined && leafletScope.eventBroadcast.path.enable !== null) {
	                    if (typeof leafletScope.eventBroadcast.path.enable === 'object') {
	                        pathEventsEnable = true;
	                    }
	                }
	                if (leafletScope.eventBroadcast.path.disable !== undefined && leafletScope.eventBroadcast.path.disable !== null) {
	                    if (typeof leafletScope.eventBroadcast.path.disable === 'object') {
	                        pathEventsDisable = true;
	                    }
	                }
	                if (pathEventsEnable && pathEventsDisable) {
	                    // Both are active, this is an error
	                    $log.warn(errorHeader + "can not enable and disable events at the same time");
	                } else if (!pathEventsEnable && !pathEventsDisable) {
	                    // Both are inactive, this is an error
	                    $log.warn(errorHeader + "must enable or disable events");
	                } else {
	                    // At this point the path object is OK, lets enable or disable events
	                    if (pathEventsEnable) {
	                        // Enable events
	                        for (i = 0; i < leafletScope.eventBroadcast.path.enable.length; i++) {
	                            eventName = leafletScope.eventBroadcast.path.enable[i];
	                            // Do we have already the event enabled?
	                            if (pathEvents.indexOf(eventName) !== -1) {
	                                // Repeated event, this is an error
	                                $log.warn(errorHeader + "This event " + eventName + " is already enabled");
	                            } else {
	                                // Does the event exists?
	                                if (_getAvailablePathEvents().indexOf(eventName) === -1) {
	                                    // The event does not exists, this is an error
	                                    $log.warn(errorHeader + "This event " + eventName + " does not exist");
	                                } else {
	                                    // All ok enable the event
	                                    pathEvents.push(eventName);
	                                }
	                            }
	                        }
	                    } else {
	                        // Disable events
	                        pathEvents = _getAvailablePathEvents();
	                        for (i = 0; i < leafletScope.eventBroadcast.path.disable.length; i++) {
	                            eventName = leafletScope.eventBroadcast.path.disable[i];
	                            var index = pathEvents.indexOf(eventName);
	                            if (index === -1) {
	                                // The event does not exist
	                                $log.warn(errorHeader + "This event " + eventName + " does not exist or has been already disabled");

	                            } else {
	                                pathEvents.splice(index, 1);
	                            }
	                        }
	                    }
	                }
	            }
	        }

	        for (i = 0; i < pathEvents.length; i++) {
	            eventName = pathEvents[i];
	            lObject.on(eventName, _genDispatchPathEvent(eventName, logic, leafletScope, pathEvents, name));
	        }

	        if (Helpers.LabelPlugin.isLoaded() && isDefined(lObject.label)) {
	            lblHelp.genLabelEvents(leafletScope, logic, lObject, name);
	        }
	    };

	    var _getAvailablePathEvents = function () {
	        return [
	            'click',
	            'dblclick',
	            'mousedown',
	            'mouseover',
	            'mouseout',
	            'contextmenu',
	            'add',
	            'remove',
	            'popupopen',
	            'popupclose'
	        ];
	    };

	    return {
	        getAvailablePathEvents: _getAvailablePathEvents,
	        bindPathEvents: _bindPathEvents
	    };
	}]);

	}(angular));

/***/ },
/* 108 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_108__;

/***/ },
/* 109 */
/***/ function(module, exports) {

	/*
	 Leaflet.markercluster, Provides Beautiful Animated Marker Clustering functionality for Leaflet, a JS library for interactive maps.
	 https://github.com/Leaflet/Leaflet.markercluster
	 (c) 2012-2013, Dave Leaver, smartrak
	*/
	!function(t,e){L.MarkerClusterGroup=L.FeatureGroup.extend({options:{maxClusterRadius:80,iconCreateFunction:null,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0,singleMarkerMode:!1,disableClusteringAtZoom:null,removeOutsideVisibleBounds:!0,animateAddingMarkers:!1,spiderfyDistanceMultiplier:1,polygonOptions:{}},initialize:function(t){L.Util.setOptions(this,t),this.options.iconCreateFunction||(this.options.iconCreateFunction=this._defaultIconCreateFunction),this._featureGroup=L.featureGroup(),this._featureGroup.on(L.FeatureGroup.EVENTS,this._propagateEvent,this),this._nonPointGroup=L.featureGroup(),this._nonPointGroup.on(L.FeatureGroup.EVENTS,this._propagateEvent,this),this._inZoomAnimation=0,this._needsClustering=[],this._needsRemoving=[],this._currentShownBounds=null,this._queue=[]},addLayer:function(t){if(t instanceof L.LayerGroup){var e=[];for(var i in t._layers)e.push(t._layers[i]);return this.addLayers(e)}if(!t.getLatLng)return this._nonPointGroup.addLayer(t),this;if(!this._map)return this._needsClustering.push(t),this;if(this.hasLayer(t))return this;this._unspiderfy&&this._unspiderfy(),this._addLayer(t,this._maxZoom);var n=t,s=this._map.getZoom();if(t.__parent)for(;n.__parent._zoom>=s;)n=n.__parent;return this._currentShownBounds.contains(n.getLatLng())&&(this.options.animateAddingMarkers?this._animationAddLayer(t,n):this._animationAddLayerNonAnimated(t,n)),this},removeLayer:function(t){if(t instanceof L.LayerGroup){var e=[];for(var i in t._layers)e.push(t._layers[i]);return this.removeLayers(e)}return t.getLatLng?this._map?t.__parent?(this._unspiderfy&&(this._unspiderfy(),this._unspiderfyLayer(t)),this._removeLayer(t,!0),this._featureGroup.hasLayer(t)&&(this._featureGroup.removeLayer(t),t.setOpacity&&t.setOpacity(1)),this):this:(!this._arraySplice(this._needsClustering,t)&&this.hasLayer(t)&&this._needsRemoving.push(t),this):(this._nonPointGroup.removeLayer(t),this)},addLayers:function(t){var e,i,n,s=this._map,r=this._featureGroup,o=this._nonPointGroup;for(e=0,i=t.length;i>e;e++)if(n=t[e],n.getLatLng){if(!this.hasLayer(n))if(s){if(this._addLayer(n,this._maxZoom),n.__parent&&2===n.__parent.getChildCount()){var a=n.__parent.getAllChildMarkers(),h=a[0]===n?a[1]:a[0];r.removeLayer(h)}}else this._needsClustering.push(n)}else o.addLayer(n);return s&&(r.eachLayer(function(t){t instanceof L.MarkerCluster&&t._iconNeedsUpdate&&t._updateIcon()}),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds)),this},removeLayers:function(t){var e,i,n,s=this._featureGroup,r=this._nonPointGroup;if(!this._map){for(e=0,i=t.length;i>e;e++)n=t[e],this._arraySplice(this._needsClustering,n),r.removeLayer(n);return this}for(e=0,i=t.length;i>e;e++)n=t[e],n.__parent?(this._removeLayer(n,!0,!0),s.hasLayer(n)&&(s.removeLayer(n),n.setOpacity&&n.setOpacity(1))):r.removeLayer(n);return this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds),s.eachLayer(function(t){t instanceof L.MarkerCluster&&t._updateIcon()}),this},clearLayers:function(){return this._map||(this._needsClustering=[],delete this._gridClusters,delete this._gridUnclustered),this._noanimationUnspiderfy&&this._noanimationUnspiderfy(),this._featureGroup.clearLayers(),this._nonPointGroup.clearLayers(),this.eachLayer(function(t){delete t.__parent}),this._map&&this._generateInitialClusters(),this},getBounds:function(){var t=new L.LatLngBounds;if(this._topClusterLevel)t.extend(this._topClusterLevel._bounds);else for(var e=this._needsClustering.length-1;e>=0;e--)t.extend(this._needsClustering[e].getLatLng());return t.extend(this._nonPointGroup.getBounds()),t},eachLayer:function(t,e){var i,n=this._needsClustering.slice();for(this._topClusterLevel&&this._topClusterLevel.getAllChildMarkers(n),i=n.length-1;i>=0;i--)t.call(e,n[i]);this._nonPointGroup.eachLayer(t,e)},getLayers:function(){var t=[];return this.eachLayer(function(e){t.push(e)}),t},getLayer:function(t){var e=null;return this.eachLayer(function(i){L.stamp(i)===t&&(e=i)}),e},hasLayer:function(t){if(!t)return!1;var e,i=this._needsClustering;for(e=i.length-1;e>=0;e--)if(i[e]===t)return!0;for(i=this._needsRemoving,e=i.length-1;e>=0;e--)if(i[e]===t)return!1;return!(!t.__parent||t.__parent._group!==this)||this._nonPointGroup.hasLayer(t)},zoomToShowLayer:function(t,e){var i=function(){if((t._icon||t.__parent._icon)&&!this._inZoomAnimation)if(this._map.off("moveend",i,this),this.off("animationend",i,this),t._icon)e();else if(t.__parent._icon){var n=function(){this.off("spiderfied",n,this),e()};this.on("spiderfied",n,this),t.__parent.spiderfy()}};t._icon&&this._map.getBounds().contains(t.getLatLng())?e():t.__parent._zoom<this._map.getZoom()?(this._map.on("moveend",i,this),this._map.panTo(t.getLatLng())):(this._map.on("moveend",i,this),this.on("animationend",i,this),this._map.setView(t.getLatLng(),t.__parent._zoom+1),t.__parent.zoomToBounds())},onAdd:function(t){this._map=t;var e,i,n;if(!isFinite(this._map.getMaxZoom()))throw"Map has no maxZoom specified";for(this._featureGroup.onAdd(t),this._nonPointGroup.onAdd(t),this._gridClusters||this._generateInitialClusters(),e=0,i=this._needsRemoving.length;i>e;e++)n=this._needsRemoving[e],this._removeLayer(n,!0);for(this._needsRemoving=[],e=0,i=this._needsClustering.length;i>e;e++)n=this._needsClustering[e],n.getLatLng?n.__parent||this._addLayer(n,this._maxZoom):this._featureGroup.addLayer(n);this._needsClustering=[],this._map.on("zoomend",this._zoomEnd,this),this._map.on("moveend",this._moveEnd,this),this._spiderfierOnAdd&&this._spiderfierOnAdd(),this._bindEvents(),this._zoom=this._map.getZoom(),this._currentShownBounds=this._getExpandedVisibleBounds(),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds)},onRemove:function(t){t.off("zoomend",this._zoomEnd,this),t.off("moveend",this._moveEnd,this),this._unbindEvents(),this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim",""),this._spiderfierOnRemove&&this._spiderfierOnRemove(),this._hideCoverage(),this._featureGroup.onRemove(t),this._nonPointGroup.onRemove(t),this._featureGroup.clearLayers(),this._map=null},getVisibleParent:function(t){for(var e=t;e&&!e._icon;)e=e.__parent;return e||null},_arraySplice:function(t,e){for(var i=t.length-1;i>=0;i--)if(t[i]===e)return t.splice(i,1),!0},_removeLayer:function(t,e,i){var n=this._gridClusters,s=this._gridUnclustered,r=this._featureGroup,o=this._map;if(e)for(var a=this._maxZoom;a>=0&&s[a].removeObject(t,o.project(t.getLatLng(),a));a--);var h,_=t.__parent,u=_._markers;for(this._arraySplice(u,t);_&&(_._childCount--,!(_._zoom<0));)e&&_._childCount<=1?(h=_._markers[0]===t?_._markers[1]:_._markers[0],n[_._zoom].removeObject(_,o.project(_._cLatLng,_._zoom)),s[_._zoom].addObject(h,o.project(h.getLatLng(),_._zoom)),this._arraySplice(_.__parent._childClusters,_),_.__parent._markers.push(h),h.__parent=_.__parent,_._icon&&(r.removeLayer(_),i||r.addLayer(h))):(_._recalculateBounds(),i&&_._icon||_._updateIcon()),_=_.__parent;delete t.__parent},_isOrIsParent:function(t,e){for(;e;){if(t===e)return!0;e=e.parentNode}return!1},_propagateEvent:function(t){if(t.layer instanceof L.MarkerCluster){if(t.originalEvent&&this._isOrIsParent(t.layer._icon,t.originalEvent.relatedTarget))return;t.type="cluster"+t.type}this.fire(t.type,t)},_defaultIconCreateFunction:function(t){var e=t.getChildCount(),i=" marker-cluster-";return i+=10>e?"small":100>e?"medium":"large",new L.DivIcon({html:"<div><span>"+e+"</span></div>",className:"marker-cluster"+i,iconSize:new L.Point(40,40)})},_bindEvents:function(){var t=this._map,e=this.options.spiderfyOnMaxZoom,i=this.options.showCoverageOnHover,n=this.options.zoomToBoundsOnClick;(e||n)&&this.on("clusterclick",this._zoomOrSpiderfy,this),i&&(this.on("clustermouseover",this._showCoverage,this),this.on("clustermouseout",this._hideCoverage,this),t.on("zoomend",this._hideCoverage,this))},_zoomOrSpiderfy:function(t){var e=this._map;e.getMaxZoom()===e.getZoom()?this.options.spiderfyOnMaxZoom&&t.layer.spiderfy():this.options.zoomToBoundsOnClick&&t.layer.zoomToBounds(),t.originalEvent&&13===t.originalEvent.keyCode&&e._container.focus()},_showCoverage:function(t){var e=this._map;this._inZoomAnimation||(this._shownPolygon&&e.removeLayer(this._shownPolygon),t.layer.getChildCount()>2&&t.layer!==this._spiderfied&&(this._shownPolygon=new L.Polygon(t.layer.getConvexHull(),this.options.polygonOptions),e.addLayer(this._shownPolygon)))},_hideCoverage:function(){this._shownPolygon&&(this._map.removeLayer(this._shownPolygon),this._shownPolygon=null)},_unbindEvents:function(){var t=this.options.spiderfyOnMaxZoom,e=this.options.showCoverageOnHover,i=this.options.zoomToBoundsOnClick,n=this._map;(t||i)&&this.off("clusterclick",this._zoomOrSpiderfy,this),e&&(this.off("clustermouseover",this._showCoverage,this),this.off("clustermouseout",this._hideCoverage,this),n.off("zoomend",this._hideCoverage,this))},_zoomEnd:function(){this._map&&(this._mergeSplitClusters(),this._zoom=this._map._zoom,this._currentShownBounds=this._getExpandedVisibleBounds())},_moveEnd:function(){if(!this._inZoomAnimation){var t=this._getExpandedVisibleBounds();this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,this._zoom,t),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._map._zoom,t),this._currentShownBounds=t}},_generateInitialClusters:function(){var t=this._map.getMaxZoom(),e=this.options.maxClusterRadius;this.options.disableClusteringAtZoom&&(t=this.options.disableClusteringAtZoom-1),this._maxZoom=t,this._gridClusters={},this._gridUnclustered={};for(var i=t;i>=0;i--)this._gridClusters[i]=new L.DistanceGrid(e),this._gridUnclustered[i]=new L.DistanceGrid(e);this._topClusterLevel=new L.MarkerCluster(this,-1)},_addLayer:function(t,e){var i,n,s=this._gridClusters,r=this._gridUnclustered;for(this.options.singleMarkerMode&&(t.options.icon=this.options.iconCreateFunction({getChildCount:function(){return 1},getAllChildMarkers:function(){return[t]}}));e>=0;e--){i=this._map.project(t.getLatLng(),e);var o=s[e].getNearObject(i);if(o)return o._addChild(t),t.__parent=o,void 0;if(o=r[e].getNearObject(i)){var a=o.__parent;a&&this._removeLayer(o,!1);var h=new L.MarkerCluster(this,e,o,t);s[e].addObject(h,this._map.project(h._cLatLng,e)),o.__parent=h,t.__parent=h;var _=h;for(n=e-1;n>a._zoom;n--)_=new L.MarkerCluster(this,n,_),s[n].addObject(_,this._map.project(o.getLatLng(),n));for(a._addChild(_),n=e;n>=0&&r[n].removeObject(o,this._map.project(o.getLatLng(),n));n--);return}r[e].addObject(t,i)}this._topClusterLevel._addChild(t),t.__parent=this._topClusterLevel},_enqueue:function(t){this._queue.push(t),this._queueTimeout||(this._queueTimeout=setTimeout(L.bind(this._processQueue,this),300))},_processQueue:function(){for(var t=0;t<this._queue.length;t++)this._queue[t].call(this);this._queue.length=0,clearTimeout(this._queueTimeout),this._queueTimeout=null},_mergeSplitClusters:function(){this._processQueue(),this._zoom<this._map._zoom&&this._currentShownBounds.contains(this._getExpandedVisibleBounds())?(this._animationStart(),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,this._zoom,this._getExpandedVisibleBounds()),this._animationZoomIn(this._zoom,this._map._zoom)):this._zoom>this._map._zoom?(this._animationStart(),this._animationZoomOut(this._zoom,this._map._zoom)):this._moveEnd()},_getExpandedVisibleBounds:function(){if(!this.options.removeOutsideVisibleBounds)return this.getBounds();var t=this._map,e=t.getBounds(),i=e._southWest,n=e._northEast,s=L.Browser.mobile?0:Math.abs(i.lat-n.lat),r=L.Browser.mobile?0:Math.abs(i.lng-n.lng);return new L.LatLngBounds(new L.LatLng(i.lat-s,i.lng-r,!0),new L.LatLng(n.lat+s,n.lng+r,!0))},_animationAddLayerNonAnimated:function(t,e){if(e===t)this._featureGroup.addLayer(t);else if(2===e._childCount){e._addToMap();var i=e.getAllChildMarkers();this._featureGroup.removeLayer(i[0]),this._featureGroup.removeLayer(i[1])}else e._updateIcon()}}),L.MarkerClusterGroup.include(L.DomUtil.TRANSITION?{_animationStart:function(){this._map._mapPane.className+=" leaflet-cluster-anim",this._inZoomAnimation++},_animationEnd:function(){this._map&&(this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim","")),this._inZoomAnimation--,this.fire("animationend")},_animationZoomIn:function(t,e){var i,n=this._getExpandedVisibleBounds(),s=this._featureGroup;this._topClusterLevel._recursively(n,t,0,function(r){var o,a=r._latlng,h=r._markers;for(n.contains(a)||(a=null),r._isSingleParent()&&t+1===e?(s.removeLayer(r),r._recursivelyAddChildrenToMap(null,e,n)):(r.setOpacity(0),r._recursivelyAddChildrenToMap(a,e,n)),i=h.length-1;i>=0;i--)o=h[i],n.contains(o._latlng)||s.removeLayer(o)}),this._forceLayout(),this._topClusterLevel._recursivelyBecomeVisible(n,e),s.eachLayer(function(t){t instanceof L.MarkerCluster||!t._icon||t.setOpacity(1)}),this._topClusterLevel._recursively(n,t,e,function(t){t._recursivelyRestoreChildPositions(e)}),this._enqueue(function(){this._topClusterLevel._recursively(n,t,0,function(t){s.removeLayer(t),t.setOpacity(1)}),this._animationEnd()})},_animationZoomOut:function(t,e){this._animationZoomOutSingle(this._topClusterLevel,t-1,e),this._topClusterLevel._recursivelyAddChildrenToMap(null,e,this._getExpandedVisibleBounds()),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,t,this._getExpandedVisibleBounds())},_animationZoomOutSingle:function(t,e,i){var n=this._getExpandedVisibleBounds();t._recursivelyAnimateChildrenInAndAddSelfToMap(n,e+1,i);var s=this;this._forceLayout(),t._recursivelyBecomeVisible(n,i),this._enqueue(function(){if(1===t._childCount){var r=t._markers[0];r.setLatLng(r.getLatLng()),r.setOpacity(1)}else t._recursively(n,i,0,function(t){t._recursivelyRemoveChildrenFromMap(n,e+1)});s._animationEnd()})},_animationAddLayer:function(t,e){var i=this,n=this._featureGroup;n.addLayer(t),e!==t&&(e._childCount>2?(e._updateIcon(),this._forceLayout(),this._animationStart(),t._setPos(this._map.latLngToLayerPoint(e.getLatLng())),t.setOpacity(0),this._enqueue(function(){n.removeLayer(t),t.setOpacity(1),i._animationEnd()})):(this._forceLayout(),i._animationStart(),i._animationZoomOutSingle(e,this._map.getMaxZoom(),this._map.getZoom())))},_forceLayout:function(){L.Util.falseFn(e.body.offsetWidth)}}:{_animationStart:function(){},_animationZoomIn:function(t,e){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,t),this._topClusterLevel._recursivelyAddChildrenToMap(null,e,this._getExpandedVisibleBounds())},_animationZoomOut:function(t,e){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,t),this._topClusterLevel._recursivelyAddChildrenToMap(null,e,this._getExpandedVisibleBounds())},_animationAddLayer:function(t,e){this._animationAddLayerNonAnimated(t,e)}}),L.markerClusterGroup=function(t){return new L.MarkerClusterGroup(t)},L.MarkerCluster=L.Marker.extend({initialize:function(t,e,i,n){L.Marker.prototype.initialize.call(this,i?i._cLatLng||i.getLatLng():new L.LatLng(0,0),{icon:this}),this._group=t,this._zoom=e,this._markers=[],this._childClusters=[],this._childCount=0,this._iconNeedsUpdate=!0,this._bounds=new L.LatLngBounds,i&&this._addChild(i),n&&this._addChild(n)},getAllChildMarkers:function(t){t=t||[];for(var e=this._childClusters.length-1;e>=0;e--)this._childClusters[e].getAllChildMarkers(t);for(var i=this._markers.length-1;i>=0;i--)t.push(this._markers[i]);return t},getChildCount:function(){return this._childCount},zoomToBounds:function(){for(var t,e=this._childClusters.slice(),i=this._group._map,n=i.getBoundsZoom(this._bounds),s=this._zoom+1,r=i.getZoom();e.length>0&&n>s;){s++;var o=[];for(t=0;t<e.length;t++)o=o.concat(e[t]._childClusters);e=o}n>s?this._group._map.setView(this._latlng,s):r>=n?this._group._map.setView(this._latlng,r+1):this._group._map.fitBounds(this._bounds)},getBounds:function(){var t=new L.LatLngBounds;return t.extend(this._bounds),t},_updateIcon:function(){this._iconNeedsUpdate=!0,this._icon&&this.setIcon(this)},createIcon:function(){return this._iconNeedsUpdate&&(this._iconObj=this._group.options.iconCreateFunction(this),this._iconNeedsUpdate=!1),this._iconObj.createIcon()},createShadow:function(){return this._iconObj.createShadow()},_addChild:function(t,e){this._iconNeedsUpdate=!0,this._expandBounds(t),t instanceof L.MarkerCluster?(e||(this._childClusters.push(t),t.__parent=this),this._childCount+=t._childCount):(e||this._markers.push(t),this._childCount++),this.__parent&&this.__parent._addChild(t,!0)},_expandBounds:function(t){var e,i=t._wLatLng||t._latlng;t instanceof L.MarkerCluster?(this._bounds.extend(t._bounds),e=t._childCount):(this._bounds.extend(i),e=1),this._cLatLng||(this._cLatLng=t._cLatLng||i);var n=this._childCount+e;this._wLatLng?(this._wLatLng.lat=(i.lat*e+this._wLatLng.lat*this._childCount)/n,this._wLatLng.lng=(i.lng*e+this._wLatLng.lng*this._childCount)/n):this._latlng=this._wLatLng=new L.LatLng(i.lat,i.lng)},_addToMap:function(t){t&&(this._backupLatlng=this._latlng,this.setLatLng(t)),this._group._featureGroup.addLayer(this)},_recursivelyAnimateChildrenIn:function(t,e,i){this._recursively(t,0,i-1,function(t){var i,n,s=t._markers;for(i=s.length-1;i>=0;i--)n=s[i],n._icon&&(n._setPos(e),n.setOpacity(0))},function(t){var i,n,s=t._childClusters;for(i=s.length-1;i>=0;i--)n=s[i],n._icon&&(n._setPos(e),n.setOpacity(0))})},_recursivelyAnimateChildrenInAndAddSelfToMap:function(t,e,i){this._recursively(t,i,0,function(n){n._recursivelyAnimateChildrenIn(t,n._group._map.latLngToLayerPoint(n.getLatLng()).round(),e),n._isSingleParent()&&e-1===i?(n.setOpacity(1),n._recursivelyRemoveChildrenFromMap(t,e)):n.setOpacity(0),n._addToMap()})},_recursivelyBecomeVisible:function(t,e){this._recursively(t,0,e,null,function(t){t.setOpacity(1)})},_recursivelyAddChildrenToMap:function(t,e,i){this._recursively(i,-1,e,function(n){if(e!==n._zoom)for(var s=n._markers.length-1;s>=0;s--){var r=n._markers[s];i.contains(r._latlng)&&(t&&(r._backupLatlng=r.getLatLng(),r.setLatLng(t),r.setOpacity&&r.setOpacity(0)),n._group._featureGroup.addLayer(r))}},function(e){e._addToMap(t)})},_recursivelyRestoreChildPositions:function(t){for(var e=this._markers.length-1;e>=0;e--){var i=this._markers[e];i._backupLatlng&&(i.setLatLng(i._backupLatlng),delete i._backupLatlng)}if(t-1===this._zoom)for(var n=this._childClusters.length-1;n>=0;n--)this._childClusters[n]._restorePosition();else for(var s=this._childClusters.length-1;s>=0;s--)this._childClusters[s]._recursivelyRestoreChildPositions(t)},_restorePosition:function(){this._backupLatlng&&(this.setLatLng(this._backupLatlng),delete this._backupLatlng)},_recursivelyRemoveChildrenFromMap:function(t,e,i){var n,s;this._recursively(t,-1,e-1,function(t){for(s=t._markers.length-1;s>=0;s--)n=t._markers[s],i&&i.contains(n._latlng)||(t._group._featureGroup.removeLayer(n),n.setOpacity&&n.setOpacity(1))},function(t){for(s=t._childClusters.length-1;s>=0;s--)n=t._childClusters[s],i&&i.contains(n._latlng)||(t._group._featureGroup.removeLayer(n),n.setOpacity&&n.setOpacity(1))})},_recursively:function(t,e,i,n,s){var r,o,a=this._childClusters,h=this._zoom;if(e>h)for(r=a.length-1;r>=0;r--)o=a[r],t.intersects(o._bounds)&&o._recursively(t,e,i,n,s);else if(n&&n(this),s&&this._zoom===i&&s(this),i>h)for(r=a.length-1;r>=0;r--)o=a[r],t.intersects(o._bounds)&&o._recursively(t,e,i,n,s)},_recalculateBounds:function(){var t,e=this._markers,i=this._childClusters;for(this._bounds=new L.LatLngBounds,delete this._wLatLng,t=e.length-1;t>=0;t--)this._expandBounds(e[t]);for(t=i.length-1;t>=0;t--)this._expandBounds(i[t])},_isSingleParent:function(){return this._childClusters.length>0&&this._childClusters[0]._childCount===this._childCount}}),L.DistanceGrid=function(t){this._cellSize=t,this._sqCellSize=t*t,this._grid={},this._objectPoint={}},L.DistanceGrid.prototype={addObject:function(t,e){var i=this._getCoord(e.x),n=this._getCoord(e.y),s=this._grid,r=s[n]=s[n]||{},o=r[i]=r[i]||[],a=L.Util.stamp(t);this._objectPoint[a]=e,o.push(t)},updateObject:function(t,e){this.removeObject(t),this.addObject(t,e)},removeObject:function(t,e){var i,n,s=this._getCoord(e.x),r=this._getCoord(e.y),o=this._grid,a=o[r]=o[r]||{},h=a[s]=a[s]||[];for(delete this._objectPoint[L.Util.stamp(t)],i=0,n=h.length;n>i;i++)if(h[i]===t)return h.splice(i,1),1===n&&delete a[s],!0},eachObject:function(t,e){var i,n,s,r,o,a,h,_=this._grid;for(i in _){o=_[i];for(n in o)for(a=o[n],s=0,r=a.length;r>s;s++)h=t.call(e,a[s]),h&&(s--,r--)}},getNearObject:function(t){var e,i,n,s,r,o,a,h,_=this._getCoord(t.x),u=this._getCoord(t.y),l=this._objectPoint,d=this._sqCellSize,p=null;for(e=u-1;u+1>=e;e++)if(s=this._grid[e])for(i=_-1;_+1>=i;i++)if(r=s[i])for(n=0,o=r.length;o>n;n++)a=r[n],h=this._sqDist(l[L.Util.stamp(a)],t),d>h&&(d=h,p=a);return p},_getCoord:function(t){return Math.floor(t/this._cellSize)},_sqDist:function(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n}},function(){L.QuickHull={getDistant:function(t,e){var i=e[1].lat-e[0].lat,n=e[0].lng-e[1].lng;return n*(t.lat-e[0].lat)+i*(t.lng-e[0].lng)},findMostDistantPointFromBaseLine:function(t,e){var i,n,s,r=0,o=null,a=[];for(i=e.length-1;i>=0;i--)n=e[i],s=this.getDistant(n,t),s>0&&(a.push(n),s>r&&(r=s,o=n));return{maxPoint:o,newPoints:a}},buildConvexHull:function(t,e){var i=[],n=this.findMostDistantPointFromBaseLine(t,e);return n.maxPoint?(i=i.concat(this.buildConvexHull([t[0],n.maxPoint],n.newPoints)),i=i.concat(this.buildConvexHull([n.maxPoint,t[1]],n.newPoints))):[t[0]]},getConvexHull:function(t){var e,i=!1,n=!1,s=null,r=null;for(e=t.length-1;e>=0;e--){var o=t[e];(i===!1||o.lat>i)&&(s=o,i=o.lat),(n===!1||o.lat<n)&&(r=o,n=o.lat)}var a=[].concat(this.buildConvexHull([r,s],t),this.buildConvexHull([s,r],t));return a}}}(),L.MarkerCluster.include({getConvexHull:function(){var t,e,i=this.getAllChildMarkers(),n=[];for(e=i.length-1;e>=0;e--)t=i[e].getLatLng(),n.push(t);return L.QuickHull.getConvexHull(n)}}),L.MarkerCluster.include({_2PI:2*Math.PI,_circleFootSeparation:25,_circleStartAngle:Math.PI/6,_spiralFootSeparation:28,_spiralLengthStart:11,_spiralLengthFactor:5,_circleSpiralSwitchover:9,spiderfy:function(){if(this._group._spiderfied!==this&&!this._group._inZoomAnimation){var t,e=this.getAllChildMarkers(),i=this._group,n=i._map,s=n.latLngToLayerPoint(this._latlng);this._group._unspiderfy(),this._group._spiderfied=this,e.length>=this._circleSpiralSwitchover?t=this._generatePointsSpiral(e.length,s):(s.y+=10,t=this._generatePointsCircle(e.length,s)),this._animationSpiderfy(e,t)}},unspiderfy:function(t){this._group._inZoomAnimation||(this._animationUnspiderfy(t),this._group._spiderfied=null)},_generatePointsCircle:function(t,e){var i,n,s=this._group.options.spiderfyDistanceMultiplier*this._circleFootSeparation*(2+t),r=s/this._2PI,o=this._2PI/t,a=[];for(a.length=t,i=t-1;i>=0;i--)n=this._circleStartAngle+i*o,a[i]=new L.Point(e.x+r*Math.cos(n),e.y+r*Math.sin(n))._round();return a},_generatePointsSpiral:function(t,e){var i,n=this._group.options.spiderfyDistanceMultiplier*this._spiralLengthStart,s=this._group.options.spiderfyDistanceMultiplier*this._spiralFootSeparation,r=this._group.options.spiderfyDistanceMultiplier*this._spiralLengthFactor,o=0,a=[];for(a.length=t,i=t-1;i>=0;i--)o+=s/n+5e-4*i,a[i]=new L.Point(e.x+n*Math.cos(o),e.y+n*Math.sin(o))._round(),n+=this._2PI*r/o;return a},_noanimationUnspiderfy:function(){var t,e,i=this._group,n=i._map,s=i._featureGroup,r=this.getAllChildMarkers();for(this.setOpacity(1),e=r.length-1;e>=0;e--)t=r[e],s.removeLayer(t),t._preSpiderfyLatlng&&(t.setLatLng(t._preSpiderfyLatlng),delete t._preSpiderfyLatlng),t.setZIndexOffset&&t.setZIndexOffset(0),t._spiderLeg&&(n.removeLayer(t._spiderLeg),delete t._spiderLeg);i._spiderfied=null}}),L.MarkerCluster.include(L.DomUtil.TRANSITION?{SVG_ANIMATION:function(){return e.createElementNS("http://www.w3.org/2000/svg","animate").toString().indexOf("SVGAnimate")>-1}(),_animationSpiderfy:function(t,i){var n,s,r,o,a=this,h=this._group,_=h._map,u=h._featureGroup,l=_.latLngToLayerPoint(this._latlng);for(n=t.length-1;n>=0;n--)s=t[n],s.setOpacity?(s.setZIndexOffset(1e6),s.setOpacity(0),u.addLayer(s),s._setPos(l)):u.addLayer(s);h._forceLayout(),h._animationStart();var d=L.Path.SVG?0:.3,p=L.Path.SVG_NS;for(n=t.length-1;n>=0;n--)if(o=_.layerPointToLatLng(i[n]),s=t[n],s._preSpiderfyLatlng=s._latlng,s.setLatLng(o),s.setOpacity&&s.setOpacity(1),r=new L.Polyline([a._latlng,o],{weight:1.5,color:"#222",opacity:d}),_.addLayer(r),s._spiderLeg=r,L.Path.SVG&&this.SVG_ANIMATION){var c=r._path.getTotalLength();r._path.setAttribute("stroke-dasharray",c+","+c);var m=e.createElementNS(p,"animate");m.setAttribute("attributeName","stroke-dashoffset"),m.setAttribute("begin","indefinite"),m.setAttribute("from",c),m.setAttribute("to",0),m.setAttribute("dur",.25),r._path.appendChild(m),m.beginElement(),m=e.createElementNS(p,"animate"),m.setAttribute("attributeName","stroke-opacity"),m.setAttribute("attributeName","stroke-opacity"),m.setAttribute("begin","indefinite"),m.setAttribute("from",0),m.setAttribute("to",.5),m.setAttribute("dur",.25),r._path.appendChild(m),m.beginElement()}if(a.setOpacity(.3),L.Path.SVG)for(this._group._forceLayout(),n=t.length-1;n>=0;n--)s=t[n]._spiderLeg,s.options.opacity=.5,s._path.setAttribute("stroke-opacity",.5);setTimeout(function(){h._animationEnd(),h.fire("spiderfied")},200)},_animationUnspiderfy:function(t){var e,i,n,s=this._group,r=s._map,o=s._featureGroup,a=t?r._latLngToNewLayerPoint(this._latlng,t.zoom,t.center):r.latLngToLayerPoint(this._latlng),h=this.getAllChildMarkers(),_=L.Path.SVG&&this.SVG_ANIMATION;for(s._animationStart(),this.setOpacity(1),i=h.length-1;i>=0;i--)e=h[i],e._preSpiderfyLatlng&&(e.setLatLng(e._preSpiderfyLatlng),delete e._preSpiderfyLatlng,e.setOpacity?(e._setPos(a),e.setOpacity(0)):o.removeLayer(e),_&&(n=e._spiderLeg._path.childNodes[0],n.setAttribute("to",n.getAttribute("from")),n.setAttribute("from",0),n.beginElement(),n=e._spiderLeg._path.childNodes[1],n.setAttribute("from",.5),n.setAttribute("to",0),n.setAttribute("stroke-opacity",0),n.beginElement(),e._spiderLeg._path.setAttribute("stroke-opacity",0)));setTimeout(function(){var t=0;for(i=h.length-1;i>=0;i--)e=h[i],e._spiderLeg&&t++;for(i=h.length-1;i>=0;i--)e=h[i],e._spiderLeg&&(e.setOpacity&&(e.setOpacity(1),e.setZIndexOffset(0)),t>1&&o.removeLayer(e),r.removeLayer(e._spiderLeg),delete e._spiderLeg);s._animationEnd()},200)}}:{_animationSpiderfy:function(t,e){var i,n,s,r,o=this._group,a=o._map,h=o._featureGroup;for(i=t.length-1;i>=0;i--)r=a.layerPointToLatLng(e[i]),n=t[i],n._preSpiderfyLatlng=n._latlng,n.setLatLng(r),n.setZIndexOffset&&n.setZIndexOffset(1e6),h.addLayer(n),s=new L.Polyline([this._latlng,r],{weight:1.5,color:"#222"}),a.addLayer(s),n._spiderLeg=s;this.setOpacity(.3),o.fire("spiderfied")},_animationUnspiderfy:function(){this._noanimationUnspiderfy()}}),L.MarkerClusterGroup.include({_spiderfied:null,_spiderfierOnAdd:function(){this._map.on("click",this._unspiderfyWrapper,this),this._map.options.zoomAnimation&&this._map.on("zoomstart",this._unspiderfyZoomStart,this),this._map.on("zoomend",this._noanimationUnspiderfy,this),L.Path.SVG&&!L.Browser.touch&&this._map._initPathRoot()},_spiderfierOnRemove:function(){this._map.off("click",this._unspiderfyWrapper,this),this._map.off("zoomstart",this._unspiderfyZoomStart,this),this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._unspiderfy()},_unspiderfyZoomStart:function(){this._map&&this._map.on("zoomanim",this._unspiderfyZoomAnim,this)},_unspiderfyZoomAnim:function(t){L.DomUtil.hasClass(this._map._mapPane,"leaflet-touching")||(this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._unspiderfy(t))},_unspiderfyWrapper:function(){this._unspiderfy()},_unspiderfy:function(t){this._spiderfied&&this._spiderfied.unspiderfy(t)},_noanimationUnspiderfy:function(){this._spiderfied&&this._spiderfied._noanimationUnspiderfy()},_unspiderfyLayer:function(t){t._spiderLeg&&(this._featureGroup.removeLayer(t),t.setOpacity(1),t.setZIndexOffset(0),this._map.removeLayer(t._spiderLeg),delete t._spiderLeg)}})}(window,document);

/***/ },
/* 110 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 111 */,
/* 112 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 113 */,
/* 114 */
/***/ function(module, exports) {

	module.exports = "<div class=\"map\">\n\n    <smt-searchbox ng-show=\"_params.searchBox != undefined\"\n                   filters=\"_filters\"\n                   custom-controls=\"['taxonomies', 'text', 'starts', 'ends']\"\n                   reload=\"reload()\">\n    </smt-searchbox>\n\n    <leaflet defaults=\"defaults\"\n             layers=\"layers\"\n             markers=\"markers\"\n             center=\"center\"\n             bounds=\"bounds\"\n             height=\"480px\"\n             width=\"100%\"\n             class=\"map\"\n             zoom=\"zoom\">\n    </leaflet>\n\n    <div class=\"events\">\n      <div ng-hide=\"hasSomethingSelected()\">\n        <div ng-repeat=\"item in events | visible_on_map:bounds | take:25\" class=\"list-element\">\n          <smt-event type=\"list\"\n                     event=\"item\"\n                     allow-travelplan=\"=\"\n                     book-params=\"=\"\n                     allow-tickets=\"=\">\n          </smt-event>\n        </div>\n        <div ng-repeat=\"item in places | visible_on_map:bounds | take:25\" class=\"list-element\">\n          <smt-place type=\"list\"\n                     place=\"item\"\n                     allow-travelplan=\"=\"\n                     book-params=\"=\"\n                     allow-tickets=\"=\">\n          </smt-place>\n        </div>\n      </div>\n      <div ng-show=\"hasSomethingSelected()\">\n        <div ng-repeat=\"item in eventSelected | visible_on_map:bounds | take:25\" class=\"list-element\">\n          <smt-event type=\"list\"\n                      event=\"item\"\n                      allow-travelplan=\"=\"\n                      book-params=\"=\"\n                      allow-tickets=\"=\">\n          </smt-event>\n        </div>\n        <div ng-repeat=\"item in placeSelected | visible_on_map:bounds | take:25\" class=\"list-element\">\n          <smt-place type=\"list\"\n                      place=\"item\"\n                      allow-travelplan=\"=\"\n                      book-params=\"=\"\n                      allow-tickets=\"=\">\n          </smt-place>\n        </div>\n      </div>\n\n    </div>\n</div>\n\n\n\n";

/***/ },
/* 115 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;