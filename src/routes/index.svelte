<script>
  import Avatar from "$lib/Avatar.svelte";
  import Footer from "$lib/Footer.svelte";
  import Nav from "$lib/Nav.svelte";
  import Projects from "$lib/Projects.svelte";
</script>

<header>
  <Nav />
  <Avatar />
  <h1>Firas Hasnadong</h1>
  <p>
    Front end web developer based in Jakarta, here you can check out what I'm
    working on.
  </p>
</header>
<main>
  <h2>Latest work</h2>
  <Projects />
</main>
<Footer />

<style>
  header,
  main {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 6vw;
  }

  main,
  p {
    padding: 0 6vw;
  }

  main {
    margin-top: 6vw;
  }

  h1 {
    grid-area: 2/1;
    place-self: center;
    text-align: center;
    text-transform: uppercase;
  }

  h2 {
    position: absolute;
    top: auto;
    left: -10000px;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  p {
    font-size: var(--h5);
  }

  /* 640 */
  @media (min-width: 40em) {
  }

  /* 1280 */
  @media (min-width: 80em) {
    p {
      max-width: 80%;
      font-size: var(--h4);
    }
  }

  /* 1440 */
  @media (min-width: 90em) {
    p {
      font-size: var(--h3);
    }
  }

  /* 1920 */
  @media (min-width: 120em) {
    header,
    main {
      gap: 115px;
    }

    main,
    p {
      padding: 0 115px;
    }
  }
</style>
