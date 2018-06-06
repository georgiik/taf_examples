const assert = require('assert')

class TestThree {
	testAlwaysPassingTest3(testProperties) {
		testProperties.severity = 'Blocker'
		testProperties.withContext = true
		return async (testContext) => {
			const {value} = testContext
			assert.equal(value, 1)
		}
	}
	testAlwaysFailingTest3(testProperties) {
		testProperties.severity = 'Major'
		testProperties.withContext = true
		return async (testContext) => {
			const {value} = testContext
			assert.equal(value, 2)
		}
	}
}

module.exports = TestThree
