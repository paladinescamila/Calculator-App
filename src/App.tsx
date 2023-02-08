import React, {useState} from 'react';
import './styles/App.scss';

import Switch from './components/Switch/Switch';
import Keypad from './components/Keypad/Keypad';

function App() {
	const [expression, setExpression] = useState<string>('0');
	const [theme, setTheme] = useState<1 | 2 | 3>(1);

	return (
		<div className={`app-${theme}`}>
			<div className={`content-${theme}`}>
				<header className={`header-${theme}`}>
					<h1>calc</h1>
					<Switch theme={theme} setTheme={setTheme} />
				</header>
				<input className={`screen-${theme}`} value={expression} disabled></input>
				<Keypad theme={theme} expression={expression} setExpression={setExpression} />
			</div>
		</div>
	);
}

export default App;
