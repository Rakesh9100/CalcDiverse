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

    // Set default values for specific variables if they are NaN
    const defaultBasePercentage = isNaN(basePercentage) ? 40 : basePercentage;
    const defaultHraPercentage = isNaN(hraPercentage) ? 40 : hraPercentage;
    const defaultPfPercentage = isNaN(pfPercentage) ? 12 : pfPercentage;
    const defaultEsicPercentage = isNaN(esicPercentage) ? 0.75 : esicPercentage;

    let baseSalary, hra, pf, esic;

    if (!ctc || isNaN(ctc) || !medicalAllowance || isNaN(medicalAllowance) || !conveyanceAllowance || isNaN(conveyanceAllowance) || !otherAllowances || isNaN(otherAllowances) || !tax || isNaN(tax)) {
        alert('Please enter valid values');
        return;
    }

    if (basePercentage) {
        baseSalary = (basePercentage / 100) * ctc;
    } else {
        baseSalary = (defaultBasePercentage / 100) * ctc;
        alert('Default value used for Base Percentage: 40% ');
    }

    if (hraPercentage) {
        hra = (hraPercentage / 100) * baseSalary;
    } else {
        hra = (defaultHraPercentage / 100) * baseSalary;
        alert('Default value used for HRA Percentage: 40% ');
    }

    const grossSalary = baseSalary + hra + medicalAllowance + otherAllowances + conveyanceAllowance;

    if (pfPercentage) {
        pf = (pfPercentage / 100) * baseSalary;
    } else {
        pf = (defaultPfPercentage / 100) * baseSalary;
        alert('Default value used for PF Percentage:12% ');
    }

    if (esicPercentage) {
        esic = (esicPercentage / 100) * grossSalary;
    } else {
        esic = (defaultEsicPercentage / 100) * grossSalary;
        alert('Default value used for ESIC Percentage: 0.75%');
    }

    const netSalary = grossSalary - pf - esic - tax;
    document.getElementById('netSalary').textContent = netSalary.toFixed(2);
}