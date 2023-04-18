const sum = (...number) => {
	return number.reduce((acc, val) => acc + val)
}

console.log(sum(4, 5, 6))