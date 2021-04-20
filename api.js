

fetch('http://example.com/movies.json')
.then(response => response.json())
.then((data) => {
    console.log(data)
});


const body = document.body
const div = document.createElement('div')
// div.innerText = 'Hello World'
div.innerHTML = '<strong>Hello World</strong>'

body.append(div)