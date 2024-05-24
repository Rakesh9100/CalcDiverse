const techniqueDescriptions = {
    "Pomodoro-Technique": {
        description: "The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. It uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks.",
        parameters: `
            <label for="pomodoro-sessions">Number of Pomodoro Sessions per Day:</label>
            <input type="number" id="pomodoro-sessions" min="1" max="16">
            <label for="pomodoro-length">Length of Each Session (minutes):</label>
            <input type="number" id="pomodoro-length" min="15" max="60">
        `,
        recommendations: `
            <h3>Recommendations for Pomodoro Technique:</h3>
            <ul>
                <li>Use a timer to strictly adhere to work and break intervals.</li>
                <li>During breaks, step away from your workspace to refresh.</li>
                <li>Set daily or weekly goals for the number of Pomodoros you aim to complete.</li>
                <li>Track your sessions to identify patterns and areas for improvement.</li>
            </ul>
        `
    },
    "Time-blocking": {
        description: "Time Blocking is a time management method that divides your day into blocks of time. Each block is dedicated to accomplishing a specific task or group of tasks.",
        parameters: `
            <label for="time-blocks">Number of Time Blocks per Day:</label>
            <input type="number" id="time-blocks" min="1" max="16">
            <label for="block-length">Length of Each Block (minutes):</label>
            <input type="number" id="block-length" min="30" max="120">
        `,
        recommendations: `
            <h3>Recommendations for Time Blocking:</h3>
            <ul>
                <li>Plan your blocks the day before to hit the ground running.</li>
                <li>Allocate blocks for breaks and personal time to avoid burnout.</li>
                <li>Review and adjust your blocks based on productivity levels.</li>
                <li>Prioritize high-impact tasks in your most productive blocks.</li>
            </ul>
        `
    },
    "Task-Prioritization": {
        description: "Task Prioritization involves identifying and focusing on tasks that yield the most significant results. It helps in managing time and resources efficiently by ensuring that critical tasks are completed first.",
        parameters: `
            <label for="tasks">Number of Tasks Prioritized per Day:</label>
            <input type="number" id="tasks" min="1" max="20">
            <label for="time-saved">Estimated Time Saved per Task (minutes):</label>
            <input type="number" id="time-saved" min="1" max="60">
        `,
        recommendations: `
            <h3>Recommendations for Task Prioritization:</h3>
            <ul>
                <li>Use techniques like Eisenhower Matrix to categorize tasks.</li>
                <li>Focus on completing high-priority tasks first each day.</li>
                <li>Regularly reassess and reprioritize tasks as needed.</li>
                <li>Break down large tasks into smaller, manageable actions.</li>
            </ul>
        `
    }
    // Add more techniques as needed
};

function showParameters() {
    const technique = document.getElementById('technique').value;
    const parameterInput = document.getElementById('parameter-input');
    const techniqueDescription = document.getElementById('technique-description');
    const recommendations = document.getElementById('recommendations');

    parameterInput.innerHTML = '';
    techniqueDescription.innerHTML = '';
    recommendations.innerHTML = '';

    if (techniqueDescriptions[technique]) {
        techniqueDescription.innerHTML = `<h2>${technique.replace('-', ' ')}</h2><p>${techniqueDescriptions[technique].description}</p>`;
        parameterInput.innerHTML = techniqueDescriptions[technique].parameters;
        recommendations.innerHTML = techniqueDescriptions[technique].recommendations;
    }
}

function calculateProductivity() {
    const technique = document.getElementById('technique').value;
    let result = 0;
    let techniqueName = '';

    if (technique === 'Pomodoro-Technique') {
        const sessions = document.getElementById('pomodoro-sessions').value;
        const length = document.getElementById('pomodoro-length').value;
        result = sessions * length * 0.25; // Example calculation
        techniqueName = 'Pomodoro Technique';
    } else if (technique === 'Time-blocking') {
        const blocks = document.getElementById('time-blocks').value;
        const length = document.getElementById('block-length').value;
        result = blocks * length * 0.5; // Example calculation
        techniqueName = 'Time Blocking';
    } else if (technique === 'Task-Prioritization') {
        const tasks = document.getElementById('tasks').value;
        const timeSaved = document.getElementById('time-saved').value;
        result = tasks * timeSaved; // Example calculation
        techniqueName = 'Task Prioritization';
    }

    document.getElementById('result').innerText = `Estimated Productivity Gain with ${techniqueName}: ${result} minutes per day`;
}
