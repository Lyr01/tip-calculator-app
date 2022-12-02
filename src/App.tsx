import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [bill, setBill] = useState("");
	const [tip, setTip] = useState("");
	const [customTip, setCustomTip] = useState("");
	const [numberOfPeople, setNumberOfPeople] = useState("");
	const [eachTip, setEachTip] = useState("0.00");
	const [totalEachTip, setTotalEachTip] = useState("0.00");

	const handleBill = (e: React.ChangeEvent<HTMLInputElement>) => {
		const regex = /([0-9]*[\.|\,]{0,1}[0-9]{0,2})/s; // regex for 2 decimal , or .
		const twoDecimal = e.target.value.match(regex);
		setBill(String(twoDecimal?.[0]));
	};

	const handleCustomTip = (e: React.ChangeEvent<HTMLInputElement>) => {
		const regex = /([0-9]*[\.|\,]{0,1}[0-9]{0,2})/s; // regex for 2 decimal , or .
		const twoDecimal = e.target.value.match(regex);
		setCustomTip(String(twoDecimal?.[0]));
		setTip("");
	};

	const handleTip = (tip: number) => {
		setTip(String(tip));
		setCustomTip("");
	};

	const handlePeople = (e: React.ChangeEvent<HTMLInputElement>) => {
		const Integer = Number(e.target.value).toFixed(0);
		setNumberOfPeople(Integer);
	};

	// Calculate Tip
	useEffect(() => {
		if (bill && (tip || customTip) && numberOfPeople) {
			const eachTipAmount = (
				(Number(bill) * (Number(tip || customTip) / 100)) /
				Number(numberOfPeople)
			).toFixed(2);
			setEachTip(eachTipAmount);

			const totalEachTipAmount = (
				Number(bill) / Number(numberOfPeople) +
				Number(eachTipAmount)
			).toFixed(2);
			setTotalEachTip(String(totalEachTipAmount));
		}
	}, [bill, tip, numberOfPeople, customTip]);

	const handleReset = () => {
		setBill("");
		setTip("");
		setCustomTip("");
		setNumberOfPeople("");
		setEachTip("0.00");
		setTotalEachTip("0.00");
	};

	return (
		<main className="App">
			<div className="container">
				<div className="left-section">
					<div className="bill">
						<label htmlFor="bill">Bill</label>
						<input
							type="number"
							id="bill"
							placeholder="0"
							onChange={(e) => handleBill(e)}
							value={bill}
						/>
					</div>
					<div className="select-tip">
						<span>Select Tip %</span>
						<button onClick={() => handleTip(5)}>5%</button>
						<button onClick={() => handleTip(10)}>10%</button>
						<button onClick={() => handleTip(15)}>15%</button>
						<button onClick={() => handleTip(25)}>25%</button>
						<button onClick={() => handleTip(50)}>50%</button>
						<input
							type="number"
							placeholder="Custom"
							onChange={(e) => {
								handleCustomTip(e);
							}}
							value={customTip}
						/>
					</div>
					<div className="number-of-peoples">
						<label htmlFor="number-of-people">Number of People</label>
						<input
							type="number"
							id="number-of-people"
							placeholder="0"
							min={0}
							step={1}
							onChange={(e) => {
								handlePeople(e);
							}}
							value={numberOfPeople}
						/>
					</div>
				</div>
				<div className="right-section">
					<div>
						<span>
							Tip Amount <small>/ person</small>
						</span>
						<h1>${eachTip}</h1>
					</div>
					<div>
						<span>
							Total <small>/ person</small>
						</span>
						<h1>${totalEachTip}</h1>
					</div>
					<button onClick={handleReset}>Reset</button>
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
