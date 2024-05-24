
import Category from './Filter/Category';
import Extension from './Filter/Extension';
import ImageRation from './Filter/ImageRatio';
import ImageSize from './Filter/ImageSize';
import LicensesFilter from './Filter/LicensesFilter';
import LicensesType from './Filter/LicensesType';
import Source from './Filter/Source';

const Right = ({ licenses, setLicenses, licensesType, setLicensesType, type, categories, setCategories, extension, setExtension, imageSize, setImageSize, imageRatio, setImageRatio, source, setSource }) => {

    return <div className="right">
        <div className="filter">
            <h2>Filter By</h2>
            <LicensesType licensesType={licensesType} setLicensesType={setLicensesType} />
            <LicensesFilter licenses={licenses} setLicenses={setLicenses} />
            <Category categories={categories} setCategories={setCategories} type={type} />
            <Extension ext={extension} setExtension={setExtension} type={type} />
            {type === 'images' && <ImageSize imageSize={imageSize} setImageSize={setImageSize} />}
            {type === 'images' && <ImageRation imageRatio={imageRatio} setImageRatio={setImageRatio} />}
            {type === 'audio' && <Source source={source} setSource={setSource} />}
        </div>
    </div>
}
export default Right;