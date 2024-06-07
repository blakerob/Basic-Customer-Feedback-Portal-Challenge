// U92725213

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedback-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('customer-name').value;
        const rating = document.getElementById('customer-rating').value;
        const comments = document.getElementById('customer-comments').value;
        
        if (!name || !rating || !comments) {
            alert('Please fill out all fields.');
            return;
        }
        
        const feedbackDisplay = document.getElementById('feedback-display');
        feedbackDisplay.innerHTML += `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Rating:</strong> ${rating} Stars</p>
            <p><strong>Comments:</strong> ${comments}</p>
            <hr>
        `;
        
        form.reset();
    });
});