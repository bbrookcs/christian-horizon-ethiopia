<script>
    import Header from './header.svelte';
    import Who from './whoweare.svelte';
    import OurProgram from './ourprogram.svelte';
    import Partenrship from './partnership.svelte';
    import News from './news.svelte';
    import Newsletter from './newsletter.svelte';
    import Footer from './footer.svelte';
    import { scrollAnimation } from '$lib/scrollAnimation';
    import { fade, fly } from 'svelte/transition';
    import { onMount, tick } from 'svelte';

    export let data;
    $: spotlightPosts = data?.spotlightPosts ?? [];

    const images = ['/image1.png', '/imagee1.png'];
    const IMAGE_SWAP_MS = 4000;
    /** Time on slideshow before crossfading to video (two images × 3s) */
    const IMAGE_PHASE_MS = 8000;

    /** @type {'images' | 'video'} */
    let phase = 'images';
    let currentImageIndex = 0;

    /** @type {HTMLVideoElement | undefined} */
    let videoEl;

    /** @type {ReturnType<typeof setInterval> | undefined} */
    let imageIntervalId;
    /** @type {ReturnType<typeof setTimeout> | undefined} */
    let imageToVideoTimer;
    /** @type {ReturnType<typeof setTimeout> | undefined} */
    let videoToImagesTimer;

    function clearImageRotation() {
        if (imageIntervalId) {
            clearInterval(imageIntervalId);
            imageIntervalId = undefined;
        }
    }

    function startImageRotation() {
        clearImageRotation();
        imageIntervalId = setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
        }, IMAGE_SWAP_MS);
    }

    function clearImageToVideoTimer() {
        if (imageToVideoTimer) {
            clearTimeout(imageToVideoTimer);
            imageToVideoTimer = undefined;
        }
    }

    function clearVideoToImagesTimer() {
        if (videoToImagesTimer) {
            clearTimeout(videoToImagesTimer);
            videoToImagesTimer = undefined;
        }
    }

    function armVideoPhaseEnd() {
        if (phase !== 'video' || !videoEl) return;
        clearVideoToImagesTimer();
        const raw = videoEl.duration;
        const sec = raw && !Number.isNaN(raw) && raw > 0 ? raw : 12;
        videoToImagesTimer = setTimeout(() => {
            videoToImagesTimer = undefined;
            switchToImages();
        }, Math.max(sec * 1000, 1500));
    }

    function handleVideoMeta() {
        if (phase === 'video') armVideoPhaseEnd();
    }

    function scheduleImagePhaseEnd() {
        clearImageToVideoTimer();
        imageToVideoTimer = setTimeout(() => {
            imageToVideoTimer = undefined;
            switchToVideo();
        }, IMAGE_PHASE_MS);
    }

    async function switchToVideo() {
        clearImageToVideoTimer();
        clearImageRotation();
        phase = 'video';
        await tick();
        if (!videoEl) return;
        videoEl.currentTime = 0;
        try {
            await videoEl.play();
        } catch {
            switchToImages();
            return;
        }
        if (videoEl.duration && !Number.isNaN(videoEl.duration) && videoEl.duration > 0) {
            armVideoPhaseEnd();
        } else {
            clearVideoToImagesTimer();
            videoToImagesTimer = setTimeout(() => {
                videoToImagesTimer = undefined;
                switchToImages();
            }, 20000);
        }
    }

    async function switchToImages() {
        clearVideoToImagesTimer();
        phase = 'images';
        if (videoEl) {
            videoEl.pause();
            videoEl.currentTime = 0;
        }
        currentImageIndex = 0;
        await tick();
        startImageRotation();
        scheduleImagePhaseEnd();
    }

    function onVideoError() {
        clearVideoToImagesTimer();
        switchToImages();
    }

    onMount(() => {
        startImageRotation();
        scheduleImagePhaseEnd();
        return () => {
            clearImageRotation();
            clearImageToVideoTimer();
            clearVideoToImagesTimer();
        };
    });

    /** Light header only while first hero slide (image1.png) is visible */
    $: headerDarkMode =
        phase === 'video' || (phase === 'images' && images[currentImageIndex] !== '/image1.png');
</script>
<Header darkMode={headerDarkMode}/>

<section class="hero-section">
    <div class="media-container" aria-hidden="true">
      <div class="image-carousel layer image-layer" class:active={phase === 'images'}>
        {#key currentImageIndex}
          <img
            src={images[currentImageIndex]}
            alt=""
            class="hero-image"
            transition:fade={{ duration: 1000 }}
          />
        {/key}
      </div>
      <div class="video-layer layer" class:active={phase === 'video'}>
        <video
          bind:this={videoEl}
          class="hero-video"
          src="/che.mp4"
          muted
          playsinline
          loop
          on:loadedmetadata={handleVideoMeta}
          on:error={onVideoError}
        ></video>
      </div>
      <div class="hero-overlay" class:hero-overlay--video={phase === 'video'}></div>
    </div>
    <div class="content" 
         in:fly={{ y: 50, duration: 1000, delay: 800 }}
         use:scrollAnimation={{ animation: 'slideRight', delay: 300 }}>
      <h1>Building Brighter Futures<br>for Children and Communities</h1>
      <p>
        Empowering Ethiopian children, women, and people with disabilities<br>
        through education, care, and sustainable support.
      </p>
      <div class="buttons">
        <a href="/get-involved" class="primary-btn">Get Involved</a>
      </div>
    </div>
</section>
<svelte:head>
  <title>Horizons Ethiopia Development Services</title>
</svelte:head>
<Who />
<OurProgram />
<Partenrship />
<News posts={spotlightPosts} />
<Newsletter />
<Footer />
<style>
 .hero-section {
    position: relative;
    width: 100%;
    height: 100vh;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start; /* Change from center to flex-start */
    padding: 0 2rem;
  }
  
  .media-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
  }

  .layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: opacity 0.95s ease-in-out;
    pointer-events: none;
  }

  .image-layer {
    opacity: 0;
    z-index: 1;
  }

  .image-layer.active {
    opacity: 1;
    z-index: 2;
  }

  .image-carousel {
    position: absolute;
    inset: 0;
  }

  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .video-layer {
    opacity: 0;
    z-index: 1;
  }

  .video-layer.active {
    opacity: 1;
    z-index: 2;
  }

  .hero-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 3;
    background: transparent;
  }

  .hero-overlay--video {
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.34) 40%,
      rgba(0, 0, 0, 0.15) 72%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  
  .content {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin-left: 3%;
    margin-top: 9%; /* Add bottom margin */
    text-align: left;
    padding-top: 4rem;
  }
  
  .content h1 {
    font-size: 4.5rem;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
  
  .content p {
    font-size: 1.25rem;
    line-height: 1.6;
    margin-bottom: 2.5rem;
    opacity: 0.9;
  }
  
  .buttons {
    display: flex;
    gap: 1rem;
  }
  
  .primary-btn {
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  
  .primary-btn {
    background-color: #fbbd23;
    color: #000;
  }
  
  .primary-btn:hover {
    background-color: #ffd15c;
  }

  @media (max-width: 768px) {
    .content h1 {
      font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: 400;
    }
    
    .content p {
      font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.3rem;
    opacity: 0.9;
    }
    .content {
    margin-left: 0%;
    margin-top: 50%; /* Add bottom margin */
    text-align: left;
    padding-top: 3rem;
  }
  
  }
</style>