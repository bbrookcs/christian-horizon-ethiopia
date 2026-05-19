<script>
	import Header from '../../header.svelte';
	import Footer from '../../footer.svelte';

	export let data;
	$: post = data.post;
</script>

<svelte:head>
	{#if post}
		<title>{post.title} | Horizons Ethiopia Development Services</title>
		<meta name="description" content={post.excerpt} />
	{:else}
		<title>Article | Horizons Ethiopia Development Services</title>
	{/if}
</svelte:head>

<Header darkMode={true} />

<main class="article-page">
	{#if post}
		<article class="article">
			<header class="article-header">
				<span class="category-badge category-{post.category}">
					{post.category === 'vacancy' ? 'Vacancy' : 'News'}
				</span>

				<div class="meta">
					<time datetime={post.dateIso}>{post.date}</time>
					{#if post.category === 'news'}
						<span class="dot" aria-hidden="true">·</span>
						<span>{post.readTime}</span>
					{/if}
				</div>
				<h1>{post.title}</h1>

				{#if post.category === 'vacancy'}
					<div class="vacancy-chips">
						{#if post.department}
							<span class="chip">
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
								{post.department}
							</span>
						{/if}
						{#if post.location}
							<span class="chip">
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
								{post.location}
							</span>
						{/if}
						{#if post.deadline}
							<span class="chip chip-deadline">
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
								Deadline: {post.deadline}
							</span>
						{/if}
					</div>
				{/if}
			</header>

			<figure class="hero-figure">
				<img src={post.image} alt={post.title} />
			</figure>

			<div class="prose">
				<p class="lede">{post.excerpt}</p>
				{#each post.body as paragraph}
					<p>{paragraph}</p>
				{/each}
			</div>

			{#if post.category === 'vacancy' && post.applyLink}
				<div class="apply-box">
					<div class="apply-box-text">
						<strong>Interested in this role?</strong>
						<p>Send your application before the deadline. We look forward to hearing from you.</p>
					</div>
					<a href={post.applyLink} class="apply-btn" target="_blank" rel="noopener noreferrer">
						Apply Now →
					</a>
				</div>
			{/if}

			<footer class="article-footer">
				<a href="/blog" class="back-link">← Back to News &amp; Vacancies</a>
			</footer>
		</article>
	{:else}
		<div class="not-found">
			<h1>Article not found</h1>
			<p>This post may have moved. Try starting from the listing.</p>
			<a href="/blog" class="back-link">← News &amp; Vacancies</a>
		</div>
	{/if}
</main>

<Footer />

<style>
	.article-page {
		max-width: 760px;
		margin: 0 auto;
		padding: 6.5rem 1.5rem 4rem;
		min-height: 60vh;
	}

	.article-header {
		margin-bottom: 1.75rem;
	}

	.category-badge {
		display: inline-block;
		font-size: 0.72rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		padding: 0.25rem 0.7rem;
		border-radius: 999px;
		margin-bottom: 0.9rem;
	}

	.category-news {
		background: #004197;
		color: white;
	}

	.category-vacancy {
		background: #fbbd23;
		color: #00093e;
	}

	.meta {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.35rem 0.5rem;
		color: #6b7280;
		font-size: 0.95rem;
		margin-bottom: 0.75rem;
	}

	.dot {
		color: #9ca3af;
	}

	.article-header h1 {
		font-size: clamp(1.85rem, 4.2vw, 2.65rem);
		line-height: 1.15;
		font-weight: 700;
		color: #111827;
		margin: 0 0 1rem;
	}

	.vacancy-chips {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 0.75rem;
	}

	.chip {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		font-size: 0.82rem;
		font-weight: 500;
		background: #f3f4f6;
		color: #374151;
		padding: 0.3rem 0.75rem;
		border-radius: 999px;
	}

	.chip-deadline {
		background: #fef2f2;
		color: #dc2626;
	}

	.hero-figure {
		margin: 0 0 2rem;
		border-radius: 14px;
		overflow: hidden;
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
	}

	.hero-figure img {
		display: block;
		width: 100%;
		height: auto;
		max-height: min(420px, 55vh);
		object-fit: cover;
	}

	.prose {
		color: #374151;
		font-size: 1.05rem;
		line-height: 1.75;
	}

	.prose p {
		margin: 0 0 1.25rem;
	}

	.lede {
		font-size: 1.12rem;
		color: #4b5563;
		font-weight: 500;
	}

	.apply-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		background: #fffbeb;
		border: 1px solid #fde68a;
		border-radius: 14px;
		padding: 1.5rem 2rem;
		margin: 2.5rem 0;
	}

	.apply-box-text strong {
		display: block;
		font-size: 1rem;
		color: #92400e;
		margin-bottom: 0.25rem;
	}

	.apply-box-text p {
		font-size: 0.9rem;
		color: #b45309;
		margin: 0;
	}

	.apply-btn {
		flex-shrink: 0;
		background: #fbbd23;
		color: #00093e;
		font-weight: 700;
		font-size: 0.95rem;
		padding: 0.75rem 1.75rem;
		border-radius: 10px;
		text-decoration: none;
		transition: background 0.2s, transform 0.2s;
		white-space: nowrap;
	}

	.apply-btn:hover {
		background: #ffcb48;
		transform: translateY(-1px);
	}

	.article-footer {
		margin-top: 2.75rem;
		padding-top: 1.5rem;
		border-top: 1px solid #e5e7eb;
	}

	.back-link {
		color: #1e40af;
		font-weight: 600;
		text-decoration: none;
		font-size: 1rem;
	}

	.back-link:hover {
		text-decoration: underline;
	}

	.not-found {
		text-align: center;
		padding: 2rem 0;
	}

	.not-found h1 {
		font-size: 1.75rem;
		color: #111827;
		margin-bottom: 0.75rem;
	}

	.not-found p {
		color: #6b7280;
		margin-bottom: 1.5rem;
	}

	@media (max-width: 640px) {
		.article-page {
			padding: 5.5rem 1rem 3rem;
		}

		.prose {
			font-size: 1rem;
		}

		.apply-box {
			flex-direction: column;
			align-items: flex-start;
			padding: 1.25rem;
		}

		.apply-btn {
			width: 100%;
			text-align: center;
		}
	}
</style>
