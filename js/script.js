let timeLeft;
let timerInterval;
let isRunning = false;

const timerDisplay = document.querySelector(".timer");
const inputArea = document.querySelector('.input-area');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');

const startTimer = (duration) => {
    let timer = duration;
    timerInterval = setInterval(() => {
        // const hours = parseInt(timer/3600, 10);
        // const minutes = parseInt(timer/60, 10);
        // const seconds = parseInt(timer%60, 10);

        const hours = Math.floor(timer / 3600);
        const minutes = Math.floor((timer % 3600) / 60);
        const seconds = timer % 60;

        const displayHour = hours < 10 ? '0' + hours : hours;
        const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
        const displaySeconds = seconds < 10 ? '0' + seconds : seconds;

        timerDisplay.textContent = displayHour + ':' + displayMinutes + ':'+ displaySeconds;

        if(--timer < 0)
        {
            clearInterval(timerInterval);
            timerDisplay.textContent = 'Breathe Out';

            setTimeout(() => {
                timerDisplay.textContent = 'Breathe In';
                startTimer(timeLeft);
            }, 3000);
        }
    }, 1000);
};

const stopTimer = () => {
    clearInterval(timerInterval);
    timerDisplay.textContent = 'Resume Breathe In From Start';
    isRunning = false;
};

startBtn.addEventListener('click', () => {
    // if(!isRunning)
    // {
    //     timeLeft = '10800';
    //     startTimer(timeLeft);
    //     isRunning = true;
    // }

    if (!isRunning)
    {
        const inputTime = parseInt(inputArea.value);
        if(!isNaN(inputTime) && inputTime > 0)
        {
            timeLeft = inputTime.toString();
            startTimer(timeLeft);
            isRunning = true;
        }
        else
        {
            timerDisplay.textContent = "Please Enter a Valid Positive Number!";
        }
    }
});

stopBtn.addEventListener('click', () => {
    stopTimer();
    isRunning = false;
});