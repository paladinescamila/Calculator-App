import React from 'react';
import './Keypad.scss';
import calculate from '../../utils/calculate';

interface KeypadProps {
	theme: 1 | 2 | 3;
	expression: string;
	setExpression: (expression: string) => void;
}

function Keypad(props: KeypadProps) {
	const keys = ['7', '8', '9', 'DEL', '4', '5', '6', '+', '1', '2', '3', '-', '.', '0', '/', 'x', 'RESET', '='];
	const {theme, expression, setExpression} = props;

	const pressKey = (key: Key) => {
		// Key press animation
		const keyElement = document.getElementById(key);

		if (keyElement) {
			keyElement.style.transform = 'translateY(4px)';
			keyElement.style.transition = 'transform 0.1s ease-in-out, border-bottom-width 0.1s ease-in-out';
			keyElement.style.borderBottomWidth = '0';
			setTimeout(() => {
				keyElement.style.transform = 'translateY(0)';
				keyElement.style.transition = 'transform 0.1s ease-in-out, border-bottom-width 0.1s ease-in-out';
				keyElement.style.borderBottomWidth = '4px';
			}, 100);
		}

		// Key press logic
		let newExpression = expression;

		if (expression === 'Syntax Error') newExpression = '';
		else if (expression === 'Infinity') newExpression = '';
		else if (expression === '0') newExpression = '';

		if (/[0-9]/.test(key)) newExpression += key;
		else if (/[+x/-]/.test(key)) newExpression += key;
		else if (key === '.') newExpression += key;
		else if (key === 'DEL') newExpression = newExpression.slice(0, -1) || '0';
		else if (key === 'RESET') newExpression = '0';
		else if (key === '=') {
			const result = calculate(newExpression);

			if (isNaN(result)) newExpression = 'Syntax Error';
			else {
				if (result.toString().length > 14) newExpression = result.toExponential(7);
				else newExpression = result.toString();
			}
		}

		setExpression(newExpression);
	};

	return (
		<div className={`keypad-${theme}`}>
			{keys.map((key, index) =>
				key === 'DEL' ? (
					<button className={`del-key-${theme}`} onClick={() => pressKey('DEL')} key='DEL' id='DEL'>
						DEL
					</button>
				) : key === 'RESET' ? (
					<button className={`reset-key-${theme}`} onClick={() => pressKey('RESET')} key='RESET' id='RESET'>
						RESET
					</button>
				) : key === '=' ? (
					<button className={`equal-key-${theme}`} onClick={() => pressKey('=')} key='=' id='='>
						=
					</button>
				) : (
					<button className={`key-${theme}`} onClick={() => pressKey(key as Key)} key={index} id={key}>
						{key}
					</button>
				)
			)}
		</div>
	);
}

export default Keypad;
