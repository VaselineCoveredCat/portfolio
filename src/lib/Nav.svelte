<nav>
  <ul role="list">
    <li>
      <a href="https://www.instagram.com/accounts/login/">
        <span>Instagram</span>
      </a>
    </li>

    <li>
      <a href="https://www.tiktok.com/login/">
        <span>TikTok</span>
      </a>
    </li>

    <li>
      <a href="https://github.com/VaselineCoveredCat">
        <span>GitHub</span>
      </a>
    </li>
  </ul>
</nav>

<style>
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 6vw;
    justify-content: end;
    padding: 6vw;
  }

  a {
    position: relative;
  }

  a::before,
  a::after {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 2px;
    pointer-events: none;
    background-color: var(--gray-3);
  }

  a::before {
    height: 2px;
    content: "";
    opacity: 0;
  }

  a:hover::before {
    opacity: 1;
    animation: animate2 0.5s steps(2, start) forwards;
  }

  a:hover span {
    animation: animate1 0.5s linear;
  }

  @keyframes animate1 {
    0% {
      -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
      clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
      opacity: 1;
      transform: translate3d(-10px, 0, 0) scale3d(-1, -1, 1);
    }

    10% {
      -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
      clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
    }

    20% {
      -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
      clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
    }

    35% {
      -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
      clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
    }

    50% {
      -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
      clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
    }

    60% {
      -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
      clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
    }

    70% {
      -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
      clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
    }

    80% {
      -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
      clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
    }

    90% {
      transform: translate3d(-10px, 0, 0) scale3d(-1, -1, 1);
    }

    100% {
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      opacity: 1;
      transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
    }
  }

  @keyframes animate2 {
    0% {
      transform: scale3d(1, 1, 1);
    }

    10% {
      transform: translate3d(10px, 0, 0);
    }

    20% {
      transform: translate3d(0, 4px, 0);
    }

    30% {
      transform: scale3d(0.1, 1.4, 1) translate3d(0, -25px, 0);
      transform-origin: 100% 0%;
    }

    40% {
      transform: scale3d(1, 0.3, 1) translate3d(0, 25px, 0);
    }

    50% {
      transform: scale3d(0.5, 0.3, 1) translate3d(-100px, -80px, 0);
    }

    60% {
      transform: scale3d(1, 1.25, 1) translate3d(10px, -5px, 0);
    }

    70% {
      transform: scale3d(0.5, 0.5, 1) translate3d(0, 20px, 0);
    }

    80% {
      transform: translate3d(-30, 10px, 0) scale3d(1, 0.4, 1);
      transform-origin: 100% 0%;
    }

    90% {
      transform: scale3d(1, 0.5, 1) translate3d(0, -15px, 0);
      transform-origin: 0% 50%;
    }

    100% {
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    a:hover::before {
      opacity: 1;
      animation: none;
    }

    a:hover span {
      animation: none;
    }
  }

  /* 640 */
  @media (min-width: 40em) {
  }

  /* 960 */
  @media (min-width: 60em) {
    ul {
      padding: 2vw 6vw;
    }
  }

  /* 1280 */
  @media (min-width: 80em) {
    a {
      font-size: var(--small);
    }
  }

  /* 1920 */
  @media (min-width: 120em) {
    ul {
      gap: 115px;
      padding: 39px 115px;
    }
  }
</style>
