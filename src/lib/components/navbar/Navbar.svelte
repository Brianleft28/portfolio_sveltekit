<script lang="ts">
	import ThemeController from '$lib/components/navbar/ThemeController.svelte';
	import LangController from '$lib/components/navbar/LangController.svelte';
	import RedesSociales from '$lib/components/navbar/RedesSociales.svelte';
	import Logo from '$lib/components/navbar/Logo.svelte';
	import menuItems from '$lib/components/navbar/menuItems.json';
	import { lang, showNavbar } from '$lib/stores/index';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	const items = Object.values(menuItems.menuItems);

	const currentLang = $lang;

	onMount(() => {
		if (browser) {
			window.addEventListener('scroll', () => {
				const threshold = document.body.scrollHeight * 0.08;
				showNavbar.set(window.scrollY < threshold);
			});
		}
	});
</script>

<navbar
	class="navbar font-[sans-serif] px-4 md:px-10 py-4 fixed top-0 bg-base-100/80 backdrop-blur-xs shadow-sm transition-transform duration-300 ease-in-out z-50"
	class:translate-y-0={$showNavbar}
	class:-translate-y-full={!$showNavbar}
>
	<div class="navbar-start hidden lg:flex items-center gap-4">
		<ul class="menu menu-horizontal font-[sans-serif] px-1 text-md">
			{#each items as item}
				<li>
					<a
						href={item[$lang].url}
						class="text-base-content hover:text-primary transition-colors duration-200"
						aria-label={item[$lang].title}
						class:text-primary={page.url.pathname === item[$lang].url}
						class:font-bold={page.url.pathname === item[$lang].url}
					>
						{item[$lang].title}
					</a>
				</li>
			{/each}
		</ul>
	</div>
	<div class="navbar-center">
		<Logo />
	</div>

	<div class="navbar-end flex items-center gap-4">
		<div class="dropdown dropdown-end">
			<ThemeController />
		</div>
		<div class="dropdown dropdown-end">
			<LangController />
		</div>
		<RedesSociales />
	</div>
</navbar>
