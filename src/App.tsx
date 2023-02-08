import React from 'react';
import './App.scss';

function App() {
	const expression = '1+2';
	return (
		<div className='app'>
			<div className='content'>
				<header className='header'>
					<h1>calc</h1>
					<div className='theme-selector'>
						<p>THEME</p>
						<div className='switch'>
							<ul className='switch-numbers'>
								<li>1</li>
								<li>2</li>
								<li>3</li>
							</ul>
							<ul className='switch-buttons'>
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
				<p className='expression-zone'>{expression}</p>
				<div className='buttons-zone'>
					<button>7</button>
					<button>8</button>
					<button>9</button>
					<button className='del-button'>DEL</button>
					<button>4</button>
					<button>5</button>
					<button>6</button>
					<button>+</button>
					<button>1</button>
					<button>2</button>
					<button>3</button>
					<button>-</button>
					<button>.</button>
					<button>0</button>
					<button>/</button>
					<button>x</button>
					<button className='reset-button'>RESET</button>
					<button className='equal-button'>=</button>
				</div>
			</div>
		</div>
	);
}

export default App;
