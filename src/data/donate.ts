// Where donations go. A platform with an empty url is left out of the page,
// and while none has one the page says donations open soon and the header,
// the footer and the home page don't link to it.

export type Platform = 'kofi' | 'github' | 'paypal' | 'liberapay';

export const PLATFORMS: { id: Platform; name: string; url: string }[] = [
	{ id: 'kofi', name: 'Ko-fi', url: 'https://ko-fi.com/dmxtotalcontrol' },
	{ id: 'github', name: 'GitHub Sponsors', url: '' },
	{ id: 'paypal', name: 'PayPal', url: '' },
	{ id: 'liberapay', name: 'Liberapay', url: '' },
];

export const DONATIONS = PLATFORMS.filter((p) => p.url);
export const DONATIONS_OPEN = DONATIONS.length > 0;
