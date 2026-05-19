<script>
    import Header from "../header.svelte";
    import Footer from "../footer.svelte";

    export let data;

    /** @type {'all' | 'news' | 'vacancy'} */
    let filter = 'all';
    let dropdownOpen = false;

    $: posts = data.posts ?? [];
    $: filtered = filter === 'all' ? posts : posts.filter(p => p.category === filter);
    $: newsCount = posts.filter(p => p.category === 'news').length;
    $: vacancyCount = posts.filter(p => p.category === 'vacancy').length;

    const labels = { all: 'All Posts', news: 'News', vacancy: 'Vacancies' };

    /** @param {'all'|'news'|'vacancy'} val */
    function select(val) {
        filter = val;
        dropdownOpen = false;
    }

    function handleKeydown(/** @type {KeyboardEvent} */ e) {
        if (e.key === 'Escape') dropdownOpen = false;
    }
</script>

<svelte:window on:keydown={handleKeydown} />
<svelte:head>
    <title>News HEDS</title>
</svelte:head>

<Header darkMode={true} />

<!-- Click-outside overlay (invisible) -->
{#if dropdownOpen}
    <div
        class="click-away"
        role="button"
        tabindex="-1"
        on:click={() => (dropdownOpen = false)}
        on:keydown={() => {}}
    ></div>
{/if}

<main>
    <section class="page-hero">
        <div class="hero-inner">
            <h1>News</h1>
            <p>Stay updated with our latest stories and open positions</p>
        </div>

        <!-- Professional filter row -->
        <div class="filter-bar">
            <span class="showing-label">
                Showing <strong>{filtered.length}</strong> post{filtered.length !== 1 ? 's' : ''}
            </span>

            <div class="dropdown-wrap">
                <button
                    class="filter-btn"
                    class:open={dropdownOpen}
                    on:click={() => (dropdownOpen = !dropdownOpen)}
                    aria-haspopup="listbox"
                    aria-expanded={dropdownOpen}
                >
                    <!-- Icon per type -->
                    {#if filter === 'all'}
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                    {:else if filter === 'news'}
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    {:else}
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                    {/if}
                    {labels[filter]}
                    <svg class="chevron" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </button>

                {#if dropdownOpen}
                    <div class="dropdown" role="listbox">
                        <button
                            class="option" class:selected={filter === 'all'}
                            role="option" aria-selected={filter === 'all'}
                            on:click={() => select('all')}
                        >
                            <span class="option-icon all-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                            </span>
                            <span class="option-label">All Posts</span>
                            <span class="option-count">{posts.length}</span>
                            {#if filter === 'all'}<svg class="check" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>{/if}
                        </button>

                        <div class="divider"></div>

                        <button
                            class="option" class:selected={filter === 'news'}
                            role="option" aria-selected={filter === 'news'}
                            on:click={() => select('news')}
                        >
                            <span class="option-icon news-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                            </span>
                            <span class="option-label">News Articles</span>
                            <span class="option-count">{newsCount}</span>
                            {#if filter === 'news'}<svg class="check" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>{/if}
                        </button>

                        <button
                            class="option" class:selected={filter === 'vacancy'}
                            role="option" aria-selected={filter === 'vacancy'}
                            on:click={() => select('vacancy')}
                        >
                            <span class="option-icon vacancy-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                            </span>
                            <span class="option-label">Vacancies</span>
                            <span class="option-count">{vacancyCount}</span>
                            {#if filter === 'vacancy'}<svg class="check" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>{/if}
                        </button>
                    </div>
                {/if}
            </div>
        </div>
    </section>

    <section class="blog-grid">
        {#each filtered as post}
            <article class="blog-card" class:vacancy-card={post.category === 'vacancy'}>
                <a href="/blog/post?id={post.id}" class="card-link">
                    <div class="card-image">
                        <img src={post.image} alt={post.title} loading="lazy" />
                        <span class="badge badge-{post.category}">
                            {post.category === 'vacancy' ? 'Vacancy' : 'News'}
                        </span>
                    </div>
                    <div class="card-content">
                        <div class="post-meta">
                            <span class="date">{post.date}</span>
                            {#if post.category === 'news' && post.readTime}
                                <span class="sep">·</span>
                                <span class="read-time">{post.readTime}</span>
                            {/if}
                            {#if post.deadline}
                                <span class="deadline-meta">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                                    Deadline: {post.deadline}
                                </span>
                            {/if}
                        </div>
                        <h2>{post.title}</h2>
                        {#if post.department || post.location}
                            <div class="vacancy-info">
                                {#if post.department}<span class="info-pill">{post.department}</span>{/if}
                                {#if post.location}<span class="info-pill">{post.location}</span>{/if}
                            </div>
                        {/if}
                        <p>{post.excerpt}</p>
                        {#if post.category === 'vacancy'}
                            <span class="cta apply-cta">View &amp; Apply →</span>
                        {:else}
                            <span class="cta read-more">Read more →</span>
                        {/if}
                    </div>
                </a>
            </article>
        {/each}

        {#if filtered.length === 0}
            <div class="empty">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                <p>No {filter === 'all' ? '' : labels[filter]} posts yet.</p>
            </div>
        {/if}
    </section>
</main>

<Footer />

<style>
    main {
        max-width: 1200px;
        margin: 0 auto;
        padding: 120px 2rem 5rem;
    }

    /* ── Hero / header ── */
    .page-hero {
        margin-bottom: 3.5rem;
    }

    .hero-inner {
        text-align: center;
        margin-bottom: 2rem;
    }

    .hero-inner h1 {
        font-size: clamp(2rem, 5vw, 3rem);
        font-weight: 700;
        color: #0f172a;
        margin-bottom: 0.6rem;
    }

    .hero-inner p {
        color: #6b7280;
        font-size: 1.05rem;
    }

    /* ── Filter bar ── */
    .filter-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #f1f5f9;
        padding-bottom: 1.25rem;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .showing-label {
        font-size: 0.875rem;
        color: #6b7280;
    }

    .showing-label strong {
        color: #111827;
    }

    /* Dropdown container */
    .dropdown-wrap {
        position: relative;
    }

    /* Trigger button */
    .filter-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: white;
        border: 1.5px solid #e2e8f0;
        color: #374151;
        font-size: 0.9rem;
        font-weight: 500;
        padding: 0.6rem 1rem;
        border-radius: 10px;
        cursor: pointer;
        font-family: inherit;
        transition: border-color 0.18s, box-shadow 0.18s;
        box-shadow: 0 1px 3px rgba(0,0,0,0.06);
    }

    .filter-btn:hover,
    .filter-btn.open {
        border-color: #004197;
        box-shadow: 0 0 0 3px rgba(0,65,151,0.1);
        color: #004197;
    }

    .chevron {
        color: #9ca3af;
        transition: transform 0.2s;
    }

    .filter-btn.open .chevron {
        transform: rotate(180deg);
        color: #004197;
    }

    /* Dropdown panel */
    .dropdown {
        position: absolute;
        right: 0;
        top: calc(100% + 0.5rem);
        background: white;
        border: 1px solid #e2e8f0;
        border-radius: 14px;
        box-shadow: 0 12px 32px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06);
        min-width: 220px;
        z-index: 50;
        overflow: hidden;
        animation: dropdown-in 0.15s ease;
    }

    @keyframes dropdown-in {
        from { opacity: 0; transform: translateY(-6px) scale(0.98); }
        to   { opacity: 1; transform: translateY(0)   scale(1); }
    }

    .divider {
        height: 1px;
        background: #f1f5f9;
        margin: 0.2rem 0;
    }

    .option {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 0.65rem;
        padding: 0.7rem 1rem;
        border: none;
        background: transparent;
        cursor: pointer;
        font-family: inherit;
        font-size: 0.875rem;
        color: #374151;
        text-align: left;
        transition: background 0.15s;
    }

    .option:hover { background: #f8fafc; }
    .option.selected { background: #eff6ff; color: #004197; font-weight: 600; }

    .option-icon {
        width: 26px;
        height: 26px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .all-icon     { background: #f3f4f6; color: #374151; }
    .news-icon    { background: #eff6ff; color: #004197; }
    .vacancy-icon { background: #fffbeb; color: #b45309; }

    .option-label { flex: 1; }

    .option-count {
        font-size: 0.75rem;
        font-weight: 700;
        background: #f3f4f6;
        color: #6b7280;
        border-radius: 999px;
        padding: 0.1rem 0.5rem;
        min-width: 22px;
        text-align: center;
    }

    .option.selected .option-count {
        background: #dbeafe;
        color: #004197;
    }

    .check { color: #004197; flex-shrink: 0; }

    /* Click-away */
    .click-away {
        position: fixed;
        inset: 0;
        z-index: 40;
    }

    /* ── Blog grid ── */
    .blog-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
        gap: 1.75rem;
    }

    .blog-card {
        background: white;
        border-radius: 14px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        transition: transform 0.28s ease, box-shadow 0.28s ease;
        border: 1px solid #f1f5f9;
    }

    .blog-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 14px 30px rgba(0,0,0,0.09);
    }

    .vacancy-card { border-top: 3px solid #fbbd23; }

    .card-link {
        text-decoration: none;
        color: inherit;
        display: block;
    }

    .card-image {
        width: 100%;
        height: 200px;
        overflow: hidden;
        position: relative;
    }

    .card-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s ease;
    }

    .blog-card:hover .card-image img { transform: scale(1.04); }

    .badge {
        position: absolute;
        top: 0.75rem;
        left: 0.75rem;
        font-size: 0.68rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.07em;
        padding: 0.22rem 0.65rem;
        border-radius: 999px;
    }

    .badge-news    { background: #004197; color: white; }
    .badge-vacancy { background: #fbbd23; color: #00093e; }

    .card-content { padding: 1.4rem; }

    .post-meta {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.3rem 0.6rem;
        color: #9ca3af;
        font-size: 0.82rem;
        margin-bottom: 0.7rem;
    }

    .sep { color: #d1d5db; }

    .deadline-meta {
        display: inline-flex;
        align-items: center;
        gap: 0.28rem;
        color: #dc2626;
        font-weight: 500;
    }

    .vacancy-info {
        display: flex;
        flex-wrap: wrap;
        gap: 0.35rem;
        margin-bottom: 0.65rem;
    }

    .info-pill {
        font-size: 0.76rem;
        background: #f1f5f9;
        color: #374151;
        border-radius: 999px;
        padding: 0.18rem 0.65rem;
        font-weight: 500;
    }

    .blog-card h2 {
        font-size: 1.15rem;
        margin-bottom: 0.55rem;
        color: #0f172a;
        line-height: 1.3;
        font-weight: 600;
    }

    .blog-card p {
        color: #4b5563;
        margin-bottom: 1.1rem;
        line-height: 1.65;
        font-size: 0.9rem;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .cta {
        font-weight: 700;
        font-size: 0.875rem;
    }

    .read-more { color: #004197; }
    .apply-cta { color: #b45309; }

    /* Empty */
    .empty {
        grid-column: 1 / -1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;
        padding: 4rem 0;
        color: #9ca3af;
        font-size: 0.95rem;
    }

    @media (max-width: 640px) {
        main { padding: 100px 1rem 3rem; }
        .blog-grid { grid-template-columns: 1fr; }
        .filter-bar { justify-content: flex-end; }
        .showing-label { display: none; }
        .dropdown { right: 0; left: auto; }
    }
</style>
