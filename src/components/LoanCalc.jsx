import React, { useState } from 'react';
import { Text } from '@chakra-ui/react';

function LoanCalculator() {
  const [amount, setAmount] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [interest, setInterest] = useState('');
  const [years, setYears] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');

  const calculateLoan = () => {
    const loanAmount = parseFloat(amount) - parseFloat(downPayment);
    const interestRate = parseFloat(interest) / 100 / 12;
    const loanYears = parseFloat(years) * 12;

    const monthlyPayment = (loanAmount * interestRate * Math.pow(1 + interestRate, loanYears)) / (Math.pow(1 + interestRate, loanYears) - 1);

    // Format the monthly payment amount to Indian Rupees (INR)
    const formattedMonthlyPayment = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(monthlyPayment.toFixed(2));

    setMonthlyPayment(formattedMonthlyPayment);
  };

  return (
    <div className="flex flex-col justify-center items-center  p-4">
      <h1 className="text-5xl font-bold leading-[80px] text-center mt-[-100px] mr-[10px]">
        <Text className="mb-[60px]" bgClip="text" bgGradient="linear(to-r, #1e3c72, #2a5298, #3b5998)">Car Loan Calculator</Text>
      </h1>

    
<div href="#" class="block w-[600px]  h-[590px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mt-[-20px]">
 <div className="flex flex-col justify-center items-center">

 <label htmlFor="amount" className="text-lg font-bold">Car Price (₹):</label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="bg-gray-50 mt-2 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
        placeholder="Enter Car Price"
      />

      <label htmlFor="downPayment" className="text-lg font-bold">Down Payment (₹):</label>
      <input
        type="number"
        id="downPayment"
        value={downPayment}
        onChange={(e) => setDownPayment(e.target.value)}
        className="bg-gray-50 mt-2 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        placeholder="Enter Down Payment"
      />

      <label htmlFor="interest" className="text-lg font-bold">Annual Interest Rate (%):</label>
      <input
        type="number"
        id="interest"
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
        className="bg-gray-50 mt-2 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
        placeholder="Enter Annual Interest Rate"
      />

      <label htmlFor="years" className="text-lg font-bold">Loan Term (Years):</label>
      <input
        type="number"
        id="years"
        value={years}
        onChange={(e) => setYears(e.target.value)}
        className="bg-gray-50 mt-2 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
        placeholder="Enter Loan Term in Years"
      />

      <button
        type="button"
        className="text-white bg-gradient-to-r my-10 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-4"
        onClick={calculateLoan}
      >
        Calculate Loan Amount
      </button>

      <h2 className="text-xl font-bold">Monthly Payment:</h2>
      <p className="text-lg">{monthlyPayment}</p>
 </div>


</div>


   
    </div>
  );
}

export default LoanCalculator;
