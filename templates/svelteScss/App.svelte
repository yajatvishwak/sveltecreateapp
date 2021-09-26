<script>
  // Created using SVC
  // To run,
  // npm install && npm run dev (yarn friendly too)
  // good to go captain 🚀
  export let name;
</script>

<main>
  <h1>Hello {name}!</h1>
  <h3>this is <span>Svelte</span> with <span> SCSS</span></h3>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>

<style type="scss">
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;

    h1 {
      color: #ff3e00;
      text-transform: uppercase;
      font-size: 4em;
      font-weight: 100;
    }
    h3 {
      color: darkolivegreen;
      text-transform: uppercase;
      font-size: 2em;
      font-weight: 300;
      span {
        font-weight: bold;
        color: aquamarine;
      }
    }
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
