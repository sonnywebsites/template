document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = new URLSearchParams();
    for (let [key, value] of formData) {
        data.append(key, value);
    }
    
    fetch('/__forms/contact', {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: data
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('responseMessage').innerHTML = '<p>Thank you! Your message has been sent.</p>';
        this.reset();
    })
    .catch(error => {
        document.getElementById('responseMessage').innerHTML = '<p>Sorry, there was an error sending your message.</p>';
        console.error('Error:', error);
    });
});