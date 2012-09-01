/** @license Copyright 2011-2012, Dmitriy Pakhtinov ( spb.piksel@gmail.com ) and github.com/termi */
/*
 * history API JavaScript Library v3.0.1 beta
 *
 * Support: IE6+, FF3+, Opera 9+, Safari, Chrome
 *
 * http://spb-piksel.ru/
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 * 
 * Forked https://github.com/termi | 19-05-2012
 * Updated to https://github.com/devote/HTML5-History-API/ v3.1.1 beta
 *
 * TODO:
 *  1. Optional es and dom shims for IE < 9
 *  2. first onpopstate after page load fix in Chome and Safary (addEventListener already fixed)
 */

// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @warning_level VERBOSE
// @jscomp_warning missingProperties
// @output_file_name history.js
// @check_types
// ==/ClosureCompiler==

// [[[|||---=== GCC DEFINES START ===---|||]]]
/** @define {boolean} */
var __GCC__SUPPORT_IELT9__ = true;
/** @define {boolean} */
var __GCC__JSON_POLLIFIL__ = false;
/** @define {boolean} */
var __GCC__IELT9_SHIM__ = false;
/** @define {boolean} */
var __GCC__SOME_ECMA_SCRIPT_SHIM__ = false;
/** @define {boolean} */
var __GCC__LIBRARY_INTERNAL_SETTINGS__ = false;
// [[[|||---=== GCC DEFINES END ===---|||]]]
/*
if __GCC__SUPPORT_IELT9__ == TRUE
	@output_file_name = history.ielt9.js
*/

// CONFIG
if(__GCC__LIBRARY_INTERNAL_SETTINGS__) {
	/** @type {string} @conts */
	var HISTORY_JS_ELEMENT_ID = "history_uuid_8vhax7l";
}
/** @type {string} @conts */
var SESSION_STORAGE_KEY = '__hitoryapi__';
// END CONFIG

