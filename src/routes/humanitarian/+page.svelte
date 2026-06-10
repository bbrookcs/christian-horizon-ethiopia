<script>
	import Header from '../header.svelte';
	import Footer from '../footer.svelte';
</script>

<div class="humanitarian-page">
	<Header darkMode={true} />

	<section class="hero">
		<div class="container">
			<div class="content">
				<span class="tag">Humanitarian Relief</span>
				<h1>When Crisis Strikes, We Show Up</h1>
				<p>
					When disaster, drought, or conflict tears communities apart, the most vulnerable suffer
					most. HEDS delivers timely, principled, life-saving assistance to crisis-affected
					households, displaced persons, returnees, and host communities — meeting immediate needs
					while building pathways to lasting recovery.
				</p>
			</div>
			<div class="hero-image">
				<img src="/fi.jpeg" alt="HEDS field team working with community members" />
			</div>
		</div>
	</section>

	<section class="stats">
		<div class="container">
			<div class="stat-card">
				<h3>50,000+</h3>
				<p>Crisis-Affected People to be Reached by 2030</p>
			</div>
			<div class="stat-card">
				<h3>72hrs</h3>
				<p>Rapid Response Deployment Target</p>
			</div>
			<div class="stat-card">
				<h3>3</h3>
				<p>Phases of Response: Emergency, Recovery, Development</p>
			</div>
			<div class="stat-card">
				<h3>100%</h3>
				<p>Responses Integrating Protection Services</p>
			</div>
		</div>
		<p class="stats-source">All statistics sourced from HEDS 2026–2030 Five-Year Strategic Plan.</p>
	</section>

	<section class="our-approach">
		<div class="approach-inner">
			<h2>Our Humanitarian Approach</h2>
			<div class="approach-grid">
				<div class="approach-card">
					<div class="icon" aria-hidden="true"><i class="fas fa-bolt"></i></div>
					<h3>Rapid Emergency Response</h3>
					<p>
						We mobilize within 72 hours to deliver life-saving food, water, shelter, and non-food
						items to disaster-affected households — prioritizing the most vulnerable including
						persons with disabilities, women, children, and the elderly.
					</p>
				</div>
				<div class="approach-card">
					<div class="icon" aria-hidden="true"><i class="fas fa-shield-alt"></i></div>
					<h3>Protection-Centered Assistance</h3>
					<p>
						Protection is integrated into every response we deliver. We ensure that the dignity,
						safety, and rights of crisis-affected persons are upheld at all times — with special
						attention to children, women, and persons with disabilities.
					</p>
				</div>
				<div class="approach-card">
					<div class="icon" aria-hidden="true"><i class="fas fa-users"></i></div>
					<h3>Community-Led Recovery</h3>
					<p>
						Beyond emergency relief, we work alongside communities to restore livelihoods, rebuild
						social structures, and strengthen local resilience — ensuring that recovery is
						community-owned and sustainable.
					</p>
				</div>
				<div class="approach-card">
					<div class="icon" aria-hidden="true"><i class="fas fa-link"></i></div>
					<h3>Humanitarian-Development Nexus</h3>
					<p>
						We bridge the gap between emergency response and long-term development. Our nexus
						approach ensures that humanitarian assistance connects directly to livelihood,
						education, and inclusive development programs — leaving no one behind.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="initiatives">
		<div class="container">
			<h2>Who We Serve</h2>
			<div class="initiatives-grid">
				<div class="initiative-card">
					<img src="/camp1.jpg" alt="Disaster-affected community receiving support" />
					<div class="card-content">
						<h3>Disaster-Affected Households</h3>
						<p>
							Families impacted by drought, floods, and natural disasters receive emergency food
							assistance, clean water, and essential non-food items to survive and recover.
						</p>
					</div>
				</div>
				<div class="initiative-card">
					<img src="/camp3.jpg" alt="Support for internally displaced persons" />
					<div class="card-content">
						<h3>Internally Displaced Persons (IDPs)</h3>
						<p>
							We provide shelter support, protection services, and basic needs assistance to
							persons displaced by conflict or disaster — helping them stabilize and plan for safe
							return or resettlement.
						</p>
					</div>
				</div>
				<div class="initiative-card">
					<img src="/aboutiimg1.jpg" alt="Returnees and host communities consultation" />
					<div class="card-content">
						<h3>Returnees &amp; Host Communities</h3>
						<p>
							We support both returning displaced persons and the host communities that receive them
							— building social cohesion, restoring livelihoods, and reducing tensions through
							inclusive recovery programs.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="cta-section">
		<div class="cta-content">
			<h2>Help Us Reach the Unreached</h2>
			<p>
				In times of crisis, every hour matters. Your support enables HEDS to respond faster, reach
				further, and serve more crisis-affected communities across Ethiopia with dignity and
				compassion.
			</p>
			<div class="cta-buttons">
				<a href="/donate" class="btn-primary">Donate Now</a>
				<a href="/contact" class="btn-secondary">Contact Us</a>
			</div>
		</div>
	</section>

	<Footer />
