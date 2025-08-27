let radius = prompt("Enter the radius of the circle:");

function calculateArea() {
    let a = Math.PI; // more accurate than 3.14
    let b = a * (radius) * (radius);
    return b.toFixed(2); // round to 2 decimal places
}


alert(`The area of the circle with radius ${radius} is ${calculateArea()}`);
