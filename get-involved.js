document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

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
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                return;
            }

            // Prepare form data
            const formData = {
                First_Name: form.querySelector('#firstName').value,
                Last_Name: form.querySelector('#lastName').value,
                Email: form.querySelector('#email').value,
                Phone_Number: form.querySelector('#phone').value,
                City: form.querySelector('#city').value,
                State: form.querySelector('#state').value,
                Interest: form.querySelector('#interest').value,
                Organization: form.querySelector('#organization').value,
                Skills_Expertise: form.querySelector('#skills').value,
                Message: form.querySelector('#message').value,
                Availability: form.querySelector('#availability').value,
                Agree_to_Updates: form.querySelector('#agreeCheckbox').checked ? 'Yes' : 'No'
            };

            try {
                const response = await fetch('/send-get-involved', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
                const result = await response.json();

                if (result.status === 'success') {
                    const successMessage = document.getElementById('successMessage');
                    successMessage.classList.add('show');
                    const errorMessage = document.getElementById('errorMessage');
                    errorMessage.classList.remove('show');
                    form.reset();
                    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    setTimeout(() => {
                        successMessage.classList.remove('show');
                    }, 5000);
                } else {
                    throw new Error(result.message);
                }
            } catch (error) {
                const errorMessage = document.getElementById('errorMessage');
                errorMessage.textContent = `Failed to send form: ${error.message}`;
                errorMessage.classList.add('show');
                errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setTimeout(() => {
                    errorMessage.classList.remove('show');
                }, 5000);
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });

        // Real-time email validation
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

        // Real-time phone validation
        const phoneField = form.querySelector('#phone');
        if (phoneField) {
            phoneField.addEventListener('blur', function() {
                const phone = this.value.trim();
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