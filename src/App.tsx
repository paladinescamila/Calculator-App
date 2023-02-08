import React from 'react';
import './App.scss';

function App() {
	const expression = '1+2';
	const theme = 1;

	return (
		<div className={`app-${theme}`}>
			<div className={`content-${theme}`}>
				<header className={`header-${theme}`}>
					<h1>calc</h1>
					<div className={`theme-selector-${theme}`}>
						<p>THEME</p>
						<div className={`switch-${theme}`}>
							<ul className={`switch-numbers-${theme}`}>
								<li>1</li>
								<li>2</li>
								<li>3</li>
							</ul>
							<ul className={`switch-buttons-${theme}`}>
								<li>
									<button></button>
								</li>
								<li>
									<button></button>
								</li>
								<li>
									<button></button>
								</li>
							</ul>
						</div>
					</div>
				</header>
				<p className={`screen-${theme}`}>{expression}</p>
				<div className={`keypad-${theme}`}>
					<button className={`key-${theme}`}>7</button>
					<button className={`key-${theme}`}>8</button>
					<button className={`key-${theme}`}>9</button>
					<button className={`del-key-${theme}`}>DEL</button>
					<button className={`key-${theme}`}>4</button>
					<button className={`key-${theme}`}>5</button>
					<button className={`key-${theme}`}>6</button>
					<button>+</button>
					<button className={`key-${theme}`}>1</button>
					<button className={`key-${theme}`}>2</button>
					<button className={`key-${theme}`}>3</button>
					<button>-</button>
					<button>.</button>
					<button className={`key-${theme}`}>0</button>
					<button>/</button>
					<button>x</button>
					<button className={`reset-key-${theme}`}>RESET</button>
					<button className={`equal-key-${theme}`}>=</button>
				</div>
			</div>
		</div>
	);
}

export default App;
