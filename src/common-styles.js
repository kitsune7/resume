import { html } from 'https://unpkg.com/hybrids@^6'

export const commonStyles = html`
  <style>
    :host {
      display: block;
    }
    :host[hidden] {
      display: none;
    }
  </style>
`
