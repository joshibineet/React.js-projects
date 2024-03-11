import React, { useState } from "react";

const App = () => {
  // State variables
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  // Calculate BMI and set message
  const calcBmi = (e) => {
    e.preventDefault(); // Prevent form submission
    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
      return;
    }

    const bmiValue = (weight / (height * height)) * 703;
    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 25) {
      setMessage("You are underweight");
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setMessage("You are Healthy");
    } else {
      setMessage("You are overweight");
    }
  };

  // Reload the page
  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 h-[450px] shadow-2xl bg-slate-200 rounded-2xl ">
        <div className="container mx-auto">
          <h2 className="text-md font-bold mb-4 text-center mt-8">
            BMI Calculator
          </h2>
          <form onSubmit={calcBmi}>
            <div className="mb-4">
              <label className="block mb-2 ml-10">Weight (lbs)</label>
              <input
                type="number"
                className="border p-2 w-80 rounded-md ml-9 border-black"
                placeholder="Enter Weight value"
                value={weight}
                onChange={(e) => setWeight(parseFloat(e.target.value))}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 ml-10">Height (in)</label>
              <input
                type="number"
                className="border p-2 w-80 rounded-md ml-9 border-black"
                placeholder="Enter Height value"
                value={height}
                onChange={(e) => setHeight(parseFloat(e.target.value))}
              />
            </div>
            <div className="flex flex-col gap-2 w-80 ml-9">
              <button
                className="bg-blue-500 hover:bg-gray-500 text-white font-bold p-2 rounded "
                type="submit"
              >
                Submit
              </button>
              <button
                className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 font-bold  p-2 rounded"
                onClick={reload}
                type="button"
              >
                Reload
              </button>
            </div>
          </form>
          <div className="mt-4 flex flex-col justify-center items-center">
            <h3 className="font-bold">Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
