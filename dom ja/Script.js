const box = document.getElementById("jsbox");

function addHighlight() {
  box.classList.add("highlight");
}

const Box = document.getElementById("jsbox");

function Removehighlight() {
  box.classList.Remove("highlight");
}

//Adding or removing element
const container = document.getElementById("container");

document.getElementById("addElement").addEventListener("click", () => {
  const newDiv = document.createElement("div");
  newDiv.textContent = "I am the new element";
  container.appendChild(newDiv);
});

document.getElementById("removeElement").addEventListener("click", () => {
  if (container.lastChild) {
    container.removeChild(container.lastChild);
  }
});

//Updating text
function changeText() {
  const textElement = document.getElementById("text");
  textElement.innerHTML = "<b>I am the Updated Text</b>";
}

  // simple form Validation

 // Simple form validation

const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const error = document.getElementById('error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Check if the input is empty
  if (nameInput.value === '') {
    error.textContent = 'Name block cannot be empty'; // Update error message
    error.style.display = 'block'; // Show error message
  } else {
    error.style.display = 'none'; // Hide error message
    alert(`Hello, ${nameInput.value}`); // Corrected string interpolation
  }
});
