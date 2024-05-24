import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { InspectorControls, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TabPanel, TextControl, ToggleControl, SelectControl, CheckboxControl, RadioControl, RangeControl, __experimentalUnitControl as UnitControl, __experimentalNumberControl as NumberControl, Button, Dashicon, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import produce from 'immer';

// Settings Components
import { Label, Background, BColor, BDevice, BorderControl, BtnGroup, ColorsControl, IconControl, InlineDetailMediaUpload, MultiShadowControl, SeparatorControl, SpaceControl, Typography } from '../../Components';
import { gearIcon } from '../../Components/utils/icons';
import { tabController } from '../../Components/utils/functions';
import { emUnit, perUnit, pxUnit } from '../../Components/utils/options';

import { generalStyleTabs, layouts } from './utils/options';

const Settings = ({ attributes, setAttributes, updateItem, activeIndex, setActiveIndex }) => {

	const [device, setDevice] = useState('desktop');
	const { columns, columnGap, rowGap, imgBorder, titleTypo, titleColor, creatorTypo, creatorColor, licensesTypo, licensesColor, items, audio } = attributes;

	return <>
		<InspectorControls>
			<TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}>{tab => <>
				{'general' === tab.name && <>

					<PanelBody className='bPlPanelBody bpovPanelBody' title={__('Elements', 'block-for-openverse')} initialOpen={false}>
						<ToggleControl className='mt10' label={__('Title', 'block-for-openverse')} checked={items?.isTitle} onChange={(val) => setAttributes({ items: { ...items, isTitle: val } })} />

						<ToggleControl className='mt10' label={__('Creator', 'block-for-openverse')} checked={items?.isCreator} onChange={(val) => setAttributes({ items: { ...items, isCreator: val } })} />

						<ToggleControl className='mt10' label={__('Licenses Type', 'block-for-openverse')} checked={items?.isLicenses} onChange={(val) => setAttributes({ items: { ...items, isLicenses: val } })} />
					</PanelBody>

					<PanelBody className='bPlPanelBody bpovPanelBody' title={__('Layout', 'block-for-openverse')} initialOpen={false}>

						<PanelRow>
							<Label mt='0'>{__('Columns:', 'yt-video-gallery')}</Label>
							<BDevice device={device} onChange={val => setDevice(val)} />
						</PanelRow>

						<RangeControl value={columns[device]} onChange={val => { setAttributes({ columns: { ...columns, [device]: val } }) }} min={1} max={6} step={1} beforeIcon='grid-view' />

						<UnitControl className='mt20' label={__('Column Gap:', 'yt-video-gallery')} labelPosition='left' value={columnGap} onChange={val => setAttributes({ columnGap: val })} units={[pxUnit(30), perUnit(3), emUnit(2)]} isResetValueOnUnitChange={true} />

						<UnitControl className='mt20' label={__('Row Gap:', 'yt-video-gallery')} labelPosition='left' value={rowGap} onChange={val => setAttributes({ rowGap: val })} units={[pxUnit(40), perUnit(3), emUnit(2.5)]} isResetValueOnUnitChange={true} />
					</PanelBody>
				</>}


				{'style' === tab.name && <>
					<PanelBody className='bPlPanelBody' title={__('Image', 'block-for-openverse')} initialOpen={false}>
						<BorderControl label={__('Border', 'block-for-openverse')} value={imgBorder} onChange={(val) => setAttributes({ imgBorder: val })} />
					</PanelBody>

					<PanelBody className='' title={__('Title', 'block-for-openverse')} initialOpen={false}>

						<Typography className='' label={__('Typography', 'block-for-openverse')} value={titleTypo} onChange={(val) => { setAttributes({ titleTypo: val }) }} produce={produce} />

						<BColor className='' label={__('Color', 'block-for-openverse')} value={titleColor} onChange={(val) => setAttributes({ titleColor: val })} />

					</PanelBody>

					<PanelBody className='' title={__('Creator', 'block-for-openverse')} initialOpen={false}>
						<Typography className='' label={__('Typography', 'block-for-openverse')} value={creatorTypo} onChange={(val) => { setAttributes({ creatorTypo: val }) }} produce={produce} />

						<BColor className='' label={__('Color', 'block-for-openverse')} value={creatorColor} onChange={(val) => setAttributes({ creatorColor: val })} />
					</PanelBody>

					<PanelBody className='' title={__('Licenses', 'block-for-openverse')} initialOpen={false} >
						<Typography className='' label={__('Typography', 'block-for-openverse')} value={licensesTypo} onChange={(val) => { setAttributes({ licensesTypo: val }) }} produce={produce} />

						<BColor className='' label={__('Color', 'block-for-openverse')} value={licensesColor} onChange={(val) => setAttributes({ licensesColor: val })} />
					</PanelBody>

					<PanelBody className='' title={__('Width', 'block-for-openverse')} initialOpen={false}>
						<UnitControl label={__('Left Side')} labelPosition='side' value={audio?.leftWidth} units={[perUnit(50)]} onChange={(val) => setAttributes({ audio: { ...audio, leftWidth: val } })} isResetValueOnUnitChange={true} />
					</PanelBody>
				</>}
			</>}</TabPanel>
		</InspectorControls>
	</>;
};
export default Settings;