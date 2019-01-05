const { formatName } = require('../../utils/helpers');

describe('helpers.js:', () => {
	
	describe('formatName(name):', () => {
		let result1 = formatName('Bomdi'),
			result2 = formatName('bomdi'),
			result3 = formatName(),
			result4 = formatName('bomdi zane c');

		it('should return "Bomdi" when given "Bomdi"', () => {
			expect(result1).toBeDefined();
			expect(result1).toBe('Bomdi');
		});
		
		it('should return "Bomdi" when given "bomdi"', () => {
			expect(result2).toBeDefined();
			expect(result2).toBe('Bomdi');
		});
		
		it('should return empty string if invoked with no parameters', () => {
			expect(result3).toBeDefined();
			expect(result3).toBe('');
		});
		
		it('should return "Bomdi Zane C" when given "bomdi zane c"', () => {
			expect(result4).toBeDefined();
			expect(result4).toBe('Bomdi Zane C');
		});
		
		it('should throw error if name is not a string', () => {
			expect(() => formatName(10)).toThrow();
		});		
	});

});
