<script>
    import Header from '../header.svelte';
    import Hero from './hero.svelte';
    import OurMission from './ourmission.svelte';  
    import WhatWeDo from './whatwedo.svelte';
    import Values from './values.svelte';
    import Section from './section.svelte';
    import Footer from '../footer.svelte';
</script>

<div class="about-page">
    <Header darkMode={true} />
    <Hero />
    <OurMission />  
    <WhatWeDo />
    <Values />
    <Section />
    <Footer />
</div>

<style>
    .about-page {
        background-color: white;
    }
</style>
