<script>
    import Header from "../header.svelte";
    import Footer from "../footer.svelte";
</script>

<svelte:head>
    <title>Horizons Academy | HEDS</title>
</svelte:head>

<div class="academy-page">
    <Header darkMode={true} />

    <section class="hero">
        <div class="container">
            <div class="content">
                <span class="tag">Horizons Academy</span>
                <h1>Quality Inclusive Education — Changing Lives</h1>
                <p>Horizons Academy is HEDS' flagship income-generating school — a premier educational institution delivering quality, inclusive education from Kindergarten to Secondary School. Operating across 3 campuses in Asella and Arsi Robe, the Academy serves 1,300 students including children with disabilities, while generating sustainable revenue that funds HEDS' charitable programs.</p>
                <a href="/get-involved?focus=enrollment" class="btn-primary">Enroll Now</a>
            </div>
            <div class="hero-image">
                <img src="/img4.jpg" alt="Horizons Academy" />
            </div>
        </div>
    </section>

    <section class="stats">
        <div class="container">
            <div class="stat-card"><h3>2009 E.C.</h3><p>Established</p></div>
            <div class="stat-card"><h3>1,300+</h3><p>Students Enrolled</p></div>
            <div class="stat-card"><h3>3</h3><p>Campuses Across Oromia</p></div>
            <div class="stat-card"><h3>76+</h3><p>Staff Members</p></div>
        </div>
    </section>

    <section class="offerings">
        <div class="container">
            <span class="tag-blue">What We Offer</span>
            <h2>Academy Programs</h2>
            <div class="offerings-grid">
                <div class="offering-card">
                    <div class="card-icon">🎒</div>
                    <h3>Early Childhood Education</h3>
                    <p>Foundational learning programs for young children with a strong emphasis on inclusive pedagogy, play-based learning, and developmental support.</p>
                </div>
                <div class="offering-card">
                    <div class="card-icon">♿</div>
                    <h3>Special & Inclusive Education</h3>
                    <p>Specialized classrooms and trained educators supporting children with physical, sensory, and intellectual disabilities alongside their peers.</p>
                </div>
                <div class="offering-card">
                    <div class="card-icon">🔧</div>
                    <h3>Vocational Training</h3>
                    <p>Practical skills training in trades and technology to prepare youth for employment — generating both student outcomes and academy revenue.</p>
                </div>
                <div class="offering-card">
                    <div class="card-icon">👩‍🏫</div>
                    <h3>Teacher Training</h3>
                    <p>Professional development for educators in inclusive pedagogy — contributing to HEDS' 200-teacher training target across 10 improved schools.</p>
                </div>
                <div class="offering-card">
                    <div class="card-icon">📅</div>
                    <h3>Weekend Daycare</h3>
                    <p>Safe, supervised weekend programs for 80+ children — allowing parents to work while children receive structured learning and care.</p>
                </div>
                <div class="offering-card">
                    <div class="card-icon">💼</div>
                    <h3>Community Outreach</h3>
                    <p>Extending the Academy's reach into surrounding communities through awareness campaigns, scholarship programs, and family engagement sessions.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="iga-section">
        <div class="container">
            <div class="iga-text">
                <span class="tag-orange">Our Facilities</span>
                <h2>A Safe and Welcoming Campus</h2>
                <p>Horizons Academy features modern classrooms tailored for inclusive education, fully accessible facilities for students with disabilities, vocational training workshops, and recreational areas designed to foster holistic development.</p>
            </div>
            <div class="iga-image">
                <img src="/img2.jpg" alt="Academy Campus" />
            </div>
        </div>
    </section>

    <section class="cta-section">
        <div class="cta-content">
            <h2>Join the Horizons Academy Community</h2>
            <p>Whether you are a student, parent, partner, or donor — there is a place for you at Horizons Academy.</p>
            <div class="cta-buttons">
                <a href="/get-involved?focus=enrollment" class="btn-primary">Enroll / Get Involved</a>
                <a href="/contact" class="btn-secondary">Contact Us</a>
            </div>
        </div>
    </section>

    <Footer />
</div>

