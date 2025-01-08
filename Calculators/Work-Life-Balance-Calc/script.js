// script.js
document.getElementById('calculate').addEventListener('click', () => {
    const work = parseFloat(document.getElementById('work').value) || 0;
    const personal = parseFloat(document.getElementById('personal').value) || 0;
    const leisure = parseFloat(document.getElementById('leisure').value) || 0;
  
    const totalHours = work + personal + leisure;
    if(totalHours > 24){
        alert("Enter valid time");
        return;
    }
    const balanceScore = ((personal + leisure) / 24).toFixed(2);
  
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <p>Total Hours: ${totalHours} / 24</p>
      <p>Work-Life Balance Score: ${balanceScore}</p>
      <p>${balanceScore >= 0.5 ? 'Good Balance!' : 'You need more personal/leisure time.'}</p>
    `;
  });
  

  