<script>
  /** @type {any[]} */
  export let posts = [];
</script>

<section class="news">
  <div class="container">
    <span class="tag">News &amp; Updates</span>

    <div class="news-header">
      <h2>Spotlights</h2>
      <p>
        We collaborate with national and international organizations to achieve
        our mission of empowering marginalized communities.
      </p>
    </div>

    <div class="news-grid">
      {#each posts as post}
        <a href="/blog/post?id={post.id}" class="news-card">
          <div class="card-img">
            <img src={post.image} alt={post.title} loading="lazy" />
          </div>
          <div class="card-body">
            <h3>{post.title}</h3>
            <p class="news-excerpt">{post.excerpt}</p>
            <span class="read-more">
              Read article <span class="arrow">→</span>
            </span>
          </div>
        </a>
      {/each}

      {#if posts.length === 0}
        {#each Array(3) as _}
          <div class="news-card skeleton">
            <div class="card-img skeleton-img"></div>
            <div class="card-body">
              <div class="sk-line sk-title"></div>
              <div class="sk-line sk-text"></div>
              <div class="sk-line sk-text short"></div>
            </div>
          </div>
        {/each}
      {/if}
    </div>

    
  </div>
</section>

<style>
  .news {
    padding: 6rem 2rem;
    background-color: #F0F7FF;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .tag {
    display: inline-block;
    background-color: #DBEAFE;
    color: #004197;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 2rem;
    letter-spacing: 0.03em;
  }

  .news-header {
    max-width: 600px;
    margin-bottom: 3rem;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
    color: #00093e;
  }

  .news-header p {
    color: #666;
    line-height: 1.6;
  }

  /* Grid */
  .news-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.75rem;
  }

  /* Card */
  .news-card {
    background: white;
    border-radius: 14px;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    border: 1px solid #e8f0fe;
    transition: transform 0.28s ease, box-shadow 0.28s ease;
  }

  .news-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 32px rgba(0,65,151,0.12);
  }

  .card-img {
    width: 100%;
    aspect-ratio: 16/9;
    overflow: hidden;
  }

  .card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .news-card:hover .card-img img {
    transform: scale(1.04);
  }

  .card-body {
    padding: 1.4rem 1.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  h3 {
    font-size: 1.05rem;
    color: #111827;
    font-weight: 600;
    line-height: 1.35;
    margin-bottom: 0.6rem;
  }

  .news-excerpt {
    color: #6b7280;
    font-size: 0.875rem;
    line-height: 1.6;
    flex: 1;
    margin-bottom: 1.1rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .read-more {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    color: #004197;
    font-weight: 600;
    font-size: 0.875rem;
    margin-top: auto;
  }

  .arrow {
    transition: transform 0.25s ease;
    display: inline-block;
  }

  .news-card:hover .arrow {
    transform: translateX(4px);
  }

  /* View all */
  .view-all-wrap {
    margin-top: 2.5rem;
    text-align: center;
  }

  .view-all-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #004197;
    color: white;
    font-weight: 600;
    font-size: 0.925rem;
    padding: 0.75rem 1.75rem;
    border-radius: 999px;
    text-decoration: none;
    transition: background 0.2s, transform 0.2s;
  }

  .view-all-btn:hover {
    background: #00093e;
    transform: translateY(-2px);
  }

  /* Skeleton loader */
  .skeleton { pointer-events: none; }
  .skeleton-img {
    width: 100%;
    aspect-ratio: 16/9;
    background: linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%);
    background-size: 200% 100%;
    animation: shimmer 1.4s infinite;
  }
  .sk-line {
    height: 14px;
    border-radius: 6px;
    background: linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%);
    background-size: 200% 100%;
    animation: shimmer 1.4s infinite;
    margin-bottom: 0.6rem;
  }
  .sk-title { height: 18px; width: 85%; margin-bottom: 0.8rem; }
  .sk-text  { width: 100%; }
  .sk-text.short { width: 60%; }

  @keyframes shimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  /* Responsive */
  @media (max-width: 968px) {
    .news-grid {
      display: flex;
      overflow-x: auto;
      gap: 1rem;
      padding-bottom: 1rem;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }
    .news-grid::-webkit-scrollbar { display: none; }
    .news-card {
      min-width: 280px;
      scroll-snap-align: start;
    }
  }

  @media (max-width: 580px) {
    .news { padding: 4rem 1.5rem; }
    h2 { font-size: 2rem; }
    .news-grid { padding: 0 0 1rem; }
  }
</style>
