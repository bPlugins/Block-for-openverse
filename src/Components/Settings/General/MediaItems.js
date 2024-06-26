import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl } from '@wordpress/components';

const MediaItems = ({ items, produce, setAttributes }) => {
    console.log(items);

    const updateItem = (type, index, val, childType = false) => {
        const newItem = produce(items, draft => {
            if (childType) {
                draft[index][type][childType] = val;
            } else {
                draft[index][type] = val;
            }
        });
        setAttributes({ mediaData: newItem });
    }

    return <PanelBody className='bPlPanelBody bpovPanelBody' title={__('Items', 'block-for-openverse')} initialOpen={false}>

        {items?.map((media, index) => {
            const { imageHyperLink, titleHyperLink, } = media;
            return <PanelBody key={index} className='bPlPanelBody' title={__(`Item-${index + 1}`, 'block-for-openverse')} initialOpen={false} >
                <TextControl label={__('Image Hyper Link', 'block-for-openverse')} value={imageHyperLink} onChange={val => updateItem('imageHyperLink', index, val)} />

                <TextControl label={__('Title Hyper Link', 'block-for-openverse')} value={titleHyperLink} onChange={val => updateItem('titleHyperLink', index, val)} />
            </PanelBody>
        })}
    </PanelBody>
}
export default MediaItems;