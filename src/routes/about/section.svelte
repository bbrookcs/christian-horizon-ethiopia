<script>
    import { scrollAnimation } from '$lib/scrollAnimation';
</script>
<section class="leadership-container">
    <div class="container" use:scrollAnimation={{ animation: 'slideRight', delay: 300 }}>
        <div class="tag">Our Team</div>
        <h2>Leadership & Staff</h2>
        <p class="description">
            Our team is driven by a deep commitment to inclusion, accountability, and community transformation. Under the direction of Executive Director Dr. Megersa Dabessa, HEDS delivers six interconnected programs reaching Ethiopia's most vulnerable, guided by over 34 years of community trust and a bold vision for 2030.
        </p>

        <!-- Leadership -->
        <div class="team-grid" use:scrollAnimation={{ animation: 'slideUp', delay: 400 }}>
            <div class="team-card">
                <div class="team-photo-wrap">
                    <img src="/drmegersaa.jpg" alt="Dr. Megersa Dabessa" />
                </div>
                <div class="team-info">
                    <h3>Dr. Megersa Dabessa</h3>
                    <span class="role-tag">Executive Director</span>
                </div>
            </div>
            <div class="team-card">
                <div class="team-photo-wrap">
                    <img src="/tewabe.jpg" alt="Mr. Tewabe Habtamu" />
                </div>
                <div class="team-info">
                    <h3>Mr. Tewabe Habtamu</h3>
                    <span class="role-tag">Admin &amp; Finance Director</span>
                </div>
            </div>
            <div class="team-card">
                <div class="team-photo-wrap">
                    <img src="/led.png" alt="Mr. Abie Dassie" />
                </div>
                <div class="team-info">
                    <h3>Mr. Abie Dassie</h3>
                    <span class="role-tag">Horizons Academy Director</span>
                </div>
            </div>
        </div>

        <!-- Staff -->
        <div class="staff-list" use:scrollAnimation={{ animation: 'slideUp', delay: 500 }}>
            <div class="staff-card">
                <img src="/led.png" alt="Mr. Gemeda Jemal" class="staff-photo" />
                <div class="staff-info">
                    <h4>Mr. Gemeda Jemal</h4>
                    <p>Project Coordinator</p>
                </div>
            </div>
            <div class="staff-card">
                <img src="/led.png" alt="Mr. Girmaye Tamirat" class="staff-photo" />
                <div class="staff-info">
                    <h4>Mr. Girmaye Tamirat</h4>
                    <p>Technology &amp; Digital Communications Coordinator</p>
                </div>
            </div>
            <div class="staff-card">
                <img src="/led.png" alt="Mr. Lidetu Tesfaye" class="staff-photo" />
                <div class="staff-info">
                    <h4>Mr. Lidetu Tesfaye</h4>
                    <p>Communication Officer</p>
                </div>
            </div>
            <div class="staff-card">
                <img src="/led.png" alt="Mr. Daniel Abebe" class="staff-photo" />
                <div class="staff-info">
                    <h4>Mr. Daniel Abebe</h4>
                    <p>General Services &amp; Facility Officer</p>
                </div>
            </div>
            <div class="staff-card">
                <img src="/led.png" alt="Mrs. Liya Fekadu" class="staff-photo" />
                <div class="staff-info">
                    <h4>Mrs. Liya Fekadu</h4>
                    <p>Cashier</p>
                </div>
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
                    <img src="/newLMIlogo.jpg" alt="LMI International" />
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

    /* Leadership cards */
    .team-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin-bottom: 3rem;
    }

    .team-card {
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 1rem;
        overflow: hidden;
        box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        transition: box-shadow 0.3s ease, transform 0.3s ease;
    }

    .team-card:hover {
        box-shadow: 0 8px 30px rgba(0,0,0,0.1);
        transform: translateY(-4px);
    }

    .team-photo-wrap {
        width: 100%;
        aspect-ratio: 3 / 3.2;
        overflow: hidden;
        background: #f3f4f6;
    }

    .team-photo-wrap img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
        display: block;
    }

    .team-info {
        padding: 1.25rem 1.5rem 1.5rem;
        border-top: 3px solid #004197;
    }

    .team-info h3 {
        font-size: 1.15rem;
        color: #00093e;
        margin-bottom: 0.5rem;
        font-weight: 700;
    }

    .role-tag {
        display: inline-block;
        background: #EFF6FF;
        color: #004197;
        font-size: 0.82rem;
        font-weight: 600;
        padding: 0.3rem 0.8rem;
        border-radius: 50px;
    }

    /* Staff horizontal list */
    .staff-list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        margin-bottom: 5rem;
    }

    .staff-card {
        display: flex;
        align-items: center;
        gap: 1rem;
        background: #f8f9fa;
        border-radius: 0.75rem;
        padding: 1rem 1.25rem;
        border: 1px solid #e5e7eb;
        transition: background 0.2s ease;
    }

    .staff-card:hover {
        background: #EFF6FF;
    }

    .staff-photo {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        object-fit: cover;
        flex-shrink: 0;
        border: 2px solid #DBEAFE;
    }

    .staff-info h4 {
        font-size: 0.95rem;
        font-weight: 700;
        color: #00093e;
        margin-bottom: 0.2rem;
    }

    .staff-info p {
        font-size: 0.82rem;
        color: #6B7280;
        margin: 0;
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
        height: 60px;
        max-width: 150px;
        object-fit: contain;
    }

    @media (max-width: 968px) {
        .team-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
        }

        .staff-list {
            grid-template-columns: 1fr;
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

        .staff-list {
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