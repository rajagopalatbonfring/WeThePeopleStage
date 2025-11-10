emailjs.init({
            publicKey: 't6taXC32OeIIq5iat'  // ⬅️ REPLACE WITH YOUR PUBLIC KEY
        });

        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('contactForm');
            
            if (form) {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();

                    // Validate required fields
                    const requiredFields = form.querySelectorAll('[required]');
                    let isValid = true;
                    
                    requiredFields.forEach(field => {
                        if (!field.value.trim()) {
                            isValid = false;
                            field.classList.add('error');
                        } else {
                            field.classList.remove('error');
                        }
                    });

                    if (!isValid) {
                        alert('Please fill in all required fields marked with *');
                        return;
                    }

                    // Show loading state
                    const submitBtn = form.querySelector('button[type="submit"]');
                    const originalText = submitBtn.textContent;
                    submitBtn.textContent = 'Sending...';
                    submitBtn.disabled = true;

                    // Prepare form data
                    const formData = {
                        First_Name: form.querySelector('#firstName').value,
                        Last_Name: form.querySelector('#lastName').value,
                        Email: form.querySelector('#email').value,
                        Phone_Number: form.querySelector('#phone').value,
                        City: form.querySelector('#city').value,
                        State: form.querySelector('#state').value,
                        Interest: form.querySelector('#interest').value,
                        Organization: form.querySelector('#organization').value || '(Not provided)',
                        Skills_Expertise: form.querySelector('#skills').value || '(Not provided)',
                        Message: form.querySelector('#message').value,
                        Availability: form.querySelector('#availability').value || '(Not provided)',
                        Agree_to_Updates: form.querySelector('#agreeCheckbox').checked ? 'Yes' : 'No'
                    };

                    // Log for debugging (optional - remove in production)
                    console.log('Form data being sent to EmailJS:', formData);

                    // Send email using EmailJS
                    // Parameters: (SERVICE_ID, TEMPLATE_ID, templateParams)
                    emailjs.send(
                        'service_mly1bgt',  // ⬅️ Replace with YOUR_SERVICE_ID
                        'template_l21dd6r',     // ⬅️ Replace with YOUR_TEMPLATE_ID
                        formData
                    ).then(
                        function(response) {
                            console.log('Email sent successfully!', response);
                            
                            // Show success message
                            const successMessage = document.getElementById('successMessage');
                            successMessage.classList.add('show');

                            // Hide error message if it was showing
                            const errorMessage = document.getElementById('errorMessage');
                            errorMessage.classList.remove('show');

                            // Clear form
                            form.reset();

                            // Scroll to success message
                            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

                            // Hide success message after 5 seconds
                            setTimeout(() => {
                                successMessage.classList.remove('show');
                            }, 5000);

                            // Restore button
                            submitBtn.textContent = originalText;
                            submitBtn.disabled = false;
                        },
                        function(error) {
                            console.error('Failed to send email:', error);
                            
                            // Show error message
                            const errorMessage = document.getElementById('errorMessage');
                            errorMessage.classList.add('show');
                            errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

                            // Restore button
                            submitBtn.textContent = originalText;
                            submitBtn.disabled = false;

                            // Hide error after 5 seconds
                            setTimeout(() => {
                                errorMessage.classList.remove('show');
                            }, 5000);
                        }
                    );
                });

                // Real-time validation for email field
                const emailField = form.querySelector('#email');
                if (emailField) {
                    emailField.addEventListener('blur', function() {
                        const email = this.value.trim();
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        
                        if (email && !emailRegex.test(email)) {
                            this.classList.add('error');
                            this.title = 'Please enter a valid email address';
                        } else {
                            this.classList.remove('error');
                            this.title = '';
                        }
                    });
                }

                // Real-time validation for phone field
                const phoneField = form.querySelector('#phone');
                if (phoneField) {
                    phoneField.addEventListener('blur', function() {
                        const phone = this.value.trim();
                        // Allow 10+ digits with optional formatting characters
                        const phoneRegex = /^[0-9\-\+\(\)\s]{10,}$/;
                        
                        if (phone && !phoneRegex.test(phone)) {
                            this.classList.add('error');
                            this.title = 'Please enter a valid phone number (at least 10 digits)';
                        } else {
                            this.classList.remove('error');
                            this.title = '';
                        }
                    });
                }

                // Remove error class on input change
                const inputs = form.querySelectorAll('.involve-wtps-form-input, .involve-wtps-form-textarea, .involve-wtps-form-select');
                inputs.forEach(input => {
                    input.addEventListener('change', function() {
                        if (this.value.trim()) {
                            this.classList.remove('error');
                        }
                    });

                    input.addEventListener('focus', function() {
                        this.classList.remove('error');
                    });
                });
            }
        });