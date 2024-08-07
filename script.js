let startTime;
let elapsedTime = 0;
let timerInterval;
let lapCount = 0;

function startPause() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        document.getElementById('startPause').innerText = 'Start';
    } else {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateDisplay, 10);
        document.getElementById('startPause').innerText = 'Pause';
    }
}

function lapReset() {
    if (timerInterval) {
        // Lap function
        let currentTime = Date.now();
        let lapTime = currentTime - startTime;
        let formattedTime = formatTime(lapTime);
        lapCount++;
        
        let lapList = document.getElementById('laps');
        let lapItem = document.createElement('li');
        lapItem.innerText = `Lap ${lapCount}: ${formattedTime}`;
        lapList.appendChild(lapItem);
    }
}

function reset() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    document.getElementById('display').innerText = '00:00:00.000';
    document.getElementById('startPause').innerText = 'Start';
    let lapList = document.getElementById('laps');
    lapList.innerHTML = '';
    lapCount = 0;
}

function updateDisplay() {
    let currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    document.getElementById('display').innerText = formatTime(elapsedTime);
}

function formatTime(milliseconds) {
    let date = new Date(milliseconds);
    let hours = date.getUTCHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    let millisecondsFormatted = date.getMilliseconds().toString().padStart(3, '0');
    return `${hours}:${minutes}:${seconds}.${millisecondsFormatted}`;
}


