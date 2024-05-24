import { __ } from '@wordpress/i18n';
import Field from '../Elements/Field';

const Category = ({ categories = [], setCategories, type }) => {
    const toggleCategory = (category) => {
        if (categories.includes(category)) {
            setCategories(categories?.filter(item => item !== category));
        }
        else {
            setCategories([...categories, category]);
        }
    }

    const fieldProps = { values: categories, toggleValue: toggleCategory }

    return <div className="licenses">
        {type === "images" ? <h3>Image Type</h3> : <h3>Audio Category</h3>}

        <div className="list">
            <div className="single">
                {type === 'images' ? <Field label={__('Photograph', 'block-for-openverse')} value='photograph' {...fieldProps} /> : <Field label={__('Audiobook', 'block-for-openverse')} value='audiobook' {...fieldProps} />}
            </div>
            <div className="single">
                {type === 'images' ? <Field label={__('Illustrations', 'block-for-openverse')} value='illustration' {...fieldProps} /> : <Field label={__('Music', 'block-for-openverse')} value='music' {...fieldProps} />}
            </div>
            <div className="single">
                {type === 'images' ? <Field label={__('Digitized Artworks', 'block-for-openverse')} value='digitized_artwork' {...fieldProps} /> : <Field label={__('News', 'block-for-openverse')} value='news' {...fieldProps} />}
            </div>
        </div>
    </div>
}
export default Category;

