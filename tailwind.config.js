module.exports = {
	content: ['./src/**/*.{html,js,svelte}'],
	// other stuff...
	daisyui: {
		themes: [
			'cupcake',
			'dark',
			'light',
			'forest',
			'synthwave',
			'retro',
			'cyberpunk',
			'valentine'
		]
	},
	plugins: [require('daisyui')]
};
