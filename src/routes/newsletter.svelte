<script>
  import { scrollAnimation } from '$lib/scrollAnimation';
</script>

<section class="newsletter">
  <div class="container">
    <div class="content" use:scrollAnimation={{ animation: 'slideRight' }}>
      <span class="tag">Newsletter</span>
      <h2>Stay updated</h2>
      <p>
        Subscribe to our newsletter and stay informed about our programs,
        impact, and ways you can support Christian Horizons Ethiopia.
      </p>
      <div class="form">
        <input type="email" placeholder="Your email address" />
        <button class="subscribe-btn">Subscribe</button>
      </div>
    </div>
    <div class="image-stack" use:scrollAnimation={{ animation: 'scale', delay: 200 }}>
      <img src="/img5.jpg" alt="Community Support" class="stack-img" />
      <img src="/img6.jpg" alt="Children Activities" class="stack-img" />
      <img src="/img7.jpg" alt="Support Programs" class="stack-img" />
      <img src="/img8.jpg" alt="Education Impact" class="stack-img" />
    </div>
  </div>
</section>

<style>
  .newsletter {
    background-color: #1E40AF;
    padding: 6rem 2rem;
    color: white;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .tag {
    display: inline-block;
    background-color: white;
    color: #FF6B00;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  p {
    opacity: 0.9;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .form {
    display: flex;
    gap: 1rem;
  }

  input {
    flex: 1;
    padding: 1rem;
    border-radius: 8px;
    border: none;
    font-size: 1rem;
  }

  .subscribe-btn {
    background: #FFB800;
    color: black;
    padding: 1rem 2rem;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .subscribe-btn:hover {
    background: #FFA600;
  }

  .image-stack {
    position: relative;
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .stack-img {
    position: absolute;
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 12px;
    border: 4px solid white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }

  .stack-img:nth-child(1) {
    transform: rotate(-12deg) translateX(-100px) translateY(-100px);
    z-index: 4;
  }

  .stack-img:nth-child(2) {
    transform: rotate(8deg) translateX(100px) translateY(-100px);
    z-index: 3;
  }

  .stack-img:nth-child(3) {
    transform: rotate(-5deg) translateX(-100px) translateY(100px);
    z-index: 2;
  }

  .stack-img:nth-child(4) {
    transform: rotate(15deg) translateX(100px) translateY(100px);
    z-index: 1;
  }

  @media (max-width: 968px) {
    .image-stack {
      height: 300px;
    }

    .stack-img {
      width: 160px;
      height: 160px;
    }
  }

  @media (max-width: 580px) {
    .stack-img {
      width: 140px;
      height: 140px;
    }
  }

  @media (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
      gap: 1rem;
      text-align: left;
      padding: 0 1.5rem;
    }

    .content {
      order: 0;
      max-width: 400px;
      margin: 0;
    }

    .image-stack {
      order: 1;
      height: 350px;
      margin: 0 auto;
      max-width: 400px;
    }

    .tag {
      margin-left: 0;
    }

    .form {
      flex-direction: column;
      gap: 1rem;
      text-align: left;
    }

    .stack-img {
      width: 150px;
      height: 150px;
    }

    .stack-img:nth-child(1) {
      transform: rotate(-12deg) translateX(-80px) translateY(-50px);
    }

    .stack-img:nth-child(2) {
      transform: rotate(8deg) translateX(70px) translateY(-40px);
    }

    .stack-img:nth-child(3) {
      transform: rotate(-5deg) translateX(-80px) translateY(100px);
    }

    .stack-img:nth-child(4) {
      transform: rotate(15deg) translateX(100px) translateY(100px);
    }

    h2 {
      font-size: 2rem;
    }

    .newsletter {
      padding: 4rem .2rem;
    }
  }
</style> 