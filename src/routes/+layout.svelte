<script>
	import './style.css';
  </script>
  <svelte:head>
    <meta name="description" content="christian horizons ethiopia" />
  </svelte:head>

  <slot/>

  <style>
    :global(*) {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
        'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 
        'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    }

    :global(body) {
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
    }
  </style>