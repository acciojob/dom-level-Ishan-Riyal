//your JS code here. If required.
const element = document.getElementById("level");

let level = 0;
let currentElement = element;

// Traverse up the DOM tree until reaching null (above the <html> root)
while (currentElement) {
    level++;
    currentElement = currentElement.parentElement;
}

alert("The level of the element is: " + level);
