<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	export let form;

	/** @type {'news' | 'vacancy'} */
	let postType = /** @type {'news'|'vacancy'} */ (
		$page.url.searchParams.get('type') === 'vacancy' ? 'vacancy' : 'news'
	);

	let title = '';
	let date = new Date().toISOString().split('T')[0];
	let excerpt = '';
	/** @type {string[]} */
	let bodyParagraphs = [''];
	let department = '';
	let location = '';
	let deadline = '';
	let applyLink = '';

	/** @type {File | null} */
	let imageFile = null;
	let imagePreview = /** @type {string | null} */ (null);
	let submitting = false;

	function handleImageChange(/** @type {Event} */ e) {
		const input = /** @type {HTMLInputElement} */ (e.target);
		const file = input.files?.[0] ?? null;
		imageFile = file;
		if (file) {
			const reader = new FileReader();
			reader.onload = (ev) => { imagePreview = /** @type {string} */ (ev.target?.result); };
			reader.readAsDataURL(file);
		} else {
			imagePreview = null;
		}
	}

	function addParagraph() {
		bodyParagraphs = [...bodyParagraphs, ''];
	}

	/** @param {number} i */
	function removeParagraph(i) {
		bodyParagraphs = bodyParagraphs.filter((_, idx) => idx !== i);
	}

	/**
	 * @param {number} i
	 * @param {string} val
	 */
	function updateParagraph(i, val) {
		bodyParagraphs[i] = val;
		bodyParagraphs = bodyParagraphs;
	}

	// Auto-computed read time (shown as preview)
	$: wordCount = [excerpt, ...bodyParagraphs].join(' ').trim().split(/\s+/).filter(Boolean).length;
	$: readTimePreview = `~${Math.max(1, Math.ceil(wordCount / 200))} min read`;

	$: isValid =
		title.trim() &&
		excerpt.trim() &&
		bodyParagraphs.some((p) => p.trim()) &&
		(postType === 'news' || applyLink.trim());
</script>

<svelte:head><title>New Post | HEDS Admin</title></svelte:head>

