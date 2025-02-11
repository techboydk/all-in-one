document.getElementById("salaryForm").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("function initialized");
  const Commission = document.getElementById("commission_list").value;
  const ResultContainer = document.getElementById("result");
  const payLevel = document.getElementById("payLevel").value;
  const city = document.getElementById("city").value;
  let basicPay = 0;
  let netSalary = 0;
  let hra = 0;
  let da = 0;
  let deductions = 0;
  if (Commission == 7) {
    switch (payLevel) {
      case "1":
        basicPay = 18000;
        break;
      case "2":
        basicPay = 19900;
        break;
      case "3":
        basicPay = 21700;
        break;
      case "4":
        basicPay = 25500;
        break;
      case "5":
        basicPay = 29200;
        break;
      case "6":
        basicPay = 35600;
        break;
      case "7":
        basicPay = 44900;
        break;
      case "8":
        basicPay = 47600;
        break;
      case "9":
        basicPay = 53100;
        break;
      case "10":
        basicPay = 56100;
        break;
      case "11":
        basicPay = 67700;
        break;
      case "12":
        basicPay = 78800;
        break;
      case "13":
        basicPay = 123100;
        break;
      case "13A":
        basicPay = 131100;
        break;
      case "14":
        basicPay = 144200;
        break;
      case "15":
        basicPay = 188200;
        break;
      case "16":
        basicPay = 205400;
        break;
      case "17":
        basicPay = 225000;
        break;
      case "18":
        basicPay = 250000;
        break;
      default:
        alert("Select a valid pay Level");
    }
  } else {
    alert("Select commission from commission Number");
    console.log("select commission from commission Number");
  }
  switch (city) {
    case "X":
      hra = basicPay * 0.3;
      break;
    case "Y":
      hra = basicPay * 0.2;
      break;
    case "Z":
      hra = basicPay * 0.1;
      break;
  }
  da = basicPay * 0.53;
  netSalary = basicPay + hra + da - deductions;
  console.log("Net Salary : ", netSalary.toFixed(2), basicPay);
  document.getElementById("basicPayResult").textContent = basicPay.toFixed(2);
  document.getElementById("hraResult").textContent = hra.toFixed(2);
  document.getElementById("daResult").textContent = da.toFixed(2);
  document.getElementById("netSalary").textContent = netSalary.toFixed(2);
  ResultContainer.style.display = "block";
});
