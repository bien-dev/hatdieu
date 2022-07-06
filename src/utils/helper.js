export const formatPrice = (number) => {
	const newNumber = Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(number / 100)
	return newNumber
}

// create unique values by new Set() method;
export const getTypedValues = (data, type) => {
	let typedValues = data.map((item) => item[type])
	if (type === 'colors') {
		typedValues = typedValues.flat()
	}
	return ['all', ...new Set(typedValues)]
}
