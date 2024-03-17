async function fetchJSONData() {
    try {
        const response = await fetch('./assets/size_mapping.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function getResults() {
    // EXTRACT FROM DOM
    const { _gender, _from, _to, sz } = extractInput();

    if (!sz || !sz.trim()) {
        alert('Please enter a size');
        return;
    }

    try {
        let sizeMapping = await fetchJSONData();

        if (sizeMapping) {
            if (!sizeMapping[_gender]) {
                alert('Please select a valid option for men/women');
                return;
            }

            sizeMapping = sizeMapping[_gender];
            let obj = null;
            let min_sz = sizeMapping[0][_from];
            let max_sz = sizeMapping[0][_from];
            for (let i = 0; i < sizeMapping.length; i++) {
                let tempObj = sizeMapping[i];
                min_sz = Math.min(min_sz, tempObj[_from]);
                max_sz = Math.max(max_sz, tempObj[_from]);
                if (parseInt(tempObj[_from]) === parseInt(sz)) {
                    obj = tempObj;
                    console.log('found');
                    break;
                }
            }

            if (!obj) {
                alert(`Please enter a size that is available in the selected region. \nThe size should be between ${min_sz} and ${max_sz} for this region. \nPlease check the link in the footer for reference.`);
                return;
            }

            let res = obj[_to];
            let international = obj['international'];
            let details = obj['details'];

            updateResult(_to, res, international, details);
        } else {
            console.log('Data fetch failed or returned null.');
        }
    } catch (error) {
        console.error('Error in main:', error);
        alert("Something went wrong. Please try again.")
    }
}