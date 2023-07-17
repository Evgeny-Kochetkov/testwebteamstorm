import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

	.activeLink {
		text-decoration: underline;
	}

	.activeDot { 
		height: 30px;
		width: 30px;
		background: red;
	}

	body {
		position: fixed;
		width: calc(100vw - (100vw - 100%));
		height: calc(100vh - (100vh - 100%));
		scroll-behavior: smooth;
		text-rendering: optimizeSpeed;
		font-family: Philosopher, sans-serif;
		font-size: 1vmax;
		font-weight: 700;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #FFF;
		letter-spacing: 0.1px;
		overflow: hidden;
		transition: background-color 500ms ease-in-out;
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	ol,
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	body,
	h1,
	h2,
	h3,
	h4,
	p,
	ul[class],
	ol[class],
	li,
	figure,
	figcaption,
	blockquote,
	dl,
	dd {
		margin: 0;
	}

	a {
		cursor: pointer;
		text-decoration: none;
		color: inherit;
	}

	a:not([class]) {
		text-decoration-skip-ink: auto;
	}

	img {
		max-width: 100%;
		display: block;
	}

	article>*+* {
		margin-top: 1em;
	}

	input,
	button,
	textarea,
	select {
		border: none;
		outline: none;
		padding: 0;
		font: inherit;
	}

	button {
		cursor: pointer;
		background: none;
	}
`