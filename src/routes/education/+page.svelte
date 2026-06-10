<script>
  import Header from '../header.svelte';
  import Footer from '../footer.svelte';
</script>

<div class="education-page">
  <Header darkMode={true} />

  <main>
    <section class="education-hero">
      <h1>HEDS Education Program</h1>
      <p>HEDS has been breaking down barriers to education across the Oromia Region.
        Through inclusive learning environments, trained educators, and community-based support,
        we ensure that every child regardless of ability, background, or location has the opportunity to learn, grow, and thrive.</p>
      <p class="academy-note">
        <strong>Note:</strong> HEDS also operates <a href="/horizonschool">Horizons Academy</a>, a separate, self-sustaining private school serving 1,278+ students across KG through Grade 8. The Education Program described here is a distinct community-based program focused on inclusive education across the wider Oromia Region.
      </p>
      
      <div class="hero-image">
        <img src="./eduimg.jpg" alt="HEDS Education Program Students">
      </div>
    </section>

    <section class="our-approach">
      <h2>Our Educational Approach</h2>
      <div class="approach-grid">
        <div class="approach-card">
          <div class="icon" aria-hidden="true"><i class="fas fa-bullseye"></i></div>
          <h3>Individualized Learning</h3>
          <p>We train educators in differentiated teaching methods to support children with varying abilities, including children with physical, sensory, and intellectual disabilities, ensuring no child is left behind in the classroom.</p>
        </div>
        <div class="approach-card">
          <div class="icon" aria-hidden="true"><i class="fas fa-handshake"></i></div>
          <h3>Inclusive Environment</h3>
          <p>Through 131 inclusive education centers established across the Oromia Region, we create safe, accessible learning spaces where children with disabilities learn alongside their peers as equals.</p>
        </div>
        <div class="approach-card">
          <div class="icon" aria-hidden="true"><i class="fas fa-book-open"></i></div>
          <h3>Quality Education</h3>
          <p>We equip schools with learning materials, trained special needs teachers, and modern teaching tools, helping over 28,640 children access quality education in their own communities.</p>
        </div>
        <div class="approach-card">
          <div class="icon" aria-hidden="true"><i class="fas fa-seedling"></i></div>
          <h3>Holistic Development</h3>
          <p>Education at HEDS goes beyond the classroom. We nurture the spiritual, physical, emotional, and academic development of every child, preparing them for life, not just exams.</p>
        </div>
      </div>
    </section>

    <section class="highlights">
      <h2>Program Highlights</h2>
      <p>From inclusive classrooms in Asella to hard-to-reach rural communities across Arsi Zone. These are the faces of the children whose lives are being transformed through education.</p>
      
      <div class="image-grid">
        <img src="./eduimg1.jpg" alt="Education Program Activity 1">
        <img src="./eduimg2.jpg" alt="Education Program Activity 2">
        <img src="./eduimg3.jpg" alt="Education Program Activity 3">
        <img src="./eduimg4.jpg" alt="Education Program Activity 4">
      </div>
    </section>

    <section class="programs">
      <h2>Our Programs</h2>
      <div class="programs-container">
        <div class="program-card">
          <h3>Early Childhood Education</h3>
          <p>From Kindergarten through primary school, our early childhood program builds foundational literacy, numeracy, and social skills, giving every child the strongest possible start in life.</p>
        </div>
        <div class="program-card">
          <h3>Special Education</h3>
          <p>With over 1,240 special needs teachers trained and 131 inclusive education centers established, we specialize in creating learning pathways for children with physical, sensory, and intellectual disabilities.</p>
        </div>
        <div class="program-card">
          <h3>Inclusive School Support</h3>
          <p>We provide schools with learning materials, accessible infrastructure, and teacher training to ensure children with disabilities are fully included in mainstream education.</p>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="cta-content">
        <h2>Help Every Child Get the Education They Deserve</h2>
        <p>Whether you want to support a child's education, partner with our schools, or sponsor a teacher's training. Your involvement creates lasting change. Join us in building an Ethiopia where every child belongs.</p>
        <div class="cta-buttons">
          <a href="/get-involved" class="btn-primary">Support Education</a>
          <a href="/contact" class="btn-secondary">Contact Us</a>
        </div>
      </div>
    </section>
  </main>

  <Footer />
