// Select the button element
const button = document.querySelector('button');

// Add a click event listener to the button
button.addEventListener('click', function() {
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Change the background color of the body
    document.body.style.backgroundColor = randomColor;
});