<style>
    .academy-page { background-color: white; }
    .hero { padding: 120px 2rem 4rem; background: linear-gradient(135deg, #fffbeb 0%, #f0f7ff 100%); }
    .hero .container { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
    .tag { display: inline-block; background: #FEF3C7; color: #D97706; padding: 0.5rem 1rem; border-radius: 50px; font-size: 1rem; margin-bottom: 1.5rem; }
    .tag-blue { display: inline-block; background: #DBEAFE; color: #004197; padding: 0.5rem 1rem; border-radius: 50px; font-size: 1rem; margin-bottom: 1rem; }
    .tag-orange { display: inline-block; background: #FED7AA; color: #9A3412; padding: 0.5rem 1rem; border-radius: 50px; font-size: 1rem; margin-bottom: 1.5rem; }
    h1 { font-size: 2.8rem; color: #00093e; margin-bottom: 1.5rem; line-height: 1.2; }
    h2 { font-size: 2.3rem; color: #00093e; margin-bottom: 1rem; font-weight: 600; }
    .content p { font-size: 1.1rem; color: #555; line-height: 1.7; margin-bottom: 2rem; }
    .btn-primary { display: inline-block; background: #fbbd23; color: #000; padding: 0.9rem 2rem; border-radius: 50px; font-weight: 600; text-decoration: none; transition: background 0.3s ease; }
    .btn-primary:hover { background: #ffcb48; }
    .hero-image img { width: 100%; border-radius: 1rem; box-shadow: 0 8px 30px rgba(0,0,0,0.1); }
    .stats { padding: 4rem 2rem; background: #fbbd23; }
    .stats .container { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; text-align: center; }
    .stat-card { padding: 2rem; }
    .stat-card h3 { font-size: 2.2rem; font-weight: 700; color: #00093e; margin-bottom: 0.5rem; }
    .stat-card p { color: rgba(0,9,62,0.75); font-size: 0.95rem; font-weight: 500; }
    .offerings { padding: 6rem 2rem; }
    .offerings .container { max-width: 1200px; margin: 0 auto; }
    .offerings-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 2.5rem; }
    .offering-card { background: #f8f9fa; border-radius: 1rem; padding: 2rem; transition: transform 0.3s ease, box-shadow 0.3s ease; }
    .offering-card:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
    .card-icon { font-size: 2.5rem; margin-bottom: 1rem; }
    .offering-card h3 { font-size: 1.1rem; color: #D97706; margin-bottom: 0.75rem; font-weight: 600; }
    .offering-card p { color: #666; line-height: 1.6; font-size: 0.95rem; }
    .iga-section { padding: 5rem 2rem; background: #FFF7ED; }
    .iga-section .container { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
    .iga-table { margin-top: 2rem; border-radius: 0.75rem; overflow: hidden; border: 1px solid #FED7AA; }
    .iga-row { display: flex; justify-content: space-between; padding: 0.9rem 1.25rem; font-size: 0.95rem; border-bottom: 1px solid #FED7AA; }
    .iga-row:last-child { border-bottom: none; }
    .iga-row:nth-child(odd) { background: white; }
    .iga-row:nth-child(even) { background: #FFF7ED; }
    .iga-row span:first-child { font-weight: 600; color: #9A3412; }
    .iga-row span:last-child { color: #555; }
    .iga-text p { font-size: 1.05rem; color: #555; line-height: 1.7; margin-bottom: 1rem; }
    .iga-image img { width: 100%; border-radius: 1rem; box-shadow: 0 8px 30px rgba(0,0,0,0.1); }
    .cta-section { background: #004197; padding: 6rem 2rem; color: white; text-align: center; }
    .cta-content { max-width: 700px; margin: 0 auto; }
    .cta-content h2 { font-size: 2.5rem; color: white; margin-bottom: 1rem; }
    .cta-content p { font-size: 1.1rem; opacity: 0.9; margin-bottom: 2rem; line-height: 1.6; }
    .cta-buttons { display: flex; gap: 1rem; justify-content: center; }
    .btn-secondary { background: transparent; color: white; padding: 0.9rem 2rem; border-radius: 50px; text-decoration: none; font-weight: 600; border: 2px solid white; transition: all 0.3s ease; }
    .btn-secondary:hover { background: white; color: #004197; }
    @media (max-width: 968px) {
        .hero .container, .iga-section .container { grid-template-columns: 1fr; gap: 2rem; }
        .stats .container { grid-template-columns: repeat(2, 1fr); }
        .offerings-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 580px) {
        h1 { font-size: 2rem; }
        .hero { padding: 100px 1.5rem 3rem; }
        .stats .container, .offerings-grid { grid-template-columns: 1fr; }
        .cta-buttons { flex-direction: column; align-items: center; }
    }
</style>
