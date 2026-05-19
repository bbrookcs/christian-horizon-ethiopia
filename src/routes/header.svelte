 <script>
    import { onMount } from 'svelte';
    export let darkMode = false;

    let lastScrollY = 0;
    let isHeaderVisible = true;
    let isScrollingUp = false;
    let isMobileMenuOpen = false;

    // Existing dropdown states
    let isProgramsOpen = false;
    let isAboutUsOpen = false;
    let isMediaOpen = false;
    let isInvolvedOpen = false;

    function handleScroll() {
        const currentScrollY = window.scrollY;
        isScrollingUp = currentScrollY < lastScrollY;
        
        // Show header when scrolling up or at top of page
        if (isScrollingUp || currentScrollY === 0) {
            isHeaderVisible = true;
        } else {
            isHeaderVisible = false;
        }
        
        lastScrollY = currentScrollY;
    }

    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
        // Prevent body scroll when menu is open
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    onMount(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = 'auto';
        };
    });

    $: isScrolled = lastScrollY > 0;
</script>

<header class="header" 
        class:visible={isHeaderVisible} 
        class:scrolled={lastScrollY > 0}
        class:dark={darkMode}>
    <div class="container">
        <a href="/" class="logo">
            <img src="/logo1.png" alt="Christian Horizons Logo" class="logo-image" />
        </a>
        <!-- Hamburger Menu Button -->
        <button class="mobile-menu-btn" 
                on:click={toggleMobileMenu}
                class:scrolled={isScrolled}>
            <span class="hamburger" class:active={isMobileMenuOpen}>
                <span></span>
                <span></span>
                <span></span>
            </span>
        </button>
        <!-- Navigation Menu -->
        <nav class="nav" class:mobile-open={isMobileMenuOpen}>
            <a href="/" class="nav-item" class:scrolled={isScrolled}>Home</a>
            
            <!-- About Us Dropdown -->
            <div class="nav-item dropdown" class:scrolled={isScrolled} on:mouseenter={() => isAboutUsOpen = true} on:mouseleave={() => isAboutUsOpen = false}>
                <a href="/about" class:scrolled={isScrolled}><span>About Us</span></a>
                
            </div>
            <!-- Programs Dropdown -->
            <div class="nav-item dropdown" 
                 class:scrolled={isScrolled}
                 on:mouseenter={() => isProgramsOpen = true} 
                 on:mouseleave={() => isProgramsOpen = false}>
                <span class:scrolled={isScrolled}>Programs</span>
                <i class={`${isProgramsOpen ? "fas fa-angle-up" : "fas fa-angle-down"} ${isScrolled ? "scrolled" : ""}`}></i>
                {#if isProgramsOpen}
                    <div class="dropdown-menu">
                        <a href="/education" class="dropdown-item">Education</a>
                        <hr>
                        <a href="/disability" class="dropdown-item">Disability Support</a>
                        <hr>
                        <a href="/economicpower" class="dropdown-item">Livelihood</a>
                        <hr>
                        <a href="/humanitarian" class="dropdown-item">Humanitarian Relief</a>
                        <hr>
                        <a href="/youth" class="dropdown-item">Child & Youth</a>
                    </div>
                {/if}
            </div>
    
            <!-- Get Involved Dropdown -->
            <div class="nav-item dropdown" 
                 class:scrolled={isScrolled}
                 on:mouseenter={() => isInvolvedOpen = true} 
                 on:mouseleave={() => isInvolvedOpen = false}>
                <span class:scrolled={isScrolled}>IGAs</span>
                <i class={`${isInvolvedOpen ? "fas fa-angle-up" : "fas fa-angle-down"} ${isScrolled ? "scrolled" : ""}`}></i>
                {#if isInvolvedOpen}
                    <div class="dropdown-menu">
                        <a href="/horizonschool" class="dropdown-item">Horizons Academy</a>
                      </div>
                {/if}
            </div>
    
            <!-- Media & Resources Dropdown -->
            <div class="nav-item dropdown" 
                 class:scrolled={isScrolled}
                 on:mouseenter={() => isMediaOpen = true} 
                 on:mouseleave={() => isMediaOpen = false}>
                <span class:scrolled={isScrolled}>News & Media</span>
                <i class={`${isMediaOpen ? "fas fa-angle-up" : "fas fa-angle-down"} ${isScrolled ? "scrolled" : ""}`}></i>
                {#if isMediaOpen}
                    <div class="dropdown-menu">
                        <a href="/blog" class="dropdown-item">News/Blogs</a>
                        <hr>
                        <a href="/blog" class="dropdown-item">Media</a>
                        <hr>
                        <a href="/document" class="dropdown-item">Documents</a>
                    </div>
                {/if}
            </div>
    
            <a href="/contact" class="nav-item" class:scrolled={isScrolled}>Contact Us</a>
            <a href="/login" class="btn-login mobile-login" class:scrolled={isScrolled}>Login</a>
            <a href="/donate" class="btn-donate mobile-donate">Donate Now</a>
        </nav>
    
        <!-- Login and Donate Buttons -->
        <div class="header-buttons">
            <a href="/login" class="btn-login desktop-login" class:scrolled={isScrolled}>Login</a>
            <a href="/donate" class="btn-donate desktop-donate">Donate Now</a>
        </div>
    </div>
</header>

<style>
.header {
    padding: 0.5rem 2rem;
    box-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    backdrop-filter: blur(13px);
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    transform: translateY(-100%);
    transition: transform 0.3s ease;
    z-index: 1000; /* High z-index to ensure it overlays other elements */
}
/* Dropdown menu - Ensure proper alignment and stacking */

.header.visible {
    transform: translateY(0);
}

.header.scrolled {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    background: rgba(255, 255, 255, 0.844);
}
    .container {
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
  
    /* Logo */
    .logo-image {
        height: 60px;
    }
    /* Navigation Menu */
    .nav {
        display: flex;
        align-items: center;
        height: 100%;
        gap: 2rem;
    }
  
    .nav-item {
        color: white;
        text-decoration: none;
        font-weight: 500;
        font-size: 1.1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 65px;
        position: relative;
        cursor: pointer;
        transition: color 0.3s ease; /* Add smooth transition */
    }
    .nav-item a{
        text-decoration: none;
        color: white;
    }
  /* Style for dropdown icons */
.nav-item i {
    margin-left: 0.5rem; /* Space between text and icon */
    font-size: 0.9rem; /* Adjust size */
    transition: transform 0.2s ease-in-out;
    animation: .3s;
}

.nav-item:hover i {
    transform: rotate(0deg); /* Reset transform */
}

    /* Dropdown menu */
    /* Dropdown menu - Show under the header */
/* Dropdown menu - adjust position under the header */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  text-align: start;
  background-color: white; /* Removed opacity effect */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 0;
  z-index: 1000;
}

.dropdown-item {
  padding: 1rem;
  color: #00093e;
  text-decoration: none;
  width: 100%;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #eeeeee;
  padding: 1rem;
}

.dropdown-menu hr {
  width: 100%;
  border: 1px solid #f6f6f6;
  margin: 0;
}


/* Hover effects for nav items */
.nav-item:hover {
   
}

.nav-item i {
    transition: transform 0.3s ease;
}

.dropdown:hover i {
    transform: rotate(180deg);
}

   /* Header buttons container */
.header-buttons {
    display: flex;
    align-items: center;
    gap: 1rem;
}

/* Login Button */
.btn-login {
    background: transparent;
    color: white;
    padding: 0.6rem 2rem;
    text-decoration: none;
    border-radius: 10px;
    font-weight: 600;
    border: 2px solid white;
    transition: all 0.3s ease;
    cursor: pointer;
}

.btn-login:hover {
    background-color: white;
    color: #000;
    transition: all 0.3s ease;
}

.btn-login.scrolled {
    border-color: #000;
    color: #000;
}

.btn-login.scrolled:hover {
    background-color: #000;
    color: white;
}

   /* Gradient Donate Button with logo colors */
.btn-donate {
    background: #fbbd23; /* Blue to Orange gradient */
    color: black;
    padding: 0.8rem 2rem;
    text-decoration: none;
    border-radius: 10px;
    font-weight: 600;
    border: none;
    transition: all 0.3s ease;
    cursor: pointer;
}

/* Hover Effect - reverse gradient */
.btn-donate:hover {
    transition: all 0.3s ease;
    background-color: #ffcb48;
}
.mobile-menu-btn {
    display: none;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    cursor: pointer;
    padding: 10px;
    z-index: 1001;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
}

.mobile-menu-btn.scrolled {
    background: rgba(255, 255, 255, 0.844);
}

.hamburger {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 30px;
}

.hamburger span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: white;
    transition: all 0.3s ease;
}
.hamburger.active span {
    background-color: #000; /* Changes to black when menu is open */
}

.hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(7px, 7px);
}

.hamburger.active span:nth-child(2) {
    opacity: 0;
}

.hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
}

