<script>
  export let text = "button";
  export let color = "";
</script>

<button class="button {color}">{text}</button>

<style>
  .button {
    padding: 0.6rem 1.2rem;
    font-family: inherit;
    font-size: inherit;
    font-weight: 700;
    line-height: inherit;
    color: var(--color-teal-5);
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    background-color: var(--color-gray-2);
    transition-duration: 0.3s;
    -webkit-appearance: button;
    -webkit-tap-highlight-color: transparent;
  }

  .black {
    color: var(--color-teal-1);
    background-color: var(--color-gray-6);
  }

  .black:is(:hover, :focus) {
    color: var(--color-teal-6);
    background-color: var(--color-gray-1);
    border: thick solid var(--color-gray-6);
  }

  .blue {
    color: var(--color-teal-1);
    background-color: var(--color-azure-3);
  }

  .blue:is(:hover, :focus) {
    background-color: var(--color-azure-4);
  }

  .green {
    color: var(--color-teal-1);
    background-color: var(--color-green-3);
  }

  .green:is(:hover, :focus) {
    background-color: var(--color-green-4);
  }

  .red {
    color: var(--color-teal-1);
    background-color: var(--color-red-3);
  }

  .red:is(:hover, :focus) {
    background-color: var(--color-red-4);
  }
</style>
