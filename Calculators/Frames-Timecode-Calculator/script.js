document.addEventListener('DOMContentLoaded', function() {
    // Get input elements
    const framesInput = document.querySelector('input[name="frames"]');
    const frameRateInput = document.querySelector('input[name="frame_rate"]');
    const hoursInput = document.querySelector('input[name="hours"]');
    const minutesInput = document.querySelector('input[name="minutes"]');
    const secondsInput = document.querySelector('input[name="seconds"]');
    const excessFramesInput = document.querySelector('input[name="excess_frames"]');

    function calculateTimecode() {
        // Get values from inputs
        const frames = parseInt(framesInput.value, 10);
        const frameRate = parseInt(frameRateInput.value, 10);

        if (isNaN(frames) || isNaN(frameRate) || frameRate <= 0) {
            // If inputs are invalid, clear the outputs
            hoursInput.value = '';
            minutesInput.value = '';
            secondsInput.value = '';
            excessFramesInput.value = '';
            return;
        }

        // Calculate total seconds and excess frames
        const totalSeconds = Math.floor(frames / frameRate);
        const excessFrames = frames % frameRate;

        // Calculate hours, minutes, and seconds
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        // Set values to the output inputs
        hoursInput.value = hours;
        minutesInput.value = minutes;
        secondsInput.value = seconds;
        excessFramesInput.value = excessFrames;
    }

    // Add event listeners to the input elements
    framesInput.addEventListener('input', calculateTimecode);
    frameRateInput.addEventListener('input', calculateTimecode);
});