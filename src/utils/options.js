import { __ } from '@wordpress/i18n';

import { verticalLineIcon, horizontalLineIcon } from './icons';

export const catOpt = [
	{ label: __('Image', 'block-for-openverse'), value: 'images', },
	{ label: __('Audio', 'block-for-openverse'), value: 'audio' }
];

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'block-for-openverse') },
	{ name: 'style', title: __('Style', 'block-for-openverse') }
];