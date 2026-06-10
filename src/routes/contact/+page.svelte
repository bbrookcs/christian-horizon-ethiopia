<script>
    import Header from "../header.svelte";
    import Footer from "../footer.svelte";
</script>

<svelte:head>
    <title>Contact Us | HEDS</title>
</svelte:head>

<Header darkMode={true} />

<!-- HERO BANNER -->
<section class="hero">
    <div class="hero-bg">
        <img src="/112233.jpg" alt="HEDS team" class="hero-img" />
        <div class="hero-overlay"></div>
    </div>
    <div class="hero-content">
        <span class="tag">Get in Touch</span>
        <h1>We Would Love to Hear From You</h1>
        <p>Whether you want to partner with us, support our programs, or learn more about our work our team is here and ready to connect.</p>
    </div>
</section>

<!-- MAIN CONTENT: INFO + FORM -->
<section class="main-section">
    <div class="main-inner">

        <!-- LEFT: Contact Info -->
        <div class="info-col">
            <h2>Contact Information</h2>
            <p class="info-intro">Reach us at our Asella office during working hours. We respond to all inquiries within 1–2 business days.</p>

            <div class="info-cards">
                <div class="info-card">
                    <div class="info-icon"><i class="fas fa-phone-alt"></i></div>
                    <div>
                        <h4>Phone</h4>
                        <p>+251 911 159 428</p>
                        <p>+251 920 386 606</p>
                        <span class="hours">Monday – Friday, 9 AM – 5 PM</span>
                    </div>
                </div>

                <div class="info-card">
                    <div class="info-icon"><i class="fas fa-map-marker-alt"></i></div>
                    <div>
                        <h4>Physical Address</h4>
                        <p>Welkessa Kebele (10)</p>
                        <p>Asella Town, Arsi Zone</p>
                        <p>Oromia Regional State, Ethiopia</p>
                    </div>
                </div>

                <div class="info-card">
                    <div class="info-icon"><i class="fas fa-mail-bulk"></i></div>
                    <div>
                        <h4>Postal Address</h4>
                        <p>P.O. Box 370</p>
                        <p>Asella, Ethiopia</p>
                    </div>
                </div>
            </div>

            <div class="social-block">
                <h3>Follow Us</h3>
                <div class="social-links">
                    <a href="#" class="social-btn fb"><i class="fab fa-facebook-f"></i> Facebook</a>
                    <a href="#" class="social-btn tw"><i class="fab fa-twitter"></i> Twitter / X</a>
                    <a href="#" class="social-btn tg"><i class="fab fa-telegram"></i> Telegram</a>
                </div>
            </div>
        </div>

        <!-- RIGHT: Message Form -->
        <div class="form-col">
            <h2>Send Us a Message</h2>
            <p class="info-intro">Fill out the form below and a member of our team will get back to you shortly.</p>

            <form class="contact-form">
                <div class="form-row">
                    <div class="form-group">
                        <label for="fname">First Name</label>
                        <input id="fname" type="text" placeholder="Your first name" />
                    </div>
                    <div class="form-group">
                        <label for="lname">Last Name</label>
                        <input id="lname" type="text" placeholder="Your last name" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input id="email" type="email" placeholder="you@example.com" />
                </div>
                <div class="form-group">
                    <label for="subject">Subject</label>
                    <select id="subject">
                        <option value="" disabled selected>Select a topic</option>
                        <option>Partnership Inquiry</option>
                        <option>Donation & Support</option>
                        <option>Volunteering</option>
                        <option>Program Information</option>
                        <option>Horizons Academy Enrollment</option>
                        <option>Media & Press</option>
                        <option>Other</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" rows="5" placeholder="Tell us how we can help…"></textarea>
                </div>
                <button type="submit" class="send-btn">Send Message <i class="fas fa-paper-plane"></i></button>
            </form>
        </div>

    </div>
</section>

<Footer />

