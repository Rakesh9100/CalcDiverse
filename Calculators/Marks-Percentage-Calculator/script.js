function generateMarksInputs() {
    const numSubjects = document.getElementById('numSubjects').value;
    const marksForm = document.getElementById('marksInputs');
    marksForm.innerHTML = ''; // Clear previous inputs

    if (numSubjects > 0) {
        for (let i = 1; i <= numSubjects; i++) {
            const formGroup = document.createElement('div');
            formGroup.className = 'mb-3';
            formGroup.innerHTML = `
                        <label for="subject${i}" class="form-label">Marks for Subject ${i}</label>
                        <input type="number" class="form-control no-spinners" id="subject${i}" placeholder="Enter marks">
                    `;
            marksForm.appendChild(formGroup);
        }
        document.getElementById('marksForm').style.display = 'block';
    } else {
        document.getElementById('marksForm').style.display = 'none';
    }
}

function calculatePercentage() {
    const numSubjects = document.getElementById('numSubjects').value;
    let totalMarks = 0;

    for (let i = 1; i <= numSubjects; i++) {
        const marks = parseFloat(document.getElementById(`subject${i}`).value);
        if (!isNaN(marks)) {
            totalMarks += marks;
        }
    }

    const percentage = totalMarks / numSubjects;
    document.getElementById('result').innerText = `Your percentage is ${percentage.toFixed(2)}%`;
    document.getElementById('resultCard').style.display = 'block';
}
