const fromInput = document.getElementById("from");
const toInput = document.getElementById("to");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");

// Conversion factors
const conversionFactors = {
  m: {
    m: 1,
    km: 0.001,
    cm: 100
  },
  km: {
    m: 1000,
    km: 1,
    cm: 100000
  },
  cm: {
    m: 0.01,
    km: 0.00001,
    cm: 1
  }
};

// Convert function
function convert() {
  const fromValue = fromInput.value;
  const fromUnitValue = fromUnit.value;
  const toUnitValue = toUnit.value;

  // Calculate converted value
  const convertedValue =
    (fromValue * conversionFactors[fromUnitValue][toUnitValue]).toFixed(2);

  // Display converted value
  toInput.value = convertedValue;
}

// Add event listener to the convert button
convertBtn.addEventListener("click", convert);
