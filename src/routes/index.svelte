<script>
  import Navbar from "$lib/Nav.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<header>
  <Navbar />

  <!-- dont forget to upload a photo -->
  <picture aria-hidden="true">
    <img
      src="https://images.unsplash.com/photo-1559794689-c4f815791a80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3VUVpN0g5LVhFNHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=640&q=60"
      alt=""
      encoding="async"
    />
  </picture>

  <h1>Firas Hasnadong</h1>

  <p>
    Front end web developer based in Jakarta, here you can check out what I'm
    working on.
  </p>
</header>

<Footer />

<style>
  header {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr) auto;
    gap: 6vw;
  }

  picture {
    width: 70%;
    place-self: center;
    grid-area: 2/1;
  }

  img {
    aspect-ratio: 2/3;
  }

  h1 {
    grid-area: 2/1;
    place-self: center;
    text-align: center;
    text-transform: uppercase;
  }

  p {
    padding: 0 6vw;
    font-size: var(--h5);
  }

  /* 640 */
  @media (min-width: 40em) {
    header {
      gap: 4vw;
    }

    picture {
      width: 50%;
    }

    p {
      padding: 0 4vw;
    }
  }

  /* 1280 */
  @media (min-width: 80em) {
    picture {
      width: 30%;
    }

    p {
      font-size: var(--h3);
      max-width: 80%;
    }
  }

  /* 1920 */
  @media (min-width: 120em) {
    header {
      gap: 77px;
    }

    p {
      padding: 0 77px;
    }
  }
</style>
