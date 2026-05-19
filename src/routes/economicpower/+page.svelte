<script>
    import Header from '../header.svelte';
    import Footer from '../footer.svelte';
</script>

<div class="economic-page">
    <Header darkMode={true} />
    
    <section class="hero">
        <div class="container">
            <div class="content">
                <span class="tag">Livelihood Promotion</span>
                <h1>Enhancing Sustainable Economic Well-Being</h1>
                <p>Economic independence changes everything — for individuals, families, and entire communities. Our Livelihood Promotion program equips vulnerable women, youth, persons with disabilities, and smallholder farmers with the skills, capital, and connections they need to build sustainable incomes and break the cycle of poverty.</p>
            </div>
            <div class="hero-image">
                <img src="./ecodis4.jpg" alt="Livelihood Promotion Program" />
            </div>
        </div>
    </section>

    <section class="impact">
        <div class="container">
            <div class="stat-card">
                <h3>2,740+</h3>
                <p>Caregivers Economically Empowered</p>
            </div>
            <div class="stat-card">
                <h3>56</h3>
                <p>Women's Savings Groups Established</p>
            </div>
            <div class="stat-card">
                <h3>3.2M ETB</h3>
                <p>Collectively Saved by Women's Groups</p>
            </div>
        </div>
    </section>

    <section class="initiatives">
        <div class="container">
            <h2>How We Build Economic Independence</h2>
            <div class="initiatives-grid">
                <div class="initiative-card">
                    <img src="./eco1.jpeg" alt="Skills Training" />
                    <div class="content">
                        <h3>Vocational &amp; Business Skills Training</h3>
                        <p>We train women, youth, and persons with disabilities in marketable vocational and business skills — providing practical tools and entrepreneurship support to help 5,000 people establish sustainable income-generating activities and achieve financial independence.</p>
                    </div>
                </div>
                <div class="initiative-card">
                    <img src="./eco2.jpeg" alt="VSLA & Savings Groups" />
                    <div class="content">
                        <h3>Women's Savings Groups &amp; VSLAs</h3>
                        <p>Through 56 active Women's Savings Groups and a target of 200 Village Savings and Loan Associations (VSLAs) with 5,000 members, we build community-led financial resilience. These groups have already accumulated 3.2 million Birr in collective savings — proving that economic power grows from within communities.</p>
                    </div>
                </div>
                <div class="initiative-card">
                    <img src="./eco4.jpeg" alt="Microfinance" />
                    <div class="content">
                        <h3>Entrepreneurship &amp; Market Access</h3>
                        <p>We provide seed capital, microloans, financial literacy training, and market linkages to help vulnerable households launch and grow sustainable micro-enterprises. Our target is to support 2,000 new businesses — with 70% of participants reporting increased household income.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer />
</div>

<style>
    .economic-page {
        background-color: white;
    }

    .hero {
        padding: 120px 2rem 4rem;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
    }

    .hero .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
    }

    .tag {
        display: inline-block;
        background-color: #FED7AA;
        color: #9A3412;
        padding: 0.5rem 1rem;
        border-radius: 50px;
        font-size: 1rem;
        margin-bottom: 1.5rem;
    }

    h1 {
        font-size: 3rem;
        color: #000;
        margin-bottom: 1.5rem;
        line-height: 1.2;
    }

    .hero p {
        font-size: 1.2rem;
        color: #666;
        line-height: 1.6;
    }

    .hero-image img {
        width: 100%;
        border-radius: 1rem;
    }

    .impact {
        padding: 4rem 2rem;
        background-color: #FFF7ED;
    }

    .impact .container {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }

    .stat-card {
        text-align: center;
        padding: 2rem;
        background: white;
        border-radius: 1rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    }

    .stat-card h3 {
        font-size: 2.5rem;
        color: #EA580C;
        margin-bottom: 0.5rem;
    }

    .stat-card p {
        color: #666;
    }

    .initiatives {
        padding: 4rem 2rem;
    }

    .initiatives h2 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 3rem;
    }

    .initiatives-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }

    .initiative-card {
        background: white;
        border-radius: 1rem;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    }

    .initiative-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    .initiative-card .content {
        padding: 1.5rem;
    }

    .initiative-card h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .initiative-card p {
        color: #666;
        line-height: 1.6;
        margin-bottom: 0;
    }

    @media (max-width: 968px) {
        .hero .container {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .impact .container {
            grid-template-columns: repeat(2, 1fr);
        }

        .initiatives-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
    }

    @media (max-width: 580px) {
        .hero {
            padding: 100px 1rem 2rem;
        }

        h1 {
            font-size: 2rem;
        }

        .impact .container {
            grid-template-columns: 1fr;
        }
    }
</style> 