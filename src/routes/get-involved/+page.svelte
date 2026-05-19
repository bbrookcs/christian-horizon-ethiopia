<script>
    import { get } from 'svelte/store';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import Header from '../header.svelte';
    import Footer from '../footer.svelte';

    let fullName = '';
    let email = '';
    let phone = '';
    let interest = '';
    let message = '';
    let formNotice = false;

    onMount(() => {
        const f = get(page).url.searchParams.get('focus');
        if (f === 'enrollment') interest = 'enrollment';
        else if (f === 'volunteer') interest = 'volunteer';
    });

    function submitInterest() {
        formNotice = true;
        // Backend will persist submissions later.
    }
</script>

<svelte:head>
    <title>Get Involved | Horizons Ethiopia Development Services</title>
    <meta
        name="description"
        content="Volunteer, partner, sponsor, or enroll with HEDS — supporting children, women, and people with disabilities across Ethiopia."
    />
</svelte:head>

<div class="page">
    <Header darkMode={true} />

    

    <section class="paths">
        <div class="section-inner">
            <h2>Ways to participate</h2>
            <p class="section-lead">
                Choose the path that fits you — you can always share more detail in the interest form below.
            </p>
            <div class="path-grid">
                <a href="/youth" class="path-card">
                    <span class="path-icon" aria-hidden="true">🌱</span>
                    <h3>Child &amp; youth programs</h3>
                    <p>Safe spaces, mentorship, and sponsorship that help young people thrive.</p>
                    <span class="path-more">Explore programs →</span>
                </a>
                <a href="/education" class="path-card">
                    <span class="path-icon" aria-hidden="true">📚</span>
                    <h3>Education &amp; inclusion</h3>
                    <p>Inclusive schools, teacher development, and learning for every child.</p>
                    <span class="path-more">Learn more →</span>
                </a>
                <a href="/horizonschool" class="path-card">
                    <span class="path-icon" aria-hidden="true">🎓</span>
                    <h3>Horizons Academy</h3>
                    <p>Flagship inclusive schooling and vocational pathways in Asella.</p>
                    <span class="path-more">Visit the academy →</span>
                </a>
                <a href="/disability" class="path-card">
                    <span class="path-icon" aria-hidden="true">♿</span>
                    <h3>Disability support</h3>
                    <p>Rehabilitation, inclusion, and services that put dignity first.</p>
                    <span class="path-more">See our work →</span>
                </a>
                <a href="/economicpower" class="path-card">
                    <span class="path-icon" aria-hidden="true">💼</span>
                    <h3>Livelihood &amp; economic power</h3>
                    <p>Skills, cooperatives, and income opportunities for women and families.</p>
                    <span class="path-more">Discover livelihoods →</span>
                </a>
                <a href="/humanitarian" class="path-card">
                    <span class="path-icon" aria-hidden="true">🤝</span>
                    <h3>Humanitarian relief</h3>
                    <p>Principled assistance when crises hit the communities we serve.</p>
                    <span class="path-more">Relief &amp; resilience →</span>
                </a>
            </div>
        </div>
    </section>

    <section class="form-section" id="express-interest">
        <div class="section-inner form-layout">
            <div class="form-intro">
                <span class="tag tag-dark">Express interest</span>
                <h2>Tell us how you’d like to help</h2>
                <p>
                    Share your details and the type of involvement you have in mind. Our team will follow up
                    when the new submission system is connected — for now this form is a preview of what’s
                    coming.
                </p>
                <ul class="checklist">
                    <li>Volunteering time or professional skills</li>
                    <li>Organizational or CSR partnerships</li>
                    <li>Sponsorship and fundraising ideas</li>
                    <li>Enrollment or program inquiries</li>
                </ul>
                <a href="/contact" class="link-contact">Prefer email or phone? Contact us directly →</a>
            </div>

            <form class="interest-form" on:submit|preventDefault={submitInterest}>
                {#if formNotice}
                    <div class="banner" role="status">
                        Thank you — we’ve received your details in this preview. Saving and email notifications
                        will be turned on when the backend is ready. Until then, please use our
                        <a href="/contact">contact page</a> for urgent requests.
                    </div>
                {/if}

                <label class="field">
                    <span>Full name</span>
                    <input type="text" bind:value={fullName} name="fullName" autocomplete="name" required />
                </label>

                <label class="field">
                    <span>Email</span>
                    <input type="email" bind:value={email} name="email" autocomplete="email" required />
                </label>

                <label class="field">
                    <span>Phone (optional)</span>
                    <input type="tel" bind:value={phone} name="phone" autocomplete="tel" />
                </label>

                <label class="field">
                    <span>I’m interested in</span>
                    <select bind:value={interest} name="interest" required>
                        <option value="" disabled>Select an option</option>
                        <option value="volunteer">Volunteering</option>
                        <option value="partner">Partnership / CSR</option>
                        <option value="sponsor">Sponsorship / donation ideas</option>
                        <option value="enrollment">Enrollment (Horizons Academy / programs)</option>
                        <option value="media">Media / storytelling</option>
                        <option value="other">Something else</option>
                    </select>
                </label>

                <label class="field">
                    <span>Message</span>
                    <textarea bind:value={message} name="message" rows="5" placeholder="A few sentences about your skills, organization, or questions."></textarea>
                </label>

                <button type="submit" class="submit-btn">Submit interest (preview)</button>
            </form>
        </div>
    </section>

    <Footer />
</div>

<style>
    .page {
        background: #fff;
        min-height: 100vh;
    }

    .paths {
        padding: 5rem 2rem 4rem;
    }

    .hero-inner {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3.5rem;
        align-items: center;
    }

    .tag {
        display: inline-block;
        background: #dbeafe;
        color: #004197;
        padding: 0.45rem 1rem;
        border-radius: 999px;
        font-size: 0.95rem;
        font-weight: 600;
        margin-bottom: 1.25rem;
    }

    .tag-dark {
        background: #fef3c7;
        color: #92400e;
    }

    .hero-copy h1 {
        font-size: clamp(2rem, 4vw, 2.85rem);
        color: #00093e;
        line-height: 1.15;
        margin: 0 0 1.25rem;
        font-weight: 700;
    }

    .hero-copy p {
        font-size: 1.1rem;
        line-height: 1.7;
        color: #4b5563;
        margin: 0;
    }

    .hero-visual img {
        width: 100%;
        border-radius: 1rem;
        box-shadow: 0 20px 50px rgba(0, 9, 62, 0.12);
        object-fit: cover;
        max-height: 420px;
    }

    .section-inner {
        max-width: 1200px;
        margin: 0 auto;
        padding: 4rem 2rem;
    }

    .paths h2,
    .form-intro h2 {
        font-size: 2.1rem;
        color: #00093e;
        margin: 0 0 0.75rem;
        font-weight: 700;
    }

    .section-lead {
        color: #6b7280;
        font-size: 1.1rem;
        line-height: 1.6;
        max-width: 48rem;
        margin: 0 0 2.5rem;
    }

    .path-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.25rem;
    }

    .path-card {
        display: flex;
        flex-direction: column;
        padding: 1.5rem 1.35rem;
        border-radius: 14px;
        border: 1px solid #e5e7eb;
        background: #fff;
        text-decoration: none;
        color: inherit;
        transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            transform 0.2s ease;
    }

    .path-card:hover {
        border-color: #fbbd23;
        box-shadow: 0 12px 30px rgba(0, 9, 62, 0.08);
        transform: translateY(-2px);
    }

    .path-icon {
        font-size: 1.75rem;
        margin-bottom: 0.75rem;
    }

    .path-card h3 {
        font-size: 1.15rem;
        color: #00093e;
        margin: 0 0 0.5rem;
        font-weight: 700;
    }

    .path-card p {
        font-size: 0.95rem;
        color: #6b7280;
        line-height: 1.55;
        margin: 0 0 1rem;
        flex: 1;
    }

    .path-more {
        font-size: 0.9rem;
        font-weight: 600;
        color: #004197;
    }

    .form-section {
        background: #fff9f0;
        border-top: 1px solid #f3e8d8;
    }

    .form-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        align-items: start;
    }

    .form-intro p {
        color: #4b5563;
        line-height: 1.65;
        margin: 0 0 1.5rem;
    }

    .checklist {
        margin: 0 0 1.5rem;
        padding-left: 1.2rem;
        color: #374151;
        line-height: 1.8;
    }

    .link-contact {
        font-weight: 600;
        color: #004197;
        text-decoration: none;
    }

    .link-contact:hover {
        text-decoration: underline;
    }

    .interest-form {
        background: #fff;
        padding: 2rem;
        border-radius: 16px;
        box-shadow: 0 16px 40px rgba(0, 9, 62, 0.08);
        display: flex;
        flex-direction: column;
        gap: 1.15rem;
    }

    .banner {
        padding: 1rem 1.1rem;
        border-radius: 10px;
        background: #ecfdf5;
        color: #166534;
        font-size: 0.95rem;
        line-height: 1.5;
        border: 1px solid #bbf7d0;
    }

    .banner a {
        color: #15803d;
        font-weight: 600;
    }

    .field {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
    }

    .field span {
        font-size: 0.9rem;
        font-weight: 600;
        color: #00093e;
    }

    .field input,
    .field select,
    .field textarea {
        padding: 0.85rem 1rem;
        border-radius: 10px;
        border: 1px solid #d1d5db;
        font-size: 1rem;
        font-family: inherit;
    }

    .field input:focus,
    .field select:focus,
    .field textarea:focus {
        outline: none;
        border-color: #fbbd23;
        box-shadow: 0 0 0 3px rgba(251, 189, 35, 0.25);
    }

    .submit-btn {
        margin-top: 0.5rem;
        align-self: flex-start;
        background: #fbbd23;
        color: #000;
        border: none;
        padding: 0.95rem 2rem;
        border-radius: 999px;
        font-weight: 700;
        font-size: 1rem;
        cursor: pointer;
        transition: background 0.2s ease;
    }

    .submit-btn:hover {
        background: #ffcb48;
    }

    @media (max-width: 900px) {
        .hero-inner,
        .form-layout {
            grid-template-columns: 1fr;
        }

        .path-grid {
            grid-template-columns: 1fr;
        }

        .hero {
            padding-top: 6rem;
        }
    }
</style>
