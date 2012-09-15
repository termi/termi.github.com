// friendly console
// http://habrahabr.ru/blogs/javascript/116852/
// https://github.com/theshock/console-cap/blob/master/console.js
// 21.02.2012 Update with CHANGES!!!
(function (global, console) {
	function functionReturnFirstParam(a){return a}
	var _unsafe_Function_bind_ = Function.prototype.bind || function(object, var_args) {
		var __method = this,
			args = Array.prototype.slice_.call(arguments, 1);
		return function () {
			return __method.apply(object, args.concat(Array.prototype.slice_.call(arguments)));
		}
	};

	var i,
		methods = ['assert','count','debug','dir','dirxml','error','group','groupCollapsed','groupEnd','info','log','markTimeline','profile','profileEnd','table','time','timeEnd','trace','warn'],
		empty   = {},
		timeCounters;

	for (i = methods.length; i--;) empty[methods[i]] = functionReturnFirstParam;

	if (console) {

		if (!console.time) {
			timeCounters = {};

			console.time = function(name, reset){
				if (name) {
					var time = +new Date, key = "KEY" + name.toString();
					if (reset || !timeCounters[key]) timeCounters[key] = time;
				}
			};

			console.timeEnd = function(name){
				var diff,
					time = +new Date,
					key = "KEY" + name.toString(),
					timeCounter = timeCounters[key];

				if (timeCounter) {
					diff  = time - timeCounter;
					console.info( name + ": " + diff + "ms" );
					delete timeCounters[key];
				}
				return diff;
			};
		}

		for (i = methods.length; i--;) {
			console[methods[i]] = methods[i] in console ?
				_unsafe_Function_bind_.call(console[methods[i]], console) :
				functionReturnFirstParam;
		}
		console.disable = function () { global.console = empty;   };
		empty.enable  = function () { global.console = console; };

		empty.disable = console.enable = functionReturnFirstParam;

	} else {
		console = global.console = empty;
		console.disable = console.enable = functionReturnFirstParam;
	}

	methods = void 0;

})( window, typeof console === 'undefined' ? null : console );
