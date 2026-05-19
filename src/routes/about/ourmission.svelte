<script>
    import { scrollAnimation } from '$lib/scrollAnimation';
</script>
<div class="mission-vision-container">
    <div class="section" use:scrollAnimation={{ animation: 'slideRight', delay: 300 }}>
        <div class="tag">Our Mission</div>
        <h2>Serving Ethiopia's Most Vulnerable With Purpose</h2>
        <p>
            HEDS provides comprehensive services to marginalized children, youth, and families
            through inclusive education, rehabilitation, economic capacity building, community
            awareness, and humanitarian assistance ensuring every person has the opportunity
            to live a better, more independent life.
        </p>
    </div>

    <div class="section" use:scrollAnimation={{ animation: 'slideLeft', delay: 300 }}>
        <div class="tag">Our Vision</div>
        <h2>An Inclusive Society for All</h2>
        <p>
            An inclusive society where equality of opportunity, human dignity, and purpose
            for all are ensured a world where no person is left behind regardless of their
            disability, economic status, or background.
        </p>
    </div>
</div>

<style>
    .mission-vision-container {
        display: flex;
        gap: 64px;
        padding: 70px;
        background: #FFF5EB;
        justify-content: center;
    }
    .section {
        max-width: 600px;
        flex: 1;
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

    h2 {
        font-size: 36px;
        margin-bottom: 24px;
        color: #1A1A1A;
    }

    p {
        font-size: 18px;
        line-height: 1.6;
        color: #666666;
    }

    @media (max-width: 768px) {
        .mission-vision-container {
            flex-direction: column;
            padding: 40px 24px;
            gap: 40px;
        }

        .section {
            max-width: 100%;
        }

        h2 {
            font-size: 28px;
            margin-bottom: 16px;
        }

        p {
            font-size: 16px;
            line-height: 1.5;
        }
    }
    .mission-vision-container {
        display: flex;
        gap: 64px;
        padding: 70px;
        background: #FFF5EB;
        justify-content: center;
    }
    .section {
        max-width: 600px;
        flex: 1;
    }

    h2 {
        font-size: 36px;
        margin-bottom: 24px;
        color: #1A1A1A;
    }

    p {
        font-size: 18px;
        line-height: 1.6;
        color: #666666;
    }

    @media (max-width: 768px) {
        .mission-vision-container {
            flex-direction: column;
            padding: 40px 24px;
            gap: 40px;
        }

        .section {
            max-width: 100%;
        }

        

        h2 {
            font-size: 28px;
            margin-bottom: 16px;
        }

        p {
            font-size: 16px;
            line-height: 1.5;
        }
    }
</style>
