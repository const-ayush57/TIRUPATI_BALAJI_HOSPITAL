document.addEventListener('DOMContentLoaded', () => {

    /* --- MOBILE MENU TOGGLE --- */
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('open');
        menuIcon.textContent = mobileMenu.classList.contains('open') ? 'close' : 'menu';
    };

    menuToggle.addEventListener('click', toggleMenu);

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('open')) toggleMenu();
        });
    });

    /* --- CURRENT YEAR FOR FOOTER --- */
    document.getElementById('year').textContent = new Date().getFullYear();

    /* --- SCROLL ANIMATIONS (Intersection Observer) --- */
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before it comes into view
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-animate');
                // Stop observing once animated (simulating Framer Motion viewport={{ once: true }})
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.hidden-animate, .hidden-animate-up, .hidden-animate-scale, .stagger-container');

    // Check if hero elements should be animated immediately (they are likely in view on load)
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Special case for hero, force animate right away
    setTimeout(() => {
        document.querySelector('.hero').classList.add('show-animate');
        document.querySelector('.hero-title').classList.add('show-animate');
        document.querySelector('.hero-subtitle').classList.add('show-animate');
        document.querySelector('.hero-cta').classList.add('show-animate');
    }, 100);


    /* --- REGISTRATION FORM LOGIC --- */

    // Phone Number Formatter
    const phoneInput = document.getElementById('phoneInput');

    phoneInput.addEventListener('input', function (e) {
        let val = e.target.value;

        if (val === '+91' || val === '+9' || val === '+' || val === '') {
            e.target.value = '';
            return;
        }

        if (val.startsWith('+91 ')) val = val.slice(4);
        else if (val.startsWith('+91')) val = val.slice(3);
        else if (val.startsWith('+9')) val = val.slice(2);
        else if (val.startsWith('+')) val = val.slice(1);

        let digits = val.replace(/\D/g, '');

        if (digits.length > 10 && digits.startsWith('91')) {
            digits = digits.slice(2);
        }

        digits = digits.slice(0, 10);

        if (digits.length === 0) {
            e.target.value = '';
            return;
        }

        let finalString = '+91 ';
        finalString += digits.slice(0, 5);
        if (digits.length > 5) {
            finalString += ' ' + digits.slice(5, 10);
        }

        e.target.value = finalString;
    });

    // Form Submission
    const regForm = document.getElementById('regForm');
    const submitBtn = document.getElementById('submitBtn');
    const submitText = document.querySelector('.submit-text');
    const spinner = document.querySelector('.spinner');
    const formFields = regForm.querySelectorAll('input, textarea');

    const successScreen = document.getElementById('successScreen');
    const trackingIdDisplay = document.getElementById('trackingIdDisplay');
    const resetFormBtn = document.getElementById('resetFormBtn');

    regForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Disable form UI
        submitBtn.disabled = true;
        submitText.classList.add('hidden');
        spinner.classList.remove('hidden');
        formFields.forEach(field => field.disabled = true);

        // Gather Data
        const formData = new FormData(regForm);
        const payload = {
            timestamp: new Date().toISOString(),
            name: formData.get("fullName"),
            phone: formData.get("phone"),
            address: formData.get("address"),
            age: formData.get("age"),
            gender: formData.get("gender"),
            problem: formData.get("problem")
        };

        try {
            // Note: Since we are in pure HTML/JS now, there's no process.env.
            // A real backend URL would be hardcoded or injected here.
            // For now, we simulate the network request exactly like the Next.js version did when env var was missing.

            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log("Mock Submission Payload (Waiting for actual API link):", payload);

            const randomId = "MOCK-" + Math.floor(Math.random() * 90000 + 10000);

            // Show Success UI
            trackingIdDisplay.textContent = randomId;
            regForm.classList.add('hidden');
            successScreen.classList.remove('hidden');
            regForm.reset();

        } catch (error) {
            console.error("Submission error:", error);
            alert("There was a problem submitting your registration. Please try again.");
        } finally {
            // Re-enable form UI
            submitBtn.disabled = false;
            submitText.classList.remove('hidden');
            spinner.classList.add('hidden');
            formFields.forEach(field => field.disabled = false);
        }
    });

    // Reset Form State
    resetFormBtn.addEventListener('click', () => {
        successScreen.classList.add('hidden');
        regForm.classList.remove('hidden');
    });

});
