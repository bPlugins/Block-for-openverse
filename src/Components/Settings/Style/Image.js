import { PanelBody } from '@wordpress/components';
import { BorderControl } from '../../../../../Components';
import { __ } from '@wordpress/i18n';

const Image = ({ setAttributes, imgBorder }) => {
    return <PanelBody className='bPlPanelBody' title={__('Image', 'block-for-openverse')} initialOpen={false}>
        <BorderControl label={__('Border', 'block-for-openverse')} value={imgBorder} onChange={(val) => setAttributes({ imgBorder: val })} />
    </PanelBody>
}
export default Image;