;(function( global ){
	"use strict";

	//__GCC__IELT9_SHIM__ == true
	/*TODO::
	if(__GCC__IELT9_SHIM__) {
		var _window_addEventListener = global.addEventListener
		  , _Object_defineProperties = Object.defineProperties
		  , _Event = global.Event
		  , _window_dispatchEvent = global.dispatchEvent
		  , eventsList = {
				"onpopstate" : [],
				"onhashchange" : []
			}
		;

		if(!_window_addEventListener)global.addEventListener = function(_type, _handler) {
			_type = "on" + _type;
			global.attachEvent(_type, _handler);
		}
		function(a,b,c,d){a=a||document;d=a[b="on"+b];b=a[b]=function(e){d=d&&d(e=e||a.event);return(c=c&&b(e))?b:d};a=this}
	}*/
	//end __GCC__IELT9_SHIM__ == true

	var
		tmp = global.JSON || {}
		/** Use native "bind" or unsafe bind for service and performance needs
		 * @const
		 * @param {Object} object
		 * @param {...} var_args
		 * @return {Function} */
	  , _unSafeBind = Function.prototype.bind || __GCC__SOME_ECMA_SCRIPT_SHIM__ && function(object, var_args) {
			var __method = this,
				args = _Array_slice.call(arguments, 1);
			return function () {
				return _Function_apply.call(__method, object, args.concat(_Array_slice.call(arguments)));
			}
		}

		/** @const */
  	  , _Array_slice = Array.prototype.slice

		/** @const */
	  , _hasOwnProperty = _unSafeBind.call(Function.prototype.call, Object.prototype.hasOwnProperty)

		// preserve original object of History
	  , windowHistory = global.history || {}

		// obtain a reference to the Location object
	  , windowLocation = global.location

		// Check support HTML5 History API
	  , api = "pushState" in windowHistory

		// If the first event is triggered when the page loads
		// This behavior is obvious for Chrome and Safari
	  , initialState = api && windowHistory.state === void 0

	  , initialFire = windowLocation.href

		// Just a reference to the methods
	  , historyPushState = windowHistory.pushState
	  , historyReplaceState = windowHistory.replaceState

	  , JSONParse = tmp.parse
	  , JSONStringify = tmp.stringify

	  , sessionStorage = global.sessionStorage

		/** if we are in Internet Explorer
		 * @type {number}
		 */
	  , msie = __GCC__SUPPORT_IELT9__ && (/msie (\d+)/i.exec(navigator.userAgent) || [])[1]

		// unique ID of the library needed to run VBScript in IE
	  , libID = ( new Date() ).getTime()

		// counter of created classes in VBScript
	  , VBInc = __GCC__SUPPORT_IELT9__ ? (( !msie || msie > 8 ) ? 0 : 1) : void 0

	  , iframe = __GCC__SUPPORT_IELT9__ ? (msie < 8 ? document.createElement( 'iframe' ) : 0) : void 0

	  , skipHashChange = 0

		// Internal settings for this library
	  , libraryInternalSettings = __GCC__LIBRARY_INTERNAL_SETTINGS__ && (function(config, history_js_el) {
			// parse GET parameters for internal settings.
			if(history_js_el) {
				(history_js_el.src.split( "?" )[1] || "").split('&').reduce(function(result, value){
					var pair = value.split('=');
					result[pair[0] || ""] = pair[1] || "";
					return result
				}, config);
				config["basepath"] = config["basepath"] || "/";
				history_js_el.id = "";//no need any more
			}
			return config;
		}) ({
			"basepath": '/',
			"redirect": 0,
			"type": '/'
		}, document.getElementById(HISTORY_JS_ELEMENT_ID))

	  , RE_PATH_FILE_NAME_REPLACER = /[^\/]+$/g

	  , default_basePath = __GCC__LIBRARY_INTERNAL_SETTINGS__ ? void 0 : location.pathname.split("#")[0].split("?")[0]
	  //, default_basePath = '/'

	/**
		 * function for the preparation of URL-links for further work
		 * link parsing
		 * @param {string=} url
		 * @return {Object}
		 */
	  , normalizeUrl = (function( aElemtnt ) {

			var _href
				, relative
				, special
				, nohash
				, host
				, port
				, pathname
				, RE_PATH_REPLACER = new RegExp( "^" + __GCC__LIBRARY_INTERNAL_SETTINGS__ ? libraryInternalSettings["basepath"] : default_basePath, "i" )
				, RE_NOT_HASH_REPLACER = /^[^#]*/
				, RE_HASH_REPLACER = __GCC__LIBRARY_INTERNAL_SETTINGS__ ? new RegExp( "^#[\/]?(?:" + libraryInternalSettings["type"] + ")?" ) : /^#[\/]?(?:\/)?/
				, RE_PROTOCOL_TEST = /^(?:[a-z]+\:)?\/\//
			;

			return function( href, test ) {

				if ( !href ) {

					href = windowLocation.href;

					if ( !api || test ) {
						// form the absolute link from the hash
						href =
							windowLocation.protocol + "//" +
							windowLocation.host + (__GCC__LIBRARY_INTERNAL_SETTINGS__ ? libraryInternalSettings["basepath"] : href.indexOf("#") != -1 ? '/'/*TODO::default_basePath.replace(RE_PATH_FILE_NAME_REPLACER, "")*/ : default_basePath) +
							href.replace( RE_NOT_HASH_REPLACER, '' ).replace( RE_HASH_REPLACER, "" )
						;
					}
				}
				else if ( !api ) {

					var current = normalizeUrl()
					  , _pathname = current._pathname
					  , _protocol = current._protocol
					  , char_at_0 = href.charAt(0)
					;

					// convert relative link to the absolute
					href = RE_PROTOCOL_TEST.test( href ) ?
						char_at_0 == "/" ? _protocol + href : href
						:
						_protocol + "//" + current._host + (
							char_at_0 == "/" ? href :
								char_at_0 == "?" ? _pathname + href :
									char_at_0 == "#" ? _pathname + current._search + href :
										_pathname.replace( RE_PATH_FILE_NAME_REPLACER, '' ) + href
						)
					;
				}

				// no need to transform what is already converted the last time
				if ( _href !== href ) {

					// parse to part with a browser
					aElemtnt.href = _href = href;

					port = aElemtnt.port;
					host = aElemtnt.host;
					pathname = aElemtnt.pathname;

					// Internet Explorer adds the port number to standard protocols
					if ( ( aElemtnt.protocol === "http:" && port == 80 ) ||
						( aElemtnt.protocol === "https:" && port == 443 ) ) {
						host = aElemtnt.hostname;
						port = "";
					}

					// Internet Explorer removes the slash at the beginning the way, we need to add it back
					pathname = pathname.charAt(0) == "/" ? pathname : "/" + pathname;
					// relative link, no protocol, no host
					relative = pathname + aElemtnt.search + aElemtnt.hash;
					// special links for set to hash-link, if browser not support History API
					nohash = (__GCC__LIBRARY_INTERNAL_SETTINGS__ ? pathname.replace( RE_PATH_REPLACER, sets["type"] ) : pathname) + aElemtnt.search;
					special = nohash + aElemtnt.hash;
				}

				// added first symbol for Closure Compiler to advanced optimization
				return {
					_href: aElemtnt.protocol + "//" + host + relative,
					_protocol: aElemtnt.protocol,
					_host: host,
					_hostname: aElemtnt.hostname || windowLocation.hostname,
					_port: port || windowLocation.port,
					_pathname: pathname,
					_search: aElemtnt.search,
					_hash: aElemtnt.hash,
					_relative: relative,
					_nohash: nohash,
					_special: special
				}
			}
		})( document.createElement("a") )

		// modifiable object of History
	  , History = !VBInc && windowHistory || __GCC__SUPPORT_IELT9__ && {
			// properties to create an object in IE
			"back": windowHistory.back,

			"forward": windowHistory.forward,

			"go": windowHistory.go,

			"pushState": void 0,

			"replaceState": void 0,

			"emulate": !api,

			"toString": function() {
				return "[object History]";
			}
		}

		// Accessors for the object History
	  , HistoryAccessors = {
			"state": {
				get: function() {
					return iframe && iframe["storage"] || historyStorage()[ History.location.href ] || null;
				}
			},

			"length": {
				get: function() {
					return windowHistory.length;
				}
			},

			"location": {
				set: function( val ) {
					global.location = val;
				},
				get: function() {
					return api ? windowLocation : Location;
				}
			}
		}

		// The new Location object to add it to the object of History
	  , Location = {
			"assign": function( url ) {
				windowLocation.assign( api || url.indexOf( "#" ) !== 0 ? url : "#" + normalizeUrl()._nohash + url );
			},

			"reload": windowLocation.reload,

			"replace": function( url ) {
				windowLocation.replace( api || url.indexOf( "#" ) !== 0 ? url : "#" + normalizeUrl()._nohash + url );
			},

			"toString": function() {
				return this.href;
			}
		}

		// Accessors for the object Location
	  , LocationAccessors = {
			"href": {
				set: function( val ) {
					windowLocation.href = val;
				},
				get: function() {
					return normalizeUrl()._href;
				}
			},

			"protocol": {
				set: function( val ) {
					windowLocation.protocol = val;
				},
				get: function() {
					return windowLocation.protocol;
				}
			},

			"host": {
				set: function( val ) {
					windowLocation.host = val;
				},
				get: function() {
					return windowLocation.host;
				}
			},

			"hostname": {
				set: function( val ) {
					windowLocation.hostname = val;
				},
				get: function() {
					return windowLocation.hostname;
				}
			},

			"port": {
				set: function( val ) {
					windowLocation.port = val;
				},
				get: function() {
					return windowLocation.port;
				}
			},

			"pathname": {
				set: function( val ) {
					windowLocation.pathname = val;
				},
				get: function() {
					return normalizeUrl()._pathname;
				}
			},

			"search": {
				set: function( val ) {
					windowLocation.search = val;
				},
				get: function() {
					return normalizeUrl()._search;
				}
			},

			"hash": {
				set: function( val ) {
					var
						hash = ( val.indexOf( "#" ) === 0 ? val : "#" + val )
					  , urlObject = normalizeUrl()
					;

					if ( iframe ) {
						if ( hash != urlObject._hash ) {
							History.pushState( null, null, urlObject._nohash + hash );

							hashChanged({
								oldURL: urlObject._href
							});
						}
					} else {
						windowLocation.hash = "#" + urlObject._nohash + hash;
					}
				},
				get: function() {
					return normalizeUrl()._hash;
				}
			},

			origin: {
				//
			}
		}

		/**
		 * defineProperties for static objects
		 * @param {!Object} obj
		 * @param {!Object} props
		 * @param {boolean=} novb
		 */
	  , createStaticObject = function( obj, props, novb ) {

			var tmp = obj,
				key,
				vb = false;

			try {
				if(Object.defineProperty["ielt8"])throw Error;
				Object.defineProperties(obj, props);
			}
			catch( _e_ ) {
				if(obj.__defineGetter__) {//Safary phink that he has "state" and "location" properties in 'history' object
					for(var prop in props) if(_hasOwnProperty(props, prop)) {
						obj.__defineGetter__(prop, props[prop].get);
						if(props[prop].set)obj.__defineSetter__(prop, props[prop].set);
					}
				}
				if ( novb ) {
					return false;
				}
				if(__GCC__SUPPORT_IELT9__)vb = true;
			}

			if ( __GCC__SUPPORT_IELT9__ && !novb && vb && VBInc ) {

				var
					staticClass = "StaticClass" + libID + VBInc++
				  , parts = [ "Class " + staticClass ]
				;

				// functions for VBScript
				if ( !( "execVB" in global ) ) {
					execScript( 'Function execVB(c) ExecuteGlobal(c) End Function', 'VBScript' );
				}
				if ( !( "VBCVal" in global ) ) {
					execScript( 'Function VBCVal(o,r) If IsObject(o) Then Set r=o Else r=o End If End Function', 'VBScript' );
				}

				for( key in obj ) {
					parts.push("Public [" + key + "]");
				};

				if ( _hasOwnProperty( obj, "toString" ) ) {
					if ( !obj.propertyIsEnumerable( 'toString' ) ) {
						parts.push("Public [toString]");
					}
					props["(toString)"] = {
						get: function() {
							return this.toString.call( this );
						}
					}
				}

				for( key in props ) {
					if ( _hasOwnProperty( props, key ) ) {
						if ( props[ key ].get ) {
							obj["get " + key] = props[ key ].get;
							parts.push(
								"Public [get " + key + "]",
								"Public " + ( key === "(toString)" ? "Default " : "" ) + "Property Get [" + key + "]",
								"Call VBCVal(me.[get " + key + "].call(me),[" + key + "])",
								"End Property"
							);

						}
						if ( props[ key ].set ) {
							obj["set " + key] = props[ key ].set;
							parts.push(
								"Public [set " + key + "]",
								"Public Property Let [" + key + "](v)",
							"Call me.[set " + key + "].call(me,v)",
							"End Property",
								"Public Property Set [" + key + "](v)",
							"Call me.[set " + key + "].call(me,v)",
							"End Property"
							);
						}
					}
				}

				parts.push(
					"End Class",
					"Function " + staticClass + "Factory()",
					"Set " + staticClass + "Factory=New " + staticClass,
					"End Function"
				);

				execVB( parts.join( "\n" ) );

				tmp = global[ staticClass + "Factory" ]();

				for( key in obj ) {
					tmp[ key ] = obj[ key ];
				}
				if ( _hasOwnProperty( obj, "toString" ) ) {
					tmp.toString = obj.toString;
				}
			}// END if(__GCC__SUPPORT_IELT9__)

			return tmp;
		}

		/**
		 * @param {Object=} state
		 */
	  , historyStorage = function( state ) {
			return sessionStorage ? state ? sessionStorage.setItem( SESSION_STORAGE_KEY, JSONStringify( state ) ) :
					JSONParse( sessionStorage.getItem( SESSION_STORAGE_KEY ) ) || {} : {};
		}

	  , fireStateChange = function( type, oldURL, newURL ) {
			var newEvent = new Event(type == 2 ? 'hashchange' : 'popstate');
			newEvent["oldUrl"] = oldURL || "";
			newEvent["newUrl"] = newURL || "";
			newEvent["__history_shim__"] = true;
			if(!api && type != 2 && global.onpopstate)global.onpopstate(newEvent);
			global.dispatchEvent(newEvent);
		}

	  , hashChanged = (function() {

			var
				windowPopState = global.onpopstate || null,
				windowHashChange = global.onhashchange || null,
				popstateFired = 0,
				initialStateHandler = null,
				urlObject = normalizeUrl(),
				RE_GET_HASH_FROM_URL = /^.*?(#|$)/,
				oldURL = urlObject._href,

				fireInitialState = function() {
					if ( initialFire && !( initialFire = 0 ) && urlObject._relative !== (__GCC__LIBRARY_INTERNAL_SETTINGS__ ? libraryInternalSettings["basepath"] : default_basePath) ) {
						clearInterval( initialStateHandler );
						setTimeout( _unSafeBind.call(fireStateChange) , 10);
					}
				},

				change = function( e ) {
					if(e["__history_shim__"])return;

					var urlObject = normalizeUrl();

					if ( skipHashChange ) {
						oldURL = urlObject._href;
						return skipHashChange = 0;
					}

					var
						oldUrl = e.oldURL || oldURL,
						newUrl = oldURL = e.newURL || urlObject._href,
						oldHash = oldUrl.replace( RE_GET_HASH_FROM_URL, "" ),
						newHash = newUrl.replace( RE_GET_HASH_FROM_URL, "" ),
						newEvent
					;

					if ( oldUrl != newUrl && !popstateFired ) {
						// fire popstate
						fireStateChange(
							void 0,
							oldUrl,//TODO:: need oldUrl ?
							newUrl//TODO:: need newUrl ?
						)
					}

					popstateFired = 0;
					initialFire = 0;

					if ( oldHash != newHash ) {
						// fire hashchange
						fireStateChange(2,oldUrl,newUrl)
					}
				}
			;

			global.addEventListener( "hashchange", change );

			function fistPopStateChange_bug(e) {
				// popstate ignore the event when the document is loaded
				if ( initialFire === windowLocation.href ) {
					e.stopImmediatePropagation();
					initialFire = 0;
				}
				global.removeEventListener( "popstate", fistPopStateChange_bug );
			}
			global.addEventListener( "popstate", fistPopStateChange_bug );
			global.addEventListener( "popstate", function() {
				initialFire = 0;
				popstateFired = 1;
			} );

			History = createStaticObject( History, __GCC__SUPPORT_IELT9__ && VBInc ? HistoryAccessors : windowHistory.state === void 0 ? {
				// Safari does not support the built-in object state
				state: HistoryAccessors.state,

				// add a location object inside the object History
				location: HistoryAccessors.location
			} : {
				// for all other browsers that work correctly with the history
				location: HistoryAccessors.location
			});

			Location = createStaticObject( Location, LocationAccessors );

			if ( VBInc ) {
				// override global History object and onhashchange property in window
				execScript( 'Public history, onhashchange', 'VBScript' );
			}

			var succsess = "onpopstate" in global || createStaticObject( global, {
					"onhashchange": {
						get: function() {
							return windowHashChange;
						},
						set: function( val ) {
							windowHashChange = val || null;
						}
					},
					"onpopstate": {
						get: function() {
							return windowPopState;
						},
						set: function( val ) {
							if ( windowPopState = ( val || null ) ) {
								!api && fireInitialState();
							}
						}
					}
				}, true );

			if ( __GCC__SUPPORT_IELT9__ && !succsess && !api ) {
				initialStateHandler = setInterval(function() {
					if ( global.onpopstate ) {
						fireInitialState();
					}
				}, 100);
			}

			if ( __GCC__LIBRARY_INTERNAL_SETTINGS__ && libraryInternalSettings["redirect"] && global.parent.frames.length === 0 ) {

				var
					relative = normalizeUrl(null, true)._relative,
					search = windowLocation.search,
					path = windowLocation.pathname,
					basepath = libraryInternalSettings["basepath"];

				if ( api ) {
					if ( relative != basepath && (new RegExp( "^" + basepath + "$", "i" )).test( path ) ) {
						windowLocation.href = relative;
					}
					if ( !(new RegExp( "^" + basepath, "i" )).test( path ) ) {
						windowLocation.href = path.replace(/^\//, basepath ) + search;
					}
				} else if ( path != basepath ) {
					windowLocation.href = basepath + '#' + path.
						replace( new RegExp( "^" + basepath, "i" ), libraryInternalSettings["type"] ) + search + windowLocation.hash;
				}
			}

			return change;
		})();

	if(__GCC__JSON_POLLIFIL__) {
		//https://gist.github.com/1087317
		if(!JSONStringify)JSONStringify = function(a,b,c){for(b in(c=a==""+{}&&[])&&a)c.push(JSONStringify(b)+":"+JSONStringify(a[b]));return""+a===a?'"'+a+'"':a&&a.map?"["+a.map(JSONStringify)+"]":c?"{"+c+"}":a};

		if(!JSONParse)JSONParse = function( source ) {
			return source ? (new Function( "return " + source ))() : null;
		}
	}

	History.pushState = function( state, title, url, replace ) {

		var
			stateObject = historyStorage(),
			defaultUrlObject = normalizeUrl(),
			currentHref = defaultUrlObject._href,
			urlObject = url && normalizeUrl( url );

		initialFire = 0;
		url = urlObject ? urlObject._href : currentHref;

		if ( replace && stateObject[ currentHref ] ) {
			delete stateObject[ currentHref ];
		}

		if ( ( !api || initialState ) && sessionStorage && state ) {
			stateObject[ url ] = state;
			historyStorage( stateObject );
			state = null;
		}

		if ( historyPushState && historyReplaceState ) {
			if ( replace ) {
				historyReplaceState.call( History, state, title, url );
			} else {
				historyPushState.call( History, state, title, url );
			}
		} else if ( urlObject && urlObject._relative != defaultUrlObject._relative ) {
			skipHashChange = 1;
			if ( replace ) {
				windowLocation.replace( "#" + (__GCC__LIBRARY_INTERNAL_SETTINGS__ ? libraryInternalSettings["type"] : '/') + urlObject._relative );
			} else {
				windowLocation.hash = (__GCC__LIBRARY_INTERNAL_SETTINGS__ ? libraryInternalSettings["type"] : '/') + urlObject._relative;
			}
		}
	};

	History.replaceState = function( state, title, url ) {
		History.pushState( state, title, url, 1 );
	};

	if ( __GCC__SUPPORT_IELT9__ && VBInc ) {
		// replace the original History object in IE
		global.history = History;

		// If IE version 7 or lower to the enable iframe navigation
		(function( cookie, currentHref ) {
			var hashCheckerHandler
			  , checker
			;

			if ( !iframe ) return;

			checker = function() {
				var href = normalizeUrl()._href;
				if ( currentHref != href ) {
					hashChanged({
						oldURL: currentHref,
						newURL: currentHref = href
					});
				}
			};

			// starting interval for check hash
			hashCheckerHandler = setInterval( checker, 100 );

			iframe.src = "javascript:true;";
			iframe = document.documentElement.firstChild.appendChild( iframe ).contentWindow;

			History.pushState = function( state, title, url, replace, lfirst ) {

				var i = iframe.document,
					content,
					urlObject = url && normalizeUrl( url );

				if ( !urlObject /*|| !urlObject._relative//TODO::need this?*/ ) {
					iframe["storage"] = state;
					return;
				}

				if ( !lfirst ) {
					clearInterval( hashCheckerHandler );
				}

				if ( replace ) {
					if ( iframe["lfirst"] ) {
						history.back();
						History.pushState( state, title, urlObject._href, 0, 1 );
					} else {
						iframe["storage"] = state;
						windowLocation.replace( "#" + (__GCC__LIBRARY_INTERNAL_SETTINGS__ ? libraryInternalSettings["type"] : '/') + urlObject._special );
					}
				} else if ( urlObject._href != currentHref || lfirst ) {
					if ( !iframe["lfirst"] ) {
						iframe["lfirst"] = 1;
						History.pushState( iframe["storage"], title, currentHref, 0, 1 );
					}
					content = [ '<script>', 'lfirst=1;', ,'storage=' + JSONStringify( state ) + ';', '</script>' ];
					content[ 2 ] = 'parent.location.hash="' + urlObject._special.replace( /"/g, '\\"' ) + '";';
					i.open(); i.write( content.join("") ); i.close();
				}

				if ( !lfirst ) {
					currentHref = normalizeUrl()._href;
					hashCheckerHandler = setInterval( checker, 100 );
				}
			};

			global.attachEvent( "unload", function() {
				if ( iframe["storage"] ) {
					var state = {};
					state[ normalizeUrl()._href ] = iframe["storage"];
					document.cookie = "_historyAPI=" + escape( JSONStringify( state ) );
				}
				clearInterval( hashCheckerHandler );
			} );

			if ( cookie.length > 1 ) {
				cookie = unescape( cookie.pop().split( ";" ).shift() );
				try {
					iframe["storage"] = JSONParse( cookie )[ normalizeUrl()._href ];
				} catch( _e_ ) {}
			}

		})( document.cookie.split( "_historyAPI=" ), normalizeUrl()._href );
	} //end if(__GCC__SUPPORT_IELT9__)
	else {
		// Add other browsers to emulate variable
		// The object of History, thus, we can learn
		// If the browser has native support for working with history
		global.history["emulate"] = !api;
	}

})( window );
