const bookingForm = document.querySelector('.table .signup form');

if (bookingForm) {
    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let feedback = bookingForm.querySelector('.form-message');
        if (!feedback) {
            feedback = document.createElement('p');
            feedback.className = 'form-message';
            bookingForm.appendChild(feedback);
        }

        feedback.textContent = 'Your table booking request has been received (demo mode).';
        bookingForm.reset();
    });
}
