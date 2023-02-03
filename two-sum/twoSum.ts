function twoSum(nums: number[], target: number[]): number[] {
	const map: Map<number, number> = new Map();

	for (let i = 0; i < nums.length; i++) {
		let diff = target - nums[i];

		if (map.get(diff) !== undefined) {
		       return [map.get(diff), i];
		}
 		
		map.set(nums[i], i);
	}

	return [];
}	
