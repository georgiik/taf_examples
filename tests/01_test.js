const assert = require('assert')

class TestOne {
	testAlwaysPassingTest1() {
		return async () => {
			assert.equal(1, 1, "Equals")
		}
	}
	testAlwaysFailingTest1() {
		return async () => {
			assert.equal(1, 2)
		}
	}
	testAlwaysBrokenTest1() {
		return async () => {
			throw Error('AlwaysBrokenTest')
		}

	}
}

module.exports = TestOne
