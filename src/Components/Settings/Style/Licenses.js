import { PanelBody } from '@wordpress/components';
import { BColor, Typography } from '../../../../../Components';
import { __ } from '@wordpress/i18n';

const Licenses = ({ setAttributes, produce, licensesTypo, licensesColor }) => {

    return <PanelBody className='' title={__('Licenses', 'block-for-openverse')} initialOpen={false} >

        <Typography className='' label={__('Typography', 'block-for-openverse')} value={licensesTypo} onChange={(val) => { setAttributes({ licensesTypo: val }) }} produce={produce} />

        <BColor className='' label={__('Color', 'block-for-openverse')} value={licensesColor} onChange={(val) => setAttributes({ licensesColor: val })} />
    </PanelBody>
}
export default Licenses;