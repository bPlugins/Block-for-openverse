
import { PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Elements = ({ items, setAttributes }) => {
    const { isTitle, isCreator, isLicenses } = items;

    return <PanelBody className='bPlPanelBody bpovPanelBody' title={__('Elements', 'block-for-openverse')} initialOpen={false}>
        <ToggleControl className='mt10' label={__('Title', 'block-for-openverse')} checked={isTitle} onChange={(val) => setAttributes({ items: { ...items, isTitle: val } })} />

        <ToggleControl className='mt10' label={__('Creator', 'block-for-openverse')} checked={isCreator} onChange={(val) => setAttributes({ items: { ...items, isCreator: val } })} />

        <ToggleControl className='mt10' label={__('Licenses Type', 'block-for-openverse')} checked={isLicenses} onChange={(val) => setAttributes({ items: { ...items, isLicenses: val } })} />
    </PanelBody>
}
export default Elements;