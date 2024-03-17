let options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8081e0ef98msh1c7a8cfb03a9613p1c8780jsn4bef17e7cab6',
        'X-RapidAPI-Host': 'free-url-un-shortener.p.rapidapi.com'
    }
};

const fetchData = async () => {
    try {

        let longURL = document.getElementById("longurl").value;
        console.log(`longURL: `, longURL)

        let shortURL = document.getElementById("shorturl");

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer 3f61b16e159da58b7c6cece1b27133ab976aa781");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "long_url": longURL
        });

        console.log(`raw : `, raw)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        let response = await fetch("https://api-ssl.bitly.com/v4/shorten", requestOptions)

        let result = await response.text();

        console.log(result);
        result = JSON.parse(result)
        console.log(result.link);
        shortURL.value = result.link

    } catch (error) {
        console.error('Error:', error);
    }
}
// fetchData()

// Copy

let newURL = document.getElementById("shorturl");
let coptButton = document.getElementById("copy");

coptButton.onclick = () => {
    newURL.select();

    window.navigator.clipboard.writeText(newURL.value);
}