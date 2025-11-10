document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const form = this;
    const formContainer = document.getElementById('contact-form-container');
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    const formData = {
        name: form.querySelector('#name').value,
        email: form.querySelector('#email').value,
        subject: form.querySelector('#subject').value,
        message: form.querySelector('#message').value,
    };

    try {
        const response = await fetch('/send-contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        const result = await response.json();

        if (result.status === 'success') {
            form.reset();
            formContainer.innerHTML = `
                <div class="contact-wtps-acknowledgment">
                    <h2>Thank You!</h2>
                    <p>Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
            `;
            setTimeout(() => {
                const acknowledgment = formContainer.querySelector('.contact-wtps-acknowledgment');
                acknowledgment.style.animation = 'fadeOut 0.5s ease-out forwards';
                setTimeout(() => {
                    formContainer.innerHTML = `
                        <h2>Send Us a Message</h2>
                        <form id="contact-form" method="POST">
                            <div class="contact-wtps-form-group">
                                <label for="name">Full Name</label>
                                <input type="text" id="name" name="name" placeholder="Enter your name" required>
                            </div>
                            <div class="contact-wtps-form-group">
                                <label for="email">Email Address</label>
                                <input type="email" id="email" name="email" placeholder="Enter your email" required>
                            </div>
                            <div class="contact-wtps-form-group">
                                <label for="subject">Subject</label>
                                <input type="text" id="subject" name="subject" placeholder="Enter the subject" required>
                            </div>
                            <div class="contact-wtps-form-group">
                                <label for="message">Message</label>
                                <textarea id="message" name="message" placeholder="Write your message here" required></textarea>
                            </div>
                            <button type="submit" class="contact-wtps-submit-button">Send Message</button>
                        </form>
                    `;
                }, 500);
            }, 5000);
        } else {
            throw new Error(result.message);
        }
    } catch (error) {
        formContainer.innerHTML = `
            <div class="contact-wtps-acknowledgment">
                <h2>Oops!</h2>
                <p>Failed to send message: ${error.message}</p>
            </div>
        `;
        setTimeout(() => {
            const acknowledgment = formContainer.querySelector('.contact-wtps-acknowledgment');
            acknowledgment.style.animation = 'fadeOut 0.5s ease-out forwards';
            setTimeout(() => {
                formContainer.innerHTML = `
                    <h2>Send Us a Message</h2>
                    <form id="contact-form" method="POST">
                        <div class="contact-wtps-form-group">
                            <label for="name">Full Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" required>
                        </div>
                        <div class="contact-wtps-form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required>
                        </div>
                        <div class="contact-wtps-form-group">
                            <label for="subject">Subject</label>
                            <input type="text" id="subject" name="subject" placeholder="Enter the subject" required>
                        </div>
                        <div class="contact-wtps-form-group">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" placeholder="Write your message here" required></textarea>
                        </div>
                        <button type="submit" class="contact-wtps-submit-button">Send Message</button>
                    </form>
                `;
            }, 500);
        }, 5000);
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});