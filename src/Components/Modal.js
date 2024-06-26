import { CheckboxControl } from '@wordpress/components';

import { audio, authorLoading, closeIcon, dummyImage, licenses_cc, licenses_cc0, loadMore, selectedIcon } from '../utils/icons';
import SearchField from './SearchField';
import Right from './Right';
import { BY, BY_NC, BY_NC_ND, BY_NC_SA, BY_ND, BY_SA, CC0, PUBLIC_DOMAIN_MARK } from './Filter/LicensesTypeIcon.js/All_licensesIcon';
import { licensesTypeFIter } from '../utils/functions';

const Modal = ({ content, pageNumber, setAttributes, mediaData, handleClick, modal, setModal, getSearchMedia, searchValue, setSearchValue, type, setType, setLicenses, licenses, licensesType, setLicensesType, categories, setCategories, extension, setExtension, imageSize, setImageSize, imageRatio, setImageRatio, source, setSource, loading, nextPLoading }) => {

    const selectItem = (item) => {
        setAttributes({ mediaData: [...mediaData, { ...item, imageHyperLink: '', titleHyperLink: '', }] });
    }

    const removeItem = (id) => {
        setAttributes({ mediaData: mediaData.filter(i => i.id !== id) });
    }

    const rightSideProps = { licenses, setLicenses, licensesType, setLicensesType, type, categories, setCategories, extension, setExtension, imageSize, setImageSize, imageRatio, setImageRatio, source, setSource }

    return (
        <div className='modalMainArea'>
            <div className='childArea'>
                <div className='header'>
                    <h3>Select Media</h3>
                    <div className="closeIcon" onClick={() => setModal(false)}>
                        {closeIcon}
                    </div>
                </div>
                <SearchField getSearchMedia={getSearchMedia} searchValue={searchValue} setSearchValue={setSearchValue} type={type} setType={setType} setCategories={setCategories} setExtension={setExtension} />

                <div className='twoSideArea'>
                    {loading ? <div className='loadMorePre'>{loadMore}</div> :
                        <div className=''>{content?.length > 0 ? (
                            <div className='left'>
                                <div className="bpovMainArea">
                                    {content.map((item, index) => (
                                        <div key={index} className='single-item'>
                                            {item?.waveform ? <div className='audioIcon'>{audio}</div> : ''}
                                            <div className="img">
                                                {item?.thumbnail ? <img src={item?.thumbnail} /> : <div className='dummyImage'>{dummyImage}</div>}
                                            </div>
                                            <div className="overly">
                                                {mediaData.find(mediaItem => mediaItem.id === item.id) ? (
                                                    <div className="correctIcon removeIcon" onClick={() => removeItem(item?.id)}>{closeIcon}</div>
                                                ) : (
                                                    <div className="correctIcon" onClick={() => selectItem(item)}>{selectedIcon}</div>
                                                )}

                                                {
                                                    licensesTypeFIter(item?.license, false)
                                                }
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {nextPLoading && <div className='loadMorePre'>{loadMore}</div>}
                                {nextPLoading ? <div className='authorLoading'>Loading....</div> : <>{(pageNumber < 20 && 20 <= content?.length) && <div className='loadMoreBtn' onClick={handleClick}>
                                    Load More
                                </div>}</>}

                            </div>
                        ) : (
                            <h3>No media found</h3>
                        )}</div>
                    }
                    <Right {...rightSideProps} />
                </div>
                <div className='modalCloseBtn' onClick={() => setModal(false)}>
                    <h4>Ok</h4>
                </div>
            </div>
        </div>
    );
}

export default Modal;
