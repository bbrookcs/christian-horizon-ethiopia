<script>
	export let data;
	$: counts = data.counts ?? { total: 0, news: 0, vacancy: 0 };
	$: recent = data.recentPosts ?? [];
</script>

<svelte:head><title>Dashboard | HEDS Admin</title></svelte:head>

<div class="page">
	<div class="page-header">
		<div>
			<h1>Dashboard</h1>
			<p class="subtitle">Welcome back, {data.user?.name ?? 'Admin'}</p>
		</div>
		<a href="/admin/posts/new" class="btn-primary">
			<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
			New Post
		</a>
	</div>

	<div class="stats">
		<div class="stat-card">
			<div class="stat-icon blue">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
			</div>
			<div>
				<div class="stat-val">{counts.total}</div>
				<div class="stat-lbl">Total Posts</div>
			</div>
		</div>
		<div class="stat-card">
			<div class="stat-icon indigo">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
			</div>
			<div>
				<div class="stat-val">{counts.news}</div>
				<div class="stat-lbl">News Articles</div>
			</div>
		</div>
		<div class="stat-card">
			<div class="stat-icon amber">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
			</div>
			<div>
				<div class="stat-val">{counts.vacancy}</div>
				<div class="stat-lbl">Vacancies</div>
			</div>
		</div>
	</div>

	<div class="card">
		<div class="card-head">
			<h2>Recent Posts</h2>
			<a href="/admin/posts" class="link-sm">View all →</a>
		</div>
		<div class="table-wrap">
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Type</th>
						<th>Date</th>
						<th>Status</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{#each recent as p}
						<tr>
							<td class="td-title">{p.title}</td>
							<td><span class="badge badge-{p.category}">{p.category === 'vacancy' ? 'Vacancy' : 'News'}</span></td>
							<td class="td-date">{p.date}</td>
							<td>
								<span class="dot-status" class:published={p.published}></span>
								{p.published ? 'Published' : 'Draft'}
							</td>
							<td class="td-actions">
								<a href="/admin/posts/{p.id}" class="action-btn" title="Edit">
									<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
								</a>
								<a href="/blog/post?id={p.id}" target="_blank" class="action-btn" title="View">
									<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
								</a>
							</td>
						</tr>
					{/each}
					{#if !recent.length}
						<tr><td colspan="5" class="empty">No posts yet. <a href="/admin/posts/new">Create one →</a></td></tr>
					{/if}
				</tbody>
			</table>
		</div>
	</div>

	<div class="quick-row">
		<a href="/admin/posts/new?type=news" class="quick-card">
			<div class="quick-icon blue">
				<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
			</div>
			<div>
				<strong>News Article</strong>
				<p>Share updates & announcements</p>
			</div>
			<svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
		</a>
		<a href="/admin/posts/new?type=vacancy" class="quick-card">
			<div class="quick-icon amber">
				<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
			</div>
			<div>
				<strong>Job Vacancy</strong>
				<p>Post an open position with apply link</p>
			</div>
			<svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
		</a>
	</div>
</div>

<style>
.page { max-width: 960px; }

.page-header {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 1rem;
	margin-bottom: 2rem;
}
.page-header h1 { font-size: 1.65rem; font-weight: 700; color: #111827; margin-bottom: 0.2rem; }
.subtitle { font-size: 0.9rem; color: #6b7280; }

/* Stats */
.stats { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.1rem; margin-bottom: 1.75rem; }
.stat-card {
	background: white; border-radius: 14px; padding: 1.3rem 1.4rem;
	display: flex; align-items: center; gap: 1rem;
	box-shadow: 0 1px 3px rgba(0,0,0,0.06); border: 1px solid #f1f3f5;
}
.stat-icon {
	width: 44px; height: 44px; border-radius: 11px;
	display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.blue   { background: #eff6ff; color: #004197; }
.indigo { background: #eef2ff; color: #4338ca; }
.amber  { background: #fffbeb; color: #b45309; }
.stat-val { font-size: 1.8rem; font-weight: 700; color: #111827; line-height: 1; }
.stat-lbl { font-size: 0.8rem; color: #6b7280; margin-top: 0.25rem; }

/* Card */
.card {
	background: white; border-radius: 14px; padding: 1.4rem;
	box-shadow: 0 1px 3px rgba(0,0,0,0.06); border: 1px solid #f1f3f5;
	margin-bottom: 1.75rem;
}
.card-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.1rem; }
.card-head h2 { font-size: 1rem; font-weight: 600; }
.link-sm { font-size: 0.82rem; color: #004197; text-decoration: none; font-weight: 500; }

/* Table */
.table-wrap { overflow-x: auto; }
table { width: 100%; border-collapse: collapse; }
thead tr { background: #f8f9fb; }
th {
	text-align: left; padding: 0.6rem 0.9rem;
	font-size: 0.75rem; font-weight: 600; color: #6b7280;
	text-transform: uppercase; letter-spacing: 0.05em;
}
td {
	padding: 0.8rem 0.9rem;
	font-size: 0.875rem; color: #374151;
	border-top: 1px solid #f1f3f5;
	vertical-align: middle;
}
.td-title { font-weight: 500; color: #111827; max-width: 280px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.td-date { color: #9ca3af; font-size: 0.82rem; white-space: nowrap; }
.td-actions { display: flex; gap: 0.3rem; }

.badge {
	display: inline-block; font-size: 0.68rem; font-weight: 700;
	text-transform: uppercase; letter-spacing: 0.06em;
	padding: 0.18rem 0.55rem; border-radius: 999px; white-space: nowrap;
}
.badge-news    { background: #eff6ff; color: #004197; }
.badge-vacancy { background: #fffbeb; color: #b45309; }

.dot-status {
	display: inline-block; width: 7px; height: 7px;
	border-radius: 50%; background: #d1d5db; margin-right: 0.35rem;
	vertical-align: middle;
}
.dot-status.published { background: #22c55e; }

.action-btn {
	width: 28px; height: 28px;
	display: flex; align-items: center; justify-content: center;
	border-radius: 6px; color: #6b7280; text-decoration: none;
	transition: background 0.15s, color 0.15s;
}
.action-btn:hover { background: #f3f4f6; color: #004197; }

.empty { text-align: center; color: #9ca3af; padding: 1.5rem 0; }
.empty a { color: #004197; }

/* Quick actions */
.quick-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.1rem; }
.quick-card {
	background: white; border: 1px solid #f1f3f5; border-radius: 14px;
	padding: 1.3rem 1.4rem; display: flex; align-items: center; gap: 1rem;
	text-decoration: none; color: #111827;
	box-shadow: 0 1px 3px rgba(0,0,0,0.06);
	transition: box-shadow 0.2s, transform 0.2s;
}
.quick-card:hover { box-shadow: 0 6px 18px rgba(0,0,0,0.09); transform: translateY(-2px); }
.quick-icon {
	width: 46px; height: 46px; border-radius: 12px; flex-shrink: 0;
	display: flex; align-items: center; justify-content: center;
}
.quick-card > div:nth-child(2) { flex: 1; }
.quick-card strong { display: block; font-size: 0.9rem; margin-bottom: 0.2rem; }
.quick-card p { font-size: 0.8rem; color: #6b7280; margin: 0; }
.arrow { color: #d1d5db; flex-shrink: 0; }

.btn-primary {
	display: inline-flex; align-items: center; gap: 0.4rem;
	background: #004197; color: white; font-size: 0.875rem; font-weight: 600;
	padding: 0.6rem 1.2rem; border-radius: 9px; text-decoration: none; white-space: nowrap;
	transition: background 0.18s, transform 0.18s;
}
.btn-primary:hover { background: #00093e; transform: translateY(-1px); }

@media (max-width: 640px) {
	.stats { grid-template-columns: 1fr; }
	.quick-row { grid-template-columns: 1fr; }
	th:nth-child(3), td:nth-child(3),
	th:nth-child(4), td:nth-child(4) { display: none; }
}
</style>
