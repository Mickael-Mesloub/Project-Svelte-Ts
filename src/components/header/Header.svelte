<script lang="ts">
	import Navbar from '../nav/Navbar.svelte';
	export let title = '';
</script>

<header>
	<h1>{title}</h1>
</header>
<Navbar />

<style lang="stylus">

    header 
        display: flex
        justify-content: center
        align-items: center
        min-height: 150px 
        background: var(--dark-purple)

        h1 
            color: var(--beige)
</style>
