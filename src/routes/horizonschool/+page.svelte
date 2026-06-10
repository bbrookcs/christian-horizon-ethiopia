<script>
    import Header from "../header.svelte";
    import Footer from "../footer.svelte";

    const studentData = [
        { year: '2009', kg: 290, grade: 132, total: 422 },
        { year: '2010', kg: 260, grade: 211, total: 471 },
        { year: '2011', kg: 286, grade: 267, total: 553 },
        { year: '2012', kg: 274, grade: 370, total: 644 },
        { year: '2013', kg: 208, grade: 412, total: 620 },
        { year: '2014', kg: 352, grade: 503, total: 855 },
        { year: '2015', kg: 343, grade: 561, total: 904 },
        { year: '2016', kg: 387, grade: 567, total: 954 },
        { year: '2017', kg: 352, grade: 746, total: 1098 },
        { year: '2018', kg: 428, grade: 850, total: 1278 },
    ];

    const maxTotal = 1278;
</script>

<svelte:head>
    <title>Horizons Academy | HEDS</title>
</svelte:head>

<div class="academy-page">
    <Header darkMode={true} />

    <!-- HERO -->
    <section class="hero">
        <div class="hero-bg">
            <img src="/horizonschool/2026-06-10%2013.16.36.jpg" alt="Horizons Academy morning assembly" class="hero-bg-img" />
            <div class="hero-overlay"></div>
        </div>
        <div class="hero-content">
            <span class="tag-yellow">Horizons Academy</span>
            <h1>A School That Pays It Forward</h1>
            <p>
                Horizons Academy is HEDS' flagship income-generating school, a quality private institution
                serving Kindergarten through Grade 8 in Asella, Oromia. Every tuition fee paid funds HEDS'
                charitable programs that reach thousands of vulnerable children across the region.
            </p>
            <div class="hero-btns">
                <a href="/contact" class="btn-outline">Contact the Academy</a>
            </div>
        </div>
    </section>

    <!-- STATS BAR -->
    <section class="stats-bar">
        <div class="stat">
            <span class="stat-num">2009</span>
            <span class="stat-label">E.C. Founded</span>
        </div>
        <div class="divider"></div>
        <div class="stat">
            <span class="stat-num">1,278+</span>
            <span class="stat-label">Students Enrolled</span>
        </div>
        <div class="divider"></div>
        <div class="stat">
            <span class="stat-num">57+</span>
            <span class="stat-label">Staff Members</span>
        </div>
        <div class="divider"></div>
        <div class="stat">
            <span class="stat-num">KG – 8</span>
            <span class="stat-label">Grade Levels</span>
        </div>
        <div class="divider"></div>
        <div class="stat">
            <span class="stat-num">IGA</span>
            <span class="stat-label">Income for HEDS Programs</span>
        </div>
    </section>

    <!-- IDENTITY SECTION -->
    <section class="identity">
        <div class="identity-inner">
            <div class="identity-text">
                <span class="tag-blue">Who We Are</span>
                <h2>More Than a School</h2>
                <p>
                    Horizons Academy is not a charity program; it is a fully operational private school
                    that earns its keep. As HEDS' primary Income Generating Activity (IGA), the Academy
                    collects tuition from families who can afford quality education, and channels that
                    revenue directly into HEDS' six charitable programs serving orphans, people with
                    disabilities, impoverished women, and vulnerable youth.
                </p>
                <p>
                    Established in 2009 E.C. in Asella with just 422 students across Kindergarten and
                    Grades 1–4, the Academy has grown steadily every year, reaching 1,278 students
                    across KG through Grade 8 by 2018 E.C., with a dedicated team of 57 staff.
                </p>
                <div class="identity-badges">
                    <div class="badge"><span>✔</span> Quality Private Education</div>
                    <div class="badge"><span>✔</span> Inclusive Welcomes Students with Disabilities</div>
                    <div class="badge"><span>✔</span> Revenue Funds HEDS Charitable Work</div>
                    <div class="badge"><span>✔</span> Certified & Government-Registered</div>
                </div>
            </div>
            <div class="identity-images">
                <img src="/horizonschool/2026-06-10%2012.41.19.jpg" alt="Horizons Academy students in assembly" class="id-img id-img-main" />
                <img src="/horizonschool/2026-06-10%2013.10.09.jpg" alt="KG graduation ceremony" class="id-img id-img-secondary" />
            </div>
        </div>
    </section>

    <!-- GROWTH CHART -->
    <section class="growth-section">
        <div class="growth-inner">
            <span class="tag-orange">By the Numbers</span>
            <h2>Student Growth: 2009 to 2018 E.C.</h2>
            <p class="growth-sub">From 422 students at founding to over 1,278 steady growth every year.</p>

            <div class="chart-wrapper">
                {#each studentData as row}
                <div class="chart-row">
                    <span class="chart-year">{row.year}</span>
                    <div class="chart-bars">
                        <div class="bar-kg" style="width: {(row.kg / maxTotal) * 100}%">
                            <span class="bar-label">{row.kg}</span>
                        </div>
                        <div class="bar-grade" style="width: {(row.grade / maxTotal) * 100}%">
                            <span class="bar-label">{row.grade}</span>
                        </div>
                    </div>
                    <span class="chart-total">{row.total.toLocaleString()}</span>
                </div>
                {/each}
                <div class="chart-legend">
                    <span class="legend-item kg">KG Students</span>
                    <span class="legend-item grade">Grade 1–8 Students</span>
                </div>
            </div>
        </div>
    </section>

    <!-- LIFE AT THE ACADEMY -->
    <section class="life-section">
        <div class="life-inner">
            <span class="tag-blue">Campus Life</span>
            <h2>Life at Horizons Academy</h2>
            <p class="life-sub">Academic excellence, cultural celebration, science discovery, and inclusive community, all under one roof.</p>

            <div class="life-grid">
                <div class="life-card tall">
                    <img src="/horizonschool/2026-06-10%2013.09.56.jpg" alt="Students in examination" />
                    <div class="life-caption">Academic Excellence</div>
                </div>
                <div class="life-card">
                    <img src="/horizonschool/2026-06-10%2012.41.10.jpg" alt="Science lab with microscopes" />
                    <div class="life-caption">Science & Discovery</div>
                </div>
                <div class="life-card">
                    <img src="/horizonschool/2026-06-10%2013.10.14.jpg" alt="Early childhood learning" />
                    <div class="life-caption">Early Childhood Learning</div>
                </div>
                <div class="life-card">
                    <img src="/horizonschool/2026-06-10%2012.41.05.jpg" alt="Cultural celebration" />
                    <div class="life-caption">Cultural Celebrations</div>
                </div>
                <div class="life-card">
                    <img src="/horizonschool/2026-06-10%2013.16.50.jpg" alt="Outdoor reading and study" />
                    <div class="life-caption">Outdoor Learning</div>
                </div>
                <div class="life-card">
                    <img src="/horizonschool/2026-06-10%2013.10.02.jpg" alt="Student debate and presentation" />
                    <div class="life-caption">Student Leadership</div>
                </div>
            </div>
        </div>
    </section>

    <!-- INCLUSIVE EDUCATION -->
    <section class="inclusive-section">
        <div class="inclusive-inner">
            <div class="inclusive-image">
                <img src="/horizonschool/2026-06-10%2013.16.58.jpg" alt="Students with disabilities at Horizons Academy" />
            </div>
            <div class="inclusive-text">
                <span class="tag-orange">Inclusive School</span>
                <h2>Every Child Belongs Here</h2>
                <p>
                    Horizons Academy is one of the few private schools in the Oromia Region that actively
                    enrols and supports students with physical and other disabilities. Wheelchair-accessible
                    facilities, adapted learning environments, and trained staff ensure that students with
                    disabilities participate fully in school life from morning assembly to graduation day.
                </p>
                <p>
                    This inclusive commitment is at the heart of HEDS' mission. The Academy does not just
                    generate revenue; it models what an inclusive school can look like for the broader
                    Ethiopian education system.
                </p>
            </div>
        </div>
    </section>

    <!-- CULTURAL LIFE -->
    <section class="cultural-section">
        <div class="cultural-inner">
            <div class="cultural-text">
                <span class="tag-blue">Culture & Identity</span>
                <h2>Celebrating Ethiopian Heritage</h2>
                <p>
                    Horizons Academy nurtures students' pride in Ethiopian culture. Annual cultural festivals
                    bring together students in traditional dress representing the rich diversity of Oromia
                    and Ethiopia, fostering unity, identity, and joy among students from all backgrounds.
                </p>
            </div>
            <div class="cultural-images">
                <img src="/horizonschool/2026-06-10%2012.41.05.jpg" alt="Students in cultural dress" />
                <img src="/horizonschool/2026-06-10%2012.41.32.jpg" alt="Students celebrating culture" />
            </div>
        </div>
    </section>

    <!-- STAFF -->
    <section class="staff-section">
        <div class="staff-inner">
            <span class="tag-yellow">Our People</span>
            <h2>Dedicated Staff, Growing Team</h2>
            <p class="staff-sub">
                From 28 staff in 2009 to 57 in 2018 E.C. the Academy's team of KG teachers, grade teachers,
                and supportive staff grows with the school.
            </p>
            <div class="staff-grid">
                <div class="staff-card">
                    <div class="staff-num">20+</div>
                    <div class="staff-role">KG Teachers</div>
                    <div class="staff-note">All dedicated early childhood educators</div>
                </div>
                <div class="staff-card">
                    <div class="staff-num">22+</div>
                    <div class="staff-role">Grade Teachers</div>
                    <div class="staff-note">Covering Grades 1 through 8</div>
                </div>
                <div class="staff-card">
                    <div class="staff-num">15+</div>
                    <div class="staff-role">Supportive Staff</div>
                    <div class="staff-note">Administration, facilities & care</div>
                </div>
            </div>
            <div class="staff-photo-row">
                <img src="/horizonschool/2026-06-10%2013.10.06.jpg" alt="Teacher training session" />
                <div class="staff-photo-text">
                    <h3>Continuous Professional Development</h3>
                    <p>
                        Academy teachers receive ongoing professional training in inclusive pedagogy,
                        subject-specific methodology, and child-centred teaching practices. A well-trained
                        teacher is the Academy's most important resource.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- CAMPUS -->
    <section class="campus-section">
        <div class="campus-inner">
            <div class="campus-text">
                <span class="tag-blue">Our Campus</span>
                <h2>A Safe, Green Learning Environment</h2>
                <p>
                    The Horizons Academy campus in Asella features well-maintained classrooms, open
                    courtyards, landscaped gardens, and accessible facilities. The school's buildings
                    provide a welcoming and safe space where students thrive academically and socially.
                </p>
            </div>
            <div class="campus-image">
                <img src="/horizonschool/2026-06-10%2013.17.06.jpg" alt="Horizons Academy campus buildings" />
            </div>
        </div>
    </section>

    <!-- IGA EXPLAINER -->
    <section class="iga-section">
        <div class="iga-inner">
            <div class="iga-icon">💡</div>
            <h2>How the Academy Funds HEDS' Mission</h2>
            <p>
                Horizons Academy operates as an Income Generating Activity (IGA). Families who enrol
                their children pay tuition fees for a quality private education. That revenue flows
                directly into HEDS' operating budget, funding programs that serve orphans, people with
                disabilities, women, and vulnerable youth, the very populations who could never afford the Academy.
            </p>
            <div class="iga-flow">
                <div class="flow-step">
                    <div class="flow-icon">🏫</div>
                    <div class="flow-label">Families pay tuition to Horizons Academy</div>
                </div>
                <div class="flow-arrow">→</div>
                <div class="flow-step">
                    <div class="flow-icon">💰</div>
                    <div class="flow-label">Revenue funds HEDS operations</div>
                </div>
                <div class="flow-arrow">→</div>
                <div class="flow-step">
                    <div class="flow-icon">🤝</div>
                    <div class="flow-label">Free services reach 25,000+ vulnerable people</div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
        <div class="cta-inner">
            <img src="/horizonschool/2026-06-10%2013.10.09.jpg" alt="KG graduation" class="cta-bg-img" />
            <div class="cta-overlay"></div>
            <div class="cta-content">
                <h2>Enrol at Horizons Academy</h2>
                <p>
                    Give your child a quality education and help fund a program that changes thousands
                    of other lives. Enrolment is open for Kindergarten through Grade 8.
                </p>
                <div class="cta-btns">
                    <a href="/get-involved?focus=enrollment" class="btn-primary">Apply for Enrolment</a>
                    <a href="/contact" class="btn-outline-white">Ask a Question</a>
                </div>
            </div>
        </div>
    </section>

    <Footer />
</div>

<style>
    .academy-page { background: white; font-family: inherit; }

    /* HERO */
    .hero { position: relative; min-height: 90vh; display: flex; align-items: center; overflow: hidden; }
    .hero-bg { position: absolute; inset: 0; }
    .hero-bg-img { width: 100%; height: 100%; object-fit: cover; object-position: center top; }
    .hero-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(0, 9, 62, 0.715) 0%, rgba(0, 65, 151, 0.461) 100%); }
    .hero-content { position: relative; z-index: 2; max-width: 700px; margin-left: 8%; color: white; padding: 8rem 2rem 4rem; }
    .hero-content h1 { font-size: 3.5rem; font-weight: 800; line-height: 1.15; margin: 1rem 0 1.5rem; }
    .hero-content p { font-size: 1.15rem; line-height: 1.7; opacity: 0.92; margin-bottom: 2.5rem; }
    .hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; }

    /* BUTTONS */
    .btn-primary { background: #fbbd23; color: #000; padding: 0.9rem 2rem; border-radius: 50px; font-weight: 700; text-decoration: none; transition: background 0.3s; }
    .btn-primary:hover { background: #ffd050; }
    .btn-outline { background: transparent; color: white; border: 2px solid white; padding: 0.9rem 2rem; border-radius: 50px; font-weight: 600; text-decoration: none; transition: all 0.3s; }
    .btn-outline:hover { background: white; color: #00093e; }
    .btn-outline-white { background: transparent; color: white; border: 2px solid white; padding: 0.9rem 2rem; border-radius: 50px; font-weight: 600; text-decoration: none; transition: all 0.3s; }
    .btn-outline-white:hover { background: white; color: #00093e; }

    /* TAGS */
    .tag-yellow { display: inline-block; background: #fbbd23; color: #000; padding: 0.4rem 1.1rem; border-radius: 50px; font-size: 0.9rem; font-weight: 700; margin-bottom: 1.2rem; }
    .tag-blue { display: inline-block; background: #DBEAFE; color: #004197; padding: 0.4rem 1.1rem; border-radius: 50px; font-size: 0.9rem; font-weight: 700; margin-bottom: 1.2rem; }
    .tag-orange { display: inline-block; background: #FED7AA; color: #9A3412; padding: 0.4rem 1.1rem; border-radius: 50px; font-size: 0.9rem; font-weight: 700; margin-bottom: 1.2rem; }

    /* STATS BAR */
    .stats-bar { background: #00093e; display: flex; justify-content: center; align-items: center; flex-wrap: wrap; padding: 2.5rem 2rem; }
    .stat { text-align: center; padding: 0.5rem 3rem; }
    .stat-num { display: block; font-size: 2rem; font-weight: 800; color: #fbbd23; }
    .stat-label { display: block; font-size: 0.85rem; color: rgba(255,255,255,0.75); margin-top: 0.25rem; font-weight: 500; }
    .divider { width: 1px; height: 50px; background: rgba(255,255,255,0.2); }

    /* IDENTITY */
    .identity { padding: 6rem 2rem; background: white; }
    .identity-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
    .identity-text h2 { font-size: 2.5rem; color: #00093e; margin-bottom: 1rem; }
    .identity-text p { color: #555; line-height: 1.75; margin-bottom: 1.2rem; font-size: 1.05rem; }
    .identity-badges { margin-top: 1.5rem; display: flex; flex-direction: column; gap: 0.6rem; }
    .badge { display: flex; align-items: center; gap: 0.6rem; font-size: 0.95rem; color: #333; font-weight: 500; }
    .badge span { color: #004197; font-weight: 700; }
    .identity-images { display: grid; grid-template-rows: auto auto; gap: 1rem; }
    .id-img { width: 100%; border-radius: 1rem; object-fit: cover; }
    .id-img-main { height: 320px; }
    .id-img-secondary { height: 200px; }

    /* GROWTH CHART */
    .growth-section { background: #f8f9fa; padding: 6rem 2rem; }
    .growth-inner { max-width: 900px; margin: 0 auto; }
    .growth-inner h2 { font-size: 2.2rem; color: #00093e; margin-bottom: 0.5rem; }
    .growth-sub { color: #666; margin-bottom: 3rem; font-size: 1.05rem; }
    .chart-wrapper { display: flex; flex-direction: column; gap: 0.75rem; }
    .chart-row { display: grid; grid-template-columns: 60px 1fr 70px; gap: 1rem; align-items: center; }
    .chart-year { font-size: 0.85rem; color: #555; font-weight: 600; text-align: right; }
    .chart-bars { display: flex; flex-direction: column; gap: 3px; }
    .bar-kg { background: #004197; height: 18px; border-radius: 3px; display: flex; align-items: center; min-width: 30px; }
    .bar-grade { background: #fbbd23; height: 18px; border-radius: 3px; display: flex; align-items: center; min-width: 30px; }
    .bar-label { font-size: 0.7rem; color: white; padding-left: 6px; font-weight: 600; white-space: nowrap; }
    .bar-grade .bar-label { color: #000; }
    .chart-total { font-size: 0.9rem; font-weight: 700; color: #00093e; }
    .chart-legend { display: flex; gap: 2rem; margin-top: 1.5rem; padding-left: 76px; }
    .legend-item { font-size: 0.85rem; font-weight: 600; display: flex; align-items: center; gap: 0.5rem; }
    .legend-item::before { content: ''; display: inline-block; width: 14px; height: 14px; border-radius: 3px; }
    .legend-item.kg::before { background: #004197; }
    .legend-item.grade::before { background: #fbbd23; }
    .legend-item.kg { color: #004197; }
    .legend-item.grade { color: #9A3412; }

    /* LIFE */
    .life-section { padding: 6rem 2rem; background: white; }
    .life-inner { max-width: 1200px; margin: 0 auto; }
    .life-inner h2 { font-size: 2.2rem; color: #00093e; margin-bottom: 0.5rem; }
    .life-sub { color: #666; margin-bottom: 3rem; font-size: 1.05rem; max-width: 650px; }
    .life-grid { display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: auto auto; gap: 1rem; }
    .life-card { position: relative; border-radius: 1rem; overflow: hidden; }
    .life-card.tall { grid-row: span 2; }
    .life-card img { width: 100%; height: 100%; object-fit: cover; display: block; min-height: 220px; transition: transform 0.4s ease; }
    .life-card.tall img { min-height: 460px; }
    .life-card:hover img { transform: scale(1.04); }
    .life-caption { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,9,62,0.8)); color: white; padding: 1.5rem 1rem 0.8rem; font-weight: 600; font-size: 0.9rem; }

    /* INCLUSIVE */
    .inclusive-section { padding: 6rem 2rem; background: #EFF6FF; }
    .inclusive-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
    .inclusive-image img { width: 100%; border-radius: 1rem; object-fit: cover; height: 420px; }
    .inclusive-text h2 { font-size: 2.2rem; color: #00093e; margin-bottom: 1rem; }
    .inclusive-text p { color: #555; line-height: 1.75; font-size: 1.05rem; margin-bottom: 1.2rem; }

    /* CULTURAL */
    .cultural-section { padding: 6rem 2rem; background: #FFFBEB; }
    .cultural-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
    .cultural-text h2 { font-size: 2.2rem; color: #00093e; margin-bottom: 1rem; }
    .cultural-text p { color: #555; line-height: 1.75; font-size: 1.05rem; }
    .cultural-images { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .cultural-images img { width: 100%; height: 260px; object-fit: cover; border-radius: 0.75rem; }

    /* STAFF */
    .staff-section { padding: 6rem 2rem; background: white; }
    .staff-inner { max-width: 1200px; margin: 0 auto; }
    .staff-inner h2 { font-size: 2.2rem; color: #00093e; margin-bottom: 0.5rem; }
    .staff-sub { color: #666; margin-bottom: 3rem; font-size: 1.05rem; max-width: 700px; }
    .staff-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-bottom: 4rem; }
    .staff-card { background: #f8f9fa; border-radius: 1rem; padding: 2.5rem 2rem; text-align: center; border-top: 4px solid #004197; }
    .staff-num { font-size: 2.8rem; font-weight: 800; color: #004197; }
    .staff-role { font-size: 1.1rem; font-weight: 700; color: #00093e; margin: 0.5rem 0; }
    .staff-note { font-size: 0.9rem; color: #666; }
    .staff-photo-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0; align-items: center; background: #f8f9fa; border-radius: 1rem; overflow: hidden; }
    .staff-photo-row img { width: 100%; height: 340px; object-fit: cover; }
    .staff-photo-text { padding: 2rem 3rem; }
    .staff-photo-text h3 { font-size: 1.5rem; color: #00093e; margin-bottom: 1rem; }
    .staff-photo-text p { color: #555; line-height: 1.75; }

    /* CAMPUS */
    .campus-section { padding: 6rem 2rem; background: #f8f9fa; }
    .campus-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
    .campus-text h2 { font-size: 2.2rem; color: #00093e; margin-bottom: 1rem; }
    .campus-text p { color: #555; line-height: 1.75; font-size: 1.05rem; }
    .campus-image img { width: 100%; border-radius: 1rem; object-fit: cover; }

    /* IGA */
    .iga-section { padding: 6rem 2rem; background: #00093e; color: white; text-align: center; }
    .iga-inner { max-width: 900px; margin: 0 auto; }
    .iga-icon { font-size: 3rem; margin-bottom: 1rem; }
    .iga-inner h2 { font-size: 2.2rem; color: #fbbd23; margin-bottom: 1.5rem; }
    .iga-inner > p { font-size: 1.1rem; line-height: 1.75; opacity: 0.9; margin-bottom: 3rem; }
    .iga-flow { display: flex; align-items: center; justify-content: center; gap: 1.5rem; flex-wrap: wrap; }
    .flow-step { background: rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem 2rem; max-width: 220px; text-align: center; }
    .flow-icon { font-size: 2rem; margin-bottom: 0.75rem; }
    .flow-label { font-size: 0.9rem; line-height: 1.5; opacity: 0.9; }
    .flow-arrow { font-size: 1.5rem; color: #fbbd23; font-weight: 700; }

    /* CTA */
    .cta-section { position: relative; overflow: hidden; }
    .cta-bg-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: brightness(0.35); }
    .cta-overlay { position: absolute; inset: 0; background: rgba(0,9,62,0.6); }
    .cta-inner { position: relative; z-index: 2; padding: 7rem 2rem; text-align: center; }
    .cta-content { max-width: 700px; margin: 0 auto; color: white; }
    .cta-content h2 { font-size: 2.8rem; margin-bottom: 1rem; }
    .cta-content p { font-size: 1.1rem; line-height: 1.7; opacity: 0.9; margin-bottom: 2.5rem; }
    .cta-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

    /* RESPONSIVE */
    @media (max-width: 1024px) {
        .identity-inner, .inclusive-inner, .cultural-inner, .campus-inner { grid-template-columns: 1fr; gap: 3rem; }
        .staff-photo-row { grid-template-columns: 1fr; }
        .staff-photo-row img { height: 260px; }
        .life-grid { grid-template-columns: 1fr 1fr; }
        .life-card.tall { grid-row: span 1; }
        .life-card.tall img { min-height: 260px; }
    }
    @media (max-width: 768px) {
        .hero-content { margin-left: 0; padding: 6rem 1.5rem 3rem; }
        .hero-content h1 { font-size: 2.2rem; }
        .stats-bar { gap: 1rem; }
        .stat { padding: 0.5rem 1.5rem; }
        .divider { display: none; }
        .staff-grid { grid-template-columns: 1fr; }
        .life-grid { grid-template-columns: 1fr; }
        .cultural-images { grid-template-columns: 1fr; }
        .iga-flow { flex-direction: column; align-items: center; }
        .flow-arrow { transform: rotate(90deg); }
        .cta-content h2 { font-size: 2rem; }
        .chart-row { grid-template-columns: 50px 1fr 55px; }
        .chart-legend { padding-left: 60px; }
    }
</style>
