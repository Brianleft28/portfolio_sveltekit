<script context="module">
	import { theme as t } from '$lib/stores/themeStore';
	import { browser as b } from '$app/environment';

	if (b) {
		const savedTheme = localStorage.getItem('theme') || 'abyss';
		document.documentElement.setAttribute('data-theme', savedTheme);
		t.set(savedTheme);
	}
</script>

<script lang="ts">
	import { theme, availableThemes } from '$lib/stores/themeStore';
	import { browser } from '$app/environment';

	let currentTheme = 'abyss';

	$: currentTheme = $theme;

	function setTheme(newTheme: string) {
		currentTheme = newTheme;
		document.documentElement.setAttribute('data-theme', newTheme);
		if (browser) {
			localStorage.setItem('theme', newTheme);
		}
		theme.set(newTheme);
	}
</script>

<div class="dropdown">
	<div
		tabindex="0"
		role="button"
		class="btn btn-lg btn-ghost gap-2 px-3 text-base"
		aria-label="Change Theme"
		title="Change Theme"
	>
		<div class="bg-base-100 grid shrink-0 grid-cols-2 gap-1 rounded-md p-2 transition-colors">
			<div class="bg-base-content size-2 rounded-full"></div>
			<div class="bg-primary size-2 rounded-full"></div>
			<div class="bg-secondary size-2 rounded-full"></div>
			<div class="bg-accent size-2 rounded-full"></div>
		</div>
		<svg
			width="20px"
			height="20px"
			class="mt-px hidden size-3 fill-current opacity-60 sm:inline-block"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 2048 2048"
		>
			<path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
		</svg>
	</div>
	<div
		class="dropdown-content bg-base-200 rounded-box w-72 p-4 shadow-lg max-h-[calc(100vh-12rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-base-content scrollbar-track-base-100"
	>
		<ul class="flex flex-col items-center">
			{#each $availableThemes as t}
				<li class="w-full">
					<button
						class="btn py-1 btn-md btn-ghost w-full text-end hover:bg-base-100/20"
						on:click={() => setTheme(t)}
					>
						<span class="font-[sans-serif] text-base-content">{t}</span>
					</button>
				</li>
			{/each}
		</ul>
	</div>
</div>