<style>
    /* HERO */
    .hero {
        position: relative;
        height: 420px;
        display: flex;
        align-items: center;
        overflow: hidden;
        margin-top: 80px;
    }
    .hero-bg { position: absolute; inset: 0; }
    .hero-img { width: 100%; height: 100%; object-fit: cover; object-position: center 30%; }
    .hero-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(0,9,62,0.5) 0%, rgba(0,65,151,0.65) 100%); }
    .hero-content {
        position: relative; z-index: 2;
        max-width: 700px;
        margin-left: 8%;
        color: white;
        padding: 0 2rem;
    }
    .tag {
        display: inline-block;
        background: #fbbd23;
        color: #000;
        padding: 0.35rem 1rem;
        border-radius: 50px;
        font-size: 0.85rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }
    .hero-content h1 { font-size: 2.8rem; font-weight: 800; line-height: 1.2; margin-bottom: 1rem; }
    .hero-content p { font-size: 1.1rem; line-height: 1.65; opacity: 0.9; }

    /* MAIN SECTION */
    .main-section { background: #f8f9fa; padding: 5rem 2rem; }
    .main-inner {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1.3fr;
        gap: 4rem;
        align-items: start;
    }

    /* INFO COL */
    .info-col h2, .form-col h2 {
        font-size: 1.8rem;
        font-weight: 800;
        color: #00093e;
        margin-bottom: 0.5rem;
    }
    .info-intro { color: #6B7280; font-size: 0.95rem; line-height: 1.6; margin-bottom: 2rem; }

    .info-cards { display: flex; flex-direction: column; gap: 1.25rem; margin-bottom: 2.5rem; }

    .info-card {
        display: flex;
        gap: 1rem;
        align-items: flex-start;
        background: white;
        border-radius: 0.75rem;
        padding: 1.25rem 1.5rem;
        border: 1px solid #e5e7eb;
        box-shadow: 0 1px 6px rgba(0,0,0,0.04);
    }
    .info-icon {
        width: 42px;
        height: 42px;
        background: #EFF6FF;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        color: #004197;
        font-size: 1rem;
    }
    .info-card h4 { font-size: 0.85rem; font-weight: 700; color: #004197; margin-bottom: 0.35rem; text-transform: uppercase; letter-spacing: 0.05em; }
    .info-card p { font-size: 0.95rem; color: #374151; margin: 0; line-height: 1.5; }
    .hours { font-size: 0.82rem; color: #9CA3AF; display: block; margin-top: 0.25rem; }

    /* SOCIAL */
    .social-block { margin-top: 0.5rem; }
    .social-block h3 { font-size: 1rem; font-weight: 700; color: #00093e; margin-bottom: 1rem; }
    .social-links { display: flex; flex-wrap: wrap; gap: 0.6rem; }
    .social-btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.55rem 1.1rem;
        border-radius: 6px;
        font-size: 0.85rem;
        font-weight: 600;
        text-decoration: none;
        background: white;
        color: #374151;
        border: 1px solid #D1D5DB;
        transition: border-color 0.2s, color 0.2s, background 0.2s;
    }
    .social-btn i { color: #6B7280; font-size: 1rem; transition: color 0.2s; }
    .social-btn:hover { background: #f3f4f6; border-color: #9CA3AF; color: #00093e; }
    .social-btn:hover i { color: #004197; }

    /* FORM COL */
    .contact-form { display: flex; flex-direction: column; gap: 1.25rem; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .form-group { display: flex; flex-direction: column; gap: 0.4rem; }
    label { font-size: 0.85rem; font-weight: 600; color: #374151; }

    input, select, textarea {
        padding: 0.75rem 1rem;
        border: 1px solid #D1D5DB;
        border-radius: 0.5rem;
        font-size: 0.95rem;
        color: #111827;
        background: white;
        width: 100%;
        box-sizing: border-box;
        transition: border-color 0.2s, box-shadow 0.2s;
        font-family: inherit;
    }
    input:focus, select:focus, textarea:focus {
        outline: none;
        border-color: #004197;
        box-shadow: 0 0 0 3px rgba(0,65,151,0.1);
    }
    textarea { resize: vertical; min-height: 130px; }

    .send-btn {
        background: #004197;
        color: white;
        padding: 0.9rem 2rem;
        border: none;
        border-radius: 50px;
        font-size: 1rem;
        font-weight: 700;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.6rem;
        align-self: flex-start;
        transition: background 0.3s;
    }
    .send-btn:hover { background: #002d6b; }

    /* RESPONSIVE */
    @media (max-width: 1024px) {
        .main-inner { grid-template-columns: 1fr; gap: 3rem; }
        .hero-content { margin-left: 5%; }
    }
    @media (max-width: 768px) {
        .hero { height: 360px; }
        .hero-content h1 { font-size: 2rem; }
        .hero-content { margin-left: 0; padding: 0 1.5rem; }
        .main-section { padding: 3rem 1.5rem; }
        .form-row { grid-template-columns: 1fr; }
        .send-btn { width: 100%; justify-content: center; }
    }
</style>
