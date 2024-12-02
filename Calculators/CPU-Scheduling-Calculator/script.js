document.addEventListener('DOMContentLoaded', () => {
    const algorithmSelect = document.getElementById('algorithm');
    const arrivalTimeInput = document.getElementById('arrival-time');
    const burstTimeInput = document.getElementById('burst-time');
    const timeQuantumInput = document.getElementById('time-quantum');
    const timeQuantumField = document.getElementById('time-quantum-field');
    const form = document.getElementById('input-form');

    const showHideFields = () => {
        const algo = algorithmSelect.value;
        timeQuantumField.style.display = (algo === 'RR') ? 'block' : 'none';
    };

    algorithmSelect.addEventListener('change', showHideFields);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const algo = algorithmSelect.value;
        const arrivalTime = arrivalTimeInput.value.trim().split(/\s+/).map(Number);
        const burstTime = burstTimeInput.value.trim().split(/\s+/).map(Number);
        const timeQuantum = Number(timeQuantumInput.value);

        if (!arrivalTimeInput.value.trim() || !burstTimeInput.value.trim() || (algo === 'RR' && !timeQuantumInput.value.trim())) {
            alert('Please enter all required inputs.');
            return;
        }
        if (burstTime.includes(0)) {
            alert('0 burst time is invalid');
            return;
        }
        if (arrivalTime.length !== burstTime.length) {
            alert('Number of the arrival times and burst times do not match');
            return;
        }
        if (arrivalTime.includes(NaN) || burstTime.includes(NaN) || (algo === 'RR' && isNaN(timeQuantum))) {
            alert('Please enter only integers');
            return;
        }
        if (arrivalTime.some(t => t < 0) || burstTime.some(t => t < 0)) {
            alert('Negative numbers are invalid');
            return;
        }

        const result = solve(algo, arrivalTime, burstTime, timeQuantum);
        console.log('Result:', result);
        displayOutput(result);
    });

    const displayOutput = (result) => {
        const {
            solvedProcessesInfo
        } = result;
        const outputSection = document.getElementById('output-section');
        const outputBody = document.getElementById('output-body');

        outputSection.style.display = 'block';

        outputBody.innerHTML = '';

        solvedProcessesInfo.forEach(process => {
            const row = document.createElement('tr');
            let additionalColumns = '';

            row.innerHTML = `
              <td>${process.processId}</td>
              <td>${process.arrivalTime}</td>
              <td>${process.burstTime}</td>
              <td>${process.startTime}</td>
              <td>${process.completionTime}</td>
              <td>${process.turnaroundTime}</td>
              <td>${process.waitingTime}</td>
              ${additionalColumns}
          `;
            outputBody.appendChild(row);
        });
    };

    const solve = (algo, arrivalTime, burstTime, timeQuantum) => {
        switch (algo) {
            case 'FCFS':
                return fcfs(arrivalTime, burstTime);
            case 'SJF':
                return sjf(arrivalTime, burstTime);
            case 'RR':
                return rr(arrivalTime, burstTime, timeQuantum);
            default:
                return null;
        }
    };

    const fcfs = (arrivalTime, burstTime) => {
        const n = arrivalTime.length;
        let currentTime = 0;
        const solvedProcessesInfo = [];
        const ganttChartInfo = [];

        const processes = arrivalTime.map((arrival, index) => ({
            processId: index + 1,
            arrivalTime: arrival,
            burstTime: burstTime[index]
        }));

        processes.sort((a, b) => a.arrivalTime - b.arrivalTime);

        for (const process of processes) {
            process.startTime = Math.max(currentTime, process.arrivalTime);
            process.completionTime = process.startTime + process.burstTime;
            process.turnaroundTime = process.completionTime - process.arrivalTime;
            process.waitingTime = process.turnaroundTime - process.burstTime; // Update the waiting time calculation
            solvedProcessesInfo.push(process);
            ganttChartInfo.push({
                processId: process.processId,
                startTime: process.startTime,
                endTime: process.completionTime,
            });
            currentTime = process.completionTime;
        }

        return {
            solvedProcessesInfo,
            ganttChartInfo
        };
    };

    const sjf = (arrivalTime, burstTime) => {
        const n = arrivalTime.length;
        let currentTime = 0;
        let completed = 0;
        const solvedProcessesInfo = [];
        const ganttChartInfo = [];
        const isCompleted = Array(n).fill(false);

        while (completed !== n) {
            let minBurstTime = Infinity;
            let index = -1;

            for (let i = 0; i < n; i++) {
                if (!isCompleted[i] && arrivalTime[i] <= currentTime && burstTime[i] < minBurstTime) {
                    minBurstTime = burstTime[i];
                    index = i;
                }
            }

            if (index !== -1) {
                const process = {
                    processId: index + 1,
                    arrivalTime: arrivalTime[index],
                    burstTime: burstTime[index],
                    startTime: currentTime,
                };
                process.completionTime = currentTime + process.burstTime;
                process.turnaroundTime = process.completionTime - process.arrivalTime;
                process.waitingTime = process.turnaroundTime - process.burstTime;
                solvedProcessesInfo.push(process);
                ganttChartInfo.push({
                    processId: process.processId,
                    startTime: process.startTime,
                    endTime: process.completionTime,
                });
                isCompleted[index] = true;
                currentTime = process.completionTime;
                completed++;
            } else {
                currentTime++;
            }
        }

        return {
            solvedProcessesInfo,
            ganttChartInfo
        };
    };

    const rr = (arrivalTime, burstTime, timeQuantum) => {
        const n = arrivalTime.length;
        const processesInfo = arrivalTime.map((arrival, index) => ({
            processId: index + 1,
            arrivalTime: arrival,
            burstTime: burstTime[index],
            remainingBurstTime: burstTime[index],
            startTime: -1,
            completionTime: -1,
            turnaroundTime: -1,
            waitingTime: -1,
        }));

        processesInfo.sort((a, b) => a.arrivalTime - b.arrivalTime);

        const solvedProcessesInfo = [];
        const ganttChartInfo = [];
        let currentTime = 0;
        const queue = [];

        queue.push(processesInfo[0]);
        let i = 1;

        while (queue.length > 0) {
            const process = queue.shift();

            currentTime = Math.max(currentTime, process.arrivalTime);

            const executionTime = Math.min(timeQuantum, process.remainingBurstTime);

            ganttChartInfo.push({
                processId: process.processId,
                startTime: currentTime,
                endTime: currentTime + executionTime,
            });

            process.remainingBurstTime -= executionTime;
            currentTime += executionTime;

            if (process.startTime === -1) {
                process.startTime = currentTime - executionTime;
            }

            if (process.remainingBurstTime <= 0) {
                process.completionTime = currentTime;
                process.turnaroundTime = currentTime - process.arrivalTime;
                process.waitingTime = process.turnaroundTime - process.burstTime;
                solvedProcessesInfo.push(process);
            } else {
                queue.push(process);
            }

            while (i < n && processesInfo[i].arrivalTime <= currentTime) {
                queue.push(processesInfo[i]);
                i++;
            }

            if (queue.length === 0 && i < n) {
                queue.push(processesInfo[i]);
                i++;
            }
        }

        return {
            solvedProcessesInfo,
            ganttChartInfo
        };
    };
});