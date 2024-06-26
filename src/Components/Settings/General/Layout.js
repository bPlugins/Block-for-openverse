import { PanelBody, RangeControl, __experimentalUnitControl as UnitControl, } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { BDevice, Label } from '../../../../../Components';
import { emUnit, perUnit, pxUnit } from '../../../../../Components/utils/options';
import { PanelRow } from '@wordpress/components';

const Layout = ({ setAttributes, device, setDevice, columns, columnGap, rowGap, }) => {
    return <PanelBody className='bPlPanelBody bpovPanelBody' title={__('Layout', 'block-for-openverse')} initialOpen={false}>

        <PanelRow>
            <Label mt='0'>{__('Columns:', 'yt-video-gallery')}</Label>
            <BDevice device={device} onChange={val => setDevice(val)} />
        </PanelRow>

        <RangeControl value={columns[device]} onChange={val => { setAttributes({ columns: { ...columns, [device]: val } }) }} min={1} max={6} step={1} beforeIcon='grid-view' />

        <UnitControl className='mt20' label={__('Column Gap:', 'yt-video-gallery')} labelPosition='left' value={columnGap} onChange={val => setAttributes({ columnGap: val })} units={[pxUnit(30), perUnit(3), emUnit(2)]} isResetValueOnUnitChange={true} />

        <UnitControl className='mt20' label={__('Row Gap:', 'yt-video-gallery')} labelPosition='left' value={rowGap} onChange={val => setAttributes({ rowGap: val })} units={[pxUnit(40), perUnit(3), emUnit(2.5)]} isResetValueOnUnitChange={true} />
    </PanelBody>
}
export default Layout;