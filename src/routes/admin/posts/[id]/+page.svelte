<script>
	import { enhance } from '$app/forms';

	export let data;
	export let form;

	// Use data.post directly for initialisation — $: p would be undefined on first render
	const p = data.post;

	let title = p?.title ?? '';
	let date = p?.dateIso ?? '';
	let excerpt = p?.excerpt ?? '';
	/** @type {string[]} */
	let bodyParagraphs = (p?.body?.length ? p.body : ['']);
	let department = p?.department ?? '';
	let location = p?.location ?? '';
	let deadline = p?.deadlineIso ?? '';
	let applyLink = p?.applyLink ?? '';
	let published = p?.published ?? true;
	let postType = p?.category ?? 'news';

	/** @type {string | null} */
	let imagePreview = null;
	let submitting = false;
	let showDeleteModal = false;

	function handleImageChange(/** @type {Event} */ e) {
		const input = /** @type {HTMLInputElement} */ (e.target);
		const file = input.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (ev) => { imagePreview = /** @type {string} */ (ev.target?.result); };
			reader.readAsDataURL(file);
		}
	}

	function addParagraph() { bodyParagraphs = [...bodyParagraphs, '']; }
	/** @param {number} i */
	function removeParagraph(i) { bodyParagraphs = bodyParagraphs.filter((_, idx) => idx !== i); }
	/**
	 * @param {number} i
	 * @param {string} val
	 */
	function updateParagraph(i, val) { bodyParagraphs[i] = val; bodyParagraphs = bodyParagraphs; }

	$: wordCount = [excerpt, ...bodyParagraphs].join(' ').trim().split(/\s+/).filter(Boolean).length;
	$: readTimePreview = `~${Math.max(1, Math.ceil(wordCount / 200))} min read`;
</script>

<svelte:head><title>Edit Post | HEDS Admin</title></svelte:head>

