const assert = require('assert')

class TestTwo {
	testAlwaysPassingTest2(testProperties) {
		testProperties.severity = 'Blocker'
		return async () => {
			assert.equal(1, 1, "Equals")
		}
	}
	testAlwaysFailingTest2(testProperties) {
		testProperties.severity = 'Major'
		return async () => {
			assert.equal(1, 2)
		}
	}
	testAlwaysBrokenTest2(testProperties) {
		testProperties.severity = 'Minor'
		return async () => {
			throw Error('AlwaysBrokenTest')
		}
	}
}

module.exports = TestTwo
