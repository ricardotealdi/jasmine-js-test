var myObject = (function () {
	"use strict";

	function doIt() {
		return calculator.sum(3, 4);
	}

	return {
		doIt : doIt
	};
}());