// The latest Release of the program, written by scripts/sync-app.mjs from the
// GitHub API (and kept in the repository for builds without network).
import data from './release.json';

export interface Release {
	version: string;
	tag: string;
	date: string;
	url: string;
	installer: { name: string; size: number; url: string; sha256: string | null };
	releases: { tag: string; date: string; prerelease: boolean }[];
}

export const release: Release = data;
export const RELEASES_URL = 'https://github.com/joseramos1999/DMXTotalControl/releases';
