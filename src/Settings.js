import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { InspectorControls, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TabPanel, TextControl, ToggleControl, SelectControl, CheckboxControl, RadioControl, RangeControl, __experimentalUnitControl as UnitControl, __experimentalNumberControl as NumberControl, Button, Dashicon, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { produce } from 'immer';

// Settings Components
import { Label, Background, BColor, BDevice, BorderControl, BtnGroup, ColorsControl, IconControl, InlineDetailMediaUpload, MultiShadowControl, SeparatorControl, SpaceControl, Typography } from '../../Components';
import { gearIcon } from '../../Components/utils/icons';
import { tabController } from '../../Components/utils/functions';
import { emUnit, perUnit, pxUnit } from '../../Components/utils/options';

import { generalStyleTabs, layouts } from './utils/options';
import Elements from './Components/Settings/General/Elements';
import Layout from './Components/Settings/General/Layout';
import Image from './Components/Settings/Style/Image';
import Title from './Components/Settings/Style/Title';
import Creator from './Components/Settings/Style/Creator';
import Licenses from './Components/Settings/Style/Licenses';
import Width from './Components/Settings/Style/Width';

import MediaItems from './Components/Settings/General/MediaItems';

const Settings = ({ attributes, setAttributes, updateItem, activeIndex, setActiveIndex }) => {

	const [device, setDevice] = useState('desktop');
	const { columns, columnGap, rowGap, imgBorder, titleTypo, titleColor, creatorTypo, creatorColor, licensesTypo, licensesColor, items, audio, mediaData } = attributes;
	console.log(mediaData);
	return <>
		<InspectorControls>
			<TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}>{tab => <>
				{'general' === tab.name && <>

					<Elements items={items} setAttributes={setAttributes} />
					<MediaItems items={mediaData} setAttributes={setAttributes} produce={produce} />
					<Layout setAttributes={setAttributes} device={device} setDevice={setDevice} columns={columns} columnGap={columnGap} rowGap={rowGap} />
				</>}


				{'style' === tab.name && <>
					<Image setAttributes={setAttributes} imgBorder={imgBorder} />
					<Title setAttributes={setAttributes} titleTypo={titleTypo} titleColor={titleColor} produce={produce} />
					<Creator setAttributes={setAttributes} creatorTypo={creatorTypo} creatorColor={creatorColor} produce={produce} />
					<Licenses setAttributes={setAttributes} licensesTypo={licensesTypo} licensesColor={licensesColor} produce={produce} />
					<Width setAttributes={setAttributes} audio={audio} />

				</>}
			</>}</TabPanel>
		</InspectorControls>
	</>;
};
export default Settings;