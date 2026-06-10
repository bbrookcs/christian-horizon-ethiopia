<script>
    import Header from "../header.svelte";
    import Footer from "../footer.svelte";
    import Write from "./write.svelte";
</script>

<Header darkMode={true} />

<main>
    <div class="content-wrapper">
        <div class="tag">Get in touch</div>
        
        <section class="contact-section">
            <div class="contact-content">
                <h1>Contact us</h1>
                <p>
                    We would love to hear from you. Whether you want to partner with us, support our programs, 
                    or simply learn more about our work our team is here and ready to connect.
                </p>
            </div>
            <div class="contact-image">
                <img src="/112233.jpg" alt="HEDS team at work" class="main-contact-img" />
            </div>
        </section>
    </div>

    <section class="info-section">
        <div class="info-content">
            <div class="contact-info">
                <div class="tag">Contact us</div>
                <h2>Get in Touch</h2>
                <p>Reach our team at our Asella office during working hours. We aim to respond to all inquiries within 1–2 business days.</p>
                <div class="contact-details">
                    <p class="phone">
                        <i class="fas fa-phone-alt"></i> +251 911 159 428 / +251 920 386 606
                    </p>
                    <p class="office-hours">(Monday to Friday, 9 AM – 5 PM)</p>
                    <p class="location">
                        <i class="fas fa-map-marker-alt"></i> Welkessa Kebele (10), Asella Town, Arsi Zone, Oromia, Ethiopia
                    </p>
                    <p class="location">
                        <i class="fas fa-mail-bulk"></i> P.O. Box 370, Asella, Ethiopia
                    </p>
                </div>
                
            </div>

            <div class="social-info">
                <div class="tag">Follow us</div>
                <h2>Stay Connected</h2>
                <div class="social-links">
                    <a href="#" class="social-link">
                        <i class="fab fa-facebook"></i> Facebook
                    </a>
                    <a href="#" class="social-link">
                        <i class="fab fa-twitter"></i> Twitter
                    </a>
                    <a href="#" class="social-link">
                        <i class="fab fa-instagram"></i> Instagram
                    </a>
                </div>
            </div>
            
        </div>
    </section>
</main>
<Write />
<Footer />

<style>
    main {
        width: 100%;
    }
    .contact-details i {
    margin-right: 8px; /* Adds space between the icon and text */
    font-size: 1.3rem;  /* Adjusts the icon size */
    color: #1a56db;     /* Changes the icon color */
}

    .content-wrapper {
        max-width: 1200px;
        margin: 0 auto;
        padding: 120px 2rem 2rem 2rem;
    }
    .contact-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        margin: 2rem 0 4rem 0;
        align-items: start;
    }

    .contact-content h1 {
        font-size: 3.5rem;
        margin: 1rem 0;
        color: #000;
    }

    .contact-content p {
        font-size: 1.1rem;
        line-height: 1.6;
        color: #4B5563;
    }

    .contact-image {
        border-radius: 12px;
        overflow: hidden;
    }

    .main-contact-img {
        width: 100%;
        height: 360px;
        object-fit: cover;
        border-radius: 12px;
        display: block;
    }

    .info-section {
        width: 100%;
        background: #FFF9F0;
        padding: 4rem 0;
    }

    .info-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
    }

    .contact-info h2, .social-info h2 {
        font-size: 2.5rem;
        margin: 1rem 0;
        color: #000;
    }
.contact-info p{
    color: #6B7280;
}
    .contact-details {
        margin-top: 2rem;
    }

    .contact-details p {
        margin: 0.5rem 0;
        color: #4B5563;
    }

    .office-hours, .response-time {
        font-style: italic;
        color: #6B7280;
        font-size: 0.9rem;
    }

    .phone, .location, .email {
        color: #1a56db;
        text-decoration: none;
        font-weight: 500;
    }

    .social-links {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 2rem;
    }

    .social-link {
        color: #002169;
        text-decoration: none;
        font-weight: 600;
    }
    .social-links i {
    margin-right: 8px; /* Adds space between the icon and text */
    font-size: 1.5rem;  /* Adjusts the icon size */
    color: #1a56db;     /* Changes the icon color */
}

    @media (max-width: 768px) {
        .contact-section, .info-content {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .contact-content h1 {
            font-size: 2.5rem;
        }

        .contact-image img {
            height: 260px;
        }

        .content-wrapper {
            padding: 100px 1rem 1rem 1rem;
        }

        .info-content {
            padding: 0 1rem;
        }
    }
</style>
