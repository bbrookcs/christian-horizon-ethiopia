<script>
  import { scrollAnimation } from '$lib/scrollAnimation';

  const partners = [
    { src: '/karis.png', alt: 'Karis Disability Services' },
    { src: '/lmi.png', alt: 'Leadership Management International' },
    { src: '/wise.png', alt: 'WISE' },
    { src: '/arsi.png', alt: 'ARSi' },
    { src: '/cosap.jpeg', alt: 'COSAP' },
    { src: '/ocha.png', alt: 'OCHA' },
    { src: '/sos.png', alt: 'SOS' },
    { src: '/welthungerhilfe.png', alt: 'Welthungerhilfe' }
  ];

  const primaryPartners = [
    { src: '/karis.png', alt: 'Karis Disability Services' },
    { src: '/lmi.png', alt: 'LM International (LMI)' },
    { src: '/welthungerhilfe.png', alt: 'Welthungerhilfe (WHH)' }
  ];
</script>

<section class="partners">
  <div class="partners-intro">
    <div class="container">
      <div class="partners-intro-text" use:scrollAnimation={{ animation: 'slideRight' }}>
        <span class="tag">Partnerships & Sponsorships</span>

        <div class="partners-header">
          <h2>Our Partners</h2>
          <p>
            Our partners are at the heart of what we do. 
            From disability services to economic empowerment, we work alongside trusted national and international organizations including Karis Disability Services, LM International, and Welthungerhilfe to deepen our reach and multiply our impact across Ethiopia.
          </p>
        </div>
      </div>

      <div
        class="partner-logos-primary"
        use:scrollAnimation={{ animation: 'slideLeft', delay: 200 }}
      >
        {#each primaryPartners as partner}
          <div class="primary-logo-wrap">
            <img src={partner.src} alt={partner.alt} />
          </div>
        {/each}
      </div>
    </div>
  </div>

  <div class="partners-marquee" aria-label="Partner organizations">
    <div class="marquee-viewport">
      <div class="marquee-track">
        {#each [0, 1] as copy}
          <div class="marquee-set" aria-hidden={copy === 1}>
            {#each partners as p}
              <div class="marquee-item">
                <img
                  src={p.src}
                  alt={copy === 0 ? p.alt : ''}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            {/each}
          </div>
        {/each}
      </div>
    </div>
  </div>

  <div class="cta-container">
    <div class="cta-section">
      <div class="cta-card" use:scrollAnimation={{ animation: 'slideUp', delay: 300 }}>
        <h3>Volunteer</h3>
        <p>
          Join us as a volunteer and help transform lives across Ethiopia. Whether in education, 
          disability support, or community outreach, your time and skills make a real difference.
        </p>
        <a href="/get-involved" class="cta-button cta-anchor">Get Involved</a>
      </div>

      <div class="cta-card" use:scrollAnimation={{ animation: 'slideUp', delay: 400 }}>
        <h3>Donate</h3>
        <p>
          Your donation directly supports inclusive education, rehabilitation, and economic 
          empowerment for Ethiopia's most vulnerable helping us reach our goal of 50,000 lives by 2030.
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
</section>

<style>
  :global([use\:scrollAnimation]) {
    opacity: 0;
  }

  .partners {
    padding: 3rem 0 0;
    background-color: white;
  }

  .partners-intro {
    padding: 0 2rem 2.5rem;
  }

  .partners-intro .container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem 3rem;
    align-items: center;
  }

  .partners-intro-text {
    min-width: 0;
  }

  .partner-logos-primary {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    gap: 2.5rem 2rem;
  }

  .primary-logo-wrap {
    flex: 0 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 10.5rem;
  }

  .primary-logo-wrap img {
    width: 100%;
    max-width: 10rem;
    height: auto;
    max-height: 5.5rem;
    object-fit: contain;
  }

  .tag {
    display: inline-block;
    background-color: #DBEAFE;
    color: #004197;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  .partners-header {
    max-width: 600px;
  }

  .partners-header h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
    color: #00093e;
  }

  .partners-header p {
    color: #666;
    line-height: 1.6;
    margin: 0;
  }

  .partners-marquee {
    width: 100%;
    padding: 1.75rem 0;
    background: linear-gradient(to bottom, #f8fafc 0%, #f1f5f9 100%);
    border-top: 1px solid #e2e8f0;
    border-bottom: 1px solid #e2e8f0;
  }

  .marquee-viewport {
    overflow: hidden;
    width: 100%;
    -webkit-mask-image: linear-gradient(
      to right,
      transparent,
      black 6%,
      black 94%,
      transparent
    );
    mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
  }

  .marquee-track {
    display: flex;
    width: max-content;
    animation: partners-marquee 48s linear infinite;
  }

  .marquee-set {
    display: flex;
    align-items: center;
    gap: clamp(2rem, 5vw, 4.5rem);
    padding: 0.35rem 2rem;
    flex-shrink: 0;
  }

  .marquee-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    width: 9rem;
  }

  .marquee-item img {
    max-height: 6rem;
    max-width: 8.5rem;
    width: auto;
    height: auto;
    object-fit: contain;
    filter: grayscale(10%);
    opacity: 0.9;
    transition:
      opacity 0.2s ease,
      filter 0.2s ease;
  }

  .marquee-item:hover img {
    opacity: 1;
    filter: none;
  }

  @keyframes partners-marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .marquee-track {
      animation: none;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
    }

    .marquee-set:last-child {
      display: none;
    }

    .marquee-set {
      flex-wrap: wrap;
      justify-content: center;
      padding: 0.75rem 1rem;
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

  .cta-card p {
    color: #666;
    line-height: 1.6;
    margin: 0;
  }

  h3 {
    font-size: 1.8rem;
    color: #004197;
    font-weight: 600;
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
    .partners-intro .container {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .partner-logos-primary {
      justify-content: flex-start;
    }

    .partners-intro {
      padding: 0 1.5rem 2rem;
    }

    .partners-header {
      max-width: 100%;
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

    .cta-section {
      grid-template-columns: 1fr;
      gap: 4rem;
      padding: 0 1rem;
      text-align: left;
    }

    .cta-card {
      text-align: left;
    }
  }

  @media (max-width: 580px) {
    .partners {
      padding: 2rem 0 0;
    }

    .partners-intro {
      padding: 0 1.25rem 1.75rem;
    }

    .cta-container {
      padding: 2rem 1rem;
      margin-top: 2rem;
    }

    .partners-header h2 {
      font-size: 2rem;
    }

    .partners-header {
      text-align: left;
    }

    .tag {
      display: inline-block;
    }
  }
</style> 