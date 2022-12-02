import "./App.css";

function App() {
	return (
		<main className="App">
			<div className="container">
				<div className="left-section">
					<div className="bill">
						<label htmlFor="bill">Bill</label>
						<input type="number" id="bill" placeholder="0" />
					</div>
					<div className="select-tip">
						<span>Select Tip %</span>
						<button>5%</button>
						<button>10%</button>
						<button>15%</button>
						<button>25%</button>
						<button>50%</button>
						<input type="number" placeholder="Custom" />
					</div>
					<div className="number-of-peoples">
						<label htmlFor="number-of-people">Number of People</label>
						<input type="number" id="number-of-people" placeholder="0" />
					</div>
				</div>
				<div className="right-section">
					<div>
						<span>
							Tip Amount <small>/ person</small>
						</span>
						<h1>$0.00</h1>
					</div>
					<div>
						<span>
							Total <small>/ person</small>
						</span>
						<h1>$0.00</h1>
					</div>
					<button>Reset</button>
				</div>
			</div>

			{/* <div className="attribution">
				Challenge by{" "}
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
					Frontend Mentor
				</a>
				. Coded by <a href="#">Your Name Here</a>.
			</div> */}
		</main>
	);
}

export default App;
