describe("myObject", function () {
	var returnedSum = 1;

	beforeEach(function () {
		spyOn(calculator, "sum")
			.andReturn(returnedSum);
	});

	it("should calculate", function () {
		expect(myObject.doIt())
			.toBe(returnedSum);
	});

	it("should use calculator when calculating", function () {
		myObject.doIt();
		
		expect(calculator.sum)
			.toHaveBeenCalledWith(3, 4);
	});
});