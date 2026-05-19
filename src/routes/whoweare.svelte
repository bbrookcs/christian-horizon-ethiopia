<script>
  import { fade, fly } from 'svelte/transition';
  import { scrollAnimation } from '$lib/scrollAnimation';
  /** @type {'orphans' | 'disabilities' | 'caregivers' | 'teachers' | null} */
  let hoveredCard = null;
</script>

{#if hoveredCard}
  <div class="global-overlay" transition:fade={{ duration: 200 }}></div>
{/if}

<section class="who-we-are">
    <div class="container">
      <div class="left-content" use:scrollAnimation={{ animation: 'slideRight' }}>
        <span class="tag">Who we are</span>
        <h2>Horizons Ethiopia Development Services</h2>
        <p>
          For over 34 years, we have been walking alongside Ethiopia's most marginalized 
          children with disabilities, orphans, impoverished women, and vulnerable youth. 
          What began in 1992 as Children's Home International in Asella has grown into a trusted national organization delivering inclusive education, rehabilitation, economic empowerment, and humanitarian relief across the Oromia Region. Today, we are Horizons Ethiopia Development Services — and we are committed to reaching 50,000 lives by 2030.
        </p>
        <a href="/about" class="learn-more">
          Learn more <span class="arrow">→</span>
        </a>
      </div>
  
      <div class="stats-grid">
        <div
          class="stat-card orange"
          role="presentation"
          on:mouseenter={() => (hoveredCard = 'orphans')}
          on:mouseleave={() => (hoveredCard = null)}
        >
          <h3>4,000+</h3>
          <p>Orphans Supported</p>
          {#if hoveredCard === 'orphans'}
            <div class="card-details" transition:fly={{ y: 20, duration: 300 }}>
              <h4>4,000+ Orphans Supported</h4>
              <p>Over 4,000 orphans received sponsorship support covering education, health, and personal development helping them grow toward self-reliance.</p>
            </div>
          {/if}
        </div>

        <div
          class="stat-card blue"
          role="presentation"
          on:mouseenter={() => (hoveredCard = 'disabilities')}
          on:mouseleave={() => (hoveredCard = null)}
        >
          <h3>6,100+</h3>
          <p>Children with Disabilities Reached</p>
          {#if hoveredCard === 'disabilities'}
            <div class="card-details" transition:fly={{ y: 20, duration: 300 }}>
              <h4>6,100+ Children with Disabilities Reached</h4>
              <p>6,100 children with disabilities gained access to school and social services across multiple woredas through CHE's inclusive education program.</p>
            </div>
          {/if}
        </div>

        <div
          class="stat-card blue"
          role="presentation"
          on:mouseenter={() => (hoveredCard = 'caregivers')}
          on:mouseleave={() => (hoveredCard = null)}
        >
          <h3>2,740+</h3>
          <p>Caregivers Empowered</p>
          {#if hoveredCard === 'caregivers'}
            <div class="card-details" transition:fly={{ y: 20, duration: 300 }}>
              <h4>2,740+ Caregivers Empowered</h4>
              <p>2,740 caregivers received economic empowerment support including business training and seed capital to build sustainable livelihoods for their families.</p>
            </div>
          {/if}
        </div>

        <div
          class="stat-card orange"
          role="presentation"
          on:mouseenter={() => (hoveredCard = 'teachers')}
          on:mouseleave={() => (hoveredCard = null)}
        >
          <h3>1,240+</h3>
          <p>Special Needs Teachers Trained</p>
          {#if hoveredCard === 'teachers'}
            <div class="card-details" transition:fly={{ y: 20, duration: 300 }}>
              <h4>1,240+ Special Needs Teachers Trained</h4>
              <p>More than 1,240 teachers received comprehensive training in special needs education, helping build a more inclusive school system across the Oromia region.</p>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </section>
  
  <style>
    .who-we-are {
      padding: 6rem 2rem;
      background-color: white;
    }
  
    .container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }
  
    .left-content {
      max-width: 540px;
    }
  
    .tag {
      display: inline-block;
      background-color: #DBEAFE;
      color: #004197;
      padding: 0.5rem 1rem;
      border-radius: 50px;
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
    }
  
    h2 {
      font-size: 2.5rem;
      color: #000;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }
  
    p {
      color: #666;
      line-height: 1.6;
      margin-bottom: 2rem;
    }
  
    .learn-more {
      color: #ff6b00;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 500;
    }
  
    .arrow {
      transition: transform 0.3s ease;
    }
  
    .learn-more:hover .arrow {
      transform: translateX(5px);
    }
  
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      align-content: center;
    }

    .stat-card {
      padding: 2rem;
      border-radius: 1rem;
      text-align: left;
      position: relative;
      min-width: 0;
    }
  
    .stat-card.orange {
      background-color: #FED7AA;
    }
  
    .stat-card.blue {
      background-color: #BFDBFE;
    }
  
    .stat-card h3 {
      font-size: 3rem;
      margin-bottom: 1rem;
      color: #000;
    }
  
    .stat-card > p {
      margin: 0;
      color: #000;
      font-size: 1.1rem;
    }
  
    .card-details {
      position: absolute;
      top: 10%;
      left: 5%;
      right: 0;
      background: white;
      padding: 1.5rem;
      border-radius: 1rem;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      z-index: 10;
      margin-top: 0.5rem;
      min-width: 300px;
    }
  
    .card-details h4 {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
      color: #000;
    }
  
    .card-details p {
      font-size: 0.875rem;
      color: #666;
      margin-bottom: 0;
    }
  
    @media (max-width: 968px) {
      .container {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
  
      .left-content {
        max-width: 100%;
      }

      .card-details {
        min-width: 250px;
      }
    }
  
    @media (max-width: 580px) {
      .who-we-are {
        padding: 4rem 1.5rem;
      }
  
      h2 {
        font-size: 2rem;
      }
  
      .stats-grid {
        gap: 1rem;
      }
  
      .stat-card {
        padding: 1.5rem;
      }
  
      .stat-card h3 {
        font-size: 2.5rem;
      }
  
      .stat-card > p {
        font-size: 1rem;
      }
    }
  
    @media (max-width: 400px) {
      .stats-grid {
        grid-template-columns: 1fr;
      }
    }
  
  </style>