<div class="page">
	<div class="page-header">
		<div>
			<a href="/admin/posts" class="breadcrumb">← All Posts</a>
			<h1>Create New Post</h1>
		</div>
	</div>

	{#if form?.error}
		<div class="alert-error">
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
			{form.error}
		</div>
	{/if}

	<form
		method="POST"
		action="?/create"
		enctype="multipart/form-data"
		use:enhance={() => {
			submitting = true;
			return async ({ update }) => { submitting = false; await update(); };
		}}
	>
		<!-- Hidden body field populated by reactive statement -->
		<input type="hidden" name="body" value={JSON.stringify(bodyParagraphs.filter(Boolean))} />
		<input type="hidden" name="category" value={postType} />

		<div class="form-layout">
			<!-- Left column (main content) -->
			<div class="main-col">

				<!-- Type toggle -->
				<div class="card">
					<label class="section-label">Post Type</label>
					<div class="type-toggle">
						<button type="button" class="type-btn" class:active={postType === 'news'} on:click={() => (postType = 'news')}>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
							News Article
						</button>
						<button type="button" class="type-btn" class:active={postType === 'vacancy'} on:click={() => (postType = 'vacancy')}>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
							Job Vacancy
						</button>
					</div>
				</div>

				<!-- Title -->
				<div class="card">
					<label class="section-label" for="title">Title <span class="req">*</span></label>
					<input
						id="title" name="title" type="text" class="input"
						placeholder={postType === 'vacancy' ? 'e.g. Program Officer – Inclusive Education' : 'e.g. Christian Horizon is Expanding'}
						bind:value={title} required
					/>
				</div>

				<!-- Excerpt -->
				<div class="card">
					<div class="label-row">
						<label class="section-label" for="excerpt">Excerpt <span class="req">*</span></label>
						<span class="char-hint" class:warn={excerpt.length > 220}>{excerpt.length}/220</span>
					</div>
					<textarea id="excerpt" name="excerpt" class="input textarea" rows="3"
						placeholder="A short summary shown on the listing page (1-2 sentences)"
						bind:value={excerpt} required></textarea>
				</div>

				<!-- Body paragraphs -->
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
									placeholder="Paragraph {i + 1}…"
									value={para}
									on:input={(e) => updateParagraph(i, /** @type {HTMLTextAreaElement} */(e.target).value)}
								></textarea>
								{#if bodyParagraphs.length > 1}
									<button type="button" class="remove-para" on:click={() => removeParagraph(i)}>
										<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
									</button>
								{/if}
							</div>
						{/each}
					</div>
					<button type="button" class="add-para-btn" on:click={addParagraph}>
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
						Add paragraph
					</button>
				</div>
			</div>

			<!-- Right column (meta) -->
			<div class="side-col">

				<!-- Publish -->
				<div class="card">
					<label class="section-label">Publish</label>
					<div class="pub-row">
						<input name="date" type="date" class="input" bind:value={date} required />
					</div>
					<button type="submit" class="btn-publish" disabled={!isValid || submitting}>
						{#if submitting}
							<span class="spinner"></span> Saving…
						{:else}
							<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
							Publish Post
						{/if}
					</button>
					{#if postType === 'news'}
						<p class="hint">Read time calculated automatically from content.</p>
					{/if}
				</div>

				<!-- Cover image -->
				<div class="card">
					<label class="section-label">Cover Image</label>
					{#if imagePreview}
						<div class="img-preview">
							<img src={imagePreview} alt="preview" />
							<button type="button" class="remove-img" on:click={() => { imagePreview = null; imageFile = null; }}>✕</button>
						</div>
					{:else}
						<label class="upload-zone" for="image-upload">
							<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
							<span>Click to upload image</span>
							<span class="hint">JPG, PNG, WebP · max 5 MB</span>
						</label>
					{/if}
					<input id="image-upload" name="image" type="file"
						accept="image/jpeg,image/png,image/webp,image/gif"
						class="file-input" on:change={handleImageChange} />
				</div>

				<!-- Vacancy fields -->
				{#if postType === 'vacancy'}
					<div class="card">
						<label class="section-label">Vacancy Details</label>
						<div class="field">
							<label for="dept">Department</label>
							<input id="dept" name="department" type="text" class="input sm"
								placeholder="e.g. Programs" bind:value={department} />
						</div>
						<div class="field">
							<label for="loc">Location</label>
							<input id="loc" name="location" type="text" class="input sm"
								placeholder="e.g. Addis Ababa" bind:value={location} />
						</div>
						<div class="field">
							<label for="ddl">Application Deadline</label>
							<input id="ddl" name="deadline" type="date" class="input sm"
								bind:value={deadline} />
						</div>
					</div>

					<div class="card">
						<label class="section-label" for="apply">
							Apply Link <span class="req">*</span>
						</label>
						<input id="apply" name="apply_link" type="url" class="input sm"
							placeholder="https://forms.example.com/apply" bind:value={applyLink}
							required={postType === 'vacancy'} />
						
					</div>
				{/if}
			</div>
		</div>
	</form>
</div>

<style>
.page { max-width: 960px; }

.page-header { margin-bottom: 1.5rem; }
.breadcrumb { font-size: 0.8rem; color: #6b7280; text-decoration: none; display: inline-block; margin-bottom: 0.3rem; }
.breadcrumb:hover { color: #004197; }
.page-header h1 { font-size: 1.65rem; font-weight: 700; color: #111827; }

.alert-error {
	display: flex; align-items: center; gap: 0.6rem;
	background: #fef2f2; border: 1px solid #fecaca; color: #dc2626;
	border-radius: 10px; padding: 0.85rem 1.1rem;
	font-size: 0.875rem; margin-bottom: 1.25rem;
}

/* Two-column layout */
.form-layout { display: grid; grid-template-columns: 1fr 300px; gap: 1.25rem; align-items: start; }
.main-col, .side-col { display: flex; flex-direction: column; gap: 1.1rem; }

/* Card */
.card {
	background: white; border-radius: 14px; padding: 1.3rem;
	border: 1px solid #f1f3f5; box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.section-label { display: block; font-size: 0.82rem; font-weight: 600; color: #374151; margin-bottom: 0.6rem; }
.req { color: #dc2626; }
.label-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.6rem; }
.label-row .section-label { margin-bottom: 0; }
.char-hint { font-size: 0.75rem; color: #9ca3af; }
.char-hint.warn { color: #dc2626; }
.read-time-badge {
	font-size: 0.72rem; font-weight: 600; background: #eff6ff; color: #004197;
	border-radius: 999px; padding: 0.18rem 0.6rem;
}

/* Type toggle */
.type-toggle {
	display: flex; gap: 0.45rem; background: #f3f4f6;
	padding: 0.3rem; border-radius: 10px;
}
.type-btn {
	flex: 1; display: flex; align-items: center; justify-content: center; gap: 0.45rem;
	padding: 0.55rem 0.75rem; border: none; background: transparent; border-radius: 8px;
	font-size: 0.85rem; font-weight: 500; color: #6b7280; cursor: pointer;
	transition: all 0.18s; font-family: inherit;
}
.type-btn.active { background: white; color: #004197; box-shadow: 0 1px 4px rgba(0,0,0,0.1); }

/* Inputs */
.input {
	width: 100%; padding: 0.6rem 0.8rem;
	border: 1.5px solid #e5e7eb; border-radius: 8px;
	font-size: 0.875rem; color: #111827; background: white;
	font-family: inherit; transition: border-color 0.18s, box-shadow 0.18s;
}
.input:focus { outline: none; border-color: #004197; box-shadow: 0 0 0 3px rgba(0,65,151,0.1); }
.textarea { resize: vertical; min-height: 80px; }
.input.sm { font-size: 0.85rem; padding: 0.55rem 0.75rem; }

/* Paragraphs */
.paragraphs { display: flex; flex-direction: column; gap: 0.7rem; margin-bottom: 0.7rem; }
.para-row { display: flex; gap: 0.5rem; align-items: flex-start; }
.para-num {
	width: 20px; height: 20px; min-width: 20px;
	background: #e5e7eb; color: #6b7280; border-radius: 50%;
	display: flex; align-items: center; justify-content: center;
	font-size: 0.68rem; font-weight: 700; margin-top: 0.65rem;
}
.para-input { flex: 1; }
.remove-para {
	width: 26px; height: 26px; min-width: 26px;
	background: #fef2f2; color: #dc2626; border: none; border-radius: 6px;
	cursor: pointer; display: flex; align-items: center; justify-content: center;
	margin-top: 0.6rem;
}
.remove-para:hover { background: #fee2e2; }

.add-para-btn {
	display: inline-flex; align-items: center; gap: 0.35rem;
	border: 1.5px dashed #d1d5db; background: transparent; color: #6b7280;
	font-size: 0.82rem; padding: 0.45rem 0.9rem; border-radius: 8px;
	cursor: pointer; font-family: inherit; transition: all 0.18s;
}
.add-para-btn:hover { border-color: #004197; color: #004197; background: #eff6ff; }

/* Publish card */
.pub-row { margin-bottom: 0.75rem; }
.btn-publish {
	width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.45rem;
	background: #004197; color: white; font-size: 0.9rem; font-weight: 600;
	padding: 0.7rem; border-radius: 9px; border: none; cursor: pointer;
	font-family: inherit; transition: background 0.18s;
}
.btn-publish:hover:not(:disabled) { background: #00093e; }
.btn-publish:disabled { opacity: 0.5; cursor: not-allowed; }

.hint { font-size: 0.75rem; color: #9ca3af; margin-top: 0.5rem; }
.hint code { background: #f3f4f6; padding: 0.1rem 0.3rem; border-radius: 4px; font-size: 0.72rem; }

/* Image upload */
.img-preview {
	position: relative; border-radius: 10px; overflow: hidden;
	height: 160px; margin-bottom: 0.5rem;
}
.img-preview img { width: 100%; height: 100%; object-fit: cover; }
.remove-img {
	position: absolute; top: 0.5rem; right: 0.5rem;
	width: 26px; height: 26px; background: rgba(0,0,0,0.55); color: white;
	border: none; border-radius: 50%; cursor: pointer; font-size: 0.72rem;
	display: flex; align-items: center; justify-content: center;
}
.upload-zone {
	display: flex; flex-direction: column; align-items: center; gap: 0.4rem;
	border: 2px dashed #e5e7eb; border-radius: 10px;
	padding: 1.5rem; cursor: pointer; text-align: center;
	transition: border-color 0.18s, background 0.18s;
}
.upload-zone:hover { border-color: #004197; background: #eff6ff; }
.upload-zone span { font-size: 0.82rem; color: #6b7280; }
.upload-zone span:first-of-type { font-weight: 500; color: #374151; }
.file-input { display: none; }

/* Vacancy fields */
.field { margin-bottom: 0.75rem; }
.field:last-child { margin-bottom: 0; }
.field label { display: block; font-size: 0.78rem; font-weight: 600; color: #374151; margin-bottom: 0.35rem; }

/* Spinner */
.spinner {
	width: 14px; height: 14px; border: 2px solid rgba(255,255,255,0.3);
	border-top-color: white; border-radius: 50%;
	animation: spin 0.7s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

@media (max-width: 768px) {
	.form-layout { grid-template-columns: 1fr; }
	.side-col { order: -1; }
	.type-btn { font-size: 0.8rem; padding: 0.5rem; }
}
</style>
