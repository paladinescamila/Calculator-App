const calculate = (expression: string) => {
	// Separates by plus
	const sums = expression.split('+');

	// Separates by minus
	const subs = sums.map((item) => item.split('-'));

	// Separates by multiplication
	const mults = subs.map((item) => item.map((item2) => item2.split('x')));

	// Separates by division
	const divs = mults.map((item) => item.map((item2) => item2.map((item3) => item3.split('/'))));

	// Converts to numbers
	const numbers = divs.map((item) => item.map((item2) => item2.map((item3) => item3.map((item4) => Number(item4)))));

	// Reduces by division
	const divsRes = numbers.map((item) => item.map((item2) => item2.map((item3) => item3.reduce((a, b) => a / b))));

	// Reduces by multiplication
	const multsRes = divsRes.map((item) => item.map((item2) => item2.reduce((a, b) => a * b)));

	// Reduces by subtraction
	const subsRes = multsRes.map((item) => item.reduce((a, b) => a - b));

	// Reduces by addition
	const sumsRes = subsRes.reduce((a, b) => a + b);

	return sumsRes;
};

export default calculate;
