document.addEventListener('DOMContentLoaded', function() {
    let change = document.querySelector('p#text')
    change.textContent = 'This is really cool!'
    console.log('The DOM has loaded');
})
console.log('The DOM is loading')