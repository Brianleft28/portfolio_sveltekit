import { writable, type Writable } from 'svelte/store';

export const showNavbar: Writable<boolean> = writable(true);
export type Lang = 'ES' | 'EN' | 'FR' | 'DE' | 'JP';

export const lang: Writable<Lang> = writable<Lang>('ES');