<!-- Delete modal -->
{#if showDeleteModal}
	<div class="modal-backdrop">
		<div class="modal">
			<h3>Delete this post?</h3>
			<p>This action cannot be undone.</p>
			<div class="modal-actions">
				<button class="btn-ghost" on:click={() => (showDeleteModal = false)}>Cancel</button>
				<form method="POST" action="?/delete" use:enhance>
					<button type="submit" class="btn-danger">Delete permanently</button>
				</form>
			</div>
		</div>
	</div>
{/if}

<div class="page">
	<div class="page-header">
		<div>
			<a href="/admin/posts" class="breadcrumb">← All Posts</a>
			<h1>Edit Post</h1>
		</div>
		<div class="header-actions">
			<a href="/blog/post?id={p.id}" target="_blank" class="btn-ghost">
				<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
				View live
			</a>
			<button class="btn-delete" on:click={() => (showDeleteModal = true)}>Delete</button>
		</div>
	</div>

	{#if form?.error}
		<div class="alert-error">{form.error}</div>
	{/if}
	{#if form?.success}
		<div class="alert-success">Post updated successfully!</div>
	{/if}

	<form
		method="POST"
		action="?/update"
		enctype="multipart/form-data"
		use:enhance={() => {
			submitting = true;
			return async ({ update }) => { submitting = false; await update(); };
		}}
	>
		<input type="hidden" name="body" value={JSON.stringify(bodyParagraphs.filter(Boolean))} />
		<input type="hidden" name="category" value={postType} />
		<input type="hidden" name="current_image" value={p.image} />
		<input type="hidden" name="published" value={published ? '1' : '0'} />

		<div class="form-layout">
			<div class="main-col">

				<div class="card">
					<label class="section-label">Post Type</label>
					<div class="type-toggle">
						<button type="button" class="type-btn" class:active={postType === 'news'} on:click={() => (postType = 'news')}>
							<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
							News
						</button>
						<button type="button" class="type-btn" class:active={postType === 'vacancy'} on:click={() => (postType = 'vacancy')}>
							<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
							Vacancy
						</button>
					</div>
				</div>

				<div class="card">
					<label class="section-label" for="title">Title <span class="req">*</span></label>
					<input id="title" name="title" type="text" class="input" bind:value={title} required />
				</div>

				<div class="card">
					<div class="label-row">
						<label class="section-label" for="excerpt">Excerpt <span class="req">*</span></label>
						<span class="char-hint" class:warn={excerpt.length > 220}>{excerpt.length}/220</span>
					</div>
					<textarea id="excerpt" name="excerpt" class="input textarea" rows="3" bind:value={excerpt} required></textarea>
				</div>

				<div class="card">
					<div class="label-row">
						<label class="section-label">Body Content <span class="req">*</span></label>
						{#if postType === 'news'}
							<span class="read-time-badge">{readTimePreview}</span>
						{/if}
					</div>
					<div class="paragraphs">
						{#each bodyParagraphs as para, i}
							<div class="para-row">
								<span class="para-num">{i + 1}</span>
								<textarea class="input textarea para-input" rows="3"
									value={para}
									on:input={(e) => updateParagraph(i, /** @type {HTMLTextAreaElement} */(e.target).value)}
								></textarea>
								{#if bodyParagraphs.length > 1}
									<button type="button" class="remove-para" on:click={() => removeParagraph(i)}>
										<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
									</button>
								{/if}
							</div>
						{/each}
					</div>
					<button type="button" class="add-para-btn" on:click={addParagraph}>
						<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
						Add paragraph
					</button>
				</div>
			</div>

			<div class="side-col">

				<div class="card">
					<label class="section-label">Settings</label>
					<div class="field">
						<label for="post-date">Date</label>
						<input id="post-date" name="date" type="date" class="input sm" bind:value={date} required />
					</div>
					<div class="toggle-row">
						<span class="toggle-label">Published</span>
						<button
							type="button"
							class="toggle" class:on={published}
							on:click={() => (published = !published)}
						>
							<span class="toggle-thumb"></span>
						</button>
					</div>
					<button type="submit" class="btn-publish" disabled={submitting}>
						{#if submitting}
							<span class="spinner"></span> Saving…
						{:else}
							Save Changes
						{/if}
					</button>
				</div>

				<!-- Cover image -->
				<div class="card">
					<label class="section-label">Cover Image</label>
					<div class="current-img">
						<img src={imagePreview ?? p.image} alt="cover" />
					</div>
					<label class="replace-img-btn" for="image-upload">
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
						Replace image
					</label>
					<input id="image-upload" name="image" type="file"
						accept="image/jpeg,image/png,image/webp,image/gif"
						class="file-input" on:change={handleImageChange} />
					<p class="hint">JPG, PNG, WebP · max 5 MB</p>
				</div>

				{#if postType === 'vacancy'}
					<div class="card">
						<label class="section-label">Vacancy Details</label>
						<div class="field">
							<label for="dept">Department</label>
							<input id="dept" name="department" type="text" class="input sm" bind:value={department} />
						</div>
						<div class="field">
							<label for="loc">Location</label>
							<input id="loc" name="location" type="text" class="input sm" bind:value={location} />
						</div>
						<div class="field">
							<label for="ddl">Application Deadline</label>
							<input id="ddl" name="deadline" type="date" class="input sm" bind:value={deadline} />
						</div>
						<div class="field">
							<label for="apply">Apply Link</label>
							<input id="apply" name="apply_link" type="url" class="input sm" bind:value={applyLink} />
						</div>
					</div>
				{/if}
			</div>
		</div>
	</form>
</div>

<style>
.page { max-width: 960px; }
.page-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; margin-bottom: 1.5rem; }
.breadcrumb { font-size: 0.8rem; color: #6b7280; text-decoration: none; display: inline-block; margin-bottom: 0.3rem; }
.breadcrumb:hover { color: #004197; }
.page-header h1 { font-size: 1.65rem; font-weight: 700; color: #111827; }
.header-actions { display: flex; gap: 0.65rem; align-items: center; margin-top: 0.25rem; }

.alert-error {
	background: #fef2f2; border: 1px solid #fecaca; color: #dc2626;
	border-radius: 10px; padding: 0.85rem 1.1rem; font-size: 0.875rem; margin-bottom: 1.25rem;
}
.alert-success {
	background: #f0fdf4; border: 1px solid #bbf7d0; color: #16a34a;
	border-radius: 10px; padding: 0.85rem 1.1rem; font-size: 0.875rem; margin-bottom: 1.25rem;
}

.form-layout { display: grid; grid-template-columns: 1fr 300px; gap: 1.25rem; align-items: start; }
.main-col, .side-col { display: flex; flex-direction: column; gap: 1.1rem; }

.card { background: white; border-radius: 14px; padding: 1.3rem; border: 1px solid #f1f3f5; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
.section-label { display: block; font-size: 0.82rem; font-weight: 600; color: #374151; margin-bottom: 0.6rem; }
.req { color: #dc2626; }
.label-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.6rem; }
.label-row .section-label { margin-bottom: 0; }
.char-hint { font-size: 0.75rem; color: #9ca3af; }
.char-hint.warn { color: #dc2626; }
.read-time-badge { font-size: 0.72rem; font-weight: 600; background: #eff6ff; color: #004197; border-radius: 999px; padding: 0.18rem 0.6rem; }

.type-toggle { display: flex; gap: 0.4rem; background: #f3f4f6; padding: 0.28rem; border-radius: 10px; }
.type-btn { flex: 1; display: flex; align-items: center; justify-content: center; gap: 0.4rem; padding: 0.5rem; border: none; background: transparent; border-radius: 8px; font-size: 0.82rem; font-weight: 500; color: #6b7280; cursor: pointer; transition: all 0.18s; font-family: inherit; }
.type-btn.active { background: white; color: #004197; box-shadow: 0 1px 4px rgba(0,0,0,0.1); }

.input { width: 100%; padding: 0.6rem 0.8rem; border: 1.5px solid #e5e7eb; border-radius: 8px; font-size: 0.875rem; color: #111827; background: white; font-family: inherit; transition: border-color 0.18s, box-shadow 0.18s; }
.input:focus { outline: none; border-color: #004197; box-shadow: 0 0 0 3px rgba(0,65,151,0.1); }
.textarea { resize: vertical; min-height: 80px; }
.input.sm { font-size: 0.85rem; padding: 0.55rem 0.75rem; }

.paragraphs { display: flex; flex-direction: column; gap: 0.7rem; margin-bottom: 0.7rem; }
.para-row { display: flex; gap: 0.5rem; align-items: flex-start; }
.para-num { width: 20px; height: 20px; min-width: 20px; background: #e5e7eb; color: #6b7280; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.68rem; font-weight: 700; margin-top: 0.65rem; }
.para-input { flex: 1; }
.remove-para { width: 26px; height: 26px; min-width: 26px; background: #fef2f2; color: #dc2626; border: none; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; margin-top: 0.6rem; }

.add-para-btn { display: inline-flex; align-items: center; gap: 0.35rem; border: 1.5px dashed #d1d5db; background: transparent; color: #6b7280; font-size: 0.82rem; padding: 0.45rem 0.9rem; border-radius: 8px; cursor: pointer; font-family: inherit; transition: all 0.18s; }
.add-para-btn:hover { border-color: #004197; color: #004197; background: #eff6ff; }

.field { margin-bottom: 0.75rem; }
.field:last-child { margin-bottom: 0; }
.field label { display: block; font-size: 0.78rem; font-weight: 600; color: #374151; margin-bottom: 0.3rem; }

.toggle-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; }
.toggle-label { font-size: 0.85rem; font-weight: 500; color: #374151; }
.toggle { width: 42px; height: 24px; background: #d1d5db; border: none; border-radius: 999px; cursor: pointer; padding: 3px; transition: background 0.2s; position: relative; }
.toggle.on { background: #004197; }
.toggle-thumb { display: block; width: 18px; height: 18px; background: white; border-radius: 50%; transition: transform 0.2s; box-shadow: 0 1px 3px rgba(0,0,0,0.2); }
.toggle.on .toggle-thumb { transform: translateX(18px); }

.btn-publish { width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.45rem; background: #004197; color: white; font-size: 0.9rem; font-weight: 600; padding: 0.7rem; border-radius: 9px; border: none; cursor: pointer; font-family: inherit; transition: background 0.18s; }
.btn-publish:hover:not(:disabled) { background: #00093e; }
.btn-publish:disabled { opacity: 0.55; cursor: not-allowed; }

.current-img { border-radius: 10px; overflow: hidden; height: 150px; margin-bottom: 0.75rem; }
.current-img img { width: 100%; height: 100%; object-fit: cover; }
.replace-img-btn { display: inline-flex; align-items: center; gap: 0.4rem; border: 1.5px solid #e5e7eb; background: transparent; color: #374151; font-size: 0.82rem; font-weight: 500; padding: 0.45rem 0.85rem; border-radius: 8px; cursor: pointer; font-family: inherit; transition: all 0.18s; }
.replace-img-btn:hover { border-color: #004197; color: #004197; }
.file-input { display: none; }
.hint { font-size: 0.75rem; color: #9ca3af; margin-top: 0.4rem; }

.btn-ghost { display: inline-flex; align-items: center; gap: 0.4rem; background: transparent; border: 1.5px solid #e5e7eb; color: #374151; font-size: 0.82rem; font-weight: 500; padding: 0.5rem 0.9rem; border-radius: 9px; cursor: pointer; text-decoration: none; font-family: inherit; transition: border-color 0.15s; }
.btn-ghost:hover { border-color: #9ca3af; }
.btn-delete { background: transparent; border: 1.5px solid #fecaca; color: #dc2626; font-size: 0.82rem; font-weight: 500; padding: 0.5rem 0.9rem; border-radius: 9px; cursor: pointer; font-family: inherit; transition: background 0.15s; }
.btn-delete:hover { background: #fef2f2; }
.btn-danger { background: #dc2626; color: white; border: none; font-size: 0.875rem; font-weight: 600; padding: 0.55rem 1.1rem; border-radius: 9px; cursor: pointer; font-family: inherit; }
.btn-danger:hover { background: #b91c1c; }

/* Modal */
.modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.45); display: flex; align-items: center; justify-content: center; z-index: 200; padding: 1rem; }
.modal { background: white; border-radius: 16px; padding: 1.75rem 2rem; max-width: 400px; width: 100%; box-shadow: 0 20px 50px rgba(0,0,0,0.2); }
.modal h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; }
.modal p { font-size: 0.9rem; color: #6b7280; margin-bottom: 1.5rem; }
.modal-actions { display: flex; gap: 0.75rem; justify-content: flex-end; }

.spinner { width: 14px; height: 14px; border: 2px solid rgba(255,255,255,0.3); border-top-color: white; border-radius: 50%; animation: spin 0.7s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }

@media (max-width: 768px) {
	.form-layout { grid-template-columns: 1fr; }
	.side-col { order: -1; }
	.header-actions { flex-direction: column; align-items: flex-end; }
}
</style>
