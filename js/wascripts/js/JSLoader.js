var JSLoader = module["exports"] = function() {

};

JSLoader.RE_FULL_REPLACE = /{{X}}/g;
JSLoader.RE_PATTERN_REPLACE = /{{((?:.?x+.?)+)}}/g;
JSLoader.RE_PATTERN_REPLACE_ITEM = /x/g;
JSLoader.RE_REPLACE_TEST = new RegExp("((" + JSLoader.RE_FULL_REPLACE.source + ")|(" + JSLoader.RE_PATTERN_REPLACE.source + "))");

JSLoader.prototype["do"] = function(root) {
	var i
		, items = (i = root["properties"]) && i["js-load"] || []
		, item
		, jsLoadData
		, itemValue
		, data
	;

	i = items.length || 0;

	while(item = items[--i]) {
		if("getAttribute" in item && (jsLoadData = item.getAttribute("data-js-load-data"))) {
			data = this.decodeReverseValue(jsLoadData);

			if((itemValue = (item["itemValue"])) && JSLoader.RE_REPLACE_TEST.test(itemValue)) {
				item["itemValue"] = this.templateValue(itemValue, data);
			}

			if((itemValue = (item.innerHTML)) && JSLoader.RE_REPLACE_TEST.test(itemValue)) {
				item.innerHTML = this.templateValue(itemValue, data);
			}
		}
	}
};

/**
 * Do reverse. It's mean that for the value "test data" we expect the string "atad tset"
 * @param {string} str
 * @return {Array}
 */
JSLoader.prototype.decodeReverseValue = function(str) {
	return str.split("").reverse();
};

/**
 * @param {string} template
 * @param {Array} value
 * @return {string}
 */
JSLoader.prototype.templateValue = function(template, value) {
	value = value.slice();//create new array

	return (template + "").replace(JSLoader.RE_FULL_REPLACE, value.join("")).replace(JSLoader.RE_PATTERN_REPLACE, function(str, found) {
		return found.replace(JSLoader.RE_PATTERN_REPLACE_ITEM, function() { return value.shift() || "" })
	});
};
