import { useState } from "react";

export default function App() {
  const [totalCost, setTotalCost] = useState(0);
  const [interest, setInterest] = useState(0);
  const [processingFee, setProcessingFee] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [loan, setLoan] = useState(0);

  const handleTotalChange = (e) => {
    e.preventDefault();
    setTotalCost(e.target.value);
  };

  const handleInterestChange = (e) => {
    e.preventDefault();
    setInterest(e.target.value);
  };

  const handleProcessingFeeChange = (e) => {
    e.preventDefault();
    setProcessingFee(e.target.value);
  };

  const handleDownPaymentChange = (e) => {
    e.preventDefault();
    setDownPayment(e.target.value);
  };

  const handleLoanChange = (e) => {
    e.preventDefault();
    setLoan(e.target.value);
  };

  return (
    <div>
      <h1 className="">EMI Calculator</h1>
      <div>
        <h2>Total Cost Of Assets : ₹{totalCost}</h2>
        <input
          type="number"
          min={0}
          value={totalCost}
          className="border border-black"
          onChange={handleTotalChange}
        />
      </div>

      <div>
        <h3>Interest Rate (in %) : {interest}%</h3>
        <input
          type="number"
          min={0}
          max={100}
          value={interest}
          className="border border-black"
          onChange={handleInterestChange}
        />
      </div>

      <div>
        <h3>Processing Fee (in %) : {processingFee}%</h3>
        <input
          type="number"
          min={0}
          max={100}
          value={processingFee}
          className="border border-black"
          onChange={handleProcessingFeeChange}
        />
      </div>

      <div>
        <h3>Down Payment</h3>
        <h3>Total Down Payment : {downPayment}%</h3>
        <input
          type="range"
          min={0}
          max={100}
          value={downPayment}
          className="border border-black"
          onChange={handleDownPaymentChange}
        />
      </div>

      <div>
        <h3>Loan Per Month</h3>
        <h3>Total Loan Per Month : {loan}%</h3>
        <input
          type="range"
          min={0}
          value={loan}
          className="border border-black"
          onChange={handleLoanChange}
        />
      </div>
    </div>
  );
}
