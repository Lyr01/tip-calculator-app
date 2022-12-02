import { useEffect, useState } from "react";
import "./App.css";

import Logo from "./images/logo.svg";

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
			<img src={Logo} alt="logo" />
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
					<label>Select Tip %</label>
					<div className="select-tip">
						<button
							className={tip === "5" ? "active" : ""}
							onClick={() => handleTip(5)}
						>
							5%
						</button>
						<button
							className={tip === "10" ? "active" : ""}
							onClick={() => handleTip(10)}
						>
							10%
						</button>
						<button
							className={tip === "15" ? "active" : ""}
							onClick={() => handleTip(15)}
						>
							15%
						</button>
						<button
							className={tip === "25" ? "active" : ""}
							onClick={() => handleTip(25)}
						>
							25%
						</button>
						<button
							className={tip === "50" ? "active" : ""}
							onClick={() => handleTip(50)}
						>
							50%
						</button>
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
						<div>
							<label htmlFor="number-of-people">Number of People</label>
							<span
								className="error"
								style={{
									visibility:
										bill && (tip || customTip) && numberOfPeople == "0"
											? "visible"
											: "hidden",
								}}
							>
								Can't be zero
							</span>
						</div>
						<input
							type="number"
							className={
								bill && (tip || customTip) && numberOfPeople == "0"
									? "input-error"
									: ""
							}
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
							Tip Amount <br />
							<small>/ person</small>
						</span>
						<h1>${numberOfPeople ? eachTip : "0.00"}</h1>
					</div>
					<div>
						<span>
							Total <br />
							<small>/ person</small>
						</span>
						<h1>${numberOfPeople ? totalEachTip : "0.00"}</h1>
					</div>
					<button className="btn-reset" onClick={handleReset}>
						Reset
					</button>
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
