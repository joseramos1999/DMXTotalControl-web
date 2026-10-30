import type { StarlightIcon } from '@astrojs/starlight/types';
import type { Segment } from '../i18n';
import type { Shot } from './shots';

/** The icon and the screenshot of each audience (the texts are in the dictionaries) */
export const segmentLook: Record<Segment, { icon: StarlightIcon; shot: Shot }> = {
	djs: { icon: 'star', shot: 'live' },
	bands: { icon: 'rocket', shot: 'scenes' },
	theatre: { icon: 'heart', shot: 'playbacks' },
	schools: { icon: 'open-book', shot: 'fx' },
	venues: { icon: 'puzzle', shot: 'show' },
};
