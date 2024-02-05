// Get references to the buttons
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

// Add click event listeners
button1.addEventListener('click', function() {
    // Redirect to another HTML page
    window.location.href = 'congrats.html';
});

button2.addEventListener('click', function() {
    // Decrease the size of button2 by 5%
    let currentScale = window.getComputedStyle(button2).getPropertyValue('transform');
    let currentScaleValue = parseFloat(currentScale.slice(7, -1).split(',')[0]);
    button2.style.transform = `scale(${currentScaleValue * 0.95})`;

    // Increase the size of button1 by 5%
    let currentSize = window.getComputedStyle(button1, null).getPropertyValue('font-size');
    currentSize = parseFloat(currentSize);
    button1.style.fontSize = (currentSize * 1.05) + 'px';
});
