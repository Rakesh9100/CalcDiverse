function convertTime() {
  let istTime = document.getElementById('ist-time').value;
  if (!istTime) {
      alert("Please enter a valid time.");
      return;
  }
  
  let [hours, minutes] = istTime.split(':').map(Number);

  // Create a Date object and set the hours and minutes
  let date = new Date();
  date.setHours(hours, minutes);
  
  // Convert to CET by subtracting 3.5 hours
  date.setHours(date.getHours() - 3);
  date.setMinutes(date.getMinutes() - 30);
  
  // Format the CET time to HH:MM
  let cetHours = String(date.getHours()).padStart(2, '0');
  let cetMinutes = String(date.getMinutes()).padStart(2, '0');
  
  document.getElementById('cet-time').innerText = `CET Time: ${cetHours}:${cetMinutes}`;
}
