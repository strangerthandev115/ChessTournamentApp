// Get the button element from the HTML
const button = document.querySelector('#generateDBFs');

// Add a click event listener to the button
button.addEventListener('click', async () => {
    try {
        // Send a fetch request to dbfController.js
        const response = await fetch('/dbfGenerator', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        // Check if the request was successful
        if (response.ok) {
            console.log('DBF files created successfully!');
        } else {
            console.error('Failed to create DBF files');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
});