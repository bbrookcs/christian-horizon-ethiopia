<footer class="footer">
  <div class="container">
    <div class="footer-main">
      <div class="footer-brand">
        <img src="/logo1.png" alt="HEDS Logo" class="footer-logo" />
        <p>
          Empowering Ethiopia's most marginalized communities through inclusion, dignity, and sustainable development.
        </p>
        <p class="reg-note">Registration #1054 | Asella, Oromia, Ethiopia</p>
      </div>

      <div class="footer-links">
        <div class="link-group">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/blog">News & Blog</a>
          <a href="/contact">Contact</a>
          <a href="/donate">Donate</a>
        </div>

        <div class="link-group">
          <h3>Contact us</h3>
          <p>Asella, Oromia, Ethiopia</p>
          <p>+251912345678</p>
          <p>contact@heds.org.et</p>
        </div>

        <div class="link-group">
          <h3>Follow Us</h3>
          <div class="social-links">
            <a href="#" class="social-link">Facebook</a>
            <a href="#" class="social-link">Twitter</a>
            <a href="#" class="social-link">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
  .footer {
    background-color: #F0F7FF;
    padding: 4rem 2rem;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-main {
    display: grid;
    grid-template-columns: 1.5fr 2fr;
    gap: 4rem;
  }

  .footer-brand {
    max-width: 400px;
  }

  .footer-logo {
    height: 60px;
    margin-bottom: 1.5rem;
  }

  .footer-brand p {
    color: #666;
    line-height: 1.6;
  }

  .footer-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .link-group h3 {
    color: #004197;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  .link-group a {
    display: block;
    color: #666;
    text-decoration: none;
    margin-bottom: 0.8rem;
    transition: color 0.3s ease;
  }

  .link-group a:hover {
    color: #004197;
  }

  .link-group p {
    color: #666;
    margin-bottom: 0.8rem;
  }

  .social-links {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  @media (max-width: 968px) {
    .footer-main {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .footer-brand {
      max-width: 100%;
      text-align: left;
    }

    .footer-links {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
    }

    /* Quick Links and Follow Us take 50% width each */
    .link-group:first-child,
    .link-group:last-child {
      width: calc(50% - 1rem);
    }

    /* Contact Us takes full width and appears between */
    .link-group:nth-child(2) {
      width: 100%;
      order: 2;  /* Move Contact Us to the middle */
    }

    .link-group:last-child {
      order: 1;  /* Move Follow Us up next to Quick Links */
    }

    .link-group {
      text-align: left;
    }

    .social-links {
      flex-direction: column;
      gap: 0.8rem;
    }
  }

  @media (max-width: 580px) {
    .footer {
      padding: 3rem 1.5rem;
    }
  }
</style> 