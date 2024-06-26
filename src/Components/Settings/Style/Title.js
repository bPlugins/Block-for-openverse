import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { BColor, Typography } from '../../../../../Components';

const Title = ({ setAttributes, produce, titleTypo, titleColor }) => {

    return <PanelBody className='' title={__('Title', 'block-for-openverse')} initialOpen={false}>

        <Typography className='' label={__('Typography', 'block-for-openverse')} value={titleTypo} onChange={(val) => { setAttributes({ titleTypo: val }) }} produce={produce} />

        <BColor className='' label={__('Color', 'block-for-openverse')} value={titleColor} onChange={(val) => setAttributes({ titleColor: val })} />

    </PanelBody>
}
export default Title;