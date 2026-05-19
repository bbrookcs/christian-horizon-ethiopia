<script>
  import { scrollAnimation } from '$lib/scrollAnimation';
</script>

<section class="programs">
    <div class="container">
      <span class="tag">Our Programs</span>
      
      <!-- First Program: Education -->
      <div class="program-section" use:scrollAnimation={{ animation: 'slideRight', delay: 200 }}>
        <div class="content">
          <h2>Education</h2>
          <p>
            At HEDS, we believe every child deserves access to quality, inclusive education regardless of background or ability. 
            Through 131 inclusive education centers and training over 1,240 special needs teachers, we are building learning environments where every child including those with disabilities can thrive.
          </p>
          <a href="/education" class="learn-more">
            Learn more →
          </a>
        </div>
  
        <div class="image-grid">
          <img src="./schoo.jpeg" alt="Students in classroom" />
          <img src="./img2.jpg" alt="Children learning" />
          <img src="./img3.jpg" alt="Group activity" />
          <img src="./img4.jpg" alt="School event" />
        </div>
      </div>
  
      <!-- Second Program: Charity Program -->
      <div class="program-section" use:scrollAnimation={{ animation: 'slideLeft', delay: 200 }}>
        <div class="image-grid">
          <img src="./eco.jpg" alt="Community support" />
          <img src="./eco1.jpeg" alt="Charity work" />
          <img src="./img7.jpg" alt="Support programs" />
          <img src="./eco2.jpg" alt="Child support" />
        </div>
  
        <div class="content">
          <h2>Livelihood & Economic Empowerment</h2>
          <p>
            We equip vulnerable families, women, and youth with vocational skills, entrepreneurship training, and access to savings groups. 
            Through our livelihood program, 2,740 caregivers have improved their economic standing, 56 women's savings groups have collectively saved 3.2 million Birr, and 7,200 youth have found pathways to employment.
          </p>
          <a href="/economicpower" class="learn-more">
            Learn more →
          </a>
        </div>
      </div>
    </div>
  </section>
  
  <style>
    .programs {
      padding: 6rem 2rem;
      background-color: #FFF7ED;
    }
  
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
  
    .program-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      align-items: start;
    }
  .program-section:nth-child(3) {
    align-items: center;
  }
    .content {
      max-width: 540px;
    }
  
    h2 {
      font-size: 2.3rem;
      color: #000;
      font-weight: 500;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }
  
    p {
      color: #666;
      line-height: 1.6;
      margin-bottom: 2rem;
    }
  
    .learn-more {
      color: #ff6b00;
      text-decoration: none;
      font-weight: 500;
    }
  
    .image-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  
    .image-grid img {
      width: 100%;
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 1rem;
      transform: rotate(-2deg);
      transition: transform 0.3s ease;
    }
  
    .image-grid img:nth-child(even) {
      transform: rotate(2deg);
    }
  
    .image-grid img:hover {
      transform: rotate(0);
    }
  
    @media (max-width: 968px) {
      .program-section {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
  
      .image-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }
  
      /* First section: text above images */
      .program-section:first-child .content {
        order: -1;
      }
  
      /* Second section: text above images */
      .program-section:last-child .content {
        order: -1;
      }
    }
  
    @media (max-width: 580px) {
      .programs {
        padding: 4rem 1.5rem;
      }
  
      h2 {
        font-size: 2rem;
      }
    }
  
    @media (max-width: 400px) {
      .image-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.75rem;
      }
    }
  </style>