.mobile-login {
    display: none;
}

.mobile-donate {
    display: none;
}
@media (max-width: 1124px){
    .nav{
        gap: 1rem;
    }
    .nav-item {
        font-size: .9rem;
    }
  /* Style for dropdown icons */
.nav-item i {
    margin-left: 0.5rem; /* Space between text and icon */
    font-size: 0.9rem; /* Adjust size */
    transition: transform 0.2s ease-in-out;
    animation: .3s;
}
}
@media (max-width: 950px) {
    .container {
        position: relative;
        justify-content: flex-start;
        padding: 0 1rem;
        padding-right: calc(1rem + 56px);
    }

    .header-buttons {
        display: none;
    }

    .mobile-menu-btn {
        display: block;
        position: absolute;
        top: calc(50% - 25px);
        right: 1rem;
        margin: 0;
    }

    .logo {
        flex-shrink: 0;
    }

    .desktop-login {
        display: none;
    }
    
    .desktop-donate {
        display: none;
    }
    
    .mobile-login {
        display: block;
        margin-top: 1rem;
        width: 100%;
        text-align: center;
        border-color: #00093e;
        color: #00093e;
    }
    
    .mobile-login:hover {
        background-color: #00093e;
        color: white;
    }
    
    .mobile-donate {
        display: block;
        margin-top: 1rem;
        width: 100%;
        text-align: center;
    }
   
    .nav {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        right: 0;
        bottom: 0;
        background-color: white;
        flex-direction: column;
        padding: 80px 2rem 2rem;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
        z-index: 99;
        overflow-y: auto;
    }

    .nav.mobile-open {
        transform: translateX(0);
    }

    .nav-item,
    .nav-item span,
    .nav-item a,
    .nav-item i {
        color: #000 !important;
    }

    .nav-item {
        color: #00093e;
        padding: 1rem 0;
        width: 100%;
        font-size: 1rem;
        text-align: left;
        border-bottom: 1px solid #dfdfdf;
    }

    .dropdown {
        width: 100%;
    }

    .nav-item span,
    .nav-item a {
        color: #00093e !important;
    }

    .nav-item i {
        color: #00093e !important;
    }

    .logo-image {
        height: 40px; /* Smaller logo for mobile */
    }
    .dropdown-menu {
    position: absolute; /* Ensure it's correctly positioned relative to the dropdown */
    top: 0;
    left: 0;
    z-index: 10;
    background-color: white;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    width: 100%; /* Ensure the dropdown fills the available space */
    display: flex;
    flex-direction: column;
  }

  .dropdown-item {
    width: 100%; /* Ensure it takes full width on mobile */
  }
}

