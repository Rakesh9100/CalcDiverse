function calculateRisk() {
    const getInputValue = (id) => parseInt(document.getElementById(id).value);

    const age = getInputValue('age');
    const horizon = getInputValue('horizon');
    const knowledge = getInputValue('knowledge');
    const experience = getInputValue('experience');

    if ([age, horizon, knowledge, experience].some(isNaN)) {
        alert("Please enter valid values for all fields.");
        return;
    }

    const calculateWeightedAverage = (values, weights) => {
        const sum = values.reduce((acc, value, index) => acc + value * weights[index], 0);
        const weightSum = weights.reduce((acc, weight) => acc + weight, 0);
        return sum / weightSum;
    };

    const weights = [0.5, 0.5]; // Equal weights for knowledge and experience

    const riskScore = calculateWeightedAverage([knowledge, experience], weights);

    const mapToRiskScale = (value) => Math.min(10, Math.max(1, Math.ceil(value)));

    const riskScale = mapToRiskScale(riskScore);

    const riskCategories = {
        1: 'Low Risk Tolerance',
        2: 'Low Risk Tolerance',
        3: 'Low Risk Tolerance',
        4: 'Medium Risk Tolerance',
        5: 'Medium Risk Tolerance',
        6: 'Medium Risk Tolerance',
        7: 'Medium Risk Tolerance',
        8: 'High Risk Tolerance',
        9: 'High Risk Tolerance',
        10: 'High Risk Tolerance'
    };

    const riskLevel = riskCategories[riskScale];

    document.getElementById('result').innerHTML = `<p>Your investment risk tolerance is: <strong>${riskLevel} (${riskScale}/10)</strong></p>`;
}