
// fetch('https://reqres.in/api/users')
//   .then(response => response.json())
//   .then((data) => {console.log(data)});


// const body = document.body
// const div = document.createElement('div')
// // div.innerText = 'Hello World'
// div.innerHTML = '<strong>Hello World, It is a beautifull day , </strong>'

// body.append(div)

window.addEventListener('load',() =>{

  let long;
  let lat;
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api =`http://api.darksky.net/forecast/fd9d9c6418c23d94745b86767721ad1/${lat},${long}`;
      fetch(api)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
      });
  });
}
});
