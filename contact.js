(function() {
            emailjs.init("t6taXC32OeIIq5iat"); // Replace with your actual EmailJS public key
        })();

        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const form = this;
            const formContainer = document.getElementById('contact-form-container');

            emailjs.sendForm('service_mly1bgt', 'template_wndh6xo', form)
                .then(function() {
                    // Clear the form
                    form.reset();

                    // Replace form with acknowledgment message
                    formContainer.innerHTML = `
                        <div class="contact-wtps-acknowledgment">
                            <h2>Thank You!</h2>
                            <p>Your message has been sent successfully. We'll get back to you soon.</p>
                        </div>
                    `;

                    // Fade out acknowledgment and restore form after 5 seconds
                    setTimeout(function() {
                        const acknowledgment = formContainer.querySelector('.contact-wtps-acknowledgment');
                        acknowledgment.style.animation = 'fadeOut 0.5s ease-out forwards';
                        setTimeout(function() {
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
                        }, 500); // Match fade-out duration
                    }, 5000); // Show acknowledgment for 5 seconds
                }, function(error) {
                    formContainer.innerHTML = `
                        <div class="contact-wtps-acknowledgment">
                            <h2>Oops!</h2>
                            <p>Failed to send message. Error: ${JSON.stringify(error)}</p>
                        </div>
                    `;
                    setTimeout(function() {
                        const acknowledgment = formContainer.querySelector('.contact-wtps-acknowledgment');
                        acknowledgment.style.animation = 'fadeOut 0.5s ease-out forwards';
                        setTimeout(function() {
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
                        }, 500); // Match fade-out duration
                    }, 5000); // Show error message for 5 seconds
                });
        });