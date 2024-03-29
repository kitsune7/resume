import { html } from 'https://unpkg.com/hybrids@^6'

export const resumeStyles = html`
  <style>
    @media only screen {
      .resume {
        box-shadow: rgba(60, 64, 67, 0.15) 0 1px 3px 1px;
        margin: 32px auto;
      }
    }

    .resume {
      --border-size: var(--layout-2);
      --padding: 38px;
      background-color: white;
      border-top: var(--border-size) solid var(--color-highlight);
      display: grid;
      grid-template-areas: 'header header' 'article main';
      grid-template-rows: auto 1fr;
      grid-template-columns: 1fr 2fr;
      padding: var(--padding);
      padding-top: calc(var(--padding) - var(--border-size));
      height: 11in;
      width: 8.5in;
    }

    header {
      padding-bottom: var(--layout-2);
      border-bottom: thick solid var(--color-border);
      grid-area: header;
    }

    article,
    main,
    section {
      --padding: var(--layout-2);
    }

    article {
      grid-area: article;
      border-right: thin solid var(--color-border);
      padding: var(--padding) var(--padding) 0 0;
    }

    main {
      grid-area: main;
      padding: var(--padding) 0 0 var(--padding);
    }

    section:not(:last-of-type) {
      margin-bottom: 20px;
    }

    ion-icon {
      font-size: 1.2em;
      margin-right: var(--spacing-3);
    }

    .iconList li,
    .iconText {
      align-items: center;
      display: flex;
      line-height: 2em;
    }

    .iconList li:first-of-type,
    .iconText:first-of-type {
      margin-top: calc(-1 * var(--spacing-2));
    }

    ul.list {
      list-style-type: disc;
      margin-left: var(--spacing-5);
      margin-top: var(--spacing-2);
    }
  </style>
`
