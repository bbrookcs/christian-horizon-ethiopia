<script>
	import { page, navigating } from '$app/stores';

	export let data;
	$: user = data.user;

	let sidebarOpen = false;

	// Reactive active-nav key — recomputed whenever the URL changes.
	// Using a $: variable (not a function) ensures Svelte tracks the $page store.
	$: activeKey = (() => {
		const p = $page.url.pathname;
		if (p === '/admin') return '/admin';
		if (p === '/admin/posts/new') return '/admin/posts/new';
		if (p.startsWith('/admin/posts')) return '/admin/posts';
		return p;
	})();

	const nav = [
		{
			href: '/admin',
			label: 'Dashboard',
			icon: `<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
				   <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>`
		},
		{
			href: '/admin/posts',
			label: 'All Posts',
			icon: `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
				   <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/>
				   <line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>`
		},
		{
			href: '/admin/posts/new',
			label: 'New Post',
			icon: `<path d="M12 20h9"/>
				   <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>`
		}
	];
</script>

<!-- Mobile overlay -->
{#if sidebarOpen}
	<div
		class="overlay"
		role="button"
		tabindex="-1"
		on:click={() => (sidebarOpen = false)}
		on:keydown={(e) => e.key === 'Escape' && (sidebarOpen = false)}
	></div>
{/if}

<div class="shell">
	<!-- Sidebar -->
	<aside class="sidebar" class:open={sidebarOpen}>
		<div class="brand">
			<img src="/logo1.png" alt="HEDS" class="logo" />
			<div>
				<span class="brand-name">HEDS</span>
				<span class="brand-sub">Admin Panel</span>
			</div>
		</div>

		<nav class="nav">
			{#each nav as item}
				<a
					href={item.href}
					class="nav-item"
					class:active={activeKey === item.href}
					on:click={() => (sidebarOpen = false)}
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
						fill="none" stroke="currentColor" stroke-width="2"
						stroke-linecap="round" stroke-linejoin="round">
						{@html item.icon}
					</svg>
					{item.label}
				</a>
			{/each}

			<a href="/blog" target="_blank" class="nav-item">
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
					fill="none" stroke="currentColor" stroke-width="2"
					stroke-linecap="round" stroke-linejoin="round">
					<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
					<polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
				</svg>
				View Site
			</a>
		</nav>

		<div class="sidebar-footer">
			<div class="user-info">
				<div class="avatar">{(user?.name ?? 'A')[0].toUpperCase()}</div>
				<div class="user-text">
					<span class="user-name">{user?.name ?? 'Admin'}</span>
					<span class="user-email">{user?.email ?? ''}</span>
				</div>
			</div>
			<a href="/admin/logout" class="logout-btn" title="Sign out">
				<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"
					fill="none" stroke="currentColor" stroke-width="2"
					stroke-linecap="round" stroke-linejoin="round">
					<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
					<polyline points="16 17 21 12 16 7"/>
					<line x1="21" y1="12" x2="9" y2="12"/>
				</svg>
			</a>
		</div>
	</aside>

	<!-- Main -->
	<div class="main-wrap">
		<!-- Page-transition loading bar -->
		{#if $navigating}
			<div class="nav-progress">
				<div class="nav-progress-bar"></div>
			</div>
		{/if}

		<!-- Mobile top bar -->
		<header class="topbar">
			<button class="hamburger" on:click={() => (sidebarOpen = !sidebarOpen)} aria-label="Menu">
				<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
					fill="none" stroke="currentColor" stroke-width="2"
					stroke-linecap="round" stroke-linejoin="round">
					<line x1="3" y1="6" x2="21" y2="6"/>
					<line x1="3" y1="12" x2="21" y2="12"/>
					<line x1="3" y1="18" x2="21" y2="18"/>
				</svg>
			</button>
			<span class="topbar-title">HEDS Admin</span>
			<a href="/admin/posts/new" class="topbar-new">+ New</a>
		</header>

		<main class="content">
			<slot />
		</main>
	</div>
</div>

<style>
	:global(*, *::before, *::after) { box-sizing: border-box; margin: 0; padding: 0; }
	:global(body) {
		font-family: 'Inter', system-ui, -apple-system, sans-serif;
		background: #f4f5f7;
		color: #111827;
	}

	.overlay {
		display: none;
		position: fixed;
		inset: 0;
		background: rgba(0,0,0,0.45);
		z-index: 90;
	}

	/* ── Page-transition loading bar ── */
	.nav-progress {
		position: fixed;
		top: 0; left: 0; right: 0;
		height: 3px;
		background: rgba(0,65,151,0.15);
		z-index: 9999;
		overflow: hidden;
	}
	.nav-progress-bar {
		height: 100%;
		background: linear-gradient(90deg, #004197, #fbbd23);
		animation: progress-slide 1.4s ease-in-out infinite;
		transform-origin: left;
	}
	@keyframes progress-slide {
		0%   { transform: translateX(-100%) scaleX(0.5); }
		50%  { transform: translateX(0%)    scaleX(1); }
		100% { transform: translateX(100%)  scaleX(0.5); }
	}

	.shell { display: flex; min-height: 100vh; }

	/* ── Sidebar ── */
	.sidebar {
		width: 240px;
		flex-shrink: 0;
		background: #00093e;
		display: flex;
		flex-direction: column;
		padding: 1.5rem 1rem 1rem;
		position: fixed;
		top: 0; left: 0;
		height: 100vh;
		z-index: 100;
		transition: transform 0.25s ease;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0 0.5rem 1.5rem;
		border-bottom: 1px solid rgba(255,255,255,0.08);
		margin-bottom: 1.25rem;
	}

	.logo {
		width: 36px; height: 36px;
		object-fit: contain;
		background: white;
		border-radius: 8px;
		padding: 3px;
	}

	.brand-name {
		display: block;
		font-size: 0.95rem;
		font-weight: 700;
		color: white;
		line-height: 1.2;
	}
	.brand-sub {
		display: block;
		font-size: 0.68rem;
		color: rgba(255,255,255,0.4);
		text-transform: uppercase;
		letter-spacing: 0.07em;
	}

	.nav {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		flex: 1;
	}

	.nav-item {
		display: flex;
		align-items: center;
		gap: 0.65rem;
		padding: 0.6rem 0.85rem;
		border-radius: 9px;
		font-size: 0.875rem;
		font-weight: 500;
		color: rgba(255,255,255,0.55);
		text-decoration: none;
		transition: background 0.18s, color 0.18s;
	}
	.nav-item:hover { background: rgba(255,255,255,0.08); color: white; }
	.nav-item.active { background: #004197; color: white; }

	.sidebar-footer {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		padding-top: 1rem;
		border-top: 1px solid rgba(255,255,255,0.08);
		margin-top: 0.5rem;
	}

	.user-info {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		flex: 1;
		min-width: 0;
	}
	.avatar {
		width: 32px; height: 32px;
		min-width: 32px;
		background: #004197;
		color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.8rem;
		font-weight: 700;
	}
	.user-text { display: flex; flex-direction: column; min-width: 0; }
	.user-name {
		font-size: 0.8rem;
		font-weight: 600;
		color: white;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.user-email {
		font-size: 0.68rem;
		color: rgba(255,255,255,0.4);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.logout-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 30px; height: 30px;
		border-radius: 7px;
		color: rgba(255,255,255,0.4);
		text-decoration: none;
		transition: background 0.15s, color 0.15s;
		flex-shrink: 0;
	}
	.logout-btn:hover { background: rgba(255,100,100,0.15); color: #f87171; }

	/* ── Main ── */
	.main-wrap {
		margin-left: 240px;
		flex: 1;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.topbar {
		display: none;
		align-items: center;
		gap: 0.75rem;
		padding: 0 1rem;
		height: 56px;
		background: white;
		border-bottom: 1px solid #e5e7eb;
		position: sticky;
		top: 0;
		z-index: 50;
	}

	.hamburger {
		border: none;
		background: transparent;
		color: #374151;
		cursor: pointer;
		padding: 4px;
		border-radius: 6px;
		display: flex;
	}
	.hamburger:hover { background: #f3f4f6; }

	.topbar-title {
		flex: 1;
		font-size: 0.95rem;
		font-weight: 700;
		color: #00093e;
	}

	.topbar-new {
		font-size: 0.82rem;
		font-weight: 600;
		background: #004197;
		color: white;
		padding: 0.4rem 0.85rem;
		border-radius: 8px;
		text-decoration: none;
	}

	.content {
		padding: 2.25rem 2.25rem;
		flex: 1;
	}

	/* ── Mobile ── */
	@media (max-width: 768px) {
		.overlay { display: block; }
		.sidebar { transform: translateX(-100%); }
		.sidebar.open { transform: translateX(0); }
		.main-wrap { margin-left: 0; }
		.topbar { display: flex; }
		.content { padding: 1.25rem 1rem; }
	}
</style>
