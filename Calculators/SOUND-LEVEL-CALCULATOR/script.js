document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-button');
    const soundLevelDisplay = document.getElementById('sound-level');
    
    let audioContext;
    let analyser;
    let microphone;
    let javascriptNode;
  
    startButton.addEventListener('click', startMeasuring);
  
    function startMeasuring() {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert('Your browser does not support the required features.');
        return;
      }
  
      navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        microphone = audioContext.createMediaStreamSource(stream);
        javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);
  
        analyser.smoothingTimeConstant = 0.8;
        analyser.fftSize = 1024;
  
        microphone.connect(analyser);
        analyser.connect(javascriptNode);
        javascriptNode.connect(audioContext.destination);
  
        javascriptNode.onaudioprocess = function() {
          const array = new Uint8Array(analyser.frequencyBinCount);
          analyser.getByteFrequencyData(array);
          let values = 0;
  
          for (let i = 0; i < array.length; i++) {
            values += array[i];
          }
  
          const average = values / array.length;
          const dB = Math.round(20 * Math.log10(average));
  
          soundLevelDisplay.textContent = dB;
        };
      }).catch(err => {
        console.error(err);
        alert('Error accessing the microphone.');
      });
    }
  });
  