<ul role="list">
  <li>
    <a href="https://vaselinecoveredcat.github.io/untitled-project-2/">
      <picture>
        <source
          media="(min-width: 1920px)"
          srcset="https://toytoytot.imgix.net/https%3A%2F%2Fi.imgur.com%2Fze75vHw.jpg?auto=format&w=1920&fit=crop&s=6a3b8acc8a07895ce17d41ad926567df"
        />
        <source
          media="(min-width: 1600px)"
          srcset="https://toytoytot.imgix.net/https%3A%2F%2Fi.imgur.com%2Fze75vHw.jpg?auto=format&w=1600&fit=crop&s=c20829fbc97031384ca11874b7b42ea3"
        />
        <source
          media="(min-width: 1280px)"
          srcset="https://toytoytot.imgix.net/https%3A%2F%2Fi.imgur.com%2Fze75vHw.jpg?auto=format&w=1280&fit=crop&s=be06f856619c097aa57b6ccc30a67feb"
        />
        <source
          media="(min-width: 960px)"
          srcset="https://toytoytot.imgix.net/https%3A%2F%2Fi.imgur.com%2Fze75vHw.jpg?auto=format&w=960&fit=crop&s=2de104fefc8be5c4571a7d57c38f03d4"
        />
        <source
          media="(min-width: 640px)"
          srcset="https://toytoytot.imgix.net/https%3A%2F%2Fi.imgur.com%2Fze75vHw.jpg?auto=format&w=640&fit=crop&s=855389859eb0e04cd94f171e540d88e4"
        />
        <img
          src="https://toytoytot.imgix.net/https%3A%2F%2Fi.imgur.com%2Fze75vHw.jpg?auto=format&w=300&fit=crop&s=0a87578c90745a9bb0b788d3c8161451"
          alt="Untitled project 2"
          loading="lazy"
          encoding="async"
        />
      </picture>
    </a>
  </li>

  <li>
    <a href="https://vaselinecoveredcat.github.io/untitled-project-1/">
      <picture>
        <source
          media="(min-width: 1920px)"
          srcset="https://toytoytot.imgix.net/https%3A%2F%2Fi.imgur.com%2FVNPA9rB.jpg?auto=format&w=1920&fit=crop&s=8e8617ac800249b75f8d7541e107220c"
        />
        <source
          media="(min-width: 1600px)"
          srcset="https://toytoytot.imgix.net/https%3A%2F%2Fi.imgur.com%2FVNPA9rB.jpg?auto=format&w=1600&fit=crop&s=726da95be70a8b139b07e815fc57da10"
        />
        <source
          media="(min-width: 1280px)"
          srcset="https://toytoytot.imgix.net/https%3A%2F%2Fi.imgur.com%2FVNPA9rB.jpg?auto=format&w=1280&fit=crop&s=491c4336bde19b0b73de1ad5587cadbf"
        />
        <source
          media="(min-width: 960px)"
          srcset="https://toytoytot.imgix.net/https%3A%2F%2Fi.imgur.com%2FVNPA9rB.jpg?auto=format&w=960&fit=crop&s=79475ee927cd6c2b20464d0512f69128"
        />
        <source
          media="(min-width: 640px)"
          srcset="https://toytoytot.imgix.net/https%3A%2F%2Fi.imgur.com%2FVNPA9rB.jpg?auto=format&w=640&fit=crop&s=30436054123ebb90a8a667d736b8785c"
        />
        <img
          src="https://toytoytot.imgix.net/https%3A%2F%2Fi.imgur.com%2FVNPA9rB.jpg?auto=format&w=300&fit=crop&s=2f6d85b6aa3869cb1ce393a43440b6a9"
          alt="Untitled project 1"
          loading="lazy"
          encoding="async"
        />
      </picture>
    </a>
  </li>
</ul>

<style>
  ul {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 6vw;
  }

  li {
    overflow: hidden;
  }

  img {
    aspect-ratio: 1/1;
    object-position: top;
    transition: all 5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  img:hover {
    object-position: bottom;
  }

  @media (prefers-reduced-motion: reduce) {
    img {
      transition: none;
    }
  }

  /* 640 */
  @media (min-width: 40em) {
    img {
      aspect-ratio: 21/9;
    }
  }
</style>
