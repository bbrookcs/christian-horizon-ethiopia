<script>
    import Header from '../header.svelte';
    import { scrollAnimation } from '$lib/scrollAnimation';
</script>


<div class="about-container">
    <div class="content-section" use:scrollAnimation={{ animation: 'slideRight', delay: 300 }}>
        <div class="tag">Who we are</div>
        <h1>Horizons Ethiopia Development Services</h1>
        <p>
            For over 34 years, Horizons Ethiopia Development Services has been walking alongside 
            Ethiopia's most marginalized children with disabilities, orphans, impoverished women, 
            and vulnerable youth. What began in 1992 as Children's Home International in 
            Asella evolved through decades of growth and partnership into the trusted national organization we are today. 
            Re-established as an independent Ethiopian NGO in 2021 and rebranded as HEDS in 2026, we now deliver six 
            interconnected programs across the Oromia Region reaching over 25,000 people and committed to transforming 50,000 lives by 2030.
        </p>
        <div class="history-timeline">
            <div class="history-item">
                <span class="year">1992</span>
                <span class="event">Founded as Children's Home International in Asella</span>
            </div>
            <div class="history-item">
                <span class="year">2007</span>
                <span class="event">Became a branch of Christian Horizons Global</span>
            </div>
            <div class="history-item">
                <span class="year">2021</span>
                <span class="event">Re-established as an independent local NGO (Reg. #1054)</span>
            </div>
            <div class="history-item">
                <span class="year">2026</span>
                <span class="event">Rebranded to Horizons Ethiopia Development Services (HEDS)</span>
            </div>
        </div>
    </div>
    <div class="image-section" use:scrollAnimation={{ animation: 'slideLeft', delay: 300 }}>
        <img src="./team.jpeg" alt="Horizons Ethiopia Development Services Community" />
    </div>
</div>

<style>
    .about-container {
        display: flex;
        gap: 64px;
        padding: 0 80px;
        max-width: 1440px;
        margin: 0 auto;
        min-height: calc(100vh - 60px);
        align-items: center;
    }

    .content-section {
        flex: 1;
        max-width: 600px;
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
        font-size: 48px;
        font-weight: bold;
        margin-bottom: 24px;
        color: #1A1A1A;
    }

    p {
        font-size: 18px;
        line-height: 1.6;
        color: #666666;
        margin-bottom: 2rem;
    }

    .history-timeline {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 1.5rem;
        border-left: 3px solid #fbbd23;
        padding-left: 1.5rem;
    }

    .history-item {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
    }

    .year {
        font-size: 0.95rem;
        font-weight: 700;
        color: #004197;
    }

    .event {
        font-size: 0.95rem;
        color: #555;
        line-height: 1.4;
    }

    .image-section {
        flex: 1;
    }

    .image-section img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px;
    }

    @media (max-width: 768px) {
        .about-container {
            flex-direction: column;
            padding: 24px;
            gap: 32px;
            margin-top: 60px;
            min-height: auto;
        }

        .content-section {
            max-width: 100%;
        }

        h1 {
            font-size: 36px;
            margin-bottom: 16px;
        }

        p {
            font-size: 16px;
            line-height: 1.5;
        }

        .image-section img {
            border-radius: 12px;
            aspect-ratio: 16/9;
            object-fit: cover;
        }
    }
    .about-container {
        display: flex;
        gap: 64px;
        padding: 0 80px;
        max-width: 1440px;
        margin: 0 auto;
        min-height: calc(100vh - 60px);
        align-items: center;
    }

    .content-section {
        flex: 1;
        max-width: 600px;
    }


    h1 {
        font-size: 48px;
        font-weight: bold;
        margin-bottom: 24px;
        color: #1A1A1A;
    }

    p {
        font-size: 18px;
        line-height: 1.6;
        color: #666666;
    }

    .image-section {
        flex: 1;
    }

    .image-section img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px;
    }

    @media (max-width: 768px) {
        .about-container {
            flex-direction: column;
            padding: 24px;
            gap: 32px;
            margin-top: 60px;
            min-height: auto;
        }

        .content-section {
            max-width: 100%;
        }


        h1 {
            font-size: 36px;
            margin-bottom: 16px;
        }

        p {
            font-size: 16px;
            line-height: 1.5;
        }

        .image-section img {
            border-radius: 12px;
            aspect-ratio: 16/9;
            object-fit: cover;
        }
    }
</style>