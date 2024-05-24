import { __experimentalInputControl as InputControl, SelectControl } from '@wordpress/components';
import { searchIcon } from '../utils/icons';
import { catOpt } from '../utils/options';

const SearchField = ({ getSearchMedia, searchValue, setSearchValue, type, setType, setCategories, setExtension }) => {
    return <div className='inputFields modalInputFields'>
        <InputControl value={searchValue} onChange={(val) => setSearchValue(val)} />
        <SelectControl value={type} options={catOpt} onChange={(val) => {
            setType(val);
            setCategories([]);
            setExtension([]);
        }} __nextHasNoMarginBottom
        />
        <div className="searchBtn" onClick={getSearchMedia}>{searchIcon}</div>
    </div>
}
export default SearchField;