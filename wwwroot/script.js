window.onload = function () {
    // Animation for header
    let header = document.querySelector('header');
    let h1 = document.querySelector('h1');

    // Change background color and grow font size
    header.style.transition = 'all 1s ease-in-out';
    h1.style.transition = 'all 1s ease-in-out';

    setTimeout(function () {
        header.style.backgroundColor = '#ff6347';  // Change to a tomato color
        h1.style.fontSize = '3rem';  // Increase size of text
    }, 500);
}
