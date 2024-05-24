import { __ } from '@wordpress/i18n';
import Field from '../Elements/Field';

const Extension = ({ ext, setExtension, type }) => {

    const toggleImageExt = (extension) => {
        if (ext.includes(extension)) {
            setExtension(ext.filter(item => item !== extension));
        } else {
            setExtension([...ext, extension]);
        }
    };
    const fieldProps = { values: ext, toggleValue: toggleImageExt }

    return <div className="licenses">
        <h3>Extension</h3>
        <div className="list">
            <div className="single">
                {type === 'images' ? <Field label={__('jpeg', 'block-for-openverse')} value='jpg' {...fieldProps} /> : <Field label={__('FLAC', 'block-for-openverse')} value='flac' {...fieldProps} />}
            </div>

            <div className="single">
                {type === 'images' ? <Field label={__('png', 'block-for-openverse')} value='png' {...fieldProps} /> : <Field label={__('mid', 'block-for-openverse')} value='mid' {...fieldProps} />}
            </div>

            <div className="single">
                {type === 'images' ? <Field label={__('gif', 'block-for-openverse')} value='gif' {...fieldProps} /> : <Field label={__('mp3', 'block-for-openverse')} value='mp3' {...fieldProps} />}
            </div>

            <div className="single">
                {type === 'images' ? <Field label={__('svg', 'block-for-openverse')} value='svg' {...fieldProps} /> : <Field label={__('oga', 'block-for-openverse')} value='oga' {...fieldProps} />}
            </div>
            {type === 'audio' && <div className="single"><Field label={__('ogg', 'block-for-openverse')} value='ogg' {...fieldProps} /></div>}
            {type === 'audio' && <div className="single"><Field label={__('opus', 'block-for-openverse')} value='opus' {...fieldProps} /></div>}
            {type === 'audio' && <div className="single"><Field label={__('wav', 'block-for-openverse')} value='wav' {...fieldProps} /></div>}
            {type === 'audio' && <div className="single"><Field label={__('webm', 'block-for-openverse')} value='webm' {...fieldProps} /></div>}

        </div>
    </div>
}
export default Extension;