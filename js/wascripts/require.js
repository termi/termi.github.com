/*
* Temporary :) load all /jswascripts/js/ due I don't have enough time to include something like AMD or browserfy
* */
;(function(global){
	var libs = {}
		, xhr = new XMLHttpRequest()
		, func = function(){}
		, createLib = function(libName, libText) {
			libText = new Function("exportObject", "exportName", "(function(){var defExp=Math.random();module={exports:defExp};" + libText + ";if(module.exports!=defExp)exportObject[exportName]=module.exports})();");
			try{libText(libs, libName)}catch(_e_){}
		}
		;

	global["require"] = function(libName) {
		return libs[libName];
	};

	[
		"JSLoader",
		"DelegateListener"
	].forEach(function(libName) {
		func = (function(src) {
			var nextFunc = this;

			xhr.open("GET", src, false);
			xhr.timeout = 1e5;//TODO:: if ontimeout -> try again later
			xhr.ontimeout = xhr.onerror = xhr.onabort = nextFunc;
			xhr.onloadend = function() {
				var text;
				try{ text = this.responseText } catch(_e_){}
				if(text)createLib(libName, text);
				nextFunc();
			};
		}).bind(func, "/js/wascripts/js/" + libName + ".js");
	});
	func();
})(window);
