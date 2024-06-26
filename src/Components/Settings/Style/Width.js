import { __ } from '@wordpress/i18n';
import { PanelBody, __experimentalUnitControl as UnitControl, } from '@wordpress/components';
import { perUnit } from '../../../../../Components/utils/options';

const Width = ({ setAttributes, audio }) => {
    const { leftWidth } = audio;
    return <PanelBody className='' title={__('Width', 'block-for-openverse')} initialOpen={false}>
        <UnitControl label={__('Left Side')} labelPosition='side' value={leftWidth} units={[perUnit(50)]} onChange={(val) => setAttributes({ audio: { ...audio, leftWidth: val } })} isResetValueOnUnitChange={true} />
    </PanelBody>
}
export default Width;