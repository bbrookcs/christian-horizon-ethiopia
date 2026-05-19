<script>
    import Header from '../header.svelte';
    import Footer from '../footer.svelte';
</script>

<div class="disability-page">
    <Header darkMode={true} />
    
    <section class="hero">
        <div class="container">
            <div class="content">
                <span class="tag">Inclusive Development</span>
                <h1>Promoting Full Participation, Accessibility & Rights of Persons with Disabilities</h1>
                <p>HEDS' Inclusive Development program provides comprehensive services to empower persons with disabilities (PWDs), ensuring they have accessible infrastructure, assistive devices, rehabilitation, and equal opportunities for growth and economic independence.</p>
            </div>
            <div class="hero-image">
                <img src="./Rroom4.jpg" alt="Inclusive Development Program" />
            </div>
        </div>
    </section>

    <section class="stats">
        <div class="container">
            <div class="stat-card">
                <h3>10,000+</h3>
                <p>PWDs to be Reached by 2030</p>
            </div>
            <div class="stat-card">
                <h3>5,000+</h3>
                <p>Assistive Devices to be Distributed</p>
            </div>
            <div class="stat-card">
                <h3>8,000+</h3>
                <p>PWDs Receiving Rehabilitation</p>
            </div>
            <div class="stat-card">
                <h3>100,000+</h3>
                <p>Community Members Reached Through Awareness</p>
            </div>
        </div>
    </section>

    <section class="programs">
        <div class="container">
            <h2>How We Serve Persons with Disabilities</h2>
            <div class="image-grid">
                <article class="program-card">
                    <div class="program-card-media">
                        <img src="./ecodis1.jpg" alt="Rehabilitation Services" />
                    </div>
                    <div class="program-card-body">
                        <h3>Rehabilitation Services</h3>
                        <p>We deliver comprehensive rehabilitation programs tailored to individual needs, covering physical, sensory, intellectual, and psychosocial disabilities. Our goal is to help 8,000 persons with disabilities regain function, independence, and dignity.</p>
                    </div>
                </article>
                <article class="program-card">
                    <div class="program-card-media">
                        <img src="./img3.jpg" alt="Assistive Devices and mobility support" />
                    </div>
                    <div class="program-card-body">
                        <h3>Assistive Devices &amp; Mobility Support</h3>
                        <p>We distribute wheelchairs, crutches, hearing aids, and other assistive technologies to enable mobility, communication, and daily independence. Our 5-year target is to reach 5,000 persons with disabilities across the Oromia Region and beyond.</p>
                    </div>
                </article>
                <article class="program-card">
                    <div class="program-card-media">
                        <img src="./ecodis3.jpg" alt="Community inclusion and DPO strengthening" />
                    </div>
                    <div class="program-card-body">
                        <h3>Community Inclusion &amp; DPO Strengthening</h3>
                        <p>We work alongside communities to change attitudes toward disability. Through awareness campaigns reaching over 100,000 community members and strengthening 5 Disabled Persons Organizations (DPOs), we build societies where every person, regardless of ability, is valued, included, and heard.</p>
                    </div>
                </article>
                <article class="program-card">
                    <div class="program-card-media">
                        <img src="./eduimg2.jpg" alt="Rights-based advocacy" />
                    </div>
                    <div class="program-card-body">
                        <h3>Rights-Based Advocacy</h3>
                        <p>We empower persons with disabilities and their families to know and claim their rights. Through workshops, legal awareness, and partnership with DPOs, we advocate for policy change and equal access to services at local and regional levels.</p>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <Footer />
</div>

<style>
    .disability-page {
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
        background-color: #DBEAFE;
        color: #004197;
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

    .stats {
        padding: 4rem 2rem;
        background-color: #F8FAFC;
    }

    .stats .container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
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
        color: #004197;
        margin-bottom: 0.5rem;
    }

    .stat-card p {
        color: #666;
    }

    .programs {
        padding: 5rem 2rem;
        background-color: #f8f9fa;
    }

    .programs .container {
        max-width: 1280px;
    }

    .programs h2 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 3rem;
        color: #004197;
        font-weight: 700;
        letter-spacing: -0.02em;
    }

    .image-grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 1.75rem;
        align-items: stretch;
    }

    .program-card {
        background: #fff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
        border: 1px solid rgba(0, 65, 151, 0.09);
        text-align: left;
        transition: transform 0.28s ease, box-shadow 0.28s ease;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .program-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 14px 40px rgba(0, 65, 151, 0.13);
        border-color: rgba(0, 65, 151, 0.14);
    }

    .program-card-media {
        position: relative;
        aspect-ratio: 4 / 3;
        width: 100%;
        overflow: hidden;
        background: linear-gradient(145deg, #e8eef6 0%, #dce6f3 100%);
    }

    .program-card-media img {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        border: none;
        border-radius: 0;
        object-fit: cover;
        object-position: center;
        display: block;
        transition: transform 0.4s ease;
    }

    .program-card:hover .program-card-media img {
        transform: scale(1.04);
    }

    .program-card-body {
        padding: 1.35rem 1.4rem 1.65rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.7rem;
    }

    .program-card-body h3 {
        font-size: 1.2rem;
        font-weight: 600;
        line-height: 1.35;
        margin: 0;
        color: #004197;
    }

    .program-card-body p {
        margin: 0;
        color: #4b5563;
        font-size: 0.9375rem;
        line-height: 1.65;
    }

    @media (max-width: 968px) {
        .hero .container {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .stats .container {
            grid-template-columns: repeat(2, 1fr);
        }

        .image-grid {
            grid-template-columns: repeat(2, 1fr);
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

        .image-grid {
            grid-template-columns: 1fr;
        }

        .stats .container {
            grid-template-columns: 1fr;
        }
    }
</style> 