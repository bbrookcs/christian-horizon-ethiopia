<script>
	import { enhance } from '$app/forms';
	export let data;
	$: posts = data.posts ?? [];

	let deleteId = /** @type {string|null} */ (null);
</script>

<svelte:head><title>All Posts | HEDS Admin</title></svelte:head>

<!-- Delete confirm modal -->
{#if deleteId}
	<div class="modal-backdrop">
		<div class="modal">
			<h3>Delete post?</h3>
			<p>This action cannot be undone. The post will be permanently removed.</p>
			<div class="modal-actions">
				<button class="btn-ghost" on:click={() => (deleteId = null)}>Cancel</button>
				<form method="POST" action="/admin/posts/{deleteId}?/delete" use:enhance={() => {
					deleteId = null;
					return async ({ update }) => update();
				}}>
					<button type="submit" class="btn-danger">Delete</button>
				</form>
			</div>
		</div>
	</div>
{/if}

<div class="page">
	<div class="page-header">
		<div>
			<h1>All Posts</h1>
			<p class="subtitle">{posts.length} post{posts.length !== 1 ? 's' : ''}</p>
		</div>
		<a href="/admin/posts/new" class="btn-primary">
			<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
			New Post
		</a>
	</div>

	<!-- Filters -->
	<div class="filters">
		<div class="filter-tabs">
			{#each [['all','All'],['news','News'],['vacancy','Vacancies']] as [val, label]}
				<a
					href="/admin/posts?category={val}&q={data.search}"
					class="tab" class:active={data.category === val}
				>{label}</a>
			{/each}
		</div>
		<form method="GET" action="/admin/posts" class="search-form">
			<input type="hidden" name="category" value={data.category} />
			<div class="search-wrap">
				<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
				<input name="q" type="search" placeholder="Search posts…" value={data.search} class="search-input" />
			</div>
		</form>
	</div>

	{#if posts.length === 0}
		<div class="empty-state">
			<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
			<p>No posts found.</p>
			<a href="/admin/posts/new" class="btn-primary">Create first post</a>
		</div>
	{:else}
		<div class="posts-grid">
			{#each posts as post}
				<div class="post-card">
					<div class="post-img">
						<img src={post.image} alt={post.title} loading="lazy" />
						<span class="badge badge-{post.category}">{post.category === 'vacancy' ? 'Vacancy' : 'News'}</span>
						{#if !post.published}
							<span class="draft-pill">Draft</span>
						{/if}
					</div>
					<div class="post-body">
						<p class="post-date">{post.date}</p>
						<h3 class="post-title">{post.title}</h3>
						{#if post.category === 'vacancy' && (post.department || post.location)}
							<div class="chips">
								{#if post.department}<span class="chip">{post.department}</span>{/if}
								{#if post.location}<span class="chip">{post.location}</span>{/if}
							</div>
						{/if}
						<p class="post-excerpt">{post.excerpt}</p>
					</div>
					<div class="post-actions">
						<a href="/admin/posts/{post.id}" class="action-link">
							<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
							Edit
						</a>
						<a href="/blog/post?id={post.id}" target="_blank" class="action-link">
							<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
							View
						</a>
						<button class="action-link danger" on:click={() => (deleteId = post.id)}>
							<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
							Delete
						</button>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
.page { max-width: 1100px; }

.page-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; margin-bottom: 1.5rem; }
.page-header h1 { font-size: 1.65rem; font-weight: 700; color: #111827; margin-bottom: 0.2rem; }
.subtitle { font-size: 0.9rem; color: #6b7280; }

/* Filters */
.filters { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.75rem; flex-wrap: wrap; }
.filter-tabs { display: flex; gap: 0.25rem; background: #f3f4f6; padding: 0.3rem; border-radius: 10px; }
.tab {
	padding: 0.45rem 1rem; border-radius: 7px; font-size: 0.85rem; font-weight: 500;
	color: #6b7280; text-decoration: none; transition: all 0.15s;
}
.tab.active { background: white; color: #004197; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
.search-form { flex: 1; max-width: 320px; }
.search-wrap {
	display: flex; align-items: center; gap: 0.5rem;
	background: white; border: 1.5px solid #e5e7eb; border-radius: 9px;
	padding: 0 0.75rem; height: 38px;
}
.search-wrap svg { color: #9ca3af; flex-shrink: 0; }
.search-input {
	flex: 1; border: none; outline: none; font-size: 0.875rem;
	color: #111827; background: transparent; font-family: inherit;
}

/* Posts grid */
.posts-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.25rem; }
.post-card {
	background: white; border-radius: 14px; overflow: hidden;
	border: 1px solid #f1f3f5; box-shadow: 0 1px 3px rgba(0,0,0,0.06);
	display: flex; flex-direction: column;
	transition: box-shadow 0.2s;
}
.post-card:hover { box-shadow: 0 4px 14px rgba(0,0,0,0.09); }

.post-img { position: relative; height: 160px; overflow: hidden; }
.post-img img { width: 100%; height: 100%; object-fit: cover; }
.badge {
	position: absolute; top: 0.6rem; left: 0.6rem;
	font-size: 0.68rem; font-weight: 700; text-transform: uppercase;
	letter-spacing: 0.06em; padding: 0.18rem 0.55rem; border-radius: 999px;
}
.badge-news    { background: #004197; color: white; }
.badge-vacancy { background: #fbbd23; color: #00093e; }
.draft-pill {
	position: absolute; top: 0.6rem; right: 0.6rem;
	font-size: 0.68rem; font-weight: 700; background: rgba(0,0,0,0.55);
	color: white; padding: 0.18rem 0.55rem; border-radius: 999px; text-transform: uppercase;
}

.post-body { padding: 1.1rem; flex: 1; }
.post-date { font-size: 0.78rem; color: #9ca3af; margin-bottom: 0.35rem; }
.post-title { font-size: 0.95rem; font-weight: 600; color: #111827; margin-bottom: 0.5rem; line-height: 1.3; }
.chips { display: flex; flex-wrap: wrap; gap: 0.3rem; margin-bottom: 0.5rem; }
.chip { font-size: 0.72rem; background: #f3f4f6; color: #374151; border-radius: 999px; padding: 0.15rem 0.55rem; font-weight: 500; }
.post-excerpt { font-size: 0.82rem; color: #6b7280; line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }

.post-actions {
	display: flex; gap: 0;
	border-top: 1px solid #f1f3f5;
}
.action-link {
	flex: 1; display: flex; align-items: center; justify-content: center; gap: 0.35rem;
	padding: 0.6rem; font-size: 0.8rem; font-weight: 500; color: #6b7280;
	text-decoration: none; border: none; background: transparent;
	cursor: pointer; font-family: inherit;
	border-right: 1px solid #f1f3f5;
	transition: background 0.15s, color 0.15s;
}
.action-link:last-child { border-right: none; }
.action-link:hover { background: #f8f9fb; color: #004197; }
.action-link.danger:hover { background: #fef2f2; color: #dc2626; }

/* Empty state */
.empty-state {
	text-align: center; padding: 4rem 1rem;
	display: flex; flex-direction: column; align-items: center; gap: 0.75rem;
	background: white; border-radius: 14px; border: 1px solid #f1f3f5;
}
.empty-state p { color: #9ca3af; font-size: 0.95rem; }

/* Modal */
.modal-backdrop {
	position: fixed; inset: 0; background: rgba(0,0,0,0.45);
	display: flex; align-items: center; justify-content: center; z-index: 200;
	padding: 1rem;
}
.modal {
	background: white; border-radius: 16px; padding: 1.75rem 2rem;
	max-width: 420px; width: 100%; box-shadow: 0 20px 50px rgba(0,0,0,0.2);
}
.modal h3 { font-size: 1.1rem; font-weight: 700; color: #111827; margin-bottom: 0.5rem; }
.modal p { font-size: 0.9rem; color: #6b7280; margin-bottom: 1.5rem; }
.modal-actions { display: flex; gap: 0.75rem; justify-content: flex-end; }

.btn-primary {
	display: inline-flex; align-items: center; gap: 0.4rem;
	background: #004197; color: white; font-size: 0.875rem; font-weight: 600;
	padding: 0.6rem 1.2rem; border-radius: 9px; text-decoration: none; white-space: nowrap;
	border: none; cursor: pointer; font-family: inherit;
	transition: background 0.18s;
}
.btn-primary:hover { background: #00093e; }

.btn-ghost {
	background: transparent; border: 1.5px solid #e5e7eb; color: #374151;
	font-size: 0.875rem; font-weight: 500; padding: 0.55rem 1.1rem;
	border-radius: 9px; cursor: pointer; font-family: inherit;
	transition: border-color 0.15s;
}
.btn-ghost:hover { border-color: #9ca3af; }

.btn-danger {
	background: #dc2626; color: white; border: none;
	font-size: 0.875rem; font-weight: 600; padding: 0.55rem 1.1rem;
	border-radius: 9px; cursor: pointer; font-family: inherit;
	transition: background 0.15s;
}
.btn-danger:hover { background: #b91c1c; }

@media (max-width: 640px) {
	.posts-grid { grid-template-columns: 1fr; }
	.search-form { max-width: 100%; flex: unset; width: 100%; }
}
</style>
