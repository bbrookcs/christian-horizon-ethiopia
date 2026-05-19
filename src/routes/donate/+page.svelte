<script>
    import Header from '../header.svelte';
    import Footer from '../footer.svelte';

    const amounts = [25, 50, 100, 250, 500];
    /** @type {number | null} */
    let selectedAmount = 100;
    let customAmount = '';

    function selectPreset(amt) {
        selectedAmount = amt;
        customAmount = '';
    }

    $: displayAmount =
        customAmount.trim() !== ''
            ? customAmount
            : selectedAmount !== null
              ? String(selectedAmount)
              : '—';
</script>

<svelte:head>
    <title>Donate | Horizons Ethiopia Development Services</title>
    <meta
        name="description"
        content="Support HEDS — education, inclusion, livelihoods, and humanitarian relief for children, women, and people with disabilities in Ethiopia."
    />
</svelte:head>

<div class="page">
    <Header darkMode={true} />
    <section class="form-section" id="give">
        <div class="section-inner">
            <div class="panel">
                <span class="tag tag-dark">Choose an amount (preview)</span>
                <h2>Make a gift</h2>
                <p class="panel-note">
                    Payment processing is not connected yet. Amounts below are for the upcoming checkout
                    experience — thank you for your patience.
                </p>

                <div class="amount-presets">
                    {#each amounts as amt}
                        <button
                            type="button"
                            class="amount-btn"
                            class:selected={selectedAmount === amt && customAmount.trim() === ''}
                            on:click={() => selectPreset(amt)}
                        >
                            ${amt}
                        </button>
                    {/each}
                </div>

                <label class="field">
                    <span>Custom amount (USD)</span>
                    <input
                        type="text"
                        inputmode="decimal"
                        placeholder="e.g. 75"
                        bind:value={customAmount}
                        on:focus={() => (selectedAmount = null)}
                    />
                </label>

                <div class="summary">
                    <span>Selected</span>
                    <strong>${displayAmount}</strong>
                </div>

                <button type="button" class="submit" disabled> Continue to give (coming soon) </button>

                <p class="fine-print">
                    Questions? <a href="/contact">Contact us</a> or email the team — we’ll share bank / partner
                    options until online donations go live.
                </p>
            </div>
        </div>
    </section>

    <Footer />
</div>

<style>
    .page {
        background: #fff;
        min-height: 100vh;
    }

    .tag {
        display: inline-block;
        background: #dbeafe;
        color: #004197;
        padding: 0.45rem 1rem;
        border-radius: 999px;
        font-size: 0.95rem;
        font-weight: 600;
        margin-bottom: 1.1rem;
    }

    .tag-dark {
        background: #fef3c7;
        color: #92400e;
    }

    .section-inner {
        max-width: 720px;
        margin: 0 auto;
        padding: 3.5rem 2rem;
    }


    .form-section {
        background: #fff9f0;
        padding: 7rem 2rem 3.5rem;
        border-top: 1px solid #f3e8d8;
    }

    .panel {
        background: #fff;
        padding: 2rem 2rem 2.25rem;
        border-radius: 16px;
        box-shadow: 0 16px 40px rgba(0, 9, 62, 0.07);
    }

    .panel h2 {
        font-size: 1.65rem;
        color: #00093e;
        margin: 0 0 0.5rem;
        font-weight: 700;
    }

    .panel-note {
        margin: 0 0 1.5rem;
        color: #6b7280;
        font-size: 0.95rem;
        line-height: 1.55;
    }

    .amount-presets {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
        margin-bottom: 1.25rem;
    }

    .amount-btn {
        padding: 0.65rem 1.15rem;
        border-radius: 999px;
        border: 2px solid #e5e7eb;
        background: #fff;
        font-weight: 600;
        font-size: 0.95rem;
        cursor: pointer;
        color: #00093e;
        transition:
            border-color 0.2s ease,
            background 0.2s ease;
    }

    .amount-btn:hover {
        border-color: #fbbd23;
    }

    .amount-btn.selected {
        border-color: #fbbd23;
        background: #fffbeb;
    }

    .field {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        margin-bottom: 1.1rem;
    }

    .field span {
        font-size: 0.88rem;
        font-weight: 600;
        color: #00093e;
    }

    .field input {
        padding: 0.8rem 1rem;
        border-radius: 10px;
        border: 1px solid #d1d5db;
        font-size: 1rem;
    }

    .field input:focus {
        outline: none;
        border-color: #fbbd23;
        box-shadow: 0 0 0 3px rgba(251, 189, 35, 0.25);
    }

    .summary {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        padding: 1rem 0;
        margin-bottom: 0.25rem;
        border-top: 1px solid #f3f4f6;
        font-size: 0.95rem;
        color: #6b7280;
    }

    .summary strong {
        font-size: 1.35rem;
        color: #00093e;
    }

    .submit {
        width: 100%;
        margin-top: 0.75rem;
        padding: 0.95rem 1.5rem;
        border: none;
        border-radius: 999px;
        background: #fbbd23;
        color: #000;
        font-weight: 700;
        font-size: 1rem;
        cursor: not-allowed;
        opacity: 0.85;
    }

    .fine-print {
        margin: 1.25rem 0 0;
        font-size: 0.88rem;
        color: #6b7280;
        line-height: 1.5;
    }

    .fine-print a {
        color: #004197;
        font-weight: 600;
    }

    @media (max-width: 900px) {
        .hero-inner {
            grid-template-columns: 1fr;
        }

        .impact-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
