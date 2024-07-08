function calculateBudget() {
  const totalBudget = parseFloat(document.getElementById('total-budget').value);
  const venue = parseFloat(document.getElementById('venue').value);
  const catering = parseFloat(document.getElementById('catering').value);
  const photography = parseFloat(document.getElementById('photography').value);
  const decor = parseFloat(document.getElementById('decor').value);
  const music = parseFloat(document.getElementById('music').value);
  const attire = parseFloat(document.getElementById('attire').value);
  const other = parseFloat(document.getElementById('other').value);

  const totalExpenses = venue + catering + photography + decor + music + attire + other;
  const remainingBudget = totalBudget - totalExpenses;

  document.getElementById('total-expenses').textContent = totalExpenses.toFixed(2);
  document.getElementById('remaining-budget').textContent = remainingBudget.toFixed(2);

  document.getElementById('result').style.display = 'block';
}
