// The gear the program supports (from its input/output plugins) and what
// has been tested. To add a report: give the item `tested: 'name'` (the
// person, or their GitHub user, if they said we may credit them).
import type { Dict } from '../i18n';

type Notes = keyof Dict['hardware']['notes'];
type Names = keyof Dict['hardware']['names'];

export interface Gear {
	/** brand and model, as the maker writes them */
	name?: string;
	/** or a translated name (generic entries) */
	nameKey?: Names;
	note: Notes;
	/** who tested it and found it works */
	tested?: string;
}

export const hardware: { category: keyof Dict['hardware']['categories']; items: Gear[] }[] = [
	{
		category: 'usb',
		items: [
			{ name: 'Enttec Open DMX USB', note: 'openFamily' },
			{ name: 'Enttec DMX USB Pro', note: 'outIn' },
			{ name: 'Enttec DMX USB Pro Mk2', note: 'out2In' },
			{ name: 'DMXKing ultraDMX (Micro, Pro, RDM Pro)', note: 'ultra' },
			{ name: 'Eurolite USB-DMX512 PRO', note: 'out' },
			{ name: 'DMX4ALL (NanoDMX, Stageprofi)', note: 'out' },
			{ name: 'Peperoni (Rodin 1, Rodin 2, Rodin T, X-Switch, USBDMX21)', note: 'out' },
			{ name: 'uDMX', note: 'out' },
			{ name: 'Vince USB-DMX512', note: 'out' },
			{ name: 'FTDI USB COM485 Plus1', note: 'out' },
		],
	},
	{
		category: 'network',
		items: [
			{ name: 'Art-Net', note: 'network' },
			{ name: 'sACN (E1.31)', note: 'network' },
		],
	},
	{
		category: 'controllers',
		items: [
			{ name: 'Akai APC mini', note: 'template' },
			{ name: 'Akai APC mini mk2', note: 'template' },
			{ name: 'Akai APC40 mkII', note: 'template40' },
			{ nameKey: 'midi', note: 'midi' },
			{ nameKey: 'osc', note: 'osc' },
			{ nameKey: 'dmxIn', note: 'dmxIn' },
			{ nameKey: 'keyboard', note: 'keyboard' },
		],
	},
	{
		category: 'mobile',
		items: [{ nameKey: 'remote', note: 'remote' }],
	},
];
