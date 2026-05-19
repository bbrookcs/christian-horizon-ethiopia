<script>
    import { scrollAnimation } from '$lib/scrollAnimation';
</script>
<section class="leadership-container">
    <div class="container" use:scrollAnimation={{ animation: 'slideRight', delay: 300 }}>
        <div class="tag">Leadership Team & Collaborations</div>
        <h2>Leadership</h2>
        <p class="description">
            Our leadership team is driven by a deep commitment to inclusion, accountability, and community transformation. Under the direction of Executive Director Dr. Megersa Dabessa, HEDS delivers six interconnected programs reaching Ethiopia's most vulnerable guided by 34 years of community trust and a bold vision for 2030. </p>

        <div class="team-grid" use:scrollAnimation={{ animation: 'slideUp', delay: 400 }}>
            <div class="team-member">
                <img src="./megersa.jpg" alt="Dr. Megersa Dabessa" />
                <h3>Dr. Megersa Dabessa</h3>
                <p>Executive Director</p>
            </div>
            <div class="team-member">
                <img src="./led.png" alt="Tewabe Habtamu" />
                <h3>Tewabe Habtamu</h3>
                <p>Finance & HR Manager</p>
            </div>
            <div class="team-member">
                <img src="./led.png" alt="Team member" />
                <h3>Team member</h3>
                <p>Role description</p>
            </div>
        </div>

        <div class="partners-section" use:scrollAnimation={{ animation: 'slideLeft', delay: 300 }}>
            <div class="partners-content">
                <div class="partners-text">
                    <h2>Our Partners</h2>
                    <p>We collaborate with national and international organizations to achieve our mission of empowering marginalized communities.</p>
                </div>
                <div class="partner-logos">
                    <img src="./karis.png" alt="Karis Disability Services" />
                    <img src="./lmi.png" alt="LMI International" />
                    <img src="./welthungerhilfe.png" alt="WISE" />
                </div>
            </div>
        </div>

        <div class="camp-images">
            <div class="image-grid" use:scrollAnimation={{ animation: 'slideUp', delay: 400 }}> 
                <img src="./fi.jpeg" alt="Community camp activities" class="camp-img" />
                <img src="./camp2.jpg" alt="Community camp activities" class="camp-img" />
                <img src="./camp3.jpg" alt="Community camp activities" class="camp-img" />
                <img src="./camp4.jpg" alt="Community camp activities" class="camp-img" />
            </div>
        </div>

        <div class="cta-container" use:scrollAnimation={{ animation: 'slideTop', delay: 300 }}>
            <div class="cta-section">
                <div class="cta-card">
                    <h3>Volunteer</h3>
                    <p>
                        Join us as a volunteer and help transform lives across Ethiopia. Whether in education, 
                        disability support, or community outreach, your time and skills make a real difference.
                    </p>
                    <a href="/get-involved" class="cta-button cta-anchor">Get Involved</a>
                </div>

                <div class="cta-card">
                    <h3>Donate</h3>
                    <p>
                        Your donation directly supports inclusive education, rehabilitation, 
                        and economic empowerment for Ethiopia's most vulnerable helping us reach our goal of 50,000 lives by 2030.
                    </p>
                    <a href="/donate" class="cta-button cta-anchor">Donate Now</a>
                </div>

                <img 
                    src="/decorative-arrow.svg" 
                    alt="" 
                    class="decorative-arrow" 
                    aria-hidden="true"
                />
                <span class="join-text">Join us in<br>making difference</span>
            </div>
        </div>
    </div>
</section>

<style>
    .leadership-container {
        padding: 6rem 2rem;
        background-color: white;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
    }

    h2 {
        font-size: 2.5rem;
        color: #000;
        margin-bottom: 1.5rem;
        line-height: 1.2;
    }

    .description {
        color: #666;
        line-height: 1.6;
        max-width: 100%;
        margin-bottom: 4rem;
    }

    .team-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin-bottom: 6rem;
    }

    .team-member {
        text-align: left;
    }

    .team-member img {
        width: 100%;
        aspect-ratio: 1 / 1;
        height: auto;
        object-fit: cover;
        object-position: center center;
        border-radius: 1rem;
        margin-bottom: 1.5rem;
        display: block;
    }

    .team-member h3 {
        font-size: 1.5rem;
        color: #000;
        margin-bottom: 0.5rem;
    }

    .team-member p {
        color: #666;
        font-size: 1rem;
    }

    .partners-section {
        margin-top: 6rem;
    }

    .partners-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
    }

    .partners-text {
        max-width: 540px;
    }

    .partners-text p {
        color: #666;
        line-height: 1.6;
        margin-bottom: 0;
    }

    .partner-logos {
        display: flex;
        gap: 4rem;
        align-items: center;
        justify-content: flex-end;
    }

    .partner-logos img {
        height: 100px;
        object-fit: contain;
    }

    @media (max-width: 968px) {
        .team-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
        }

        .partners-content {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .partners-text {
            max-width: 100%;
        }

        .partner-logos {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            justify-content: start;
        }

        .partner-logos img {
            justify-self: start;
        }
    }

    @media (max-width: 580px) {
        .leadership-container {
            padding: 4rem 1.5rem;
        }

        h2 {
            font-size: 2rem;
        }

        .team-grid {
            grid-template-columns: 1fr;
        }

        .partner-logos {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
    }

    .camp-images {
        margin: 6rem 0;
    }

    .image-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    @media (max-width: 580px) {
        .image-grid {
            grid-template-columns: 1fr;
        }
    }

    .camp-img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 12px;
    }

    @media (max-width: 580px) {
        .camp-img {
            height: 250px;
        }
    }

    .cta-container {
        padding: 2rem 2rem;
        margin-top: 5rem;
    }

    .cta-section {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        position: relative;
    }

    .cta-card {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .cta-card h3 {
        font-size: 1.8rem;
        color: #004197;
        font-weight: 600;
    }

    .cta-card p {
        color: #666;
        line-height: 1.6;
        margin: 0;
    }

    .cta-button {
        background-color: #FFB800;
        color: #000;
        padding: 0.8rem 2rem;
        border-radius: 50px;
        border: none;
        font-weight: 500;
        font-size: 1rem;
        cursor: pointer;
        align-self: flex-start;
        transition: background-color 0.3s ease;
    }

    a.cta-anchor {
        text-decoration: none;
        display: inline-block;
        text-align: center;
    }

    .cta-button:hover {
        background-color: #FFA600;
    }

    .decorative-arrow {
        position: absolute;
        bottom: -50px;
        left: 160px;
        width: 150px;
    }

    .join-text {
        position: absolute;
        bottom: -60px;
        left: 320px;
        color: #FF6B00;
        font-size: 1.2rem;
        font-style: italic;
        line-height: 1.2;
    }

    @media (max-width: 968px) {
        .cta-section {
            grid-template-columns: 1fr;
            gap: 4rem;
            padding: 0 1rem;
        }

        .decorative-arrow {
            position: absolute;
            bottom: 230px;
            left: 160px;
            width: 100px;
        }

        .join-text {
            bottom: 210px;
            left: 250px;
        }
    }

    @media (max-width: 580px) {
        .cta-container {
            padding: 2rem 1rem;
            margin-top: 2rem;
        }
    }
</style>