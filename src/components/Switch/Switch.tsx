import React from 'react';
import './Switch.scss';

interface SwitchProps {
	theme: 1 | 2 | 3;
	setTheme: (theme: 1 | 2 | 3) => void;
}

function Switch(props: SwitchProps) {
	const {theme, setTheme} = props;

	return (
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
	);
}

export default Switch;
