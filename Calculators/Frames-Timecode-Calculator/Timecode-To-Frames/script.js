document.addEventListener('DOMContentLoaded', function() {
    const hoursInput = document.querySelector('input[name="hours"]');
    const minutesInput = document.querySelector('input[name="minutes"]');
    const secondsInput = document.querySelector('input[name="seconds"]');
    const excessFramesInput = document.querySelector('input[name="excess_frames"]');
    const framesInput = document.querySelector('input[name="frames"]');
    const frameRateInput = document.querySelector('input[name="frame_rate"]');

    function calculateFrames() {
        
        const hours = parseInt(hoursInput.value, 10) || 0;
        const mins = parseInt(minutesInput.value, 10) || 0;
        const secs = parseInt(secondsInput.value, 10) || 0;
        const excessFrames = parseInt(excessFramesInput.value, 10) || 0;
        const frameRate = parseInt(frameRateInput.value, 10) || 0;

        if (frameRate <= 0) {
            framesInput.value = '';
            return;
        }

        const totalSeconds = (hours * 3600) + (mins * 60) + secs;
        const framesTotal = (totalSeconds * frameRate) + excessFrames;

        framesInput.value = framesTotal;
    }

    hoursInput.addEventListener('input', calculateFrames);
    minutesInput.addEventListener('input', calculateFrames);
    secondsInput.addEventListener('input', calculateFrames);
    excessFramesInput.addEventListener('input', calculateFrames);
    frameRateInput.addEventListener('input', calculateFrames);
});
