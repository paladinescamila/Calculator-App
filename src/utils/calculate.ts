const calculate = (expression: string) => {
	// Separa por sumas
	const sums = expression.split('+');

	// Separa por restas
	const subs = sums.map((item) => item.split('-'));

	// Separa por multiplicaciones
	const mults = subs.map((item) => item.map((item2) => item2.split('x')));

	// Separa por divisiones
	const divs = mults.map((item) => item.map((item2) => item2.map((item3) => item3.split('/'))));

	// Convierte a numeros
	const numbers = divs.map((item) => item.map((item2) => item2.map((item3) => item3.map((item4) => Number(item4)))));

	// Reduce por divisiones
	const divsRes = numbers.map((item) => item.map((item2) => item2.map((item3) => item3.reduce((a, b) => a / b))));

	// Reduce por multiplicaciones
	const multsRes = divsRes.map((item) => item.map((item2) => item2.reduce((a, b) => a * b)));

	// Reduce por restas
	const subsRes = multsRes.map((item) => item.reduce((a, b) => a - b));

	// Reduce por sumas
	const sumsRes = subsRes.reduce((a, b) => a + b);

	return sumsRes;
};

export default calculate;
