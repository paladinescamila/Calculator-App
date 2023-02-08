import React, {useState} from 'react';
import calculate from './utils/calculate';
import './App.scss';

function App() {
	// Calculator
	const [expression, setExpression] = useState<string>('');

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

	// Theme
	const [theme, setTheme] = useState<number>(1);

	return (
		<div className={`app-${theme}`}>
			<div className={`content-${theme}`}>
				<header className={`header-${theme}`}>
					<h1>calc</h1>
					<div className={`switch-${theme}`}>
						<ul className={`switch-numbers-${theme}`}>
							<li onClick={() => setTheme(1)}>1</li>
							<li onClick={() => setTheme(2)}>2</li>
							<li onClick={() => setTheme(3)}>3</li>
						</ul>
						<div>
							<p>THEME</p>
							<ul className={`switch-buttons-${theme}`}>
								<li style={{opacity: theme === 1 ? 1 : 0}} onClick={() => setTheme(1)}></li>
								<li style={{opacity: theme === 2 ? 1 : 0}} onClick={() => setTheme(2)}></li>
								<li style={{opacity: theme === 3 ? 1 : 0}} onClick={() => setTheme(3)}></li>
							</ul>
						</div>
					</div>
				</header>
				<p className={`screen-${theme}`}>{expression}</p>
				<div className={`keypad-${theme}`}>
					<button className={`key-${theme}`} onClick={() => pressKey('7')}>
						7
					</button>
					<button className={`key-${theme}`} onClick={() => pressKey('8')}>
						8
					</button>
					<button className={`key-${theme}`} onClick={() => pressKey('9')}>
						9
					</button>
					<button className={`del-key-${theme}`} onClick={() => pressKey('DEL')}>
						DEL
					</button>
					<button className={`key-${theme}`} onClick={() => pressKey('4')}>
						4
					</button>
					<button className={`key-${theme}`} onClick={() => pressKey('5')}>
						5
					</button>
					<button className={`key-${theme}`} onClick={() => pressKey('6')}>
						6
					</button>
					<button className={`key-${theme}`} onClick={() => pressKey('+')}>
						+
					</button>
					<button className={`key-${theme}`} onClick={() => pressKey('1')}>
						1
					</button>
					<button className={`key-${theme}`} onClick={() => pressKey('2')}>
						2
					</button>
					<button className={`key-${theme}`} onClick={() => pressKey('3')}>
						3
					</button>
					<button className={`key-${theme}`} onClick={() => pressKey('-')}>
						-
					</button>
					<button className={`key-${theme}`} onClick={() => pressKey('.')}>
						.
					</button>
					<button className={`key-${theme}`} onClick={() => pressKey('0')}>
						0
					</button>
					<button className={`key-${theme}`} onClick={() => pressKey('/')}>
						/
					</button>
					<button className={`key-${theme}`} onClick={() => pressKey('x')}>
						x
					</button>
					<button className={`reset-key-${theme}`} onClick={() => pressKey('RESET')}>
						RESET
					</button>
					<button className={`equal-key-${theme}`} onClick={() => pressKey('=')}>
						=
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
