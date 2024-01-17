
function calculateNetSalary() {
// Get user inputs and convert to numbers, defaulting to 0 if not a valid number
const ctc = parseFloat(document.getElementById('ctc').value) || 0;
const basePercentage = parseFloat(document.getElementById('basePercentage').value) || 0;
const hraPercentage = parseFloat(document.getElementById('hraPercentage').value) || 0;
const medicalAllowance = parseFloat(document.getElementById('medicalAllowance').value) || 0;
const conveyanceAllowance = parseFloat(document.getElementById('conveyanceAllowance').value) || 0;
const otherAllowances = parseFloat(document.getElementById('otherAllowances').value) || 0;
const pfPercentage = parseFloat(document.getElementById('pfPercentage').value) || 0;
const esicPercentage = parseFloat(document.getElementById('esic').value) || 0;
const tax = parseFloat(document.getElementById('tax').value) || 0;

const baseSalary = (basePercentage / 100) * ctc;
const hra = (hraPercentage / 100) * baseSalary;
const grossSalary = baseSalary + hra + medicalAllowance + otherAllowances + conveyanceAllowance;
const pf = (pfPercentage / 100) * baseSalary;
const esic = (esicPercentage / 100) * grossSalary;
const netSalary = grossSalary - pf - esic - tax;
    document.getElementById('netSalary').textContent = netSalary.toFixed(2);
}





