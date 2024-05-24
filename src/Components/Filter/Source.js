import { __ } from '@wordpress/i18n';
import Field from '../Elements/Field';

const Source = ({ source, setSource }) => {

    const toggleSource = (creation) => {
        if (source.includes(creation)) {
            setSource(source?.filter(item => item !== creation));
        }
        else {
            setSource([...source, creation]);
        }
    }

    const fieldProps = { values: source, toggleValue: toggleSource }

    return <div className="licenses">
        <h3>{__('Source', 'block-for-openverse')}</h3>

        <div className="list">
            <div className="single">
                <Field label={__('Freesound', 'block-for-openverse')} value='freesound' {...fieldProps} />
            </div>
            <div className="single">
                <Field label={__('Jamendo', 'block-for-openverse')} value='jamendo' {...fieldProps} />
            </div>
            <div className="single">
                <Field label={__('Wikimedia Commons', 'block-for-openverse')} value='wikimedia_audio' {...fieldProps} />
            </div>
        </div>

    </div>
}
export default Source;