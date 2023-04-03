<script lang="ts">
	import '../assets/styles/global.styl';
	import Footer from '../components/footer/Footer.svelte';
	import Header from '../components/header/Header.svelte';
	let title = 'Bienvenue';
</script>

<Header {title} />
<slot />
<Footer />
