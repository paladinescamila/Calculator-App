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
		if (/[0-9]/.test(key)) setExpression(expression + key);
		else if (/[+x/-]/.test(key)) setExpression(expression + key);
		else if (key === '.') setExpression(expression + key);
		else if (key === 'DEL') setExpression(expression.slice(0, -1));
		else if (key === 'RESET') setExpression('');
		else if (key === '=') {
			const result = calculate(expression);

			if (!isNaN(result)) setExpression(result.toString());
			else setExpression('Syntax Error');
		}
	};

	return (
		<div className={`keypad-${theme}`}>
			{keys.map((key, index) =>
				key === 'DEL' ? (
					<button className={`del-key-${theme}`} onClick={() => pressKey('DEL')} key='DEL'>
						DEL
					</button>
				) : key === 'RESET' ? (
					<button className={`reset-key-${theme}`} onClick={() => pressKey('RESET')} key='RESET'>
						RESET
					</button>
				) : key === '=' ? (
					<button className={`equal-key-${theme}`} onClick={() => pressKey('=')} key='='>
						=
					</button>
				) : (
					<button className={`key-${theme}`} onClick={() => pressKey(key as Key)} key={index}>
						{key}
					</button>
				)
			)}
		</div>
	);
}

export default Keypad;
