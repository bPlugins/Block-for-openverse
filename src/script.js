import { createRoot } from 'react-dom/client';

import './style.scss';
import Style from './Style';
import Layout from './Layout';

// Block Directory
document.addEventListener('DOMContentLoaded', () => {
	const allOpenverseEles = document.querySelectorAll('.wp-block-bpov-block-for-openverse');
	allOpenverseEles.forEach(openverse => {
		const attributes = JSON.parse(openverse.dataset.attributes);

		createRoot(openverse).render(<>
			<Style attributes={attributes} clientId={attributes.cId} />
			<Layout attributes={attributes} clientId={attributes.cId} />
		</>);

		openverse?.removeAttribute('data-attributes');
	});
});

