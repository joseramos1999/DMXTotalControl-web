import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n';

// Screenshots of the program taken with `dmxtotalcontrol.exe --grab` from the
// example shows (the English ones from copies with English names): see README.
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/shots/*/*.png', { eager: true });

export type Shot = 'live' | 'mixer' | 'show' | 'program' | 'fx' | 'scenes' | 'playbacks' | 'patch';

export function shot(lang: Lang, name: Shot): ImageMetadata {
	const file = files[`../assets/shots/${lang}/${name}.png`];
	if (!file) throw new Error(`Falta la captura ${lang}/${name}.png`);
	return file.default;
}
