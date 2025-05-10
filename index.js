// Select elements
const form = document.getElementById('form');
const input = document.getElementById('input');
const list = document.getElementById('list');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get input value
    const inputValue = input.value.trim();
    
    // Check if input is not empty
    if (inputValue) {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = inputValue;
        
        // Append list item to the list
        list.appendChild(listItem);
        
        // Clear input field
        input.value = '';
    }
});

// Optional: Clear the list when clicked
list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});