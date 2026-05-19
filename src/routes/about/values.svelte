<script>
    import { scrollAnimation } from '$lib/scrollAnimation';
    import Icon from '$lib/components/Icon.svelte';

    const valueAccent = '#0438a1';

    const values = [
        {
            icon: 'heart',
            title: 'Compassion',
            text: 'We serve with genuine care and empathy, putting the needs of the most vulnerable at the heart of everything we do.'
        },
        {
            icon: 'barChart2',
            title: 'Accountability',
            text: 'We are transparent and responsible to the communities we serve, our donors, our partners, and our staff.'
        },
        {
            icon: 'shieldCheck',
            title: 'Integrity',
            text: 'We act with honesty and consistency, upholding the highest ethical standards in all our actions and decisions.'
        },
        {
            icon: 'star',
            title: 'Human Dignity',
            text: 'We believe in the inherent worth of every person and commit to programs that affirm and restore dignity.'
        },
        {
            icon: 'award',
            title: 'Servant Leadership',
            text: 'Our leaders exist to serve — empowering staff, partners, and communities to achieve more together.'
        },
        {
            icon: 'globe',
            title: 'Inclusion of Diversity',
            text: 'We celebrate and embrace diversity, ensuring our programs are accessible and responsive to all people regardless of ability, gender, or background.'
        }
    ];
</script>

<section class="values-container">
    <div class="container">
        <div class="left-content" use:scrollAnimation={{ animation: 'slideRight', delay: 300 }}>
            <div class="tag">Our Values</div>
            <h2>Compassion, Integrity, and Inclusion</h2>

            <div class="values-list">
                {#each values as item}
                    <div class="value-item">
                        <div class="value-icon" aria-hidden="true">
                            <Icon name={item.icon} size={22} color={valueAccent} strokeWidth={1.75} />
                        </div>
                        <div class="value-copy">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        <div class="image-grid" use:scrollAnimation={{ animation: 'slideUp', delay: 400 }}>
            <img src="/img1.jpg" alt="Community work" class="grid-img img1" />
            <img src="/img2.jpg" alt="Community work" class="grid-img img2" />
            <img src="/img3.jpg" alt="Community work" class="grid-img img3" />
            <img src="/img4.jpg" alt="Community work" class="grid-img img4" />
        </div>
    </div>
</section>

<style>
    .values-container {
        padding: 6rem 2rem;
        background-color: #f0f7ff;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
    }

    .left-content {
        max-width: 540px;
    }

    .tag {
        display: inline-block;
        background-color: #dbeafe;
        color: #004197;
        padding: 0.5rem 1rem;
        border-radius: 50px;
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
    }

    h2 {
        font-size: 2.5rem;
        color: #000;
        margin-bottom: 2.5rem;
        line-height: 1.2;
    }

    .values-list {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .value-item {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
    }

    .value-icon {
        flex-shrink: 0;
        width: 44px;
        height: 44px;
        border-radius: 12px;
        background: #fff;
        border: 1px solid #dbeafe;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 1px 3px rgba(4, 56, 161, 0.08);
    }

    .value-copy h3 {
        color: #0438a1;
        font-size: 1.25rem;
        margin: 0 0 0.5rem;
        font-weight: 600;
        line-height: 1.3;
    }

    .value-copy p {
        color: #666;
        line-height: 1.6;
        font-size: 1rem;
        margin: 0;
    }

    .image-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
        position: relative;
        margin-top: 2rem;
    }

    .grid-img {
        width: 100%;
        height: 240px;
        object-fit: cover;
        border-radius: 1rem;
        transition: transform 0.3s ease;
    }

    .img1 {
        transform: rotate(-5deg) translateY(20px);
    }
    .img2 {
        transform: rotate(5deg) translateY(-20px);
    }
    .img3 {
        transform: rotate(5deg) translateY(20px);
    }
    .img4 {
        transform: rotate(-5deg) translateY(-20px);
    }

    @media (max-width: 968px) {
        .container {
            grid-template-columns: 1fr;
            gap: 3rem;
        }

        .image-grid {
            margin-top: 1rem;
        }

        .grid-img {
            height: 200px;
            border: 2px solid #ffffff;
        }

        .left-content {
            max-width: 100%;
        }
    }

    @media (max-width: 580px) {
        .values-container {
            padding: 4rem 1.5rem;
        }

        h2 {
            font-size: 2rem;
        }

        .image-grid {
            gap: 1rem;
        }

        .value-copy h3 {
            font-size: 1.1rem;
        }

        .value-icon {
            width: 40px;
            height: 40px;
            border-radius: 10px;
        }
    }

    @media (max-width: 400px) {
        .image-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
