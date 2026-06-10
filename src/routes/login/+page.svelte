<script>
  import { enhance } from '$app/forms';
  import Icon from '../../lib/components/Icon.svelte';

  export let form;

  let showPassword = false;
  let isLoading = false;

  $: errorMessage = form?.error ?? '';

  function togglePasswordVisibility() {
    showPassword = !showPassword;
  }
</script>

<svelte:head>
  <title>Login | Horizons Ethiopia Development Services</title>
</svelte:head>

<div class="login-container">
  <!-- Background Animation -->
  <div class="bg-animation">
    <div class="glow-shape glow-1"></div>
    <div class="glow-shape glow-2"></div>
    <div class="glow-shape glow-3"></div>
    <div class="glow-shape glow-4"></div>
    <div class="glow-shape glow-5"></div>
  </div>

  <!-- Company Name Outside Login Box -->
  <div class="company-name">
   
    <div class="company-text">
      <h1 class="company-main">Horizons Ethiopia</h1>
      <p class="company-subtitle">Development Services</p>
    </div>
  </div>

  <div class="login-wrapper">
    <div class="login-form">
      <div class="form-header">
        <h2>Sign In</h2>
        <p>Enter your credentials to access your account</p>
      </div>

      {#if errorMessage}
        <div class="error-message" role="alert">
          <Icon name="x" size={18} />
          <span>{errorMessage}</span>
        </div>
      {/if}

      <form method="POST" use:enhance={() => { isLoading = true; return async ({ update }) => { isLoading = false; await update(); }; }}>
        <div class="form-group">
          <label for="email">
            <Icon name="users" size={16} color="#004197" />
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Enter your username or email"
            required
            autocomplete="username"
            aria-label="Email address"
          />
        </div>

        <div class="form-group">
          <label for="password">
            <Icon name="settings" size={16} color="#004197" />
            Password
          </label>
          <div class="password-input-wrapper">
            {#if showPassword}
              <input
                id="password"
                name="password"
                type="text"
                placeholder="Enter your password"
                required
                autocomplete="current-password"
                aria-label="Password"
              />
            {:else}
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
                autocomplete="current-password"
                aria-label="Password"
              />
            {/if}
            <button
              type="button"
              class="password-toggle"
              on:click={togglePasswordVisibility}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              <Icon name={showPassword ? 'eyeOff' : 'eye'} size={18} color="#6B7280" />
            </button>
          </div>
        </div>

        <div class="form-options">
          <label class="checkbox-label">
            <input type="checkbox" name="rememberMe" />
            <span>Remember me</span>
          </label>
        </div>

        <button type="submit" class="btn-login" disabled={isLoading}>
          {#if isLoading}
            <span class="spinner"></span>
            Signing in...
          {:else}
            Sign In
          {/if}
        </button>
      </form>

      <div class="form-footer">
        <p>Need help? <a href="/contact">Contact Support</a></p>
      </div>
    </div>
  </div>
</div>

<style>
  :root {
    --primary-blue: #004197;
    --deep-navy: #00093e;
    --golden-yellow: #fbbd23;
    --text-main: #00093e;
    --text-secondary: #4B5563;
  }

  * {
    box-sizing: border-box;
  }

  .login-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgb(241, 241, 241);
    padding: 2rem;
    font-family: 'Inter', sans-serif;
    position: relative;
    overflow: hidden;
  }

  /* Background Animation */
  .bg-animation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
  }

  .glow-shape {
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.4;
    animation: float 20s ease-in-out infinite;
  }

  .glow-1 {
    top: -200px;
    left: -200px;
    background: radial-gradient(circle, rgba(0, 65, 151, 0.6) 0%, rgba(0, 9, 62, 0.3) 50%, transparent 100%);
    animation-delay: 0s;
  }
  
  .glow-2 {
    top: -200px;
    right: -200px;
    background: radial-gradient(circle, rgba(251, 189, 35, 0.5) 0%, rgba(255, 203, 72, 0.3) 50%, transparent 100%);
    animation-delay: 5s;
  }
  .glow-3 {
    bottom: -200px;
    left: -200px;
    background: radial-gradient(circle, rgba(0, 9, 62, 0.5) 0%, rgba(0, 65, 151, 0.3) 50%, transparent 100%);
    animation-delay: 10s;
  }

  .glow-4 {
    bottom: -200px;
    right: -200px;
    background: radial-gradient(circle, rgba(251, 189, 35, 0.4) 0%, rgba(255, 203, 72, 0.2) 50%, transparent 100%);
    animation-delay: 15s;
  }

  @keyframes float {
    0%, 100% {
      transform: translate(0, 0) scale(1);
      opacity: 0.4;
    }
    25% {
      transform: translate(30px, -30px) scale(1.1);
      opacity: 0.6;
    }
    50% {
      transform: translate(-20px, 20px) scale(0.9);
      opacity: 0.5;
    }
    75% {
      transform: translate(20px, 30px) scale(1.05);
      opacity: 0.55;
    }
  }

  /* Company Name Outside Login Box */
  .company-name {
    position: relative;
    z-index: 1;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .company-logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo-icon {
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, #FFF7ED 0%, #FFE4B5 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid var(--golden-yellow);
    box-shadow: 0 4px 12px rgba(251, 189, 35, 0.2);
  }

  .company-text {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .company-main {
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--deep-navy);
    margin: 0;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

  .company-subtitle {
    font-size: 1rem;
    font-weight: 500;
    color: var(--text-secondary);
    margin: 0;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    opacity: 0.8;
  }

  .login-wrapper {
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 1;
  }

  .login-form {
    width: 100%;
    background: white;
    padding: 3rem 2.5rem;
    border-radius: 16px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: 1px solid #E5E7EB;
    backdrop-filter: blur(10px);
  }

  .form-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .form-header h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--deep-navy);
    margin: 0 0 0.5rem 0;
  }

  .form-header p {
    font-size: 0.95rem;
    color: var(--text-secondary);
    margin: 0;
  }

  .error-message {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background: #FEF2F2;
    border: 1px solid #FEE2E2;
    border-radius: 8px;
    color: #DC2626;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-group label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--deep-navy);
    margin-bottom: 0.5rem;
  }

  .form-group input {
    width: 100%;
    padding: 0.875rem 1rem;
    border: 2px solid #E5E7EB;
    border-radius: 10px;
    font-size: 1rem;
    color: var(--deep-navy);
    transition: all 0.2s;
    outline: none;
    font-family: inherit;
    background: white;
  }

  .form-group input:focus {
    border-color: var(--primary-blue);
    box-shadow: 0 0 0 3px rgba(0, 65, 151, 0.1);
  }

  .form-group input::placeholder {
    color: #9CA3AF;
  }

  .password-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .password-input-wrapper input {
    padding-right: 3rem;
  }

  .password-toggle {
    position: absolute;
    right: 1rem;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    transition: opacity 0.2s;
  }

  .password-toggle:hover {
    opacity: 0.7;
  }

  .form-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    font-size: 0.9rem;
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    color: var(--text-secondary);
  }

  .checkbox-label input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
    accent-color: var(--primary-blue);
  }

  .forgot-link {
    color: var(--primary-blue);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
  }

  .forgot-link:hover {
    color: var(--deep-navy);
    text-decoration: underline;
  }

  .btn-login {
    width: 100%;
    padding: 1rem;
    background: var(--golden-yellow);
    color: var(--deep-navy);
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    box-shadow: 0 2px 4px rgba(251, 189, 35, 0.3);
  }

  .btn-login:hover:not(:disabled) {
    background: #ffcb48;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(251, 189, 35, 0.4);
  }

  .btn-login:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .spinner {
    width: 18px;
    height: 18px;
    border: 2px solid rgba(0, 9, 62, 0.3);
    border-top-color: var(--deep-navy);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .form-footer {
    margin-top: 2rem;
    text-align: center;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }

  .form-footer a {
    color: var(--primary-blue);
    text-decoration: none;
    font-weight: 500;
  }

  .form-footer a:hover {
    text-decoration: underline;
  }

  /* Responsive */
  @media (max-width: 640px) {
    .login-container {
      padding: 1rem;
    }

    .login-form {
      padding: 2rem 1.5rem;
      border-radius: 12px;
    }

    .company-main {
      font-size: 1.5rem;
    }

    .company-subtitle {
      font-size: 0.85rem;
    }

    .logo-icon {
      width: 56px;
      height: 56px;
    }

    .logo-icon svg {
      width: 28px;
      height: 28px;
    }

    .form-header h2 {
      font-size: 1.25rem;
    }
  }
</style>
