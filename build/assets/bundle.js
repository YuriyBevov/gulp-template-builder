(function (factory) {
	typeof define === 'function' && define.amd ? define('entry', factory) :
	factory();
}((function () { 'use strict';

	const test = 'test const';

	console.log('hello from module');
	console.log(test);

	console.log('TEST2');

})));
//# sourceMappingURL=bundle.js.map
