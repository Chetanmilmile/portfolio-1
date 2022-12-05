var typed = new Typed('.typing-text', {
    strings: [' ','front end developer'],
    loop : true,
    typeSpeed : 100
})

VanillaTilt.init(document.querySelectorAll('.tilt'),{
  max:50
})

let date = new Date();
let year = date.getFullYear();
let age = Math.abs(year - 1998);
document.getElementById('result').innerHTML = age;

let inputs = document.querySelectorAll('input');


const scriptURL = 'https://script.google.com/macros/s/AKfycbwpSFijJGJkl96V8fmyGbg4i4BUTH0pe-teNd1VT3wLFTKR0hngPp7hue3enKR-CG0o/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
            })
