import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const availableThemes: Writable<
	(
		| 'light'
		| 'dark'
		| 'cupcake'
		| 'bumblebee'
		| 'emerald'
		| 'corporate'
		| 'synthwave'
		| 'retro'
		| 'cyberpunk'
		| 'valentine'
		| 'halloween'
		| 'garden'
		| 'forest'
		| 'aqua'
		| 'lofi'
		| 'pastel'
		| 'fantasy'
		| 'black'
		| 'luxury'
		| 'dracula'
		| 'cmyk'
		| 'autumn'
		| 'business'
		| 'acid'
		| 'lemonade'
		| 'night'
		| 'coffee'
		| 'winter'
		| 'silk'
		| 'abyss'
		| 'caramellatte'
		| 'valentine'
		| 'dim'
	)[]
> = writable([
	'light',
	'dark',
	'cupcake',
	'bumblebee',
	'emerald',
	'corporate',
	'synthwave',
	'retro',
	'cyberpunk',
	'valentine',
	'halloween',
	'garden',
	'forest',
	'aqua',
	'lofi',
	'pastel',
	'fantasy',
	'black',
	'luxury',
	'dracula',
	'cmyk',
	'autumn',
	'dim',
	'business',
	'acid',
	'lemonade',
	'night',
	'coffee',
	'winter',
	'silk',
	'abyss',
	'caramellatte',
	'valentine'
]);

export const theme = writable('abyss'); // Tema predeterminado
