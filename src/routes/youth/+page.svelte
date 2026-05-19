<script>
    import Header from '../header.svelte';
    import Footer from '../footer.svelte';
</script>

<svelte:head>
    <title>Child & Youth Development | HEDS</title>
</svelte:head>

<div class="youth-page">
    <Header darkMode={true} />

    <section class="hero">
        <div class="container">
            <div class="content">
                <span class="tag">Child & Youth Development</span>
                <h1>Nurturing Resilient, Empowered Youth</h1>
                <p>HEDS' Child & Youth Development program provides safe spaces, psychosocial support, life skills training, and mentorship for vulnerable children and youth empowering them for a successful transition to education, employment, or safe livelihoods.</p>
                <a href="/get-involved" class="btn-primary">Get Involved</a>
            </div>
            <div class="hero-image">
                <img src="/img1.jpg" alt="Child and Youth Development" />
            </div>
        </div>
    </section>

    <section class="stats">
        <div class="container">
            <div class="stat-card"><h3>15,000+</h3><p>Children & Youth to be Reached by 2030</p></div>
            <div class="stat-card"><h3>15</h3><p>Safe Spaces (CDUs)</p></div>
            <div class="stat-card"><h3>5,000+</h3><p>Youth Completing Life Skills & Mentorship</p></div>
            <div class="stat-card"><h3>90%</h3><p>Positive Impact Rate</p></div>
        </div>
    </section>

    <section class="programs">
        <div class="container">
            <span class="tag-blue">What We Offer</span>
            <h2>Our Child & Youth Programs</h2>
            <div class="programs-grid">
                <div class="program-card">
                    <div class="card-icon">🏠</div>
                    <h3>Child Development Units (CDUs)</h3>
                    <p>15 safe spaces providing nurturing environments where children learn, play, and grow including weekend daycare for 80+ children per site.</p>
                </div>
                <div class="program-card">
                    <div class="card-icon">🧠</div>
                    <h3>Psychosocial Support</h3>
                    <p>Counseling for children dealing with trauma, abuse, or displacement restoring confidence, hope, and emotional well-being.</p>
                </div>
                <div class="program-card">
                    <div class="card-icon">📚</div>
                    <h3>Life Skills & Mentorship</h3>
                    <p>Structured programs equipping 5,000 youth with decision-making, financial literacy, and leadership skills paired with trained community mentors.</p>
                </div>
                <div class="program-card">
                    <div class="card-icon">👨‍👩‍👧</div>
                    <h3>Family & Community Engagement</h3>
                    <p>Parenting groups, community awareness, and family-centered case management to strengthen protective environments for children.</p>
                </div>
                <div class="program-card">
                    <div class="card-icon">🎓</div>
                    <h3>Child Sponsorship</h3>
                    <p>Over 4,000 orphans and vulnerable children have received sponsorship support funding their education, healthcare, nutrition, and holistic development toward self-reliance.</p>
                </div>
                <div class="program-card">
                    <div class="card-icon">⚽</div>
                    <h3>Youth Leadership</h3>
                    <p>Youth forums and leadership committees that give young people a voice in shaping programs and community decisions.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="cta-section">
        <div class="cta-content">
            <h2>Help a Child Build Their Future</h2>
            <p>Your support enables a child to access safe spaces, mentorship, and the skills they need to thrive.</p>
            <div class="cta-buttons">
                <a href="/get-involved?focus=volunteer" class="btn-primary">Volunteer</a>
                <a href="/contact" class="btn-secondary">Contact Us</a>
            </div>
        </div>
    </section>

    <Footer />
</div>

<style>
    .youth-page { background-color: white; }
    .hero { padding: 120px 2rem 4rem; background: linear-gradient(135deg, #f0f7ff 0%, #fff7ed 100%); }
    .hero .container, .programs .container { max-width: 1200px; margin: 0 auto; }
    .hero .container { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
    .tag { display: inline-block; background: #DBEAFE; color: #004197; padding: 0.5rem 1rem; border-radius: 50px; font-size: 1rem; margin-bottom: 1.5rem; }
    .tag-blue { display: inline-block; background: #DBEAFE; color: #004197; padding: 0.5rem 1rem; border-radius: 50px; font-size: 1rem; margin-bottom: 1rem; }
    h1 { font-size: 2.8rem; color: #00093e; margin-bottom: 1.5rem; line-height: 1.2; }
    h2 { font-size: 2.3rem; color: #00093e; margin-bottom: 1rem; font-weight: 600; }
    .content p { font-size: 1.1rem; color: #555; line-height: 1.7; margin-bottom: 2rem; }
    .btn-primary { display: inline-block; background: #fbbd23; color: #000; padding: 0.9rem 2rem; border-radius: 50px; font-weight: 600; text-decoration: none; transition: background 0.3s ease; }
    .btn-primary:hover { background: #ffcb48; }
    .hero-image img { width: 100%; border-radius: 1rem; box-shadow: 0 8px 30px rgba(0,0,0,0.1); }
    .stats { padding: 4rem 2rem; background: #004197; color: white; }
    .stats .container { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; text-align: center; }
    .stat-card { padding: 2rem; }
    .stat-card h3 { font-size: 2.5rem; font-weight: 700; color: #fbbd23; margin-bottom: 0.5rem; }
    .stat-card p { color: rgba(255,255,255,0.85); font-size: 0.95rem; }
    .programs { padding: 6rem 2rem; }
    .programs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 2.5rem; }
    .program-card { background: #f8f9fa; border-radius: 1rem; padding: 2rem; transition: transform 0.3s ease, box-shadow 0.3s ease; }
    .program-card:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
    .card-icon { font-size: 2.5rem; margin-bottom: 1rem; }
    .program-card h3 { font-size: 1.1rem; color: #004197; margin-bottom: 0.75rem; font-weight: 600; }
    .program-card p { color: #666; line-height: 1.6; font-size: 0.95rem; }
    .cta-section { background: #004197; padding: 6rem 2rem; color: white; text-align: center; }
    .cta-content { max-width: 700px; margin: 0 auto; }
    .cta-content h2 { font-size: 2.5rem; color: white; margin-bottom: 1rem; }
    .cta-content p { font-size: 1.1rem; opacity: 0.9; margin-bottom: 2rem; line-height: 1.6; }
    .cta-buttons { display: flex; gap: 1rem; justify-content: center; }
    .btn-secondary { background: transparent; color: white; padding: 0.9rem 2rem; border-radius: 50px; text-decoration: none; font-weight: 600; border: 2px solid white; transition: all 0.3s ease; }
    .btn-secondary:hover { background: white; color: #004197; }
    @media (max-width: 968px) {
        .hero .container { grid-template-columns: 1fr; gap: 2rem; }
        .stats .container { grid-template-columns: repeat(2, 1fr); }
        .programs-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 580px) {
        h1 { font-size: 2rem; }
        .hero { padding: 100px 1.5rem 3rem; }
        .stats .container, .programs-grid { grid-template-columns: 1fr; }
        .cta-buttons { flex-direction: column; align-items: center; }
    }
</style>
