async function fetchJSONData() {
    try {
        const response = await fetch('./size_mapping.json');
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
    const {_gender, _from, _to, sz } = extractInput();
    
    if (!sz || !sz.trim()) {
        alert('Please enter a size');
        return;
    }

    try {
        let sizeMapping = await fetchJSONData();

        if (sizeMapping) {
            if(!sizeMapping[_gender]) {
                alert('Please select a valid option for men/women');
                return;
            }
    
            sizeMapping = sizeMapping[_gender];
            let obj = null;
    
            for (let i = 0; i < sizeMapping.length; i++) {
                let tempObj = sizeMapping[i];
                if (parseInt(tempObj[_from]) === parseInt(sz)) {
                    obj = tempObj;
                    console.log('found');
                    break;
                }
            }
    
            if (!obj) {
                alert('Please enter a size that is available in the selected region');
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