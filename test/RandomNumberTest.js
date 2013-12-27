var RandomNumber = require('../RandomNumber.js');
var instance = new RandomNumber();

var assertRange = function(test, value) {
	test.ok(0 <= value && value <= 100, 'value "' + value + '" between 0 and 100');
}

exports.toStringValue = function (test) {
	var value = instance.toString();
	assertRange(test, value);

	var random = instance.toString();
	var re = /^First value: (100|\d{1,2}), second value: (100|\d{1,2})$/;
	test.ok(re.test('First value: ' + random + ', second value: ' + random), random + ' match ' + re);

	test.done();
};


exports.range = function (test) {
	var count = 101;
	var fill = new Array(count);
	for(var i = Math.pow(2,16); 0 != i && 0 != count; i--) {
		var value = instance.toString();
		assertRange(test, value);
		if ('undefined' === typeof fill[value]) {
			fill[value] = 1;
			count--;
		}
	}
	test.equals(0, count, 'count is zerro: ' + count);
	test.done();
};