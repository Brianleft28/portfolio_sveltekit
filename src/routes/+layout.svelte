<script lang="ts">
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import ScrollToTop from '$lib/utils/ScrollToTop.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="mb-[81px] md:mb-[100px]">
	<Navbar />
</div>
<main class=" flex px-4 md:px-16 flex-col text-base-content">
	{@render children()}
</main>

<ScrollToTop />
