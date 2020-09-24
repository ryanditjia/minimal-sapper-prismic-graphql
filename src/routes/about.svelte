<script context="module">
	import {PrismicLink} from 'apollo-link-prismic'
	import {InMemoryCache} from 'apollo-cache-inmemory'
	import ApolloClient from 'apollo-client'
	import gql from 'graphql-tag'

	const query = gql`
		{
			allHomepages(lang: "en-gb") {
				edges {
					node {
						tagline
					}
				}
			}
		}
	`

	export async function preload(page, session) {
		const client = new ApolloClient({
			link: PrismicLink({
				uri: 'https://fairphonic.prismic.io/graphql'
			}),
			cache: new InMemoryCache(),
			fetch: this.fetch
		})
		const results = await client.query({ query })

		return { data: results };
	}
</script>

<script>
	export let data
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<pre>{JSON.stringify(data, null, 2)}</pre>

<h1>About hellio site</h1>

<p>This is the 'about' page. There's not much here.</p>
