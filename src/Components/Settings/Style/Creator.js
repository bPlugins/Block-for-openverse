import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { BColor, Typography } from '../../../../../Components';

const Creator = ({ setAttributes, creatorTypo, creatorColor, produce }) => {
    return <PanelBody className='' title={__('Creator', 'block-for-openverse')} initialOpen={false}>
        <Typography className='' label={__('Typography', 'block-for-openverse')} value={creatorTypo} onChange={(val) => { setAttributes({ creatorTypo: val }) }} produce={produce} />

        <BColor className='' label={__('Color', 'block-for-openverse')} value={creatorColor} onChange={(val) => setAttributes({ creatorColor: val })} />
    </PanelBody>
}
export default Creator;