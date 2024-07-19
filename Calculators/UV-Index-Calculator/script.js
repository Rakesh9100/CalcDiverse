function calculateProtection() {
  const uvIndex = document.getElementById("uvIndex").value;
  let protectionMessage = "";

  if (uvIndex < 3) {
    protectionMessage = "Low risk. No protection needed.";
  } else if (uvIndex >= 3 && uvIndex < 6) {
    protectionMessage = "Moderate risk. Wear sunglasses and sunscreen.";
  } else if (uvIndex >= 6 && uvIndex < 8) {
    protectionMessage = "High risk. Cover up and wear sunscreen.";
  } else if (uvIndex >= 8 && uvIndex < 11) {
    protectionMessage =
      "Very high risk. Take extra precautions, cover up, and wear sunscreen.";
  } else if (uvIndex >= 11) {
    protectionMessage =
      "Extreme risk. Avoid the sun and take all protective measures.";
  } else {
    protectionMessage = "Invalid UV Index.";
  }

  document.getElementById("result").innerText = protectionMessage;
}
