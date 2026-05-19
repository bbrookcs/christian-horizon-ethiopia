<script>
  import { fade, fly } from 'svelte/transition';
  import { scrollAnimation } from '$lib/scrollAnimation';
  let showDetails = false;
  let hoveredCard = null;
</script>

{#if hoveredCard}
  <div class="global-overlay" transition:fade={{ duration: 200 }}></div>
{/if}

<section class="whatwedo-container" >
    <div class="container">
        <div class="left-content" use:scrollAnimation={{ animation: 'slideRight', delay: 300 }}>
            <div class="tag">What we do</div>
            <h2>Six Thematic Programs for Lasting Change</h2>
            <p>
                At HEDS, we implement inclusive development interventions across six interconnected
                thematic areas: Education, Child & Youth Development, Inclusive Development (Disability
                Services), Livelihood Promotion, Income Generating Activities, and Humanitarian Relief.
                Our programs promote the social, economic, and political inclusion of marginalized groups
                through sustainable, community-led initiatives aiming to reach 50,000 people by 2030.
            </p>
        </div>

        <div class="stats-grid">
            <div class="stat-card orange" 
            on:mouseenter={() => hoveredCard = 'beneficiaries'} 
            on:mouseleave={() => hoveredCard = null}>
                <h3>25,000+</h3>
                <p>People Served</p>
                {#if hoveredCard === 'beneficiaries'}
                    <div class="card-details" transition:fly={{ y: 20, duration: 300 }}>
                        <h4>25,000+ Direct Beneficiaries (Cumulative)</h4>
                        <p>We have served over 25,000 marginalized children, youth, women, and persons with disabilities — with a target of 50,000 by 2030.</p>
                    </div>
                {/if}
            </div>
            <div class="stat-card blue"
            on:mouseenter={() => hoveredCard = 'years'} 
            on:mouseleave={() => hoveredCard = null}>
                <h3>34</h3>
                <p>Years of Service</p>
                {#if hoveredCard === 'years'}
                    <div class="card-details" transition:fly={{ y: 20, duration: 300 }}>
                        <h4>34 Years of Transformative Service</h4>
                        <p>Since 1992, we have been building trust and creating lasting change in communities across Oromia, Ethiopia.</p>
                    </div>
                {/if}
            </div>
            <div class="stat-card blue"
            on:mouseenter={() => hoveredCard = 'programs'} 
            on:mouseleave={() => hoveredCard = null}>
                <h3>131</h3>
                <p>Inclusive Education Centers</p>
                {#if hoveredCard === 'programs'}
                    <div class="card-details" transition:fly={{ y: 20, duration: 300 }}>
                        <h4>131 Inclusive Education Centers</h4>
                        <p>Since 1992, HEDS has established and supported 131 inclusive education centers across the Oromia Region, creating learning environments where children with disabilities and those from disadvantaged backgrounds receive quality, equitable education alongside their peers.</p>
                    </div>
                {/if}
            </div>
            <div class="stat-card orange"
            on:mouseenter={() => hoveredCard = 'regions'} 
            on:mouseleave={() => hoveredCard = null}>
                <h3>3–4</h3>
                <p>Regions by 2030</p>
                {#if hoveredCard === 'regions'}
                    <div class="card-details" transition:fly={{ y: 20, duration: 300 }}>
                        <h4>Expanding Across Ethiopia</h4>
                        <p>Expanding from our Oromia base to Sidama, South Ethiopia, and Addis Ababa, reaching communities across 3–4 regions by 2030.</p>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</section>

<style>


    .whatwedo-container {
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

    .stat-card p {
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
        .whatwedo-container {
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

        .stat-card p {
            font-size: 1rem;
        }
    }

    @media (max-width: 400px) {
        .stats-grid {
            grid-template-columns: 1fr;
        }
    }
</style> 