</div>

<style>
	.humanitarian-page {
		background-color: white;
	}

	.hero {
		padding: 120px 2rem 4rem;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.hero .container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}

	.tag {
		display: inline-block;
		background-color: #dbeafe;
		color: #004197;
		padding: 0.5rem 1rem;
		border-radius: 50px;
		font-size: 1rem;
		margin-bottom: 1.5rem;
	}

	h1 {
		font-size: 3rem;
		color: #000;
		margin-bottom: 1.5rem;
		line-height: 1.2;
	}

	.hero p {
		font-size: 1.2rem;
		color: #666;
		line-height: 1.6;
	}

	.hero-image img {
		width: 100%;
		border-radius: 1rem;
	}

	.stats {
		padding: 4rem 2rem;
		background-color: #f8fafc;
	}

	.stats .container {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
	}

	.stat-card {
		text-align: center;
		padding: 2rem;
		background: white;
		border-radius: 1rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
	}

	.stat-card h3 {
		font-size: 2.5rem;
		color: #004197;
		margin-bottom: 0.5rem;
	}

	.stat-card p {
		color: #666;
		line-height: 1.45;
	}

	.stats-source {
		text-align: center;
		color: #64748b;
		font-size: 0.875rem;
		max-width: 720px;
		margin: 2rem auto 0;
		line-height: 1.5;
	}

	.our-approach {
		padding: 6rem 2rem;
		background-color: #f8f9fa;
	}

	.approach-inner {
		max-width: 1280px;
		margin: 0 auto;
	}

	.our-approach h2 {
		text-align: center;
		color: #004197;
		font-size: 2rem;
		margin-bottom: 3rem;
	}

	.approach-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.approach-card {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
		text-align: center;
		transition: transform 0.3s ease;
	}

	.approach-card:hover {
		transform: translateY(-5px);
	}

	.approach-card .icon {
		margin-bottom: 1rem;
	}

	.approach-card .icon i {
		font-size: 2.5rem;
		color: #004197;
	}

	.approach-card h3 {
		color: #004197;
		margin-bottom: 1rem;
	}

	.approach-card p {
		color: #666;
		line-height: 1.6;
		margin: 0;
	}

	.initiatives {
		padding: 4rem 2rem;
	}

	.initiatives h2 {
		text-align: center;
		font-size: 2.5rem;
		margin-bottom: 3rem;
		color: #004197;
		font-weight: 700;
		letter-spacing: -0.02em;
	}

	.initiatives-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}

	.initiative-card {
		background: white;
		border-radius: 1rem;
		overflow: hidden;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
		border: 1px solid rgba(0, 65, 151, 0.09);
		transition: transform 0.28s ease, box-shadow 0.28s ease;
	}

	.initiative-card:hover {
		transform: translateY(-6px);
		box-shadow: 0 14px 40px rgba(0, 65, 151, 0.13);
	}

	.initiative-card img {
		width: 100%;
		height: 200px;
		object-fit: cover;
		display: block;
	}

	.initiative-card .card-content {
		padding: 1.5rem;
	}

	.initiative-card h3 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
		color: #004197;
	}

	.initiative-card p {
		color: #4b5563;
		line-height: 1.65;
		margin-bottom: 0;
		font-size: 0.9375rem;
	}

	.cta-section {
		background-color: #004197;
		padding: 6rem 2rem;
		margin-top: 2rem;
	}

	.cta-content {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
		color: white;
	}

	.cta-content h2 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	.cta-content p {
		font-size: 1.2rem;
		margin-bottom: 2rem;
		opacity: 0.9;
		line-height: 1.6;
	}

	.cta-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.btn-primary {
		background: #fbbd23;
		color: #000;
		padding: 1rem 2rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
		transition: transform 0.3s ease;
	}

	.btn-secondary {
		background: transparent;
		color: white;
		padding: 1rem 2rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
		border: 2px solid white;
		transition: all 0.3s ease;
	}

	.btn-primary:hover,
	.btn-secondary:hover {
		transform: translateY(-2px);
	}

	@media (max-width: 968px) {
		.hero .container {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.stats .container {
			grid-template-columns: repeat(2, 1fr);
		}

		.initiatives-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.approach-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 580px) {
		.hero {
			padding: 100px 1rem 2rem;
		}

		h1 {
			font-size: 2rem;
		}

		.stats .container {
			grid-template-columns: 1fr;
		}

		.cta-buttons {
			flex-direction: column;
		}

		.cta-content h2 {
			font-size: 2rem;
		}
	}
</style>
