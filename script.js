// Helper function to simulate delay using async/await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to handle form submission and display message after delay
async function handleFormSubmit() {
    // Get the user input values
    const text = document.getElementById('text').value;
    const delayTime = parseInt(document.getElementById('delay').value);

    // Check if input values are valid
    if (!text || isNaN(delayTime) || delayTime <= 0) {
        alert('Please enter valid text and a positive delay time.');
        return;
    }

    // Clear any previous output
    document.getElementById('output').innerHTML = '';

    // Wait for the specified delay time
    await delay(delayTime);

    // Display the text input value in the output div
    document.getElementById('output').innerHTML = text;
}

// Add event listener to the submit button
document.getElementById('btn').addEventListener('click', handleFormSubmit);