.nav-item.scrolled,
.nav-item.scrolled a {
    color: #000; /* Change to black when scrolled */
}

.nav-item a {
    text-decoration: none;
    color: white;
    transition: color 0.3s ease; /* Add smooth transition */
}

/* Update dropdown menu text color when scrolled */
.dropdown-menu .dropdown-item {
    color: #00093e;
}

.nav-item span {
    color: white;
    transition: color 0.3s ease;
}

.nav-item span.scrolled {
    color: #000;
}

.nav-item.scrolled span,
.nav-item.scrolled a,
.nav-item.scrolled i {
    color: #000;
}

.nav-item span {
    color: white;
    transition: color 0.3s ease;
}

.nav-item i {
    color: white;
    transition: color 0.3s ease;
}

.nav-item i.scrolled {
    color: #000;
}

.nav-item.scrolled span {
    color: #000 !important;
}

.nav-item.scrolled i {
    color: #000 !important;
}

.dropdown span {
    color: white;
    transition: color 0.3s ease;
}

.dropdown.scrolled span {
    color: #000;
}

/* Style for dropdown icons */
.nav-item i {
    margin-left: 0.5rem;
    font-size: 0.9rem;
    transition: all 0.2s ease-in-out;
}

.hamburger span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: white;
    transition: all 0.3s ease;
}

.hamburger.active span,
.header.scrolled .hamburger span {
    background-color: #000;
}

.header.dark .nav-item,
.header.dark .nav-item span,
.header.dark .nav-item a,
.header.dark .nav-item i {
    color: #000000;
}

.header.dark .hamburger span {
    background-color: #000;
}

</style>
  