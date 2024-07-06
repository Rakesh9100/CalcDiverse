document.getElementById('cat-life-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const hurt = parseInt(document.getElementById('hurt').value);
    const hunger = parseInt(document.getElementById('hunger').value);
    const hydration = parseInt(document.getElementById('hydration').value);
    const hygiene = parseInt(document.getElementById('hygiene').value);
    const happiness = parseInt(document.getElementById('happiness').value);
    const mobility = parseInt(document.getElementById('mobility').value);
    const goodDays = parseInt(document.getElementById('goodDays').value);

    const totalScore = hurt + hunger + hydration + hygiene + happiness + mobility + goodDays;
    const lifeQualityScore = totalScore / 7;

    let lifeQuality;

    if (lifeQualityScore >= 8) {
        lifeQuality = "Excellent";
    } else if (lifeQualityScore >= 6) {
        lifeQuality = "Good";
    } else if (lifeQualityScore >= 4) {
        lifeQuality = "Fair";
    } else {
        lifeQuality = "Poor";
    }

    document.getElementById('result').innerText = `Cat's Life Quality: ${lifeQuality} (Total Score: ${totalScore})`;
});
