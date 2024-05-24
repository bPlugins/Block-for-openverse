import { useEffect, useState } from 'react';

import { __ } from '@wordpress/i18n';
import { dummyImage, searchIcon, selectedIcon } from '../utils/icons';
import { getSearchContent } from '../utils/functions';
import OpenverseFullIcon from './OpenverseFullIcon';
import Modal from './Modal';
import SearchField from './SearchField';
import Layout from '../Layout';

export const Form = ({ attributes, setAttributes, accessToken, getSearchMedia, type, setType, setSearchValue, searchValue, content, setContent, pageNumber, setPageNumber, emailVeri, modal, setModal, setLicenses, licenses, licensesType, setLicensesType, categories, setCategories, extension, setExtension, imageSize, setImageSize, imageRatio, setImageRatio, source, setSource, loading }) => {

    const [nextPLoading, setNextPLoading] = useState(false);
    const { mediaData } = attributes;

    const handleClick = async () => {
        setPageNumber(prevPageCount => prevPageCount + 1);
        setNextPLoading(true);
        const searchResult = await getSearchContent(accessToken, type, licenses, licensesType, categories, extension, imageSize, imageRatio, source, searchValue, pageNumber + 1);

        setContent(searchResult?.data?.results);
        setContent([...content, ...searchResult?.data?.results]);
        setNextPLoading(false);
    };

    const modalProps = {
        content, pageNumber, setAttributes, mediaData, modal, setModal, handleClick, getSearchMedia, searchValue, setSearchValue, type, setType, setLicenses, licenses, licensesType, setLicensesType, categories, setCategories, extension, setExtension, imageSize, setImageSize, imageRatio, setImageRatio, source, setSource, loading, nextPLoading
    }

    return <> <div className='searchForm'>
        <OpenverseFullIcon />
        {emailVeri && <div className='bpovnotice verifyNotice'>Check your email for a <span>verification link*</span> </div>}
        <SearchField getSearchMedia={getSearchMedia} searchValue={searchValue} setSearchValue={setSearchValue} type={type} setType={setType} setCategories={setCategories} setExtension={setExtension} />
        <div className="subTitle">
            <p>All Openverse content is under a <a href='https://creativecommons.org/licenses/'>Creative Commons license</a> or is in the public domain.</p>
        </div>
    </div>

        {modal && <Modal {...modalProps} />}

        <Layout attributes={attributes} />
    </>
}
export default Form;