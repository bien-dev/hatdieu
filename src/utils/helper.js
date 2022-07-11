export const formatPrice = (number) => {
	const newNumber = Intl.NumberFormat('it-IT', {
		style: 'currency',
		currency: 'VND',
	}).format(number)
	return newNumber
}

// create unique values by new Set() method;
export const getTypedValues = (data, type) => {
	let typedValues = data.map((item) => item[type])
	return ['tất cả', ...new Set(typedValues)]
}
