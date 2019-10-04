var fs = require('fs');
var input = document.getElementById('input').value;


const imgNum = (url, cb) => {
    fetch(url)
        .then(res => res.json())
        .then(data => cb(data))
}

imgNum('https: //http.cat/[' + input + ']', data => {
    console.log(data)
});

fs.writeFile('http://localhost:8080/' + input, data, function (err) {
    document.getElementById('img').textContent = data;
    if (err) {
        console.log(err);
    }
});