</div>

<style>
  .education-page {
    background-color: white;
  }

  main {
    padding-top: 80px;
  }

  .education-hero {
    background-color: #f8f9fa;
    padding: 6rem 2rem;
    text-align: center;
    max-width: 100%;
    margin: 0 auto;
  }

  .education-hero h1 {
    font-size: 2.5rem;
    color: #004197;
    margin-bottom: 1.5rem;
  }

  .education-hero p {
    font-size: 1.2rem;
    color: #666;
    max-width: 800px;
    margin: 0 auto 2rem;
    line-height: 1.6;
  }

  .academy-note {
    font-size: 0.95rem !important;
    background: #EFF6FF;
    border-left: 4px solid #004197;
    padding: 1rem 1.5rem;
    border-radius: 0 8px 8px 0;
    color: #374151 !important;
    text-align: left;
    max-width: 800px;
    margin: 0 auto 2rem !important;
  }

  .academy-note a {
    color: #004197;
    font-weight: 600;
    text-decoration: underline;
  }

  .hero-image {
    max-width: 1000px;
    margin: 0 auto;
  }

  .hero-image img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .stats-section {
    display: flex;
    justify-content: center;
    gap: 4rem;
    padding: 4rem 2rem;
    background-color: white;
    max-width: 1200px;
    margin: 0 auto;
  }

  .stat-card {
    text-align: center;
    padding: 2rem;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    min-width: 200px;
  }

  .stat-card h3 {
    font-size: 2.5rem;
    color: #fbbd23;
    margin-bottom: 0.5rem;
  }

  .stat-card p {
    color: #666;
    font-size: 1.1rem;
  }

  .highlights {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .highlights h2 {
    text-align: center;
    color: #004197;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .highlights > p {
    text-align: center;
    color: #666;
    max-width: 700px;
    margin: 0 auto 3rem;
    font-size: 1.1rem;
  }

  .image-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin: 0 auto;
  }

  .image-grid img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .image-grid img:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    .education-hero {
      padding: 4rem 1rem;
    }

    .education-hero h1 {
      font-size: 2rem;
    }

    .stats-section {
      flex-direction: column;
      gap: 2rem;
      padding: 2rem 1rem;
    }

    .image-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .image-grid img {
      height: 250px;
    }
  }

  .our-approach {
    padding: 6rem 2rem;
    background-color: #f8f9fa;
  }

  .our-approach h2 {
    text-align: center;
    color: #004197;
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  .approach-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1280px;
    margin: 0 auto;
  }

  .approach-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    text-align: center;
    transition: transform 0.3s ease;
  }

  .approach-card:hover {
    transform: translateY(-5px);
  }

  .approach-card .icon {
    margin-bottom: 1rem;
  }

  .approach-card .icon i {
    font-size: 2.5rem;
    color: #004197;
  }

  .approach-card h3 {
    color: #004197;
    margin-bottom: 1rem;
  }

  .approach-card p {
    color: #666;
    line-height: 1.6;
  }

  .programs {
    padding: 6rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .programs h2 {
    text-align: center;
    color: #004197;
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  .programs-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .program-card {
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 12px;
    transition: transform 0.3s ease;
  }

  .program-card:hover {
    transform: translateY(-5px);
  }

  .program-card h3 {
    color: #004197;
    margin-bottom: 1rem;
  }

  .program-card p {
    color: #666;
    margin-bottom: 0;
    line-height: 1.6;
  }

  .cta-section {
    background-color: #004197;
    padding: 6rem 2rem;
    margin-top: 4rem;
  }

  .cta-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    color: white;
  }

  .cta-content h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .cta-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .btn-primary {
    background: #fbbd23;
    color: #000;
    padding: 1rem 2rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: transform 0.3s ease;
  }

  .btn-secondary {
    background: transparent;
    color: white;
    padding: 1rem 2rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    border: 2px solid white;
    transition: all 0.3s ease;
  }

  .btn-primary:hover,
  .btn-secondary:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .approach-grid {
      grid-template-columns: 1fr;
    }

    .programs-container {
      grid-template-columns: 1fr;
    }

    .cta-buttons {
      flex-direction: column;
    }

    .cta-content h2 {
      font-size: 2rem;
    }
  }
</style>
